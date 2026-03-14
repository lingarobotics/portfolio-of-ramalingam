import { useEffect, useRef, useState } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import AiLearningProofPage from './components/AiLearningProofPage'
import EventsConductedPage from './components/EventsConductedPage'
import GitHubWorkflowProofPage from './components/GitHubWorkflowProofPage'
import LgcConceptAiProofPage from './components/LgcConceptAiProofPage'
import MeetupsPage from './components/MeetupsPage'
import UiAnswerEvolutionPage from './components/UiAnswerEvolutionPage'
import YouTubeLearningPage from './components/YouTubeLearningPage'
import Home from './pages/Home'

function App() {
  const audioRef = useRef(null)
  const [isPlaying, setIsPlaying] = useState(false)

  useEffect(() => {
    const audio = new Audio('/audio/backgroundbgm.mp3')
    audio.loop = true
    audio.volume = 0.18
    audio.preload = 'auto'
    audioRef.current = audio

    audio.play()
      .then(() => {
        setIsPlaying(true)
      })
      .catch(() => {
        setIsPlaying(false)
      })

    return () => {
      audio.pause()
      audio.src = ''
      audioRef.current = null
    }
  }, [])

  const toggleMusic = async () => {
    const audio = audioRef.current

    if (!audio) {
      return
    }

    if (audio.paused) {
      try {
        await audio.play()
        setIsPlaying(true)
      } catch {
        setIsPlaying(false)
      }

      return
    }

    audio.pause()
    setIsPlaying(false)
  }

  return (
    <div className="flex min-h-screen flex-col bg-slate-950">
      <div className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ai-learning-proof" element={<AiLearningProofPage />} />
          <Route path="/events-conducted" element={<EventsConductedPage />} />
          <Route path="/github-workflow-proof" element={<GitHubWorkflowProofPage />} />
          <Route path="/lgc-concept-ai-proof" element={<LgcConceptAiProofPage />} />
          <Route path="/ui-answer-evolution" element={<UiAnswerEvolutionPage />} />
          <Route path="/youtube-learning" element={<YouTubeLearningPage />} />
          <Route path="/meetups" element={<MeetupsPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>

      <button
        type="button"
        onClick={toggleMusic}
        className="fixed right-4 z-[60] min-h-[44px] rounded-full border border-cyan-400/50 bg-slate-950/90 px-4 py-2.5 text-xs font-semibold uppercase tracking-[0.12em] text-cyan-200 shadow-[0_0_24px_rgba(34,211,238,0.2)] transition hover:border-cyan-300 hover:text-cyan-100 bottom-[calc(env(safe-area-inset-bottom)+12px)]"
        aria-label={isPlaying ? 'Turn off background music' : 'Turn on background music'}
      >
        Music: {isPlaying ? 'On' : 'Off'}
      </button>

      <footer className="border-t border-slate-800/80 bg-slate-950/95 px-4 py-4 text-center text-xs leading-relaxed text-slate-400 sm:text-sm">
        <p className="mx-auto max-w-4xl">Copyright 2026 Ramalingam Jayavelu, Founder and Builder, LGC Systems. All rights reserved.</p>
        <p className="mx-auto mt-1 max-w-4xl">Declaration: Whatever is present in this webpage is true and confirmed by myself.</p>
      </footer>
    </div>
  )
}

export default App
