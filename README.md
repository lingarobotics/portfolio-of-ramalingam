# Ramalingam Jayavelu - Portfolio

This repository contains the source code for the personal portfolio of **Ramalingam Jayavelu**, founder and builder of **LGC Systems**.
The portfolio exists to present the **philosophy, systems, and products** developed under the LGC initiative.
Rather than functioning as a traditional **"projects showcase"**, this portfolio represents a **systems-oriented ecosystem** focused on learning architecture, reasoning-first development, and conceptual clarity.

---

## Core Idea

The work presented in this portfolio is guided by a simple belief:

> **If you cannot explain something clearly, you do not truly understand it.**

This principle shapes the systems built under **LGC Systems**.

---

## Live Systems

**LGC Systems**  
https://lgcsystems.xyz

**LGC Concept AI**  
https://concept-ai.lgcsystems.xyz

**LGC LearnLogic CODE**  
https://learn-logic-code.lgcsystems.xyz

---

## What the Portfolio Shows

The portfolio highlights:

* The philosophy behind **LGC Systems**
* Products built under the ecosystem
* Systems currently under development
* Technical focus and tools
* External resources showing thinking, experimentation, and learning progress

---

## Core Philosophy

* **Understanding > Memorization**
* **Reasoning > Copying Solutions**
* **Teach-back > Passive Consumption**
* **Consistency > Intensity**
* **Learning before building**

---

## Products Within the Ecosystem

Core systems currently showcased include:

* **LGC Systems**
* **LGC Concept AI**
* **LGC LearnLogic CODE**

Additional systems and experimental projects are also included to show the **evolution of the ecosystem**.

---

## About the Builder

**Ramalingam Jayavelu**  
B.E. Robotics and Automation

Karpaga Vinayaga College of Engineering and Technology

### Focus Areas

* **Java development**
* **Learning-system architecture**
* **Developer reasoning tools**
* **Student-centric product building**

---

## External Links

**GitHub**  
https://github.com/lingarobotics

**LinkedIn**  
https://www.linkedin.com/in/linga-robotics-conceptual-learner

**LeetCode**  
https://leetcode.com/u/lingarobotics/

**Logbook**  
https://github.com/lingarobotics/logbook

**Instagram - Learn With Linga**  
https://www.instagram.com/learn_with_linga/

---

This repository only contains the **implementation of the portfolio website**.

The actual systems and products are maintained in their respective repositories under the **LGC Systems ecosystem**.

---

## Local Development

1. Install dependencies:

```bash
npm install
```

2. Create `.env.local` from `.env.local.example` and fill values.

3. Run frontend:

```bash
npm run dev
```

4. Optional local API server (for non-Vercel local testing):

```bash
npm run server
```

---

## Vercel Deployment

This repo supports a **single-project Vercel deployment**:

- Frontend: Vite static build
- Backend: serverless function at `/api/github/contributions`

Set these environment variables in Vercel:

- `GITHUB_TOKEN`
- `GITHUB_DEFAULT_USERNAME`
- `GITHUB_API_URL` (recommended: `https://api.github.com/graphql`)
- `VITE_GITHUB_USERNAME`
- `VITE_GITHUB_CONTRIBUTIONS_ENDPOINT` (set to `/api/github/contributions`)
- `VITE_GITHUB_POLL_INTERVAL_MS`

`VITE_API_PROXY_TARGET` is optional and only used for local proxying.
