import ProductSection from './ProductSection'

function ProductMetrics({
  title,
  metrics,
  className = 'mt-6',
  gridClassName = 'mt-3 grid gap-3 sm:grid-cols-2 lg:grid-cols-4',
}) {
  return (
    <ProductSection title={title} className={className}>
      <div className={gridClassName}>
        {metrics.map((metric) => (
          <div key={metric.label} className="rounded-lg border border-slate-800 bg-slate-900/55 p-3">
            <p className="text-[11px] uppercase tracking-[0.12em] text-slate-400">{metric.label}</p>
            <p className="mt-1 text-xl font-semibold text-slate-100">{metric.value}</p>
          </div>
        ))}
      </div>
    </ProductSection>
  )
}

export default ProductMetrics