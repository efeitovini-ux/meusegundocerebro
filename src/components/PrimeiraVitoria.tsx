import { Revelar } from './ui/Revelar'
import { Secao } from './ui/Secao'

export function PrimeiraVitoria() {
  return (
    <Secao id="primeira-vitoria" numero="05" tom="escuro" className="md:py-36">
      <Revelar>
        <h2 className="flex items-end gap-4 sm:gap-6">
          <span
            className="font-anton text-[clamp(7rem,36vw,18rem)] leading-[0.8] text-vermelho [text-shadow:0.03em_0.04em_0_rgb(0_0_0/0.85)]"
          >
            10
          </span>
          <span className="min-w-0 max-w-[14ch] pb-1 font-inter text-xl leading-tight font-semibold text-gelo sm:text-3xl">
            minutos até a primeira vitória
          </span>
        </h2>
      </Revelar>

      <div className="mt-14 max-w-2xl space-y-6 text-lg leading-relaxed text-cinza-claro">
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
          <p className="text-xl font-medium text-gelo">
            É a primeira vez que a maioria das pessoas vê tudo o que está carregando de uma vez só.
          </p>
        </Revelar>
      </div>
    </Secao>
  )
}
