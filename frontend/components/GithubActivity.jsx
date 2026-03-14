import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { Link } from 'react-router-dom'

const USERNAME = import.meta.env.VITE_GITHUB_USERNAME
const CONTRIBUTIONS_ENDPOINT = import.meta.env.VITE_GITHUB_CONTRIBUTIONS_ENDPOINT
const POLL_INTERVAL_MS = Number.parseInt(import.meta.env.VITE_GITHUB_POLL_INTERVAL_MS || '', 10)

const HAS_VALID_CONFIG =
  Boolean(USERNAME) &&
  Boolean(CONTRIBUTIONS_ENDPOINT) &&
  Number.isFinite(POLL_INTERVAL_MS) &&
  POLL_INTERVAL_MS > 0

function getCellClass(count) {
  if (count === 0) return 'bg-slate-800 border-slate-700'
  if (count <= 2) return 'bg-cyan-900/70 border-cyan-800'
  if (count <= 5) return 'bg-cyan-700/80 border-cyan-600/70'
  if (count <= 9) return 'bg-cyan-500/80 border-cyan-400/80'
  return 'bg-cyan-300 border-cyan-200'
}

function GithubActivity() {
  const chartScrollerRef = useRef(null)
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [refreshing, setRefreshing] = useState(false)
  const [error, setError] = useState('')

  const fetchContributions = useCallback(async (isRefresh = false) => {
    if (!HAS_VALID_CONFIG) {
      setLoading(false)
      setError('Missing frontend GitHub env config in .env.local')
      return
    }

    try {
      if (isRefresh) {
        setRefreshing(true)
      } else {
        setLoading(true)
      }

      setError('')
      const response = await fetch(`${CONTRIBUTIONS_ENDPOINT}?username=${encodeURIComponent(USERNAME)}`)
      const payload = await response.json()

      if (!response.ok) {
        throw new Error(payload?.error || 'Failed to load contribution data')
      }

      setData(payload)
    } catch (requestError) {
      setError(requestError instanceof Error ? requestError.message : 'Unable to fetch contribution data')
    } finally {
      setLoading(false)
      setRefreshing(false)
    }
  }, [])

  useEffect(() => {
    fetchContributions()

    const timer = setInterval(() => {
      fetchContributions(true)
    }, POLL_INTERVAL_MS)

    return () => clearInterval(timer)
  }, [fetchContributions])

  useEffect(() => {
    if (loading || error || !data?.weeks?.length || !chartScrollerRef.current) {
      return
    }

    requestAnimationFrame(() => {
      const scroller = chartScrollerRef.current
      scroller.scrollLeft = scroller.scrollWidth
    })
  }, [loading, error, data])

  const dayCells = useMemo(() => {
    if (!data?.weeks) return []

    return data.weeks.map((week, index) => (
      <div key={`week-${index}`} className="grid grid-rows-7 gap-1">
        {week.contributionDays.map((day) => (
          <div
            key={day.date}
            title={`${day.date}: ${day.contributionCount} contributions`}
            className={`h-3 w-3 rounded-[3px] border ${getCellClass(day.contributionCount)}`}
          />
        ))}
      </div>
    ))
  }, [data])

  return (
    <section id="github" className="section-atmosphere mx-auto w-full max-w-5xl scroll-mt-20 rounded-3xl px-4 py-16 text-center sm:px-6">
      <h2 className="section-content motion-rise text-3xl font-semibold tracking-tight text-slate-100 sm:text-4xl">GitHub Activity</h2>
      <p className="section-content mx-auto mt-5 max-w-2xl leading-relaxed text-slate-300 motion-rise motion-rise-delay-1">
        I actively build and maintain my systems and experiments in the LGC ecosystem through GitHub.
      </p>
      <a
        href="https://github.com/lingarobotics"
        target="_blank"
        rel="noreferrer"
        className="section-content mt-7 inline-flex rounded-xl border border-cyan-300/60 bg-cyan-500/15 px-6 py-3 text-sm font-semibold text-cyan-100 shadow-[0_0_28px_rgba(34,211,238,0.2)] transition motion-rise motion-rise-delay-2 hover:border-cyan-200 hover:bg-cyan-400/20 hover:shadow-[0_0_32px_rgba(34,211,238,0.3)]"
      >
        Explore GitHub Profile
      </a>

      <div className="section-content mt-4 motion-rise motion-rise-delay-2">
        <Link
          to="/github-workflow-proof"
          className="inline-flex rounded-xl border border-sky-300/60 bg-sky-500/15 px-5 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-sky-100 transition hover:border-sky-200 hover:bg-sky-400/20"
        >
          Open GitHub Workflow Proof
        </Link>
      </div>

      <div className="section-content mt-8 rounded-2xl border border-slate-800 bg-slate-900/70 p-5 motion-rise motion-rise-delay-3 sm:p-7">
        <div className="mb-4 flex flex-wrap items-center justify-between gap-3 text-left">
          <div>
            <p className="text-sm font-semibold text-slate-100">
              {data?.totalContributions ?? 0} contributions in the last year
            </p>
            <p className="text-xs text-slate-400">
              Last updated:{' '}
              {data?.fetchedAt ? new Date(data.fetchedAt).toLocaleString() : 'Not fetched yet'}
            </p>
          </div>

          <button
            type="button"
            onClick={() => fetchContributions(true)}
            disabled={refreshing}
            className="rounded-lg border border-slate-700 bg-slate-950/80 px-3 py-2 text-xs font-semibold text-slate-200 transition hover:border-cyan-400/60 hover:text-cyan-200 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {refreshing ? 'Refreshing...' : 'Refresh now'}
          </button>
        </div>

        {loading ? (
          <div className="rounded-xl border border-dashed border-slate-700 p-6 text-sm text-slate-400">
            Loading contribution chart...
          </div>
        ) : null}

        {!loading && error ? (
          <div className="rounded-xl border border-rose-500/40 bg-rose-950/20 p-6 text-sm text-rose-200">
            {error}
          </div>
        ) : null}

        {!loading && !error ? (
          <>
            <div ref={chartScrollerRef} className="overflow-x-auto">
              <div className="inline-flex gap-1 rounded-xl border border-slate-800 bg-slate-950/40 p-3">
                {dayCells}
              </div>
            </div>

            <div className="mt-4 flex items-center justify-end gap-2 text-xs text-slate-400">
              <span>Less</span>
              <span className="h-3 w-3 rounded-[3px] border border-slate-700 bg-slate-800" />
              <span className="h-3 w-3 rounded-[3px] border border-cyan-800 bg-cyan-900/70" />
              <span className="h-3 w-3 rounded-[3px] border border-cyan-600/70 bg-cyan-700/80" />
              <span className="h-3 w-3 rounded-[3px] border border-cyan-400/80 bg-cyan-500/80" />
              <span className="h-3 w-3 rounded-[3px] border border-cyan-200 bg-cyan-300" />
              <span>More</span>
            </div>
          </>
        ) : null}
      </div>
    </section>
  )
}

export default GithubActivity
