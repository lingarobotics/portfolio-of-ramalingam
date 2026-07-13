import DevelopmentEnvironmentNote from '../DevelopmentEnvironmentNote'
import TechStackImageStrip from '../TechStackImageStrip'

function ProductHero({
  label,
  title,
  description,
  secondaryDescription,
  status,
  statusClassName = 'inline-flex rounded-full border border-cyan-400/50 bg-cyan-500/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-cyan-200',
  techStackItems,
  stackReason,
  environment,
  environmentIcon,
  environmentReason,
}) {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 sm:p-8">
      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-cyan-200">{label}</p>
      <h1 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">{title}</h1>
      <p className="mt-4 max-w-4xl leading-relaxed text-slate-300">{description}</p>
      {secondaryDescription ? (
        <p className="mt-3 max-w-4xl text-sm text-slate-400">{secondaryDescription}</p>
      ) : null}

      {status ? (
        <div className="mt-4">
          <span className={statusClassName}>{status}</span>
        </div>
      ) : null}

      {techStackItems?.length ? <TechStackImageStrip items={techStackItems} stackReason={stackReason} /> : null}

      {environment ? (
        <DevelopmentEnvironmentNote
          environment={environment}
          icon={environmentIcon}
          reason={environmentReason}
        />
      ) : null}
    </div>
  )
}

export default ProductHero