const systemButtons = [
  { label: 'LGC Systems', link: 'https://lgcsystems.xyz', primary: true },
  {
    label: 'LGC Concept AI',
    link: 'https://concept-ai.lgcsystems.xyz',
  },
  {
    label: 'LGC LearnLogic CODE',
    link: 'https://learn-logic-code.lgcsystems.xyz',
  },
]

const profileLinks = [
  { label: 'GitHub', link: 'https://github.com/lingarobotics', icon: '/images/github.png' },
  {
    label: 'LinkedIn',
    link: 'https://www.linkedin.com/in/linga-robotics-conceptual-learner',
    icon: '/images/linkedin.png',
  },
  {
    label: 'Instagram',
    link: 'https://www.instagram.com/learn_with_linga/',
    icon: '/images/instagram.png',
  },
  { label: 'Email', link: 'mailto:lingarobotics@gmail.com', icon: '/images/gmail.png' },
]

function Hero() {
  return (
    <section id="hero" className="mx-auto flex w-full max-w-6xl scroll-mt-20 flex-col items-center px-4 pb-16 pt-20 text-center sm:px-6 sm:pt-24">
      <div className="mb-4 flex items-center gap-3 rounded-full border border-slate-700 bg-slate-900/70 px-4 py-2">
        <img src="/images/lgc-logo.png" alt="LGC Systems" className="h-7 w-auto" />
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-200">LGC Systems</span>
      </div>

      <img
        src="/images/ramalingam-profile.png"
        alt="Ramalingam Jayavelu"
        className="mb-5 h-24 w-24 rounded-2xl border border-cyan-400/50 object-cover shadow-[0_0_24px_rgba(34,211,238,0.22)] sm:h-28 sm:w-28"
      />

      <p className="mb-3 rounded-full border border-cyan-500/40 bg-cyan-500/10 px-4 py-1 text-xs uppercase tracking-[0.25em] text-cyan-200">
        My Systems Portfolio
      </p>
      <h1 className="text-balance text-4xl font-bold tracking-tight text-slate-100 sm:text-5xl lg:text-6xl">
        Ramalingam Jayavelu
      </h1>
      <p className="mt-4 text-lg font-medium text-cyan-200 sm:text-xl">
        Founder & Builder - LGC Systems
      </p>
      <p className="mt-6 max-w-3xl text-balance text-lg leading-relaxed text-slate-300 sm:text-xl">
        Learning requires investment in effort and time - not currency.
      </p>

      <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
        {systemButtons.map((button) => (
          <a
            key={button.label}
            href={button.link}
            target="_blank"
            rel="noreferrer"
            className={`rounded-xl px-5 py-3 text-sm font-semibold transition duration-300 ${
              button.primary
                ? 'border border-cyan-300/70 bg-cyan-400/20 text-cyan-100 shadow-[0_0_25px_rgba(34,211,238,0.25)] hover:border-cyan-200 hover:bg-cyan-300/25 hover:shadow-[0_0_30px_rgba(34,211,238,0.35)]'
                : 'border border-slate-700 bg-slate-900/70 text-slate-200 hover:border-cyan-400/60 hover:text-cyan-100'
            }`}
          >
            {button.label}
          </a>
        ))}
      </div>

      <div className="mt-7 flex flex-wrap justify-center gap-5 text-sm text-slate-300">
        {profileLinks.map((profile) => (
          <a
            key={profile.label}
            href={profile.link}
            target={profile.link.startsWith('mailto:') ? undefined : '_blank'}
            rel={profile.link.startsWith('mailto:') ? undefined : 'noreferrer'}
            className="inline-flex items-center gap-2 underline-offset-4 transition hover:text-cyan-200 hover:underline"
          >
            <img src={profile.icon} alt="" aria-hidden="true" className="h-4 w-4 rounded-sm object-cover" />
            {profile.label}
          </a>
        ))}
      </div>
    </section>
  )
}

export default Hero
