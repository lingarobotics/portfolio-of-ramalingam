import { Link } from 'react-router-dom'

function IntentGateway({ isVisible, onChoose }) {
  return (
    <div
      className={`fixed inset-0 z-[190] flex items-start justify-center overflow-y-auto bg-[#111111]/80 px-4 py-4 transition-opacity duration-500 sm:items-center sm:py-8 ${
        isVisible ? 'opacity-100' : 'pointer-events-none opacity-0'
      }`}
      aria-hidden={!isVisible}
    >
      <section
        role="dialog"
        aria-modal="true"
        aria-labelledby="intent-gateway-title"
        className="my-auto max-h-[calc(100dvh-2rem)] w-full max-w-3xl overflow-y-auto border border-[#111111] bg-[#fafaf8] p-4 text-[#111111] shadow-[10px_10px_0_rgba(0,0,0,0.3)] sm:max-h-none sm:p-10"
      >
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#666666]">A place to begin</p>
        <h1 id="intent-gateway-title" className="mt-3 text-3xl font-black tracking-tight sm:text-5xl">
          What brings you here?
        </h1>
        <p className="mt-4 max-w-2xl leading-relaxed text-[#444444]">
          Choose the starting point that fits your time and curiosity. Both paths lead through the same work, curated differently for the way you want to explore it. You can always switch paths later.
        </p>
        <div className="mt-6 grid gap-4 md:mt-8 md:grid-cols-2">
          <Link
            to="/quick-overview"
            onClick={() => onChoose('professional')}
            className="group min-h-0 border border-[#111111] bg-white p-4 text-[#111111] shadow-[6px_6px_0_rgba(17,17,17,0.1)] transition hover:translate-x-[1px] hover:translate-y-[1px] hover:bg-[#111111] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#111111] sm:min-h-44 sm:p-5"
          >
            <span className="block text-xs font-semibold uppercase tracking-[0.16em] text-[#666666] group-hover:text-white/70">Professional evaluation</span>
            <span className="mt-3 block text-lg font-bold group-hover:text-white sm:text-xl">I’m here for a professional evaluation</span>
            <span className="mt-3 block text-sm leading-relaxed text-[#444444] group-hover:text-white/80">Review professionally curated, tailored information about me, my work, and the evidence behind it to support your evaluation.</span>
            <span className="mt-4 block text-sm font-semibold underline underline-offset-4 group-hover:text-white sm:mt-5">Open quick overview →</span>
          </Link>

          <a
            href="#hero"
            onClick={() => onChoose('explore')}
            className="group min-h-0 border border-[#111111] bg-white p-4 text-[#111111] shadow-[6px_6px_0_rgba(17,17,17,0.1)] transition hover:translate-x-[1px] hover:translate-y-[1px] hover:bg-[#111111] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#111111] sm:min-h-44 sm:p-5"
          >
            <span className="block text-xs font-semibold uppercase tracking-[0.16em] text-[#666666] group-hover:text-white/70">Open exploration</span>
            <span className="mt-3 block text-lg font-bold group-hover:text-white sm:text-xl">I want to explore</span>
            <span className="mt-3 block text-sm leading-relaxed text-[#444444] group-hover:text-white/80">Enter the complete portfolio of projects, ideas, learning, and experiments.</span>
            <span className="mt-4 block text-sm font-semibold underline underline-offset-4 group-hover:text-white sm:mt-5">Explore the portfolio →</span>
          </a>
        </div>
      </section>
    </div>
  )
}

export default IntentGateway