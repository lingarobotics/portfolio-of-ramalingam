# Ramalingam Jayavelu Portfolio

This repository contains the official personal portfolio of **Ramalingam Jayavelu**, founder and builder of **LGC Systems**.

This portfolio is not just a collection of finished outputs. It documents the reasoning, learning, experimentation, debugging, and refinement behind my work.

It represents how I approach engineering: understanding why something works, explaining my decisions, and building evidence of what I have learned and created.

## Identity and Portfolio Context

- **Owner:** Ramalingam Jayavelu
- **Role:** Founder and Builder, LGC Systems
- **Degree:** B.E. Robotics and Automation
- **Institution:** Karpaga Vinayaga College of Engineering and Technology
- **Portfolio type:** Personal work-proof and reasoning-driven engineering portfolio

The portfolio represents me as an individual. The products and systems I build belong to the broader LGC ecosystem and may be maintained through their respective projects.

## Core Mindset

> If I cannot explain why a decision works, I do not treat it as understanding.

My approach to learning and building is guided by the following principles:

- **Understanding over memorization**
- **Reasoning over pattern-copying**
- **Teach-back over passive reading**
- **Iteration over one-shot perfection**
- **Consistency over occasional intensity**
- **Proof of work over claims**

I value not only the final result, but also the reasoning and evidence that make the result understandable.

## What This Portfolio Demonstrates

- Personal identity and ownership under LGC Systems
- Products and projects with their context and intended purpose
- Learning progression and professional certification evidence
- Engineering decisions, experiments, and technical explanations
- Event participation and supporting evidence
- Git workflow, debugging, and iterative improvement
- The evolution of ideas into working implementations

The goal is to make my work understandable and verifiable rather than relying solely on claims about my skills.

## Live Ecosystem

- **LGC Systems:** https://lgcsystems.xyz
- **LGC Concept AI:** https://concept-ai.lgcsystems.xyz
- **LGC LearnLogic CODE:** https://learn-logic-code.lgcsystems.xyz

The portfolio provides the personal context behind my work, while the LGC ecosystem represents the products and systems I develop.

## Engineering Approach

My development process emphasizes clarity, deliberate decisions, and incremental improvement.

### How I Approach Problems

1. Clarify the problem and its constraints.
2. Understand the underlying concepts before choosing an implementation.
3. Prefer minimal, explicit changes over unnecessary rewrites.
4. Separate content, data, and component responsibilities where appropriate.
5. Test important behavior and validate changes.
6. Document decisions when their reasoning or evidence matters.
7. Refine the implementation based on what testing and observation reveal.

### Learning Through Building

I use projects as opportunities to connect theory with practical implementation. This includes examining unfamiliar code, investigating failures, validating assumptions, and improving solutions rather than treating the first working result as the final answer.

AI-assisted development can support this process, but the objective remains understanding the implementation, reviewing generated changes, and verifying the results.

## Technical Work

The portfolio is built with technologies that support modular interfaces, structured learning records, and evidence-based project documentation.

### Frontend

- React for modular user interfaces
- React Router for navigation and dedicated proof pages
- Vite for development and production builds
- Tailwind CSS for responsive styling

### APIs and Integrations

- GitHub contribution retrieval through a serverless API
- Contact form delivery through the Brevo transactional email API
- Environment-configured integrations
- Structured data for professional certification and learning records

### Data Validation

Professional certification records use structured JSON data and a JSON Schema.

A dedicated validation script checks the data structure and relationships between certificates, courses, learning entries, shared media, and referenced assets.

This makes the learning records easier to maintain and helps identify inconsistencies before publishing.

## Contact API and Security

The portfolio includes a contact form that allows visitors to reach me through the `/api/contact` endpoint.

The endpoint uses Brevo to deliver submitted messages.

Security measures include:

- Server-side validation of required fields and input lengths
- HTML escaping for user-submitted content included in email messages
- Protection against newline injection in single-line fields
- Validation of the configured sender email
- Server-side handling of email provider credentials
- Generic client-facing errors that avoid exposing internal provider details
- Timeout handling for upstream requests
- Safer operational logging
- Per-instance rate limiting as an additional defense

### Rate-Limiting Considerations

The API's in-memory rate limiter provides defense-in-depth, but its counters are local to individual serverless instances. It does not provide a globally coordinated request limit.

Vercel Firewall rate limiting can provide an additional deployment-level protection layer for `POST /api/contact`. A shared rate-limit store is another option if globally coordinated application-level limits are required.

The deployed Firewall rule must be verified separately; its configuration is not established merely by the presence of rate-limiting code in this repository.

### Contact API Verification

The contact API has a dedicated automated test suite covering input validation, HTML escaping, configuration failures, provider errors, timeout handling, rate limiting, and unsupported HTTP methods.

Run the tests with:

```bash
npm run test:contact
```

The tests mock provider requests and do not require real email delivery.

## Learning and Professional Evidence

Learning records and professional certifications are represented as structured evidence rather than just a list of completed courses.

The portfolio separates the certification itself from the associated courses, learning records, practical progression, and supporting material where appropriate.

The goal is to communicate what was studied, how understanding developed, and what evidence supports the learning record.

### Certificate Data Validation

The repository includes a validator for professional certification data.

```bash
npm run validate:professional-certificates
```

This checks the data schema and relevant relationships, including certificate and course references, unique identifiers, shared-media references, and referenced assets.

### Knowledge Data Validation

The repository also includes validation commands for its knowledge-data workflows:

```bash
npm run knowledge:validate
npm run knowledge:validate-chunks
npm run knowledge:validate-embedded
```

These checks support the consistency of the associated knowledge data.

## Builder Profile

My current focus areas include:

- Java development
- Learning-system architecture
- Developer reasoning workflows
- Student-centric product thinking
- AI-assisted engineering
- Practical problem-solving and software development

I aim to build systems that are not only functional, but also understandable, useful, and maintainable.

## External Profiles

- **GitHub:** https://github.com/lingarobotics
- **LinkedIn:** https://www.linkedin.com/in/linga-robotics-conceptual-learner
- **LeetCode:** https://leetcode.com/u/lingarobotics/
- **Logbook:** https://github.com/lingarobotics/logbook
- **Instagram — Learn With Linga:** https://www.instagram.com/linga.engineer/

## What We Have Built and Improved

### Academic Pages

- Separated academic performance into dedicated major and minor pages.
- Added dedicated buttons in the About section to access each page independently.
- Updated academic support proof links to the shared Google Drive folder.
- Improved mobile readability for academic tables and accordion headers.
- Preserved existing routing while introducing the dedicated academic pages.

### Contact API Security

- Improved server-side input validation and HTML escaping.
- Added sender configuration validation.
- Improved timeout and provider error handling.
- Added per-instance rate limiting as defense-in-depth.
- Added automated contact API security tests.
- Documented the limitations of in-memory rate limiting in a serverless environment.

### Results

- Academic information is separated into more focused pages.
- Mobile layouts are easier to navigate and read.
- Contact API behavior can be checked through repeatable tests.
- Certificate and knowledge data have dedicated validation workflows.
- Important changes can be checked before publishing.

### Verification

The following commands are available for checking relevant parts of the repository:

```bash
npm run test:contact
npm run validate:professional-certificates
npm run knowledge:validate
npm run knowledge:validate-chunks
npm run knowledge:validate-embedded
npm run build
git diff --check
```

These commands support validation, but results should be reported as passed only when they have actually been executed successfully against the current changes.

## Repository Scope

This repository is the personal portfolio implementation layer.

The wider LGC ecosystem contains the products and systems I build, with core products maintained in their dedicated repositories where applicable.

The portfolio connects my identity, projects, learning records, engineering decisions, and evidence of work into one place.

It is intended to show not just what I have built, but how I think, learn, explain, and improve as an engineer.

---

## Author

Ramalingam Jayavelu
Founder and Builder, LGC Systems.