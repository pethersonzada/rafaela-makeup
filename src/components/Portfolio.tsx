import Image from "next/image";
import { getGallery } from "@/lib/content";
import { instagramUrl, site, whatsappLink } from "@/config/site";
import { CtaButton } from "./CtaButton";

export async function Portfolio() {
  const items = await getGallery();

  return (
    <section id="portfolio" className="bg-surface py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-accent">
            Portfólio
          </p>
          <h2 className="font-serif text-3xl tracking-tight text-balance md:text-4xl">
            Resultados que falam por si
          </h2>
          <p className="mt-4 text-muted">
            Uma amostra do meu trabalho. Tem mais no Instagram, atualizado toda
            semana.
          </p>
        </div>

        <ul className="mt-14 grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-5">
          {items.map((item) => (
            <li
              key={item.id}
              className="group relative aspect-[3/4] overflow-hidden rounded-2xl bg-gradient-to-br from-background via-surface to-brand/25"
            >
              {item.src ? (
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(min-width: 768px) 33vw, 50vw"
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
              ) : (
                <div className="absolute inset-0 grid place-items-center p-4 text-center text-xs text-muted">
                  Foto: {item.title}
                </div>
              )}
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-dark/70 to-transparent p-4 text-dark-foreground">
                <p className="text-[10px] uppercase tracking-[0.2em] opacity-80">
                  {item.category}
                </p>
                <p className="font-serif text-base">{item.title}</p>
              </div>
            </li>
          ))}
        </ul>

        <div className="mt-12 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <CtaButton href={whatsappLink("portfolio")} variant="primary">
            Quero um look assim
          </CtaButton>
          <CtaButton href={instagramUrl} variant="outline">
            Ver mais no @{site.instagram}
          </CtaButton>
        </div>
      </div>
    </section>
  );
}