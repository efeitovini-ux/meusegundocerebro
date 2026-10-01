import { motion, useReducedMotion } from 'framer-motion'
import type { ReactNode } from 'react'

type Props = {
  children: ReactNode
  atraso?: number
  className?: string
  como?: 'div' | 'li'
}

/** Revelação suave ao rolar. Sob prefers-reduced-motion, renderiza sem animação. */
export function Revelar({ children, atraso = 0, className, como = 'div' }: Props) {
  const reduzir = useReducedMotion()

  if (reduzir) {
    const Tag = como
    return <Tag className={className}>{children}</Tag>
  }

  const Componente = como === 'li' ? motion.li : motion.div
  return (
    <Componente
      className={className}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '0px 0px -12% 0px' }}
      transition={{ duration: 0.7, delay: atraso, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </Componente>
  )
}
