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
    <header className="sticky top-0 z-50 overflow-visible border-b border-[#111111] bg-[#fafaf8]">
      <nav className="mx-auto flex w-full max-w-6xl items-center justify-between gap-6 px-4 py-3 sm:px-6">
        <Link to="/" className="flex items-center gap-4 text-sm font-semibold tracking-[0.2em] text-[#111111] transition hover:opacity-80">
          <img
            src="/images/lgc-logo.webp"
            alt="LGC Systems logo"
            className="h-8 w-auto rounded-none border border-[#111111] bg-white p-1 shadow-[4px_4px_0_rgba(17,17,17,0.08)]"
          />
          <span className="hidden sm:inline">RAMALINGAM JAYAVELU</span>
        </Link>

        {isHomePage ? (
          <div className="flex items-center gap-2">
            <ul className="hidden items-center gap-4 text-sm text-[#111111]/80 lg:flex">
              {navLinks.map((item) => (
                <li key={item.label}>
                  {item.isRoute ? (
                    <Link
                      to={item.href}
                      className="transition duration-300 hover:text-[#111111] hover:underline"
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <a
                      href={item.href}
                      className="transition duration-300 hover:text-[#111111] hover:underline"
                    >
                      {item.label}
                    </a>
                  )}
                </li>
              ))}
              <li>
                <Link to="/youtube-learning" className="transition duration-300 hover:text-[#111111] hover:underline">
                  YouTube Learn
                </Link>
              </li>
              <li>
                <Link to="/quick-overview" className="transition duration-300 hover:text-[#111111] hover:underline">
                  Quick Overview
                </Link>
              </li>
              <li className="relative">
                <details className="group">
                  <summary className="list-none cursor-pointer select-none rounded-none border border-transparent px-2 py-1 transition hover:border-[#111111] hover:text-[#111111]">
                    Events
                  </summary>
                  <div className="absolute right-0 z-50 mt-2 w-60 rounded-none border border-[#111111] bg-white p-2 shadow-[8px_8px_0_rgba(17,17,17,0.08)]">
                    {eventLinks.map((item) => (
                      <Link
                        key={item.to}
                        to={item.to}
                        className="block rounded-none px-3 py-2 text-sm text-[#111111] transition hover:bg-[#f5f5ef]"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </details>
              </li>
              <li className="relative">
                <details className="group">
                  <summary className="list-none cursor-pointer select-none rounded-none border border-transparent px-2 py-1 transition hover:border-[#111111] hover:text-[#111111]">
                    Proofs
                  </summary>
                  <div className="absolute right-0 z-50 mt-2 w-56 rounded-none border border-[#111111] bg-white p-2 shadow-[8px_8px_0_rgba(17,17,17,0.08)]">
                    {proofLinks.map((item) => (
                      <Link
                        key={item.to}
                        to={item.to}
                        className="block rounded-none px-3 py-2 text-sm text-[#111111] transition hover:bg-[#f5f5ef]"
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
              className="inline-flex min-h-[44px] items-center gap-2 rounded-none border border-[#111111] bg-white px-3 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#111111] shadow-[4px_4px_0_rgba(17,17,17,0.08)] transition hover:translate-x-[1px] hover:translate-y-[1px] hover:bg-[#f5f5ef]"
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
              className="rounded-none border border-[#111111] p-2 text-[#111111] transition hover:bg-[#f5f5ef] lg:hidden"
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
            className="hidden rounded-none border border-[#111111] px-3 py-2 text-sm font-medium text-[#111111] transition hover:bg-[#f5f5ef] lg:inline-flex"
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
        <div id="mobile-nav-menu" className="border-t border-[#111111] bg-[#fafaf8] px-4 py-3 lg:hidden">
          <ul className="grid gap-2 text-sm text-[#111111]">
            {navLinks.map((item) => (
              <li key={item.label}>
                {item.isRoute ? (
                  <Link
                    to={item.href}
                    className="block rounded-none px-2 py-2 transition hover:bg-[#f5f5ef]"
                    onClick={closeMenu}
                  >
                    {item.label}
                  </Link>
                ) : (
                  <a
                    href={item.href}
                    className="block rounded-none px-2 py-2 transition hover:bg-[#f5f5ef]"
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
                className="block rounded-none px-2 py-2 transition hover:bg-[#f5f5ef]"
                onClick={closeMenu}
              >
                YouTube Learn
              </Link>
            </li>
            <li>
              <Link
                to="/quick-overview"
                className="block rounded-none px-2 py-2 transition hover:bg-[#f5f5ef]"
                onClick={closeMenu}
              >
                Quick Overview
              </Link>
            </li>
            <li className="mt-1 px-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#111111]/70">Events</li>
            {eventLinks.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  className="block rounded-none px-2 py-2 transition hover:bg-[#f5f5ef]"
                  onClick={closeMenu}
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li className="mt-1 px-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#111111]/70">Proof Pages</li>
            {proofLinks.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  className="block rounded-none px-2 py-2 transition hover:bg-[#f5f5ef]"
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

