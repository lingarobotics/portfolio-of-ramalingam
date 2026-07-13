function ProductInfoCard({
  title,
  description,
  children,
  className = '',
  titleClassName = 'text-sm font-semibold uppercase tracking-[0.12em] text-cyan-200',
  descriptionClassName = 'mt-2 text-sm leading-relaxed text-slate-300',
}) {
  return (
    <article className={`rounded-xl border border-slate-800 bg-slate-950/65 p-4 ${className}`.trim()}>
      <h2 className={titleClassName}>{title}</h2>
      {description ? <p className={descriptionClassName}>{description}</p> : null}
      {children}
    </article>
  )
}

export default ProductInfoCard