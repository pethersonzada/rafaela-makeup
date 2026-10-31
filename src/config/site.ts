/**
 * Dados do negócio. Troque tudo que estiver marcado com "TROQUE".
 */
export const site = {
  name: "rafaela.makeupbeauty",
  displayName: "Rafaela Makeup & Beauty",
  // TROQUE: DDI + DDD + número, só dígitos. Ex.: 5581999999999
  whatsappNumber: "5581989839680",
  // TROQUE: Instagram sem o @
  instagram: "rafaela.makeupbeauty",
  // TROQUE: cidade/UF onde atende
  city: "Bezerros - PE",
  // TROQUE: URL final do site (usada em SEO)
  url: "https://www.seudominio.com.br",
  description:
    "Maquiagem profissional para noivas, formaturas, festas e ensaios. Agende seu horário direto pelo WhatsApp.",
} as const;

export type CtaContext =
  | "hero"
  | "header"
  | "servicos"
  | "portfolio"
  | "sobre"
  | "faq"
  | "final"
  | "flutuante"
  | "rodape";

/** Mensagem pré-preenchida por contexto: ajuda a saber de onde o lead veio. */
const messages: Record<CtaContext, string> = {
  hero: "Oi, Rafaela! Vi seu site e quero agendar uma maquiagem. Pode me passar os horários disponíveis?",
  header: "Oi, Rafaela! Quero agendar um horário para maquiagem.",
  servicos: "Oi, Rafaela! Tenho interesse em um dos seus serviços. Pode me ajudar a escolher?",
  portfolio: "Oi, Rafaela! Vi seu portfólio e quero um look parecido. Como funciona?",
  sobre: "Oi, Rafaela! Queria conversar sobre uma maquiagem.",
  faq: "Oi, Rafaela! Ainda tenho uma dúvida sobre o atendimento.",
  final: "Oi, Rafaela! Quero garantir meu horário. Qual a data mais próxima disponível?",
  flutuante: "Oi, Rafaela! Quero agendar uma maquiagem.",
  rodape: "Oi, Rafaela! Gostaria de agendar uma maquiagem.",
};

export function whatsappLink(context: CtaContext = "hero"): string {
  const text = encodeURIComponent(messages[context]);
  return `https://wa.me/${site.whatsappNumber}?text=${text}`;
}

export const instagramUrl = `https://instagram.com/${site.instagram}`;
