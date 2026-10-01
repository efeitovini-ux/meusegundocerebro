import { CHECKOUT_URL, estaPendente } from '../../data/conteudo'

type Props = {
  children: string
  tamanho?: 'grande' | 'medio'
  className?: string
}

/**
 * Botão vermelho que leva ao checkout da Kiwify.
 * Enquanto CHECKOUT_URL não estiver preenchido, ganha contorno amarelo e um selo visível.
 */
export function BotaoCompra({ children, tamanho = 'grande', className = '' }: Props) {
  const pendente = estaPendente(CHECKOUT_URL)
  const tamanhoClasses =
    tamanho === 'grande'
      ? 'min-h-16 px-8 py-4 text-lg sm:text-xl'
      : 'min-h-12 px-6 py-3 text-base'

  return (
    <span className={`inline-flex max-w-full flex-col items-center gap-2 ${className}`}>
      <a
        href={pendente ? '#preco' : CHECKOUT_URL}
        className={`inline-flex max-w-full items-center justify-center rounded-md bg-vermelho text-center font-inter font-bold text-preto shadow-[0_10px_30px_-10px_rgb(230_51_41/0.7)] transition-transform duration-200 hover:-translate-y-0.5 active:translate-y-0 motion-reduce:transition-none motion-reduce:hover:translate-y-0 ${tamanhoClasses} ${
          pendente ? 'outline-4 outline-offset-4 outline-dashed outline-[#fde047]' : ''
        }`}
        {...(pendente ? { 'data-pendente': 'CHECKOUT_URL' } : {})}
      >
        {children}
      </a>
      {pendente && <mark className="pendente text-xs">{CHECKOUT_URL}</mark>}
    </span>
  )
}
