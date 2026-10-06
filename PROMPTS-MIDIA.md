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

## O que a página já tem e o que falta

A página nova **não depende mais de vídeo**: a rede neural do hero e os post-its que se organizam
na seção "10 minutos" são animações feitas em código, leves e nítidas em qualquer tela.
Faltam só três arquivos reais:

| Arquivo | Onde | Como fazer |
|---|---|---|
| `public/imagens/vault-obsidian.webp` (1600×1000) | seção 4, "O que vem dentro" | captura real + prompt 1 |
| `public/imagens/vinicius.webp` (800×1000) | seção 7, "Quem fez isso" | sua foto real + prompt 2 |
| logo e favicon definitivos | topo, rodapé, card de preço, aba do navegador | prompts 3 e 4, depois vetorizar |

Quando o arquivo existir no caminho certo, a página usa sozinha, sem mexer em código.
Ou mais simples: **mande os arquivos aqui na conversa** (PNG, JPG ou MP4, do jeito que saírem) e eu converto, otimizo e coloco no lugar.

**Opcional, para a seção 4:** em vez da captura parada, uma **gravação de tela de 10 a 20 segundos** do vault em uso
(abrir uma área, colar o prompt de despejo mental, ver o resultado). Sem som, sem nada pessoal.
Grave com o Gravador do Windows (Win+Alt+R), a Barra de Jogos ou o QuickTime no Mac. É o vídeo que mais vende, porque mostra o produto de verdade.
Hoje o símbolo (o neurônio menta) já está desenhado em código em `src/components/ui/Marca.tsx` e em `public/favicon.svg`.

---

## IMAGENS — ChatGPT

### 1. Seção 4 — o vault no Obsidian (16:10)

**Não gere a tela do Obsidian com IA.** Quem compra precisa ver o produto de verdade. Uma tela inventada promete coisa que não existe.

1. Abra o vault vazio no Obsidian, tema escuro, com a barra lateral mostrando o núcleo e as nove áreas. Se der, abra também a **visão em grafo**: ela é literalmente a rede de neurônios da página.
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

### 2. Seção 7 — sua foto (4:5)

Use **uma foto real sua**. O prompt só ajusta luz e fundo para combinar com o site, sem mudar seu rosto.
A seção é clara, então a foto também é.

```
I am uploading a real photo of myself. Keep my face, features, expression, hair and clothing exactly as they are —
do not beautify, reshape or replace anything about the person.
Change only the light and the background: a clean, very light background (#F5F7F5) with a soft pale-blue glow
(#DDEBEF) in the upper right and a faint sage-green glow (#E3EEE6) in the lower left. Soft, even daylight on the face.
Optional: one yellow sticky note (#F7DC85) slightly out of focus on the wall behind, blank, no writing.
Vertical 4:5 crop, chest-up, subject slightly right of center, looking slightly off-camera, relaxed and natural.
Realistic photograph, not illustrated. No text, no logos, no film grain, no noise, no neon, no colored gradients.
```

---

## MARCA — ChatGPT

> Gerador de imagem ainda erra letra. Use o resultado como **referência visual** e monte a versão final em
> vetor (Figma ou Illustrator) com a fonte **Instrument Sans SemiBold**. Assim a letra fica perfeita e o
> arquivo escala para qualquer tamanho. Me mande o SVG final que eu troco no site.

### 3. Logo — símbolo + nome

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

### 4. Favicon — só o neurônio

Precisa ser legível em 16×16 pixels, então é só o símbolo.

```
App icon / favicon, square 1024×1024. Deep green-black (#0E1715) rounded square with soft corners.
In the center: one large mint-green circle (#5ED3B3) connected by three short, thick mint lines to three
smaller off-white dots (#E8EFEC) at upper-left, upper-right and lower-right, like a neuron.
Bold and simple, must remain clearly readable when shrunk to 16×16 pixels.
No letters, no gradients, no texture, no 3D, no border, no glow.
```

Depois de gerar e vetorizar, salve em `public/`:
`favicon-32.png` (32×32), `apple-touch-icon.png` (180×180), `icon-512.png` (512×512).

---

## VÍDEO — Google Flow (Veo), para as redes, não para a página

A página já se mexe sozinha. Este vídeo serve para **divulgar** o produto no Instagram,
com a mesma linguagem visual da página: post-its soltos que viram rede.

### 5. Reels / Stories — do solto à rede (9:16)

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

**Imagens → WebP** (qualidade 80 já fica ótimo):

```
cwebp -q 80 vault.png -o public/imagens/vault-obsidian.webp
cwebp -q 80 vinicius.png -o public/imagens/vinicius.webp
```

Ou arraste no squoosh.app e escolha WebP.

---

*Documento preparado pela Agência Prumo para handoff de desenvolvimento.*
