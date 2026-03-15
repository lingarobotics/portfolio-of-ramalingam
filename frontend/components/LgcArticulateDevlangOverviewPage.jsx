import { Link } from 'react-router-dom'
import DevelopmentEnvironmentNote from './DevelopmentEnvironmentNote'
import TechStackImageStrip from './TechStackImageStrip'

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

const ownershipModel = [
  'frontend/pages: page-level implementation ownership',
  'frontend/components: UI component ownership',
  'frontend/data: scenario and bilingual content ownership',
  'backend/routes: API routing ownership',
  'backend/models: schema ownership',
  'backend/rules: evaluation logic ownership',
  'docs: maintained by team leader for conceptual consistency',
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
      <div className="pointer-events-none absolute inset-0 -z-0 bg-[radial-gradient(circle_at_18%_18%,rgba(56,189,248,0.16),transparent_34%),radial-gradient(circle_at_80%_0%,rgba(16,185,129,0.12),transparent_30%),radial-gradient(circle_at_50%_100%,rgba(59,130,246,0.12),transparent_40%)]" />

      <section className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6">
        <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 sm:p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-cyan-200">Academic Project Deep Dive</p>
          <h1 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">LGC Articulate - DevLang</h1>
          <p className="mt-4 max-w-4xl leading-relaxed text-slate-300">
            I am developing LGC Articulate - DevLang as an academic mini project prototype under the LGC Systems vision to train structured professional communication in academic and workplace contexts.
          </p>
          <div className="mt-4">
            <span className="inline-flex rounded-full border border-amber-400/50 bg-amber-500/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-amber-200">Status: Under Development (Final Review)</span>
          </div>

          <TechStackImageStrip
            items={techStackIcons}
            stackReason="Tech stack choice: JavaScript is selected for rapid prototyping and unified frontend-backend iteration without adding an extra backend language during academic development cycles."
          />

          <DevelopmentEnvironmentNote
            environment="VS Code"
            icon="/images/vscode.png"
            reason="I chose VS Code for rapid prototyping, lightweight iteration speed, and smooth workflows for JavaScript-centric or mixed non-Java development."
          />

          <div className="mt-6 rounded-xl border border-slate-800 bg-slate-950/65 p-4">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-cyan-200">Project Overview</p>
            <ul className="mt-3 space-y-2 text-sm text-slate-300">
              {learningFocus.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p className="mt-3 text-sm leading-relaxed text-slate-300">
              The system evaluates structure and professional delivery quality, not grammar correction.
            </p>
          </div>

          <div className="mt-6 rounded-xl border border-slate-800 bg-slate-950/65 p-4">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-cyan-200">Problem Statement</p>
            <ul className="mt-3 space-y-2 text-sm text-slate-300">
              {problemPoints.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="mt-6 rounded-xl border border-slate-800 bg-slate-950/65 p-4">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-cyan-200">Solution Approach and Modes</p>
            <ul className="mt-3 space-y-2 text-sm text-slate-300">
              {learningModes.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <article className="rounded-xl border border-slate-800 bg-slate-950/65 p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-cyan-200">System Architecture</p>
              <ul className="mt-3 space-y-2 text-sm text-slate-300">
                {architecturePoints.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>

            <article className="rounded-xl border border-slate-800 bg-slate-950/65 p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-cyan-200">Technology Stack</p>
              <ul className="mt-3 space-y-2 text-sm text-slate-300">
                {techStack.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          </div>

          <div className="mt-6 rounded-xl border border-slate-800 bg-slate-950/65 p-4">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-cyan-200">Folder Ownership Model</p>
            <ul className="mt-3 space-y-2 text-sm text-slate-300">
              {ownershipModel.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <article className="rounded-xl border border-slate-800 bg-slate-950/65 p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-cyan-200">Project Scope</p>
              <ul className="mt-3 space-y-2 text-sm text-slate-300">
                {scopeItems.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>

            <article className="rounded-xl border border-slate-800 bg-slate-950/65 p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-cyan-200">Learning Objectives</p>
              <ul className="mt-3 space-y-2 text-sm text-slate-300">
                {learningObjectives.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          </div>

          <div className="mt-6 rounded-xl border border-slate-800 bg-slate-950/65 p-4">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-cyan-200">Current Status</p>
            <p className="mt-3 text-sm leading-relaxed text-slate-300">
              The project is currently under development for the upcoming mini project final review under my lead.
            </p>
          </div>

          <div className="mt-6 rounded-xl border border-slate-800 bg-slate-950/65 p-4">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-cyan-200">Future Scope</p>
            <ul className="mt-3 space-y-2 text-sm text-slate-300">
              {futureScope.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="mt-6 rounded-xl border border-amber-500/35 bg-amber-500/8 p-4">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-amber-100">Project Origin, Ownership and License</p>
            <p className="mt-3 text-sm leading-relaxed text-amber-50/95">
              This system is an original product concept developed under LGC Systems. The ideation, system architecture, and overall product vision originate from Ramalingam Jayavelu, Founder of LGC Systems.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-amber-50/95">
              This implementation is developed as an academic mini project. Contributors are recognized for the code they implemented in assigned modules.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-amber-50/95">
              Core system concept, architectural design, and product ownership remain with Ramalingam Jayavelu under LGC Systems. No external organization, institution, or company holds ownership over the concept, architecture, or product vision.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-amber-50/95">
              License: All Rights Reserved. Copyright Ramalingam Jayavelu - LGC Systems.
            </p>
          </div>

          <div className="mt-10 flex flex-wrap gap-3 border-t border-slate-800 pt-6">
            <a
              href="https://github.com/lingarobotics/LGC-Articulate-DevLang"
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

export default LgcArticulateDevlangOverviewPage
