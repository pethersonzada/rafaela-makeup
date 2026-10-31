import { testimonials } from "@/lib/content";

/** Só aparece quando houver depoimentos reais em src/lib/content.ts */
export function Testimonials() {
  if (testimonials.length === 0) return null;

  return (
    <section id="depoimentos" className="mx-auto max-w-6xl px-5 py-20 md:py-28">
      <div className="mx-auto max-w-2xl text-center">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-accent">
          Depoimentos
        </p>
        <h2 className="font-serif text-3xl tracking-tight md:text-4xl">
          Quem já sentou na cadeira
        </h2>
      </div>
      <ul className="mt-14 grid gap-6 md:grid-cols-3">
        {testimonials.map((t) => (
          <li key={t.name} className="rounded-3xl border border-line p-7">
            <blockquote className="leading-relaxed">{t.text}</blockquote>
            <p className="mt-5 text-sm font-semibold">{t.name}</p>
            <p className="text-xs text-muted">{t.context}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
