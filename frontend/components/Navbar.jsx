import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import TerminalLine from './TerminalLine'

const navLinks = [
  { label: 'Hero', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'Thoughts', href: '#engineering-thoughts' },
  { label: 'Blogs', href: '/blogs', isRoute: true },
  { label: 'Learning Journey', href: '/learning-platforms', isRoute: true },
  { label: 'Projects', href: '#products' },
  { label: 'Skills', href: '#skills' },
  { label: 'Learning', href: '#learning-sources' },
  { label: 'Contact', href: '#lets-connect' },
]

const proofLinks = [
  { label: 'LGC Concept AI Proof', to: '/lgc-concept-ai-proof' },
  { label: 'AI Learning Proof', to: '/ai-learning-proof' },
  { label: 'GitHub Proof', to: '/github-workflow-proof' },
  { label: 'UI Answer Proof', to: '/ui-answer-evolution' },
]

const eventLinks = [
  { label: 'Event I Conducted', to: '/events-conducted' },
  { label: 'Events I participated', to: '/meetups' },
]

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isTerminalOpen, setIsTerminalOpen] = useState(false)
  const { pathname } = useLocation()
  const isHomePage = pathname === '/'

  const closeMenu = () => setIsOpen(false)
  const closeTerminal = () => setIsTerminalOpen(false)

  return (
    <header className="sticky top-0 z-50 overflow-visible border-b border-slate-800/70 bg-slate-950/80 backdrop-blur-xl">
      <nav className="mx-auto flex w-full max-w-6xl items-center justify-between gap-3 px-4 py-3 sm:px-6">
        <Link to="/" className="flex items-center gap-3 text-sm font-semibold tracking-[0.18em] text-cyan-300 transition hover:text-cyan-200">
          <img
            src="/images/lgc-logo.webp"
            alt="LGC Systems logo"
            className="h-8 w-auto rounded-md border border-cyan-400/40 bg-slate-900/70 p-1"
          />
          <span className="hidden sm:inline">RAMALINGAM JAYAVELU</span>
        </Link>

        {isHomePage ? (
          <div className="flex items-center gap-2">
            <ul className="hidden items-center gap-4 text-sm text-slate-300 lg:flex">
              {navLinks.map((item) => (
                <li key={item.label}>
                  {item.isRoute ? (
                    <Link
                      to={item.href}
                      className="transition duration-300 hover:text-cyan-200"
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <a
                      href={item.href}
                      className="transition duration-300 hover:text-cyan-200"
                    >
                      {item.label}
                    </a>
                  )}
                </li>
              ))}
              <li>
                <Link to="/youtube-learning" className="transition duration-300 hover:text-cyan-200">
                  YouTube Learn
                </Link>
              </li>
              <li>
                <Link to="/quick-overview" className="transition duration-300 hover:text-cyan-200">
                  Quick Overview
                </Link>
              </li>
              <li className="relative">
                <details className="group">
                  <summary className="list-none cursor-pointer select-none rounded-md px-2 py-1 transition hover:bg-slate-800/70 hover:text-cyan-200">
                    Events
                  </summary>
                  <div className="absolute right-0 z-50 mt-2 w-60 rounded-xl border border-slate-800 bg-slate-950/95 p-2 shadow-xl backdrop-blur">
                    {eventLinks.map((item) => (
                      <Link
                        key={item.to}
                        to={item.to}
                        className="block rounded-md px-3 py-2 text-sm text-slate-200 transition hover:bg-slate-800/70 hover:text-cyan-200"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </details>
              </li>
              <li className="relative">
                <details className="group">
                  <summary className="list-none cursor-pointer select-none rounded-md px-2 py-1 transition hover:bg-slate-800/70 hover:text-cyan-200">
                    Proofs
                  </summary>
                  <div className="absolute right-0 z-50 mt-2 w-56 rounded-xl border border-slate-800 bg-slate-950/95 p-2 shadow-xl backdrop-blur">
                    {proofLinks.map((item) => (
                      <Link
                        key={item.to}
                        to={item.to}
                        className="block rounded-md px-3 py-2 text-sm text-slate-200 transition hover:bg-slate-800/70 hover:text-cyan-200"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </details>
              </li>
            </ul>

            <button
              type="button"
              aria-label="Open terminal navigation"
              aria-expanded={isTerminalOpen}
              className="inline-flex min-h-[44px] items-center gap-2 rounded-full border border-cyan-400/50 bg-slate-950/90 px-3 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-cyan-200 shadow-[0_0_24px_rgba(34,211,238,0.18)] transition hover:border-cyan-300 hover:text-cyan-100"
              onClick={() => {
                setIsOpen(false)
                setIsTerminalOpen((previous) => !previous)
              }}
            >
              <span aria-hidden="true" className="text-sm leading-none">⌨</span>
              <span className="hidden sm:inline">Terminal</span>
            </button>

            <button
              type="button"
              aria-label="Toggle navigation"
              aria-expanded={isOpen}
              aria-controls="mobile-nav-menu"
              className="rounded-lg border border-slate-700 p-2 text-slate-100 transition hover:border-cyan-400 hover:text-cyan-200 lg:hidden"
              onClick={() => {
                setIsTerminalOpen(false)
                setIsOpen((previous) => !previous)
              }}
            >
              <span className="block h-0.5 w-5 bg-current" />
              <span className="mt-1.5 block h-0.5 w-5 bg-current" />
              <span className="mt-1.5 block h-0.5 w-5 bg-current" />
            </button>
          </div>
        ) : (
          <Link
            to="/"
            className="hidden rounded-lg border border-slate-700 px-3 py-2 text-sm font-medium text-slate-200 transition hover:border-cyan-400/60 hover:text-cyan-200 lg:inline-flex"
          >
            Back to Portfolio
          </Link>
        )}
      </nav>

      <TerminalLine
        isOpen={isTerminalOpen && isHomePage}
        onClose={closeTerminal}
      />

      {isOpen && isHomePage ? (
        <div id="mobile-nav-menu" className="border-t border-slate-800/80 bg-slate-950/95 px-4 py-3 lg:hidden">
          <ul className="grid gap-2 text-sm text-slate-200">
            {navLinks.map((item) => (
              <li key={item.label}>
                {item.isRoute ? (
                  <Link
                    to={item.href}
                    className="block rounded-md px-2 py-2 transition hover:bg-slate-800/70 hover:text-cyan-200"
                    onClick={closeMenu}
                  >
                    {item.label}
                  </Link>
                ) : (
                  <a
                    href={item.href}
                    className="block rounded-md px-2 py-2 transition hover:bg-slate-800/70 hover:text-cyan-200"
                    onClick={closeMenu}
                  >
                    {item.label}
                  </a>
                )}
              </li>
            ))}
            <li>
              <Link
                to="/youtube-learning"
                className="block rounded-md px-2 py-2 transition hover:bg-slate-800/70 hover:text-cyan-200"
                onClick={closeMenu}
              >
                YouTube Learn
              </Link>
            </li>
            <li>
              <Link
                to="/quick-overview"
                className="block rounded-md px-2 py-2 transition hover:bg-slate-800/70 hover:text-cyan-200"
                onClick={closeMenu}
              >
                Quick Overview
              </Link>
            </li>
            <li className="mt-1 px-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-cyan-300/90">Events</li>
            {eventLinks.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  className="block rounded-md px-2 py-2 transition hover:bg-slate-800/70 hover:text-cyan-200"
                  onClick={closeMenu}
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li className="mt-1 px-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-cyan-300/90">Proof Pages</li>
            {proofLinks.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  className="block rounded-md px-2 py-2 transition hover:bg-slate-800/70 hover:text-cyan-200"
                  onClick={closeMenu}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </header>
  )
}

export default Navbar

