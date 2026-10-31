import { finalCta } from "@/lib/content";
import { whatsappLink } from "@/config/site";
import { CtaButton, WhatsAppIcon } from "./CtaButton";

export function FinalCta() {
  return (
    <section className="bg-dark text-dark-foreground">
      <div className="mx-auto max-w-3xl px-5 py-20 text-center md:py-28">
        <h2 className="font-serif text-3xl tracking-tight text-balance md:text-5xl">
          {finalCta.title}
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed opacity-80">
          {finalCta.text}
        </p>
        <CtaButton href={whatsappLink("final")} variant="whatsapp" className="mt-9">
          <WhatsAppIcon />
          {finalCta.button}
        </CtaButton>
      </div>
    </section>
  );
}
