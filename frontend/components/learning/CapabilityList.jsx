function CapabilityList({
  title = 'Capabilities Built',
  items = []
}) {
  if (!items.length) {
    return null;
  }

  return (
    <section
      className="
        rounded-2xl
        border
        border-slate-800
        bg-slate-950/60
        p-5
      "
    >
      <h3
        className="
          text-lg
          font-semibold
          text-slate-100
        "
      >
        {title}
      </h3>

      <div
        className="
          mt-4
          grid
          gap-3
          sm:grid-cols-2
        "
      >
        {items.map((item) => (
          <div
            key={item}
            className="
              rounded-xl
              border
              border-slate-800
              bg-slate-900/60
              px-4
              py-3
              text-sm
              text-slate-300
            "
          >
            {item}
          </div>
        ))}
      </div>
    </section>
  );
}

export default CapabilityList;
