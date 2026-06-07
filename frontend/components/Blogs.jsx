import { Link } from 'react-router-dom';

export default function Blogs() {
  return (
    <section
      id="blogs"
      className="section-atmosphere py-24"
    >
      <div className="section-content mx-auto max-w-6xl px-6">

        <div className="max-w-4xl">

          <p className="mb-4 text-sm font-medium uppercase tracking-[0.25em] text-cyan-300">
            Engineering Perspectives
          </p>

          <h2 className="text-4xl font-semibold text-slate-100 md:text-5xl">
            Principles derived from
            real experiences.
          </h2>

          <p className="mt-8 text-lg leading-8 text-slate-400">
            A collection of observations,
            reasoning patterns,
            lessons learned,
            and transferable principles
            extracted from software engineering,
            AI,
            internships,
            learning,
            systems thinking,
            constraints,
            and real-world experiences.
          </p>

          <div className="mt-10">

            <Link
              to="/blogs"
              className="inline-flex items-center gap-2 rounded-2xl border border-cyan-500/20 bg-cyan-500/10 px-6 py-3 text-sm font-medium text-cyan-200 transition-all duration-300 hover:border-cyan-400/40 hover:bg-cyan-500/15 hover:text-white"
            >
              Explore Perspectives

              <span>→</span>

            </Link>

          </div>

        </div>

      </div>
    </section>
  );
}
