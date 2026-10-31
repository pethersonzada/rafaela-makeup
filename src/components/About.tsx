import Image from "next/image";
import { about } from "@/lib/content";
import { whatsappLink } from "@/config/site";
import { CtaButton } from "./CtaButton";

export function About() {
  return (
    <section
      id="sobre"
      className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-20 md:grid-cols-2 md:py-28"
    >
      <div className="relative aspect-[4/5] w-full max-w-md justify-self-center overflow-hidden rounded-[2rem] bg-gradient-to-tr from-brand/25 via-surface to-background md:max-w-none">
        {about.photo ? (
          <Image
            src={about.photo}
            alt={about.photoAlt}
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover object-top"
          />
        ) : (
          <div className="absolute inset-0 grid place-items-center p-8 text-center text-sm text-muted">
            Sua foto aqui (rosto aparecendo gera mais confiança)
          </div>
        )}
      </div>

      <div>
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-accent">
          Sobre
        </p>
        <h2 className="font-serif text-3xl tracking-tight md:text-4xl">
          {about.title}
        </h2>
        <div className="mt-6 space-y-4 leading-relaxed text-muted">
          {about.paragraphs.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>
        <CtaButton href={whatsappLink("sobre")} variant="whatsapp" className="mt-8">
          Conversar com a Rafaela
        </CtaButton>
      </div>
    </section>
  );
}