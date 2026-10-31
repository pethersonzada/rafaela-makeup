# rafaela.makeupbeauty

Site de portfólio para maquiadora, feito para uma coisa só: **transformar visitantes em conversas no WhatsApp e, depois, em horários agendados.**

Página única, rápida, pensada primeiro para o celular, com copy persuasiva, galeria de trabalhos, FAQ e botões de WhatsApp em pontos estratégicos.

---

## Sumário

- [Stack](#stack)
- [O que o site tem](#o-que-o-site-tem)
- [Começando](#começando)
- [Estrutura do projeto](#estrutura-do-projeto)
- [Personalização](#personalização)
- [Fotos](#fotos)
- [Como funcionam os CTAs de WhatsApp](#como-funcionam-os-ctas-de-whatsapp)
- [Depoimentos](#depoimentos)
- [SEO](#seo)
- [Deploy](#deploy)
- [Problemas comuns](#problemas-comuns)
- [Checklist antes de publicar](#checklist-antes-de-publicar)

---

## Stack

| Tecnologia | Para quê |
|---|---|
| Next.js 16 (App Router) | Framework e roteamento |
| React 19 + React Compiler | Memoização automática, sem `useMemo` e `useCallback` manuais |
| Cache Components | Pré-renderização estática e `"use cache"` nos dados |
| TypeScript (strict) | Segurança de tipos |
| Tailwind CSS v4 | Estilo, com tema em variáveis CSS |
| ESLint (flat config) | Qualidade de código, com `eslint-config-next` |
| `next/font` | Playfair Display (títulos) e Inter (texto), sem layout shift |
| `next/image` | Imagens otimizadas e responsivas |

Requisito: **Node 20.9 ou superior.**

---

## O que o site tem

Ordem das seções, do topo ao rodapé:

1. **Header fixo** com navegação por âncoras e botão "Agendar"
2. **Hero** com promessa, CTA principal e foto de impacto
3. **Faixa de diferenciais**
4. **Serviços** (6 cards, cada um com CTA próprio)
5. **Portfólio** em grade, com link para o Instagram
6. **Sobre**
7. **Como funciona** (4 passos até o horário reservado)
8. **Depoimentos** (só aparece com relatos reais, veja [aqui](#depoimentos))
9. **FAQ** com 9 perguntas e dados estruturados para o Google
10. **CTA final** em fundo escuro
11. **Rodapé**
12. **Botão flutuante de WhatsApp**, sempre visível

Detalhes de acessibilidade já resolvidos: menu mobile com `aria-expanded`, foco visível, `alt` em todas as fotos, FAQ com `<details>` nativo (funciona sem JavaScript) e respeito a `prefers-reduced-motion`.

---

## Começando

```bash
# 1. Instalar dependências
npm install

# 2. Rodar em desenvolvimento
npm run dev
```

Abra http://localhost:3000.

### Scripts

| Comando | O que faz |
|---|---|
| `npm run dev` | Servidor de desenvolvimento |
| `npm run build` | Build de produção |
| `npm run start` | Roda o build de produção |
| `npm run lint` | Verifica o código com ESLint |
| `npm run typecheck` | Verifica os tipos com o TypeScript |

> O build usa `next/font/google`, então precisa de internet na hora de compilar.

---

## Estrutura do projeto

```
.
├── public/                      Fotos e arquivos estáticos
├── src/
│   ├── app/
│   │   ├── layout.tsx           Fontes, metadados, Header, Footer, botão flutuante
│   │   ├── page.tsx             Monta as seções da página
│   │   └── globals.css          Importa Tailwind e o tema
│   ├── components/
│   │   ├── CtaButton.tsx        Botão padrão + ícone do WhatsApp
│   │   ├── Header.tsx           Navegação (client component, menu mobile)
│   │   ├── Hero.tsx
│   │   ├── TrustBar.tsx
│   │   ├── Services.tsx
│   │   ├── Portfolio.tsx
│   │   ├── About.tsx
│   │   ├── Process.tsx
│   │   ├── Testimonials.tsx
│   │   ├── Faq.tsx
│   │   ├── FinalCta.tsx
│   │   ├── Footer.tsx
│   │   └── WhatsAppFloat.tsx
│   ├── config/
│   │   └── site.ts              Dados do negócio e mensagens de WhatsApp
│   ├── lib/
│   │   └── content.ts           TODA a copy do site (textos, serviços, FAQ, galeria)
│   └── styles/
│       └── theme.css            Paleta de cores e fontes
├── next.config.ts               React Compiler + Cache Components
├── eslint.config.mjs
├── postcss.config.mjs
├── tsconfig.json
└── PLANEJAMENTO.md              Estratégia, copy e estrutura de seções
```

**Regra de ouro:** textos mudam em `content.ts`, dados de contato em `site.ts`, cores em `theme.css`. Você não precisa mexer nos componentes para personalizar.

---

## Personalização

### 1. Dados do negócio: `src/config/site.ts`

```ts
whatsappNumber: "5581999999999", // DDI + DDD + número, só dígitos
instagram: "rafaela.makeupbeauty", // sem o @
city: "SUA CIDADE - UF",
url: "https://www.seudominio.com.br",
```

### 2. Cores: `src/styles/theme.css`

Todas as cores do site vêm de variáveis neste arquivo. Mude os hexadecimais e tudo acompanha:

```css
:root {
  --background: #fff8f5;   /* fundo da página */
  --foreground: #2a1f1f;   /* texto principal */
  --surface: #f8e9e4;      /* blocos alternados */
  --brand: #b76e79;        /* cor da marca (botões, destaques) */
  --brand-strong: #96525d; /* hover da marca */
  --accent: #b8934f;       /* detalhes dourados */
  --dark: #2a1f1f;         /* CTA final e rodapé */
  --whatsapp: #1c9a50;     /* botão do WhatsApp */
}
```

Mantenha bom contraste entre `--brand` e `--brand-foreground` (texto dentro do botão). Dá para testar em [webaim.org/resources/contrastchecker](https://webaim.org/resources/contrastchecker/).

### 3. Textos: `src/lib/content.ts`

Hero, diferenciais, serviços, galeria, sobre, passos, FAQ e CTA final estão todos neste arquivo.

**Revise toda promessa de serviço** (domicílio, teste de maquiagem, sinal, prazos, formas de pagamento) e ajuste para a sua realidade antes de publicar.

---

## Fotos

As imagens ficam em `public/` e são referenciadas **pelo nome, sem extensão**, em `src/lib/content.ts`:

```ts
const EXT = "png"; // extensão de todas as fotos
const photo = (name: string) => `/${name}.${EXT}`;

// uso
src: photo("casamento_civil"),   // aponta para public/casamento_civil.png
```

Para adicionar uma foto na galeria, coloque o arquivo em `public/` e acrescente um item em `gallery`:

```ts
{
  id: "g7",
  title: "Madrinha",
  category: "Madrinhas",
  src: photo("madrinha_1"),
  alt: "Maquiagem para madrinha de casamento",
},
```

Boas práticas:

- **Nomes simples:** minúsculas, sem acento, sem espaço (`casamento_civil`, não `Casamento Civil.png`).
- **Sempre preencha o `alt`:** ajuda quem usa leitor de tela e o Google Imagens.
- **Não deixe o original em alta resolução no `public`.** Tudo que está nessa pasta pode ser baixado direto pelo endereço. Guarde os originais fora do projeto e suba versões de uns 1600px no lado maior.
- **Marca d'água discreta** com seu @ no canto reduz o risco de uso indevido.
- **Autorização:** para usar o rosto de clientes no site, tenha a permissão delas (uma mensagem de WhatsApp já serve de registro). É direito de imagem.

---

## Como funcionam os CTAs de WhatsApp

Cada botão do site abre uma conversa com **uma mensagem pré-preenchida diferente**, de acordo com a seção:

| Contexto | Onde aparece |
|---|---|
| `header` | Botão "Agendar" no topo |
| `hero` | CTA principal |
| `servicos` | Cards de serviço |
| `portfolio` | "Quero um look assim" |
| `sobre` | "Conversar com a Rafaela" |
| `faq` | "Tirar dúvida no WhatsApp" |
| `final` | CTA de fechamento |
| `flutuante` | Botão fixo no canto da tela |
| `rodape` | Link do rodapé |

Assim, a primeira mensagem que chega no seu WhatsApp já mostra **de onde o lead veio**. Para mudar o texto de qualquer uma, edite o objeto `messages` em `src/config/site.ts`.

---

## Depoimentos

A seção só aparece quando a lista `testimonials` em `src/lib/content.ts` tem itens. Enquanto estiver vazia, ela fica oculta.

```ts
export const testimonials: Testimonial[] = [
  {
    name: "Nome da cliente",
    context: "Maquiagem de formatura",
    text: "Texto real, do jeito que ela escreveu.",
  },
];
```

Use **apenas relatos reais**, com autorização de quem escreveu. Print de conversa autorizado é uma boa base. Depoimento inventado destrói a confiança e pode gerar problema.

---

## SEO

- Título, descrição e Open Graph configurados em `src/app/layout.tsx`, alimentados por `site.ts`
- FAQ publicado como dados estruturados `FAQPage` (pode gerar resultado expandido no Google)
- Idioma `pt-BR` e HTML semântico (`header`, `main`, `section`, `footer`, `h1` único)
- Depois de publicar, cadastre o site no **Google Search Console** e crie/atualize seu **Perfil de Empresa no Google**, que costuma trazer mais clientes locais do que o site sozinho

---

## Deploy

O caminho mais simples é a **Vercel**:

1. Suba o projeto para um repositório no GitHub
2. Em [vercel.com](https://vercel.com), clique em **Add New Project** e importe o repositório
3. Deixe as configurações padrão e clique em **Deploy**
4. Em **Settings > Domains**, conecte seu domínio próprio

Depois, atualize `site.url` em `src/config/site.ts` com o endereço final.

---

## Problemas comuns

**`Cannot find module '@tailwindcss/postcss'`**
As dependências não estão instaladas. Rode:
```bash
npm install -D @tailwindcss/postcss tailwindcss babel-plugin-react-compiler
```
Depois apague a pasta `.next` e rode `npm run dev` de novo.

**Troquei ou apaguei uma foto e a antiga continua aparecendo**
É cache do Next e do navegador. Pare o servidor (`Ctrl + C`), apague a pasta `.next` (`Remove-Item -Recurse -Force .next` no PowerShell), rode `npm run dev` e recarregue o navegador com `Ctrl + Shift + R`. Confira também se o nome no `content.ts` bate com o arquivo em `public/`.

**A imagem aparece quebrada**
Quase sempre é nome ou extensão errados. O nome no `content.ts` precisa ser idêntico ao arquivo (o Windows esconde a extensão por padrão). Se as fotos forem `.jpg` em vez de `.png`, mude só a constante `EXT`.

**Erro ao rodar o build sem internet**
O `next/font/google` baixa as fontes na compilação. Rode o build com conexão.

---

## Checklist antes de publicar

- [ ] Número de WhatsApp correto em `site.ts` (teste clicando nos botões)
- [ ] Instagram, cidade e URL do site preenchidos
- [ ] Todas as promessas do `content.ts` conferidas (teste, sinal, domicílio, pagamento)
- [ ] Fotos reais no Hero, galeria e Sobre, com `alt` preenchido
- [ ] Fotos redimensionadas, com marca d'água, e originais fora do `public`
- [ ] Autorização de uso de imagem das clientes que aparecem
- [ ] Cores ajustadas em `theme.css`
- [ ] Testado no celular (a maioria dos acessos vai vir de lá)
- [ ] `npm run lint`, `npm run typecheck` e `npm run build` sem erros
- [ ] Domínio conectado e `site.url` atualizado
- [ ] Site cadastrado no Google Search Console e Perfil de Empresa no Google criado

---

Mais detalhes sobre estratégia, estrutura de seções e a lógica de cada CTA estão em [`PLANEJAMENTO.md`](./PLANEJAMENTO.md).
