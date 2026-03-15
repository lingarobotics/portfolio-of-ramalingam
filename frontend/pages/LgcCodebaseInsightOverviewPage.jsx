import { Link } from 'react-router-dom'
import DevelopmentEnvironmentNote from '../components/DevelopmentEnvironmentNote'
import TechStackImageStrip from '../components/TechStackImageStrip'

const techStackIcons = [
  { name: 'Java', src: '/images/java.png' },
  { name: 'React', src: '/images/react.png' },
  { name: 'Vite', src: '/images/vite.jpeg' },
]

const whyItExists = [
  'I built LGC CodeBase Insight because real software learning cannot be built only on tutorials and isolated examples.',
  'Real engineering work requires reading unfamiliar repositories, understanding ownership and flow, and reasoning before modifying code.',
  'This system makes codebases themselves the primary medium of learning.',
]

const reasoningLoop = [
  'Read: open real repositories and explore structure.',
  'Observe: identify entry points, responsibilities, and boundaries.',
  'Reason: ask why abstractions exist and what breaks if changed.',
  'Extract: capture patterns, dependencies, and design tradeoffs.',
  'Explain: teach back system understanding in clear language.',
]

const v1Codebases = [
  {
    name: 'Spring PetClinic',
    repo: 'https://github.com/spring-projects/spring-petclinic',
    focus: 'Layered Spring architecture, service-repository separation, and domain modeling clarity.',
  },
  {
    name: 'React',
    repo: 'https://github.com/facebook/react',
    focus: 'Large-scale frontend architecture, rendering abstractions, and API design reasoning.',
  },
  {
    name: 'freeCodeCamp',
    repo: 'https://github.com/freeCodeCamp/freeCodeCamp',
    focus: 'Large repository navigation, modular organization, and documentation-driven development.',
  },
]

const implementedStack = [
  'Frontend: React Progressive Web App (PWA) for desktop/mobile/installable flow',
  'Backend: Java/Spring Boot reasoning engine foundation',
  'Data Layer: curated codebase knowledge under structured content folders',
  'Docs Layer: architecture and methodology-first documentation',
]

const roadmap = [
  'Version 1: Insight Learning for architecture and structure reasoning (current)',
  'Version 2: Insight Doubt using retrieval-supported explanations with repository references',
  'Version 3: Insight Evaluation to validate teach-back architecture reasoning',
]

function LgcCodebaseInsightOverviewPage() {
  return (
    <div className="relative min-h-screen bg-slate-950 text-slate-100">
      <div className="pointer-events-none absolute inset-0 -z-0 bg-[radial-gradient(circle_at_18%_18%,rgba(56,189,248,0.16),transparent_34%),radial-gradient(circle_at_80%_0%,rgba(16,185,129,0.12),transparent_30%),radial-gradient(circle_at_50%_100%,rgba(59,130,246,0.12),transparent_40%)]" />

      <section className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6">
        <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 sm:p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-cyan-200">Product Deep Dive</p>
          <h1 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">LGC CodeBase Insight - Product Overview</h1>
          <p className="mt-4 max-w-4xl leading-relaxed text-slate-300">
            I built LGC CodeBase Insight as a reasoning-first learning system to help learners understand software by analyzing real-world codebases before implementation.
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
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-cyan-200">Why This Product Exists</p>
            <ul className="mt-3 space-y-2 text-sm text-slate-300">
              {whyItExists.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="mt-6 rounded-xl border border-slate-800 bg-slate-950/65 p-4">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-cyan-200">How Learning Happens</p>
            <ul className="mt-3 space-y-2 text-sm text-slate-300">
              {reasoningLoop.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ul>
          </div>

          <div className="mt-6 rounded-xl border border-slate-800 bg-slate-950/65 p-4">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-cyan-200">Version 1 Codebases</p>
            <div className="mt-3 grid gap-3 md:grid-cols-3">
              {v1Codebases.map((codebase) => (
                <article key={codebase.name} className="rounded-lg border border-slate-800 bg-slate-900/55 p-3">
                  <p className="text-sm font-semibold text-cyan-200">{codebase.name}</p>
                  <p className="mt-2 text-sm leading-relaxed text-slate-300">{codebase.focus}</p>
                  <a
                    href={codebase.repo}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-3 inline-flex text-xs font-semibold uppercase tracking-[0.12em] text-cyan-200 hover:underline"
                  >
                    Open Repository
                  </a>
                </article>
              ))}
            </div>
          </div>

          <div className="mt-6 rounded-xl border border-slate-800 bg-slate-950/65 p-4">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-cyan-200">Implemented Tech Stack</p>
            <ul className="mt-3 space-y-2 text-sm text-slate-300">
              {implementedStack.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="mt-6 rounded-xl border border-slate-800 bg-slate-950/65 p-4">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-cyan-200">Version Roadmap</p>
            <ul className="mt-3 space-y-2 text-sm text-slate-300">
              {roadmap.map((item) => (
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
              href="https://github.com/lingarobotics/LGC-CodeBase-Insight"
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

export default LgcCodebaseInsightOverviewPage
