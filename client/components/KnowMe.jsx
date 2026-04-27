const resources = [
  {
    title: 'Notion ARC26 Tracker Table',
    description: 'A public Notion table where I track what I completed and reflected on during the ARC26 journey.',
    link: 'https://fortune-spandex-751.notion.site/2d189e664907804b9504cca299cef646?v=2d189e664907804d8de5000c8c2936ce&source=copy_link',
    icon: '/images/notion.png',
  },
  {
    title: 'Rising ARC26',
    description:
      'A 50-week learning journey documenting disciplined skill development, reflective improvement, and consistency over hype.',
    link: 'https://github.com/lingarobotics/Rising-ARC26',
    icon: '/images/github.png',
  },
  {
    title: 'Logbook',
    description: 'A record of learning experiments, reflections, and conceptual exploration.',
    link: 'https://github.com/lingarobotics/logbook',
    icon: '/images/github.png',
  },
  {
    title: 'Portfolio Repository',
    description: 'The source code behind this portfolio website.',
    link: 'https://github.com/lingarobotics/ramalingam-jayavelu-portfolio',
    icon: '/images/github.png',
  },
  {
    title: 'LeetCode',
    description: 'Problem solving and algorithm practice.',
    link: 'https://leetcode.com/u/lingarobotics/',
    icon: '/images/leetcode.png',
  },
  {
    title: 'HackerRank',
    description: 'Coding practice and skill-building challenges across core programming areas.',
    link: 'https://www.hackerrank.com/profile/lingarobotics',
    icon: '/images/hackerrank.jpeg',
  },
  {
    title: 'CodingBat (Standalone Learning)',
    description: 'Used as standalone learning for Java conceptual understanding and logic reinforcement.',
    link: null,
    icon: null,
  },
  {
    title: 'Learn With Linga (Instagram)',
    description: 'Reflections on learning mindset, conceptual clarity, and developer growth.',
    link: 'https://www.instagram.com/learn_with_linga/',
    icon: '/images/learn-with-linga.png',
  },
]

function KnowMe() {
  return (
    <section id="know-me" className="mx-auto w-full max-w-6xl scroll-mt-20 px-4 py-16 sm:px-6">
      <h2 className="text-3xl font-semibold tracking-tight text-slate-100 sm:text-4xl">Want to Know Me?</h2>
      <div className="mt-8 grid gap-5 sm:grid-cols-2">
        {resources.map((resource) => (
          <article
            key={resource.title}
            className="rounded-2xl border border-slate-800 bg-slate-900/55 p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/50 hover:shadow-[0_0_28px_rgba(34,211,238,0.14)]"
          >
            {resource.icon ? (
              <img
                src={resource.icon}
                alt={`${resource.title} icon`}
                className="h-11 w-11 rounded-lg border border-slate-700 bg-slate-950/70 object-contain p-1"
              />
            ) : null}
            <h3 className="mt-3 text-xl font-semibold text-slate-100">{resource.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-slate-300">{resource.description}</p>
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
