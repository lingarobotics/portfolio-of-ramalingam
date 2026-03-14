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

      <footer className="border-t border-slate-800/80 bg-slate-950/95 px-4 py-4 text-center text-xs leading-relaxed text-slate-400 sm:text-sm">
        <p className="mx-auto max-w-4xl">Copyright 2026 Ramalingam Jayavelu, Founder and Builder, LGC Systems. All rights reserved.</p>
        <p className="mx-auto mt-1 max-w-4xl">Declaration: Whatever is present in this webpage is true and confirmed by myself.</p>
      </footer>
    </div>
  )
}

export default App
