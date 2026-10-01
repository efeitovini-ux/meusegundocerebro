# PROMPTS-MIDIA — Meu Segundo Cérebro

Prompts prontos para gerar os assets visuais da landing page cerebro.prumo.agency.
**Um prompt por asset.** Cole um de cada vez, gere, escolha, e só depois passe para o próximo.

Os prompts estão em inglês porque o ChatGPT (imagem) e o Veo (Google Flow) respondem com mais
precisão assim. A descrição em português acima de cada um explica o que ele gera e onde entra.

---

## Regras que valem para todos

- **Paleta, só três cores:** gelo `#F1EEE8` · preto `#0C0A09` · vermelho `#E63329`.
  Em imagem e vídeo isso vira: ambiente escuro quase preto, luz quente avermelhada, superfícies claras cor de papel.
- **Luz é o que dá vida.** Escuro: luz quente subindo do canto inferior direito. Claro: luz de dia entrando de cima à esquerda.
- **Proibido:** granulado, ruído, textura de grão de filme, gradiente colorido (azul, roxo, verde, neon), texto ou logo dentro da imagem, tela com texto legível, pessoa olhando para a câmera com cara de banco de imagem.
- **Ninguém aparece sofrendo.** A cena mostra o dia de alguém ocupado, não alguém mal. Nada de cabeça entre as mãos, nada de cena dramática.
- O vermelho aparece **pouco**: um objeto, um reflexo, a luz. Nunca a cena inteira vermelha.

---

## Onde cada arquivo entra no site

| Arquivo | Onde | Gerado em |
|---|---|---|
| `public/imagens/hero-topo.webp` (1600×900) | pôster do vídeo do hero (aparece enquanto o vídeo carrega) | ChatGPT · prompt 1 |
| `public/midia/hero-loop-16x9.mp4` | fundo do hero no desktop | Flow/Veo · prompt 6 |
| `public/midia/hero-loop-9x16.mp4` | fundo do hero no celular | Flow/Veo · prompt 7 |
| `public/imagens/despejo-poster.webp` (1080×1350) | pôster do vídeo da seção 5 | ChatGPT · prompt 2 |
| `public/midia/despejo-loop-16x9.mp4` | seção 5, desktop | Flow/Veo · prompt 8 |
| `public/midia/despejo-loop-9x16.mp4` | seção 5, celular | Flow/Veo · prompt 9 |
| `public/imagens/vault-obsidian.webp` (1600×1000) | seção 4 | captura real + ChatGPT · prompt 3 |
| `public/imagens/vinicius.webp` (800×1000) | seção 7 | sua foto real + ChatGPT · prompt 4 |
| logo e favicon | rodapé, aba do navegador, compartilhamento | ChatGPT · prompts 10 e 11 |

Quando o arquivo existir no caminho certo, a página usa sozinha. Não precisa mexer em código.

---

## IMAGENS — ChatGPT

### 1. Hero — pôster da cena (16:9)

Mesa de trabalho à noite, sem ninguém, luz quente. É o primeiro frame do vídeo do hero, então gere esta imagem **antes** e use ela como referência no Flow (prompt 6), para o vídeo sair igual.

```
Cinematic wide photograph, 16:9, of a home office desk at night, seen from a low three-quarter angle.
On the desk: an open laptop with the screen softly glowing but showing no readable text, a paper notebook
closed with a pen on top, a half-full glass of water, a phone face down. Nobody in the frame.
Lighting: the room is almost black (#0C0A09). A single warm light source rises from the lower right corner,
casting a soft reddish-orange glow (#E63329 tones, low intensity) across the desk surface and up the wall.
Faint cool-neutral ambient light from the upper left keeps the shadows from being pure black.
Paper and desk surfaces read as warm off-white (#F1EEE8) where the light hits.
Mood: calm, late, focused. Shallow depth of field, anamorphic feel, clean digital image.
Leave the left half of the frame darker and emptier — a large headline will sit over it.
No text, no logos, no brand marks, no readable screen content, no film grain, no noise, no colored gradients.
```

### 2. Seção 5 — pôster do despejo mental (4:5)

Folhas e post-its espalhados que começam a se agrupar. Primeiro frame do vídeo da seção 5.

```
Top-down photograph, vertical 4:5, of a dark matte desk surface (#0C0A09) covered with loose handwritten notes,
small paper cards and torn notebook pages scattered at random angles — the moment right after someone emptied
everything out of their head onto the table. The handwriting is abstract scribbles, not readable words.
Warm reddish light (#E63329, subtle) enters from the lower right corner and fades across the papers;
the paper is warm off-white (#F1EEE8). The upper left is softly lit by neutral daylight.
Clean, sharp, editorial still life. Generous negative space at the edges.
No text, no logos, no readable words, no hands, no people, no film grain, no noise, no colored gradients.
```

### 3. Seção 4 — o vault no Obsidian

**Não gere a tela do Obsidian com IA.** Quem compra precisa ver o produto de verdade. Uma tela inventada promete coisa que não existe.

1. Abra o vault vazio no Obsidian, tema escuro, com a barra lateral mostrando o núcleo e as nove áreas.
2. Tire uma captura limpa (sem notificações, sem nada pessoal), em 1600×1000 ou maior.
3. Se quiser a captura dentro de um notebook, suba a imagem no ChatGPT com o prompt abaixo.

```
I am uploading a real screenshot of an app. Place this exact screenshot, unchanged and fully legible,
on the screen of a modern laptop sitting on a light, paper-colored desk (#F1EEE8).
Daylight enters from the upper left, soft and diffuse, casting a gentle shadow to the lower right.
Camera slightly above, three-quarter angle, 16:10 framing, laptop occupying about 75% of the width.
Do not alter, redraw, translate or invent any part of the screenshot. Do not add any other text or logo.
Clean editorial product photo, no film grain, no noise, no colored gradients.
```

### 4. Seção 7 — sua foto (4:5)

Use **uma foto real sua**. O prompt só ajusta luz e fundo para combinar com o site, sem mudar seu rosto.

```
I am uploading a real photo of myself. Keep my face, features, expression, hair and clothing exactly as they are —
do not beautify, reshape or replace anything about the person.
Change only the light and the background: a dark, nearly black room (#0C0A09), with a warm reddish key light
(#E63329 tones, soft and low intensity) coming from the lower right, and a faint neutral fill from the upper left.
Vertical 4:5 crop, chest-up, subject slightly right of center, looking slightly off-camera, relaxed and natural.
Realistic photograph, not illustrated. No text, no logos, no film grain, no noise, no colored gradients.
```

---

## VÍDEOS — Google Flow (Veo)

Todo vídeo do site é **sem som, em loop e decorativo**: movimento lento, nada que roube a leitura.
No Flow, use o modo **Frames to Video** com a imagem do prompt correspondente como primeiro frame, para o vídeo herdar a mesma luz.

### 6. Hero — loop horizontal (16:9, desktop)

Primeiro frame: a imagem do prompt 1.

```
Slow, seamless 8-second loop. Static locked-off camera with an extremely slow push-in (almost imperceptible).
A home office desk at night, nobody in frame. The only movement: the warm reddish light rising from the lower
right corner slowly breathes brighter and dimmer, like a lamp behind the frame; the laptop screen glow shifts
very slightly. Shadows stay deep, almost black (#0C0A09).
The left half of the frame stays dark and calm for a headline overlay.
Mood: quiet, late, focused. Cinematic, clean digital image.
No people, no text, no logos, no readable screen content, no film grain, no noise, no flicker, no camera shake,
no colored lights other than warm red-orange, no sound.
The last frame must match the first frame so the loop is seamless.
```

### 7. Hero — loop vertical (9:16, celular)

Mesma cena, enquadrada para o celular. O texto do hero fica na metade de baixo, então o interesse visual vai no terço de cima.

```
Slow, seamless 8-second loop, vertical 9:16. Static camera with an almost imperceptible push-in.
The same home office desk at night, framed vertically: the glowing laptop and the warm light source sit in the
upper third of the frame; the lower half is a dark, calm desk surface fading to near black (#0C0A09),
leaving room for text over it. Warm reddish light (#E63329 tones) rises from the lower right and slowly breathes.
Nobody in frame. Cinematic, clean digital image.
No people, no text, no logos, no readable screen content, no film grain, no noise, no flicker, no camera shake,
no sound. The last frame must match the first frame.
```

### 8. Seção 5 — despejo mental se organizando (16:9, desktop)

Primeiro frame: a imagem do prompt 2. Os papéis espalhados vão, devagar, se juntando em grupos arrumados.
É a promessa da seção em imagem: tudo que estava solto vira algo que dá pra enxergar.

```
Top-down, locked-off camera, 8 seconds. A dark matte desk (#0C0A09) covered with scattered loose paper notes
and small cards at random angles. Slowly and smoothly, as if moved by an invisible hand, the papers glide across
the surface and settle into a few neat, aligned groups — like columns on a board. Calm, satisfying, unhurried motion.
Paper is warm off-white (#F1EEE8); warm reddish light (#E63329, subtle) enters from the lower right,
neutral daylight from the upper left. Handwriting is abstract scribbles, never readable words.
No hands, no people, no text, no logos, no film grain, no noise, no camera shake, no sound.
```

### 9. Seção 5 — despejo mental (9:16, celular)

```
Top-down, locked-off camera, vertical 9:16, 8 seconds. A dark matte desk (#0C0A09) covered with scattered loose
paper notes and small cards. Slowly and smoothly the papers glide into a few neat vertical stacks, aligned and calm.
Paper is warm off-white (#F1EEE8); subtle warm reddish light (#E63329) from the lower right,
neutral daylight from the upper left. Handwriting is abstract scribbles, never readable words.
No hands, no people, no text, no logos, no film grain, no noise, no camera shake, no sound.
```

---

## MARCA — ChatGPT

> Gerador de imagem ainda erra letra. Use o resultado como **referência visual** e monte a versão final em
> vetor (Figma ou Illustrator) com a fonte **Anton**, gratuita no Google Fonts. Assim a letra fica perfeita e o
> arquivo escala para qualquer tamanho.

### 10. Logo — assinatura "Meu Segundo Cérebro"

```
Minimal wordmark logo for a digital product called "Meu Segundo Cérebro".
Typeface: a tall, heavy, condensed sans-serif in all caps, in the style of Anton.
Layout: "MEU SEGUNDO" on the first line and "CÉREBRO" on the second line, tight leading, left aligned.
Signature detail: the first letter "M" is red (#E63329), noticeably larger than the other letters and with a crisp
offset drop shadow in black, slightly down and to the right. All other letters are off-white (#F1EEE8).
Background: solid near-black (#0C0A09) — for the logo file only, flat background is fine.
Flat vector look, no gradients, no 3D, no icons, no brain illustration, no extra words, no tagline.
Spell exactly: M E U  S E G U N D O  C É R E B R O, with the acute accent on the first E of CÉREBRO.
```

### 11. Favicon — só a inicial

Precisa ser legível em 16×16 pixels, então é só a letra.

```
App icon / favicon, square 1024×1024. A single capital letter "M" in a tall, heavy, condensed sans-serif
(Anton style), red (#E63329), centered, filling about 70% of the height, with a short crisp black offset
drop shadow down and to the right. Background: near-black (#0C0A09) rounded square with soft corners.
Flat, bold, must remain clearly readable when shrunk to 16×16 pixels.
No other letters, no gradients, no texture, no 3D, no border, no glow.
```

Depois de gerar, exporte e salve em `public/`:
`favicon-32.png` (32×32), `apple-touch-icon.png` (180×180), `icon-512.png` (512×512).
Hoje o site usa `public/favicon.svg`, um M vermelho sobre preto feito em código. Ele continua servindo como reserva.

---

## Antes de subir os arquivos

**Imagens → WebP** (qualidade 80 já fica ótimo):

```
cwebp -q 80 hero-topo.png -o public/imagens/hero-topo.webp
```

Ou arraste no squoosh.app e escolha WebP.

**Vídeos → MP4 leve, sem áudio** (mire em até 2 MB cada, senão o site fica lento no celular):

```
ffmpeg -i entrada.mp4 -an -c:v libx264 -crf 28 -preset slow -pix_fmt yuv420p -movflags +faststart -vf "scale=1280:-2" public/midia/hero-loop-16x9.mp4
ffmpeg -i entrada.mp4 -an -c:v libx264 -crf 28 -preset slow -pix_fmt yuv420p -movflags +faststart -vf "scale=720:-2"  public/midia/hero-loop-9x16.mp4
```

Quem usa o celular com "reduzir movimento" ligado vê só o pôster parado, sem vídeo. Por isso o pôster também precisa ser bom.

---

*Documento preparado pela Agência Prumo para handoff de desenvolvimento.*
