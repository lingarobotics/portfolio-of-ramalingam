import DevelopmentEnvironmentNote from '../DevelopmentEnvironmentNote'
import TechStackImageStrip from '../TechStackImageStrip'

function ProductHero({
  label,
  title,
  description,
  secondaryDescription,
  status,
  statusClassName = 'inline-flex rounded-none border border-[#111111] bg-[#f5f5ef] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#111111]',
  techStackItems,
  stackReason,
  environment,
  environmentIcon,
  environmentReason,
}) {
  return (
    <div className="rounded-none border border-[#111111] bg-white p-6 sm:p-8">
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#444444]">{label}</p>
      <h1 className="mt-2 text-3xl font-black tracking-tight text-[#111111] sm:text-4xl">{title}</h1>
      <p className="mt-4 max-w-4xl leading-relaxed text-[#444444]">{description}</p>
      {secondaryDescription ? (
        <p className="mt-3 max-w-4xl text-sm leading-relaxed text-[#666666]">{secondaryDescription}</p>
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