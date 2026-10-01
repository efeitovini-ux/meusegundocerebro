import { useState } from 'react'

type Props = {
  src: string
  alt: string
  largura: number
  altura: number
  className?: string
  tom?: 'claro' | 'escuro'
  prioridade?: boolean
}

/**
 * Imagem WebP com proporção reservada. Se o arquivo ainda não existir,
 * mostra um bloco do mesmo tamanho com o caminho esperado e o texto alternativo.
 */
export function Imagem({ src, alt, largura, altura, className = '', tom = 'escuro', prioridade = false }: Props) {
  const [falhou, setFalhou] = useState(false)
  const proporcao = `${largura} / ${altura}`

  if (falhou) {
    const cores =
      tom === 'escuro'
        ? 'border-gelo/25 bg-gelo/[0.04] text-cinza-claro'
        : 'border-preto/25 bg-white/60 text-cinza-medio'
    return (
      <div
        role="img"
        aria-label={alt}
        style={{ aspectRatio: proporcao }}
        className={`flex w-full flex-col items-center justify-center gap-3 rounded-lg border border-dashed p-6 text-center ${cores} ${className}`}
      >
        <mark className="pendente text-xs">[PREENCHER-IMAGEM] {src}</mark>
        <span className="max-w-md text-base">{alt}</span>
        <span className="font-mono text-xs">
          {largura}×{altura} · WebP
        </span>
      </div>
    )
  }

  return (
    <img
      src={src}
      alt={alt}
      width={largura}
      height={altura}
      loading={prioridade ? 'eager' : 'lazy'}
      decoding="async"
      onError={() => setFalhou(true)}
      style={{ aspectRatio: proporcao }}
      className={`h-auto w-full rounded-lg object-cover ${className}`}
    />
  )
}
