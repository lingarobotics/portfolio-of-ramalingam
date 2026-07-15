import { useState } from 'react'

const links = [
  {
    label: 'Email',
    href: 'mailto:lingarobotics@gmail.com',
    icon: '/images/gmail.webp',
  },
  {
    label: 'GitHub',
    href: 'https://github.com/lingarobotics',
    icon: '/images/github.webp',
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/linga-robotics-conceptual-learner',
    icon: '/images/linkedin.webp',
  },
]

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    setLoading(true)
    setError('')
    setSubmitted(false)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.message || 'Failed to send message')
      }

      setSubmitted(true)

      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      })
    } catch (err) {
      setError(err.message || 'Something went wrong')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section
      id="lets-connect"
      className="mx-auto w-full max-w-6xl scroll-mt-20 px-4 py-16 sm:px-6"
    >
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-[#111111] sm:text-4xl">
          Let&apos;s Connect
        </h2>

        <p className="mt-4 text-[#444444]">
          Available for internships, engineering discussions,
          collaboration opportunities, and learning conversations.
        </p>
      </div>

      <div className="mx-auto mt-10 max-w-2xl">
        {submitted ? (
          <div className="rounded-none border border-[#111111] bg-[#f5f5ef] p-8 text-center shadow-[8px_8px_0_rgba(17,17,17,0.08)]">
            <p className="text-lg font-medium text-[#111111]">
              Message sent!
            </p>

            <p className="mt-2 text-sm text-[#444444]">
              Thanks for reaching out. I&apos;ll get back to you soon.
            </p>
          </div>
        ) : (
          <>
            {error && (
              <div className="mb-5 rounded-none border border-[#111111] bg-[#f5f5ef] p-4 shadow-[8px_8px_0_rgba(17,17,17,0.08)]">
                <p className="text-sm text-[#111111]">{error}</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-[#111111]"
                  >
                    Your Name
                  </label>

                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="mt-1.5 w-full rounded-none border border-[#111111] bg-white px-4 py-2.5 text-sm text-[#111111] placeholder:text-[#666666] transition focus:outline-none focus:ring-2 focus:ring-[#111111]/20"
                    placeholder="Your Name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-[#111111]"
                  >
                    Your Email
                  </label>

                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="mt-1.5 w-full rounded-none border border-[#111111] bg-white px-4 py-2.5 text-sm text-[#111111] placeholder:text-[#666666] transition focus:outline-none focus:ring-2 focus:ring-[#111111]/20"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-[#111111]"
                >
                  Subject
                </label>

                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  className="mt-1.5 w-full rounded-none border border-[#111111] bg-white px-4 py-2.5 text-sm text-[#111111] placeholder:text-[#666666] transition focus:outline-none focus:ring-2 focus:ring-[#111111]/20"
                  placeholder="What's this about?"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-[#111111]"
                >
                  Message
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="mt-1.5 w-full resize-y rounded-none border border-[#111111] bg-white px-4 py-2.5 text-sm text-[#111111] placeholder:text-[#666666] transition focus:outline-none focus:ring-2 focus:ring-[#111111]/20"
                  placeholder="Write your message..."
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full rounded-none border border-[#111111] bg-[#111111] px-6 py-3 text-sm font-semibold text-white shadow-[6px_6px_0_rgba(17,17,17,0.14)] transition hover:translate-x-[1px] hover:translate-y-[1px] hover:bg-[#2a2a2a] disabled:cursor-not-allowed disabled:opacity-60"
              >
                {loading ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </>
        )}
      </div>

      <div className="mx-auto mt-10 flex max-w-md items-center justify-center gap-6">
        {links.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target={link.href.startsWith('mailto:') ? undefined : '_blank'}
            rel={link.href.startsWith('mailto:') ? undefined : 'noreferrer'}
            className="inline-flex items-center gap-2 text-sm text-[#444444] transition hover:text-[#111111]"
          >
            <img
              src={link.icon}
              alt=""
              aria-hidden="true"
              className="h-5 w-5 rounded-none object-contain"
            />
            {link.label}
          </a>
        ))}
      </div>
    </section>
  )
}

export default Contact