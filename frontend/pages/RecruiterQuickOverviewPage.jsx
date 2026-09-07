import { useState } from 'react'
import { Link } from 'react-router-dom'
import ProductHero from '../components/product/ProductHero'
import ProductInfoCard from '../components/product/ProductInfoCard'
import ProductMetrics from '../components/product/ProductMetrics'
import ProductSection from '../components/product/ProductSection'

const topHighlights = [
  {
    title: 'Reasoning-First Builder',
    detail: 'I document decisions, trade-offs, and execution flow instead of showing only final output screenshots.',
  },
  {
    title: 'Proof-Driven Portfolio',
    detail: 'Dedicated pages show AI-learning discipline, Git workflow evidence, UI iteration history, and product debugging proofs.',
  },
  {
    title: 'Leadership and Community',
    detail: 'I conduct technical events and actively participate in meetups to convert learning into practical communication.',
  },
]

const quickMetrics = [
  { label: 'Major CGPA (After Sem 6)', value: '7.85' },
  { label: 'Semester 6 GPA', value: '8.00' },
  { label: 'Core Products', value: '3' },
  { label: 'Proof Pages', value: '6+' },
]

const featuredProofLinks = [
  { label: 'Academic Performance Summary', to: '/academic-performance-summary' },
  { label: 'AI Learning Proof', to: '/ai-learning-proof' },
  { label: 'GitHub Workflow Proof', to: '/github-workflow-proof' },
  { label: 'UI Answer Evolution', to: '/ui-answer-evolution' },
  { label: 'LGC Concept AI Proof', to: '/lgc-concept-ai-proof' },
  { label: 'Events I Conducted', to: '/events-conducted' },
  { label: 'Events I Participated', to: '/meetups' },
]

const platformLinks = [
  { label: 'LGC Systems', href: 'https://lgcsystems.xyz' },
  { label: 'LGC Concept AI', href: 'https://concept-ai.lgcsystems.xyz' },
  { label: 'LGC LearnLogic CODE', href: 'https://learn-logic-code.lgcsystems.xyz' },
  { label: 'LGC Articulate DevLang', href: 'https://articulate-devlang.lgcsystems.xyz' },
]

const underDevelopmentRepos = [
  { label: 'LGC CodeBase Insight', href: 'https://github.com/lingarobotics/LGC-CodeBase-Insight' },
  { label: 'LearnGetCert', href: 'https://github.com/lingarobotics/LearnGetCert' },
  { label: 'ConceptAI API', href: 'https://github.com/lingarobotics/conceptai-api' },
  { label: 'LGC Govern AI', href: 'https://github.com/lingarobotics/LGC-Govern-AI' },
  { label: 'LGC Arbitration', href: 'https://github.com/lingarobotics/LGC-Arbitration' },
  { label: 'LGC AcadOS', href: 'https://github.com/lingarobotics/LGC-AcadOS' },
  { label: 'LGC ResultGrid', href: 'https://github.com/lingarobotics/LGC-ResultGrid' },
  { label: 'LGC ECS', href: 'https://github.com/lingarobotics/LGC-Emergency-corridor-system' },
  { label: 'CivicProof', href: 'https://github.com/lingarobotics/CivicProof' },
  { label: 'Know Your Rights', href: 'https://github.com/lingarobotics/Know-your-rights' },
]

function RecruiterQuickOverviewPage() {
  const [isClosing, setIsClosing] = useState(false)

  if (isClosing) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#fafaf8] px-4 py-16 text-[#111111]">
        <section className="w-full max-w-2xl border border-[#111111] bg-white p-8 text-center shadow-[10px_10px_0_rgba(17,17,17,0.08)] sm:p-12">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#666666]">Thank you</p>
          <h1 className="mt-4 text-3xl font-black tracking-tight sm:text-4xl">Thank you for taking the time to know about me.</h1>
          <p className="mx-auto mt-5 max-w-lg leading-relaxed text-[#444444]">I hope you found what you were looking for.</p>
          <Link
            to="/"
            className="mt-8 inline-flex border border-[#111111] bg-[#111111] px-5 py-3 text-sm font-semibold text-white shadow-[6px_6px_0_rgba(17,17,17,0.14)] transition hover:translate-x-[1px] hover:translate-y-[1px] hover:bg-[#2a2a2a] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#111111]"
          >
            Return to portfolio
          </Link>
        </section>
      </main>
    )
  }

  return (
    <div className="relative min-h-screen bg-slate-950 text-slate-100">
      <div className="pointer-events-none absolute inset-0 -z-0 bg-[radial-gradient(circle_at_18%_18%,rgba(56,189,248,0.16),transparent_34%),radial-gradient(circle_at_80%_0%,rgba(16,185,129,0.12),transparent_30%),radial-gradient(circle_at_50%_100%,rgba(59,130,246,0.12),transparent_40%)]" />

      <section className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6">
        <div>
          <ProductHero
            label="Quick Portfolio Overview"
            title="Portfolio Highlights and Proof Links"
            description="A focused starting point for understanding who I am, what I build, and the evidence behind my engineering work."
          />

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {topHighlights.map((item) => (
              <ProductInfoCard key={item.title} title={item.title} description={item.detail} />
            ))}
          </div>

          <ProductMetrics title="Performance and Portfolio Metrics" metrics={quickMetrics} />

          <ProductSection title="Featured Proof Links" className="mt-6">
            <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
              {featuredProofLinks.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  className="rounded-lg border border-slate-700 bg-slate-900/60 px-3 py-2 text-sm text-slate-200 transition hover:border-cyan-400/55 hover:text-cyan-200"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </ProductSection>

          <ProductSection title="Engineering Reflections" className="mt-6">
            <p className="max-w-3xl text-sm leading-relaxed text-slate-300">
              Beyond projects and implementation, I document engineering reflections around systems thinking, debugging, AI-assisted development, backend reasoning, architectural observations, failures, and learning through real-world system interaction.
            </p>

            <div className="mt-4 grid gap-2 sm:grid-cols-2">
              <Link
                to="/engineering-thoughts"
                className="rounded-lg border border-slate-700 bg-slate-900/60 px-4 py-3 text-sm text-slate-200 transition hover:border-cyan-400/55 hover:text-cyan-200"
              >
                Engineering Thoughts (Visual Reflection System)
              </Link>

              <a
                href="https://thoughts-of-linga.hashnode.dev/"
                target="_blank"
                rel="noreferrer"
                className="rounded-lg border border-slate-700 bg-slate-900/60 px-4 py-3 text-sm text-slate-200 transition hover:border-cyan-400/55 hover:text-cyan-200"
              >
                Blogs Of Linga (Principles & Perspectives)
              </a>
            </div>
          </ProductSection>

          <ProductSection title="Platform Links" className="mt-6">
            <div className="flex flex-wrap gap-2">
              {platformLinks.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex rounded-lg border border-slate-700 bg-slate-900/60 px-3 py-2 text-sm text-slate-200 transition hover:border-cyan-400/55 hover:text-cyan-200"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </ProductSection>

          <ProductSection title="Products Under Development (Repositories)" className="mt-6">
            <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
              {underDevelopmentRepos.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex rounded-lg border border-slate-700 bg-slate-900/60 px-3 py-2 text-sm text-slate-200 transition hover:border-cyan-400/55 hover:text-cyan-200"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </ProductSection>

          {/* Footer Actions */}
          <div className="mt-10 flex flex-wrap gap-3 border-t border-slate-800 pt-6">

            <Link
              to="/#about"
              className="inline-flex rounded-lg border border-slate-700 bg-slate-950/70 px-4 py-2 text-sm font-medium text-slate-100 transition hover:border-cyan-400/60 hover:text-cyan-200"
            >
              Explore the full portfolio →
            </Link>

            <Link
              to="/resume"
              className="inline-flex rounded-lg border border-slate-700 bg-slate-950/70 px-4 py-2 text-sm font-medium text-slate-100 transition hover:border-cyan-400/60 hover:text-cyan-200"
            >
              View Resume
            </Link>

            <a
              href="/resume.pdf"
              download="Ramalingam-Jayavelu-Resume.pdf"
              className="inline-flex rounded-lg border border-slate-700 bg-slate-950/70 px-4 py-2 text-sm font-medium text-slate-100 transition hover:border-cyan-400/60 hover:text-cyan-200"
            >
              Download Resume
            </a>

            <a
              href="https://github.com/lingarobotics"
              target="_blank"
              rel="noreferrer"
              className="inline-flex rounded-lg border border-slate-700 bg-slate-950/70 px-4 py-2 text-sm font-medium text-slate-100 transition hover:border-cyan-400/60 hover:text-cyan-200"
            >
              Open GitHub Profile
            </a>

          </div>

        </div>
      </section>
    </div>
  )
}

export default RecruiterQuickOverviewPage
