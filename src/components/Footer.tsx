import { instagramUrl, site, whatsappLink } from "@/config/site";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-dark pb-24 text-dark-foreground md:pb-0">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-5 py-10 text-sm md:flex-row">
        <div className="text-center md:text-left">
          <p className="font-serif text-lg">{site.name}</p>
          <p className="opacity-70">Atendimento em {site.city}</p>
        </div>
        <ul className="flex items-center gap-6">
          <li>
            <a
              href={whatsappLink("rodape")}
              target="_blank"
              rel="noopener noreferrer"
              className="underline-offset-4 hover:underline"
            >
              WhatsApp
            </a>
          </li>
          <li>
            <a
              href={instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="underline-offset-4 hover:underline"
            >
              Instagram
            </a>
          </li>
        </ul>
        <p className="opacity-60">© {site.name}. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}
