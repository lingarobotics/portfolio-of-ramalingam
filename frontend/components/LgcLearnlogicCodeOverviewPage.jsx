import { Link } from 'react-router-dom'
import DevelopmentEnvironmentNote from './DevelopmentEnvironmentNote'
import TechStackImageStrip from './TechStackImageStrip'

const techStackIcons = [
  { name: 'React', src: '/images/react.png' },
  { name: 'Vite', src: '/images/vite.jpeg' },
  { name: 'JavaScript', src: '/images/javascript.png' },
]

const coreSections = [
  {
    title: 'Purpose',
    detail:
      'I built LGC LearnLogic CODE to structure how programming is learned. Instead of content-first delivery, this system emphasizes learning behavior: conceptual clarity, execution reasoning, and understanding verification.',
  },
  {
    title: 'What This System Is',
    detail:
      'This is a frontend-first programming learning system focused on thinking quality. It is not positioned as an expert-led course or an AI tutoring replacement.',
  },
  {
    title: 'Why It Matters',
    detail:
      'Many learners memorize syntax without understanding runtime behavior. I built this product to push concept-before-syntax learning and teach-back validation so understanding is honest and testable.',
  },
]

const learningPrinciples = [
  'Concept before syntax',
  'Teach-back explanation for understanding verification',
  'Abstraction over memorization',
  'Execution-flow awareness (order, edge cases, failure points)',
  'Defensive programming orientation',
  'Minimalism in explanation and learning structure',
]

const implementedStack = [
  'Frontend: React + Vite',
  'UI Scope: learning flows, examples, reading guides, and teach-back verification structure',
  'Deployment Pattern: frontend-first implementation',
]

const plannedStack = [
  'Backend services for persistence and verification history',
  'Authentication and progress tracking',
  'Structured learner state management for long-term learning continuity',
]

function LgcLearnlogicCodeOverviewPage() {
  return (
    <div className="relative min-h-screen bg-slate-950 text-slate-100">
      <div className="pointer-events-none absolute inset-0 -z-0 bg-[radial-gradient(circle_at_18%_18%,rgba(56,189,248,0.16),transparent_34%),radial-gradient(circle_at_80%_0%,rgba(16,185,129,0.12),transparent_30%),radial-gradient(circle_at_50%_100%,rgba(59,130,246,0.12),transparent_40%)]" />

      <section className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6">
        <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 sm:p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-cyan-200">Product Deep Dive</p>
          <h1 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">LGC LearnLogic CODE - Product Overview</h1>
          <p className="mt-4 max-w-4xl leading-relaxed text-slate-300">
            I built LGC LearnLogic CODE as a programming learning system centered on reasoning, execution clarity, and verification of understanding rather than memorization.
          </p>
          <div className="mt-4">
            <span className="inline-flex rounded-full border border-cyan-400/50 bg-cyan-500/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-cyan-200">Status: Under Evolution</span>
          </div>

          <TechStackImageStrip
            items={techStackIcons}
            stackReason="Tech stack choice: JavaScript is selected for rapid prototyping and frontend-focused iteration without adding an extra backend language at this stage."
          />

          <DevelopmentEnvironmentNote
            environment="VS Code"
            icon="/images/vscode.png"
            reason="I chose VS Code for rapid prototyping, lightweight iteration speed, and smooth workflows for JavaScript-centric or mixed non-Java development."
          />

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {coreSections.map((item) => (
              <article key={item.title} className="rounded-xl border border-slate-800 bg-slate-950/65 p-4">
                <h2 className="text-sm font-semibold uppercase tracking-[0.12em] text-cyan-200">{item.title}</h2>
                <p className="mt-2 text-sm leading-relaxed text-slate-300">{item.detail}</p>
              </article>
            ))}
          </div>

          <div className="mt-6 rounded-xl border border-slate-800 bg-slate-950/65 p-4">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-cyan-200">Learning Principles</p>
            <ul className="mt-3 space-y-2 text-sm text-slate-300">
              {learningPrinciples.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </div>

          <div className="mt-6 rounded-xl border border-slate-800 bg-slate-950/65 p-4">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-cyan-200">Current Scope (v2.0)</p>
            <p className="mt-3 text-sm leading-relaxed text-slate-300">
              The current implementation is frontend-only using React. Learning flows, conceptual examples, reading guides, and teach-back verification structure are implemented in UI. Backend features like persistence, authentication, and progress history are intentionally planned for later versions.
            </p>
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
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-cyan-200">Planned Stack and Next Scope</p>
            <ul className="mt-3 space-y-2 text-sm text-slate-300">
              {plannedStack.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="mt-6 rounded-xl border border-slate-800 bg-slate-950/65 p-4">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-cyan-200">Role of AI in This Product</p>
            <p className="mt-3 text-sm leading-relaxed text-slate-300">
              In this system, AI is not the primary learning pathway. I use AI only for explanation validation, transcript summarization into conceptual outlines, and practice support after first-principles learning has already happened.
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
              href="https://github.com/lingarobotics/LGC-LearnLogic-CODE"
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

export default LgcLearnlogicCodeOverviewPage
