import { Link } from 'react-router-dom'
import { useState } from 'react'

const events = [
  {
    id: 'vit-synthetix-hackathon-bugsense',
    label: 'Hackathon',
    title: 'Synthetix 4.0 Hackathon - BugSense (Bug Duplicate Detector AI System)',
    date: 'VIT Chennai | Team Build Sprint',
    venue: 'Synthetix 4.0, Conducted by VIT Chennai',
    images: ['/images/hackathon2.jpeg', '/images/hackathon1.jpeg'],
    narrative:
      'This section captures our team project journey for the BugSense system at Synthetix 4.0, where the problem statement was provided as part of the hackathon challenge. The Day session image shows our ideation and scaffold planning phase, where we broke the problem into architecture blocks and setup direction. The midnight coding image captures real implementation work, where frontend-backend contracts were actively built and validated. This was a team project, but the repository ownership and overall project direction are mine. My committed code is mine, and any teammate-pushed code remains fully credited to each teammate.',
    acknowledgements:
      'BugSense is documented here as a collaborative hackathon execution with clear ownership boundaries and transparent contribution crediting.',
  },
  {
    id: 'beyond-books-talk',
    label: 'Talk',
    title: 'Beyond Books: Guiding the Next Generation of Engineers',
    date: 'September 16, 2025',
    venue: 'Edusat Hall, Main Block, KVCET',
    images: [
      '/images/talk1.jpeg',
      '/images/talk2.jpeg',
      '/images/talk3.jpeg',
      '/images/talk4.jpeg',
    ],
    narrative:
      'In this event, I addressed first-year engineering students as a responsible senior and intentionally shifted the discussion away from marks-only thinking. I started with foundational questions like what engineering really means and who can be called a real engineer. My core message was clear: a degree certificate alone does not make someone an engineer, and while CGPA and arrears do not define a person, they can still disqualify opportunities if neglected. I then walked students through practical growth paths including minor and honors degrees, the difference between service and product career tracks, and how to choose skills based on real-world applicability rather than trend pressure. I explained why language choice and fundamentals matter, and used examples around practical learning direction to help them decide better. A major section of this session focused on my Learning at No Cost principle, where I showed how free learning ecosystems such as Coursera, Infosys SpringBoard, HP Life, Saylor Academy, and freeCodeCamp can be leveraged with consistency. I also guided students on investing smartly in productivity tools and learning systems, instead of spending blindly on redundant courses. This event was designed to ignite curiosity, practical thinking, and self-driven ownership so students can engineer solutions, not just pass exams.',
    acknowledgements:
      'I conducted this event with gratitude to the college leadership and department mentors who supported student growth, and with specific appreciation for the assistance provided for the session execution.',
  },
  {
    id: 'day-100-learning-event',
    label: 'Workshop',
    title: 'RoadMap for Learning at No Cost - From Coursera to GitHub',
    date: 'September 25, 2025 (Day 100 Milestone)',
    venue: 'IoT Lab, Mechanical Science Block, KVCET | 1:30 PM to 3:30 PM',
    images: ['/images/workshop1.jpeg', '/images/workshop2.jpeg', '/images/workshop3.jpeg'],
    narrative:
      'On my 100th day of continuous learning, I chose to give back by conducting this hands-on event for juniors. The goal was not only to list resources but to help students take control of their learning journey with practical execution. I demonstrated that Coursera is not free by default and showed how ecosystem collaborations such as Infosys SpringBoard can unlock high-value certification access. I then explained the financial-aid process in depth, including exact application flow, input strategy, and how to draft an effective 150-word statement to improve approval chances. The session also included practical AI and prompting guidance where I clarified what real prompting means beyond textbook usage and how students can apply it productively for skill growth. I gave one-to-one support during the session, helping participants link accounts, begin course pathways, and create immediate action plans rather than postponing learning. The atmosphere was highly interactive and outcome-focused, with visible student curiosity and participation. A meaningful moment in this event was leadership recognition during the session, which reinforced the impact of mentorship and responsibility-led peer learning. My central message remained consistent: learning at no monetary cost still requires serious investment through effort, time, and exploration.',
    acknowledgements:
      'This Day 100 session reflects my commitment to preventing juniors from losing time due to wrong assumptions about paid learning barriers, and to channeling institutional support into measurable student outcomes.',
  },
  {
    id: 'online-brainstorming-session',
    label: 'Online - Brainstorming',
    title: 'Engineering Mindset Brainstorming Session (Day 100 Phase)',
    date: 'Follow-up Online Session',
    venue: 'Mode: Online | Activity Type: Guided Brainstorming',
    images: ['/images/formres1.png', '/images/formres%202.png', '/images/formres%203.png'],
    narrative:
      'In this online brainstorming session, I designed a structured thinking activity to help first-year juniors shift from passive watching to iterative engineering analysis. I used a short video prompt and asked them to rewatch with intent, compare viewpoints, and produce conclusion-quality answers. I intentionally pushed the group from quick surface responses to deeper reasoning by asking them to refine, challenge, and improve each answer. I made the activity interactive by combining individual reflection, peer comparison, and guided synthesis so students could experience engineering as applied problem understanding instead of exam-only learning. I also used this session to reinforce my core principle that learning at no cost is possible, but it still needs time, effort, and disciplined iteration. By the end, the responses showed clear growth in problem-solving perspective, confidence, and technical-thinking ownership.',
    acknowledgements:
      'This session validated my mentoring model: create a safe but challenging space, demand iterative thinking, and help juniors move from memorized answers to reasoning-based engineering mindset.',
    rawSections: [
      {
        question: 'Privacy Note',
        entries: [
          'Name and email fields from the form are intentionally excluded in this page to protect student privacy.',
          'All raw responses below are anonymized and shown as Junior1 to Junior5.',
        ],
      },
      {
        question: 'Did you see the video again and again for iterative thinking?',
        entries: ['Junior1: Yes', 'Junior2: Yes', 'Junior3: Yes', 'Junior4: Yes', 'Junior5: Yes'],
      },
      {
        question: 'Before this activity, how did you initially view the video?',
        entries: [
          'Junior1: Simply, a village is suffering of scarcity.',
          'Junior2: Normal process of getting water from engineering graduate.',
          'Junior3: There is no need degree to become an engineer, if you have knowledge, skills, and innovative ideas you are an engineer.',
          'Junior4: Simply, a village is suffering of scarcity.',
          'Junior5: Simply, a village is suffering of scarcity.',
        ],
      },
      {
        question: 'After brainstorming, what new perspective did you gain about engineering and engineers?',
        entries: [
          'Junior1: Engineer is not only a degree, it is a key to build a new society, solve problems, and ensure safety of people.',
          'Junior2: First we should analyze the problem and then solve it.',
          "Junior3: Engineering is used to solve people's problems, not only academics; as an engineer we must look at everything in different ways to solve it.",
          'Junior4: Apply knowledge and solve the problem.',
          'Junior5: Applying knowledge and solving the problem.',
        ],
      },
      {
        question: 'Which skills did you use most during the activity? (Form summary)',
        entries: [
          'Technical analysis: 1',
          'Problem solving: 2',
          'Critical observation: 1',
          'Creativity: 2',
          'Iterative thinking: 1',
          'Logical reasoning: 1',
        ],
      },
      {
        question: 'What part of the challenge was toughest for you?',
        entries: [
          'Junior1: Critical thinking.',
          'Junior2: How to find new things.',
          'Junior3: To understand and observe.',
          'Junior4: To understand the concept in a different way.',
          'Junior5: I found the technical answer but took time to reach the term "applying knowledge and solving the problem."',
        ],
      },
      {
        question: 'Did this activity make you think like an engineer instead of an engineering student? (Form summary)',
        entries: ['Yes, Strongly: 5', 'Yes, Somewhat: 0', 'Neutral: 0', 'Not really: 0'],
      },
      {
        question: 'Which answer from friends inspired you most, and why?',
        entries: [
          'Junior1: Degree is only certificate; developing skills is the main thing.',
          'Junior2: Nothing.',
          'Junior3: Problem solving, I knew it but my friend said it perfectly.',
          'Junior4: Everyone gave best answers; I learned how they think and how I think.',
          'Junior5: I had technical answer but not final conclusion; when one girl said "applying knowledge and solving the problem," I was amazed.',
        ],
      },
      {
        question: 'If you had more time, how would you improve your answer?',
        entries: [
          'Junior1: As an engineer we make a strong society. The video teaches how to solve problems in difficult situations.',
          'Junior2: I would find the answer surely if I had more time.',
          'Junior3: I would understand and observe more.',
          'Junior4: I would think in many different ways.',
          'Junior5: I might still have found more depth.',
        ],
      },
      {
        question: 'Rate how much this activity improved technical and iterative thinking. (Form summary)',
        entries: ['Rating 1: 0', 'Rating 2: 0', 'Rating 3: 0', 'Rating 4: 0', 'Rating 5: 5'],
      },
      {
        question: "What's one real-world engineering problem you'd now like to solve?",
        entries: [
          'Junior1: As a robotics engineer, I want to design machines that make life easier for people.',
          'Junior2: Build products useful to disabled people.',
          'Junior3: Give low-cost and good solutions for people.',
          'Junior4: Apply knowledge and solve problems.',
          'Junior5: I am thinking about agriculture-focused solutions.',
        ],
      },
      {
        question: 'Overall experience after the activity. (Form summary)',
        entries: ['Fun and exciting: 2', 'Challenging but useful: 4', 'Stressful but worth it: 1', 'Neutral: 0'],
      },
      {
        question: 'Your feedback on the activity',
        entries: [
          'Junior1: I liked realizing the true content of the video.',
          'Junior2: Curiosity increased; it was interesting and I learned many things from this activity.',
          'Junior3: It was interesting to find answers and triggered multi-way thinking in me.',
          'Junior4: The thinking went almost to the sky.',
          'Junior5: When I reached 99% answer, you pushed us for that final 1%, and everyone started deep thinking; I liked that most.',
        ],
      },
      {
        question: 'Any mistakes done by me? (Form feedback)',
        entries: [
          'Junior1: Nothing.',
          'Junior2: Nothing, you are right.',
          'Junior3: No issues; it made me think more and was useful.',
          'Junior4: No issues; you motivated us to start using laptops effectively.',
          'Junior5: No issues.',
        ],
      },
      {
        question: 'Do you believe learning needs time and effort, not money? (Form summary)',
        entries: ['Yes: 4', 'No: 0', 'Maybe: 1'],
      },
      {
        question: 'Winners: how did you feel after hard thinking and earning the prize?',
        entries: [
          'Junior1: I felt very glad. The question taught me to think in many angles and perspectives. Engineer is not only certificate; an engineer builds a strong environment.',
          'Junior2: At first I thought the video was easy, but when everyone answered deeply I also started deep thinking. I was amazed by all answers and very happy to win.',
        ],
      },
    ],
  },
]

function EventsConductedPage() {
  const [openEvent, setOpenEvent] = useState(events[0].id)

  const toggleEvent = (eventId) => {
    setOpenEvent((current) => (current === eventId ? '' : eventId))
  }

  return (
    <div className="relative min-h-screen bg-slate-950 text-slate-100">
      <div className="pointer-events-none absolute inset-0 -z-0 bg-[radial-gradient(circle_at_15%_20%,rgba(59,130,246,0.16),transparent_34%),radial-gradient(circle_at_82%_10%,rgba(16,185,129,0.12),transparent_30%),radial-gradient(circle_at_50%_100%,rgba(14,165,233,0.12),transparent_40%)]" />
      <section className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6">
        <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 sm:p-8">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-200">Leadership and Knowledge Sharing</p>
            <h1 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">Events I Conducted</h1>
          </div>

          <p className="mt-5 max-w-4xl leading-relaxed text-slate-300">
            In these entries, I capture the full purpose, content depth, and student impact of the events I conducted.
            I explain each one at event level, not image-by-image, so the focus stays on intent, delivery, and outcomes.
          </p>

          <div className="mt-8 space-y-5">
            {events.map((eventItem) => (
              <section key={eventItem.id} className="rounded-2xl border border-slate-800 bg-slate-950/65">
                <button
                  type="button"
                  onClick={() => toggleEvent(eventItem.id)}
                  className="flex w-full items-center justify-between gap-3 p-5 text-left sm:p-6"
                  aria-expanded={openEvent === eventItem.id}
                >
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.14em] text-cyan-200">{eventItem.label}</p>
                    <h2 className="mt-2 text-xl font-semibold text-slate-100 sm:text-2xl">{eventItem.title}</h2>
                    <p className="mt-2 text-sm text-slate-300">{eventItem.date}</p>
                    <p className="text-sm text-slate-400">{eventItem.venue}</p>
                  </div>
                  <span className="text-2xl text-cyan-200">{openEvent === eventItem.id ? '−' : '+'}</span>
                </button>

                {openEvent === eventItem.id ? (
                  <div className="border-t border-slate-800 px-5 pb-6 pt-5 sm:px-6">
                    {eventItem.images.length > 0 ? (
                      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                        {eventItem.images.map((imagePath, index) => (
                          <img
                            key={imagePath}
                            src={imagePath}
                            alt={`${eventItem.title} photo ${index + 1}`}
                            className="h-52 w-full rounded-xl border border-slate-800 object-cover"
                            loading="lazy"
                          />
                        ))}
                      </div>
                    ) : null}

                    <div className="mt-5 rounded-xl border border-slate-800 bg-slate-900/55 p-4">
                      <p className="text-xs font-semibold uppercase tracking-[0.14em] text-cyan-200">Full Event Narrative</p>
                      <p className="mt-3 text-sm leading-relaxed text-slate-300 sm:text-base">{eventItem.narrative}</p>
                      <p className="mt-3 text-sm leading-relaxed text-slate-400 sm:text-base">{eventItem.acknowledgements}</p>
                    </div>

                    {eventItem.rawSections ? (
                      <div className="mt-5 rounded-xl border border-slate-800 bg-slate-900/55 p-4">
                        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-cyan-200">Raw Google Form Responses (Anonymized)</p>
                        <div className="mt-4 space-y-4">
                          {eventItem.rawSections.map((section) => (
                            <div key={section.question} className="rounded-lg border border-slate-800 bg-slate-950/60 p-3">
                              <p className="text-sm font-semibold text-slate-200">{section.question}</p>
                              <div className="mt-2 space-y-2">
                                {section.entries.map((entry) => (
                                  <p key={entry} className="text-sm leading-relaxed text-slate-300">
                                    {entry}
                                  </p>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    ) : null}
                  </div>
                ) : null}
              </section>
            ))}
          </div>

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

export default EventsConductedPage
