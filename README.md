# Ramalingam Jayavelu Portfolio

This repository contains the implementation of the official personal portfolio of **Ramalingam Jayavelu**, *founder and builder* of **LGC Systems**.

The purpose of this project is not only to display finished outputs, but to document how those outputs were reasoned, tested, refined, and explained over time.

## Identity and Portfolio Context

- Owner: Ramalingam Jayavelu
- Role: Founder and Builder, LGC Systems
- Portfolio type: Personal work-proof and reasoning-driven engineering portfolio
- Brand context: Portfolio is personal, while systems belong to the broader LGC ecosystem

## Core Mindset

This portfolio is built around a reasoning-first learning and building discipline.

> If I cannot explain why a decision works, I do not treat it as understanding.

### Principles that drive the work

- Understanding over memorization
- Reasoning over pattern-copying
- Teach-back over passive reading
- Iteration over one-shot perfection
- Consistency over occasional intensity
- Proof of work over claims

## What This Repository Demonstrates

- Personal identity and ownership clarity under LGC Systems
- Product ecosystem visibility with context and intent
- Public proof pages for learning progression and engineering decisions
- Event participation and event-conducted evidence
- Git workflow and debugging discipline through documented artifacts

## Live Ecosystem Links

- LGC Systems: https://lgcsystems.xyz
- LGC Concept AI: https://concept-ai.lgcsystems.xyz
- LGC LearnLogic CODE: https://learn-logic-code.lgcsystems.xyz

## Technical Architecture

### Frontend

- React for modular UI composition
- React Router for route-based proof pages and section navigation
- Vite for fast local development and optimized production builds
- Tailwind CSS for utility-driven responsive styling

### API and Data Flow

- Serverless function in api/github/contributions.js for GitHub contribution retrieval
- Optional local Express server in backend/server.js for local backend testing
- Frontend fetch flow through environment-configured endpoint

### Deployment Model

- Single Vercel project deployment
- Static frontend served by Vercel build pipeline
- API endpoint served by Vercel serverless runtime

## Reasoning and Engineering Approach

The implementation style is intentionally transparent and process-oriented.

### Decision model used in this codebase

- Clarify problem constraints first
- Prefer minimal, explicit changes instead of broad rewrites
- Add proof pages when a result needs validation context
- Keep content and component logic separated where possible
- Validate through build checks before publishing

### Why this matters

This makes the portfolio useful as both:

- A presentation layer for recruiters, collaborators, and peers
- A personal engineering log of how decisions evolve under real constraints

## Builder Profile

- Name: Ramalingam Jayavelu
- Degree: B.E. Robotics and Automation
- Institution: Karpaga Vinayaga College of Engineering and Technology

### Focus areas

- Java development
- Learning-system architecture
- Developer reasoning workflows
- Student-centric product thinking

## External Profiles

- GitHub: https://github.com/lingarobotics
- LinkedIn: https://www.linkedin.com/in/linga-robotics-conceptual-learner
- LeetCode: https://leetcode.com/u/lingarobotics/
- Logbook: https://github.com/lingarobotics/logbook
- Instagram (Learn With Linga): https://www.instagram.com/learn_with_linga/

## Local Development

1. Install dependencies.

```bash
npm install
```

2. Create .env.local from .env.local.example.

3. Start frontend development server.

```bash
npm run dev
```

4. Optional: Start local backend API server.

```bash
npm run server
```

## Environment Variables

### Required for GitHub contributions API behavior

- GITHUB_TOKEN
- GITHUB_DEFAULT_USERNAME
- GITHUB_API_URL
- VITE_GITHUB_USERNAME
- VITE_GITHUB_CONTRIBUTIONS_ENDPOINT
- VITE_GITHUB_POLL_INTERVAL_MS

### Local-only variable

- VITE_API_PROXY_TARGET (optional local proxy target)

## Vercel Deployment

This repository is prepared for single-project deployment in Vercel.

### Deployment behavior

- Frontend build output is served statically
- API calls to /api/github/contributions run as serverless functions
- SPA routing is handled by Vercel rewrite rules

### Vercel setup checklist

1. Import repository in Vercel.
2. Keep framework preset as Vite.
3. Add environment variables listed above.
4. Deploy and validate GitHub activity section.

## Repository Scope

This repository is the portfolio implementation layer.

Core products and systems continue to be maintained in their dedicated repositories under the LGC ecosystem.
