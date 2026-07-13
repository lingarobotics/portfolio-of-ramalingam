import { useEffect, useMemo, useRef, useState } from 'react'

const folderMap = {
  hero: { label: 'Hero', target: '#hero', segment: 'Hero' },
  home: { label: 'Hero', target: '#hero', segment: 'Hero' },
  start: { label: 'Hero', target: '#hero', segment: 'Hero' },
  about: { label: 'About', target: '#about', segment: 'About' },
  thoughts: { label: 'Thoughts', target: '#engineering-thoughts', segment: 'Thoughts' },
  blog: { label: 'Blogs', target: '#blogs', segment: 'Blogs' },
  blogs: { label: 'Blogs', target: '#blogs', segment: 'Blogs' },
  learning: { label: 'Learning', target: '#learning-sources', segment: 'Learning' },
  projects: { label: 'Projects', target: '#products', segment: 'Projects' },
  project: { label: 'Projects', target: '#products', segment: 'Projects' },
  proj: { label: 'Projects', target: '#products', segment: 'Projects' },
  skills: { label: 'Skills', target: '#skills', segment: 'Skills' },
  skill: { label: 'Skills', target: '#skills', segment: 'Skills' },
  youtube: { label: 'YouTube', target: '/youtube-learning', route: true },
  yt: { label: 'YouTube', target: '/youtube-learning', route: true },
  events: { label: 'Events', target: '/events-conducted', route: true },
  event: { label: 'Events', target: '/events-conducted', route: true },
  proofs: { label: 'Proofs', target: '/github-workflow-proof', route: true },
  proof: { label: 'Proofs', target: '/github-workflow-proof', route: true },
  contact: { label: 'Contact', target: '#lets-connect', segment: 'Contact' },
  mail: { label: 'Contact', target: '#lets-connect', segment: 'Contact' },
  email: { label: 'Contact', target: '#lets-connect', segment: 'Contact' },
}

const availableNavs = [
  'hero',
  'about',
  'thoughts',
  'blogs',
  'learning',
  'projects',
  'skills',
  'youtube',
  'events',
  'proofs',
  'contact',
]

const homePath = 'System: S:Portfolio/RamalingamJayavelu'

function TerminalLine({ isOpen, onClose }) {
  const [value, setValue] = useState('')
  const [currentSegment, setCurrentSegment] = useState('hero')
  const [statusMessage, setStatusMessage] = useState('Type cd projects, cd about, or cd ..')
  const inputRef = useRef(null)

  const suggestions = useMemo(
    () => Object.keys(folderMap).filter((key) => key.startsWith(value.trim().toLowerCase())),
    [value],
  )

  useEffect(() => {
    if (!isOpen) {
      return undefined
    }

    const timer = window.setTimeout(() => {
      inputRef.current?.focus()
    }, 0)

    return () => window.clearTimeout(timer)
  }, [isOpen])

  useEffect(() => {
    if (!isOpen) {
      return undefined
    }

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        onClose()
      }

      if (event.ctrlKey && event.key.toLowerCase() === 'l') {
        event.preventDefault()
      }
    }

    window.addEventListener('keydown', handleKeyDown)

    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isOpen, onClose])

  if (!isOpen) {
    return null
  }

  const resolveFolder = (folderName) => {
    const normalized = folderName.trim().toLowerCase()

    return folderMap[normalized] || null
  }

  const navigateHome = () => {
    setCurrentSegment('hero')
    setValue('')
    setStatusMessage('Returned to hero')

    const target = document.querySelector('#hero')
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  const navigateFolder = (folder) => {
    const nextSegment = (folder.segment || folder.label || '').toLowerCase()

    setCurrentSegment(nextSegment)
    setValue('')
    setStatusMessage(`Changed directory to ${nextSegment}`)

    if (folder.route) {
      setStatusMessage(`Opening ${nextSegment}`)
      window.location.assign(folder.target)
      return
    }

    const target = document.querySelector(folder.target)
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  const executeCommand = (commandText) => {
    const normalizedCommand = commandText.trim().replace(/\s+/g, ' ')

    if (!normalizedCommand) {
      return
    }

    const [command, ...args] = normalizedCommand.split(' ')
    const lowerCommand = command.toLowerCase()

    if (lowerCommand !== 'cd') {
      return
    }

    const folderName = args.join(' ')

    if (folderName.trim() === '..') {
      navigateHome()
      return
    }

    const folder = resolveFolder(folderName)

    if (!folder) {
      setStatusMessage(`Folder not found: ${folderName || '(empty)'}`)
      return
    }

    navigateFolder(folder)
  }

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault()
      executeCommand(value)
    }

    if (event.key === 'Tab' && suggestions.length === 1) {
      event.preventDefault()
      setValue(`cd ${suggestions[0]}`)
    }
  }

  return (
    <div className="w-full border-t border-slate-800/80 bg-slate-950/90 px-4 py-3 sm:px-6">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-3">
        <div className="flex items-center gap-2 overflow-x-auto whitespace-nowrap text-[11px] uppercase tracking-[0.18em] text-cyan-200/85 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
          <span className="shrink-0 text-cyan-300/90">Available navs:</span>
          {availableNavs.map((nav) => (
            <span
              key={nav}
              className="shrink-0 rounded-full border border-slate-800/80 bg-slate-950/80 px-2.5 py-1 text-slate-300 transition hover:border-cyan-400/50 hover:text-cyan-100"
            >
              {nav}
            </span>
          ))}
        </div>

        <div className="flex flex-col gap-2 overflow-hidden rounded-2xl border border-cyan-400/20 bg-slate-950/80 px-3 py-3 shadow-[0_0_24px_rgba(34,211,238,0.08)] sm:flex-row sm:items-center sm:gap-3 sm:py-2">
          <span className="shrink-0 text-[11px] font-semibold tracking-[0.12em] text-cyan-300/90 sm:text-xs normal-case">
            {`${homePath}>${currentSegment}>`}
          </span>

          <div className="flex w-full items-center gap-2 sm:min-w-0">
            <span aria-hidden="true" className="shrink-0 text-cyan-300">$</span>

            <input
              ref={inputRef}
              value={value}
              onChange={(event) => setValue(event.target.value)}
              onKeyDown={handleKeyDown}
              aria-label="Terminal navigation input"
              placeholder="cd about"
              autoComplete="off"
              spellCheck={false}
              className="min-w-0 flex-1 bg-transparent font-mono text-sm text-cyan-100 outline-none placeholder:text-slate-600"
            />

            <button
              type="button"
              className="shrink-0 rounded-full border border-slate-700 px-3 py-1 text-[11px] uppercase tracking-[0.16em] text-slate-300 transition hover:border-cyan-400/60 hover:text-cyan-100"
              onClick={onClose}
            >
              Close
            </button>
          </div>
        </div>

        <div className="rounded-2xl border border-slate-800/80 bg-slate-950/75 px-3 py-2 text-xs text-slate-300 sm:px-4">
          <span className="text-cyan-200">Status:</span> {statusMessage}
        </div>
      </div>
    </div>
  )
}

export default TerminalLine
