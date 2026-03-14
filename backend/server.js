import cors from 'cors'
import dotenv from 'dotenv'
import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const rootEnvPath = path.resolve(__dirname, '../.env.local')

dotenv.config({ path: rootEnvPath })

const app = express()

app.use(cors())

const HOST = process.env.HOST
const PORT = Number.parseInt(process.env.PORT || '', 10)
const GITHUB_API = process.env.GITHUB_API_URL
const DEFAULT_USERNAME = process.env.GITHUB_DEFAULT_USERNAME

if (!HOST) {
  throw new Error('Missing HOST in .env.local')
}

if (Number.isNaN(PORT)) {
  throw new Error('Missing or invalid PORT in .env.local')
}

if (!GITHUB_API) {
  throw new Error('Missing GITHUB_API_URL in .env.local')
}

if (!DEFAULT_USERNAME) {
  throw new Error('Missing GITHUB_DEFAULT_USERNAME in .env.local')
}

app.get('/api/github/contributions', async (req, res) => {
  try {
    const username = req.query.username || DEFAULT_USERNAME
    const token = process.env.GITHUB_TOKEN

    if (!token) {
      return res.status(500).json({
        error: 'Missing GITHUB_TOKEN in .env.local',
      })
    }

    const query = `
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

    const githubResponse = await fetch(GITHUB_API, {
      method: 'POST',
      headers: {
        Authorization: `bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query,
        variables: { login: username },
      }),
    })

    const payload = await githubResponse.json()

    if (!githubResponse.ok || payload.errors) {
      return res.status(400).json({
        error: 'GitHub GraphQL request failed',
        details: payload.errors || payload,
      })
    }

    const calendar = payload?.data?.user?.contributionsCollection?.contributionCalendar

    if (!calendar) {
      return res.status(404).json({
        error: 'Contribution calendar not found for this user',
      })
    }

    return res.json({
      username,
      totalContributions: calendar.totalContributions,
      colors: calendar.colors,
      weeks: calendar.weeks,
      fetchedAt: new Date().toISOString(),
    })
  } catch (error) {
    return res.status(500).json({
      error: 'Server error',
      details: error instanceof Error ? error.message : 'Unknown error',
    })
  }
})

app.listen(PORT, HOST, () => {
  console.log(`GitHub contributions API running on http://${HOST}:${PORT}`)
})
