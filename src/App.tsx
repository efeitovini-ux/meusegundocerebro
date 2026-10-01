import { useRef } from 'react'
import { LazyMotion, MotionConfig, domAnimation } from 'framer-motion'
import { AvisoPendencias } from './components/AvisoPendencias'
import { Hero } from './components/Hero'
import { Reconhecimento } from './components/Reconhecimento'
import { Virada } from './components/Virada'
import { OQueVemDentro } from './components/OQueVemDentro'
import { PrimeiraVitoria } from './components/PrimeiraVitoria'
import { PraQuemE } from './components/PraQuemE'
import { QuemFez } from './components/QuemFez'
import { Preco } from './components/Preco'
import { Duvidas } from './components/Duvidas'
import { Rodape } from './components/Rodape'
import { BarraCompraMovel } from './components/BarraCompraMovel'

export default function App() {
  const heroRef = useRef<HTMLElement>(null)
  return (
    <LazyMotion features={domAnimation} strict>
      <MotionConfig reducedMotion="user">
        <AvisoPendencias />
        <Hero ref={heroRef} />
        <main id="conteudo">
          <Reconhecimento />
          <Virada />
          <OQueVemDentro />
          <PrimeiraVitoria />
          <PraQuemE />
          <QuemFez />
          <Preco />
          <Duvidas />
        </main>
        <Rodape />
        <BarraCompraMovel alvo={heroRef} />
      </MotionConfig>
    </LazyMotion>
  )
}
