import { Link } from 'react-router-dom'
import DevelopmentEnvironmentNote from '../components/DevelopmentEnvironmentNote'
import TechStackImageStrip from '../components/TechStackImageStrip'

const techStackIcons = [
  { name: 'Java', src: '/images/java.png' },
  { name: 'Spring Boot', src: '/images/springboot.png' },
  { name: 'PostgreSQL', src: '/images/postgresql.png' },
]

const visionSections = [
  {
    title: 'Project Vision',
    detail:
      'I designed CivicProof as a pre-vote identity assurance system to address voter impersonation and strengthen trust in democratic processes through structured verification.',
  },
  {
    title: 'System Problem I Targeted',
    detail:
      'Election systems rely heavily on manual identity checks, which can lead to impersonation, human error, and reduced trust among citizens regarding the legitimacy of their vote.',
  },
  {
    title: 'Core Outcome',
    detail:
      'CivicProof ensures that only verified individuals reach the voting booth by introducing a layered verification system combining physical validation and digital authentication.',
  },
]

const systemArchitecture = [
  'BLO Physical Verification: Ground-level identity validation and voter mapping',
  'Pre-Verification Layer: OTP-based confirmation with optional PIN/identity validation',
  'Booth Entry Validation: Fast authentication (OTP / QR / PIN) before EVM access',
  'Fallback Mechanism: Manual override ensures zero voter denial',
]

const techStackImplemented = [
  'Backend: Java + Spring Boot for secure, scalable API architecture',
  'Database: PostgreSQL for structured and reliable voter data storage',
  'Authentication: OTP-based verification with secure session handling',
  'System Design: Audit logging, rate limiting, and identity validation layers',
]

const plannedEnhancements = [
  'Face-based identity validation with fallback mechanisms',
  'AI-driven anomaly detection for suspicious voting patterns',
  'Offline booth-level caching for low network regions',
  'Scalable microservices architecture for state/national deployment',
]

function CivicProofOverviewPage() {
  return (
    <div className="relative min-h-screen bg-slate-950 text-slate-100">
      <div className="pointer-events-none absolute inset-0 -z-0 bg-[radial-gradient(circle_at_18%_18%,rgba(56,189,248,0.16),transparent_34%),radial-gradient(circle_at_80%_0%,rgba(16,185,129,0.12),transparent_30%),radial-gradient(circle_at_50%_100%,rgba(59,130,246,0.12),transparent_40%)]" />

      <section className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6">
        <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 sm:p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-cyan-200">System Design Proposal</p>
          <h1 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">CivicProof - Product Overview</h1>
          <p className="mt-4 max-w-4xl leading-relaxed text-slate-300">
            CivicProof is a pre-vote verification system designed to prevent voter impersonation and improve trust in election integrity by ensuring that the legitimate voter reaches the voting booth.
          </p>
          <div className="mt-4">
            <span className="inline-flex rounded-full border border-cyan-400/50 bg-cyan-500/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-cyan-200">
              Status: Concept + Prototype Design
            </span>
          </div>

          <TechStackImageStrip
            items={techStackIcons}
            stackReason="Java + Spring Boot is selected for its stability, security, and scalability, making it suitable for government-grade systems handling sensitive identity verification."
          />

          <DevelopmentEnvironmentNote
            environment="IntelliJ IDEA"
            icon="/images/intellijidea.png"
            reason="Chosen for strong Java ecosystem support, backend-focused development, and structured system design implementation."
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
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-cyan-200">System Architecture</p>
            <ul className="mt-3 space-y-2 text-sm text-slate-300">
              {systemArchitecture.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="mt-6 rounded-xl border border-slate-800 bg-slate-950/65 p-4">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-cyan-200">Implemented Tech Stack (Design)</p>
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
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-amber-100">Ownership and Intent</p>
            <p className="mt-3 text-sm leading-relaxed text-amber-50/95">
              This system is designed under LGC Systems as a conceptual and technical solution to strengthen democratic processes through technology-driven verification.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-amber-50/95">
              CivicProof is not an alternative voting system but a protective layer ensuring identity authenticity before voting access.
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

export default CivicProofOverviewPage