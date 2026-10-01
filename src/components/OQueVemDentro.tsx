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
        <Imagem {...IMAGENS.vaultObsidian} tom="claro" className="shadow-[0_30px_60px_-30px_rgb(12_10_9/0.45)]" />
      </Revelar>

      <ul className="mt-12 grid gap-5 sm:grid-cols-2">
        {ENTREGAVEIS.map((item, i) => (
          <Revelar
            como="li"
            atraso={(i % 2) * 0.08}
            key={item.titulo}
            className="rounded-xl border border-preto/15 bg-white p-6 shadow-[0_1px_0_rgb(12_10_9/0.04)] sm:p-8"
          >
            <p className="font-mono text-sm text-cinza-medio" aria-hidden="true">
              {String(i + 1).padStart(2, '0')}
            </p>
            <h3 className="mt-3 font-inter text-xl font-bold">{item.titulo}</h3>
            <div className="mt-3 space-y-3 text-base leading-relaxed text-cinza-medio">
              {item.texto.map((paragrafo) => (
                <p key={paragrafo}>{paragrafo}</p>
              ))}
            </div>
          </Revelar>
        ))}
      </ul>

      <Revelar className="mt-10">
        <p className="font-mono text-sm leading-relaxed text-cinza-medio">
          Funciona com ChatGPT e com Claude · Obsidian é gratuito · tudo roda no seu computador
        </p>
      </Revelar>
    </Secao>
  )
}
