import { whatsappLink } from "@/config/site";
import { WhatsAppIcon } from "./CtaButton";

export function WhatsAppFloat() {
  return (
    <a
      href={whatsappLink("flutuante")}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Agendar pelo WhatsApp"
      className="fixed bottom-5 right-5 z-50 inline-flex min-h-14 items-center gap-2 rounded-full bg-whatsapp px-5 text-sm font-semibold text-white shadow-lg shadow-black/20 transition-colors hover:bg-whatsapp-strong"
    >
      <WhatsAppIcon className="size-6" />
      <span className="hidden sm:inline">Agendar agora</span>
    </a>
  );
}
