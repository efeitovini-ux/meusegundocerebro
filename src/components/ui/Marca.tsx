/** Marca: um neurônio (núcleo menta ligado a três pontos) e o nome. */
export function Simbolo({ tamanho = 28, className = '' }: { tamanho?: number; className?: string }) {
  return (
    <svg viewBox="0 0 64 64" width={tamanho} height={tamanho} aria-hidden="true" className={className}>
      <g stroke="#5ED3B3" strokeWidth="3" strokeLinecap="round" opacity="0.7">
        <line x1="32" y1="34" x2="15" y2="18" />
        <line x1="32" y1="34" x2="50" y2="20" />
        <line x1="32" y1="34" x2="44" y2="51" />
      </g>
      <g fill="currentColor">
        <circle cx="15" cy="18" r="5" />
        <circle cx="50" cy="20" r="5" />
        <circle cx="44" cy="51" r="5" />
      </g>
      <circle cx="32" cy="34" r="9" fill="#5ED3B3" />
    </svg>
  )
}

export function Marca({ className = '' }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-3 font-sans font-semibold tracking-tight ${className}`}>
      <Simbolo />
      Meu Segundo Cérebro
    </span>
  )
}
