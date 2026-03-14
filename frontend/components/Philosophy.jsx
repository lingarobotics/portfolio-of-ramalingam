const principles = [
  'Understanding > Memorization',
  'Reasoning > Copying Solutions',
  'Teach-back > Passive Consumption',
  'Consistency > Intensity',
  'Learning before building',
]

function Philosophy() {
  return (
    <section id="philosophy" className="mx-auto w-full max-w-6xl scroll-mt-20 px-4 py-16 sm:px-6">
      <h2 className="text-3xl font-semibold tracking-tight text-slate-100 sm:text-4xl">Core Learning Philosophy</h2>

      <article className="mt-6 rounded-2xl border border-cyan-500/35 bg-cyan-500/10 p-6 text-slate-200 shadow-[0_0_24px_rgba(34,211,238,0.14)]">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-200">LGC Acronym</p>
        <p className="mt-3 text-xl font-semibold text-slate-100">Learn - Govern - Construct</p>
        <p className="mt-3 leading-relaxed text-slate-300">
          For me, LGC means I first learn deeply, then govern myself through how I learn and how I think, and then construct real things by applying that understanding in projects and systems.
        </p>
      </article>

      <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {principles.map((principle) => (
          <article
            key={principle}
            className="rounded-2xl border border-slate-800 bg-slate-900/55 p-6 text-lg font-semibold text-slate-100 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/50 hover:shadow-[0_0_24px_rgba(34,211,238,0.2)]"
          >
            {principle}
          </article>
        ))}
      </div>
    </section>
  )
}

export default Philosophy
