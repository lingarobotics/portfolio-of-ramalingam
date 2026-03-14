# Backend API — Ramalingam Jayavelu Founder Portfolio

This directory contains the **optional local backend server** used by the Ramalingam Jayavelu portfolio.

The backend exists primarily to support **API behavior during development and testing** while maintaining a consistent runtime model with the production deployment.

In production, equivalent functionality is provided through **Vercel serverless functions**.

---

# Purpose of This Backend

The backend provides a lightweight **Express-based API layer** that supports:

* GitHub contribution data retrieval
* runtime configuration exposure
* local API testing without deploying serverless functions

This ensures the frontend can interact with APIs consistently across **local development and production environments**.

---

# Technology Stack

The backend uses a minimal Node.js stack.

Express
Used to create a lightweight API server.

CORS
Allows the React frontend to communicate with the API during local development.

dotenv
Loads environment variables from `.env.local`.

GitHub GraphQL API
Used to retrieve GitHub contribution calendar data.

---

# API Endpoints

The server exposes two endpoints.

---

## Public Runtime Configuration

```
GET /api/public-config
```

Returns non-sensitive configuration values used by the frontend.

Example response:

```json
{
  "contactEmail": "example@email.com"
}
```

Purpose:

* avoid hardcoding contact information inside frontend source code
* allow configuration changes without rebuilding the frontend

---

## GitHub Contribution Data

```
GET /api/github/contributions
```

Retrieves GitHub contribution calendar data using the GitHub GraphQL API.

Optional query parameter:

```
?username=<github-username>
```

If no username is provided, the default configured username is used.

Example response structure:

```json
{
  "username": "example-user",
  "totalContributions": 1234,
  "colors": [...],
  "weeks": [...],
  "fetchedAt": "2026-03-14T12:00:00.000Z"
}
```

This endpoint powers the **GitHub activity visualization section of the portfolio**.

---

# Environment Variables

The backend reads configuration values from `.env.local`.

Required variables:

```
HOST
PORT
GITHUB_API_URL
GITHUB_DEFAULT_USERNAME
GITHUB_TOKEN
PUBLIC_CONTACT_EMAIL
```

### Variable Purpose

HOST
Server bind address.

PORT
Port used by the local backend server.

GITHUB_API_URL
GitHub GraphQL endpoint.

Example:

```
https://api.github.com/graphql
```

GITHUB_DEFAULT_USERNAME
Default GitHub username used when the query parameter is not provided.

GITHUB_TOKEN
GitHub personal access token used for authenticated GraphQL requests.

PUBLIC_CONTACT_EMAIL
Contact email exposed through `/api/public-config`.

---

# Running the Backend Locally

From the project root:

```bash
npm run server
```

This starts the Express server defined in:

```
backend/server.js
```

Example output:

```
GitHub contributions API running on http://127.0.0.1:8787
```

The frontend can then fetch data from the local backend.

---

# Error Handling

The backend performs basic validation checks:

* missing environment variables
* invalid port configuration
* GitHub API request failures
* missing contribution data

Errors return structured JSON responses.

Example:

```json
{
  "error": "Missing GITHUB_TOKEN in .env.local"
}
```

---

# Development Notes

This backend exists primarily for **local development and debugging convenience**.

In production deployments:

* GitHub contribution retrieval runs through **Vercel serverless functions**
* the Express server is not required

Maintaining the backend locally allows:

* easier API debugging
* consistent frontend behavior
* separation of secrets from frontend code

---

# Repository Context

This backend is part of the **Ramalingam Jayavelu portfolio system**.

It supports the portfolio’s goal of demonstrating:

* engineering transparency
* reasoning-driven development
* verifiable work artifacts

The backend therefore acts as a **supporting API layer rather than a standalone service**.
