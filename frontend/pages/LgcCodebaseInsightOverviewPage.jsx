import { Link } from 'react-router-dom'
import ProductBulletList from '../components/product/ProductBulletList'
import ProductHero from '../components/product/ProductHero'
import ProductOwnership from '../components/product/ProductOwnership'
import ProductInfoCard from '../components/product/ProductInfoCard'
import ProductSection from '../components/product/ProductSection'

const techStackIcons = [
  { name: 'React', src: '/images/react.webp' },
  { name: 'Supabase', src: '/images/supabase.webp' },
  { name: 'Java', src: '/images/java.webp' },
  { name: 'Spring Boot', src: '/images/springboot.webp' },
]

const whyItExists = [
  'I built LGC CodeBase Insight because software engineering is learned through understanding architecture, implementation decisions, and engineering reasoning—not just isolated code examples.',
  'The platform organizes engineering knowledge into structured concepts that developers can study progressively instead of navigating scattered resources.',
  'The initial knowledge source is the Learn With Linga repository, providing a curated foundation for architecture-first learning.',
]

const reasoningLoop = [
  'Explore: Navigate repository structure and identify architectural boundaries.',
  'Analyze: Understand responsibilities, dependencies, and implementation flow.',
  'Reason: Evaluate why abstractions exist and the trade-offs behind engineering decisions.',
  'Extract: Capture reusable architecture patterns, design principles, and implementation insights.',
  'Teach: Convert repository knowledge into structured engineering explanations.',
]

const v1Codebases = [
  {
    name: 'Learn With Linga',
    repo: 'https://github.com/lingarobotics/learning-insights-lgc',
    focus:
      'A curated engineering knowledge repository containing architecture explanations, backend concepts, frontend engineering, software design patterns, implementation insights, and real-world learning documentation.',
  },
]

const implementedStack = [
  'Frontend: React Progressive Web Application (PWA)',
  'Knowledge Repository: Learn With Linga engineering insights',
  'Database: Supabase (PostgreSQL) for structured knowledge storage',
  'Future Backend: Java + Spring Boot reasoning and retrieval services',
]

const currentFocus = [
  'Curated engineering knowledge repository',
  'Structured insight organization',
  'Supabase knowledge storage',
  'Architecture-first documentation',
]

function LgcCodebaseInsightOverviewPage() {
  return (
    <div className="relative min-h-screen bg-slate-950 text-slate-100">
      <div className="pointer-events-none absolute inset-0 -z-0 bg-[radial-gradient(circle_at_18%_18%,rgba(56,189,248,0.16),transparent_34%),radial-gradient(circle_at_80%_0%,rgba(16,185,129,0.12),transparent_30%),radial-gradient(circle_at_50%_100%,rgba(59,130,246,0.12),transparent_40%)]" />

      <section className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6">
        <div>
          <ProductHero
            label="Product Deep Dive"
            title="LGC CodeBase Insight - Product Overview"
            description="LGC CodeBase Insight is a knowledge engineering platform that transforms curated software engineering knowledge into structured architectural concepts, implementation insights, and reasoning workflows. The initial knowledge base is powered by Learn With Linga and organized using Supabase, with future expansion toward AI-assisted engineering retrieval and repository reasoning."
            status="Status: Under Development"
            statusClassName="inline-flex rounded-full border border-amber-400/50 bg-amber-500/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-amber-200"
            techStackItems={techStackIcons}
            stackReason="React and Supabase enable rapid knowledge platform development, while Java and Spring Boot are planned for future backend reasoning and retrieval services as the system evolves."
            environment="VS Code"
            environmentIcon="/images/vscode.webp"
            environmentReason="The current platform is developed using React and Supabase, while IntelliJ IDEA Ultimate is prepared for future backend services built with Java and Spring Boot."
          />

          <ProductBulletList title="Why This Platform Exists" items={whyItExists} />

          <ProductBulletList title="Knowledge Extraction Workflow" items={reasoningLoop} />

          <ProductBulletList
            title="Engineering Focus"
            items={['Engineering knowledge modeling', 'Software design pattern discovery', 'Knowledge extraction from production code', 'Engineering documentation generation', 'Repository reasoning workflows', 'Architecture-first learning']}
          />

          <ProductSection title="Knowledge Repository" className="mt-6">
            <div className="grid gap-3 md:grid-cols-3">
              {v1Codebases.map((codebase) => (
                <ProductInfoCard key={codebase.name} title={codebase.name} description={codebase.focus} className="bg-slate-900/55">
                  <a
                    href={codebase.repo}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-3 inline-flex text-xs font-semibold uppercase tracking-[0.12em] text-cyan-200 hover:underline"
                  >
                    Open Repository
                  </a>
                </ProductInfoCard>
              ))}
            </div>
          </ProductSection>

          <ProductBulletList title="Current System Architecture" items={implementedStack} />

          <ProductBulletList title="Current Focus" items={currentFocus} />

          <ProductOwnership
            paragraphs={[
              'This project is owned by Ramalingam Jayavelu under LGC Systems.',
              'License: Proprietary - All Rights Reserved unless explicitly stated otherwise in the repository license file.',
            ]}
          />

          <div className="mt-10 flex flex-wrap gap-3 border-t border-slate-800 pt-6">
            <a
              href="https://github.com/lingarobotics/LGC-CodeBase-Insight"
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

export default LgcCodebaseInsightOverviewPage

