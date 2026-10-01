import { CAMPOS_PENDENTES } from '../data/conteudo'

/**
 * Faixa amarela no topo enquanto houver [PREENCHER] em src/data/conteudo.ts.
 * Some sozinha quando todos os campos forem trocados.
 */
export function AvisoPendencias() {
  if (CAMPOS_PENDENTES.length === 0) return null
  return (
    <div role="alert" className="bg-[#fde047] px-4 py-3 text-preto sm:px-6">
      <p className="mx-auto max-w-5xl font-mono text-sm leading-relaxed font-bold">
        Não publique ainda. Falta preencher em src/data/conteudo.ts: {CAMPOS_PENDENTES.join(', ')}
      </p>
    </div>
  )
}
