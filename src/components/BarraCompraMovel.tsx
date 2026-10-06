import { useEffect, useState, type RefObject } from 'react'
import { AnimatePresence, m, useReducedMotion } from 'framer-motion'
import { CHECKOUT_URL, PRECO, estaPendente } from '../data/conteudo'

/**
 * Botão de compra fixo no rodapé da tela, só no celular, depois que o hero sai de vista.
 * Some enquanto o card de preço está na tela, para não ter dois botões empilhados.
 */
export function BarraCompraMovel({ alvo }: { alvo: RefObject<HTMLElement | null> }) {
  const [heroFora, setHeroFora] = useState(false)
  const [precoNaTela, setPrecoNaTela] = useState(false)
  const visivel = heroFora && !precoNaTela
  const reduzir = useReducedMotion()
  const pendente = estaPendente(CHECKOUT_URL)

  useEffect(() => {
    const el = alvo.current
    if (!el) return
    const obs = new IntersectionObserver(([entrada]) => setHeroFora(!entrada.isIntersecting))
    obs.observe(el)
    const preco = document.getElementById('preco')
    const obsPreco = new IntersectionObserver(([entrada]) => setPrecoNaTela(entrada.isIntersecting), { threshold: 0.15 })
    if (preco) obsPreco.observe(preco)
    return () => {
      obs.disconnect()
      obsPreco.disconnect()
    }
  }, [alvo])

  return (
    <AnimatePresence>
      {visivel && (
        <m.div
          initial={reduzir ? false : { y: '100%' }}
          animate={{ y: 0 }}
          exit={reduzir ? undefined : { y: '100%' }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-x-0 bottom-0 z-40 border-t border-white/10 bg-tinta/95 px-4 pt-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] backdrop-blur md:hidden"
        >
          <a
            href={pendente ? '#preco' : CHECKOUT_URL}
            className={`flex min-h-12 w-full items-center justify-center rounded-xl bg-menta px-6 text-center font-sans text-lg font-bold text-tinta ${
              pendente ? 'outline-2 outline-offset-2 outline-dashed outline-[#fde047]' : ''
            }`}
          >
            {`Quero começar — ${PRECO}`}
          </a>
        </m.div>
      )}
    </AnimatePresence>
  )
}
