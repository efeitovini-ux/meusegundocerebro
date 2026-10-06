import { m, useReducedMotion } from 'framer-motion'
import { VIRADA_ITENS } from '../data/conteudo'
import { Revelar } from './ui/Revelar'
import { REMATE, Secao, TITULO_SECAO } from './ui/Secao'

export function Virada() {
  const reduzir = useReducedMotion()

  return (
    <Secao id="virada" numero="03" tom="claro-alt">
      <Revelar>
        <h2 className={`${TITULO_SECAO} max-w-3xl`}>O que mudou não foi eu ficar mais disciplinado.</h2>
      </Revelar>

      <div className="mt-12 grid gap-14 md:grid-cols-2 md:gap-16">
        <div className="max-w-xl space-y-6 text-lg leading-relaxed text-suave-claro">
          <Revelar>
            <p>
              Passei dez anos tentando me organizar. Trello, planilha, lista de tarefas, agenda de
              papel. Até joguinho de fazenda que me dava recompensa por tarefa concluída.
            </p>
          </Revelar>
          <Revelar>
            <p className="text-xl font-semibold text-tinta">Nenhum funcionou.</p>
          </Revelar>
          <Revelar>
            <p className="text-tinta">O que mudou foi eu parar de guardar tarefa e começar a guardar contexto.</p>
          </Revelar>
        </div>

        {/* Os quatro itens ligados como uma cadeia de neurônios */}
        <ol className="relative">
          <span
            aria-hidden="true"
            className="absolute top-4 bottom-4 left-[11px] w-[2px] rounded-full bg-gradient-to-b from-menta-escura/70 via-menta-escura/40 to-menta-escura/10"
          />
          {VIRADA_ITENS.map((item, i) => (
            <Revelar como="li" atraso={i * 0.1} key={item} className="relative flex gap-5 py-4">
              <m.span
                aria-hidden="true"
                className="relative z-10 mt-1 grid size-6 shrink-0 place-items-center rounded-full border-2 border-menta-escura bg-nevoa"
                {...(reduzir
                  ? {}
                  : {
                      initial: { scale: 0.4 },
                      whileInView: { scale: 1 },
                      viewport: { once: true },
                      transition: { duration: 0.5, delay: 0.2 + i * 0.1, ease: [0.22, 1, 0.36, 1] },
                    })}
              >
                <span className="size-2.5 rounded-full bg-menta" />
              </m.span>
              <span>
                <span className="block font-mono text-sm text-menta-escura" aria-hidden="true">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span className="mt-1 block text-lg leading-snug font-medium">{item}</span>
              </span>
            </Revelar>
          ))}
        </ol>
      </div>

      <Revelar className="mt-16 md:mt-20">
        <p className={REMATE}>Dez anos tentando. Levou uma tarde pra montar.</p>
      </Revelar>
    </Secao>
  )
}
