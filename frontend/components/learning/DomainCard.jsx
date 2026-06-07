import { Link } from 'react-router-dom';

function DomainCard({
  platformSlug,
  domain
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

          <h2 className="text-2xl font-semibold text-slate-100">
            {domain.name}
          </h2>

          <p className="mt-3 leading-relaxed text-slate-300">
            {domain.description}
          </p>

        </div>

        <div className="mt-5 flex flex-wrap gap-2">

          {domain.tags.map((tag) => (
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

        <div className="mt-6 grid gap-3 sm:grid-cols-2">

          <div className="rounded-xl border border-slate-800 bg-slate-950/60 p-3">

            <p className="text-xs text-slate-400">
              Journeys
            </p>

            <p className="mt-1 text-lg font-semibold text-slate-100">
              {domain.journeys.length}
            </p>

          </div>

          <div className="rounded-xl border border-slate-800 bg-slate-950/60 p-3">

            <p className="text-xs text-slate-400">
              Learning Artifacts
            </p>

            <p className="mt-1 text-lg font-semibold text-slate-100">
              {domain.learningArtifacts}
            </p>

          </div>

        </div>

        <div className="mt-6">

          <Link
            to={`/learning-platforms/${platformSlug}/${domain.slug}`}
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
            Explore Domain →
          </Link>

        </div>

      </div>
    </article>
  );
}

export default DomainCard;
