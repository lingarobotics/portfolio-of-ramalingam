function DevelopmentEnvironmentNote({ environment, icon, reason }) {
  const defaultEnvironmentReason = environment === 'IntelliJ IDEA Ultimate'
    ? 'I use IntelliJ IDEA Ultimate for robust Java backend engineering with stronger project structure tooling and deep debugging support.'
    : 'I use VS Code for rapid prototyping and lightweight iteration in JavaScript-first or mixed non-Java workflows.'

  const resolvedReason = reason || defaultEnvironmentReason

  return (
    <div className="mt-5 rounded-xl border border-slate-800 bg-slate-950/55 p-4">
      <p className="text-xs font-semibold uppercase tracking-[0.14em] text-cyan-200">Development Environment</p>
      <div className="mt-3 inline-flex items-center gap-2 rounded-lg border border-slate-700 bg-slate-900/80 px-3 py-2 text-xs text-slate-200">
        <img src={icon} alt={environment} className="h-4 w-4 rounded object-contain" loading="lazy" />
        <span>{environment}</span>
      </div>
      <p className="mt-3 text-sm leading-relaxed text-slate-300">{resolvedReason}</p>
    </div>
  )
}

export default DevelopmentEnvironmentNote
