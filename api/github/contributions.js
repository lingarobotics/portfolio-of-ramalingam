const GITHUB_QUERY = `
  query($login: String!) {
    user(login: $login) {
      contributionsCollection {
        contributionCalendar {
          totalContributions
          colors
          weeks {
            contributionDays {
              contributionCount
              date
              weekday
            }
          }
        }
      }
    }
  }
`

function sendJson(res, statusCode, payload) {
  res.statusCode = statusCode
  res.setHeader('Content-Type', 'application/json')
  res.end(JSON.stringify(payload))
}

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', 'GET')
    return sendJson(res, 405, { error: 'Method not allowed' })
  }

  const username = req.query?.username || process.env.GITHUB_DEFAULT_USERNAME
  const token = process.env.GITHUB_TOKEN
  const githubApiUrl = process.env.GITHUB_API_URL || 'https://api.github.com/graphql'

  if (!username) {
    return sendJson(res, 400, { error: 'Missing username and GITHUB_DEFAULT_USERNAME' })
  }

  if (!token) {
    return sendJson(res, 500, { error: 'Missing GITHUB_TOKEN' })
  }

  try {
    const githubResponse = await fetch(githubApiUrl, {
      method: 'POST',
      headers: {
        Authorization: `bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: GITHUB_QUERY,
        variables: { login: username },
      }),
    })

    const payload = await githubResponse.json()

    if (!githubResponse.ok || payload.errors) {
      return sendJson(res, 400, {
        error: 'GitHub GraphQL request failed',
        details: payload.errors || payload,
      })
    }

    const calendar = payload?.data?.user?.contributionsCollection?.contributionCalendar

    if (!calendar) {
      return sendJson(res, 404, {
        error: 'Contribution calendar not found for this user',
      })
    }

    return sendJson(res, 200, {
      username,
      totalContributions: calendar.totalContributions,
      colors: calendar.colors,
      weeks: calendar.weeks,
      fetchedAt: new Date().toISOString(),
    })
  } catch (error) {
    return sendJson(res, 500, {
      error: 'Server error',
      details: error instanceof Error ? error.message : 'Unknown error',
    })
  }
}
