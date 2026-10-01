import { estaPendente } from '../../data/conteudo'

/** Mostra o valor; se ainda for um [PREENCHER], destaca em amarelo. */
export function Preencher({ valor }: { valor: string }) {
  if (estaPendente(valor)) return <mark className="pendente">{valor}</mark>
  return <>{valor}</>
}
