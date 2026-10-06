import { useState } from 'react'
import { useReducedMotion } from 'framer-motion'
import type { Midia } from '../../data/conteudo'

type Props = Midia & {
  className?: string
  /** Avisa quem está em volta quando a mídia não existe, para ajustar o layout. */
  aoFaltar?: () => void
}

/**
 * Foto ou vídeo em loop (mudo) que incrementa a página.
 * - com vídeo: toca em loop; a foto é o pôster e o substituto sob prefers-reduced-motion;
 * - sem arquivo nenhum: some no site publicado; em desenvolvimento mostra onde entra.
 */
export function MidiaOpcional({ foto, video, largura, altura, alt, className = '', aoFaltar }: Props) {
  const reduzir = useReducedMotion()
  const [videoFalhou, setVideoFalhou] = useState(false)
  const [fotoFalhou, setFotoFalhou] = useState(false)
  const proporcao = `${largura} / ${altura}`
  const base = `h-auto w-full rounded-2xl object-cover ${className}`

  const faltou = () => {
    setFotoFalhou(true)
    aoFaltar?.()
  }

  if (video && !videoFalhou && !reduzir) {
    return (
      <video
        aria-label={alt}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster={fotoFalhou ? undefined : foto}
        width={largura}
        height={altura}
        style={{ aspectRatio: proporcao }}
        onError={() => setVideoFalhou(true)}
        className={base}
      >
        <source src={video} type="video/mp4" onError={() => setVideoFalhou(true)} />
      </video>
    )
  }

  if (fotoFalhou) {
    if (!import.meta.env.DEV) return null
    return (
      <div
        style={{ aspectRatio: proporcao }}
        className={`grid w-full place-items-center rounded-2xl bg-white/60 p-3 text-center ring-1 ring-tinta/10 ${className}`}
      >
        <mark className="pendente text-xs break-all">[OPCIONAL] {video ?? foto}</mark>
      </div>
    )
  }

  return (
    <img
      src={foto}
      alt={alt}
      width={largura}
      height={altura}
      loading="lazy"
      decoding="async"
      onError={faltou}
      style={{ aspectRatio: proporcao }}
      className={base}
    />
  )
}
