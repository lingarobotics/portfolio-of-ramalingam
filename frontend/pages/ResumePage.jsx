import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { GlobalWorkerOptions, getDocument } from 'pdfjs-dist/legacy/build/pdf.mjs'
import workerSrc from 'pdfjs-dist/legacy/build/pdf.worker.min.mjs?url'
import Navbar from '../components/Navbar'

GlobalWorkerOptions.workerSrc = workerSrc

const sectionNames = new Set([
  'SUMMARY',
  'PROFESSIONALHIGHLIGHTS',
  'PROJECTS',
  'EXPERIENCE',
  'EDUCATION',
  'CERTIFICATIONS',
  'SKILLS',
  'TECHNICALSKILLS',
])

const profileLinks = {
  Github: 'https://github.com/lingarobotics',
  Portfolio: '/',
  Leetcode: 'https://leetcode.com/u/lingarobotics/',
  'Engineering Blogs': 'https://insights.linga.engineer',
  LinkedIn: 'https://www.linkedin.com/in/linga-robotics-conceptual-learner',
}

function normalizedHeading(line) {
  return line.replace(/\s+/g, '').toUpperCase()
}

function isSectionHeading(line) {
  return sectionNames.has(normalizedHeading(line))
}

function isBullet(line) {
  return /^[•▪▸►‣*-]\s?/.test(line)
}

function cleanBullet(line) {
  return line.replace(/^[•▪▸►‣*-]\s?/, '').replace(/^[•▪▸►‣]\s?/, '').trim()
}

function isEntryHeading(line, sectionHeading) {
  const section = normalizedHeading(sectionHeading)
  return section === 'PROJECTS' && line.includes('|')
}

function parseProjectHeading(line) {
  const parts = line.split('|').map((part) => part.trim()).filter(Boolean)
  if (parts.length < 2) return null

  const remainder = parts.slice(1).join(' | ')
  const repositoryMatch = remainder.match(/(?:https?:\/\/)?(?:github\.com\/)[^\s|]+/i)
  const repository = repositoryMatch?.[0] || ''
  const technologies = repository ? remainder.replace(repository, '').trim() : remainder

  return {
    name: parts[0],
    technologies: technologies.replace(/\s+$/, ''),
    repository,
  }
}

function groupProjectDetails(lines) {
  const details = []
  let currentBullet = null

  lines.forEach((line) => {
    if (isBullet(line)) {
      currentBullet = { type: 'bullet', lines: [cleanBullet(line)] }
      details.push(currentBullet)
      return
    }

    if (currentBullet) {
      currentBullet.lines.push(line)
      return
    }

    details.push({ type: 'detail', lines: [line] })
  })

  return details
}

function linkify(line) {
  const pattern = /(https?:\/\/[^\s|]+|(?:github\.com|linkedin\.com|[\w.-]+\.[a-z]{2,})\/[^\s|]+|[\w.+-]+@[\w.-]+\.[a-z]{2,})/gi
  const parts = line.split(pattern)

  return parts.map((part, index) => {
    if (!/(https?:\/\/[^\s|]+|(?:github\.com|linkedin\.com|[\w.-]+\.[a-z]{2,})\/[^\s|]+|[\w.+-]+@[\w.-]+\.[a-z]{2,})/i.test(part)) return <span key={`${part}-${index}`}>{part}</span>
    const cleanPart = part.replace(/[.,;)]$/, '')
    const href = cleanPart.includes('@') ? `mailto:${cleanPart}` : cleanPart.startsWith('http') ? cleanPart : `https://${cleanPart}`
    return (
      <a key={`${part}-${index}`} href={href} target={href.startsWith('mailto:') ? undefined : '_blank'} rel={href.startsWith('mailto:') ? undefined : 'noreferrer'}>
        {part}
      </a>
    )
  })
}

function linkifyProfileLine(line) {
  const parts = line.split(/(Github|Portfolio|Leetcode|Engineering Blogs|LinkedIn)/g)

  return parts.map((part, index) => {
    const href = profileLinks[part]
    if (!href) return <span key={`${part}-${index}`}>{part}</span>
    return (
      <a key={`${part}-${index}`} href={href} target={href.startsWith('http') ? '_blank' : undefined} rel={href.startsWith('http') ? 'noreferrer' : undefined}>{part}</a>
    )
  })
}

function ResumeDocument({ lines }) {
  const firstSectionIndex = lines.findIndex(isSectionHeading)
  const headerLines = firstSectionIndex >= 0 ? lines.slice(0, firstSectionIndex) : lines
  const sections = []
  let currentSection = null

  lines.slice(firstSectionIndex >= 0 ? firstSectionIndex : lines.length).forEach((line) => {
    if (!line) return
    if (isSectionHeading(line)) {
      currentSection = { heading: line, lines: [] }
      sections.push(currentSection)
      return
    }
    currentSection?.lines.push(line)
  })

  return (
    <article className="resume-content" aria-label="Resume content">
      <header className="resume-document-header">
        {headerLines.map((line, index) => (
          <p className={index === 0 ? 'resume-name' : index === 1 ? 'resume-title' : 'resume-contact'} key={`${line}-${index}`}>
            {index === 2 ? linkifyProfileLine(line) : linkify(line)}
          </p>
        ))}
      </header>
      {sections.map((section) => (
        <section className={`resume-section resume-section-${normalizedHeading(section.heading).toLowerCase()}`} key={section.heading}>
          <h2>{section.heading}</h2>
          <ResumeSectionBody section={section} />
        </section>
      ))}
    </article>
  )
}

function ResumeSectionBody({ section }) {
  if (normalizedHeading(section.heading) === 'SUMMARY') {
    return <p className="resume-summary-text">{section.lines.map(linkify)}</p>
  }

  if (normalizedHeading(section.heading) === 'PROJECTS') {
    return <ProjectSectionBody lines={section.lines} />
  }

  const blocks = []
  section.lines.forEach((line) => {
    if (isBullet(line)) {
      blocks.push({ type: 'bullet', lines: [cleanBullet(line)] })
      return
    }

    const previous = blocks[blocks.length - 1]
    if (previous?.type === 'bullet' && !isEntryHeading(line, section.heading)) {
      previous.lines.push(line)
      return
    }

    blocks.push({ type: isEntryHeading(line, section.heading) ? 'entry' : 'text', lines: [line] })
  })

  return (
    <div className="resume-section-body">
      {blocks.map((block, index) => {
        if (block.type === 'bullet') {
          return (
            <div className="resume-bullet" key={`bullet-${index}`}>
              <span className="resume-bullet-marker" aria-hidden="true">•</span>
              <span>{block.lines.map((line, lineIndex) => <span key={`${line}-${lineIndex}`}>{linkify(line)}{lineIndex < block.lines.length - 1 ? ' ' : ''}</span>)}</span>
            </div>
          )
        }

        if (block.type === 'entry') {
          return <div className="resume-entry" key={`entry-${index}`}><h3>{linkify(block.lines[0])}</h3></div>
        }

        return <p className="resume-detail" key={`detail-${index}`}>{linkify(block.lines[0])}</p>
      })}
    </div>
  )
}

function ProjectSectionBody({ lines }) {
  const projects = []
  let currentProject = null

  lines.forEach((line) => {
    const heading = parseProjectHeading(line)
    if (heading) {
      currentProject = { ...heading, details: [] }
      projects.push(currentProject)
      return
    }

    currentProject?.details.push(line)
  })

  return (
    <div className="resume-project-list">
      {projects.map((project, projectIndex) => {
        const details = groupProjectDetails(project.details)

        return (
          <article className="resume-project" key={`${project.name}-${projectIndex}`}>
            <header className="resume-project-header">
              <h3>{linkify(project.name)}</h3>
              <p><strong>Technologies</strong><span>{project.technologies}</span></p>
              {project.repository && (
                <p><strong>Repository</strong><a href={project.repository.startsWith('http') ? project.repository : `https://${project.repository}`} target="_blank" rel="noreferrer">{project.repository}</a></p>
              )}
            </header>
            <div className="resume-project-details">
              {details.map((detail, detailIndex) => detail.type === 'bullet' ? (
                <div className="resume-bullet" key={`${detail.lines[0]}-${detailIndex}`}>
                  <span className="resume-bullet-marker" aria-hidden="true">•</span>
                  <span>{detail.lines.map((line, lineIndex) => <span key={`${line}-${lineIndex}`}>{linkify(line)}{lineIndex < detail.lines.length - 1 ? ' ' : ''}</span>)}</span>
                </div>
              ) : (
                <p className="resume-detail" key={`${detail.lines[0]}-${detailIndex}`}>{detail.lines.map((line, lineIndex) => <span key={`${line}-${lineIndex}`}>{linkify(line)}{lineIndex < detail.lines.length - 1 ? ' ' : ''}</span>)}</p>
              ))}
            </div>
          </article>
        )
      })}
    </div>
  )
}

function ResumePage() {
  const [resumeLines, setResumeLines] = useState([])
  const [status, setStatus] = useState('loading')

  useEffect(() => {
    let isCurrent = true
    const loadingTask = getDocument({ url: '/resume.pdf' })

    loadingTask.promise
      .then(async (pdf) => {
        const lines = []

        for (let pageNumber = 1; pageNumber <= pdf.numPages; pageNumber += 1) {
          const page = await pdf.getPage(pageNumber)
          const content = await page.getTextContent()
          const pageLines = []

          content.items
            .filter((item) => 'str' in item && item.str.trim())
            .forEach((item) => {
              const y = item.transform[5]
              let line = pageLines.find((candidate) => Math.abs(candidate.y - y) <= 3)

              if (!line) {
                line = { y, items: [] }
                pageLines.push(line)
              }

              line.items.push(item)
            })

          pageLines
            .sort((first, second) => second.y - first.y)
            .forEach((line) => {
              const text = line.items
                .sort((first, second) => first.transform[4] - second.transform[4])
                .map((item) => item.str)
                .join(' ')
                .replace(/\s+/g, ' ')
                .trim()

              if (text) lines.push(text)
            })

          if (pageNumber < pdf.numPages) lines.push('')
        }

        if (isCurrent) {
          setResumeLines(lines)
          setStatus('ready')
        }
      })
      .catch(() => {
        if (isCurrent) setStatus('error')
      })

    return () => {
      isCurrent = false
      loadingTask.destroy().catch(() => {})
    }
  }, [])

  return (
    <div className="min-h-screen bg-[#fafaf8] text-[#111111]">
      <Navbar />

      <main className="mx-auto w-full max-w-6xl px-4 py-8 sm:px-6 sm:py-12">
        <div className="flex flex-wrap items-start justify-between gap-5 border-b border-[#111111] pb-6">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#666666]">Professional profile</p>
            <h1 className="mt-3 text-4xl font-black tracking-tight sm:text-5xl">Resume</h1>
            <p className="mt-3 max-w-2xl leading-relaxed text-[#444444]">
              A focused overview of my experience, engineering capabilities, and work.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <Link
              to="/"
              className="inline-flex min-h-11 items-center border border-[#111111] bg-white px-4 py-2 text-sm font-semibold uppercase tracking-[0.12em] shadow-[5px_5px_0_rgba(17,17,17,0.1)] transition hover:translate-x-[1px] hover:translate-y-[1px] hover:bg-[#f5f5ef]"
            >
              Back to Portfolio
            </Link>
            <a
              href="/resume.pdf"
              download="Ramalingam-Jayavelu-Resume.pdf"
              className="inline-flex min-h-11 items-center border border-[#111111] bg-[#111111] px-4 py-2 text-sm font-semibold uppercase tracking-[0.12em] text-white shadow-[5px_5px_0_rgba(17,17,17,0.2)] transition hover:translate-x-[1px] hover:translate-y-[1px] hover:bg-[#2a2a2a]"
            >
              Download Resume
            </a>
          </div>
        </div>

        <section className="mt-8 max-w-4xl bg-white px-5 py-7 shadow-[10px_10px_0_rgba(17,17,17,0.08)] sm:px-12 sm:py-10" aria-label="Resume document">
          {status === 'loading' && <p className="text-sm text-[#666666]">Loading resume...</p>}
          {status === 'error' && <p className="text-sm text-[#8a1c1c]">The resume could not be loaded. Please use Download Resume.</p>}
          {status === 'ready' && <ResumeDocument lines={resumeLines} />}
        </section>
      </main>
    </div>
  )
}

export default ResumePage
