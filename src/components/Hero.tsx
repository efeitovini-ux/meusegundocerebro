import { forwardRef } from 'react'
import { m, useReducedMotion } from 'framer-motion'
import { PRECO } from '../data/conteudo'
import { BotaoCompra } from './ui/BotaoCompra'
import { Marca } from './ui/Marca'
import { Rede } from './ui/Rede'

export const Hero = forwardRef<HTMLElement>(function Hero(_, ref) {
  const reduzir = useReducedMotion()
  const entrada = (atraso: number) =>
    reduzir
      ? {}
      : {
          initial: { opacity: 0, y: 18 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.8, delay: atraso, ease: [0.22, 1, 0.36, 1] as const },
        }

  return (
    <header ref={ref} id="topo" className="fundo-escuro px-4 pt-8 pb-20 sm:px-6 md:pb-28">
      <div className="mx-auto w-full max-w-6xl">
        <Marca className="text-base text-[#e8efec]" />

        <div className="mt-14 grid items-center gap-14 md:mt-20 md:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] md:gap-10">
          <div>
            <m.p {...entrada(0)} className="font-serif text-xl text-suave-escuro italic sm:text-2xl">
              Antes de qualquer app, método ou disciplina
            </m.p>

            <m.h1
              {...entrada(0.1)}
              className="mt-4 font-sans text-[clamp(2.75rem,10.5vw,4.75rem)] leading-[1.02] font-semibold tracking-[-0.04em] text-balance text-[#e8efec]"
            >
              Você já tentou se organizar.{' '}
              <span className="text-menta">Mais de uma vez.</span>
            </m.h1>

            <m.p {...entrada(0.25)} className="mt-6 max-w-xl text-lg leading-relaxed text-suave-escuro">
              Agenda, lista, aplicativo de tarefa. Todos abandonados em três semanas.
              <br />
              O problema nunca foi disciplina.
            </m.p>

            <m.div {...entrada(0.4)} className="mt-10 flex flex-col items-start gap-3">
              <BotaoCompra>{`Quero começar — ${PRECO}`}</BotaoCompra>
              <p className="font-mono text-sm text-suave-escuro">pagamento único · download imediato</p>
            </m.div>
          </div>

          <div>
            <Rede />
          </div>
        </div>
      </div>
    </header>
  )
})
