import { steps } from "@/lib/content";

export function Process() {
  return (
    <section id="como-funciona" className="bg-surface py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-accent">
            Como funciona
          </p>
          <h2 className="font-serif text-3xl tracking-tight text-balance md:text-4xl">
            Agendar é simples e rápido
          </h2>
        </div>

        <ol className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <li key={s.title} className="relative">
              <span className="font-serif text-5xl text-accent/60">{i + 1}</span>
              <h3 className="mt-2 font-serif text-xl">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{s.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
