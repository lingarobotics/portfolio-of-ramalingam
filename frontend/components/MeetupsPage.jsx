import { Link } from 'react-router-dom'

const meetupEntries = [
  {
    id: 'event-hackathon-1',
    title: 'Hackathon Participation',
    eventName: 'Synthetix 4.0 Hackathon - BugSense Team Project (VIT Chennai)',
    date: 'Team Build Sprint',
    images: ['/images/hackathon2.jpeg', '/images/hackathon1.jpeg'],
    locationLabel: 'VIT Chennai, Tamil Nadu',
    locationLink: 'https://www.google.com/maps/search/?api=1&query=VIT+Chennai',
    description: [
      'I participated in Synthetix 4.0 at VIT Chennai as part of a team project for the BugSense system (Bug Duplicate Detector AI).',
      'The day-session image captures our ideation and scaffold planning; the midnight image captures real implementation where frontend-backend contracts were actively built and integrated.',
      'This was a team project. Repository ownership and overall project direction are mine. My committed code is mine, and teammate-pushed code remains fully credited to each teammate.',
    ],
    tags: ['#Hackathon', '#Synthetix4', '#VITChennai', '#BugSense', '#TeamProject', '#FullStackBuild'],
  },
  {
    id: 'meetup-1',
    title: 'Meet up One',
    eventName: 'CodeOnJVM Chennai Java Community Meet-up',
    date: 'December 13, 2025',
    image: '/images/codeonjvmchennaimeetup.jpeg',
    locationLabel: 'World Trade Center, Perungudi, Chennai, Tamil Nadu',
    locationLink: 'https://www.google.com/maps/search/?api=1&query=No%3A5%2C+Tower-B%2C+10th+Floor%2C+World+Trade+Center%2C+142%2C+Rajiv+Gandhi+Salai%2C+Perungudi%2C+Chennai%2C+Tamil+Nadu+600096',
    venueCredit: 'Venue courtesy credit: Kissflow at World Trade Center Chennai.',
    description: [
      "Had an amazing meet-up with Chennai's Java Community - CodeOnJVM.",
      'From early mornings and long travel to finally sitting in a room full of driven minds, this experience was worth every step.',
      'Listening to different perspectives, understanding real-world problems, and sharing ideas reinforces why I started this journey in the first place.',
      'Growth is slow, learning is continuous, and consistency is everything. Onwards and upwards.',
      'Code on JVM Chennai, thanks a lot - family.',
    ],
    tags: [
      '#CodeOnJVM',
      '#JVM',
      '#Chennai',
      '#Community',
      '#MeetUp',
      '#OpenMinded',
      '#Java',
      '#GoogleForDevelopers',
      '#KissFlow',
      '#WTC',
      '#SelfDriven',
      '#Learner',
    ],
  },
  {
    id: 'meetup-2',
    title: 'Meet up Two',
    eventName: 'SheBuilds Chennai Event at Rajalakshmi Engineering College',
    date: 'January 31, 2026',
    locationLabel: 'Rajalakshmi Engineering College, Mevalurkuppam, Tamil Nadu',
    locationLink: 'https://www.google.com/maps/search/?api=1&query=2254%2B865%2C+Mevalurkuppam%2C+Tamil+Nadu+602105',
    description: [
      'One day before this event, I worked on security hardening after GitHub Actions CodeQL flagged vulnerabilities in my project. I investigated the issue and strengthened the system by introducing rate limiting across sensitive flows such as AI requests, account creation, and other abuse-prone endpoints.',
      'During the event, Product Director from Zoho, Ms. Rajalakshmi Srivinasan, spoke about security. I asked her a doubt based on my real debugging context: whether online bots can abuse APIs and systems at scale. She confirmed that this threat is real, which strongly validated my decision to implement rate limiting and security controls.',
      'I also shared my troubleshooting path with others: the key gaps were absence of proper rate limiting and NoSQL injection risk surfaces. After the session, two participants approached me out of curiosity to ask how I had diagnosed and fixed those vulnerabilities; later I came to know they were developers, which made the interaction even more meaningful for me.',
    ],
  },
  {
    id: 'meetup-3',
    title: 'Meet up Three',
    eventName: 'SheBuilds Chennai February Meetup',
    date: 'February 28, 2026',
    images: [
      '/images/shebuildsfebmeetup1.png',
      '/images/shebuildsfebmeetup2.png',
      '/images/shebuildsfebmeetup3.png',
    ],
    locationLabel: 'SVK Tower, Guindy, Chennai, Tamil Nadu',
    locationLink: 'https://www.google.com/maps/search/?api=1&query=SVK+Tower%2C+Thiru+Vi+Ka+Industrial+Estate%2C+SIDCO+Industrial+Estate%2C+Guindy%2C+Chennai%2C+Tamil+Nadu+600032',
    description: [
      'This session was about AI agents by Ms. Arthi Rajendran. I framed the experience in an agent-orchestration way: she acted as the primary speaker agent, and I actively took the role of a Guardrail AI Agent to keep alignment with the topic and practical boundaries.',
      'A consultant from HCL Tech also contributed like a supporting sub-agent role, monitoring when needed and helping maintain direction. I treated the discussion as a real multi-agent collaboration model where each participant had a responsibility boundary, similar to how I work in structured AI-assisted workflows.',
    ],
  },
]

function MeetupsPage() {
  return (
    <div className="relative min-h-screen bg-slate-950 text-slate-100">
      <div className="pointer-events-none absolute inset-0 -z-0 bg-[radial-gradient(circle_at_15%_25%,rgba(16,185,129,0.16),transparent_33%),radial-gradient(circle_at_82%_8%,rgba(56,189,248,0.14),transparent_30%),radial-gradient(circle_at_50%_100%,rgba(14,116,144,0.14),transparent_40%)]" />
      <section className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6">
        <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 sm:p-8">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-200">Offline Learning and Build Participation</p>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">Events I Participated</h2>
          </div>

          <p className="mt-5 max-w-4xl leading-relaxed text-slate-300">
            I treat in-person tech communities and hackathons as a core part of my growth system. Each event adds perspective,
            accountability, and practical insights that I bring back into my projects.
          </p>

          <div className="mt-8 space-y-5">
            {meetupEntries.map((meetup) => (
              <article
                key={meetup.id}
                className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-950/65 shadow-[0_0_0_1px_rgba(15,23,42,0.6)]"
              >
                <div className="p-5 sm:p-6">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-emerald-200">{meetup.title}</p>
                    <p className="rounded-full border border-slate-700 px-3 py-1 text-xs font-medium text-slate-300">{meetup.date}</p>
                  </div>

                  <h3 className="mt-3 text-xl font-semibold text-cyan-200">{meetup.eventName}</h3>

                  {meetup.image ? (
                    <img
                      src={meetup.image}
                      alt={meetup.eventName}
                      className="mt-4 h-56 w-full rounded-xl border border-slate-800 object-cover sm:h-72"
                    />
                  ) : null}

                  {meetup.images ? (
                    <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                      {meetup.images.map((imagePath, index) => (
                        <img
                          key={imagePath}
                          src={imagePath}
                          alt={`${meetup.eventName} snapshot ${index + 1}`}
                          className="h-52 w-full rounded-xl border border-slate-800 object-cover"
                        />
                      ))}
                    </div>
                  ) : null}

                  <div className="mt-4 rounded-xl border border-slate-800 bg-slate-900/60 p-4">
                    <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-300">Location</p>
                    <a
                      href={meetup.locationLink}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-2 inline-flex text-sm font-medium text-cyan-200 underline-offset-4 transition hover:underline"
                    >
                      Open map: {meetup.locationLabel}
                    </a>
                    {meetup.venueCredit ? <p className="mt-2 text-xs text-slate-400">{meetup.venueCredit}</p> : null}
                  </div>

                  <div className="mt-4 space-y-3 text-sm leading-relaxed text-slate-300">
                    {meetup.description.map((paragraph, index) => (
                      <p key={`${meetup.id}-desc-${index}`}>{paragraph}</p>
                    ))}
                  </div>

                  {meetup.tags ? (
                    <div className="mt-4 flex flex-wrap gap-2">
                      {meetup.tags.map((tag) => (
                        <span key={tag} className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs text-emerald-200">
                          {tag}
                        </span>
                      ))}
                    </div>
                  ) : null}
                </div>
              </article>
            ))}
          </div>

          <div className="mt-10 border-t border-slate-800 pt-6">
            <Link
              to="/"
              className="inline-flex rounded-lg border border-slate-700 bg-slate-950/70 px-4 py-2 text-sm font-medium text-slate-100 transition hover:border-emerald-400/60 hover:text-emerald-200"
            >
              Back to Portfolio
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default MeetupsPage
