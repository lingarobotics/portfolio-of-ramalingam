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
    <div className="relative min-h-screen bg-[#fafaf8] text-[#111111]">

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
          <div className="rounded-none border border-[#111111] bg-white p-8 shadow-[10px_10px_0_rgba(17,17,17,0.08)] sm:p-12">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#111111]/70">
              Learning Journey
            </p>

            <h2 className="mt-4 text-4xl font-bold tracking-tight text-[#111111] sm:text-5xl">
              Beyond Certificates
            </h2>

            <p className="mt-6 max-w-4xl leading-relaxed text-[#111111]/80">
              Certificates show completion.
              Learning journeys show transformation.
              This section documents how concepts evolved into
              engineering thinking, practical capability,
              problem-solving approaches, and real-world understanding
              through structured learning paths across platforms.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <span className="rounded-none border border-[#111111] px-4 py-2 text-sm text-[#111111]">
                Learning At No Cost
              </span>

              <span className="rounded-none border border-[#111111] px-4 py-2 text-sm text-[#111111]">
                Capability Building
              </span>

              <span className="rounded-none border border-[#111111] px-4 py-2 text-sm text-[#111111]">
                Engineering Thinking
              </span>

              <span className="rounded-none border border-[#111111] px-4 py-2 text-sm text-[#111111]">
                Evidence Driven Learning
              </span>
            </div>

            <div className="mt-10">
              <Link
                to="/learning-platforms"
                className="inline-flex items-center rounded-none border border-[#111111] bg-[#111111] px-5 py-3 text-sm font-medium text-white shadow-[6px_6px_0_rgba(17,17,17,0.16)] transition hover:translate-x-[1px] hover:translate-y-[1px] hover:bg-[#2a2a2a]"
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