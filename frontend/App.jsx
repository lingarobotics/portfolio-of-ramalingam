import { useEffect, useRef, useState } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import AiLearningProofPage from './components/AiLearningProofPage'
import AcademicPerformanceSummaryPage from './components/AcademicPerformanceSummaryPage'
import EventsConductedPage from './components/EventsConductedPage'
import GitHubWorkflowProofPage from './components/GitHubWorkflowProofPage'
import LgcConceptAiProofPage from './components/LgcConceptAiProofPage'
import MeetupsPage from './components/MeetupsPage'
import RecruiterQuickOverviewPage from './components/RecruiterQuickOverviewPage'
import UiAnswerEvolutionPage from './components/UiAnswerEvolutionPage'
import YouTubeLearningPage from './components/YouTubeLearningPage'
import Home from './pages/Home'

function App() {
  const audioRef = useRef(null)
  const musicEnabledRef = useRef(true)
  const [isMusicEnabled, setIsMusicEnabled] = useState(true)
  const [isPlaying, setIsPlaying] = useState(false)

  useEffect(() => {
    const audio = new Audio('/audio/backgroundbgm.mp3')
    audio.loop = true
    audio.volume = 0.18
    audio.preload = 'auto'
    audioRef.current = audio

    const tryPlay = async () => {
      if (!musicEnabledRef.current) {
        return
      }

      try {
        await audio.play()
        setIsPlaying(true)
      } catch {
        setIsPlaying(false)
      }
    }

    const unlockPlayback = () => {
      if (musicEnabledRef.current && audio.paused) {
        void tryPlay()
      }
    }

    void tryPlay()

    window.addEventListener('pointerdown', unlockPlayback)
    window.addEventListener('touchstart', unlockPlayback)
    window.addEventListener('keydown', unlockPlayback)

    return () => {
      window.removeEventListener('pointerdown', unlockPlayback)
      window.removeEventListener('touchstart', unlockPlayback)
      window.removeEventListener('keydown', unlockPlayback)
      audio.pause()
      audio.src = ''
      audioRef.current = null
    }
  }, [])

  useEffect(() => {
    musicEnabledRef.current = isMusicEnabled

    const audio = audioRef.current
    if (!audio) {
      return
    }

    if (!isMusicEnabled) {
      audio.pause()
      setIsPlaying(false)
      return
    }

    audio.play()
      .then(() => {
        setIsPlaying(true)
      })
      .catch(() => {
        setIsPlaying(false)
      })
  }, [isMusicEnabled])

  const toggleMusic = () => {
    setIsMusicEnabled((current) => !current)
  }

  return (
    <div className="flex min-h-screen flex-col bg-slate-950">
      <div className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/academic-performance-summary" element={<AcademicPerformanceSummaryPage />} />
          <Route path="/ai-learning-proof" element={<AiLearningProofPage />} />
          <Route path="/events-conducted" element={<EventsConductedPage />} />
          <Route path="/github-workflow-proof" element={<GitHubWorkflowProofPage />} />
          <Route path="/lgc-concept-ai-proof" element={<LgcConceptAiProofPage />} />
          <Route path="/ui-answer-evolution" element={<UiAnswerEvolutionPage />} />
          <Route path="/youtube-learning" element={<YouTubeLearningPage />} />
          <Route path="/meetups" element={<MeetupsPage />} />
          <Route path="/quick-overview" element={<RecruiterQuickOverviewPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>

      <button
        type="button"
        onClick={toggleMusic}
        className="fixed right-4 z-[60] min-h-[44px] rounded-full border border-cyan-400/50 bg-slate-950/90 px-4 py-2.5 text-xs font-semibold uppercase tracking-[0.12em] text-cyan-200 shadow-[0_0_24px_rgba(34,211,238,0.2)] transition hover:border-cyan-300 hover:text-cyan-100 bottom-[calc(env(safe-area-inset-bottom)+12px)]"
        aria-label={isMusicEnabled ? 'Turn off background music' : 'Turn on background music'}
      >
        Music: {isMusicEnabled ? 'On' : 'Off'}
      </button>

      <footer className="border-t border-slate-800/80 bg-slate-950/95 px-4 py-4 text-center text-xs leading-relaxed text-slate-400 sm:text-sm">
        <p className="mx-auto max-w-4xl">Copyright 2026 Ramalingam Jayavelu, Founder and Builder, LGC Systems. All rights reserved.</p>
        <p className="mx-auto mt-1 max-w-4xl">Declaration: Whatever is present in this webpage is true and confirmed by myself.</p>
      </footer>
    </div>
  )
}

export default App
