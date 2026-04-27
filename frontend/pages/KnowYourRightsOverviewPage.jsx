import { Link } from 'react-router-dom'
import DevelopmentEnvironmentNote from '../components/DevelopmentEnvironmentNote'
import TechStackImageStrip from '../components/TechStackImageStrip'

const techStackIcons = [
  { name: 'React', src: '/images/react.png' },
  { name: 'JavaScript', src: '/images/javascript.png' },
  { name: 'PWA', src: '/images/pwa.png' },
]

const visionSections = [
  {
    title: 'Project Vision',
    detail:
      'Know Your Rights is designed as a situation-based legal awareness system to help citizens act with clarity during real-world conflicts by understanding what the law actually permits and protects.',
  },
  {
    title: 'System Problem I Targeted',
    detail:
      'Citizens often act based on verbal authority, fear, or misinformation rather than written law. This leads to unnecessary compliance, financial loss, and loss of control in critical situations.',
  },
  {
    title: 'Core Outcome',
    detail:
      'The system enables users to quickly understand their rights in real scenarios and respond with clarity using structured guidance and precise communication patterns.',
  },
]

const systemArchitecture = [
  'Situation Layer: Real-world scenarios (police, college, workplace, cyber)',
  'Expected vs Actual Model: Separates common belief from legal reality',
  'Response Engine: Provides precise, respectful statements for user action',
  'Caution Layer: Highlights exceptions and risk conditions',
]

const techStackImplemented = [
  'Frontend: React.js for fast, responsive user interface',
  'Architecture: JSON-based structured scenario delivery',
  'PWA: Offline-capable access for real-world usage',
  'Design: Minimal UI focused on clarity and speed',
]

const plannedEnhancements = [
  'Search-based scenario retrieval using keywords',
  'Decision flow system (guided user interaction)',
  'AI-based explanation validation (Teach-Back mode)',
  'Backend integration for dynamic content updates',
]

function KnowYourRightsOverviewPage() {
  return (
    <div className="relative min-h-screen bg-slate-950 text-slate-100">
      <div className="pointer-events-none absolute inset-0 -z-0 bg-[radial-gradient(circle_at_18%_18%,rgba(56,189,248,0.16),transparent_34%),radial-gradient(circle_at_80%_0%,rgba(16,185,129,0.12),transparent_30%),radial-gradient(circle_at_50%_100%,rgba(59,130,246,0.12),transparent_40%)]" />

      <section className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6">
        <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 sm:p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-cyan-200">
            System Design Proposal
          </p>

          <h1 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">
            Know Your Rights – Citizen Legal Awareness System
          </h1>

          <p className="mt-4 max-w-4xl leading-relaxed text-slate-300">
            Know Your Rights is a situation-based legal awareness system designed to help individuals respond with clarity in real-life scenarios by understanding what the law actually states, rather than relying on assumptions or verbal pressure.
          </p>

          <div className="mt-4">
            <span className="inline-flex rounded-full border border-cyan-400/50 bg-cyan-500/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-cyan-200">
              Status: Concept + MVP Development
            </span>
          </div>

          <TechStackImageStrip
            items={techStackIcons}
            stackReason="React with PWA architecture enables fast access, cross-device compatibility, and offline usage, making it suitable for real-world situations where immediate clarity is required."
          />

          <DevelopmentEnvironmentNote
            environment="VS Code"
            icon="/images/vscode.png"
            reason="Chosen for flexibility in frontend-focused development and rapid iteration of user-facing systems."
          />

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {visionSections.map((item) => (
              <article key={item.title} className="rounded-xl border border-slate-800 bg-slate-950/65 p-4">
                <h2 className="text-sm font-semibold uppercase tracking-[0.12em] text-cyan-200">
                  {item.title}
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-slate-300">
                  {item.detail}
                </p>
              </article>
            ))}
          </div>

          <div className="mt-6 rounded-xl border border-slate-800 bg-slate-950/65 p-4">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-cyan-200">
              System Architecture
            </p>
            <ul className="mt-3 space-y-2 text-sm text-slate-300">
              {systemArchitecture.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="mt-6 rounded-xl border border-slate-800 bg-slate-950/65 p-4">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-cyan-200">
              Implemented Tech Stack (Design)
            </p>
            <ul className="mt-3 space-y-2 text-sm text-slate-300">
              {techStackImplemented.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="mt-6 rounded-xl border border-slate-800 bg-slate-950/65 p-4">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-cyan-200">
              Planned Enhancements
            </p>
            <ul className="mt-3 space-y-2 text-sm text-slate-300">
              {plannedEnhancements.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="mt-6 rounded-xl border border-amber-500/35 bg-amber-500/8 p-4">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-amber-100">
              Ownership and Intent
            </p>
            <p className="mt-3 text-sm leading-relaxed text-amber-50/95">
              This system is designed under LGC Systems as an initiative to improve citizen awareness and decision-making through structured legal clarity.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-amber-50/95">
              Inspired by real-world regulatory conflicts experienced in academic environments, this system aims to bridge the gap between written rules and public understanding.
            </p>
          </div>

          <div className="mt-10 flex flex-wrap gap-3 border-t border-slate-800 pt-6">
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

export default KnowYourRightsOverviewPage