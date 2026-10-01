import { useEffect, useState, type RefObject } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { CHECKOUT_URL, PRECO, estaPendente } from '../data/conteudo'

/** Botão de compra fixo no rodapé da tela, só no celular, depois que o hero sai de vista. */
export function BarraCompraMovel({ alvo }: { alvo: RefObject<HTMLElement | null> }) {
  const [visivel, setVisivel] = useState(false)
  const reduzir = useReducedMotion()
  const pendente = estaPendente(CHECKOUT_URL)

  useEffect(() => {
    const el = alvo.current
    if (!el) return
    const obs = new IntersectionObserver(([entrada]) => setVisivel(!entrada.isIntersecting))
    obs.observe(el)
    return () => obs.disconnect()
  }, [alvo])

  return (
    <AnimatePresence>
      {visivel && (
        <motion.div
          initial={reduzir ? false : { y: '100%' }}
          animate={{ y: 0 }}
          exit={reduzir ? undefined : { y: '100%' }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-x-0 bottom-0 z-40 border-t border-gelo/10 bg-preto/95 px-4 pt-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] backdrop-blur md:hidden"
        >
          <a
            href={pendente ? '#preco' : CHECKOUT_URL}
            className={`flex min-h-12 w-full items-center justify-center rounded-md bg-vermelho px-6 text-center font-inter text-lg font-bold text-preto ${
              pendente ? 'outline-2 outline-offset-2 outline-dashed outline-[#fde047]' : ''
            }`}
          >
            {`Quero começar — ${PRECO}`}
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
