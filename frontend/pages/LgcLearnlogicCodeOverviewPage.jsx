import { Link } from 'react-router-dom'
import ProductBulletList from '../components/product/ProductBulletList'
import ProductHero from '../components/product/ProductHero'
import ProductInfoCard from '../components/product/ProductInfoCard'
import ProductOwnership from '../components/product/ProductOwnership'
import ProductSection from '../components/product/ProductSection'
import ProductRoadmap from '../components/product/ProductRoadmap'
import ProductTechList from '../components/product/ProductTechList'

const techStackIcons = [
  { name: 'React', src: '/images/react.webp' },
  { name: 'Vite', src: '/images/vite.webp' },
  { name: 'JavaScript', src: '/images/javascript.webp' },
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
        <div>
          <ProductHero
            label="Product Deep Dive"
            title="LGC LearnLogic CODE - Product Overview"
            description="I built LGC LearnLogic CODE as a programming learning system centered on reasoning, execution clarity, and verification of understanding rather than memorization."
            status="Status: Under Evolution"
            techStackItems={techStackIcons}
            stackReason="Tech stack choice: JavaScript is selected for rapid prototyping and frontend-focused iteration without adding an extra backend language at this stage."
            environment="VS Code"
            environmentIcon="/images/vscode.webp"
            environmentReason="I chose VS Code for rapid prototyping, lightweight iteration speed, and smooth workflows for JavaScript-centric or mixed non-Java development."
          />

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {coreSections.map((item) => (
              <ProductInfoCard key={item.title} title={item.title} description={item.detail} />
            ))}
          </div>

          <ProductBulletList title="Learning Principles" items={learningPrinciples} />

          <ProductSection title="Current Scope (v2.0)" className="mt-6">
            <p className="text-sm leading-relaxed text-slate-300">
              The current implementation is frontend-only using React. Learning flows, conceptual examples, reading guides, and teach-back verification structure are implemented in UI. Backend features like persistence, authentication, and progress history are intentionally planned for later versions.
            </p>
          </ProductSection>

          <ProductTechList title="Implemented Tech Stack" items={implementedStack} />



          <ProductOwnership
            paragraphs={[
              'This project is owned by Ramalingam Jayavelu under LGC Systems.',
              'License: Proprietary - All Rights Reserved unless explicitly stated otherwise in the repository license file.',
            ]}
          />

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

