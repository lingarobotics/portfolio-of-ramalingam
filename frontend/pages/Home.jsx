import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import About from '../components/About'
import BuildMindsetSection from '../components/BuildMindsetSection'
import Philosophy from '../components/Philosophy'
import Products from '../components/Products'
import Vision from '../components/Vision'
import Skills from '../components/Skills'
import GithubActivity from '../components/GithubActivity'
import KnowMe from '../components/KnowMe'
import LearningSources from '../components/LearningSources'
import Contact from '../components/Contact'
import EngineeringThoughts from '../components/EngineeringThoughts'
import Blogs from '../components/Blogs'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className="relative min-h-screen bg-slate-950 text-slate-100">
      <div className="pointer-events-none absolute inset-0 -z-0 bg-[radial-gradient(circle_at_20%_20%,rgba(56,189,248,0.12),transparent_34%),radial-gradient(circle_at_80%_0%,rgba(20,184,166,0.1),transparent_30%),radial-gradient(circle_at_50%_100%,rgba(59,130,246,0.08),transparent_35%)]" />

      <Navbar />

      <main className="relative z-10">
        <Hero />

        <About />

        <Philosophy />

        <BuildMindsetSection />

        <EngineeringThoughts />

        <Blogs />

        <Products />

        <Vision />

        <Skills />

        <GithubActivity />

        <KnowMe />

        <LearningSources />

        <section
          id="learning-journey"
          className="mx-auto max-w-6xl px-4 py-20 sm:px-6"
        >
          <div className="rounded-3xl border border-slate-800 bg-slate-900/50 p-8 sm:p-12">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-cyan-300">
              Learning Journey
            </p>

            <h2 className="mt-4 text-4xl font-bold tracking-tight text-slate-100">
              Beyond Certificates
            </h2>

            <p className="mt-6 max-w-4xl leading-relaxed text-slate-300">
              Certificates show completion.
              Learning journeys show transformation.
              This section documents how concepts evolved into
              engineering thinking, practical capability,
              problem-solving approaches, and real-world understanding
              through structured learning paths across platforms.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <span className="rounded-full border border-cyan-400/20 px-4 py-2 text-sm text-cyan-200">
                Learning At No Cost
              </span>

              <span className="rounded-full border border-cyan-400/20 px-4 py-2 text-sm text-cyan-200">
                Capability Building
              </span>

              <span className="rounded-full border border-cyan-400/20 px-4 py-2 text-sm text-cyan-200">
                Engineering Thinking
              </span>

              <span className="rounded-full border border-cyan-400/20 px-4 py-2 text-sm text-cyan-200">
                Evidence Driven Learning
              </span>
            </div>

            <div className="mt-10">
              <Link
                to="/learning-platforms"
                className="inline-flex items-center rounded-xl border border-cyan-400/40 px-5 py-3 text-sm font-medium text-cyan-200 transition hover:border-cyan-300 hover:text-cyan-100"
              >
                Explore Learning Journey →
              </Link>
            </div>
          </div>
        </section>

        <Contact />
      </main>
    </div>
  )
}

export default Home