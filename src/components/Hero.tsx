import Image from "next/image";
import { hero } from "@/lib/content";
import { whatsappLink } from "@/config/site";
import { CtaButton, WhatsAppIcon } from "./CtaButton";

export function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 -top-24 size-96 rounded-full bg-surface blur-3xl"
      />
      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-5 py-16 md:grid-cols-2 md:py-28">
        <div>
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.25em] text-accent">
            {hero.eyebrow}
          </p>
          <h1 className="font-serif text-4xl leading-[1.1] tracking-tight text-balance sm:text-5xl lg:text-6xl">
            {hero.title}
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
            {hero.subtitle}
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <CtaButton href={whatsappLink("hero")} variant="whatsapp">
              <WhatsAppIcon />
              {hero.primaryCta}
            </CtaButton>
            <CtaButton href="#portfolio" variant="outline">
              {hero.secondaryCta}
            </CtaButton>
          </div>
          <p className="mt-4 text-sm text-muted">{hero.note}</p>
        </div>

        <div className="relative aspect-[4/5] w-full max-w-md justify-self-center overflow-hidden rounded-[2rem] bg-surface shadow-xl shadow-brand/15 md:max-w-none">
          <Image
            src={hero.photo}
            alt={hero.photoAlt}
            fill
            priority
            sizes="(min-width: 768px) 50vw, 90vw"
            className="object-cover object-top"
          />
        </div>
      </div>
    </section>
  );
}