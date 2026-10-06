import { Despejo } from './ui/Despejo'
import { Revelar } from './ui/Revelar'
import { Secao } from './ui/Secao'

export function PrimeiraVitoria() {
  return (
    <Secao id="primeira-vitoria" numero="05" tom="escuro" className="md:py-32">
      <div className="grid items-center gap-14 md:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] md:gap-16">
        <div>
          <Revelar>
            <h2 className="flex items-end gap-4 sm:gap-6">
              <span className="font-sans text-[clamp(7rem,34vw,13rem)] leading-[0.8] font-semibold tracking-[-0.06em] text-menta">
                10
              </span>
              <span className="max-w-[12ch] min-w-0 pb-2 text-xl leading-tight font-medium text-[#e8efec] sm:text-2xl">
                minutos até a primeira vitória
              </span>
            </h2>
          </Revelar>

          <div className="mt-12 max-w-xl space-y-6 text-lg leading-relaxed text-suave-escuro">
            <Revelar>
              <p>
                O primeiro prompt é um despejo mental. Você abre, joga tudo que está na sua cabeça dentro
                dele, sem organizar, sem ordem, do jeito que sair.
              </p>
            </Revelar>
            <Revelar>
              <p>
                Em dez minutos você tem a sua cabeça inteira fora dela, separada por área, com o que é
                urgente marcado.
              </p>
            </Revelar>
            <Revelar>
              <p className="font-serif text-2xl leading-snug text-[#e8efec] italic sm:text-3xl">
                É a primeira vez que a maioria das pessoas vê tudo o que está carregando de uma vez só.
              </p>
            </Revelar>
          </div>
        </div>

        <Despejo />
      </div>
    </Secao>
  )
}
