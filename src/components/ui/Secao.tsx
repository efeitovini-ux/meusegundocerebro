import type { ReactNode } from 'react'

export type Tom = 'claro' | 'claro-alt' | 'escuro'

type Props = {
  id?: string
  numero: string
  tom: Tom
  children: ReactNode
  className?: string
}

const FUNDO: Record<Tom, string> = {
  claro: 'fundo-claro',
  'claro-alt': 'fundo-claro-alt',
  escuro: 'fundo-escuro',
}

/** Casca comum de seção: fundo com luz, número em mono com um ponto de rede, largura de leitura. */
export function Secao({ id, numero, tom, children, className = '' }: Props) {
  const escuro = tom === 'escuro'
  return (
    <section id={id} className={`${FUNDO[tom]} px-4 py-20 sm:px-6 md:py-28 ${className}`}>
      <div className="mx-auto w-full max-w-6xl">
        <p
          className={`mb-8 flex items-center gap-2 font-mono text-sm ${escuro ? 'text-suave-escuro' : 'text-suave-claro'}`}
          aria-hidden="true"
        >
          <span className={`inline-block size-2 rounded-full ${escuro ? 'bg-menta' : 'bg-menta-escura'}`} />
          {numero}
        </p>
        {children}
      </div>
    </section>
  )
}

/** Título de seção: sans firme, frase normal, sem gritar. */
export const TITULO_SECAO =
  'font-sans text-[clamp(2rem,7vw,3.5rem)] leading-[1.05] font-semibold tracking-[-0.03em] text-balance'

/** Remate: a frase que fecha a seção, em serifa itálica. */
export const REMATE = 'font-serif text-[clamp(1.75rem,5.5vw,2.75rem)] leading-snug italic text-balance'
