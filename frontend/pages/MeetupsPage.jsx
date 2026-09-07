import { Link } from 'react-router-dom'

const meetupEntries = [
  {
    id: 'event-hackathon-1',
    title: 'Hackathon Participation',
    eventName: 'Synthetix 4.0 Hackathon - BugSense Team Project (VIT Chennai)',
    date: 'March 05 & 06, 2025',
    images: ['/images/hackathon2.webp', '/images/hackathon1.webp'],
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
    image: '/images/codeonjvmchennaimeetup.webp',
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
      '/images/shebuildsfebmeetup1.webp',
      '/images/shebuildsfebmeetup2.webp',
      '/images/shebuildsfebmeetup3.webp',
    ],
    locationLabel: 'SVK Tower, Guindy, Chennai, Tamil Nadu',
    locationLink: 'https://www.google.com/maps/search/?api=1&query=SVK+Tower%2C+Thiru+Vi+Ka+Industrial+Estate%2C+SIDCO+Industrial+Estate%2C+Guindy%2C+Chennai%2C+Tamil+Nadu+600032',
    description: [
      'This session was about AI agents by Ms. Arthi Rajendran. I framed the experience in an agent-orchestration way: she acted as the primary speaker agent, and I actively took the role of a Guardrail AI Agent to keep alignment with the topic and practical boundaries.',
      'A consultant from HCL Tech also contributed like a supporting sub-agent role, monitoring when needed and helping maintain direction. I treated the discussion as a real multi-agent collaboration model where each participant had a responsibility boundary, similar to how I work in structured AI-assisted workflows.',
    ],
  },
  {
    id: 'meetup-4',
    title: 'Meet up Four',
    eventName: 'CodeOnJVM Chennai Mid Year Meetup - IBM Chennai',
    date: 'July 11, 2026',
    locationLabel: 'IBM, Tharamani, Chennai, Tamil Nadu',
    locationLink: 'https://maps.app.goo.gl/5i4JY1qPiESz9t1m8',
    description: [
      'This was the CodeOnJVM Chennai Mid Year Meetup hosted at IBM, Tharamani. The meetup brought together students, developers, experienced engineers, and members of Chennai’s Java community for a day of technical sessions, networking, and conversations around real-world software engineering. The official agenda included three sessions: DSA in Production by Hareesh Rajendran, Streaming Large File Downloads in Java by Kalaivani Mohan, and Uncovering Ideas Worth Building in the AI Era by Agnel John.',

    'The day started much earlier than the event itself. The long journey to IBM and the early-morning start became part of the experience, but reaching the venue and eventually sitting inside a room surrounded by developers and experienced engineers made the effort worthwhile. This was not just another event where I wanted to collect certificates or listen to talks; I went in genuinely curious about how experienced engineers think about production systems.',

    'Hareesh Rajendran’s session, DSA in Production, changed the way I understood Data Structures and Algorithms. Instead of treating DSA as something primarily meant for interviews or competitive programming, the session connected data structures directly to production engineering and system design. Concepts such as Bloom Filters, Skip Lists, HNSW (Hierarchical Navigable Small World), H3, LSM Trees, MemTables, SSTables, Write-Ahead Logs, HyperLogLog, and approximate algorithms showed how seemingly theoretical structures become practical tools when systems have to operate at scale.',

    'The discussion went beyond individual data structures. It introduced the reasoning behind engineering choices: whether a workload is read-heavy or write-heavy, how data is stored and accessed, how unnecessary database operations can be avoided, how approximate answers can be intentionally used when exact answers are unnecessarily expensive, and how different algorithms and storage structures influence performance and scalability. Databases and technologies such as PostgreSQL, RocksDB, Cassandra, ScyllaDB, and DynamoDB were discussed in the context of these production trade-offs.',

    'One of the strongest takeaways from Hareesh’s session was that DSA is not merely an interview skill. It is part of the vocabulary used to reason about real software systems. After the meetup, I started approaching backend development differently: instead of asking only whether my code works, I increasingly ask what its complexity is, what happens when the data grows, whether the workload is read-heavy or write-heavy, whether the chosen structure is appropriate, and what trade-offs the implementation introduces.',

    'The session on Streaming Large File Downloads in Java by Kalaivani Mohan added another production-oriented perspective. It focused on handling large file transfers efficiently in Java and highlighted the kind of backend engineering problems that appear when software has to operate reliably beyond small development environments. Seeing these topics presented from an enterprise engineering perspective helped reinforce the difference between writing code that works and engineering a system that continues to work efficiently at scale.',

    'Agnel John’s session, Uncovering Ideas Worth Building in the AI Era, shifted the discussion from engineering systems to engineering problems. His perspective focused on identifying real problems, validating whether people actually need a solution, building products around those problems, and understanding that having the ability to build something is different from having something worth building. One of the strongest ideas I took away was that many people can build, but only some can successfully sell and validate what they build. The conversation also challenged the assumption that SaaS and AI are simply saturated trends; different customers have different requirements, and real products emerge from understanding those requirements deeply.',

    'The discussion around AI was especially meaningful to me because it did not treat AI as a replacement for engineering. Instead, it presented AI as a tool that can amplify curiosity, experimentation, and productivity. The broader message was that developers need to adapt continuously. Technology changes, development workflows change, and engineers who keep learning can use those changes to build faster and explore problems that previously required much more effort.',

    'One memorable part of the meetup was a discussion with a traditional programmer who expressed strong skepticism toward AI and SaaS, arguing that these areas were already saturated. Rather than turning the conversation into an argument about who was right, the speakers challenged the underlying assumption: two products can appear similar while serving completely different customer requirements. The discussion reinforced an important product-engineering principle for me — technology should be evaluated through the problems it solves and the people it serves, not simply through whether the technology itself looks crowded.',

    'The meetup also became an important networking experience. I interacted with IBM engineers and other experienced professionals, including conversations around full-stack engineering, acquisitions, research and development, cloud products, and the realities of professional software engineering. I also spoke with professionals from other technology companies, including Chargebee. These conversations helped me see how engineers working in industry think about systems differently from how students often approach projects.',

    'I also had several unexpected interactions with other attendees. People complimented the questions I asked during the sessions, and during a break, a group of attendees approached me and asked for my LinkedIn profile. What began as a technical meetup gradually became a genuine community and networking experience rather than simply a one-way learning session.',

    'The most important outcome of this meetup was not that I memorized Bloom Filters, Skip Lists, HNSW, HyperLogLog, LSM Trees, or other production concepts. The real outcome was a change in how I think. Before this meetup, I could ask whether a backend implementation worked. After this meetup, I started asking why it should be implemented that way, how it behaves under scale, what its complexity is, what happens under different workloads, and which data structure or algorithm would naturally fit the problem.',

    'That mindset has directly influenced the way I approach my own projects. For example, while working on ResultGrid and other backend systems, I now want engineering decisions to emerge from the actual problem rather than adding algorithms merely for the sake of using them. If a Skip List, Bloom Filter, caching strategy, indexing technique, or different storage model genuinely fits the workload, I want to understand why and use it intentionally.',

    'The meetup also changed how I think about learning DSA. Instead of jumping directly into hundreds of LeetCode problems, I increasingly want to understand Java’s built-in data structures first: what operations they provide, their time and space complexity, what workloads they suit, and why one structure is preferable to another. From there, algorithms become patterns for solving problems rather than isolated interview tricks.',

    'Looking back, this meetup became a turning point in my engineering journey. I entered IBM as someone interested in backend development and DSA. I left with a stronger production-engineering mindset: understand the problem, understand the workload, choose the right abstraction, reason about trade-offs, and build something that actually matters to users. The biggest thing I carried home was not a particular data structure or technology — it was a different way of thinking about software.'
    ],
    tags: [
      '#CodeOnJVM',
      '#IBM',
      '#IBMChennai',
      '#Chennai',
      '#Java',
      '#JVM',
      '#DSA',
      '#ProductionEngineering',
      '#SystemDesign',
      '#BackendEngineering',
      '#DataStructures',
      '#Algorithms',
      '#HNSW',
      '#BloomFilters',
      '#SkipLists',
      '#HyperLogLog',
      '#LSMTrees',
      '#SSTables',
      '#MemTables',
      '#WAL',
      '#AI',
      '#SaaS',
      '#ProductEngineering',
      '#Networking',
      '#EngineeringMindset',
      '#Community',
      '#Learning'
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
                      className="mt-4 h-56 w-full rounded-xl border border-slate-800 bg-slate-950/70 object-contain p-1 sm:h-60"
                    />
                  ) : null}

                  {meetup.images ? (
                    <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                      {meetup.images.map((imagePath, index) => (
                        <img
                          key={imagePath}
                          src={imagePath}
                          alt={`${meetup.eventName} snapshot ${index + 1}`}
                          className="h-56 w-full rounded-xl border border-slate-800 bg-slate-950/70 object-contain p-1 sm:h-60"
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

