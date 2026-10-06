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
export function Imagem({ src, alt, largura, altura, className = '', tom = 'claro', prioridade = false }: Props) {
  const [falhou, setFalhou] = useState(false)
  const proporcao = `${largura} / ${altura}`

  if (falhou) {
    const cores =
      tom === 'escuro'
        ? 'ring-white/10 bg-[radial-gradient(80%_70%_at_85%_40%,rgb(94_211_179/0.18),transparent_70%),linear-gradient(160deg,#1a2a26,#0e1715)] text-suave-escuro'
        : 'ring-tinta/10 bg-[radial-gradient(90%_80%_at_100%_0%,var(--color-ceu),transparent_70%),linear-gradient(160deg,#ffffff,#e9efec)] text-suave-claro'
    return (
      <div
        role="img"
        aria-label={alt}
        style={{ aspectRatio: proporcao }}
        className={`flex w-full flex-col items-center justify-center gap-3 rounded-2xl p-6 text-center ring-1 ${cores} ${className}`}
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
