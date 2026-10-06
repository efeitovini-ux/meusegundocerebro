/** Símbolo: um neurônio em Y, o núcleo menta ligado a três pontos (como no logo gerado). */
export function Simbolo({ tamanho = 28, className = '' }: { tamanho?: number; className?: string }) {
  return (
    <svg viewBox="0 0 64 64" width={tamanho} height={tamanho} aria-hidden="true" className={className}>
      <g stroke="#5ED3B3" strokeWidth="3.5" strokeLinecap="round">
        <line x1="32" y1="36" x2="32" y2="12" />
        <line x1="32" y1="36" x2="12" y2="48" />
        <line x1="32" y1="36" x2="52" y2="48" />
      </g>
      <g fill="currentColor">
        <circle cx="32" cy="10" r="6" />
        <circle cx="11" cy="49" r="6" />
        <circle cx="53" cy="49" r="6" />
      </g>
      <circle cx="32" cy="36" r="10" fill="#5ED3B3" />
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
