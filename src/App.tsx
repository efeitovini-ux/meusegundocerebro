import { useRef } from 'react'
import { MotionConfig } from 'framer-motion'
import { Hero } from './components/Hero'
import { Reconhecimento } from './components/Reconhecimento'
import { Virada } from './components/Virada'

export default function App() {
  const heroRef = useRef<HTMLElement>(null)
  return (
    <MotionConfig reducedMotion="user">
      <Hero ref={heroRef} />
      <main id="conteudo">
        <Reconhecimento />
        <Virada />
      </main>
    </MotionConfig>
  )
}
