/** Assinatura da marca: a primeira letra em vermelho, maior, com sombra projetada. */
export function Inicial({ palavra }: { palavra: string }) {
  return (
    <>
      <span className="inicial" aria-hidden="true">
        {palavra.charAt(0)}
      </span>
      <span aria-hidden="true">{palavra.slice(1)}</span>
      <span className="sr-only">{palavra}</span>
    </>
  )
}
