import { Link } from 'react-router-dom'
import ProductBulletList from '../components/product/ProductBulletList'
import ProductHero from '../components/product/ProductHero'
import ProductOwnership from '../components/product/ProductOwnership'
import ProductSection from '../components/product/ProductSection'

const techStackIcons = [
  { name: 'React', src: '/images/react.webp' },
  { name: 'JavaScript', src: '/images/javascript.webp' },
  { name: 'MongoDB', src: '/images/mongodb.webp' },
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
        <div>
          <ProductHero
            label="Academic Project Deep Dive"
            title="LGC Articulate - DevLang"
            description="LGC Articulate - DevLang is a solo-developed academic project built under the LGC Systems vision to train structured professional communication in academic and workplace contexts."
            status="Status: Completed / Implemented"
            statusClassName="inline-flex rounded-full border border-emerald-400/50 bg-emerald-500/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-emerald-200"
            techStackItems={techStackIcons}
            stackReason="Tech stack choice: JavaScript is selected for rapid prototyping and unified frontend-backend iteration."
            environment="VS Code"
            environmentIcon="/images/vscode.webp"
            environmentReason="Chosen for rapid iteration and lightweight development workflow."
          />

          <ProductBulletList title="Project Overview" items={learningFocus} />

          <ProductBulletList title="Problem Statement" items={problemPoints} />

          <ProductBulletList title="Solution Approach and Modes" items={learningModes} />

          <ProductSection title="Current Status" className="mt-6">
            <p className="text-sm text-slate-300">
              The system has been fully implemented as a working academic project, demonstrating structured communication training through scenario-based learning, evaluation, and doubt resolution modes.
            </p>
          </ProductSection>

          <ProductOwnership
            title="Ownership"
            paragraphs={['This system is fully designed and implemented as a solo academic project by Ramalingam Jayavelu under LGC Systems.']}
          />

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
