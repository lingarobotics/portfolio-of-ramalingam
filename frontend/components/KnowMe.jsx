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
      <h2 className="text-3xl font-bold tracking-tight text-[#111111] sm:text-4xl">
        Want to Know Me?
      </h2>

      <div className="mt-8 grid gap-5 sm:grid-cols-2">
        {resources
          .filter((resource) => !resource.hidden)
          .map((resource) => (
            <article
              key={resource.title}
              className="rounded-none border border-[#111111] bg-white p-6 shadow-[8px_8px_0_rgba(17,17,17,0.08)] transition duration-300 hover:-translate-y-1 hover:bg-[#f5f5ef]"
            >
              {resource.icon && (
                <img
                  src={resource.icon}
                  alt={`${resource.title} icon`}
                  className="h-11 w-11 rounded-none border border-[#111111] bg-[#f5f5ef] object-contain p-1"
                />
              )}

              <h3 className="mt-3 text-xl font-semibold text-[#111111]">
                {resource.title}
              </h3>

              <p className="mt-3 text-sm leading-relaxed text-[#444444]">
                {resource.description}
              </p>

              {resource.link ? (
                <a
                  href={resource.link}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-4 inline-flex rounded-none border border-[#111111] px-4 py-2 text-sm font-medium text-[#111111] transition hover:bg-[#f5f5ef]"
                >
                  Open Resource
                </a>
              ) : (
                <span className="mt-4 inline-flex rounded-none border border-[#111111] bg-[#f5f5ef] px-4 py-2 text-sm font-medium text-[#444444]">
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

