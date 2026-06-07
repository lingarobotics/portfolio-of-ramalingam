function JourneyHero({ journey }) {
  return (
    <section
      className="
        rounded-3xl
        border
        border-slate-800
        bg-slate-900/60
        p-6
        sm:p-8
      "
    >
      <div className="max-w-4xl">

        <p
          className="
            text-xs
            font-semibold
            uppercase
            tracking-[0.16em]
            text-cyan-200
          "
        >
          {journey.hero.badge}
        </p>

        <h1
          className="
            mt-3
            text-4xl
            font-semibold
            tracking-tight
            text-slate-100
            sm:text-5xl
          "
        >
          {journey.title}
        </h1>

        <p
          className="
            mt-5
            text-lg
            leading-relaxed
            text-slate-300
          "
        >
          {journey.hero.description}
        </p>

      </div>

      <div
        className="
          mt-8
          grid
          gap-4
          md:grid-cols-3
        "
      >
        {journey.hero.metrics.map((metric) => (
          <div
            key={metric.label}
            className="
              rounded-2xl
              border
              border-slate-800
              bg-slate-950/60
              p-5
            "
          >
            <p className="text-sm text-slate-400">
              {metric.label}
            </p>

            <p
              className="
                mt-2
                text-2xl
                font-semibold
                text-slate-100
              "
            >
              {metric.value}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-10">

        <h2
          className="
            text-xl
            font-semibold
            text-slate-100
          "
        >
          Journey Overview
        </h2>

        <div className="mt-5 space-y-5">

          <div>
            <h3 className="text-sm font-semibold text-cyan-200">
              Challenge
            </h3>

            <p className="mt-2 leading-relaxed text-slate-300">
              {journey.overview.challenge}
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-cyan-200">
              Approach
            </h3>

            <p className="mt-2 leading-relaxed text-slate-300">
              {journey.overview.approach}
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-cyan-200">
              Outcome
            </h3>

            <p className="mt-2 leading-relaxed text-slate-300">
              {journey.overview.outcome}
            </p>
          </div>

        </div>

      </div>

      <div className="mt-10">

        <h2
          className="
            text-xl
            font-semibold
            text-slate-100
          "
        >
          Core Principles
        </h2>

        <div className="mt-4 flex flex-wrap gap-3">

          {journey.principles.map((principle) => (
            <span
              key={principle}
              className="
                rounded-full
                border
                border-cyan-400/30
                px-4
                py-2
                text-sm
                text-cyan-200
              "
            >
              {principle}
            </span>
          ))}

        </div>

      </div>

    </section>
  );
}

export default JourneyHero;
