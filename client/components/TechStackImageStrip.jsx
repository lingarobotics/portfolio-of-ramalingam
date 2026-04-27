function TechStackImageStrip({ items, stackReason }) {
  if (!items?.length) {
    return null
  }

  return (
    <div className="mt-5 rounded-xl border border-slate-800 bg-slate-950/55 p-4">
      <p className="text-xs font-semibold uppercase tracking-[0.14em] text-cyan-200">Tech Stack Snapshot</p>
      <div className="mt-3 flex flex-wrap gap-2">
        {items.map((item) => (
          <div
            key={item.name}
            className="inline-flex items-center gap-2 rounded-lg border border-slate-700 bg-slate-900/80 px-2.5 py-1.5 text-xs text-slate-200"
            title={item.name}
          >
            <img src={item.src} alt={item.name} className="h-5 w-5 rounded object-contain" loading="lazy" />
            <span>{item.name}</span>
          </div>
        ))}
      </div>
      {stackReason ? (
        <p className="mt-3 text-sm leading-relaxed text-slate-300">{stackReason}</p>
      ) : null}
    </div>
  )
}

export default TechStackImageStrip
