import { Link } from 'react-router-dom'
import DevelopmentEnvironmentNote from '../components/DevelopmentEnvironmentNote'
import TechStackImageStrip from '../components/TechStackImageStrip'

const techStackIcons = [
  { name: 'Java', src: '/images/java.png' },
  { name: 'Maven', src: '/images/intellijidea.png' },
  { name: 'API', src: '/images/lgc-logo.webp' },
]

const purposePoints = [
  'I am building this as the API boundary layer that exposes LGC Concept AI intelligence to external LGC systems.',
  'The goal is controlled, stateless access to reasoning and concept-explanation capabilities.',
  'This API keeps intelligence reusable without coupling it to learner state, course flow, or product-specific business logic.',
]

const isNot = [
  'Not a learning platform',
  'Not a curriculum manager',
  'Not a user/session management service',
  'Not a stateful orchestration layer',
  'Not a controller of pedagogy or learning progression',
]

const designPrinciples = [
  'API-first, stateless architecture',
  'Separation of responsibilities: Concept AI intelligence vs LearnLogic orchestration',
  'Minimal, explicit input/output contracts',
  'Concept clarity over feature speed',
  'No over-engineering; one architectural decision at a time',
]

const techBaseline = [
  'Java (LTS)',
  'Spring Boot',
  'Maven',
  'REST-style API design',
]

function ConceptAiApiOverviewPage() {
  return (
    <div className="relative min-h-screen bg-slate-950 text-slate-100">
      <div className="pointer-events-none absolute inset-0 -z-0 bg-[radial-gradient(circle_at_18%_18%,rgba(56,189,248,0.16),transparent_34%),radial-gradient(circle_at_80%_0%,rgba(16,185,129,0.12),transparent_30%),radial-gradient(circle_at_50%_100%,rgba(59,130,246,0.12),transparent_40%)]" />

      <section className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6">
        <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 sm:p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-cyan-200">Product Deep Dive</p>
          <h1 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">ConceptAI API - Boundary Layer Overview</h1>
          <p className="mt-4 max-w-4xl leading-relaxed text-slate-300">
            I am building this repository as the API-first boundary layer for LGC Concept AI so external systems can consume intelligence capabilities in a stateless, controlled way.
          </p>
          <div className="mt-4">
            <span className="inline-flex rounded-full border border-amber-400/50 bg-amber-500/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-amber-200">Status: Under Development</span>
          </div>

          <TechStackImageStrip
            items={techStackIcons}
            stackReason="Tech stack choice: Java is selected for backend robustness, stronger security posture, and long-term maintainability in system-level services."
          />

          <DevelopmentEnvironmentNote
            environment="IntelliJ IDEA Ultimate"
            icon="/images/intellijidea.png"
            reason="I chose IntelliJ IDEA Ultimate for robust backend engineering, especially Java and Spring Boot development, with stronger project structure tooling and debugging support."
          />

          <div className="mt-6 rounded-xl border border-slate-800 bg-slate-950/65 p-4">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-cyan-200">Purpose</p>
            <ul className="mt-3 space-y-2 text-sm text-slate-300">
              {purposePoints.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="mt-6 rounded-xl border border-slate-800 bg-slate-950/65 p-4">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-cyan-200">Relationship with LGC LearnLogic</p>
            <p className="mt-3 text-sm leading-relaxed text-slate-300">
              LearnLogic is a consumer of this API. LearnLogic owns progression, persistence, UI, and learning flow. This API provides only reasoning-related intelligence and remains unaware of learners, sessions, and curriculum orchestration.
            </p>
          </div>

          <div className="mt-6 rounded-xl border border-slate-800 bg-slate-950/65 p-4">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-cyan-200">What This Project Is Not</p>
            <ul className="mt-3 space-y-2 text-sm text-slate-300">
              {isNot.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="mt-6 rounded-xl border border-slate-800 bg-slate-950/65 p-4">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-cyan-200">Core Design Principles</p>
            <ul className="mt-3 space-y-2 text-sm text-slate-300">
              {designPrinciples.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="mt-6 rounded-xl border border-slate-800 bg-slate-950/65 p-4">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-cyan-200">Current Status</p>
            <p className="mt-3 text-sm leading-relaxed text-slate-300">
              The repository currently contains base Spring Boot skeleton and metadata only. Capability contracts, controllers, and endpoints are intentionally deferred until boundary design is finalized incrementally.
            </p>
          </div>

          <div className="mt-6 rounded-xl border border-slate-800 bg-slate-950/65 p-4">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-cyan-200">Technology Baseline</p>
            <ul className="mt-3 space-y-2 text-sm text-slate-300">
              {techBaseline.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="mt-6 rounded-xl border border-amber-500/35 bg-amber-500/8 p-4">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-amber-100">Ownership and License</p>
            <p className="mt-3 text-sm leading-relaxed text-amber-50/95">
              This project is owned by Ramalingam Jayavelu under LGC Systems.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-amber-50/95">
              License: Proprietary - All Rights Reserved unless explicitly stated otherwise in the repository license file.
            </p>
          </div>

          <div className="mt-10 flex flex-wrap gap-3 border-t border-slate-800 pt-6">
            <a
              href="https://github.com/lingarobotics/conceptai-api"
              target="_blank"
              rel="noreferrer"
              className="inline-flex rounded-lg border border-slate-700 bg-slate-950/70 px-4 py-2 text-sm font-medium text-slate-100 transition hover:border-cyan-400/60 hover:text-cyan-200"
            >
              View Repository
            </a>
            <Link
              to="/"
              className="inline-flex rounded-lg border border-slate-700 bg-slate-950/70 px-4 py-2 text-sm font-medium text-slate-100 transition hover:border-cyan-400/60 hover:text-cyan-200"
            >
              Back to Portfolio
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ConceptAiApiOverviewPage
