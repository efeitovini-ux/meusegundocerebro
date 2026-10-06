import { Revelar } from './ui/Revelar'
import { Secao, TITULO_SECAO } from './ui/Secao'

export function Reconhecimento() {
  return (
    <Secao id="reconhecimento" numero="02" tom="claro">
      <div className="grid items-center gap-14 md:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] md:gap-16">
        <div>
          <Revelar>
            <h2 className={TITULO_SECAO}>Você trabalha mais que a maioria das pessoas que conhece.</h2>
          </Revelar>

          <div className="mt-10 max-w-xl space-y-6 text-lg leading-relaxed text-suave-claro">
            <Revelar>
              <p>
                Acorda cedo. Responde mensagem à noite. Usa o fim de semana.
                <br />
                E mesmo assim sente que não sai do lugar.
              </p>
            </Revelar>
            <Revelar>
              <p className="text-xl font-semibold text-tinta sm:text-2xl">Disciplina não é o seu gargalo.</p>
            </Revelar>
            <Revelar>
              <p>
                O gargalo é que toda vez que você senta pra fazer alguma coisa, você gasta os primeiros
                vinte minutos reconstruindo onde parou.
              </p>
            </Revelar>
          </div>
        </div>

        <Revelar atraso={0.15}>
          <figure className="relative mx-auto max-w-sm -rotate-2 md:max-w-none">
            {/* Fita adesiva segurando o post-it */}
            <span
              aria-hidden="true"
              className="absolute -top-3 left-1/2 z-10 h-7 w-28 -translate-x-1/2 rotate-3 rounded-[2px] bg-white/60 shadow-sm backdrop-blur-[1px]"
            />
            <blockquote className="postit rounded-sm px-8 pt-12 pb-10 text-[clamp(1.9rem,6.5vw,2.6rem)] leading-[1.15] font-semibold">
              Quem toca tudo sozinho não perde tempo trabalhando. Perde tempo lembrando.
            </blockquote>
          </figure>
        </Revelar>
      </div>
    </Secao>
  )
}
