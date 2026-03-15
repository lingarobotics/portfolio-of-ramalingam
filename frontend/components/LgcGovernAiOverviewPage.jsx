import { Link } from 'react-router-dom'
import DevelopmentEnvironmentNote from './DevelopmentEnvironmentNote'
import TechStackImageStrip from './TechStackImageStrip'

const techStackIcons = [
  { name: 'React', src: '/images/react.png' },
  { name: 'Java', src: '/images/java.png' },
  { name: 'GitHub', src: '/images/github.png' },
]

const philosophyPoints = [
  'Human > AI: AI suggests, engineers decide.',
  'Architecture before prompt: boundaries must exist before AI interaction.',
  'Structured prompting: scope, constraints, context, and expected output are mandatory.',
  'Verification loop: AI output must pass logic, edge-case, environment, and structural checks.',
  'Professional integration: conventional commits, minimal-change principle, reversibility, and reasoning traceability.',
]

const systemPurpose = [
  'Prompt structuring templates',
  'AI output validation workflows',
  'Validation checklist management',
  'AI mistake logging',
  'Decision arbitration and audit tracking',
]

const coreModules = [
  {
    title: 'Prompt Governance',
    detail: 'Structured prompt builder with scope enforcement and context framing.',
  },
  {
    title: 'Output Validation',
    detail: 'Logical validation checklists, risk classification, and architecture alignment review.',
  },
  {
    title: 'AI Mistake Log',
    detail: 'Incorrect suggestion logging with root-cause tagging and preventive documentation.',
  },
  {
    title: 'Decision Audit',
    detail: 'Approval tracking, override logging, and reasoning history for engineering accountability.',
  },
]

const implementedStack = [
  'Frontend: React',
  'Backend: Java + Spring Boot',
  'Governance Workflows: prompt drafting workspace, output inspection, checklist manager, governance dashboard',
]

function LgcGovernAiOverviewPage() {
  return (
    <div className="relative min-h-screen bg-slate-950 text-slate-100">
      <div className="pointer-events-none absolute inset-0 -z-0 bg-[radial-gradient(circle_at_18%_18%,rgba(56,189,248,0.16),transparent_34%),radial-gradient(circle_at_80%_0%,rgba(16,185,129,0.12),transparent_30%),radial-gradient(circle_at_50%_100%,rgba(59,130,246,0.12),transparent_40%)]" />

      <section className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6">
        <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 sm:p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-cyan-200">Product Deep Dive</p>
          <h1 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">LGC Govern AI - Product Overview</h1>
          <p className="mt-4 max-w-4xl leading-relaxed text-slate-300">
            I am building LGC Govern AI as an engineering governance system to structure, validate, and audit AI-assisted development workflows while preserving engineering authority.
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
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-cyan-200">The Problem I Targeted</p>
            <p className="mt-3 text-sm leading-relaxed text-slate-300">
              AI-assisted development increases risk surfaces such as logical inconsistency, architectural drift, destructive suggestions, overengineering, and blind dependency on unverified outputs. This system exists to keep engineers in control.
            </p>
          </div>

          <div className="mt-6 rounded-xl border border-slate-800 bg-slate-950/65 p-4">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-cyan-200">Core Philosophy</p>
            <ul className="mt-3 space-y-2 text-sm text-slate-300">
              {philosophyPoints.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="mt-6 rounded-xl border border-slate-800 bg-slate-950/65 p-4">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-cyan-200">System Purpose (v1)</p>
            <ul className="mt-3 space-y-2 text-sm text-slate-300">
              {systemPurpose.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="mt-6 rounded-xl border border-slate-800 bg-slate-950/65 p-4">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-cyan-200">Core Modules</p>
            <div className="mt-3 grid gap-3 md:grid-cols-2">
              {coreModules.map((module) => (
                <article key={module.title} className="rounded-lg border border-slate-800 bg-slate-900/55 p-3">
                  <p className="text-sm font-semibold text-cyan-200">{module.title}</p>
                  <p className="mt-2 text-sm leading-relaxed text-slate-300">{module.detail}</p>
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
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-cyan-200">Current Status</p>
            <p className="mt-3 text-sm leading-relaxed text-slate-300">
              Version 0.1 is focused on core governance architecture and validation framework. Execution discipline comes before expansion.
            </p>
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
              href="https://github.com/lingarobotics/LGC-Govern-AI"
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

export default LgcGovernAiOverviewPage
