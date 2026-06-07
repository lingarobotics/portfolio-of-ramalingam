import { Link } from 'react-router-dom';

function PlatformCard({ platform }) {
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
      <div className="flex flex-col gap-4">

        <div>

          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-cyan-200">
            Learning Platform
          </p>

          <h2 className="mt-2 text-2xl font-semibold text-slate-100">
            {platform.name}
          </h2>

          <p className="mt-3 leading-relaxed text-slate-300">
            {platform.description}
          </p>

        </div>

        <div className="flex flex-wrap gap-2">

          {platform.tags.map((tag) => (
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

        <div className="grid gap-3 sm:grid-cols-3">

          <div className="rounded-xl border border-slate-800 bg-slate-950/60 p-3">
            <p className="text-xs text-slate-400">
              Domains
            </p>

            <p className="mt-1 text-lg font-semibold text-slate-100">
              {platform.domainsCount}
            </p>
          </div>

          <div className="rounded-xl border border-slate-800 bg-slate-950/60 p-3">
            <p className="text-xs text-slate-400">
              Journeys
            </p>

            <p className="mt-1 text-lg font-semibold text-slate-100">
              {platform.journeysCount}
            </p>
          </div>

          <div className="rounded-xl border border-slate-800 bg-slate-950/60 p-3">
            <p className="text-xs text-slate-400">
              Certificates
            </p>

            <p className="mt-1 text-lg font-semibold text-slate-100">
              {platform.certificatesCount}
            </p>
          </div>

        </div>

        <div>

          <Link
            to={`/learning-platforms/${platform.slug}`}
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
            Explore Platform →
          </Link>

        </div>

      </div>
    </article>
  );
}

export default PlatformCard;
