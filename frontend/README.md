# Frontend README

## Overview

This directory contains the React frontend for Ramalingam Jayavelu's personal portfolio.

The frontend is designed to do more than visual presentation. It is built to communicate:

- Personal identity and founder ownership context
- Product and ecosystem narrative
- Work proofs, iteration evidence, and event documentation
- Reasoning-first engineering style through structured page flow

## Frontend Technology Stack and Validation

The current implementation is aligned with the project architecture and deployment model.

### React

React is used for component composition and section-level modularity.

Why this matters here:

- The portfolio has many content-heavy blocks and proof pages.
- Reusable components reduce duplication while preserving visual consistency.
- Progressive enhancements are easier because each section can evolve independently.

### React Router

Route-based rendering is used for deep proof pages and dedicated contexts.

Why this matters here:

- Not all content belongs on one long page.
- Proof-heavy content remains discoverable without cluttering the home flow.
- URL-based access helps sharing specific evidence pages.

### Vite

Vite powers development and production build.

Why this matters here:

- Fast local feedback loops support frequent content and UI iteration.
- Production build output is compatible with Vercel static deployment.
- Build process stays simple and predictable.

### Tailwind CSS

Tailwind drives most styling and responsive behavior.

Why this matters here:

- Utility-driven classes make spacing, typography, and responsiveness explicit.
- Design consistency is easier to maintain across many sections.
- Fast visual iteration is possible without large custom stylesheet overhead.

## UI Mindset and Reasoning Approach

This frontend follows a reasoning-first UI strategy rather than cosmetic-only design.

### Key UI principles

- Clarity before ornament
- Information hierarchy before animation
- Content readability before visual density
- Interaction intent before interaction quantity
- Mobile usability before desktop polishing

### Practical implementation behavior

- Large narratives are split into dedicated pages when needed
- Proof content is grouped by topic and chronology
- Calls to action are explicit and context-specific
- Navigation remains compact while preserving depth

## Information Architecture

The frontend is structured around two layers:

- Narrative layer:
	- Home sections that present identity, philosophy, products, and skills
- Proof layer:
	- Dedicated routes for AI learning evidence, Git workflow proof, UI evolution, and event-related records

This split keeps first-time visitors oriented while still allowing deep validation by technical reviewers.

## Data and Content Strategy

Parts of the content are data-driven to improve maintainability.

- Product and skills content are organized for easier updates
- Asset-heavy pages keep media references explicit for traceability
- Proof pages preserve historical iteration context

## Frontend and API Interaction

GitHub activity in the UI fetches data from an API endpoint configured through environment variables.

Behavior by environment:

- Local development can proxy API calls to local backend
- Vercel deployment uses serverless endpoint at /api/github/contributions

This preserves one code path in UI while supporting different runtime contexts.

## Local Frontend Development

Run from repository root:

```bash
npm run dev
```

This starts the Vite development server and serves the frontend application.

## Quality and Validation Flow

Typical frontend validation in this project:

1. Make targeted UI/content updates.
2. Run production build.
3. Verify route behavior and key proof pages.
4. Confirm no broken asset references.

Production build command:

```bash
npm run build
```

## Notes and Boundaries

- Frontend source lives in this directory.
- Local Express backend exists in backend for optional local API testing.
- Vercel serverless API exists in api for production deployment.
- Secrets must remain in environment variables and should never be committed.
