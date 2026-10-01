import { VIRADA_ITENS } from '../data/conteudo'
import { Revelar } from './ui/Revelar'
import { Secao, TITULO_SECAO } from './ui/Secao'

export function Virada() {
  return (
    <Secao id="virada" numero="03" tom="escuro">
      <Revelar>
        <h2 className={`${TITULO_SECAO} max-w-4xl`}>O que mudou não foi eu ficar mais disciplinado.</h2>
      </Revelar>

      <div className="mt-12 grid gap-14 md:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] md:gap-16">
        <div className="max-w-xl space-y-6 text-lg leading-relaxed text-cinza-claro">
          <Revelar>
            <p>
              Passei dez anos tentando me organizar. Trello, planilha, lista de tarefas, agenda de
              papel. Até joguinho de fazenda que me dava recompensa por tarefa concluída.
            </p>
          </Revelar>
          <Revelar>
            <p className="text-xl font-semibold text-gelo">Nenhum funcionou.</p>
          </Revelar>
          <Revelar>
            <p className="text-gelo">
              O que mudou foi eu parar de guardar tarefa e começar a guardar contexto.
            </p>
          </Revelar>
        </div>

        <ol className="border-t border-gelo/20">
          {VIRADA_ITENS.map((item, i) => (
            <Revelar como="li" atraso={i * 0.08} key={item} className="flex gap-5 border-b border-gelo/20 py-6">
              <span className="pt-1 font-mono text-sm font-bold text-vermelho" aria-hidden="true">
                {String(i + 1).padStart(2, '0')}
              </span>
              <span className="text-lg leading-snug text-gelo">{item}</span>
            </Revelar>
          ))}
        </ol>
      </div>

      <Revelar className="mt-16 md:mt-20">
        <p className="font-playfair text-[clamp(1.6rem,5.5vw,2.75rem)] leading-snug italic text-gelo text-balance">
          Dez anos tentando. Levou uma tarde pra montar.
        </p>
      </Revelar>
    </Secao>
  )
}
