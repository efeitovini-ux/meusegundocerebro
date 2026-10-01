import { useRef } from 'react'
import { MotionConfig } from 'framer-motion'
import { Hero } from './components/Hero'
import { Reconhecimento } from './components/Reconhecimento'

export default function App() {
  const heroRef = useRef<HTMLElement>(null)
  return (
    <MotionConfig reducedMotion="user">
      <Hero ref={heroRef} />
      <main id="conteudo">
        <Reconhecimento />
      </main>
    </MotionConfig>
  )
}
