import { cacheLife } from "next/cache";

/**
 * TODA a copy do site mora aqui. Edite os textos sem mexer nos componentes.
 * Revise tudo que for promessa de serviço (domicílio, teste, sinal, prazos)
 * e ajuste para a sua realidade antes de publicar.
 */

/**
 * Extensão dos arquivos da pasta /public. O Windows esconde a extensão por padrão:
 * se suas fotos forem .png ou .jpeg, troque aqui e pronto (vale para todas).
 */
const EXT = "png";
const photo = (name: string) => `/${name}.${EXT}`;

export const hero = {
  photo: photo("minha_melhor_foto"),
  photoAlt: "Rafaela com maquiagem e cabelo finalizados",
  eyebrow: "Maquiadora profissional",
  title: "Maquiagem que realça quem você já é.",
  subtitle:
    "Pele impecável, olhar marcante e aquela sensação de se olhar no espelho e pensar: sou eu, só que no meu melhor dia. Chame no WhatsApp e garanta seu horário.",
  primaryCta: "Quero agendar meu horário",
  secondaryCta: "Ver meus trabalhos",
  note: "Resposta direta pelo WhatsApp, sem formulário e sem enrolação.",
};

export const trustItems = [
  "Horário marcado, sem correria",
  "Teste de maquiagem para noivas",
  "Atendimento direto pelo WhatsApp",
  "Look pensado para o seu tom de pele",
];

export type Service = {
  id: string;
  title: string;
  description: string;
  cta: string;
};

const services: Service[] = [
  {
    id: "social",
    title: "Maquiagem social",
    description:
      "Para jantares, aniversários, eventos e aquele dia em que você quer chegar chegando.",
    cta: "Quero esse look",
  },
  {
    id: "noivas",
    title: "Noivas",
    description:
      "Um look elegante, que dura a cerimônia inteira e continua lindo nas fotos. Inclui conversa prévia para alinhar o estilo.",
    cta: "Quero falar sobre meu casamento",
  },
  {
    id: "formaturas",
    title: "Formaturas e debutantes",
    description:
      "Marcante sem exagero, pensado para o evento, a iluminação e o vestido.",
    cta: "Quero agendar minha data",
  },
  {
    id: "madrinhas",
    title: "Madrinhas e convidadas",
    description:
      "Um acabamento sofisticado para você celebrar o dia de alguém especial com segurança.",
    cta: "Quero agendar",
  },
  {
    id: "ensaios",
    title: "Ensaios e fotos",
    description:
      "Acabamento pensado para câmera e luz de estúdio, para sua pele aparecer do jeito que você imagina.",
    cta: "Quero para meu ensaio",
  },
  {
    id: "embelezamento",
    title: "Embelezamento e finalização",
    description:
      "Cílios, detalhes e retoques que completam o look e elevam o resultado final.",
    cta: "Quero saber mais",
  },
];

export async function getServices(): Promise<Service[]> {
  "use cache";
  cacheLife("days");
  return services;
}

export type GalleryItem = {
  id: string;
  title: string;
  category: string;
  /** Caminho em /public. Ex.: "/portfolio/noiva-01.jpg". Sem src, aparece um bloco de placeholder. */
  src?: string;
  alt: string;
};

const gallery: GalleryItem[] = [
  {
    id: "g1",
    title: "Casamento civil",
    category: "Noivas",
    src: photo("casamento_civil"),
    alt: "Maquiagem para casamento civil",
  },
  {
    id: "g2",
    title: "Formatura",
    category: "Formaturas",
    src: photo("formatura"),
    alt: "Maquiagem e penteado para formatura",
  },
  {
    id: "g3",
    title: "Natural sofisticada",
    category: "Social",
    src: photo("basica_1"),
    alt: "Maquiagem social básica com pele natural",
  },
  {
    id: "g4",
    title: "Glow de festa",
    category: "Social",
    src: photo("basica_2"),
    alt: "Maquiagem social com pele luminosa",
  },
  {
    id: "g5",
    title: "Olhar marcante",
    category: "Social",
    src: photo("basica_3"),
    alt: "Maquiagem social com olhar marcante e batom vermelho",
  },
  {
    id: "g6",
    title: "Carnaval",
    category: "Festas",
    src: photo("carnaval"),
    alt: "Maquiagem colorida para carnaval",
  },
];

export async function getGallery(): Promise<GalleryItem[]> {
  "use cache";
  cacheLife("days");
  return gallery;
}

export const about = {
  title: "Oi, eu sou a Rafaela.",
  paragraphs: [
    "Maquiagem, para mim, não é máscara. É ferramenta para você se sentir bem na sua própria pele, com a intenção certa para cada ocasião.",
    "Antes de pegar no pincel, eu escuto: o evento, o vestido, o seu estilo e o que você NÃO quer. É assim que o resultado fica com a sua cara, só que mais bonito.",
    "Se você chegou até aqui, já sabe como é: a gente quer ficar linda, mas sem perder a naturalidade. Vem comigo.",
  ],
  // Se tiver outra foto sua (de rosto, sorrindo), troque o nome aqui
  photo: photo("minha_melhor_foto") as string | undefined,
  photoAlt: "Rafaela, maquiadora",
};

export const steps = [
  {
    title: "Chame no WhatsApp",
    text: "Conte a data, o tipo de evento e o look que você imagina. Pode mandar foto de referência.",
  },
  {
    title: "A gente alinha o look",
    text: "Eu te oriento sobre estilo, tom de pele e horário, sem compromisso.",
  },
  {
    title: "Horário reservado",
    text: "Combinamos os detalhes e deixo sua data garantida na agenda.",
  },
  {
    title: "Dia de brilhar",
    text: "Você chega, relaxa e sai pronta para o seu momento.",
  },
];

export type Testimonial = {
  name: string;
  context: string;
  text: string;
};

/**
 * Depoimentos: use APENAS relatos reais de clientes (com autorização).
 * Enquanto esta lista estiver vazia, a seção não aparece no site.
 */
export const testimonials: Testimonial[] = [];

export type FaqItem = { q: string; a: string };

export const faq: FaqItem[] = [
  {
    q: "Como faço para agendar?",
    a: "É só clicar em qualquer botão de WhatsApp do site. Me conte a data e o tipo de evento e eu respondo com os horários disponíveis.",
  },
  {
    q: "Com quanta antecedência devo marcar?",
    a: "Quanto antes, melhor, principalmente para noivas e datas de alta procura como formaturas e fim de ano. Para eventos próximos, chame e eu confirmo se ainda há agenda.",
  },
  {
    q: "Preciso pagar sinal para reservar o horário?",
    a: "Para garantir sua data, a reserva do horário é combinada pelo WhatsApp. Eu explico direitinho como funciona na conversa.",
  },
  {
    q: "Quanto tempo dura o atendimento?",
    a: "Depende do tipo de maquiagem. Uma maquiagem social costuma ser mais rápida e a de noiva leva mais tempo. Eu te passo uma estimativa no agendamento.",
  },
  {
    q: "Você faz teste de maquiagem para noivas?",
    a: "Sim, recomendo bastante. O teste evita surpresas e alinha o look antes do grande dia. Combine pelo WhatsApp.",
  },
  {
    q: "A maquiagem dura o dia inteiro?",
    a: "Trabalho com preparação de pele e produtos de longa duração para o look aguentar o evento. Eu também te passo dicas de retoque.",
  },
  {
    q: "Posso levar uma foto de referência?",
    a: "Pode e deve! Referências ajudam muito. Eu adapto ao seu rosto, ao seu tom de pele e à ocasião.",
  },
  {
    q: "Tenho pele sensível ou alergia. Tudo bem?",
    a: "Me avise na conversa. Assim eu escolho os produtos com cuidado e a gente evita qualquer desconforto.",
  },
  {
    q: "Quais são as formas de pagamento?",
    a: "Combino as formas de pagamento disponíveis direto no WhatsApp, na hora do agendamento.",
  },
];

export const finalCta = {
  title: "Seu próximo look começa numa mensagem.",
  text: "A agenda preenche rápido, principalmente em datas de evento. Chame agora, conte sua ideia e eu cuido do resto.",
  button: "Garantir meu horário no WhatsApp",
};