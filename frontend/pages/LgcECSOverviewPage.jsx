// LgcECSOverviewPage.jsx

import { Link } from 'react-router-dom'
import ProductBulletList from '../components/product/ProductBulletList'
import ProductHero from '../components/product/ProductHero'
import ProductInfoCard from '../components/product/ProductInfoCard'
import ProductOwnership from '../components/product/ProductOwnership'
import ProductRoadmap from '../components/product/ProductRoadmap'
import ProductTechList from '../components/product/ProductTechList'

const techStackIcons = [
  { name: 'React', src: '/images/react.webp' },
  { name: 'Node.js', src: '/images/node.webp' },
  { name: 'JavaScript', src: '/images/javascript.webp' },
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
        <div>
          <ProductHero
            label="System Design Concept"
            title="LGC Emergency Corridor System (LGC-ECS)"
            description="I designed LGC-ECS as a real-world emergency response system focused on reducing ambulance delay by creating a dynamic, self-clearing traffic corridor using predictive intelligence and targeted awareness."
            secondaryDescription="This is not an app-first solution. It is a system design that combines software, infrastructure, and human behavior."
            status="Status: System Design Phase"
            techStackItems={techStackIcons}
            stackReason="Tech stack is planned for real-time processing, simulation, and scalable system deployment."
            environment="VS Code"
            environmentIcon="/images/vscode.webp"
            environmentReason="Chosen for rapid prototyping, system design iteration, and frontend-backend integration workflows."
          />

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {visionSections.map((item) => (
              <ProductInfoCard key={item.title} title={item.title} description={item.detail} />
            ))}
          </div>

          <ProductBulletList title="System Flow Model" items={systemFlow} />

          <ProductBulletList title="System Modes" items={systemModes} />

          <ProductBulletList
            title="Core System Thinking"
            items={['Proactive clearing instead of reactive response', 'Short-range prediction over full-route dependency', 'Targeted alerts instead of mass notification', 'Continuous updates instead of one-time alerts', 'Human behavior guidance instead of assumption']}
          />

          <ProductTechList title="Planned Tech Stack" items={techStackImplemented} />

          <ProductRoadmap title="Planned Enhancements" items={plannedEnhancements} />

          <ProductOwnership
            title="Ownership and License"
            paragraphs={[
              'This system is designed and conceptualized by Ramalingam Jayavelu under LGC Systems.',
              'LGC-ECS represents a long-term vision toward real-world deployment in emergency response infrastructure.',
              'License: Conceptual System Design - All Rights Reserved.',
            ]}
          />

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
