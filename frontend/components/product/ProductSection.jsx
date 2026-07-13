function ProductSection({
  title,
  children,
  className = '',
  titleClassName = 'text-xs font-semibold uppercase tracking-[0.14em] text-cyan-200',
  contentClassName = 'mt-3',
}) {
  return (
    <div className={`rounded-xl border border-slate-800 bg-slate-950/65 p-4 ${className}`.trim()}>
      <p className={titleClassName}>{title}</p>
      <div className={contentClassName}>{children}</div>
    </div>
  )
}

export default ProductSection