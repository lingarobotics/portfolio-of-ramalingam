import { useEffect, useMemo, useState } from 'react'
import { fetchPublicConfig } from '../lib/publicConfig'

const baseContacts = [
  {
    label: 'GitHub',
    value: 'github.com/lingarobotics',
    href: 'https://github.com/lingarobotics',
    icon: '/images/github.png',
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/linga-robotics-conceptual-learner',
    href: 'https://www.linkedin.com/in/linga-robotics-conceptual-learner',
    icon: '/images/linkedin.png',
  },
]

function Contact() {
  const [contactEmail, setContactEmail] = useState('')

  useEffect(() => {
    let mounted = true

    fetchPublicConfig().then((config) => {
      if (mounted) {
        setContactEmail(typeof config?.contactEmail === 'string' ? config.contactEmail : '')
      }
    })

    return () => {
      mounted = false
    }
  }, [])

  const contacts = useMemo(() => {
    const emailContact = contactEmail
      ? [
          {
            label: 'Email',
            value: contactEmail,
            href: `mailto:${contactEmail}`,
            icon: '/images/gmail.png',
          },
        ]
      : []

    return [...emailContact, ...baseContacts]
  }, [contactEmail])

  return (
    <section id="contact" className="mx-auto w-full max-w-4xl scroll-mt-20 px-4 pb-20 pt-16 text-center sm:px-6">
      <h2 className="text-3xl font-semibold tracking-tight text-slate-100 sm:text-4xl">Contact</h2>
      <p className="mt-4 text-slate-300">Here are the best ways to connect with me and continue the conversation.</p>

      <div className="mx-auto mt-8 max-w-2xl rounded-2xl border border-slate-800 bg-slate-900/55 p-6 shadow-[0_0_30px_rgba(15,23,42,0.35)] sm:p-8">
        <div className="grid gap-3 text-left">
          {contacts.map((contact) => (
            <a
              key={contact.label}
              href={contact.href}
              target={contact.href.startsWith('mailto:') ? undefined : '_blank'}
              rel={contact.href.startsWith('mailto:') ? undefined : 'noreferrer'}
              className="flex items-center gap-3 rounded-lg border border-slate-700 bg-slate-950/70 px-4 py-3 transition hover:border-cyan-400/55 hover:text-cyan-200"
            >
              <img src={contact.icon} alt="" aria-hidden="true" className="h-8 w-8 rounded-md border border-slate-700 object-cover p-1" />
              <div className="min-w-0">
                <p className="text-xs uppercase tracking-[0.18em] text-cyan-200">{contact.label}</p>
                <p className="mt-1 text-sm text-slate-100 [overflow-wrap:anywhere]">{contact.value}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Contact
