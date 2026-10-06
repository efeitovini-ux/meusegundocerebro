import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '../index.css'
import { Privacidade } from './Privacidade'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Privacidade />
  </StrictMode>,
)
