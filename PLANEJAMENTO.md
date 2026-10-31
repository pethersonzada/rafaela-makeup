# Planejamento: rafaela.makeupbeauty

Objetivo da página: gerar leads via WhatsApp e agendar atendimentos.
Tom de voz: profissional, jovem e sofisticado. Frases curtas, calor humano, zero jargão.

## 1. Hero

- **Eyebrow:** Maquiadora profissional
- **Título:** Maquiagem que realça quem você já é.
- **Subtítulo:** Pele impecável, olhar marcante e aquela sensação de se olhar no espelho e pensar: sou eu, só que no meu melhor dia. Chame no WhatsApp e garanta seu horário.
- **CTA principal:** Quero agendar meu horário (WhatsApp)
- **CTA secundário:** Ver meus trabalhos (âncora para o portfólio)
- **Microtexto:** Resposta direta pelo WhatsApp, sem formulário e sem enrolação.

Alternativas de título para teste A/B:
- "Seu melhor dia merece o seu melhor look."
- "Chegue linda. Saia inesquecível."

## 2. Estrutura de seções (topo ao rodapé)

1. **Header fixo:** logo em texto, links âncora, botão "Agendar"
2. **Hero:** promessa + CTA + foto vertical de impacto
3. **Faixa de confiança:** 4 diferenciais em uma linha
4. **Serviços:** 6 cards, cada um com CTA próprio
5. **Portfólio:** grade de fotos + CTA "Quero um look assim" + link para o Instagram
6. **Sobre:** foto da profissional + história curta + CTA
7. **Como funciona:** 4 passos até o horário reservado
8. **Depoimentos:** só aparece com relatos reais (lista vazia = seção oculta)
9. **FAQ:** 9 perguntas que removem objeções + CTA de dúvida
10. **CTA final:** fundo escuro, urgência honesta, botão grande
11. **Rodapé:** contato, Instagram, cidade
12. **Botão flutuante de WhatsApp:** sempre visível, principalmente no celular

Lógica: promessa, prova (portfólio), confiança (sobre e processo), remoção de objeções (FAQ), fechamento.

## 3. Copywriting

Todo o texto está em `src/lib/content.ts`. Resumo da narrativa:

- **Serviços:** "Um look certo para cada momento". Cada card fala da ocasião, não da técnica.
- **Portfólio:** "Resultados que falam por si".
- **Sobre:** "Oi, eu sou a Rafaela." Fala de escuta, naturalidade e intenção, não de currículo.
- **Como funciona:** "Agendar é simples e rápido", reduz o medo de burocracia.
- **CTA final:** "Seu próximo look começa numa mensagem."

## 4. FAQ

Todas as respostas curtas estão em `src/lib/content.ts` (e saem também como dados estruturados FAQPage para o Google). Perguntas: como agendar, antecedência, sinal, duração, teste para noivas, durabilidade, foto de referência, pele sensível, formas de pagamento.

## 5. CTAs estratégicos

| Onde | Texto | Por quê |
|---|---|---|
| Header | Agendar | Sempre à mão, discreto |
| Hero | Quero agendar meu horário | Principal ponto de conversão |
| Cada serviço | Quero esse look / Quero falar sobre meu casamento | CTA específico por intenção |
| Portfólio | Quero um look assim | Pega quem acabou de se encantar |
| Sobre | Conversar com a Rafaela | Humaniza o contato |
| FAQ | Tirar dúvida no WhatsApp | Captura o indeciso |
| CTA final | Garantir meu horário no WhatsApp | Fechamento |
| Flutuante | Agendar agora | Presença constante no mobile |

Cada botão abre o WhatsApp com mensagem pré-preenchida diferente (veja `src/config/site.ts`). Assim você vê de onde o lead veio pela primeira mensagem.

## 6. Diretrizes visuais

- **Cores:** todas em `src/styles/theme.css`. Padrão: rosé (#b76e79), dourado suave (#b8934f), fundo creme (#fff8f5), escuro vinho-café (#2a1f1f).
- **Tipografia:** Playfair Display nos títulos (sofisticação) e Inter no texto (leitura limpa).
- **Fotos:** vertical 4:5 no Hero e Sobre, 3:4 na galeria. Luz natural, pele real, pouco filtro.
- **Mobile first:** botão grande (mín. 48px), botão flutuante, menu simples.
