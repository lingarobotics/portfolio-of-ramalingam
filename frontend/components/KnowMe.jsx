const resources = [
  {
    title: 'Portfolio Repository',
    description: 'The source code behind this portfolio website.',
    link: 'https://github.com/lingarobotics/portfolio-of-ramalingam',
    icon: '/images/github.webp',
  },
  {
    title: 'LeetCode',
    description: 'Problem solving and algorithm practice.',
    link: 'https://leetcode.com/u/lingarobotics/',
    icon: '/images/leetcode.webp',
    hidden: true, // Hidden for now
  },
  {
    title: 'Learn With Linga (Instagram)',
    description:
      'Reflections on learning mindset, conceptual clarity, and developer growth.',
    link: 'https://www.instagram.com/learn_with_linga/',
    icon: '/images/learn-with-linga.webp',
  },
  {
    title: 'Learn With Linga - Insights',
    description:
      'Insights and reflections on learning, growth, and the developer journey, shared through a dedicated platform.',
    link: 'https://learn-with-linga.lgcsystems.xyz',
    icon: '/images/learn-with-linga.webp',
  },
]

function KnowMe() {
  return (
    <section
      id="know-me"
      className="mx-auto w-full max-w-6xl scroll-mt-20 px-4 py-16 sm:px-6"
    >
      <h2 className="text-3xl font-semibold tracking-tight text-slate-100 sm:text-4xl">
        Want to Know Me?
      </h2>

      <div className="mt-8 grid gap-5 sm:grid-cols-2">
        {resources
          .filter((resource) => !resource.hidden)
          .map((resource) => (
            <article
              key={resource.title}
              className="rounded-2xl border border-slate-800 bg-slate-900/55 p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/50 hover:shadow-[0_0_28px_rgba(34,211,238,0.14)]"
            >
              {resource.icon && (
                <img
                  src={resource.icon}
                  alt={`${resource.title} icon`}
                  className="h-11 w-11 rounded-lg border border-slate-700 bg-slate-950/70 object-contain p-1"
                />
              )}

              <h3 className="mt-3 text-xl font-semibold text-slate-100">
                {resource.title}
              </h3>

              <p className="mt-3 text-sm leading-relaxed text-slate-300">
                {resource.description}
              </p>

              {resource.link ? (
                <a
                  href={resource.link}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-4 inline-flex rounded-lg border border-slate-700 px-4 py-2 text-sm font-medium text-slate-100 transition hover:border-cyan-400/60 hover:text-cyan-200"
                >
                  Open Resource
                </a>
              ) : (
                <span className="mt-4 inline-flex rounded-lg border border-slate-700/80 bg-slate-900/70 px-4 py-2 text-sm font-medium text-slate-300">
                  Standalone Learning
                </span>
              )}
            </article>
          ))}
      </div>
    </section>
  )
}

export default KnowMe

