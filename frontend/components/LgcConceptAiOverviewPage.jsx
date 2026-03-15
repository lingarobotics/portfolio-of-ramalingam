import { Link } from 'react-router-dom'
import DevelopmentEnvironmentNote from './DevelopmentEnvironmentNote'
import TechStackImageStrip from './TechStackImageStrip'

const techStackIcons = [
  { name: 'React', src: '/images/react.png' },
  { name: 'Vite', src: '/images/vite.jpeg' },
  { name: 'JavaScript', src: '/images/javascript.png' },
]

const visionSections = [
  {
    title: 'Project Vision',
    detail:
      'I built LGC Concept AI for Anna University students who struggle with theory-heavy subjects, answer structuring, and exam confidence. The goal is not shortcut answer generation, but concept clarity that survives exam pressure.',
  },
  {
    title: 'Learning Problem I Targeted',
    detail:
      'I observed that many explanations are either too abstract or not aligned to university evaluation style. I designed this product to explain concepts step-by-step in marks-aware structure with exam relevance.',
  },
  {
    title: 'Core Outcome',
    detail:
      'This system helps learners understand deeply, structure 13-mark answers correctly, and build confidence through guided explanation flow rather than memorization-driven preparation.',
  },
]

const learningModes = [
  'Learn Mode: exam-oriented full explanation with aspect-aware structure',
  'Fast Learn Mode: key takeaways for quick revision, without deep expansion',
  'Clear Doubt Mode: micro clarification for specific confusion points',
  'Verify Understanding (Teach-Back): learner explains, system validates logic and gaps',
]

const techStackImplemented = [
  'Frontend: React + Vite with mode-isolated UI flow and mobile-friendly layout',
  'Backend: Node.js + Express with mode-based routing and prompt isolation',
  'AI Infrastructure: OpenRouter + Gemini fallback orchestration',
  'Reliability Layer: retry on rate limits, exponential backoff, provider fallback chain, timeout control, structured logging',
]

const plannedEnhancements = [
  'Mathematical rendering engine with structured equation formatting',
  'Reflection prompts to reinforce corrected understanding',
  'Subject-wise structuring and offline revision mode',
  'Non-gamified consistency tracking and richer conversational flow',
]

function LgcConceptAiOverviewPage() {
  return (
    <div className="relative min-h-screen bg-slate-950 text-slate-100">
      <div className="pointer-events-none absolute inset-0 -z-0 bg-[radial-gradient(circle_at_18%_18%,rgba(56,189,248,0.16),transparent_34%),radial-gradient(circle_at_80%_0%,rgba(16,185,129,0.12),transparent_30%),radial-gradient(circle_at_50%_100%,rgba(59,130,246,0.12),transparent_40%)]" />

      <section className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6">
        <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 sm:p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-cyan-200">Product Deep Dive</p>
          <h1 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">LGC Concept AI - Product Overview</h1>
          <p className="mt-4 max-w-4xl leading-relaxed text-slate-300">
            I built LGC Concept AI as an Anna University-oriented learning assistant focused on conceptual clarity, exam relevance, and confidence in theory answer writing.
          </p>
          <div className="mt-4">
            <span className="inline-flex rounded-full border border-cyan-400/50 bg-cyan-500/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-cyan-200">Status: Under Evolution</span>
          </div>

          <TechStackImageStrip
            items={techStackIcons}
            stackReason="Tech stack choice: JavaScript is selected for rapid prototyping and unified frontend-backend iteration without adding an extra backend language."
          />

          <DevelopmentEnvironmentNote
            environment="VS Code"
            icon="/images/vscode.png"
            reason="I chose VS Code for rapid prototyping, lightweight iteration speed, and smooth workflows for JavaScript-centric or mixed non-Java development."
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
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-cyan-200">Mode-Based Learning Architecture (v2)</p>
            <ul className="mt-3 space-y-2 text-sm text-slate-300">
              {learningModes.map((mode) => (
                <li key={mode}>{mode}</li>
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
              href="https://github.com/lingarobotics/LGC-Concept-AI"
              target="_blank"
              rel="noreferrer"
              className="inline-flex rounded-lg border border-slate-700 bg-slate-950/70 px-4 py-2 text-sm font-medium text-slate-100 transition hover:border-cyan-400/60 hover:text-cyan-200"
            >
              View Repository
            </a>
            <Link
              to="/lgc-concept-ai-proof"
              className="inline-flex rounded-lg border border-emerald-400/50 bg-emerald-500/10 px-4 py-2 text-sm font-medium text-emerald-100 transition hover:border-emerald-300 hover:bg-emerald-500/20"
            >
              View Product Proof
            </Link>
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

export default LgcConceptAiOverviewPage
