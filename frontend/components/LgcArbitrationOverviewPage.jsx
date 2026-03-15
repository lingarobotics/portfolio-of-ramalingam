import { Link } from 'react-router-dom'
import DevelopmentEnvironmentNote from './DevelopmentEnvironmentNote'
import TechStackImageStrip from './TechStackImageStrip'

const techStackIcons = [
  { name: 'Java', src: '/images/java.png' },
  { name: 'Git', src: '/images/git.png' },
  { name: 'API', src: '/images/lgc-logo.png' },
]

const problemsAddressed = [
  'Logical inconsistencies in single-model responses',
  'Hidden assumptions that reduce implementation reliability',
  'Hallucinated APIs or incorrect technical references',
  'Incomplete edge-case handling in first-pass outputs',
]

const workflowSteps = [
  'User submits a query.',
  'Engine A produces the initial response.',
  'Engine B critiques, challenges, or extends that response.',
  'Bounded iterative refinement runs with strict limits.',
  'A consolidated solution is returned for final human review.',
]

const designPrinciples = [
  'Human-in-the-loop architecture',
  'Controlled iteration with no infinite loops',
  'Clear engine separation (Expansion vs Constraint)',
  'No blind trust in single-model outputs',
  'Backend-first orchestration logic',
]

const technicalStack = [
  'Java',
  'Spring Boot',
  'Maven',
  'Lombok',
  'Bean Validation',
]

const currentScope = [
  'Basic REST endpoint',
  'Dual-model orchestration',
  'Iteration control logic',
  'Structured request validation',
  'Clean package architecture',
]

const nextScope = [
  'Persistence layer (Ledger)',
  'Scoring metrics',
  'Observability and logging enhancements',
  'Performance benchmarking',
]

const packageStructure = [
  'com.lgc.arbitration.controller',
  'com.lgc.arbitration.service',
  'com.lgc.arbitration.engine',
  'com.lgc.arbitration.dto',
  'com.lgc.arbitration.config',
]

function LgcArbitrationOverviewPage() {
  return (
    <div className="relative min-h-screen bg-slate-950 text-slate-100">
      <div className="pointer-events-none absolute inset-0 -z-0 bg-[radial-gradient(circle_at_18%_18%,rgba(56,189,248,0.16),transparent_34%),radial-gradient(circle_at_80%_0%,rgba(16,185,129,0.12),transparent_30%),radial-gradient(circle_at_50%_100%,rgba(59,130,246,0.12),transparent_40%)]" />

      <section className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6">
        <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 sm:p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-cyan-200">Product Deep Dive</p>
          <h1 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">LGC Arbitration - Product Overview</h1>
          <p className="mt-4 max-w-4xl leading-relaxed text-slate-300">
            I built LGC Arbitration as an AI-orchestrated multi-model reasoning engine for developers. Instead of relying on a single prompt-response cycle, this system uses structured AI-to-AI dialogue to refine outputs before final human acceptance.
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
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-cyan-200">Problem Statement</p>
            <p className="mt-3 text-sm leading-relaxed text-slate-300">
              Developers increasingly depend on AI for code generation, documentation drafting, architecture decisions, and debugging assistance. I designed LGC Arbitration because single-model outputs can be fragile, and stronger answers require structured cross-model reasoning with human authority preserved.
            </p>
            <ul className="mt-3 space-y-2 text-sm text-slate-300">
              {problemsAddressed.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="mt-6 rounded-xl border border-slate-800 bg-slate-950/65 p-4">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-cyan-200">Controlled Arbitration Workflow</p>
            <ul className="mt-3 space-y-2 text-sm text-slate-300">
              {workflowSteps.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ul>
          </div>

          <div className="mt-6 rounded-xl border border-slate-800 bg-slate-950/65 p-4">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-cyan-200">Design Principles</p>
            <ul className="mt-3 space-y-2 text-sm text-slate-300">
              {designPrinciples.map((principle) => (
                <li key={principle}>{principle}</li>
              ))}
            </ul>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <article className="rounded-xl border border-slate-800 bg-slate-950/65 p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-cyan-200">Architecture (v0.1)</p>
              <p className="mt-3 text-sm leading-relaxed text-slate-300">
                Backend foundation is built with Spring Boot (Java 17+), REST APIs via Spring Web, Bean Validation for request integrity, and an engine adapter abstraction layer with configuration-driven model integration.
              </p>
              <p className="mt-3 text-sm leading-relaxed text-slate-300">
                Engine A handles primary generation. Engine B handles critique and refinement. Configuration is managed through application.yml and environment variables with no hardcoded API keys.
              </p>
            </article>

            <article className="rounded-xl border border-slate-800 bg-slate-950/65 p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-cyan-200">Technical Stack</p>
              <ul className="mt-3 space-y-2 text-sm text-slate-300">
                {technicalStack.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <article className="rounded-xl border border-slate-800 bg-slate-950/65 p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-cyan-200">Current Scope (v0.1)</p>
              <ul className="mt-3 space-y-2 text-sm text-slate-300">
                {currentScope.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>

            <article className="rounded-xl border border-slate-800 bg-slate-950/65 p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-cyan-200">Future Scope</p>
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
              {packageStructure.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="mt-6 rounded-xl border border-slate-800 bg-slate-950/65 p-4">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-cyan-200">Philosophy</p>
            <p className="mt-3 text-sm leading-relaxed text-slate-300">
              Consensus is not truth. Cross-model interaction improves reasoning depth, but final judgment belongs to the human. LGC Arbitration is not a hallucination eliminator; it is a reasoning refinement system.
            </p>
          </div>

          <div className="mt-6 rounded-xl border border-slate-800 bg-slate-950/65 p-4">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-cyan-200">Status</p>
            <p className="mt-3 text-sm leading-relaxed text-slate-300">V0.1 - Backend foundation initialized.</p>
          </div>

          <div className="mt-6 rounded-xl border border-amber-500/35 bg-amber-500/8 p-4">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-amber-100">Ownership and License</p>
            <p className="mt-3 text-sm leading-relaxed text-amber-50/95">
              This software system is an original product developed under LGC Systems. The ideation, system architecture, design, and overall product vision originate from Ramalingam Jayavelu, Founder of LGC Systems.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-amber-50/95">
              All intellectual property, including architecture, design, implementation, and source code, belongs exclusively to Ramalingam Jayavelu under LGC Systems. This repository does not transfer ownership or rights to any external organization, institution, company, or third party.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-amber-50/95">
              The software is maintained and governed solely under the LGC Systems initiative.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-amber-50/95">
              License: Proprietary - All Rights Reserved.
            </p>
          </div>

          <div className="mt-10 flex flex-wrap gap-3 border-t border-slate-800 pt-6">
            <a
              href="https://github.com/lingarobotics/LGC-Arbitration"
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

export default LgcArbitrationOverviewPage
