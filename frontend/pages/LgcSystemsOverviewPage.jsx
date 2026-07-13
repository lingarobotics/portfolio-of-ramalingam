import { Link } from 'react-router-dom'
import ProductBulletList from '../components/product/ProductBulletList'
import ProductHero from '../components/product/ProductHero'
import ProductInfoCard from '../components/product/ProductInfoCard'
import ProductOwnership from '../components/product/ProductOwnership'
import ProductSection from '../components/product/ProductSection'
import ProductRoadmap from '../components/product/ProductRoadmap'
import ProductTechList from '../components/product/ProductTechList'

const techStackIcons = [
  { name: 'TypeScript', src: '/images/typescript.webp' },
  { name: 'React', src: '/images/react.webp' },
  { name: 'Vite', src: '/images/vite.webp' },
]

const philosophy = [
  'Understanding over memorization',
  'Reasoning over copying solutions',
  'Teach-back over passive consumption',
  'Consistency over speed',
  'Learning should cost effort, not money',
]

const systemsUnderLgc = [
  {
    name: 'LGC Concept AI',
    focus: 'Concept verification through structured explanation, doubt clarification, and teach-back validation.',
  },
  {
    name: 'LGC LearnLogic CODE',
    focus: 'Logic-first programming learning with execution-flow reasoning, defensive thinking, and clarity before syntax.',
  },
]

const implementedStack = [
  'Framework: Next.js (App Router)',
  'Language: TypeScript',
  'Styling: Global CSS (clarity-first, no Tailwind)',
  'Performance: Next.js font optimization and metadata-driven SEO/OG setup',
  'UX Layer: client-side splash screen and minimal dependency approach',
]

const repositoryScope = [
  'Umbrella website and platform shell (lgcsystems.xyz)',
  'Shared layout, navigation, and presentation structure',
  'Systems documentation and philosophy communication',
  'Contact and collaboration entry points',
  'Foundation for future shared services such as identity/SSO',
]

const futureDirection = [
  'Shared identity (SSO) across LGC systems',
  'Deeper learning continuity between tools',
  'Community-driven contribution pathways',
  'Additional learning systems under the LGC umbrella',
]

function LgcSystemsOverviewPage() {
  return (
    <div className="relative min-h-screen bg-slate-950 text-slate-100">
      <div className="pointer-events-none absolute inset-0 -z-0 bg-[radial-gradient(circle_at_18%_18%,rgba(56,189,248,0.16),transparent_34%),radial-gradient(circle_at_80%_0%,rgba(16,185,129,0.12),transparent_30%),radial-gradient(circle_at_50%_100%,rgba(59,130,246,0.12),transparent_40%)]" />

      <section className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6">
        <div>
          <ProductHero
            label="Product Deep Dive"
            title="LGC Systems - Umbrella Platform Overview"
            description="I built LGC Systems as a learning-first technology umbrella focused on clarity, reasoning, and long-term understanding instead of shortcuts, hype, or surface-level progress."
            status="Status: Under Evolution"
            techStackItems={techStackIcons}
            stackReason="Tech stack choice: JavaScript/TypeScript is selected for rapid prototyping and unified frontend-backend iteration without adding an extra backend language."
            environment="VS Code"
            environmentIcon="/images/vscode.webp"
            environmentReason="I chose VS Code for rapid prototyping, lightweight iteration speed, and smooth workflows for JavaScript-centric or mixed non-Java development."
          />

          <ProductBulletList title="Core Philosophy" items={philosophy} />

          <ProductSection title="Systems Under LGC" className="mt-6">
            <div className="grid gap-3 md:grid-cols-2">
              {systemsUnderLgc.map((system) => (
                <ProductInfoCard key={system.name} title={system.name} description={system.focus} className="bg-slate-900/55" />
              ))}
            </div>
          </ProductSection>

          <ProductTechList title="Implemented Tech Stack" items={implementedStack} />

          <ProductBulletList title="Repository Scope" items={repositoryScope} />

          <ProductRoadmap title="Future Direction" items={futureDirection} />

          <ProductOwnership
            paragraphs={[
              'This project is owned by Ramalingam Jayavelu under LGC Systems.',
              'License: Proprietary - All Rights Reserved unless explicitly stated otherwise in the repository license file.',
            ]}
          />

          <div className="mt-10 flex flex-wrap gap-3 border-t border-slate-800 pt-6">
            <a
              href="https://github.com/lingarobotics/lgcsystems"
              target="_blank"
              rel="noreferrer"
              className="inline-flex rounded-lg border border-slate-700 bg-slate-950/70 px-4 py-2 text-sm font-medium text-slate-100 transition hover:border-cyan-400/60 hover:text-cyan-200"
            >
              View Repository
            </a>
            <a
              href="https://lgcsystems.xyz"
              target="_blank"
              rel="noreferrer"
              className="inline-flex rounded-lg border border-emerald-400/50 bg-emerald-500/10 px-4 py-2 text-sm font-medium text-emerald-100 transition hover:border-emerald-300 hover:bg-emerald-500/20"
            >
              Open Platform
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

export default LgcSystemsOverviewPage

