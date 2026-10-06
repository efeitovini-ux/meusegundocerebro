import type { ReactNode } from 'react'
import { INSTAGRAM_URL } from '../data/conteudo'
import { AvisoPendencias } from './AvisoPendencias'
import { Marca } from './ui/Marca'

type Props = { titulo: string; atualizacao: string; children: ReactNode }

/** Casca das páginas de termos e privacidade: limpa, legível, com volta para a página principal. */
export function PaginaLegal({ titulo, atualizacao, children }: Props) {
  return (
    <>
      <AvisoPendencias />
      <header className="fundo-escuro px-4 py-6 sm:px-6">
        <div className="mx-auto flex w-full max-w-3xl flex-wrap items-center justify-between gap-4">
          <a href="/" className="inline-flex min-h-11 items-center text-[#e8efec]">
            <Marca className="text-base" />
          </a>
          <a
            href="/"
            className="inline-flex min-h-11 items-center font-mono text-sm text-suave-escuro underline decoration-white/40 underline-offset-4 hover:decoration-menta"
          >
            voltar para a página
          </a>
        </div>
      </header>

      <main className="fundo-claro px-4 py-14 sm:px-6 md:py-20">
        <article className="legal mx-auto w-full max-w-3xl">
          <h1 className="text-[clamp(2rem,7vw,3rem)] leading-tight font-semibold tracking-[-0.03em]">{titulo}</h1>
          <p className="mt-3 font-mono text-sm text-suave-claro">Última atualização: {atualizacao}</p>
          <div className="mt-10 space-y-10">{children}</div>
        </article>
      </main>

      <footer className="fundo-escuro px-4 py-10 sm:px-6">
        <div className="mx-auto flex w-full max-w-3xl flex-col gap-2 font-mono text-sm text-suave-escuro sm:flex-row sm:items-center sm:justify-between">
          <span>por Agência Prumo · 2026</span>
          <span className="flex flex-wrap gap-x-6">
            <a className="inline-flex min-h-11 items-center underline decoration-white/40 underline-offset-4" href="/termos/">
              Termos de uso
            </a>
            <a className="inline-flex min-h-11 items-center underline decoration-white/40 underline-offset-4" href="/privacidade/">
              Política de privacidade
            </a>
            <a
              className="inline-flex min-h-11 items-center underline decoration-white/40 underline-offset-4"
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              @efeitovini
            </a>
          </span>
        </div>
      </footer>
    </>
  )
}

/** Um bloco numerado do texto legal. */
export function Clausula({ numero, titulo, children }: { numero: string; titulo: string; children: ReactNode }) {
  return (
    <section>
      <h2 className="flex items-baseline gap-3 text-xl font-semibold tracking-tight sm:text-2xl">
        <span className="font-mono text-base text-menta-escura">{numero}</span>
        {titulo}
      </h2>
      <div className="mt-4 space-y-4 text-base leading-relaxed text-suave-claro sm:text-lg [&_strong]:font-semibold [&_strong]:text-tinta [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-6">
        {children}
      </div>
    </section>
  )
}
