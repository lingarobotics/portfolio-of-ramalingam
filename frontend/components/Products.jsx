import { useState } from 'react'
import { Link } from 'react-router-dom'
import products from '../data/products'

const groupedProducts = products.reduce((groups, product) => {
  if (!groups[product.category]) {
    groups[product.category] = []
  }

  groups[product.category].push(product)
  return groups
}, {})

const categoryOrder = Object.keys(groupedProducts)

function Products() {
  const [isSectionOpen, setIsSectionOpen] = useState(false)
  const [openCategory, setOpenCategory] = useState(categoryOrder[0] || '')

  const toggleCategory = (category) => {
    setOpenCategory((current) => (current === category ? '' : category))
  }

  return (
    <section id="products" className="mx-auto w-full max-w-6xl scroll-mt-20 px-4 py-16 sm:px-6">
      <button
        type="button"
        onClick={() => setIsSectionOpen((current) => !current)}
        className="w-full rounded-2xl border border-slate-800 bg-slate-900/60 p-5 text-left transition hover:border-cyan-400/45 hover:shadow-[0_0_24px_rgba(34,211,238,0.12)]"
        aria-expanded={isSectionOpen}
        aria-controls="products-content"
      >
        <div className="flex items-center justify-between gap-3">
          <h2 className="text-3xl font-semibold tracking-tight text-slate-100 sm:text-4xl">Products I Built</h2>
          <span className="text-2xl text-cyan-200">{isSectionOpen ? '−' : '+'}</span>
        </div>
        <p className="mt-3 max-w-3xl text-slate-300">
          Click to {isSectionOpen ? 'hide' : 'explore'} core products, under-development systems, experiments, and academic projects.
        </p>
      </button>

      {isSectionOpen ? (
        <div id="products-content" className="mt-8 space-y-5">
          {Object.entries(groupedProducts).map(([category, categoryProducts]) => (
            <section
              key={category}
              className="rounded-2xl border border-slate-800 bg-slate-900/60 transition duration-300 hover:border-cyan-400/35"
            >
              <button
                type="button"
                onClick={() => toggleCategory(category)}
                className="flex w-full items-center justify-between gap-3 p-5 text-left"
              >
                <h3 className="text-xl font-semibold text-cyan-200">{category}</h3>
                <span className="text-slate-400">{openCategory === category ? '−' : '+'}</span>
              </button>

              {openCategory === category ? (
                <div className="border-t border-slate-800 p-5 pt-5">
                  <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
                    {categoryProducts.map((product) => (
                      <article
                        key={product.name}
                        className="flex h-full flex-col rounded-2xl border border-slate-800 bg-slate-900/55 p-5 shadow-[0_0_25px_rgba(15,23,42,0.35)] transition duration-300 hover:-translate-y-1 hover:border-cyan-400/45 hover:shadow-[0_0_30px_rgba(34,211,238,0.16)]"
                      >
                        <div className="flex items-start justify-between gap-3">
                          <h4 className="min-w-0 text-lg font-semibold text-slate-100 [overflow-wrap:anywhere]">{product.name}</h4>
                          <span className="rounded-full border border-cyan-400/50 bg-cyan-500/10 px-2 py-1 text-xs font-medium text-cyan-200">
                            {product.tag}
                          </span>
                        </div>

                        <p className="mt-4 flex-1 text-sm leading-relaxed text-slate-300">{product.description}</p>

                        {product.tech ? (
                          <p className="mt-4 text-sm text-slate-200">
                            <span className="font-semibold text-cyan-200">Technology:</span> {product.tech}
                          </p>
                        ) : null}

                        <a
                          href={product.link}
                          target="_blank"
                          rel="noreferrer"
                          className="mt-5 inline-flex w-fit rounded-lg border border-slate-700 bg-slate-950/70 px-4 py-2 text-sm font-medium text-slate-100 transition hover:border-cyan-400/60 hover:text-cyan-200"
                        >
                          View Repository
                        </a>

                        {product.proofRoute ? (
                          <Link
                            to={product.proofRoute}
                            className="mt-3 inline-flex w-fit rounded-lg border border-emerald-400/50 bg-emerald-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-emerald-200 transition hover:border-emerald-300 hover:bg-emerald-500/20"
                          >
                            View Product Proof
                          </Link>
                        ) : null}
                      </article>
                    ))}
                  </div>
                </div>
              ) : null}
            </section>
          ))}
        </div>
      ) : null}
    </section>
  )
}

export default Products
