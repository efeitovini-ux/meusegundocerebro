import { useEffect, useRef, useState } from 'react'
import { useReducedMotion } from 'framer-motion'
import type { Midia } from '../../data/conteudo'

/**
 * MP4 (H.264) toca em quase todo navegador; quem não toca recebe a versão WebM (VP9),
 * gerada com o mesmo nome ao lado.
 */
function escolherFormato(video: string) {
  const teste = document.createElement('video')
  return teste.canPlayType('video/mp4; codecs="avc1.640028"') ? video : video.replace(/\.mp4$/, '.webm')
}

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
  // O vídeo só começa a baixar quando está chegando perto da tela.
  const ref = useRef<HTMLVideoElement>(null)
  const [perto, setPerto] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el || perto) return
    const obs = new IntersectionObserver(([e]) => e.isIntersecting && setPerto(true), { rootMargin: '400px 0px' })
    obs.observe(el)
    return () => obs.disconnect()
  }, [perto, video, videoFalhou, reduzir])
  const base = `h-auto w-full rounded-2xl object-cover ${className}`

  const faltou = () => {
    setFotoFalhou(true)
    aoFaltar?.()
  }

  if (video && !videoFalhou && !reduzir) {
    return (
      <video
        ref={ref}
        src={perto ? escolherFormato(video) : undefined}
        aria-label={alt}
        autoPlay
        muted
        loop
        playsInline
        preload="none"
        poster={fotoFalhou ? undefined : foto}
        width={largura}
        height={altura}
        style={{ aspectRatio: proporcao }}
        onError={() => setVideoFalhou(true)}
        className={base}
      />
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
