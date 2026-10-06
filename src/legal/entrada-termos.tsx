import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '../index.css'
import { Termos } from './Termos'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Termos />
  </StrictMode>,
)
