import { forwardRef } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { IMAGENS, PRECO } from '../data/conteudo'
import { BotaoCompra } from './ui/BotaoCompra'
import { Imagem } from './ui/Imagem'
import { Inicial } from './ui/Inicial'

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
    <header ref={ref} id="topo" className="fundo-escuro relative overflow-hidden px-4 pt-16 pb-20 sm:px-6 md:pt-24 md:pb-28">
      <div className="mx-auto w-full max-w-5xl">
        <motion.p {...entrada(0)} className="font-playfair text-lg italic text-cinza-claro sm:text-xl">
          Antes de qualquer app, método ou disciplina
        </motion.p>

        <motion.h1
          {...entrada(0.1)}
          className="mt-5 font-anton text-[clamp(3rem,16vw,9.5rem)] leading-[0.92] tracking-[0.005em] text-gelo uppercase"
        >
          <span className="block">
            <Inicial palavra="VOCÊ" /> JÁ TENTOU
          </span>
          <span className="block">SE ORGANIZAR</span>
        </motion.h1>

        <motion.p {...entrada(0.2)} className="mt-6 font-inter text-2xl font-medium text-gelo sm:text-3xl">
          Mais de uma vez.
        </motion.p>

        <motion.p {...entrada(0.3)} className="mt-6 max-w-xl font-inter text-lg leading-relaxed text-cinza-claro">
          Agenda, lista, aplicativo de tarefa. Todos abandonados em três semanas.
          <br />
          O problema nunca foi disciplina.
        </motion.p>

        <motion.div {...entrada(0.4)} className="mt-10 flex flex-col items-start gap-3">
          <BotaoCompra>{`Quero começar — ${PRECO}`}</BotaoCompra>
          <p className="font-mono text-sm text-cinza-claro">pagamento único · download imediato</p>
        </motion.div>

        <motion.div {...entrada(0.55)} className="mt-16">
          <Imagem {...IMAGENS.heroTopo} prioridade />
        </motion.div>
      </div>
    </header>
  )
})
