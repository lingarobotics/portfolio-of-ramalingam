# Public Assets — Ramalingam Jayavelu Founder Portfolio

This directory contains **static public assets** used by the Ramalingam Jayavelu founder portfolio.

Assets placed here are served directly by the frontend build system and are accessible at runtime without import bundling.

These files support **visual identity, proof documentation, media playback, and static references** used across the portfolio interface.

---

# Directory Structure

```
public
├── audio
│   └── background music assets
├── images
│   └── icons, branding assets, proof screenshots, event photos
└── A_Small_Git_Mistake_That_Can_Break_Your_Entire_System.pdf
```

---

# Purpose of This Directory

The `public` directory holds **static assets that must remain available at runtime**.

These files are not processed by the build system in the same way as bundled assets. Instead, they are served directly by the deployed frontend environment.

Typical uses include:

* branding assets
* icons and logos
* screenshots and proof documentation
* media files such as background audio
* downloadable reference material

This separation keeps the React application code clean while allowing **large or static resources to remain accessible independently**.

---

# Images Directory

```
public/images
```

This folder contains all **visual assets used throughout the portfolio interface**.

Image categories include:

### Branding Assets

Used for identity and visual recognition.

Examples:

* LGC Systems logo
* favicon
* portfolio profile image
* Learn With Linga branding

---

### Technology Icons

Icons representing technologies used by the builder.

Examples:

* Java
* JavaScript
* Python
* React
* Tailwind CSS
* PostgreSQL
* MongoDB
* Vite
* VS Code
* IntelliJ IDEA

These icons are used in the **skills and technology sections** of the portfolio.

---

### Proof and Learning Evidence

Screenshots documenting learning progression and engineering reasoning.

Examples include:

* AI-assisted learning workflows
* debugging sessions
* pull request histories
* UI iteration proofs
* concept learning artifacts

These images support the **proof-of-work philosophy** presented in the portfolio.

---

### Event Documentation

Photographs and evidence from real-world participation.

Examples include:

* developer meetups
* hackathons
* workshops
* talks conducted or attended

These assets demonstrate **community engagement and real-world developer participation**.

---

# Audio Directory

```
public/audio
```

This directory contains **background audio used within the portfolio interface**.

The background music asset is used by the global music toggle component in the React application.

Design considerations:

* background music is optional and user-controlled
* playback is toggle-based rather than automatic
* mobile usability is preserved with accessible control placement

This feature exists to add **ambient character to the portfolio experience** without interfering with usability.

---

# Static Document

```
A_Small_Git_Mistake_That_Can_Break_Your_Entire_System.pdf
```

This document is included as a **learning artifact and technical reference**.

The content demonstrates how small Git workflow mistakes can propagate into larger system failures.

Including documents like this aligns with the **reasoning-first engineering philosophy** of the portfolio:

> Show the learning and debugging process, not just final results.

---

# Design Philosophy Behind Public Assets

Assets stored in this directory reflect the broader engineering mindset behind the portfolio.

Key ideas include:

* **Proof over claims** — screenshots and artifacts validate learning
* **Traceability** — assets remain explicitly referenced rather than hidden
* **Transparency** — engineering iterations are visible
* **Clarity** — assets are named descriptively to communicate context

This makes the portfolio not just a visual showcase, but also a **documented engineering narrative**.

---

# Notes

* Assets in this directory are served directly by the deployment environment.
* Large media files should be compressed where possible to maintain performance.
* Sensitive information must never be included in public assets.
* Future assets should follow descriptive naming conventions to maintain clarity.

---

This directory therefore acts as the **static resource layer supporting the portfolio’s interface, narrative, and proof documentation**.
