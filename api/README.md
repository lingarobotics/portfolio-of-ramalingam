# API Layer — Ramalingam Jayavelu Founder Portfolio

This directory contains the **serverless API endpoints used by the Ramalingam Jayavelu portfolio in production**.

These endpoints are executed by the **Vercel serverless runtime** and provide a minimal backend layer for the frontend application.

The API layer allows the portfolio to retrieve external data and expose selected runtime configuration values **without exposing secrets in the frontend codebase**.

---

# Purpose of This API Layer

The API directory exists to support functionality that should not be implemented directly in the browser.

Key responsibilities include:

* retrieving GitHub contribution data securely
* exposing safe runtime configuration values
* protecting API tokens and sensitive configuration
* maintaining consistent frontend data access patterns

This design allows the portfolio to remain mostly static while still supporting **dynamic data retrieval**.

---

# Directory Structure

```text
api
├── github
│   └── contributions.js
└── public-config.js
```

---

# Serverless Execution Model

Each file in the `api` directory represents a **serverless function**.

When deployed to Vercel:

* files are executed as independent serverless endpoints
* functions run on-demand when HTTP requests are received
* environment variables remain secure and are not exposed to the client

Example request:

```text
/api/github/contributions
```

This triggers execution of:

```text
api/github/contributions.js
```

---

# API Endpoints

## GitHub Contributions Endpoint

```text
GET /api/github/contributions
```

This endpoint retrieves **GitHub contribution calendar data** using the GitHub GraphQL API.

The endpoint is used by the portfolio's **GitHub activity visualization component**.

### Query Parameters

Optional:

```text
username=<github-username>
```

If omitted, the system uses the default username configured through environment variables.

### Example Response

```json
{
  "username": "lingarobotics",
  "totalContributions": 1234,
  "colors": ["#ebedf0", "#9be9a8", "#40c463"],
  "weeks": [...],
  "fetchedAt": "2026-03-14T12:00:00.000Z"
}
```

### Implementation Highlights

* Uses GitHub GraphQL API
* Authenticates using a server-side token
* Returns contribution calendar data structure
* Handles error responses gracefully

---

## Public Configuration Endpoint

```text
GET /api/public-config
```

This endpoint exposes **non-sensitive runtime configuration values** used by the frontend.

Example response:

```json
{
  "contactEmail": "example@email.com"
}
```

### Purpose

This design avoids hardcoding configuration values inside frontend source code.

It allows contact information and other safe runtime variables to be updated through environment variables without requiring a frontend rebuild.

---

# Environment Variables

These endpoints rely on environment variables configured in the deployment environment.

Required variables:

```text
GITHUB_TOKEN
GITHUB_DEFAULT_USERNAME
GITHUB_API_URL
PUBLIC_CONTACT_EMAIL
```

### Variable Purpose

**GITHUB_TOKEN**

GitHub personal access token used for authenticated GraphQL requests.

---

**GITHUB_DEFAULT_USERNAME**

Default GitHub username used when no username query parameter is provided.

---

**GITHUB_API_URL**

GitHub GraphQL API endpoint.

Typical value:

```text
https://api.github.com/graphql
```

---

**PUBLIC_CONTACT_EMAIL**

Contact email exposed through the public configuration endpoint.

---

# Error Handling

Endpoints return structured JSON error responses when failures occur.

Examples include:

* invalid request method
* missing environment variables
* GitHub API failures
* missing contribution data

Example error response:

```json
{
  "error": "GitHub GraphQL request failed"
}
```

This approach keeps frontend error handling predictable.

---

# Relationship to Local Backend

The project also includes a **local Express backend** located in:

```text
backend/server.js
```

That backend exists only for **local development and testing**.

In production:

* requests are handled by **Vercel serverless functions**
* the Express backend is not used

This ensures the deployment remains lightweight while development remains flexible.

---

# Security Considerations

Sensitive information such as API tokens must always remain in **environment variables**.

Secrets should **never be committed to the repository**.

The API layer exists specifically to prevent exposing tokens directly in frontend code.

---

# Architecture Context

This API layer supports the broader portfolio architecture:

* React frontend for presentation and navigation
* serverless API endpoints for external data access
* static asset layer for proof documentation
* optional local backend for development debugging

Together these layers form the **complete engineering architecture of the Ramalingam Jayavelu portfolio system**.
