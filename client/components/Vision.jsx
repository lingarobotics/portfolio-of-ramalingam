const visionStatements = [
  'I built LGC Systems to create learning-first tools that help developers and students verify real understanding.',
  'I see many learning platforms measure progress through completion metrics, certificates, or surface-level engagement.',
  'I focus instead on reasoning depth, conceptual clarity, and the ability to explain ideas clearly.',
  'I am building an ecosystem of tools designed to strengthen both conceptual understanding and execution thinking.',
]

const systemsStatements = [
  'With LGC Concept AI, I focus on verifying conceptual understanding through explanation.',
  'With LGC LearnLogic CODE, I focus on developing logic-first programming skills by emphasizing execution flow and reasoning before syntax.',
]

function Vision() {
  return (
    <section id="vision" className="section-atmosphere mx-auto w-full max-w-6xl scroll-mt-20 rounded-3xl px-4 py-16 sm:px-6">
      <div className="section-content rounded-2xl border border-slate-800 bg-slate-900/60 p-6 shadow-[0_0_36px_rgba(15,23,42,0.45)] sm:p-8">
        <h2 className="motion-rise text-center text-3xl font-semibold tracking-tight text-slate-100 sm:text-4xl">My Vision for LGC Systems</h2>

        <div className="mt-8 grid gap-4 lg:grid-cols-2">
          {visionStatements.map((statement) => (
            <article
              key={statement}
              className="motion-rise motion-rise-delay-1 rounded-xl border border-slate-800/90 bg-slate-950/50 p-5 text-left transition duration-300 hover:-translate-y-0.5 hover:border-cyan-400/40 hover:shadow-[0_0_24px_rgba(34,211,238,0.14)]"
            >
              <p className="leading-relaxed text-slate-300">{statement}</p>
            </article>
          ))}
        </div>

        <div className="motion-rise motion-rise-delay-2 mt-8 rounded-xl border border-cyan-500/30 bg-cyan-500/10 p-5">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-200">Systems Focus</p>
          <div className="grid gap-4 md:grid-cols-2">
            {systemsStatements.map((statement) => (
              <article key={statement} className="rounded-lg border border-slate-800 bg-slate-950/55 p-4 text-left transition duration-300 hover:border-cyan-400/35">
                <p className="leading-relaxed text-slate-300">{statement}</p>
              </article>
            ))}
          </div>
        </div>

        <blockquote className="motion-rise motion-rise-delay-3 mt-8 rounded-xl border border-cyan-400/40 bg-slate-950/70 p-6 text-left">
          <p className="leading-relaxed text-slate-200">
            Through these systems, my goal is to help developers understand not just how code works, but why it works.
          </p>
        </blockquote>
      </div>
    </section>
  )
}

export default Vision
