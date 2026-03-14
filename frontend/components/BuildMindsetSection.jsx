import { useState } from 'react'

const workflowSteps = [
  {
    title: 'Define the problem clearly',
    detail: 'I start by validating what must be solved, who has the problem, and what success looks like in practical terms.',
  },
  {
    title: 'Brainstorm solution paths',
    detail: 'I explore multiple options first and compare feasibility before committing to a single direction.',
  },
  {
    title: 'Define constraints',
    detail: 'I list technical, time, scope, and operational limits early so execution remains realistic.',
  },
  {
    title: 'Define trade-offs',
    detail: 'I explicitly decide what to optimize now and what to defer so the team has a stable decision baseline.',
  },
  {
    title: 'Design architecture from constraints and trade-offs',
    detail: 'Architecture is finalized only after constraints and trade-offs are clear, not before.',
  },
  {
    title: 'Scaffold folders and baseline structure',
    detail: 'I set up repository structure and module boundaries first so development remains clean as features grow.',
  },
  {
    title: 'Build frontend with clarity',
    detail: 'I implement user flows and components in a maintainable way, keeping state and structure readable.',
  },
  {
    title: 'Build backend with contract discipline',
    detail: 'I implement API behavior around explicit request-response contracts and predictable error handling.',
  },
  {
    title: 'Validate frontend-backend integration',
    detail: 'I verify contracts end to end so both sides align without interface conflicts.',
  },
]

function BuildMindsetSection() {
  const [activeStep, setActiveStep] = useState(0)

  return (
    <section id="build-mindset" className="section-atmosphere mx-auto w-full max-w-6xl scroll-mt-20 rounded-3xl px-4 py-16 sm:px-6">
      <div className="section-content rounded-2xl border border-slate-800 bg-slate-900/60 p-5 shadow-[0_0_30px_rgba(15,23,42,0.35)] sm:p-7">
        <div className="grid items-center gap-6 lg:grid-cols-[1.05fr_1.25fr]">
          <div className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-950/60">
            <img
              src="/images/builder-linga.jpeg"
              alt="Ramalingam Jayavelu building and planning systems"
              className="h-full max-h-[620px] w-full object-cover object-center"
              loading="lazy"
            />
          </div>

          <article>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-cyan-200">My Build Mindset</p>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight text-slate-100 sm:text-4xl">How I Build Products</h2>
            <p className="mt-4 leading-relaxed text-slate-300">
              I follow a structured engineering workflow so the product stays practical, scalable, and conflict-free between frontend and backend implementation.
            </p>

            <div className="mt-6 grid gap-2 sm:grid-cols-2">
              {workflowSteps.map((step, index) => {
                const isActive = activeStep === index

                return (
                  <button
                    key={step.title}
                    type="button"
                    onClick={() => setActiveStep(index)}
                    className={`rounded-xl border px-3 py-2 text-left text-xs font-semibold transition sm:text-sm ${
                      isActive
                        ? 'border-cyan-300/70 bg-cyan-400/15 text-cyan-100'
                        : 'border-slate-700 bg-slate-950/70 text-slate-300 hover:border-cyan-400/55 hover:text-cyan-100'
                    }`}
                    aria-pressed={isActive}
                  >
                    <span className="mr-2 text-cyan-200">{index + 1}.</span>
                    {step.title}
                  </button>
                )
              })}
            </div>

            <div className="mt-4 rounded-xl border border-cyan-400/35 bg-slate-950/75 p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-cyan-200">Active Step</p>
              <h3 className="mt-2 text-base font-semibold text-slate-100 sm:text-lg">{workflowSteps[activeStep].title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-300 sm:text-base">{workflowSteps[activeStep].detail}</p>
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}

export default BuildMindsetSection
