import { Link } from 'react-router-dom'
import DevelopmentEnvironmentNote from '../components/DevelopmentEnvironmentNote'
import TechStackImageStrip from '../components/TechStackImageStrip'

const techStackIcons = [
  { name: 'Java', src: '/images/java.png' },
  { name: 'React', src: '/images/react.png' },
  { name: 'Vite', src: '/images/vite.jpeg' },
]

const systemGoals = [
  'Serve 700,000 to 1,000,000 students during peak result release traffic',
  'Support 700K individual JSON result files',
  'Avoid server overload and CAPTCHA/session failure patterns',
  'Enable secure result access with fast CDN-backed delivery',
]

const legacyProblems = [
  'Session mismatch under concurrent load',
  'CAPTCHA failure at peak traffic',
  'Database bottlenecks and timeout chains',
  'Dynamic render instability and invalid data errors',
]

const architectureFlow = [
  'Exam Cell exports result dataset',
  'CSV dataset is uploaded and parsed',
  'Structured JSON dataset is generated',
  'Result engine produces 700K individual JSON files',
  'Files are stored in CDN or object storage',
  'Student browser fetches JSON and frontend renders the result',
]

const securityLayers = [
  'HTTPS/TLS for encrypted transport',
  'Client-side DOB hash verification before render',
  'Optional signed short-lived token flow to limit bulk scraping',
]

const scalingBenefits = [
  'No session dependency in result delivery path',
  'No CAPTCHA dependency in the core result access path',
  'No database query per student request at publish time',
  'CDN caching allows very high request throughput',
]

const currentScope = [
  'Static result-file architecture design',
  'Hashed identity validation strategy (DOB hash)',
  'Directory sharding strategy for large file volumes',
  'Frontend rendering model for student result view',
]

const nextScope = [
  'Signed token endpoint for temporary access authorization',
  'Operational observability and abuse monitoring',
  'Automated data pipeline hardening and validation checks',
  'Performance testing at large concurrency levels',
]

const projectStructure = [
  'config/ for database and redis config adapters',
  'data/ for raw and processed result sources',
  'scripts/ for CSV parsing and JSON generation',
  'public/ for result UI pages and rendering logic',
  'results/ for sharded static JSON output',
  'server/ for API routes, controllers, and services',
  'utils/ for crypto, validators, and logging helpers',
]

function LgcResultGridOverviewPage() {
  return (
    <div className="relative min-h-screen bg-slate-950 text-slate-100">
      <div className="pointer-events-none absolute inset-0 -z-0 bg-[radial-gradient(circle_at_18%_18%,rgba(56,189,248,0.16),transparent_34%),radial-gradient(circle_at_80%_0%,rgba(16,185,129,0.12),transparent_30%),radial-gradient(circle_at_50%_100%,rgba(59,130,246,0.12),transparent_40%)]" />

      <section className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6">
        <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 sm:p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-cyan-200">Product Deep Dive</p>
          <h1 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">LGC ResultGrid - Product Overview</h1>
          <p className="mt-4 max-w-4xl leading-relaxed text-slate-300">
            LGC ResultGrid is currently in ideation stage. I am preparing to build it as a secure and scalable university result publishing system that can handle high-traffic release windows through static JSON delivery.
          </p>
          <div className="mt-4">
            <span className="inline-flex rounded-full border border-amber-400/50 bg-amber-500/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-amber-200">Status: Under Development (Ideation)</span>
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
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-cyan-200">System Goal</p>
            <ul className="mt-3 space-y-2 text-sm text-slate-300">
              {systemGoals.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <article className="rounded-xl border border-slate-800 bg-slate-950/65 p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-cyan-200">Legacy Portal Failure Points</p>
              <ul className="mt-3 space-y-2 text-sm text-slate-300">
                {legacyProblems.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>

            <article className="rounded-xl border border-slate-800 bg-slate-950/65 p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-cyan-200">Core Design Philosophy</p>
              <p className="mt-3 text-sm leading-relaxed text-slate-300">
                Instead of computing results dynamically for every request, I generate result artifacts once and serve them as static files. This shifts the runtime load away from database and session layers.
              </p>
            </article>
          </div>

          <div className="mt-6 rounded-xl border border-slate-800 bg-slate-950/65 p-4">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-cyan-200">Core Architecture Flow</p>
            <ul className="mt-3 space-y-2 text-sm text-slate-300">
              {architectureFlow.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <article className="rounded-xl border border-slate-800 bg-slate-950/65 p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-cyan-200">Result Storage Model</p>
              <p className="mt-3 text-sm leading-relaxed text-slate-300">
                Each student has one JSON result file, for example results/421223125019.json, containing student profile, subject grades, SGPA, CGPA, and hashed DOB for verification.
              </p>
              <p className="mt-3 text-sm leading-relaxed text-slate-300">
                For large-scale storage, I use directory sharding such as results/4212/2312/5019.json to keep lookup performance filesystem-friendly.
              </p>
            </article>

            <article className="rounded-xl border border-slate-800 bg-slate-950/65 p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-cyan-200">Result Access Flow</p>
              <p className="mt-3 text-sm leading-relaxed text-slate-300">
                Student enters register number and date of birth. Frontend computes the DOB hash, fetches the JSON file, and renders only if entered hash equals stored hash. Otherwise access is denied.
              </p>
            </article>
          </div>

          <div className="mt-6 rounded-xl border border-slate-800 bg-slate-950/65 p-4">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-cyan-200">Security Layers</p>
            <ul className="mt-3 space-y-2 text-sm text-slate-300">
              {securityLayers.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="mt-6 rounded-xl border border-slate-800 bg-slate-950/65 p-4">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-cyan-200">Why This System Scales</p>
            <ul className="mt-3 space-y-2 text-sm text-slate-300">
              {scalingBenefits.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p className="mt-3 text-sm leading-relaxed text-slate-300">
              Capacity target is high because the runtime path is mostly static file delivery. With CDN optimization, this architecture is built for very large request volumes.
            </p>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <article className="rounded-xl border border-slate-800 bg-slate-950/65 p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-cyan-200">Current Scope</p>
              <ul className="mt-3 space-y-2 text-sm text-slate-300">
                {currentScope.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>

            <article className="rounded-xl border border-slate-800 bg-slate-950/65 p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-cyan-200">Planned Next Scope</p>
              <ul className="mt-3 space-y-2 text-sm text-slate-300">
                {nextScope.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          </div>

          <div className="mt-6 rounded-xl border border-slate-800 bg-slate-950/65 p-4">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-cyan-200">Project Structure</p>
            <ul className="mt-3 space-y-2 text-sm text-slate-300">
              {projectStructure.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="mt-6 rounded-xl border border-slate-800 bg-slate-950/65 p-4">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-cyan-200">Implementation Baseline</p>
            <p className="mt-3 text-sm leading-relaxed text-slate-300">
              Backend baseline is Java with Spring Boot orchestration. Frontend is currently planned as a React-based result rendering interface placeholder and can be replaced by any lightweight client renderer later.
            </p>
          </div>

          <div className="mt-6 rounded-xl border border-slate-800 bg-slate-950/65 p-4">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-cyan-200">Status</p>
            <p className="mt-3 text-sm leading-relaxed text-slate-300">Ideation stage. Architecture model is prepared from real high-load result portal failure observations, and implementation is planned to start next.</p>
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
              href="https://github.com/lingarobotics/LGC-ResultGrid"
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

export default LgcResultGridOverviewPage
