import { useState } from 'react'
import { IMAGENS } from '../../data/conteudo'
import { GrafoVault } from './GrafoVault'

type Vista = 'seu' | 'meu'

/**
 * Card escuro da seção "O que vem dentro": alterna entre o vault que a pessoa recebe,
 * explorável, e o grafo real do Vinicius depois de meses de uso.
 */
export function ExplorarVault() {
  const [vista, setVista] = useState<Vista>('seu')

  const botao = (v: Vista, texto: string, curto: string) => (
    <button
      type="button"
      aria-pressed={vista === v}
      onClick={() => setVista(v)}
      className={`min-h-11 rounded-full px-5 text-base font-semibold transition-colors motion-reduce:transition-none ${
        vista === v ? 'bg-menta text-tinta' : 'text-suave-escuro hover:text-[#e8efec]'
      }`}
    >
      <span className="sm:hidden">{curto}</span>
      <span className="hidden sm:inline">{texto}</span>
    </button>
  )

  return (
    <div className="fundo-escuro overflow-hidden rounded-3xl px-3 pt-5 pb-6 shadow-[0_40px_80px_-40px_rgb(14_23_21/0.55)] ring-1 ring-tinta sm:px-8 sm:pt-7">
      <div className="flex flex-wrap items-center justify-between gap-3 px-2">
        <div className="inline-flex rounded-full bg-white/5 p-1 ring-1 ring-white/10">
          {botao('seu', 'O seu vault', 'O seu')}
          {botao('meu', 'O meu, depois de meses', 'O meu')}
        </div>
        {vista === 'seu' && (
          <p className="font-mono text-xs text-suave-escuro sm:text-sm">
            <span className="pointer-coarse:hidden">passe o mouse, arraste e clique nos neurônios</span>
            <span className="hidden pointer-coarse:inline">toque nos neurônios e arraste</span>
          </p>
        )}
      </div>

      <div className="mt-4">
        {vista === 'seu' ? (
          <GrafoVault />
        ) : (
          <figure className="pt-4">
            <img
              src={IMAGENS.meuGrafo.src}
              alt={IMAGENS.meuGrafo.alt}
              width={IMAGENS.meuGrafo.largura}
              height={IMAGENS.meuGrafo.altura}
              loading="lazy"
              decoding="async"
              className="mx-auto h-auto w-full max-w-2xl"
            />
            <figcaption className="mt-4 flex items-start justify-center gap-2 text-center font-mono text-sm text-suave-escuro">
              <span className="mt-1.5 size-2 shrink-0 rounded-full bg-menta" aria-hidden="true" />
              O meu, depois de meses de uso. O seu chega vazio, pronto pra ser seu.
            </figcaption>
          </figure>
        )}
      </div>
    </div>
  )
}
