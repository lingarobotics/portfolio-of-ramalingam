import { Link } from 'react-router-dom'

const youtubeChannels = [
  {
    title: 'Sriniously (Most Valuable Source)',
    link: 'https://www.youtube.com/@sriniously',
    note: 'My first preference for understanding what backend is before language-level coding.',
  },
  {
    title: 'Hareesh Rajendran',
    link: 'https://www.youtube.com/@hareeshrajendran',
    note: 'I learn system thinking and production-level explanation quality from his approach.',
  },
  {
    title: 'A2D Channel',
    link: 'https://www.youtube.com/@a2dchannel',
    note: 'I learn technical knowledge and CS hardware/component understanding from a PC builder perspective.',
  },
  {
    title: 'freeCodeCamp Concepts',
    link: 'https://www.youtube.com/@freecodecampconcepts',
    note: 'I reinforce frontend and core CS learning through practical concept walkthroughs.',
  },
]

const youtubePlaylists = [
  {
    title: 'Sriniously Backend Principles Playlist',
    link: 'https://www.youtube.com/watch?v=0Rwb4Xmlcwc&list=PLui3EUkuMTPgZcV0QhQrOcwMPcBCcd_Q1',
    note: 'I learn backend fundamentals like caching, validation, authentication, and production-first reasoning.',
  },
  {
    title: 'Conquer Victory Java DSA Playlist',
    link: 'https://www.youtube.com/watch?v=J056om7OT6g&list=PL2j991kByVOVGh61E1o2Qejy5KX8bfoGf&pp=0gcJCbQEOCosWNin',
    note: 'I use this playlist to strengthen Java DSA practice and execution-level confidence.',
  },
  {
    title: 'Deep Java DSA Playlist',
    link: 'https://www.youtube.com/watch?v=t2U989oaI1Q&list=PLYM2_EX_xVvX7_AmNY-Deacp3rT3MIXnE',
    note: 'I use this to go deeper into Java DSA patterns and analytical problem-solving depth.',
  },
]

function YouTubeLearningPage() {
  return (
    <div className="relative min-h-screen bg-slate-950 text-slate-100">
      <div className="pointer-events-none absolute inset-0 -z-0 bg-[radial-gradient(circle_at_20%_20%,rgba(56,189,248,0.12),transparent_34%),radial-gradient(circle_at_80%_0%,rgba(20,184,166,0.1),transparent_30%),radial-gradient(circle_at_50%_100%,rgba(59,130,246,0.08),transparent_35%)]" />
      <section id="youtube-learning-page" className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6">
        <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 sm:p-8">
          <div className="flex items-center gap-3">
            <img src="/images/youtube.png" alt="YouTube" className="h-10 w-10 rounded-lg border border-slate-700 object-cover p-1" />
            <h2 className="text-3xl font-semibold tracking-tight text-slate-100 sm:text-4xl">YouTube Channels I Follow to Learn Tech</h2>
          </div>

          <p className="mt-5 max-w-4xl leading-relaxed text-slate-300">
            I chose these channels intentionally based on first-principles teaching quality, production-oriented explanations, and conceptual depth. I optimize for understanding, not hype.
          </p>

          <div className="mt-8">
            <h3 className="text-lg font-semibold text-cyan-200">Channels I Follow</h3>
            <div className="mt-4 grid gap-4 md:grid-cols-2">
              {youtubeChannels.map((item) => (
                <article
                  key={item.link}
                  className="rounded-xl border border-slate-800 bg-slate-950/60 p-5 transition duration-300 hover:border-cyan-400/45 hover:shadow-[0_0_24px_rgba(34,211,238,0.14)]"
                >
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noreferrer"
                    className="text-base font-semibold text-cyan-200 underline-offset-4 transition hover:underline"
                  >
                    {item.title}
                  </a>
                  <p className="mt-3 text-sm leading-relaxed text-slate-300">{item.note}</p>
                </article>
              ))}
            </div>
          </div>

          <div className="mt-8">
            <h3 className="text-lg font-semibold text-cyan-200">Playlists for DSA and Backend Depth</h3>
            <div className="mt-4 grid gap-4 md:grid-cols-2">
              {youtubePlaylists.map((item) => (
                <article
                  key={item.link}
                  className="rounded-xl border border-slate-800 bg-slate-950/60 p-5 transition duration-300 hover:border-cyan-400/45 hover:shadow-[0_0_24px_rgba(34,211,238,0.14)]"
                >
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noreferrer"
                    className="text-base font-semibold text-cyan-200 underline-offset-4 transition hover:underline"
                  >
                    {item.title}
                  </a>
                  <p className="mt-3 text-sm leading-relaxed text-slate-300">{item.note}</p>
                </article>
              ))}
            </div>
          </div>

          <p className="mt-4 text-xs font-semibold uppercase tracking-[0.16em] text-cyan-200">
            Playlists above are the dedicated DSA learning tracks.
          </p>

          <div className="mt-10 border-t border-slate-800 pt-6">
            <Link
              to="/"
              className="inline-flex rounded-lg border border-slate-700 bg-slate-950/70 px-4 py-2 text-sm font-medium text-slate-100 transition hover:border-cyan-400/60 hover:text-cyan-200"
            >
              Back to Portfolio
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default YouTubeLearningPage
