import { Link } from 'react-router-dom';

export default function EngineeringThoughts() {
  return (
    <section
      id="engineering-thoughts"
      className="section-atmosphere border-t border-slate-800/80 bg-slate-950/70 px-6 py-24"
    >
      <div className="section-content mx-auto flex max-w-6xl flex-col gap-10">

        {/* Heading */}
        <div className="motion-rise max-w-4xl">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.28em] text-cyan-400/80">
            Engineering Thoughts
          </p>

          <h2 className="text-4xl font-semibold leading-tight text-slate-50 md:text-5xl">
            What I think.
            <span className="block text-slate-400">
              How I think.
            </span>
          </h2>
        </div>

        {/* Content */}
        <div className="motion-rise motion-rise-delay-1 grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">

          {/* Left Card */}
          <div className="rounded-3xl border border-slate-800/80 bg-slate-900/40 p-8 backdrop-blur-sm">

            <p className="text-lg leading-8 text-slate-300">
              This section reflects how I think,
              how I approach technology,
              how I reason through ideas,
              and the mindset behind the way I build.
            </p>

            <div className="mt-8 space-y-4 text-slate-400">
              <p>
                These are not just posts.
              </p>

              <p>
                They are perspectives,
                philosophies,
                and reflections that represent who I am beyond projects and technical stacks.
              </p>
            </div>
          </div>

          {/* Right Card */}
          <div className="rounded-3xl border border-cyan-500/10 bg-gradient-to-br from-cyan-500/10 via-slate-900/40 to-emerald-500/10 p-8 backdrop-blur-sm">
            <div className="flex h-full flex-col justify-between">

              <div>
                <p className="text-sm uppercase tracking-[0.22em] text-cyan-300/80">
                  Themes
                </p>

                <ul className="mt-6 space-y-4 text-slate-300">
                  <li>• Perspectives</li>
                  <li>• Engineering philosophy</li>
                  <li>• System thinking</li>
                  <li>• AI leverage mindset</li>
                  <li>• Thought processes</li>
                </ul>
              </div>

              <Link
                to="/engineering-thoughts"
                className="mt-10 inline-flex w-fit items-center rounded-2xl border border-cyan-400/20 bg-cyan-400/10 px-6 py-3 text-sm font-medium text-cyan-200 transition-all duration-300 hover:border-cyan-300/40 hover:bg-cyan-300/15 hover:text-white"
              >
                Explore Engineering Thoughts
              </Link>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}