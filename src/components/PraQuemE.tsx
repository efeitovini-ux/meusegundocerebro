import { E_PRA_VOCE, NAO_E_PRA_VOCE } from '../data/conteudo'
import { Revelar } from './ui/Revelar'
import { Secao } from './ui/Secao'

function Marca({ tipo }: { tipo: 'sim' | 'nao' }) {
  return (
    <svg
      viewBox="0 0 20 20"
      width="20"
      height="20"
      aria-hidden="true"
      className={`mt-1 shrink-0 ${tipo === 'sim' ? 'text-vermelho' : 'text-cinza-apagado'}`}
      fill="none"
      stroke="currentColor"
      strokeWidth="2.25"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {tipo === 'sim' ? <path d="M4 10.5l4 4 8-9" /> : <path d="M5 10h10" />}
    </svg>
  )
}

export function PraQuemE() {
  return (
    <Secao id="pra-quem-e" numero="06" tom="claro">
      <div className="grid gap-14 md:grid-cols-2 md:gap-12">
        <Revelar>
          <h2 className="font-anton text-[clamp(2.25rem,8vw,3.5rem)] leading-none uppercase">É pra você se</h2>
          <ul className="mt-8 space-y-5">
            {E_PRA_VOCE.map((item) => (
              <li key={item} className="flex gap-4 text-lg leading-snug">
                <Marca tipo="sim" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </Revelar>

        <Revelar atraso={0.1} className="md:border-l md:border-preto/15 md:pl-12">
          <h2 className="font-anton text-[clamp(2.25rem,8vw,3.5rem)] leading-none text-cinza-apagado uppercase">
            Não é pra você se
          </h2>
          <ul className="mt-8 space-y-5">
            {NAO_E_PRA_VOCE.map((item) => (
              <li key={item} className="flex gap-4 text-lg leading-snug text-cinza-apagado">
                <Marca tipo="nao" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </Revelar>
      </div>
    </Secao>
  )
}
