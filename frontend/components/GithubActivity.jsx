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
  if (count === 0) return 'border border-[#111111]/30 bg-[#fafaf8]'
  if (count <= 2) return 'border border-[#111111]/40 bg-[#e8e8e0]'
  if (count <= 5) return 'border border-[#111111]/50 bg-[#d0d0c8]'
  if (count <= 9) return 'border border-[#111111]/70 bg-[#b8b8b0]'
  return 'border border-[#111111] bg-[#111111]'
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
      <h2 className="section-content motion-rise text-3xl font-semibold tracking-tight text-[#111111] sm:text-4xl">GitHub Activity</h2>
      <p className="section-content mx-auto mt-5 max-w-2xl leading-relaxed text-[#444444] motion-rise motion-rise-delay-1">
        I actively build and maintain my systems and experiments in the LGC ecosystem through GitHub.
      </p>
      <a
        href="https://github.com/lingarobotics"
        target="_blank"
        rel="noreferrer"
        className="section-content mt-7 inline-flex rounded-none border border-[#111111] bg-[#111111] px-6 py-3 text-sm font-semibold text-white shadow-[6px_6px_0_rgba(17,17,17,0.14)] transition motion-rise motion-rise-delay-2 hover:translate-x-[1px] hover:translate-y-[1px] hover:bg-[#2a2a2a]"
      >
        Explore GitHub Profile
      </a>

      <div className="section-content mt-4 motion-rise motion-rise-delay-2">
        <Link
          to="/github-workflow-proof"
          className="inline-flex rounded-none border border-[#111111] bg-white px-5 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-[#111111] shadow-[4px_4px_0_rgba(17,17,17,0.08)] transition hover:translate-x-[1px] hover:translate-y-[1px] hover:bg-[#f5f5ef]"
        >
          Open GitHub Workflow Proof
        </Link>
      </div>

      <div className="section-content mt-8 rounded-2xl border border-slate-800 bg-slate-900/70 p-5 motion-rise motion-rise-delay-3 sm:p-7">
        <div className="mb-4 flex flex-wrap items-center justify-between gap-3 text-left">
          <div>
            <p className="text-sm font-semibold text-[#111111]">
              {data?.totalContributions ?? 0} contributions in the last year
            </p>
            <p className="text-xs text-[#666666]">
              Last updated:{' '}
              {data?.fetchedAt ? new Date(data.fetchedAt).toLocaleString() : 'Not fetched yet'}
            </p>
          </div>

          <button
            type="button"
            onClick={() => fetchContributions(true)}
            disabled={refreshing}
            className="rounded-none border border-[#111111] bg-white px-3 py-2 text-xs font-semibold text-[#111111] shadow-[4px_4px_0_rgba(17,17,17,0.08)] transition hover:translate-x-[1px] hover:translate-y-[1px] hover:bg-[#f5f5ef] disabled:cursor-not-allowed disabled:opacity-60"
          >
            {refreshing ? 'Refreshing...' : 'Refresh now'}
          </button>
        </div>

        {loading ? (
          <div className="rounded-none border border-dashed border-[#111111] bg-[#f5f5ef] p-6 text-sm text-[#666666]">
            Loading contribution chart...
          </div>
        ) : null}

        {!loading && error ? (
          <div className="rounded-none border border-[#111111] bg-[#ffe8e8] p-6 text-sm text-[#c41e1e]">
            {error}
          </div>
        ) : null}

        {!loading && !error ? (
          <>
            <div ref={chartScrollerRef} className="overflow-x-auto">
              <div className="inline-flex gap-1 rounded-none border border-[#111111] bg-white p-3 shadow-[8px_8px_0_rgba(17,17,17,0.08)]">
                {dayCells}
              </div>
            </div>

            <div className="mt-4 flex items-center justify-end gap-2 text-xs text-[#666666]">
              <span>Less</span>
              <span className="h-3 w-3 rounded-[3px] border border-[#111111]/30 bg-[#fafaf8]" />
              <span className="h-3 w-3 rounded-[3px] border border-[#111111]/40 bg-[#e8e8e0]" />
              <span className="h-3 w-3 rounded-[3px] border border-[#111111]/50 bg-[#d0d0c8]" />
              <span className="h-3 w-3 rounded-[3px] border border-[#111111]/70 bg-[#b8b8b0]" />
              <span className="h-3 w-3 rounded-[3px] border border-[#111111] bg-[#111111]" />
              <span>More</span>
            </div>
          </>
        ) : null}
      </div>
    </section>
  )
}

export default GithubActivity

