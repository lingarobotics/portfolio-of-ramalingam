import { randomUUID } from 'node:crypto'

const MAX_LENGTHS = {
  name: 100,
  email: 254,
  subject: 200,
  message: 5000,
}

const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000
const RATE_LIMIT_MAX_REQUESTS = 5
const BREVO_TIMEOUT_MS = 8000
const rateLimitStore = new Map()

function normalizeField(value, field) {
  if (typeof value !== 'string') {
    return null
  }

  const normalized = value.replace(/\r\n?/g, '\n').trim()
  return normalized && normalized.length <= MAX_LENGTHS[field] ? normalized : null
}

function escapeHtml(value) {
  return value.replace(
    /[&<>"']/g,
    (character) =>
      ({
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#39;',
      })[character]
  )
}

function escapeHtmlWithLineBreaks(value) {
  return escapeHtml(value).replace(/\n/g, '<br />')
}

function isValidEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) && !/[\r\n]/.test(value)
}

function isSingleLine(value) {
  return !/[\r\n]/.test(value)
}

function getHeader(req, name) {
  if (req.headers && typeof req.headers.get === 'function') {
    return req.headers.get(name) || ''
  }

  return req.headers?.[name] || req.headers?.[name.toLowerCase()] || ''
}

function getRequestId(req) {
  const requestId = getHeader(req, 'x-request-id').trim()
  return /^[A-Za-z0-9._:-]{1,100}$/.test(requestId) ? requestId : randomUUID()
}

function getClientKey(req) {
  if (process.env.VERCEL === '1') {
    const vercelIp = getHeader(req, 'x-real-ip').trim()
    if (vercelIp) {
      return `vercel:${vercelIp}`
    }
  }

  return `socket:${req.socket?.remoteAddress || 'unknown'}`
}

function isRateLimited(req, now = Date.now()) {
  if (rateLimitStore.size > 1000) {
    for (const [key, value] of rateLimitStore) {
      if (now - value.windowStartedAt >= RATE_LIMIT_WINDOW_MS) {
        rateLimitStore.delete(key)
      }
    }
  }

  const key = getClientKey(req)
  const existing = rateLimitStore.get(key)

  if (!existing || now - existing.windowStartedAt >= RATE_LIMIT_WINDOW_MS) {
    rateLimitStore.set(key, { count: 1, windowStartedAt: now })
    return false
  }

  if (existing.count >= RATE_LIMIT_MAX_REQUESTS) {
    return true
  }

  existing.count += 1
  return false
}

function isValidConfiguredEmail(value) {
  return (
    typeof value === 'string' &&
    value.length <= MAX_LENGTHS.email &&
    isSingleLine(value) &&
    isValidEmail(value)
  )
}

function createTimeoutSignal() {
  if (
    typeof AbortSignal !== 'undefined' &&
    typeof AbortSignal.timeout === 'function'
  ) {
    return {
      signal: AbortSignal.timeout(BREVO_TIMEOUT_MS),
      cleanup: () => {},
      wasTimedOut: () => false,
    }
  }

  const controller = new AbortController()
  let timedOut = false
  const timeout = setTimeout(() => {
    timedOut = true
    controller.abort()
  }, BREVO_TIMEOUT_MS)

  return {
    signal: controller.signal,
    cleanup: () => clearTimeout(timeout),
    wasTimedOut: () => timedOut,
  }
}

export default async function handler(req, res) {
  const requestId = getRequestId(req)

  if (req.method !== 'POST') {
    return res.status(405).json({
      success: false,
      message: 'Method not allowed',
    })
  }

  if (isRateLimited(req)) {
    res.setHeader?.('Retry-After', String(RATE_LIMIT_WINDOW_MS / 1000))
    console.warn('Contact API rate limit exceeded', {
      requestId,
      category: 'rate_limit',
    })
    return res.status(429).json({
      success: false,
      message: 'Too many requests. Please try again later.',
    })
  }

  try {
    const body = req.body && typeof req.body === 'object' ? req.body : {}
    const name = normalizeField(body.name, 'name')
    const email = normalizeField(body.email, 'email')
    const subject = normalizeField(body.subject, 'subject')
    const message = normalizeField(body.message, 'message')

    if (
      !name ||
      !email ||
      !subject ||
      !message ||
      !isValidEmail(email) ||
      !isSingleLine(name) ||
      !isSingleLine(subject)
    ) {
      return res.status(400).json({
        success: false,
        message: 'Please provide a valid name, email, subject, and message.',
      })
    }

    const senderEmail = process.env.BREVO_SENDER_EMAIL?.trim()

    if (!process.env.BREVO_API_KEY || !senderEmail) {
      console.error('Contact API configuration error', {
        requestId,
        category: 'missing_credentials',
      })
      return res.status(500).json({
        success: false,
        message: 'Unable to send message right now. Please try again later.',
      })
    }

    if (!isValidConfiguredEmail(senderEmail)) {
      console.error('Contact API configuration error', {
        requestId,
        category: 'invalid_sender_email',
      })
      return res.status(500).json({
        success: false,
        message: 'Unable to send message right now. Please try again later.',
      })
    }

    const timeout = createTimeoutSignal()
    let brevoResponse

    try {
      brevoResponse = await fetch('https://api.brevo.com/v3/smtp/email', {
        method: 'POST',
        signal: timeout.signal,
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          'api-key': process.env.BREVO_API_KEY,
        },
        body: JSON.stringify({
          sender: {
            name: 'Portfolio Contact Form',
            email: senderEmail,
          },

          to: [
            {
              email: 'contact@linga.engineer',
              name: 'Ramalingam',
            },
          ],

          replyTo: {
            email,
            name,
          },

          subject: `[Portfolio] ${subject}`,

          htmlContent: `
            <h2>New Portfolio Message</h2>

            <p><strong>Name:</strong> ${escapeHtml(name)}</p>
            <p><strong>Email:</strong> ${escapeHtml(email)}</p>
            <p><strong>Subject:</strong> ${escapeHtml(subject)}</p>

            <hr />

            <p>${escapeHtmlWithLineBreaks(message)}</p>
          `,
        }),
      })
    } catch (error) {
      const timedOut =
        timeout.wasTimedOut() ||
        error?.name === 'TimeoutError' ||
        error?.name === 'AbortError'
      console.error('Contact API provider request failed', {
        requestId,
        category: timedOut ? 'provider_timeout' : 'provider_request',
      })
      return res.status(502).json({
        success: false,
        message: 'Unable to send message right now. Please try again later.',
      })
    } finally {
      timeout.cleanup()
    }

    if (!brevoResponse.ok) {
      console.error('Brevo request failed', {
        requestId,
        category: 'provider_response',
        status: brevoResponse.status,
      })

      return res.status(brevoResponse.status === 429 ? 429 : 502).json({
        success: false,
        message:
          brevoResponse.status === 429
            ? 'Too many requests. Please try again later.'
            : 'Failed to send email. Please try again later.',
      })
    }

    return res.status(200).json({
      success: true,
      message: 'Message sent successfully',
    })
  } catch {
    console.error('Contact API request failed', {
      requestId,
      category: 'unexpected',
    })

    return res.status(500).json({
      success: false,
      message: 'Unable to send message right now. Please try again later.',
    })
  }
}