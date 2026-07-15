import { Link } from 'react-router-dom'

const highlights = [
  {
    title: 'Major Degree',
    content: [
      'B.E. Robotics and Automation - Pursuing',
      'Completed through Semester 5',
    ],
  },
  {
    title: 'Minor Degree',
    content: [
      'CSE (Full Stack Development) - Pursuing',
      'Integrated with Semester 5 academic records',
    ],
  },
  {
    title: 'Academic Performance of Both',
    content: [
      'View the integrated semester-wise academic summary',
    ],
  },
]

function About() {
  return (
    <section id="about" className="section-atmosphere mx-auto w-full max-w-6xl scroll-mt-20 rounded-none px-4 py-16 sm:px-6">
      <div className="section-content mb-8 motion-rise">
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#111111]/65">Profile</p>
        <h2 className="mt-2 text-3xl font-semibold tracking-tight text-[#111111] sm:text-4xl">About Me</h2>
      </div>

      <div className="section-content grid gap-8 lg:grid-cols-2">
        <article className="motion-rise motion-rise-delay-1 rounded-none border border-[#111111] bg-white p-6 text-[#111111]/80 shadow-[10px_10px_0_rgba(17,17,17,0.08)]">
          <p className="leading-relaxed">
            I am Ramalingam Jayavelu, a Robotics and Automation engineering student at Karpaga Vinayaga College of Engineering and Technology.
          </p>
          <p className="mt-5 border-t border-[#111111] pt-4 leading-relaxed">
            My work focuses on learning systems engineering, Java development, and building student-centric platforms that prioritize conceptual understanding over surface-level progress.
          </p>
          <p className="mt-5 border-t border-[#111111] pt-4 leading-relaxed">
            I am the founder and builder of LGC Systems, an initiative dedicated to creating tools that help learners verify real understanding through reasoning, explanation, and execution thinking.
          </p>
          <p className="mt-5 border-t border-[#111111] pt-4 leading-relaxed">
            Rather than focusing on certificates, completion counts, or speed-based learning, I design systems that emphasize clarity of thought, conceptual depth, and the ability to articulate ideas clearly.
          </p>
        </article>

        <div className="grid gap-4 motion-rise motion-rise-delay-2">
          {highlights.map((item) => (
            <article
              key={item.title}
              className="rounded-none border border-[#111111] bg-[#f5f5ef] p-5 transition duration-300 hover:translate-x-[1px] hover:translate-y-[1px] hover:bg-white"
            >
              <h3 className="text-sm font-semibold uppercase tracking-[0.24em] text-[#111111]">{item.title}</h3>
              {Array.isArray(item.content) ? (
                <ul className="mt-3 space-y-2 text-[#111111]/80">
                  {item.content.map((focus) => (
                    <li key={focus}>{focus}</li>
                  ))}
                </ul>
              ) : (
                <p className="mt-3 text-[#111111]/80">{item.content}</p>
              )}

              {item.title === 'Academic Performance of Both' ? (
                <Link
                  to="/academic-performance-summary"
                  className="mt-4 inline-flex w-fit rounded-none border border-[#111111] bg-[#111111] px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-white transition hover:bg-[#2a2a2a]"
                >
                  Academic Performance Summary
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

