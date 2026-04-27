import { Link } from 'react-router-dom'
import DevelopmentEnvironmentNote from '../components/DevelopmentEnvironmentNote'
import TechStackImageStrip from '../components/TechStackImageStrip'

const techStackIcons = [
  { name: 'React', src: '/images/react.png' },
  { name: 'JavaScript', src: '/images/javascript.png' },
  { name: 'MongoDB', src: '/images/mongodb.png' },
]

const learningFocus = [
  'Clarity of expression',
  'Professional tone selection',
  'Role-based communication',
  'Structured response framing',
  'Avoidance of vague or informal wording',
]

const problemPoints = [
  'Students struggle to explain technical ideas clearly in interviews',
  'Project-review responses often lack structured articulation',
  'Tone adaptation for professional roles is inconsistent',
  'Casual wording weakens communication quality',
]

const learningModes = [
  'Learn Mode: observe structured professional examples with role and tone explanations; no evaluation.',
  'Doubt Mode: ask clarification questions about wording and phrasing with structured reasoning support.',
  'Evaluation Mode: submit scenario responses and receive rule-based feedback on clarity, tone, role awareness, and specificity.',
]

const architecturePoints = [
  'Frontend: UI, mode navigation, scenario display, response input, feedback visualization',
  'Backend: rule-based evaluation APIs, routing, data storage, retrieval',
  'Rules Engine: criteria-driven articulation evaluation logic',
]

const techStack = [
  'Frontend: React.js',
  'Backend: Node.js + Express.js',
  'Database: MongoDB',
  'Architecture: Modular rule-based evaluation system',
]

const scopeItems = [
  'Predefined professional communication scenarios',
  'Rule-based evaluation logic',
  'Working and explainable academic prototype',
  'Academic timeline constraint: six weeks',
]

const learningObjectives = [
  'Structured module ownership',
  'Controlled collaboration',
  'Role-based task assignment',
  'Frontend and backend integration basics',
  'Documentation discipline',
  'Industry-style workflow simulation',
]

const futureScope = [
  'Expanded scenario database',
  'Advanced rule refinement',
  'Analytics-driven feedback',
  'Java-based backend version',
  'Integration with broader LGC Systems modules',
]

function LgcArticulateDevlangOverviewPage() {
  return (
    <div className="relative min-h-screen bg-slate-950 text-slate-100">
      <section className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6">
        <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 sm:p-8">

          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-cyan-200">
            Academic Project Deep Dive
          </p>

          <h1 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">
            LGC Articulate - DevLang
          </h1>

          <p className="mt-4 max-w-4xl leading-relaxed text-slate-300">
            LGC Articulate - DevLang is a solo-developed academic project built under the LGC Systems vision to train structured professional communication in academic and workplace contexts.
          </p>

          <div className="mt-4">
            <span className="inline-flex rounded-full border border-emerald-400/50 bg-emerald-500/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-emerald-200">
              Status: Completed / Implemented
            </span>
          </div>

          <TechStackImageStrip
            items={techStackIcons}
            stackReason="Tech stack choice: JavaScript is selected for rapid prototyping and unified frontend-backend iteration."
          />

          <DevelopmentEnvironmentNote
            environment="VS Code"
            icon="/images/vscode.png"
            reason="Chosen for rapid iteration and lightweight development workflow."
          />

          <div className="mt-6 rounded-xl border border-slate-800 bg-slate-950/65 p-4">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-cyan-200">
              Project Overview
            </p>
            <ul className="mt-3 space-y-2 text-sm text-slate-300">
              {learningFocus.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="mt-6 rounded-xl border border-slate-800 bg-slate-950/65 p-4">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-cyan-200">
              Problem Statement
            </p>
            <ul className="mt-3 space-y-2 text-sm text-slate-300">
              {problemPoints.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="mt-6 rounded-xl border border-slate-800 bg-slate-950/65 p-4">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-cyan-200">
              Solution Approach and Modes
            </p>
            <ul className="mt-3 space-y-2 text-sm text-slate-300">
              {learningModes.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="mt-6 rounded-xl border border-slate-800 bg-slate-950/65 p-4">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-cyan-200">
              Current Status
            </p>
            <p className="mt-3 text-sm text-slate-300">
              The system has been fully implemented as a working academic project, demonstrating structured communication training through scenario-based learning, evaluation, and doubt resolution modes.
            </p>
          </div>

          <div className="mt-6 rounded-xl border border-amber-500/35 bg-amber-500/8 p-4">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-amber-100">
              Ownership
            </p>
            <p className="mt-3 text-sm text-amber-50/95">
              This system is fully designed and implemented as a solo academic project by Ramalingam Jayavelu under LGC Systems.
            </p>
          </div>

          <div className="mt-10 flex gap-3 border-t border-slate-800 pt-6">
            <a
              href="https://github.com/lingarobotics/LGC-Articulate-DevLang"
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2 border rounded text-sm"
            >
              View Repository
            </a>

            <Link to="/" className="px-4 py-2 border rounded text-sm">
              Back
            </Link>
          </div>

        </div>
      </section>
    </div>
  )
}

export default LgcArticulateDevlangOverviewPage