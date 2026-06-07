import { Link } from 'react-router-dom';

function JourneyCard({
  platformSlug,
  domainSlug,
  journey
}) {
  return (
    <article
      className="
        rounded-2xl
        border
        border-slate-800
        bg-slate-900/60
        p-6
        transition
        hover:border-cyan-400/50
      "
    >
      <div className="flex h-full flex-col">

        <div>

          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-cyan-200">
            Learning Journey
          </p>

          <h2 className="mt-2 text-2xl font-semibold text-slate-100">
            {journey.title}
          </h2>

          <p className="mt-4 leading-relaxed text-slate-300">
            {journey.hero.description}
          </p>

        </div>

        <div className="mt-6 grid gap-3 sm:grid-cols-3">

          {journey.hero.metrics.map((metric) => (
            <div
              key={metric.label}
              className="
                rounded-xl
                border
                border-slate-800
                bg-slate-950/60
                p-3
              "
            >
              <p className="text-xs text-slate-400">
                {metric.label}
              </p>

              <p className="mt-1 text-lg font-semibold text-slate-100">
                {metric.value}
              </p>
            </div>
          ))}

        </div>

        <div className="mt-6 flex flex-wrap gap-2">

          {journey.tags.map((tag) => (
            <span
              key={tag}
              className="
                rounded-full
                border
                border-slate-700
                px-3
                py-1
                text-xs
                text-slate-300
              "
            >
              {tag}
            </span>
          ))}

        </div>

        <div className="mt-6">

          <Link
            to={`/learning-journeys/${platformSlug}/${domainSlug}/${journey.slug}`}
            className="
              inline-flex
              items-center
              rounded-xl
              border
              border-cyan-400/40
              px-4
              py-2
              text-sm
              font-medium
              text-cyan-200
              transition
              hover:border-cyan-300
            "
          >
            Open Journey →
          </Link>

        </div>

      </div>
    </article>
  );
}

export default JourneyCard;
