function ProductSection({
  title,
  children,
  className = '',
  titleClassName = 'text-xs font-semibold uppercase tracking-[0.18em] text-[#111111]',
  contentClassName = 'mt-3',
}) {
  return (
    <div className={`rounded-none border border-[#111111] bg-white p-5 ${className}`.trim()}>
      <p className={titleClassName}>{title}</p>
      <div className={contentClassName}>{children}</div>
    </div>
  )
}

export default ProductSection