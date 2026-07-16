import { useEffect, useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { fetchPublicConfig } from '../lib/publicConfig'

const FALLBACK_CONTACT_EMAIL = import.meta.env.VITE_CONTACT_EMAIL_FALLBACK || 'lingarobotics@gmail.com'

const systemButtons = [
  { label: 'LGC Systems', link: 'https://lgcsystems.xyz', primary: true },
  {
    label: 'LGC Concept AI',
    link: 'https://concept-ai.lgcsystems.xyz',
  },
  {
    label: 'LGC LearnLogic CODE',
    link: 'https://learn-logic-code.lgcsystems.xyz',
  },
  {
    label: 'LGC Articulate DevLang',
    link: 'https://articulate-devlang.lgcsystems.xyz',
  }
  ,{
    label: 'Learn with Linga - Insights',
    link: 'https://learn-with-linga.lgcsystems.xyz',
  }
]

const baseProfileLinks = [
  { label: 'GitHub', link: 'https://github.com/lingarobotics', icon: '/images/github.webp' },
  {
    label: 'LinkedIn',
    link: 'https://www.linkedin.com/in/linga-robotics-conceptual-learner',
    icon: '/images/linkedin.webp',
  },
  {
    label: 'Hashnode',
    link: 'https://thoughts-of-linga.hashnode.dev/',
    icon: '/images/hashnode-icon.svg',
  },

  {
    label: 'Instagram',
    link: 'https://www.instagram.com/learn_with_linga/',
    icon: '/images/instagram.webp',
  },

  {
    label: 'X',
    link: 'https://x.com/LingaRobotics',
    icon: '/images/x.webp',
  }
]

function Hero() {
  const [contactEmail, setContactEmail] = useState('')

  useEffect(() => {
    let mounted = true

    fetchPublicConfig().then((config) => {
      if (mounted) {
        const runtimeEmail = typeof config?.contactEmail === 'string' ? config.contactEmail.trim() : ''
        setContactEmail(runtimeEmail || FALLBACK_CONTACT_EMAIL)
      }
    })

    return () => {
      mounted = false
    }
  }, [])

  const profileLinks = useMemo(() => {
    const emailEntry = contactEmail
      ? [{ label: 'Email', link: `mailto:${contactEmail}`, icon: '/images/gmail.webp' }]
      : []

    return [...baseProfileLinks, ...emailEntry]
  }, [contactEmail])

  return (
    <section id="hero" className="mx-auto w-full max-w-6xl scroll-mt-20 px-4 pb-16 pt-14 sm:px-6 sm:pt-20">
      <div className="grid items-center gap-10 rounded-none border border-[#111111] bg-white p-6 shadow-[10px_10px_0_rgba(17,17,17,0.08)] lg:grid-cols-[1.25fr_0.9fr] lg:p-10 xl:p-12">
        <div className="flex flex-col justify-center">
          <div className="mb-6 inline-flex w-fit items-center gap-3 rounded-none border border-[#111111] bg-[#f5f5ef] px-4 py-2">
            <img src="/images/lgc-logo.webp" alt="LGC Systems" className="h-7 w-auto" />
            <span className="text-xs font-semibold uppercase tracking-[0.24em] text-[#111111]">LGC Systems</span>
          </div>

          <p className="mb-4 w-fit rounded-none border border-[#111111] bg-white px-4 py-2 text-xs uppercase tracking-[0.3em] text-[#111111]">
            My Portfolio
          </p>
          <h1 className="max-w-4xl text-balance text-5xl font-black tracking-tight text-[#111111] sm:text-6xl lg:text-7xl xl:text-8xl">
            Ramalingam Jayavelu
          </h1>
          <p className="mt-5 max-w-3xl text-lg font-semibold text-[#111111] sm:text-xl">
            Final-year Engineering Student, Founder & Builder - LGC Systems
          </p>
          <p className="mt-6 max-w-2xl text-balance text-lg leading-relaxed text-[#444444] sm:text-xl">
            Learning requires investment in effort and time - not currency.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-3">
            {systemButtons.map((button) => (
              <a
                key={button.label}
                href={button.link}
                target="_blank"
                rel="noreferrer"
                className={`rounded-none border px-5 py-3 text-sm font-semibold uppercase tracking-[0.12em] transition duration-300 ${
                  button.primary
                    ? 'border-[#111111] bg-[#111111] text-white shadow-[6px_6px_0_rgba(17,17,17,0.14)] hover:translate-x-[1px] hover:translate-y-[1px] hover:bg-[#2a2a2a]'
                    : 'border-[#111111] bg-white text-[#111111] shadow-[6px_6px_0_rgba(17,17,17,0.08)] hover:translate-x-[1px] hover:translate-y-[1px] hover:bg-[#f5f5ef]'
                }`}
              >
                {button.label}
              </a>
            ))}
            <Link
              to="/quick-overview"
              className="rounded-none border border-[#111111] bg-[#f5f5ef] px-5 py-3 text-sm font-semibold uppercase tracking-[0.12em] text-[#111111] shadow-[6px_6px_0_rgba(17,17,17,0.08)] transition duration-300 hover:translate-x-[1px] hover:translate-y-[1px] hover:bg-white"
            >
              Quick Overview
            </Link>
          </div>

          <div className="mt-8 flex flex-wrap gap-5 text-sm text-[#444444]">
            {profileLinks.map((profile) => (
              <a
                key={profile.label}
                href={profile.link}
                target={profile.link.startsWith('mailto:') ? undefined : '_blank'}
                rel={profile.link.startsWith('mailto:') ? undefined : 'noreferrer'}
                className="inline-flex items-center gap-2 underline-offset-4 transition hover:text-[#111111] hover:underline"
              >
                <img src={profile.icon} alt="" aria-hidden="true" className="h-4 w-4 rounded-none object-contain" />
                {profile.label}
              </a>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-center lg:justify-end">
          <img
            src="/images/ramalingam-portfolio.webp"
            alt="Ramalingam Jayavelu"
            className="h-72 w-full max-w-[26rem] rounded-none border border-[#111111] bg-[#f5f5ef] object-contain shadow-[10px_10px_0_rgba(17,17,17,0.1)] sm:h-80 lg:h-[30rem]"
          />
        </div>
      </div>
    </section>
  )
}

export default Hero

