import { useId, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { DUVIDAS, estaPendente } from '../data/conteudo'
import { Preencher } from './ui/Preencher'
import { Revelar } from './ui/Revelar'
import { Secao, TITULO_SECAO } from './ui/Secao'

function Item({ pergunta, resposta }: { pergunta: string; resposta: string }) {
  // Resposta ainda não preenchida começa aberta, para ficar à vista.
  const [aberto, setAberto] = useState(() => estaPendente(resposta))
  const reduzir = useReducedMotion()
  const id = useId()
  const idBotao = `${id}-botao`
  const idPainel = `${id}-painel`

  return (
    <li className="border-b border-preto/15">
      <h3>
        <button
          type="button"
          id={idBotao}
          aria-expanded={aberto}
          aria-controls={idPainel}
          onClick={() => setAberto((v) => !v)}
          className="flex min-h-14 w-full items-center justify-between gap-6 py-5 text-left font-inter text-lg font-semibold"
        >
          <span>{pergunta}</span>
          <svg
            viewBox="0 0 24 24"
            width="24"
            height="24"
            aria-hidden="true"
            className={`shrink-0 transition-transform duration-300 motion-reduce:transition-none ${aberto ? 'rotate-45' : ''}`}
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          >
            <path d="M12 5v14M5 12h14" />
          </svg>
        </button>
      </h3>
      <AnimatePresence initial={false}>
        {aberto && (
          <motion.div
            id={idPainel}
            role="region"
            aria-labelledby={idBotao}
            initial={reduzir ? false : { height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={reduzir ? undefined : { height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <p className="max-w-2xl pb-6 text-base leading-relaxed text-cinza-medio">
              <Preencher valor={resposta} />
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </li>
  )
}

export function Duvidas() {
  return (
    <Secao id="duvidas" numero="09" tom="claro" className="pt-4 md:pt-8">
      <Revelar>
        <h2 className={TITULO_SECAO}>Dúvidas</h2>
      </Revelar>
      <Revelar className="mt-10">
        <ul className="border-t border-preto/15">
          {DUVIDAS.map((d) => (
            <Item key={d.pergunta} {...d} />
          ))}
        </ul>
      </Revelar>
    </Secao>
  )
}
