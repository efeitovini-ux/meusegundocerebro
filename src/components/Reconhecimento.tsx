import { Revelar } from './ui/Revelar'
import { Secao, TITULO_SECAO } from './ui/Secao'

export function Reconhecimento() {
  return (
    <Secao id="reconhecimento" numero="02" tom="claro">
      <Revelar>
        <h2 className={`${TITULO_SECAO} max-w-4xl`}>
          Você trabalha mais que a maioria das pessoas que conhece.
        </h2>
      </Revelar>

      <div className="mt-12 max-w-2xl space-y-6 text-lg leading-relaxed">
        <Revelar>
          <p>
            Acorda cedo. Responde mensagem à noite. Usa o fim de semana.
            <br />
            E mesmo assim sente que não sai do lugar.
          </p>
        </Revelar>
        <Revelar>
          <p className="text-xl font-semibold sm:text-2xl">Disciplina não é o seu gargalo.</p>
        </Revelar>
        <Revelar>
          <p>
            O gargalo é que toda vez que você senta pra fazer alguma coisa, você gasta os primeiros
            vinte minutos reconstruindo onde parou.
          </p>
        </Revelar>
      </div>

      <Revelar className="mt-16 md:mt-24">
        <figure className="mx-auto max-w-3xl border-y border-preto/30 py-10 text-center md:py-14">
          <blockquote className="font-playfair text-[clamp(1.6rem,5.5vw,2.75rem)] leading-snug italic text-balance">
            Quem toca tudo sozinho não perde tempo trabalhando. Perde tempo lembrando.
          </blockquote>
        </figure>
      </Revelar>
    </Secao>
  )
}
