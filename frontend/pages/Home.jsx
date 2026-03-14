import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import About from '../components/About'
import Philosophy from '../components/Philosophy'
import Products from '../components/Products'
import Vision from '../components/Vision'
import Skills from '../components/Skills'
import GithubActivity from '../components/GithubActivity'
import KnowMe from '../components/KnowMe'
import LearningSources from '../components/LearningSources'
import Contact from '../components/Contact'

function Home() {
  return (
    <div className="relative min-h-screen bg-slate-950 text-slate-100">
      <div className="pointer-events-none absolute inset-0 -z-0 bg-[radial-gradient(circle_at_20%_20%,rgba(56,189,248,0.12),transparent_34%),radial-gradient(circle_at_80%_0%,rgba(20,184,166,0.1),transparent_30%),radial-gradient(circle_at_50%_100%,rgba(59,130,246,0.08),transparent_35%)]" />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <About />
        <Philosophy />
        <Products />
        <Vision />
        <Skills />
        <GithubActivity />
        <KnowMe />
        <LearningSources />
        <Contact />
      </main>
    </div>
  )
}

export default Home
