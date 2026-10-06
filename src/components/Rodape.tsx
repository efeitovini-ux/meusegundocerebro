import { INSTAGRAM_URL, NOTA_RODAPE, URL_PRIVACIDADE, URL_TERMOS, estaPendente } from '../data/conteudo'
import { Marca } from './ui/Marca'

function LinkRodape({ href, children }: { href: string; children: string }) {
  const pendente = estaPendente(href)
  const externo = href.startsWith('http')
  return (
    <a
      href={pendente ? undefined : href}
      {...(externo ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      aria-disabled={pendente || undefined}
      className="inline-flex min-h-11 items-center gap-2 text-[#e8efec] underline decoration-white/40 underline-offset-4 hover:decoration-menta"
    >
      {children}
      {pendente && <mark className="pendente text-xs">{href}</mark>}
    </a>
  )
}

export function Rodape() {
  return (
    <footer className="fundo-escuro px-4 pt-16 pb-32 sm:px-6 md:pb-16">
      <div className="mx-auto w-full max-w-6xl">
        <Marca className="text-2xl text-[#e8efec]" />

        <p className="mt-8 max-w-2xl text-base leading-relaxed text-suave-escuro">{NOTA_RODAPE}</p>

        <nav aria-label="Links do rodapé" className="mt-8">
          <ul className="flex flex-col gap-x-8 gap-y-1 sm:flex-row sm:flex-wrap">
            <li>
              <LinkRodape href={INSTAGRAM_URL}>Instagram @efeitovini</LinkRodape>
            </li>
            <li>
              <LinkRodape href={URL_TERMOS}>Termos de uso</LinkRodape>
            </li>
            <li>
              <LinkRodape href={URL_PRIVACIDADE}>Política de privacidade</LinkRodape>
            </li>
          </ul>
        </nav>

        <p className="mt-12 border-t border-white/10 pt-6 font-mono text-sm text-suave-escuro">
          por Agência Prumo · 2026
        </p>
      </div>
    </footer>
  )
}
