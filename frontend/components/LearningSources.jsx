import { useState } from 'react'
import { Link } from 'react-router-dom'

const learningSources = [
  {
    name: 'ChatGPT',
    icon: '/images/chatgpt.png',
    focus: 'I leverage it not only for coding help but also to learn coding concepts and clarify implementation thinking.',
    proofImage: '/images/AI_Leveraged_Doubt_Driven_Learning.png',
    proofCaption: 'Example of how I use AI to ask conceptual Java questions and learn by understanding, not memorizing.',
  },
  {
    name: 'Exercism',
    icon: '/images/exercism.png',
    focus: 'I leverage it to practice and strengthen my Java learning through guided exercises.',
  },
  {
    name: 'YouTube',
    icon: '/images/youtube.png',
    focus: 'I leverage it to learn DSA, Java concepts, and system-thinking concepts from diverse explanations, with a strong backend-first-principles focus.',
  },
  {
    name: 'freeCodeCamp',
    icon: '/images/freecodecamp.png',
    focus: 'I leverage it for frontend concepts including HTML, CSS, JavaScript, and React.',
  },
  {
    name: 'PostgreSQL Academy',
    icon: '/images/postgresql.png',
    focus: 'I leverage it to learn PostgreSQL and improve database fundamentals.',
  },
  {
    name: 'Scaler Topics',
    icon: '/images/scalertopics.png',
    focus: 'I leverage it to reinforce Java concepts with structured references.',
  },
  {
    name: 'Future Learning: Educative.io',
    icon: '/images/educativeio.png',
    focus: 'I plan to leverage Educative.io via the GitHub Student Developer Pack for deeper structured learning.',
  },
]

function LearningSources() {
  const [isSectionOpen, setIsSectionOpen] = useState(false)
  const [openSource, setOpenSource] = useState(learningSources[0].name)

  const toggleSource = (name) => {
    setOpenSource((current) => (current === name ? '' : name))
  }

  return (
    <section id="learning-sources" className="mx-auto w-full max-w-6xl scroll-mt-20 px-4 py-16 sm:px-6">
      <button
        type="button"
        onClick={() => setIsSectionOpen((current) => !current)}
        className="w-full rounded-2xl border border-slate-800 bg-slate-900/60 p-5 text-left transition hover:border-cyan-400/45 hover:shadow-[0_0_24px_rgba(34,211,238,0.12)]"
        aria-expanded={isSectionOpen}
        aria-controls="learning-sources-content"
      >
        <div className="flex items-center justify-between gap-3">
          <h2 className="text-3xl font-semibold tracking-tight text-slate-100 sm:text-4xl">Where I Learn Things?</h2>
          <span className="text-2xl text-cyan-200">{isSectionOpen ? '−' : '+'}</span>
        </div>
        <p className="mt-3 max-w-4xl leading-relaxed text-slate-300">
          Click to {isSectionOpen ? 'hide' : 'explore'} the learning sources I leverage.
        </p>
      </button>

      <div className="mt-4 flex justify-start">
        <div className="flex flex-wrap gap-3">
          <Link
            to="/ai-learning-proof"
            className="inline-flex rounded-lg border border-sky-400/50 bg-sky-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-sky-200 transition hover:border-sky-300 hover:bg-sky-500/20"
          >
            Open AI Learning Proof Page
          </Link>
          <Link
            to="/ui-answer-evolution"
            className="inline-flex rounded-lg border border-emerald-400/50 bg-emerald-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-emerald-200 transition hover:border-emerald-300 hover:bg-emerald-500/20"
          >
            Open UI Answer Evolution Page
          </Link>
          <Link
            to="/youtube-learning"
            className="inline-flex rounded-lg border border-cyan-400/50 bg-cyan-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-cyan-200 transition hover:border-cyan-300 hover:bg-cyan-500/20"
          >
            Open YouTube Learning Page
          </Link>
          <Link
            to="/meetups"
            className="inline-flex rounded-lg border border-emerald-400/50 bg-emerald-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-emerald-200 transition hover:border-emerald-300 hover:bg-emerald-500/20"
          >
            Open Meet ups Page
          </Link>
        </div>
      </div>

      {isSectionOpen ? (
        <div id="learning-sources-content" className="mt-6">
          <p className="max-w-4xl leading-relaxed text-slate-300">
            I intentionally use learning-first resources that help me build clarity and long-term consistency. This path is aligned
            with my principle: real learning comes from effort, discipline, and reflection.
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {learningSources.map((source) => (
              <article
                key={source.name}
                className="rounded-2xl border border-slate-800 bg-slate-900/60 transition duration-300 hover:border-cyan-400/45 hover:shadow-[0_0_24px_rgba(34,211,238,0.14)]"
              >
                <button
                  type="button"
                  onClick={() => toggleSource(source.name)}
                  className="flex w-full items-center justify-between gap-3 p-5 text-left"
                >
                  <span className="inline-flex min-w-0 items-center gap-3">
                    <img
                      src={source.icon}
                      alt=""
                      aria-hidden="true"
                      className="h-8 w-8 rounded-md border border-slate-700 bg-slate-950/80 object-cover p-1"
                    />
                    <span className="font-semibold text-cyan-200">{source.name}</span>
                  </span>
                  <span className="text-slate-400">{openSource === source.name ? '−' : '+'}</span>
                </button>

                {openSource === source.name ? (
                  <div className="border-t border-slate-800 px-5 pb-5 pt-3">
                    <p className="text-sm leading-relaxed text-slate-300">{source.focus}</p>

                    {source.name === 'YouTube' ? (
                      <div className="mt-4 rounded-xl border border-slate-800 bg-slate-950/55 p-4">
                        <Link
                          to="/youtube-learning"
                          className="inline-flex rounded-lg border border-cyan-400/50 bg-cyan-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-cyan-200 transition hover:border-cyan-300 hover:bg-cyan-500/20"
                        >
                          Open Dedicated YouTube Learning Page
                        </Link>

                        <p className="mt-3 text-xs text-slate-400">
                          I prioritize understanding what backend is before language-level coding.
                        </p>
                      </div>
                    ) : null}

                    {source.name === 'ChatGPT' && source.proofImage ? (
                      <div className="mt-4 rounded-xl border border-slate-800 bg-slate-950/55 p-4">
                        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-cyan-200">How I Leverage AI</p>
                        <img
                          src={source.proofImage}
                          alt="Screenshot showing conceptual Java learning discussion with AI"
                          className="mt-3 h-auto w-full rounded-lg border border-slate-800 object-cover"
                          loading="lazy"
                          onError={(event) => {
                            event.currentTarget.style.display = 'none'
                          }}
                        />
                        <p className="mt-3 text-xs leading-relaxed text-slate-400">{source.proofCaption}</p>
                        <Link
                          to="/ai-learning-proof"
                          className="mt-3 inline-flex rounded-lg border border-sky-400/50 bg-sky-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-sky-200 transition hover:border-sky-300 hover:bg-sky-500/20"
                        >
                          View Dedicated AI Learning Page
                        </Link>
                      </div>
                    ) : null}
                  </div>
                ) : null}
              </article>
            ))}
          </div>

          <div className="mt-8 rounded-xl border border-cyan-500/40 bg-cyan-500/10 p-5">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-200">Learning Principle in Practice</p>
            <p className="mt-3 leading-relaxed text-slate-200">
              I leverage these resources at no cost, proving I follow my own principle: first learn with consistency and depth, then build.
            </p>
          </div>
        </div>
      ) : null}
    </section>
  )
}

export default LearningSources
