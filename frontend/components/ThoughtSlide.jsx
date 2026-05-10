export default function ThoughtSlide({ slide }) {
  return (
    <article className="motion-rise">
      
      {/* Image Container */}
      <div className="overflow-hidden rounded-[2rem] border border-slate-800/80 bg-slate-900/40 shadow-2xl shadow-black/20 backdrop-blur-sm">

        <img
          src={slide.src}
          alt={slide.insight}
          loading="lazy"
          className="w-full object-cover"
        />

      </div>

      {/* Insight */}
      <div className="mx-auto mt-8 max-w-3xl">
        <p className="text-center text-lg leading-8 text-slate-300">
          {slide.insight}
        </p>
      </div>

    </article>
  );
}