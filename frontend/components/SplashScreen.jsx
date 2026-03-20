import { useEffect, useState } from 'react'

function SplashScreen({ isVisible, isFadingOut }) {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    if (!isVisible) {
      setProgress(0)
      return
    }

    setProgress(0)

    const steps = [
      { value: 8, delay: 180 },
      { value: 19, delay: 420 },
      { value: 34, delay: 760 },
      { value: 52, delay: 1120 },
      { value: 71, delay: 1560 },
      { value: 88, delay: 2050 },
      { value: 97, delay: 2460 },
      { value: 100, delay: 2720 },
    ]

    const timers = steps.map(({ value, delay }) =>
      window.setTimeout(() => {
        setProgress(value)
      }, delay)
    )

    return () => {
      timers.forEach((timer) => window.clearTimeout(timer))
    }
  }, [isVisible])

  return (
    <div
      className={`fixed inset-0 z-[200] flex items-center justify-center bg-slate-950 transition-opacity duration-700 ${
        isVisible ? 'opacity-100' : 'pointer-events-none opacity-0'
      }`}
      aria-hidden={!isVisible}
    >
      <div
        className={`mx-auto flex w-full max-w-[min(90vw,520px)] flex-col items-center text-center transition-all duration-700 ${
          isFadingOut ? 'translate-y-2 scale-95 opacity-0' : 'translate-y-0 scale-100 opacity-100'
        }`}
      >
        <div className="relative mb-5">
          <div className="absolute inset-0 rounded-full bg-cyan-400/20 blur-2xl animate-pulse" />
          <img
            src="/images/ramalingam-splash.png"
            alt="Ramalingam Jayavelu"
            className="relative h-32 w-32 rounded-full border border-cyan-400/40 object-cover object-top shadow-[0_0_30px_rgba(34,211,238,0.25)] sm:h-52 sm:w-52"
          />
        </div>

        <p
          className={`max-w-2xl px-5 text-sm leading-snug text-slate-200 transition-all duration-700 delay-150 sm:px-4 sm:text-2xl ${
            isFadingOut ? 'translate-y-3 opacity-0' : 'translate-y-0 opacity-100'
          }`}
        >
          Hi, I’m <span className="text-cyan-300">Ramalingam Jayavelu</span>.
          <br />
          At <span className="text-cyan-300">LGC Systems</span>, I turn ideas into products.
          <br />
          Take a look around.
        </p>

        <div
          className={`mt-6 w-full max-w-[260px] transition-all duration-700 ${
            isFadingOut ? 'translate-y-2 opacity-0' : 'translate-y-0 opacity-100'
          }`}
        >
          <div className="mb-2 flex items-center justify-between text-[11px] uppercase tracking-[0.18em] text-cyan-200/80 sm:text-xs">
            <span>Entering Builder World</span>
            <span>{progress}%</span>
          </div>

          <div className="h-2 overflow-hidden rounded-full bg-slate-800/90 ring-1 ring-cyan-400/20">
            <div
              className="h-full rounded-full bg-cyan-300 shadow-[0_0_12px_rgba(34,211,238,0.45)] transition-[width] duration-300 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default SplashScreen