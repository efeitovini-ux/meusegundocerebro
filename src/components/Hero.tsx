import { forwardRef } from 'react'
import { m, useReducedMotion } from 'framer-motion'
import { PRECO, VIDEOS } from '../data/conteudo'
import { BotaoCompra } from './ui/BotaoCompra'
import { Inicial } from './ui/Inicial'
import { VideoAmbiente } from './ui/VideoAmbiente'

export const Hero = forwardRef<HTMLElement>(function Hero(_, ref) {
  const reduzir = useReducedMotion()
  const entrada = (atraso: number) =>
    reduzir
      ? {}
      : {
          initial: { opacity: 0, y: 18 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.9, delay: atraso, ease: [0.22, 1, 0.36, 1] as const },
        }

  return (
    <header
      ref={ref}
      id="topo"
      className="fundo-escuro flex min-h-[min(100svh,980px)] flex-col justify-end px-4 pt-24 pb-14 sm:px-6 md:pb-20"
    >
      {/* Vídeo de fundo e as camadas de luz que garantem leitura do texto por cima */}
      <div className="absolute inset-0 z-0" aria-hidden="true">
        <VideoAmbiente
          {...VIDEOS.heroFundo}
          className="absolute inset-0 h-full w-full opacity-60"
          seloClassName="top-4 right-4"
        />
        {/* Sombra por baixo do texto: garante contraste mesmo com o vídeo mais claro */}
        <div className="absolute inset-0 bg-[linear-gradient(to_top,rgb(12_10_9/0.92)_0%,rgb(12_10_9/0.7)_35%,rgb(12_10_9/0.2)_70%,transparent_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgb(12_10_9/0.6)_0%,transparent_60%)]" />
        {/* Luz quente subindo do canto inferior direito, por cima do vídeo */}
        <div className="absolute inset-0 bg-[radial-gradient(75%_70%_at_100%_100%,rgb(230_51_41/0.42)_0%,rgb(230_51_41/0.16)_35%,rgb(230_51_41/0.05)_60%,transparent_80%)]" />
        {/* Claridade difusa no alto à esquerda, para o fundo nunca parecer chapado */}
        <div className="absolute inset-0 bg-[radial-gradient(55%_50%_at_15%_0%,rgb(241_238_232/0.09)_0%,transparent_70%)]" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-5xl">
        <m.p {...entrada(0)} className="font-playfair text-lg italic text-cinza-claro sm:text-xl">
          Antes de qualquer app, método ou disciplina
        </m.p>

        <m.h1
          {...entrada(0.1)}
          className="mt-5 font-anton text-[clamp(3rem,16vw,9.5rem)] leading-[0.92] tracking-[0.005em] text-gelo uppercase [text-shadow:0_4px_40px_rgb(0_0_0/0.5)]"
        >
          <span className="block">
            <Inicial palavra="VOCÊ" /> JÁ TENTOU
          </span>
          <span className="block">SE ORGANIZAR</span>
        </m.h1>

        <m.p {...entrada(0.2)} className="mt-6 font-inter text-2xl font-medium text-gelo sm:text-3xl">
          Mais de uma vez.
        </m.p>

        <m.p {...entrada(0.3)} className="mt-5 max-w-xl font-inter text-lg leading-relaxed text-cinza-claro">
          Agenda, lista, aplicativo de tarefa. Todos abandonados em três semanas.
          <br />
          O problema nunca foi disciplina.
        </m.p>

        <m.div {...entrada(0.4)} className="mt-10 flex flex-col items-start gap-3">
          <BotaoCompra>{`Quero começar — ${PRECO}`}</BotaoCompra>
          <p className="font-mono text-sm text-cinza-claro">pagamento único · download imediato</p>
        </m.div>
      </div>
    </header>
  )
})
