import type { ReactNode } from 'react'

type Props = {
  id?: string
  numero: string
  tom: 'claro' | 'escuro'
  children: ReactNode
  className?: string
}

/** Casca comum de seção: fundo com luz, número em mono e largura de leitura. */
export function Secao({ id, numero, tom, children, className = '' }: Props) {
  const corNumero = tom === 'escuro' ? 'text-cinza-claro' : 'text-cinza-medio'
  return (
    <section
      id={id}
      className={`${tom === 'escuro' ? 'fundo-escuro' : 'fundo-claro'} relative px-4 py-20 sm:px-6 md:py-28 ${className}`}
    >
      <div className="mx-auto w-full max-w-5xl">
        <p className={`mb-8 font-mono text-sm tracking-widest ${corNumero}`} aria-hidden="true">
          {numero}
        </p>
        {children}
      </div>
    </section>
  )
}

/** Título de seção: Anton, caixa alta. */
export const TITULO_SECAO =
  'font-anton text-[clamp(2.25rem,9vw,4.5rem)] leading-[1] uppercase tracking-[0.005em] text-balance'
