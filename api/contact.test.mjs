import test from 'node:test'
import assert from 'node:assert/strict'

import handler from './contact.js'

const originalFetch = globalThis.fetch
const originalEnvironment = {
  apiKey: process.env.BREVO_API_KEY,
  senderEmail: process.env.BREVO_SENDER_EMAIL,
  vercel: process.env.VERCEL,
}

function createResponse() {
  return {
    statusCode: null,
    headers: {},
    body: null,
    status(code) {
      this.statusCode = code
      return this
    },
    setHeader(name, value) {
      this.headers[name] = value
    },
    json(body) {
      this.body = body
      return this
    },
  }
}

function createRequest(body, ip = `test-${Math.random()}`) {
  return {
    method: 'POST',
    headers: { 'x-real-ip': ip },
    socket: { remoteAddress: ip },
    body,
  }
}

function validBody(overrides = {}) {
  return {
    name: 'Visitor',
    email: 'visitor@example.com',
    subject: 'Hello',
    message: 'A message\nwith a line break.',
    ...overrides,
  }
}

function configureEnvironment() {
  process.env.BREVO_API_KEY = 'test-key'
  process.env.BREVO_SENDER_EMAIL = 'sender@example.com'
  process.env.VERCEL = '1'
}

test.beforeEach(() => {
  configureEnvironment()
  globalThis.fetch = async () => new Response('', { status: 201 })
})

test.afterEach(() => {
  globalThis.fetch = originalFetch
  if (originalEnvironment.apiKey === undefined) delete process.env.BREVO_API_KEY
  else process.env.BREVO_API_KEY = originalEnvironment.apiKey
  if (originalEnvironment.senderEmail === undefined) delete process.env.BREVO_SENDER_EMAIL
  else process.env.BREVO_SENDER_EMAIL = originalEnvironment.senderEmail
  if (originalEnvironment.vercel === undefined) delete process.env.VERCEL
  else process.env.VERCEL = originalEnvironment.vercel
})

test('accepts a valid submission and escapes HTML', async () => {
  let requestBody
  globalThis.fetch = async (_url, options) => {
    requestBody = JSON.parse(options.body)
    return new Response('', { status: 201 })
  }

  const response = createResponse()
  await handler(createRequest(validBody({
    name: '<b>Visitor</b>',
    subject: 'A & B',
    message: 'One\n<script>alert(1)</script>',
  })), response)

  assert.equal(response.statusCode, 200)
  assert.match(requestBody.htmlContent, /&lt;b&gt;Visitor&lt;\/b&gt;/)
  assert.match(requestBody.htmlContent, /One<br \/>/)
  assert.doesNotMatch(requestBody.htmlContent, /<script>/)
})

test('rejects invalid fields and newline injection', async () => {
  for (const body of [
    { ...validBody(), email: 'invalid' },
    { ...validBody(), name: 'Name\nInjected' },
    { ...validBody(), subject: 'Subject\rInjected' },
    { ...validBody(), message: 'x'.repeat(5001) },
  ]) {
    const response = createResponse()
    await handler(createRequest(body), response)
    assert.equal(response.statusCode, 400)
  }
})

test('rejects missing credentials and invalid sender configuration safely', async () => {
  delete process.env.BREVO_API_KEY
  let response = createResponse()
  await handler(createRequest(validBody()), response)
  assert.equal(response.statusCode, 500)
  assert.deepEqual(response.body, {
    success: false,
    message: 'Unable to send message right now. Please try again later.',
  })

  configureEnvironment()
  process.env.BREVO_SENDER_EMAIL = 'not-an-email'
  response = createResponse()
  await handler(createRequest(validBody()), response)
  assert.equal(response.statusCode, 500)
})

test('maps provider errors and timeouts to safe responses', async () => {
  globalThis.fetch = async () => new Response('', { status: 429 })
  let response = createResponse()
  await handler(createRequest(validBody()), response)
  assert.equal(response.statusCode, 429)

  globalThis.fetch = async () => new Response('', { status: 503 })
  response = createResponse()
  await handler(createRequest(validBody()), response)
  assert.equal(response.statusCode, 502)

  globalThis.fetch = async () => {
    const error = new Error('provider internals')
    error.name = 'TimeoutError'
    throw error
  }
  response = createResponse()
  await handler(createRequest(validBody()), response)
  assert.equal(response.statusCode, 502)
  assert.doesNotMatch(response.body.message, /provider internals/)

  globalThis.fetch = async () => {
    throw new Error('internal provider implementation detail')
  }
  response = createResponse()
  await handler(createRequest(validBody()), response)
  assert.equal(response.statusCode, 502)
  assert.doesNotMatch(response.body.message, /internal provider implementation detail/)
})

test('enforces the per-instance defense-in-depth rate limit', async () => {
  const ip = 'rate-limit-test'

  for (let attempt = 0; attempt < 5; attempt += 1) {
    const response = createResponse()
    await handler(createRequest(validBody(), ip), response)
    assert.equal(response.statusCode, 200)
  }

  const response = createResponse()
  await handler(createRequest(validBody(), ip), response)
  assert.equal(response.statusCode, 429)
  assert.equal(response.headers['Retry-After'], '600')
})

test('rejects unsupported methods', async () => {
  const response = createResponse()
  await handler({ method: 'GET', headers: {} }, response)
  assert.equal(response.statusCode, 405)
})
