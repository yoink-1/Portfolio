import Reveal from "./Reveal.jsx";

// Shared wrapper so every section has the same spacing and heading style.
export default function Section({ id, title, intro, children, tone = "paper" }) {
  const bg = tone === "white" ? "bg-white" : "bg-paper";
  return (
    <section id={id} className={`${bg} border-t border-line`}>
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 md:py-24">
        <Reveal>
          <div className="mb-10 max-w-2xl">
            <h2 className="text-3xl font-semibold tracking-tight text-ink sm:text-4xl">{title}</h2>
            {intro && <p className="mt-3 text-base leading-relaxed text-muted">{intro}</p>}
          </div>
          {children}
        </Reveal>
      </div>
    </section>
  );
}
