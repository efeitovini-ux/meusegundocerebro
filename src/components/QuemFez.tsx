import { IMAGENS, INSTAGRAM_URL } from '../data/conteudo'
import { Imagem } from './ui/Imagem'
import { Revelar } from './ui/Revelar'
import { Secao, TITULO_SECAO } from './ui/Secao'

export function QuemFez() {
  return (
    <Secao id="quem-fez" numero="07" tom="claro">
      <div className="grid items-start gap-12 md:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] md:gap-16">
        <Revelar className="mx-auto w-full max-w-sm md:max-w-none">
          <Imagem {...IMAGENS.vinicius} className="shadow-[0_40px_80px_-40px_rgb(14_23_21/0.45)]" />
        </Revelar>

        <div>
          <Revelar>
            <h2 className={TITULO_SECAO}>Quem fez isso</h2>
          </Revelar>

          <div className="mt-8 space-y-6 text-lg leading-relaxed text-suave-claro">
            <Revelar>
              <p>
                Eu sou o Vinicius. Toco uma agência sozinho, trabalho em tempo integral e tenho mais
                frente aberta do que seria razoável.
              </p>
            </Revelar>
            <Revelar>
              <p>
                Montei esse sistema porque eu precisava dele. Usei primeiro, por meses, no meu próprio
                dia. Só depois tirei tudo que era meu de dentro e deixei o esqueleto.
              </p>
            </Revelar>
            <Revelar>
              <p className="text-tinta">
                O que você vai receber é o mesmo que eu uso. Vazio, pronto pra ser seu.
              </p>
            </Revelar>
          </div>

          <Revelar className="mt-10">
            <p className="font-mono text-sm text-suave-claro">
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 items-center underline decoration-menta-escura decoration-2 underline-offset-4 hover:text-tinta"
              >
                @efeitovini
              </a>{' '}
              · Agência Prumo
            </p>
          </Revelar>
        </div>
      </div>
    </Secao>
  )
}
