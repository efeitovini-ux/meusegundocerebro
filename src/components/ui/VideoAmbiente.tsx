import { useEffect, useState } from 'react'
import { useReducedMotion } from 'framer-motion'

type Props = {
  horizontal: string
  vertical: string
  poster: string
  className?: string
  /** Onde fica o selo de pendência enquanto o arquivo não existir. */
  seloClassName?: string
}

/**
 * Vídeo decorativo em loop, mudo. Escolhe a versão vertical no celular.
 * Sob prefers-reduced-motion, mostra só o pôster parado.
 * Se o arquivo não existir, some e deixa um selo [PREENCHER-VIDEO].
 */
export function VideoAmbiente({ horizontal, vertical, poster, className = '', seloClassName = '' }: Props) {
  const reduzir = useReducedMotion()
  const [src, setSrc] = useState<string | null>(null)
  const [falhou, setFalhou] = useState(false)
  const [posterOk, setPosterOk] = useState(true)

  useEffect(() => {
    const mq = window.matchMedia('(min-width: 768px)')
    const escolher = () => setSrc(mq.matches ? horizontal : vertical)
    escolher()
    mq.addEventListener('change', escolher)
    return () => mq.removeEventListener('change', escolher)
  }, [horizontal, vertical])

  if (falhou || !src) {
    return (
      <>
        {posterOk && (
          <img
            src={poster}
            alt=""
            aria-hidden="true"
            onError={() => setPosterOk(false)}
            className={`object-cover ${className}`}
          />
        )}
        {falhou && (
          <mark className={`pendente absolute z-10 text-xs ${seloClassName}`}>[PREENCHER-VIDEO] {src}</mark>
        )}
      </>
    )
  }

  if (reduzir) {
    return posterOk ? (
      <img src={poster} alt="" aria-hidden="true" onError={() => setPosterOk(false)} className={`object-cover ${className}`} />
    ) : null
  }

  return (
    <video
      key={src}
      aria-hidden="true"
      autoPlay
      muted
      loop
      playsInline
      preload="metadata"
      poster={poster}
      onError={() => setFalhou(true)}
      className={`object-cover ${className}`}
    >
      <source src={src} type="video/mp4" onError={() => setFalhou(true)} />
    </video>
  )
}
