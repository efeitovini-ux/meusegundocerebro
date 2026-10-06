# PROMPTS-MIDIA — Meu Segundo Cérebro

Prompts prontos para gerar os assets visuais da landing page cerebro.prumo.agency, na identidade nova:
**neurônios + post-its + visual limpo**.
**Um prompt por asset.** Cole um de cada vez, gere, escolha, e só depois passe para o próximo.

Os prompts estão em inglês porque o ChatGPT (imagem) e o Veo (Google Flow) respondem com mais
precisão assim. A explicação em português acima de cada um diz o que ele gera e onde entra.

---

## A identidade em uma tela

| Nome | Hex | Onde |
|---|---|---|
| Tinta | `#0E1715` | fundo escuro (hero, "10 minutos", card de preço, rodapé) e texto nas seções claras |
| Névoa | `#F5F7F5` | fundo das seções claras, a maior parte do site |
| Céu | `#DDEBEF` | luz suave num canto das seções claras |
| Sálvia | `#E3EEE6` | luz suave no outro canto |
| Menta | `#5ED3B3` | destaque: neurônios, botão, números |
| Menta escura | `#1D7A62` | menta sobre fundo claro (texto e ícone) |
| Post-it | `#F7DC85` | só nos post-its |

Fontes: **Instrument Sans** (títulos e texto), **Instrument Serif itálico** (frases de remate),
**Caveat** (letra de mão dos post-its), **JetBrains Mono** (números e metadados). Todas no Google Fonts.

**A ideia:** a cabeça cheia de coisa solta (post-its) que vira uma rede ligada a um núcleo (neurônios).
O que estava solto vira conexão, e conexão vira clareza.

### Regras que valem para todos os prompts

- **Proibido:** granulado, ruído, textura de filme, neon, roxo, azul elétrico, gradiente arco-íris, texto ou logo dentro da imagem, tela com texto legível, foto com cara de banco de imagem.
- **Ninguém aparece sofrendo.** Nada de cabeça entre as mãos ou cena dramática. A imagem mostra clareza, não a dor.
- **O menta aparece pouco:** uma luz, um reflexo, uma linha. O amarelo, só em post-it.

---

## Mapa: o que entra em cada lugar da página

As animações (a rede do topo e os post-its dos "10 minutos") já estão feitas em código.
As fotos e vídeos abaixo **incrementam** a página. Os espaços já estão prontos no código:
quando o arquivo existe, aparece; enquanto não existe, o espaço some e a página continua inteira.

| # | Arquivo | Seção | Tipo | Situação |
|---|---|---|---|---|
| 1 | `imagens/vault-obsidian.webp` | 4 · O que vem dentro | captura real | **obrigatório** |
| 2 | `imagens/vinicius.webp` | 7 · Quem fez isso | sua foto editada | **obrigatório** · já feita, falta o arquivo |
| 3 | `imagens/dia-manha.webp` + `midia/dia-manha.mp4` | 2 · Reconhecimento | foto + vídeo | ✅ no site |
| 4 | `imagens/dia-noite.webp` + `midia/dia-noite.mp4` | 2 · Reconhecimento | foto + vídeo | ✅ no site |
| 5 | `imagens/dia-fim-de-semana.webp` + `midia/dia-fim-de-semana.mp4` | 2 · Reconhecimento | foto + vídeo | ✅ no site |
| 6 | `imagens/ferramentas.webp` | 3 · A virada | foto | ✅ no site |
| 7 | `imagens/produto.webp` + `midia/produto.mp4` | 8 · Preço, ao lado do card | foto + vídeo | ✅ no site |

**Como os incrementos funcionam na página:**
- **3, 4 e 5:** as três cenas do "Acorda cedo. Responde mensagem à noite. Usa o fim de semana." viram uma faixa de três quadros verticais abaixo do texto da seção 2, cada um com a frase embaixo.
- **6:** a mesa com tudo que já foi tentado (agenda, planilha, lista) entra larga, logo abaixo do título "O que mudou não foi eu ficar mais disciplinado."
- **7:** o produto "na mão" entra ao lado do card de R$ 47. Sem ele, o card fica centralizado como hoje.

**O caminho de cada foto e vídeo:**
1. Gere a **foto** no ChatGPT.
2. Suba essa foto no Flow em **Frames to Video** com o prompt do vídeo correspondente. Assim o vídeo sai com a mesma luz e a mesma cena.
3. Mande os dois aqui (PNG, JPG ou MP4, do jeito que saírem). Eu converto, deixo leve e coloco no lugar.

A foto sempre vai junto do vídeo. Ela aparece enquanto o vídeo carrega e para quem desligou animações no celular.

**Opcional, para a seção 4:** além da captura parada, uma **gravação de tela de 10 a 20 segundos** do vault em uso
(abrir uma área, colar o prompt de despejo mental, ver o resultado). Sem som, sem nada pessoal.
Grave com o Gravador do Windows (Win+Alt+R) ou o QuickTime no Mac. É o vídeo que mais vende, porque mostra o produto de verdade.

### O estilo de todas as fotos

Toda foto da página segue a mesma receita, para parecer um ensaio só e não colagem de banco de imagem:
luz natural suave, ambiente claro e limpo, tons de névoa, céu e sálvia, um toque de amarelo post-it,
profundidade de campo rasa, nenhum rosto, nenhuma tela com conteúdo legível.
A única cena escura é a da noite, e ela usa a tinta verde-escura do site.

---

## IMAGENS — ChatGPT

### 1. Seção 4 — o vault no Obsidian (16:10)

**Não gere a tela do Obsidian com IA.** Quem compra precisa ver o produto de verdade. Uma tela inventada promete coisa que não existe.

1. Abra o vault vazio no Obsidian, tema escuro, com a barra lateral mostrando o núcleo e as nove áreas.
2. Tire uma captura limpa (sem notificações, sem nada pessoal), em 1600×1000 ou maior.
3. Para colocar a captura dentro de um notebook, suba a imagem no ChatGPT com este prompt:

```
I am uploading a real screenshot of an app. Place this exact screenshot, unchanged and fully legible,
on the screen of a modern laptop resting on a clean, very light desk (#F5F7F5).
Soft daylight from the upper right with a faint pale-blue tint (#DDEBEF), a gentle sage-green tint (#E3EEE6)
in the lower left, soft natural shadow under the laptop.
Next to the laptop, two or three small yellow sticky notes (#F7DC85), blank or with abstract pen scribbles,
never readable words. Camera slightly above, three-quarter angle, 16:10 framing, laptop about 70% of the width.
Do not alter, redraw, translate or invent any part of the screenshot. Do not add any other text or logo.
Clean, airy editorial product photo. No film grain, no noise, no neon, no purple, no rainbow gradients.
```

### 2. Seção 7 — sua foto

**Já feita** (a da revista com o neurônio na capa). Só falta mandar o arquivo numa mensagem nova,
de preferência na resolução que o ChatGPT gerou, não um print de tela.

### 3. Seção 2 — "Acorda cedo." (retrato 2:3)

```
Portrait photograph, 2:3 vertical (1024x1536). Early morning, the very first light of the day.
Close still life on a clean white desk next to a window: a ceramic mug of black coffee with a thin wisp of steam,
a smartphone lying face up whose screen gives only a soft blank glow (no readable content, no icons),
and a closed notebook with one small yellow sticky note (#F7DC85) on its cover.
A single hand and wrist enter from the edge of the frame, reaching for the mug — no face, no body.
Soft, cool morning daylight from the upper left; shadows have a pale-blue tint (#DDEBEF); the overall image is
light and fresh, mostly off-white (#F5F7F5). Shallow depth of field, editorial still-life style.
No text, no logos, no brands, no readable screens, no film grain, no noise, no neon, no colored gradients.
```

### 4. Seção 2 — "Responde mensagem à noite." (retrato 2:3)

```
Portrait photograph, 2:3 vertical (1024x1536). Night, in a dark, calm bedroom.
A single hand holds a smartphone above white bed sheets; the screen faces away from the camera so no content
is visible, and its soft glow lights the fingers and the folds of the sheets.
The darkness is a deep green-black (#0E1715), never pure black; the screen glow is soft white with a very faint
mint tint (#5ED3B3). No face, no body beyond the hand and wrist.
Mood: quiet and late, not dramatic, not sad. Shallow depth of field, cinematic but clean.
No text, no logos, no brands, no readable screens, no film grain, no noise, no neon, no colored gradients.
```

### 5. Seção 2 — "Usa o fim de semana." (retrato 2:3)

```
Portrait photograph, 2:3 vertical (1024x1536). Saturday late morning in a bright, airy living room.
A laptop sits open on a light linen sofa cushion, screen angled away so only its edge and a faint glow are visible.
Beside it: a cup of tea on a small tray, a soft throw blanket, and one yellow sticky note (#F7DC85) stuck on the
laptop's edge. Warm, gentle sunlight comes through a window and casts soft shadow lines across the sofa.
Tones: off-white (#F5F7F5) with soft sage-green (#E3EEE6) in the shadows. No people.
Shallow depth of field, calm editorial interior style.
No text, no logos, no brands, no readable screens, no film grain, no noise, no neon, no colored gradients.
```

### 6. Seção 3 — tudo que já foi tentado (paisagem 3:2)

A seção conta "dez anos tentando: Trello, planilha, lista de tarefas, agenda de papel".
A foto mostra esses restos com calma: tudo parado, nada jogado.

```
Landscape photograph, 3:2 horizontal (1536x1024), top-down flat lay on a clean light desk (#F5F7F5).
Neatly arranged but clearly no longer in use: a closed paper planner with an elastic band, a printed spreadsheet
sheet showing only an empty grid, a to-do list notepad with a few abstract scribbled lines crossed out,
three or four old yellow sticky notes (#F7DC85) with slightly curled edges, a smartphone lying face down, a pen.
Generous empty space on the right side of the frame.
Soft daylight from the upper right with a pale-blue tint (#DDEBEF); a faint sage-green tint (#E3EEE6) in the shadows.
Mood: quiet, a little nostalgic — "everything I already tried" — never messy or dramatic.
All writing is abstract scribbles; no readable words, numbers or brand names.
No people, no text, no logos, no film grain, no noise, no neon, no colored gradients.
```

### 7. Seção 8 — o produto na mão (paisagem 3:2)

Para a tela do notebook, **suba junto o print do seu grafo do Obsidian** (o mesmo que você me mandou)
e acrescente no fim do prompt: *"Use the uploaded graph image on the laptop screen."*

```
Landscape product photograph, 3:2 horizontal (1536x1024), on a clean, very light desk (#F5F7F5).
A modern laptop at a three-quarter angle; its screen shows a dark green-black (#0E1715) graph view:
hundreds of small white dots linked by thin mint-green lines (#5ED3B3) into a few dense clusters, like a knowledge
graph — no text, no menus, no labels.
In front of the laptop, a thin printed A5 guide booklet lying at an angle, with a deep green-black cover
(#0E1715) showing only a small mint neuron symbol (one mint dot linked to three white dots) — no text on the cover.
Two yellow sticky notes (#F7DC85) beside it, blank.
Soft daylight from the upper left; a pale-blue glow (#DDEBEF) in the upper right and a sage-green glow (#E3EEE6)
in the lower left. Premium but simple, airy editorial product shot, shallow depth of field.
No people, no text, no logos, no brands, no film grain, no noise, no neon, no colored gradients.
```

---

## VÍDEOS DA PÁGINA — Google Flow (Veo)

Todos usam **Frames to Video**, com a foto correspondente como primeiro quadro.
Todos são **sem som, 8 segundos, câmera parada e movimento mínimo**: é um detalhe vivo, não um filme.
Peça sempre que o último quadro fique igual ao primeiro, para o loop não "pular".

### 8. Vídeo da manhã (9:16) — primeiro quadro: foto 3

```
Vertical 9:16, 8 seconds, seamless loop, locked-off camera, no camera shake, no cuts.
Keep the scene exactly as in the first frame. Only subtle motion: a thin wisp of steam rises from the coffee mug;
the hand slowly lifts the mug a few centimeters and sets it back down; the phone screen softly brightens once,
like a silent notification, with no readable content; the morning light grows very slightly brighter.
Calm, quiet, natural. The last frame must match the first frame.
No text, no logos, no new objects, no people besides the hand, no film grain, no noise, no flicker, no sound.
```

### 9. Vídeo da noite (9:16) — primeiro quadro: foto 4

```
Vertical 9:16, 8 seconds, seamless loop, locked-off camera, no camera shake, no cuts.
Keep the scene exactly as in the first frame. Only subtle motion: the thumb scrolls gently on the phone,
the screen glow shifts softly on the fingers and sheets as if the content changes (content never visible),
the sheets move very slightly with breathing. Darkness stays deep green-black.
Calm, late, not dramatic. The last frame must match the first frame.
No text, no logos, no new objects, no faces, no film grain, no noise, no flicker, no sound.
```

### 10. Vídeo do fim de semana (9:16) — primeiro quadro: foto 5

```
Vertical 9:16, 8 seconds, seamless loop, locked-off camera, no camera shake, no cuts.
Keep the scene exactly as in the first frame. Only subtle motion: the sunlight shadow lines drift slowly across
the sofa, a sheer curtain sways gently out of focus, a faint wisp of steam rises from the tea,
the sticky note's edge lifts slightly in a soft breeze.
Peaceful Saturday mood. The last frame must match the first frame.
No people, no text, no logos, no new objects, no film grain, no noise, no flicker, no sound.
```

### 11. Vídeo do produto (16:9) — primeiro quadro: foto 7

```
Horizontal 16:9, 8 seconds, seamless loop, very slow push-in (almost imperceptible), no camera shake, no cuts.
Keep the scene exactly as in the first frame. Only subtle motion: on the laptop screen, small mint-green pulses
travel along the lines of the graph from node to node, and a few nodes glow softly brighter and dim again,
like neurons firing; the sticky note's edge lifts slightly; daylight shifts very gently.
The last frame must match the first frame.
No people, no text, no logos, no new objects, no readable screen content, no film grain, no noise, no flicker, no sound.
```

---

## MARCA — ChatGPT

> Gerador de imagem ainda erra letra. Use o resultado como **referência visual** e monte a versão final em
> vetor (Figma ou Illustrator) com a fonte **Instrument Sans SemiBold**. Assim a letra fica perfeita e o
> arquivo escala para qualquer tamanho. Me mande o SVG final que eu troco no site.

### 12. Logo — símbolo + nome

```
Minimal logo for a digital product called "Meu Segundo Cérebro".
Symbol on the left: a tiny neuron made of one mint-green core circle (#5ED3B3) connected by three thin
mint lines to three small off-white dots (#E8EFEC), like a node in a knowledge graph. Simple, geometric, balanced.
Wordmark on the right, on one line: "Meu Segundo Cérebro" in a clean, modern grotesque sans-serif,
semi-bold, tight letter spacing, sentence case, off-white (#E8EFEC).
Background: deep green-black (#0E1715) — for the logo file only, flat background is fine.
Flat vector look, no gradients, no 3D, no brain illustration, no extra words, no tagline.
Spell exactly: Meu Segundo Cérebro, with the acute accent on the first e of Cérebro.
```

### 13. Favicon — só o neurônio

Precisa ser legível em 16×16 pixels, então é só o símbolo.

```
App icon / favicon, square 1024×1024. Deep green-black (#0E1715) rounded square with soft corners.
In the center: one large mint-green circle (#5ED3B3) connected by three short, thick mint lines to three
smaller off-white dots (#E8EFEC) at upper-left, upper-right and lower-right, like a neuron.
Bold and simple, must remain clearly readable when shrunk to 16×16 pixels.
No letters, no gradients, no texture, no 3D, no border, no glow.
```

✅ Feito: o símbolo em Y do logo gerado foi redesenhado em vetor (`src/components/ui/Marca.tsx` e `public/favicon.svg`),
com `favicon-32.png`, `apple-touch-icon.png` e `icon-512.png` gerados a partir dele.

---

## VÍDEO PARA AS REDES — Google Flow (Veo)

Este não entra na página: serve para **divulgar** o produto no Instagram,
com a mesma linguagem visual da página: post-its soltos que viram rede.

### 14. Reels / Stories — do solto à rede (9:16)

```
Vertical 9:16, 8 seconds, top-down locked-off camera, no camera shake.
A very clean, light desk surface (#F5F7F5) with a soft pale-blue glow (#DDEBEF) in one corner.
Start: a dozen yellow sticky notes (#F7DC85) scattered at random angles, each with abstract pen scribbles
(never readable words). Slowly and smoothly, as if moved by an invisible hand, the notes glide and straighten
into a neat grid of three columns. Then thin mint-green lines (#5ED3B3) draw themselves between the notes,
connecting them like neurons, and a small mint glow pulses at the center.
Calm, satisfying, unhurried motion. Clean digital image.
No hands, no people, no text, no logos, no film grain, no noise, no neon, no sound.
```

Para subir no Instagram, deixe em MP4 até 1080×1920. Se quiser texto por cima, coloque no editor do
próprio Instagram ou no CapCut, nunca peça para a IA escrever.

---

## Antes de subir os arquivos

Se preferir não converter nada, mande do jeito que saiu que eu faço. Se quiser fazer você mesmo:

**Imagens → WebP** (qualidade 80 já fica ótimo), ou arraste no squoosh.app e escolha WebP:

```
cwebp -q 80 manha.png -o public/imagens/dia-manha.webp
```

**Vídeos → MP4 leve, sem áudio** (até cerca de 1,5 MB cada, para não pesar no celular):

```
ffmpeg -i manha.mp4 -an -c:v libx264 -crf 28 -preset slow -pix_fmt yuv420p -movflags +faststart -vf "scale=720:-2" public/midia/dia-manha.mp4
ffmpeg -i produto.mp4 -an -c:v libx264 -crf 28 -preset slow -pix_fmt yuv420p -movflags +faststart -vf "scale=1280:-2" public/midia/produto.mp4
```

---

*Documento preparado pela Agência Prumo para handoff de desenvolvimento.*
