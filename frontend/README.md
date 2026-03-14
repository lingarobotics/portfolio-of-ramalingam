# Frontend README

## Overview

This folder contains the **frontend application** for the portfolio website.
It is built to deliver a fast, modern, responsive, and design-focused single-page experience.

---

## Why These Frontend Technologies

## 1. React

**Why used:**

- Component-based architecture makes each section reusable and maintainable.
- Helps keep portfolio sections isolated (Hero, About, Products, Vision, Skills, Contact).
- Makes UI updates easier as the portfolio grows.

## 2. Vite

**Why used:**

- Very fast dev server and hot reload for smooth iteration.
- Lightweight build pipeline for production output.
- Great fit for modern React projects with minimal configuration overhead.

## 3. Tailwind CSS

**Why used:**

- Utility-first styling keeps UI implementation fast and consistent.
- Makes responsive design easier across mobile, tablet, and desktop.
- Helps create custom premium styling (glow effects, layered backgrounds, motion accents) without large custom CSS files.

## 4. Single-Page Layout

**Why used:**

- Smooth scrolling experience for portfolio storytelling.
- Keeps navigation simple and focused.
- Makes it easy for visitors to scan sections in one continuous flow.

## 5. Data-Driven Sections

**Why used:**

- Product and skill content is loaded from data files.
- Makes updates simple without changing section UI logic.
- Supports future scaling as systems and tools evolve.

---

## Current Frontend Goals

- Keep the interface clean, futuristic, and professional.
- Keep content readable even in text-dense sections.
- Keep interactions subtle, smooth, and meaningful.
- Keep structure modular for long-term maintainability.

---

## Run Frontend Locally

From repository root:

```bash
npm run dev
```

This starts the Vite frontend development server.

---

## Notes

- Frontend source code is inside this folder.
- Backend API for GitHub contributions is in the backend folder.
- Environment secrets should stay in .env.local and never be committed.
