import { Link } from 'react-router-dom'
import DevelopmentEnvironmentNote from '../components/DevelopmentEnvironmentNote'
import TechStackImageStrip from '../components/TechStackImageStrip'

const techStackIcons = [
  { name: 'React', src: '/images/react.png' },
  { name: 'Node.js', src: '/images/node.png' },
  { name: 'MongoDB', src: '/images/mongodb.png' },
]

const visionSections = [
  {
    title: 'System Vision',
    detail:
      'AcadOS is designed as a centralized academic operating system that replaces fragmented manual processes with a single source of truth for attendance, internal marks, and academic visibility.',
  },
  {
    title: 'Problem I Targeted',
    detail:
      'I observed that academic tracking in colleges relies heavily on manual records, delayed updates, and lack of transparency. Students remain unclear about their academic standing, while staff and HOD lack real-time insight.',
  },
  {
    title: 'Core Outcome',
    detail:
      'AcadOS brings clarity, accountability, and structured visibility across students, staff, HOD, and administration through real-time data tracking and transparent academic workflows.',
  },
]

const systemModules = [
  'Daily Attendance System (class in-charge driven, real-world aligned)',
  'Internal Marks Engine with full breakdown and transparency',
  'Attendance Risk Awareness (days required to maintain 75%)',
  'Correction Workflow for attendance errors with controlled appeals',
  'Role-based dashboards for Student, Staff, HOD, and Admin',
]

const techStackImplemented = [
  'Frontend: React with role-based UI rendering and modular dashboard design',
  'Backend: Node.js + Express with feature-based architecture (attendance, marks, feedback)',
  'Database: MongoDB with simplified schema for real-world usability',
  'System Design: Behavior-driven workflows instead of rigid rule systems',
]

const plannedEnhancements = [
  'Reverse-engineered Anna University internal mark calculation engine',
  'Advanced analytics for HOD (defaulters, performance trends)',
  'Multi-department scalability and institutional rollout',
  'Mobile-first optimization for student usage',
]

function AcadOSOverviewPage() {
  return (
    <div className="relative min-h-screen bg-slate-950 text-slate-100">
      <div className="pointer-events-none absolute inset-0 -z-0 bg-[radial-gradient(circle_at_18%_18%,rgba(56,189,248,0.16),transparent_34%),radial-gradient(circle_at_80%_0%,rgba(16,185,129,0.12),transparent_30%),radial-gradient(circle_at_50%_100%,rgba(59,130,246,0.12),transparent_40%)]" />

      <section className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6">
        <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 sm:p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-cyan-200">Product Deep Dive</p>
          <h1 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">AcadOS - Product Overview</h1>

          <p className="mt-4 max-w-4xl leading-relaxed text-slate-300">
            AcadOS is built as a real-world academic system that aligns with existing college workflows while introducing transparency, structured tracking, and accountability across all roles in the institution.
          </p>

          <div className="mt-4">
            <span className="inline-flex rounded-full border border-cyan-400/50 bg-cyan-500/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-cyan-200">
              Status: Under Development
            </span>
          </div>

          <TechStackImageStrip
            items={techStackIcons}
            stackReason="Tech stack chosen for rapid backend development, flexible schema handling, and scalable frontend architecture."
          />

          <DevelopmentEnvironmentNote
            environment="VS Code + MongoDB Compass"
            icon="/images/vscode.png"
            reason="Chosen for fast iteration, backend-focused development, and real-time database inspection during system design."
          />

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {visionSections.map((item) => (
              <article key={item.title} className="rounded-xl border border-slate-800 bg-slate-950/65 p-4">
                <h2 className="text-sm font-semibold uppercase tracking-[0.12em] text-cyan-200">{item.title}</h2>
                <p className="mt-2 text-sm leading-relaxed text-slate-300">{item.detail}</p>
              </article>
            ))}
          </div>

          <div className="mt-6 rounded-xl border border-slate-800 bg-slate-950/65 p-4">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-cyan-200">Core System Modules</p>
            <ul className="mt-3 space-y-2 text-sm text-slate-300">
              {systemModules.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="mt-6 rounded-xl border border-slate-800 bg-slate-950/65 p-4">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-cyan-200">Implemented Tech Stack</p>
            <ul className="mt-3 space-y-2 text-sm text-slate-300">
              {techStackImplemented.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="mt-6 rounded-xl border border-slate-800 bg-slate-950/65 p-4">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-cyan-200">Planned Enhancements</p>
            <ul className="mt-3 space-y-2 text-sm text-slate-300">
              {plannedEnhancements.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="mt-6 rounded-xl border border-amber-500/35 bg-amber-500/8 p-4">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-amber-100">Ownership and Vision</p>
            <p className="mt-3 text-sm leading-relaxed text-amber-50/95">
              AcadOS is designed and owned by Ramalingam under LGC Systems, with the long-term vision of scaling into a standardized academic operating system across institutions.
            </p>
          </div>

          <div className="mt-10 flex flex-wrap gap-3 border-t border-slate-800 pt-6">
            <a
              href="https://github.com/lingarobotics/AcadOS"
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

export default AcadOSOverviewPage