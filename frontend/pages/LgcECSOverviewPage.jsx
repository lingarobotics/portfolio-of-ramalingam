// LgcECSOverviewPage.jsx

import { Link } from 'react-router-dom'
import DevelopmentEnvironmentNote from '../components/DevelopmentEnvironmentNote'
import TechStackImageStrip from '../components/TechStackImageStrip'

const techStackIcons = [
  { name: 'React', src: '/images/react.png' },
  { name: 'Node.js', src: '/images/node.png' },
  { name: 'JavaScript', src: '/images/javascript.png' },
]

const visionSections = [
  {
    title: 'System Vision',
    detail:
      'LGC-ECS is designed to ensure ambulances move with minimal interruption by enabling traffic to clear proactively before arrival, rather than reacting late to sirens.',
  },
  {
    title: 'Real-World Problem Targeted',
    detail:
      'Current ambulance movement is reactive, dependent on human awareness and inconsistent behavior, leading to delays caused by confusion, late detection, and traffic congestion.',
  },
  {
    title: 'Core Outcome',
    detail:
      'The system aims to reduce ambulance delay, minimize stop frequency, and improve emergency response efficiency by guiding traffic behavior through early awareness and precise instruction.',
  },
]

const systemFlow = [
  'Ambulance enters emergency mode and starts GPS tracking',
  'Backend predicts short-range forward path dynamically',
  'Relevant users on the same route are identified',
  'Layered alerts are sent based on proximity',
  'Traffic adjusts before ambulance arrival',
  'Corridor continuously updates as ambulance moves',
]

const systemModes = [
  'Ambulance Activation Mode: emergency trigger initiates system tracking',
  'Rolling Prediction Mode: predicts short-range path (500m–2km ahead)',
  'Targeted Alert Mode: notifies only relevant vehicles in path',
  'Dynamic Corridor Mode: continuously updates clearing path in real-time',
]

const techStackImplemented = [
  'Frontend (Planned): React-based visualization dashboard for simulation and monitoring',
  'Backend (Planned): Node.js / Java-based system for real-time processing',
  'Core Logic: GPS tracking + rolling route prediction + filtering algorithms',
  'Communication Layer: Push notifications + API integration with mapping platforms',
  'Future Integration: Smart traffic signals + IoT-based infrastructure control',
]

const plannedEnhancements = [
  'AI-based traffic flow prediction for smarter corridor formation',
  'Automatic ambulance detection (no manual trigger dependency)',
  'Integration with smart city traffic infrastructure',
  'Vehicle-to-Vehicle (V2V) communication for direct alerts',
  'Cross-district communication for uninterrupted system flow',
]

function LgcECSOverviewPage() {
  return (
    <div className="relative min-h-screen bg-slate-950 text-slate-100">
      <div className="pointer-events-none absolute inset-0 -z-0 bg-[radial-gradient(circle_at_18%_18%,rgba(56,189,248,0.16),transparent_34%),radial-gradient(circle_at_80%_0%,rgba(16,185,129,0.12),transparent_30%),radial-gradient(circle_at_50%_100%,rgba(59,130,246,0.12),transparent_40%)]" />

      <section className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6">
        <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 sm:p-8">

          {/* Header */}
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-cyan-200">
            System Design Concept
          </p>

          <h1 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">
            LGC Emergency Corridor System (LGC-ECS)
          </h1>

          <p className="mt-4 max-w-4xl leading-relaxed text-slate-300">
            I designed LGC-ECS as a real-world emergency response system focused on reducing ambulance delay by creating a dynamic, self-clearing traffic corridor using predictive intelligence and targeted awareness.
          </p>

          <p className="mt-3 max-w-4xl text-sm text-slate-400">
            This is not an app-first solution. It is a system design that combines software, infrastructure, and human behavior.
          </p>

          <div className="mt-4">
            <span className="inline-flex rounded-full border border-cyan-400/50 bg-cyan-500/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-cyan-200">
              Status: System Design Phase
            </span>
          </div>

          {/* Tech Stack */}
          <TechStackImageStrip
            items={techStackIcons}
            stackReason="Tech stack is planned for real-time processing, simulation, and scalable system deployment."
          />

          <DevelopmentEnvironmentNote
            environment="VS Code"
            icon="/images/vscode.png"
            reason="Chosen for rapid prototyping, system design iteration, and frontend-backend integration workflows."
          />

          {/* Vision Sections */}
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {visionSections.map((item) => (
              <article key={item.title} className="rounded-xl border border-slate-800 bg-slate-950/65 p-4">
                <h2 className="text-sm font-semibold uppercase tracking-[0.12em] text-cyan-200">
                  {item.title}
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-slate-300">
                  {item.detail}
                </p>
              </article>
            ))}
          </div>

          {/* System Flow */}
          <div className="mt-6 rounded-xl border border-slate-800 bg-slate-950/65 p-4">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-cyan-200">
              System Flow Model
            </p>
            <ul className="mt-3 space-y-2 text-sm text-slate-300">
              {systemFlow.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ul>
          </div>

          {/* System Modes */}
          <div className="mt-6 rounded-xl border border-slate-800 bg-slate-950/65 p-4">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-cyan-200">
              System Modes
            </p>
            <ul className="mt-3 space-y-2 text-sm text-slate-300">
              {systemModes.map((mode) => (
                <li key={mode}>{mode}</li>
              ))}
            </ul>
          </div>

          {/* Core Thinking */}
          <div className="mt-6 rounded-xl border border-slate-800 bg-slate-950/65 p-4">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-cyan-200">
              Core System Thinking
            </p>
            <ul className="mt-3 space-y-2 text-sm text-slate-300">
              <li>Proactive clearing instead of reactive response</li>
              <li>Short-range prediction over full-route dependency</li>
              <li>Targeted alerts instead of mass notification</li>
              <li>Continuous updates instead of one-time alerts</li>
              <li>Human behavior guidance instead of assumption</li>
            </ul>
          </div>

          {/* Tech Stack */}
          <div className="mt-6 rounded-xl border border-slate-800 bg-slate-950/65 p-4">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-cyan-200">
              Planned Tech Stack
            </p>
            <ul className="mt-3 space-y-2 text-sm text-slate-300">
              {techStackImplemented.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          {/* Enhancements */}
          <div className="mt-6 rounded-xl border border-slate-800 bg-slate-950/65 p-4">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-cyan-200">
              Planned Enhancements
            </p>
            <ul className="mt-3 space-y-2 text-sm text-slate-300">
              {plannedEnhancements.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          {/* Ownership */}
          <div className="mt-6 rounded-xl border border-amber-500/35 bg-amber-500/8 p-4">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-amber-100">
              Ownership and License
            </p>
            <p className="mt-3 text-sm text-amber-50/95">
              This system is designed and conceptualized by Ramalingam Jayavelu under LGC Systems.
            </p>
            <p className="mt-3 text-sm text-amber-50/95">
              LGC-ECS represents a long-term vision toward real-world deployment in emergency response infrastructure.
            </p>
            <p className="mt-3 text-sm text-amber-50/95">
              License: Conceptual System Design - All Rights Reserved.
            </p>
          </div>

          {/* CTA */}
          <div className="mt-10 flex flex-wrap gap-3 border-t border-slate-800 pt-6">
            <a
              href="#"
              className="inline-flex rounded-lg border border-slate-700 bg-slate-950/70 px-4 py-2 text-sm font-medium text-slate-100 transition hover:border-cyan-400/60 hover:text-cyan-200"
            >
              View System Design Document
            </a>

            <Link
              to="/lgc-ecs-simulation"
              className="inline-flex rounded-lg border border-emerald-400/50 bg-emerald-500/10 px-4 py-2 text-sm font-medium text-emerald-100 transition hover:border-emerald-300 hover:bg-emerald-500/20"
            >
              View Simulation (Planned)
            </Link>

            <Link
              to="/"
              className="inline-flex rounded-lg border border-slate-700 bg-slate-950/70 px-4 py-2 text-sm font-medium text-slate-100 transition hover:border-cyan-400/60 hover:text-cyan-200"
            >
              Back to Portfolio
            </Link>
          </div>

        </div>
      </section>
    </div>
  )
}

export default LgcECSOverviewPage