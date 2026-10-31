import { faq } from "@/lib/content";
import { whatsappLink } from "@/config/site";
import { CtaButton } from "./CtaButton";

export function Faq() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <section id="faq" className="mx-auto max-w-3xl px-5 py-20 md:py-28">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="text-center">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-accent">
          Dúvidas
        </p>
        <h2 className="font-serif text-3xl tracking-tight md:text-4xl">
          Perguntas frequentes
        </h2>
      </div>

      <div className="mt-12 divide-y divide-line border-y border-line">
        {faq.map((f) => (
          <details key={f.q} className="group py-5">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-medium [&::-webkit-details-marker]:hidden">
              {f.q}
              <span
                aria-hidden="true"
                className="text-xl text-accent transition-transform group-open:rotate-45"
              >
                +
              </span>
            </summary>
            <p className="mt-3 leading-relaxed text-muted">{f.a}</p>
          </details>
        ))}
      </div>

      <div className="mt-10 text-center">
        <p className="mb-4 text-muted">Ainda ficou com alguma dúvida?</p>
        <CtaButton href={whatsappLink("faq")} variant="whatsapp">
          Tirar dúvida no WhatsApp
        </CtaButton>
      </div>
    </section>
  );
}
