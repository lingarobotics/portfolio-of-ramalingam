import { Link } from 'react-router-dom';

export default function EngineeringThoughts() {
  return (
    <section
      id="engineering-thoughts"
      className="section-atmosphere border-t border-[#111111] px-6 py-24"
    >
      <div className="section-content mx-auto flex max-w-6xl flex-col gap-10">

        {/* Heading */}
        <div className="motion-rise max-w-4xl">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.28em] text-[#444444]">
            Engineering Thoughts
          </p>

          <h2 className="text-4xl font-bold leading-tight text-[#111111] md:text-5xl">
            What I think.
            <span className="block text-[#444444]">
              How I think.
            </span>
          </h2>
        </div>

        {/* Content */}
        <div className="motion-rise motion-rise-delay-1 grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">

          {/* Left Card */}
          <div className="rounded-none border border-[#111111] bg-white p-8 shadow-[8px_8px_0_rgba(17,17,17,0.08)]">

            <p className="text-lg leading-8 text-[#444444]">
              This section reflects how I think,
              how I approach technology,
              how I reason through ideas,
              and the mindset behind the way I build.
            </p>

            <div className="mt-8 space-y-4 text-[#444444]">
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
          <div className="rounded-none border border-[#111111] bg-[#f5f5ef] p-8 shadow-[8px_8px_0_rgba(17,17,17,0.08)]">
            <div className="flex h-full flex-col justify-between">

              <div>
                <p className="text-sm uppercase tracking-[0.22em] text-[#444444]">
                  Themes
                </p>

                <ul className="mt-6 space-y-4 text-[#444444]">
                  <li>• Perspectives</li>
                  <li>• Engineering philosophy</li>
                  <li>• System thinking</li>
                  <li>• AI leverage mindset</li>
                  <li>• Thought processes</li>
                </ul>
              </div>

              <Link
                to="/engineering-thoughts"
                className="mt-10 inline-flex w-fit items-center rounded-none border border-[#111111] bg-white px-6 py-3 text-sm font-medium text-[#111111] transition-all duration-300 hover:bg-[#f5f5ef]"
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
