import { useState } from 'react';

function ConceptsAccordion({
  title,
  items
}) {
  const [isOpen, setIsOpen] = useState(false);

  if (!items?.length) {
    return null;
  }

  return (
    <div
      className="
        mt-5
        rounded-2xl
        border
        border-slate-800
        bg-slate-950/60
      "
    >
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        className="
          flex
          w-full
          items-center
          justify-between
          p-4
          text-left
        "
      >
        <span
          className="
            text-sm
            font-semibold
            uppercase
            tracking-[0.12em]
            text-cyan-200
          "
        >
          {title}
        </span>

        <span
          className="
            text-sm
            text-slate-300
          "
        >
          {isOpen ? '−' : '+'}
        </span>

      </button>

      {isOpen && (
        <div className="border-t border-slate-800 p-4">

          <ul
            className="
              grid
              gap-2
              sm:grid-cols-2
            "
          >
            {items.map((item) => (
              <li
                key={item}
                className="
                  rounded-xl
                  border
                  border-slate-800
                  bg-slate-900/60
                  px-3
                  py-2
                  text-sm
                  text-slate-300
                "
              >
                {item}
              </li>
            ))}
          </ul>

        </div>
      )}

    </div>
  );
}

export default ConceptsAccordion;
