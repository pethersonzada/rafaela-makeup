# rafaela.makeupbeauty

Next.js (App Router) + TypeScript + Tailwind CSS v4 + React Compiler + Cache Components + ESLint.

## Rodar

```bash
npm install
npm run dev        # http://localhost:3000
npm run lint
npm run typecheck
npm run build
```

Requer Node 20.9 ou superior.

## O que trocar antes de publicar

1. `src/config/site.ts`: número do WhatsApp, Instagram, cidade e URL do site
2. `src/styles/theme.css`: cores (é só mudar os hexadecimais)
3. `src/lib/content.ts`: textos, serviços, FAQ e a lista de depoimentos
4. Fotos: coloque os arquivos em `public/` e preencha o campo `src` na galeria, `about.photo` e troque o bloco do Hero por `next/image`

## Depoimentos

A seção só aparece quando `testimonials` tiver itens. Use apenas relatos reais, com autorização de quem escreveu (print de conversa autorizado serve de base).

## Deploy

Vercel é o caminho mais simples (`vercel` na pasta do projeto).
