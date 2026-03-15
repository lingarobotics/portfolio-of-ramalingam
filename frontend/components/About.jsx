import { Link } from 'react-router-dom'

const highlights = [
  {
    title: 'Education',
    content: [
      'B.E. Robotics and Automation - Pursuing',
      'Completed through Semester 5',
      'View major academic performance in dedicated page',
    ],
  },
  {
    title: 'Minor Degree',
    content: [
      'CSE (Full Stack Development) - Pursuing',
      'Papers cleared: Web Technologies and App Development (Semester 5)',
      'View minor academic performance in dedicated page',
    ],
  },
  {
    title: 'Institution',
    content: 'Karpaga Vinayaga College of Engineering and Technology',
  },
  {
    title: 'Focus Areas',
    content: [
      'Java Development',
      'Learning System Architecture',
      'Student-Centric Product Design',
      'Developer Reasoning Tools',
    ],
  },
]

function About() {
  return (
    <section id="about" className="section-atmosphere mx-auto w-full max-w-6xl scroll-mt-20 rounded-3xl px-4 py-16 sm:px-6">
      <div className="section-content mb-8 motion-rise">
        <h2 className="text-3xl font-semibold tracking-tight text-slate-100 sm:text-4xl">About Me</h2>
      </div>

      <div className="section-content grid gap-8 lg:grid-cols-2">
        <article className="motion-rise motion-rise-delay-1 rounded-2xl border border-slate-800 bg-slate-900/70 p-6 text-slate-300 shadow-[0_0_30px_rgba(15,23,42,0.35)]">
          <p className="leading-relaxed">
            I am Ramalingam Jayavelu, a Robotics and Automation engineering student at Karpaga Vinayaga College of Engineering and Technology, currently also pursuing a minor degree in CSE (Full Stack Development).
          </p>
          <p className="mt-5 border-t border-slate-800/80 pt-4 leading-relaxed">
            My work focuses on learning systems engineering, Java development, and building student-centric platforms that prioritize conceptual understanding over surface-level progress.
          </p>
          <p className="mt-5 border-t border-slate-800/80 pt-4 leading-relaxed">
            I am the founder and builder of LGC Systems, an initiative dedicated to creating tools that help learners verify real understanding through reasoning, explanation, and execution thinking.
          </p>
          <p className="mt-5 border-t border-slate-800/80 pt-4 leading-relaxed">
            Rather than focusing on certificates, completion counts, or speed-based learning, I design systems that emphasize clarity of thought, conceptual depth, and the ability to articulate ideas clearly.
          </p>
        </article>

        <div className="grid gap-4 motion-rise motion-rise-delay-2">
          {highlights.map((item) => (
            <article
              key={item.title}
              className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5 transition duration-300 hover:-translate-y-0.5 hover:border-cyan-400/40 hover:shadow-[0_0_30px_rgba(34,211,238,0.1)]"
            >
              <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-200">{item.title}</h3>
              {Array.isArray(item.content) ? (
                <ul className="mt-3 space-y-2 text-slate-200">
                  {item.content.map((focus) => (
                    <li key={focus}>{focus}</li>
                  ))}
                </ul>
              ) : (
                <p className="mt-3 text-slate-200">{item.content}</p>
              )}

              {item.title === 'Education' ? (
                <Link
                  to="/major-academic-performance"
                  className="mt-4 inline-flex w-fit rounded-xl border border-cyan-300/60 bg-cyan-500/15 px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-cyan-100 transition hover:border-cyan-200 hover:bg-cyan-400/20"
                >
                  Academic Performance
                </Link>
              ) : null}

              {item.title === 'Minor Degree' ? (
                <Link
                  to="/minor-academic-performance"
                  className="mt-4 inline-flex w-fit rounded-xl border border-emerald-300/60 bg-emerald-500/15 px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-emerald-100 transition hover:border-emerald-200 hover:bg-emerald-400/20"
                >
                  Academic Performance
                </Link>
              ) : null}
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About
