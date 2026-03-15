import { Link } from 'react-router-dom'
import DevelopmentEnvironmentNote from './DevelopmentEnvironmentNote'
import TechStackImageStrip from './TechStackImageStrip'

const techStackIcons = [
  { name: 'React', src: '/images/react.png' },
  { name: 'Vite', src: '/images/vite.jpeg' },
  { name: 'Java', src: '/images/java.png' },
]

const visionPoints = [
  'I am building LearnGetCert under LGC Systems with a learning-first mission: Learning At No Cost.',
  'The platform guides learners toward free, high-quality resources and skill development without dependence on expensive certification pathways.',
  'This system is designed as a learning navigator, not a course-hosting platform.',
]

const platformFlow = [
  'Student login and identification',
  'Learner background collection',
  'Career direction selection',
  'Domain and role understanding guidance',
  'Connection to trusted free learning ecosystems',
  'Skill-building orientation over certificate chasing',
]

const currentStatus = [
  'Project is in early development stage',
  'Current repository contains initial project skeleton only',
  'Frontend workspace setup initialized',
  'Backend initialization started',
  'Functional platform features are not implemented yet',
]

const plannedArchitecture = [
  'Frontend: React + Vite',
  'Backend: Java + Spring Boot',
  'API Layer: REST APIs for learner guidance workflows',
]

const designPrinciples = [
  'Learning at no cost',
  'Skills over certificates',
  'Simplicity over unnecessary complexity',
  'Guidance over monetization',
  'Independent learning encouragement',
]

function LearnGetCertOverviewPage() {
  return (
    <div className="relative min-h-screen bg-slate-950 text-slate-100">
      <div className="pointer-events-none absolute inset-0 -z-0 bg-[radial-gradient(circle_at_18%_18%,rgba(56,189,248,0.16),transparent_34%),radial-gradient(circle_at_80%_0%,rgba(16,185,129,0.12),transparent_30%),radial-gradient(circle_at_50%_100%,rgba(59,130,246,0.12),transparent_40%)]" />

      <section className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6">
        <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 sm:p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-cyan-200">Product Deep Dive</p>
          <h1 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">LearnGetCert - Product Overview</h1>
          <p className="mt-4 max-w-4xl leading-relaxed text-slate-300">
            I am building LearnGetCert as a learning guidance platform that helps students choose free, skill-focused learning paths instead of expensive certification dependency.
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
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-cyan-200">Vision</p>
            <ul className="mt-3 space-y-2 text-sm text-slate-300">
              {visionPoints.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="mt-6 rounded-xl border border-slate-800 bg-slate-950/65 p-4">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-cyan-200">Planned Platform Flow</p>
            <ul className="mt-3 space-y-2 text-sm text-slate-300">
              {platformFlow.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="mt-6 rounded-xl border border-slate-800 bg-slate-950/65 p-4">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-cyan-200">Current Development Status</p>
            <ul className="mt-3 space-y-2 text-sm text-slate-300">
              {currentStatus.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="mt-6 rounded-xl border border-slate-800 bg-slate-950/65 p-4">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-cyan-200">Planned Tech Stack</p>
            <ul className="mt-3 space-y-2 text-sm text-slate-300">
              {plannedArchitecture.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="mt-6 rounded-xl border border-slate-800 bg-slate-950/65 p-4">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-cyan-200">Design Principles</p>
            <ul className="mt-3 space-y-2 text-sm text-slate-300">
              {designPrinciples.map((item) => (
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
              href="https://github.com/lingarobotics/LearnGetCert"
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

export default LearnGetCertOverviewPage
