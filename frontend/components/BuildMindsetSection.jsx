import { useState } from 'react'

const workflowSteps = [
  {
    title: 'Define the problem statement',
    detail:
      'Clearly identify what problem exists, who experiences it, why it matters, and how success will be measured before discussing implementation.',
  },
  {
    title: 'Understand the desired outcome',
    detail:
      'Define what the ideal solution should achieve from user, business, and engineering perspectives before evaluating technologies or implementation approaches.',
  },
  {
    title: 'Identify constraints',
    detail:
      'List technical, operational, timeline, scalability, resource, team, and platform constraints that influence engineering decisions.',
  },
  {
    title: 'Evaluate trade-offs',
    detail:
      'Every solution introduces compromises. Explicitly identify what should be optimized now, what can be deferred, and what complexity is acceptable.',
  },
  {
    title: 'Design architecture iteratively',
    detail:
      'Architecture emerges from constraints and trade-offs. As understanding improves, architecture is refined repeatedly until major risks and assumptions are addressed.',
  },
  {
    title: 'Break the system into components',
    detail:
      'Decompose the architecture into smaller responsibilities, services, modules, and features so ownership and implementation becomes manageable.',
  },
  {
    title: 'Define folder structure and ownership',
    detail:
      'Organize the codebase around features and responsibilities. Establish ownership boundaries so contributors can work independently with minimal collisions.',
  },
  {
    title: 'Establish frontend-backend contracts',
    detail:
      'Define request formats, response structures, validation rules, required fields, status codes, and expected behaviors before implementation begins.',
  },
  {
    title: 'Build backend around contracts',
    detail:
      'Implement backend services with predictable APIs, validation boundaries, business rules, error handling, and documented request-response behavior.',
  },
  {
    title: 'Build frontend around contracts',
    detail:
      'Frontend implementation should consume agreed contracts rather than assumptions, ensuring consistency and reducing integration issues.',
  },
  {
    title: 'Validate contract alignment',
    detail:
      'Verify that frontend requests match backend expectations and that backend responses match frontend assumptions across all major workflows.',
  },
  {
    title: 'Collaborate without collisions',
    detail:
      'Break work into ownership areas. Team members primarily work within their assigned modules, communicate interface changes, and coordinate naming conventions to minimize merge conflicts.',
  },
]

function BuildMindsetSection() {
  const [activeStep, setActiveStep] = useState(0)

  return (
    <section
      id="build-mindset"
      className="section-atmosphere mx-auto w-full max-w-6xl scroll-mt-20 rounded-3xl px-4 py-16 sm:px-6"
    >
      <div className="section-content rounded-2xl border border-slate-800 bg-slate-900/60 p-5 shadow-[0_0_30px_rgba(15,23,42,0.35)] sm:p-7">
        <div className="grid items-center gap-6 lg:grid-cols-[1.05fr_1.25fr]">

          <div className="h-full overflow-hidden rounded-2xl border border-slate-800 bg-slate-950/60">
            <img
              src="/images/builder-linga.jpeg"
              alt="Ramalingam Jayavelu building and planning systems"
              className="h-full max-h-[620px] w-full bg-slate-950/60 object-contain"
              loading="lazy"
            />
          </div>

          <article>

            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-cyan-200">
              My Engineering Mindset
            </p>

            <h2 className="mt-2 text-3xl font-semibold tracking-tight text-slate-100 sm:text-4xl">
              How I Approach Engineering
            </h2>

            <p className="mt-4 leading-relaxed text-slate-300">
              I approach software engineering as a systems-design process.
              Problems are clarified first, desired outcomes are understood,
              constraints and trade-offs are analyzed, architecture evolves
              iteratively, systems are decomposed into manageable components,
              contracts are defined before implementation, and ownership
              boundaries help teams build without collisions.
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
                    <span className="mr-2 text-cyan-200">
                      {index + 1}.
                    </span>

                    {step.title}
                  </button>
                )
              })}

            </div>

            <div className="mt-4 min-h-[180px] rounded-xl border border-cyan-400/35 bg-slate-950/75 p-4">

              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-cyan-200">
                Active Step
              </p>

              <h3 className="mt-2 text-base font-semibold text-slate-100 sm:text-lg">
                {workflowSteps[activeStep].title}
              </h3>

              <p className="mt-2 text-sm leading-relaxed text-slate-300 sm:text-base">
                {workflowSteps[activeStep].detail}
              </p>

            </div>

          </article>

        </div>
      </div>
    </section>
  )
}

export default BuildMindsetSection