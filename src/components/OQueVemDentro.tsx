import { ENTREGAVEIS, IMAGENS } from '../data/conteudo'
import { Imagem } from './ui/Imagem'
import { Revelar } from './ui/Revelar'
import { Secao, TITULO_SECAO } from './ui/Secao'

export function OQueVemDentro() {
  return (
    <Secao id="o-que-vem-dentro" numero="04" tom="claro">
      <Revelar>
        <h2 className={TITULO_SECAO}>O que vem dentro</h2>
      </Revelar>

      <Revelar className="mt-10">
        <figure>
          <Imagem {...IMAGENS.vaultObsidian} className="shadow-[0_40px_80px_-40px_rgb(14_23_21/0.45)]" />
          {/* Deixa claro que o grafo cheio é o do Vinicius: quem compra recebe o vault vazio */}
          <figcaption className="mt-4 flex items-start gap-2 font-mono text-sm text-suave-claro">
            <span className="mt-1.5 size-2 shrink-0 rounded-full bg-menta-escura" aria-hidden="true" />
            O meu, depois de meses de uso. O seu chega vazio, pronto pra ser seu.
          </figcaption>
        </figure>
      </Revelar>

      <ul className="mt-12 grid gap-5 sm:grid-cols-2">
        {ENTREGAVEIS.map((item, i) => (
          <Revelar
            como="li"
            atraso={(i % 2) * 0.08}
            key={item.titulo}
            className="rounded-2xl border border-tinta/10 bg-white/85 p-6 shadow-[0_1px_2px_rgb(14_23_21/0.04),0_20px_40px_-30px_rgb(14_23_21/0.25)] backdrop-blur-sm sm:p-8"
          >
            <p className="flex items-center gap-2 font-mono text-sm text-menta-escura" aria-hidden="true">
              <span className="size-2 rounded-full bg-menta" />
              {String(i + 1).padStart(2, '0')}
            </p>
            <h3 className="mt-3 text-xl font-semibold tracking-tight">{item.titulo}</h3>
            <div className="mt-3 space-y-3 text-base leading-relaxed text-suave-claro">
              {item.texto.map((paragrafo) => (
                <p key={paragrafo}>{paragrafo}</p>
              ))}
            </div>
          </Revelar>
        ))}
      </ul>

      <Revelar className="mt-10">
        <p className="font-mono text-sm leading-relaxed text-suave-claro">
          Funciona com ChatGPT e com Claude · Obsidian é gratuito · tudo roda no seu computador
        </p>
      </Revelar>
    </Secao>
  )
}
