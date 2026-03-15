import { Link } from 'react-router-dom'
import DevelopmentEnvironmentNote from './DevelopmentEnvironmentNote'
import TechStackImageStrip from './TechStackImageStrip'

const techStackIcons = [
  { name: 'TypeScript', src: '/images/typescript.png' },
  { name: 'React', src: '/images/react.png' },
  { name: 'Vite', src: '/images/vite.jpeg' },
]

const philosophy = [
  'Understanding over memorization',
  'Reasoning over copying solutions',
  'Teach-back over passive consumption',
  'Consistency over speed',
  'Learning should cost effort, not money',
]

const systemsUnderLgc = [
  {
    name: 'LGC Concept AI',
    focus: 'Concept verification through structured explanation, doubt clarification, and teach-back validation.',
  },
  {
    name: 'LGC LearnLogic CODE',
    focus: 'Logic-first programming learning with execution-flow reasoning, defensive thinking, and clarity before syntax.',
  },
]

const implementedStack = [
  'Framework: Next.js (App Router)',
  'Language: TypeScript',
  'Styling: Global CSS (clarity-first, no Tailwind)',
  'Performance: Next.js font optimization and metadata-driven SEO/OG setup',
  'UX Layer: client-side splash screen and minimal dependency approach',
]

const repositoryScope = [
  'Umbrella website and platform shell (lgcsystems.xyz)',
  'Shared layout, navigation, and presentation structure',
  'Systems documentation and philosophy communication',
  'Contact and collaboration entry points',
  'Foundation for future shared services such as identity/SSO',
]

const futureDirection = [
  'Shared identity (SSO) across LGC systems',
  'Deeper learning continuity between tools',
  'Community-driven contribution pathways',
  'Additional learning systems under the LGC umbrella',
]

function LgcSystemsOverviewPage() {
  return (
    <div className="relative min-h-screen bg-slate-950 text-slate-100">
      <div className="pointer-events-none absolute inset-0 -z-0 bg-[radial-gradient(circle_at_18%_18%,rgba(56,189,248,0.16),transparent_34%),radial-gradient(circle_at_80%_0%,rgba(16,185,129,0.12),transparent_30%),radial-gradient(circle_at_50%_100%,rgba(59,130,246,0.12),transparent_40%)]" />

      <section className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6">
        <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 sm:p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-cyan-200">Product Deep Dive</p>
          <h1 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">LGC Systems - Umbrella Platform Overview</h1>
          <p className="mt-4 max-w-4xl leading-relaxed text-slate-300">
            I built LGC Systems as a learning-first technology umbrella focused on clarity, reasoning, and long-term understanding instead of shortcuts, hype, or surface-level progress.
          </p>
          <div className="mt-4">
            <span className="inline-flex rounded-full border border-cyan-400/50 bg-cyan-500/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-cyan-200">Status: Under Evolution</span>
          </div>

          <TechStackImageStrip
            items={techStackIcons}
            stackReason="Tech stack choice: JavaScript/TypeScript is selected for rapid prototyping and unified frontend-backend iteration without adding an extra backend language."
          />

          <DevelopmentEnvironmentNote
            environment="VS Code"
            icon="/images/vscode.png"
            reason="I chose VS Code for rapid prototyping, lightweight iteration speed, and smooth workflows for JavaScript-centric or mixed non-Java development."
          />

          <div className="mt-6 rounded-xl border border-slate-800 bg-slate-950/65 p-4">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-cyan-200">Core Philosophy</p>
            <ul className="mt-3 space-y-2 text-sm text-slate-300">
              {philosophy.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </div>

          <div className="mt-6 rounded-xl border border-slate-800 bg-slate-950/65 p-4">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-cyan-200">Systems Under LGC</p>
            <div className="mt-3 grid gap-3 md:grid-cols-2">
              {systemsUnderLgc.map((system) => (
                <article key={system.name} className="rounded-lg border border-slate-800 bg-slate-900/55 p-3">
                  <p className="text-sm font-semibold text-cyan-200">{system.name}</p>
                  <p className="mt-2 text-sm leading-relaxed text-slate-300">{system.focus}</p>
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
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-cyan-200">Repository Scope</p>
            <ul className="mt-3 space-y-2 text-sm text-slate-300">
              {repositoryScope.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="mt-6 rounded-xl border border-slate-800 bg-slate-950/65 p-4">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-cyan-200">Future Direction</p>
            <ul className="mt-3 space-y-2 text-sm text-slate-300">
              {futureDirection.map((item) => (
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
              href="https://github.com/lingarobotics/lgcsystems"
              target="_blank"
              rel="noreferrer"
              className="inline-flex rounded-lg border border-slate-700 bg-slate-950/70 px-4 py-2 text-sm font-medium text-slate-100 transition hover:border-cyan-400/60 hover:text-cyan-200"
            >
              View Repository
            </a>
            <a
              href="https://lgcsystems.xyz"
              target="_blank"
              rel="noreferrer"
              className="inline-flex rounded-lg border border-emerald-400/50 bg-emerald-500/10 px-4 py-2 text-sm font-medium text-emerald-100 transition hover:border-emerald-300 hover:bg-emerald-500/20"
            >
              Open Platform
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

export default LgcSystemsOverviewPage
