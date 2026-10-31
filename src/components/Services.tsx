import { getServices } from "@/lib/content";
import { whatsappLink } from "@/config/site";
import { CtaButton } from "./CtaButton";

export async function Services() {
  const services = await getServices();

  return (
    <section id="servicos" className="mx-auto max-w-6xl px-5 py-20 md:py-28">
      <div className="mx-auto max-w-2xl text-center">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-accent">
          Serviços
        </p>
        <h2 className="font-serif text-3xl tracking-tight text-balance md:text-4xl">
          Um look certo para cada momento
        </h2>
        <p className="mt-4 text-muted">
          Escolha o que combina com a sua ocasião. Não achou? Chame e a gente
          monta juntas.
        </p>
      </div>

      <ul className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((s, i) => (
          <li
            key={s.id}
            className="flex flex-col rounded-3xl border border-line bg-background p-7 transition-shadow hover:shadow-lg hover:shadow-brand/10"
          >
            <span className="font-serif text-2xl text-accent">
              {String(i + 1).padStart(2, "0")}
            </span>
            <h3 className="mt-4 font-serif text-xl">{s.title}</h3>
            <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
              {s.description}
            </p>
            <CtaButton
              href={whatsappLink("servicos")}
              variant="outline"
              className="mt-6 min-h-11 self-start"
            >
              {s.cta}
            </CtaButton>
          </li>
        ))}
      </ul>
    </section>
  );
}
