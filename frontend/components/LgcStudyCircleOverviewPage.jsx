import { Link } from 'react-router-dom'
import DevelopmentEnvironmentNote from './DevelopmentEnvironmentNote'
import TechStackImageStrip from './TechStackImageStrip'

const techStackIcons = [
  { name: 'React Native', src: '/images/react.png' },
  { name: 'JavaScript', src: '/images/javascript.png' },
  { name: 'GitHub', src: '/images/github.png' },
]

const appCapabilities = [
  'Discover existing subject-based study groups',
  'Create new study groups with required schedule details',
  'Join collaborative sessions with member-count updates',
  'View detailed group information before joining',
]

const coreFeatures = [
  'View Study Groups: card-based browsing of available groups',
  'Create Study Group: subject, group name, location, and meeting time inputs',
  'Join Study Group: quick member onboarding with confirmation feedback',
  'Group Details: focused view of key group attributes and join actions',
]

const applicationScreens = [
  'Home Screen: list groups, join entry points, navigation to create and detail screens',
  'Create Group Screen: submit new study-group records',
  'Group Detail Screen: inspect metadata and join the selected group',
]

const techStack = [
  'Frontend: React Native, Expo, JavaScript',
  'Navigation: React Navigation',
  'Local Data Storage: AsyncStorage',
]

const requiredPackages = [
  'npm install @react-navigation/native',
  'npm install @react-navigation/native-stack',
  'npm install react-native-screens react-native-safe-area-context',
  'npm install @react-native-async-storage/async-storage',
]

const projectStructure = [
  'App.js',
  'components/GroupCard.js',
  'screens/HomeScreen.js',
  'screens/CreateGroupScreen.js',
  'screens/GroupDetailScreen.js',
  'storage/groupStorage.js',
]

const targetUsers = [
  'University students',
  'Students preparing for difficult subjects',
  'Learners looking for collaborative environments',
  'Students who prefer peer-based learning styles',
]

function LgcStudyCircleOverviewPage() {
  return (
    <div className="relative min-h-screen bg-slate-950 text-slate-100">
      <div className="pointer-events-none absolute inset-0 -z-0 bg-[radial-gradient(circle_at_18%_18%,rgba(56,189,248,0.16),transparent_34%),radial-gradient(circle_at_80%_0%,rgba(16,185,129,0.12),transparent_30%),radial-gradient(circle_at_50%_100%,rgba(59,130,246,0.12),transparent_40%)]" />

      <section className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6">
        <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 sm:p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-cyan-200">Experimental System Deep Dive</p>
          <h1 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">LGC StudyCircle - Product Overview</h1>
          <p className="mt-4 max-w-4xl leading-relaxed text-slate-300">
            I built LGC StudyCircle as an experimental mobile application in the LGC ecosystem to help students create and join subject-based study groups, coordinate peer sessions, and reduce academic isolation.
          </p>
          <div className="mt-4">
            <span className="inline-flex rounded-full border border-emerald-400/50 bg-emerald-500/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-emerald-200">Status: Finalized (Event Delivery)</span>
          </div>

          <TechStackImageStrip
            items={techStackIcons}
            stackReason="Tech stack choice: JavaScript is selected for rapid prototyping and lightweight mobile iteration in an event-driven build timeline."
          />

          <DevelopmentEnvironmentNote
            environment="VS Code"
            icon="/images/vscode.png"
            reason="I chose VS Code for rapid prototyping, lightweight iteration speed, and smooth workflows for JavaScript-centric or mixed non-Java development."
          />

          <div className="mt-6 rounded-xl border border-slate-800 bg-slate-950/65 p-4">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-cyan-200">Hackathon Origin</p>
            <p className="mt-3 text-sm leading-relaxed text-slate-300">
              LGC StudyCircle was originally developed during the Mobile App Development Hackathon conducted as part of SAEINDIA Student Convention 2025-26. The initial implementation was a functional prototype built within constrained timelines to solve a real student collaboration problem.
            </p>
          </div>

          <div className="mt-6 rounded-xl border border-slate-800 bg-slate-950/65 p-4">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-cyan-200">Position in LGC Ecosystem</p>
            <p className="mt-3 text-sm leading-relaxed text-slate-300">
              This project is included under the LGC ecosystem as an experimental mobile-first learning tool. While LGC Concept AI focuses on concept understanding and exam preparation, LGC StudyCircle focuses on peer-based collaborative learning and group formation.
            </p>
          </div>

          <div className="mt-6 rounded-xl border border-slate-800 bg-slate-950/65 p-4">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-cyan-200">Application Overview</p>
            <ul className="mt-3 space-y-2 text-sm text-slate-300">
              {appCapabilities.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="mt-6 rounded-xl border border-slate-800 bg-slate-950/65 p-4">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-cyan-200">Core Features</p>
            <ul className="mt-3 space-y-2 text-sm text-slate-300">
              {coreFeatures.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="mt-6 rounded-xl border border-slate-800 bg-slate-950/65 p-4">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-cyan-200">Application Screens</p>
            <ul className="mt-3 space-y-2 text-sm text-slate-300">
              {applicationScreens.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <article className="rounded-xl border border-slate-800 bg-slate-950/65 p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-cyan-200">Technology Stack</p>
              <ul className="mt-3 space-y-2 text-sm text-slate-300">
                {techStack.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>

            <article className="rounded-xl border border-slate-800 bg-slate-950/65 p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-cyan-200">Required Packages</p>
              <ul className="mt-3 space-y-2 text-sm text-slate-300">
                {requiredPackages.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          </div>

          <div className="mt-6 rounded-xl border border-slate-800 bg-slate-950/65 p-4">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-cyan-200">Project Structure</p>
            <ul className="mt-3 space-y-2 text-sm text-slate-300">
              {projectStructure.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="mt-6 rounded-xl border border-slate-800 bg-slate-950/65 p-4">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-cyan-200">Installation Guide</p>
            <ul className="mt-3 space-y-2 text-sm text-slate-300">
              <li>Step 1: npx create-expo-app lgc-studycircle</li>
              <li>Step 2: cd lgc-studycircle</li>
              <li>Step 3: install required navigation and AsyncStorage packages</li>
              <li>Step 4: npx expo start</li>
            </ul>
            <p className="mt-3 text-sm leading-relaxed text-slate-300">
              To run on device, open Expo Go and scan the QR code shown by the dev server.
            </p>
          </div>

          <div className="mt-6 rounded-xl border border-slate-800 bg-slate-950/65 p-4">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-cyan-200">Project Status</p>
            <p className="mt-3 text-sm leading-relaxed text-slate-300">
              This prototype is finalized as an event-delivered build for SAEINDIA Student Convention 2025-26. No additional feature-expansion roadmap is currently planned.
            </p>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <article className="rounded-xl border border-slate-800 bg-slate-950/65 p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-cyan-200">Target Users</p>
              <ul className="mt-3 space-y-2 text-sm text-slate-300">
                {targetUsers.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          </div>

          <div className="mt-6 rounded-xl border border-slate-800 bg-slate-950/65 p-4">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-cyan-200">Educational Impact</p>
            <p className="mt-3 text-sm leading-relaxed text-slate-300">
              Collaborative learning improves concept understanding, problem-solving ability, academic motivation, and peer support quality. LGC StudyCircle is designed to make this collaboration easier and more accessible.
            </p>
          </div>

          <div className="mt-6 rounded-xl border border-amber-500/35 bg-amber-500/8 p-4">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-amber-100">Ownership and License</p>
            <p className="mt-3 text-sm leading-relaxed text-amber-50/95">
              This project is owned by Ramalingam Jayavelu under LGC Systems. It is maintained as an experimental LGC ecosystem application.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-amber-50/95">
              License: MIT License.
            </p>
          </div>

          <div className="mt-10 flex flex-wrap gap-3 border-t border-slate-800 pt-6">
            <a
              href="https://github.com/lingarobotics/lgc-studycircle"
              target="_blank"
              rel="noreferrer"
              className="inline-flex rounded-lg border border-slate-700 bg-slate-950/70 px-4 py-2 text-sm font-medium text-slate-100 transition hover:border-cyan-400/60 hover:text-cyan-200"
            >
              View Repository
            </a>
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

export default LgcStudyCircleOverviewPage
