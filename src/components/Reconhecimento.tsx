import { useState } from 'react'
import { MIDIAS } from '../data/conteudo'
import { MidiaOpcional } from './ui/MidiaOpcional'
import { Revelar } from './ui/Revelar'
import { Secao, TITULO_SECAO } from './ui/Secao'

const DIA = [
  { midia: MIDIAS.diaManha, legenda: 'Acorda cedo.' },
  { midia: MIDIAS.diaNoite, legenda: 'Responde mensagem à noite.' },
  { midia: MIDIAS.diaFimDeSemana, legenda: 'Usa o fim de semana.' },
]

/** Três cenas do dia, em foto ou vídeo curto. Some inteiro se nenhuma existir ainda. */
function ODia() {
  const [faltando, setFaltando] = useState<number[]>([])
  const esconder = (i: number) => !import.meta.env.DEV && faltando.includes(i)
  if (DIA.every((_, i) => esconder(i))) return null

  return (
    <ul className="mt-16 grid grid-cols-3 gap-2 sm:gap-5 md:mt-20">
      {DIA.map(({ midia, legenda }, i) => (
        <Revelar como="li" atraso={i * 0.1} key={legenda} className={esconder(i) ? 'hidden' : undefined}>
          <figure>
            <MidiaOpcional {...midia} aoFaltar={() => setFaltando((f) => [...f, i])} className="shadow-[0_30px_60px_-35px_rgb(14_23_21/0.45)]" />
            <figcaption className="mt-3 font-mono text-xs text-suave-claro sm:text-sm">{legenda}</figcaption>
          </figure>
        </Revelar>
      ))}
    </ul>
  )
}

export function Reconhecimento() {
  return (
    <Secao id="reconhecimento" numero="02" tom="claro">
      <div className="grid items-center gap-14 md:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] md:gap-16">
        <div>
          <Revelar>
            <h2 className={TITULO_SECAO}>Você trabalha mais que a maioria das pessoas que conhece.</h2>
          </Revelar>

          <div className="mt-10 max-w-xl space-y-6 text-lg leading-relaxed text-suave-claro">
            <Revelar>
              <p>
                Acorda cedo. Responde mensagem à noite. Usa o fim de semana.
                <br />
                E mesmo assim sente que não sai do lugar.
              </p>
            </Revelar>
            <Revelar>
              <p className="text-xl font-semibold text-tinta sm:text-2xl">Disciplina não é o seu gargalo.</p>
            </Revelar>
            <Revelar>
              <p>
                O gargalo é que toda vez que você senta pra fazer alguma coisa, você gasta os primeiros
                vinte minutos reconstruindo onde parou.
              </p>
            </Revelar>
          </div>
        </div>

        <Revelar atraso={0.15}>
          <figure className="relative mx-auto max-w-sm -rotate-2 md:max-w-none">
            {/* Fita adesiva segurando o post-it */}
            <span
              aria-hidden="true"
              className="absolute -top-3 left-1/2 z-10 h-7 w-28 -translate-x-1/2 rotate-3 rounded-[2px] bg-white/60 shadow-sm backdrop-blur-[1px]"
            />
            <blockquote className="postit rounded-sm px-8 pt-12 pb-10 text-[clamp(1.9rem,6.5vw,2.6rem)] leading-[1.15] font-semibold">
              Quem toca tudo sozinho não perde tempo trabalhando. Perde tempo lembrando.
            </blockquote>
          </figure>
        </Revelar>
      </div>

      <ODia />
    </Secao>
  )
}
