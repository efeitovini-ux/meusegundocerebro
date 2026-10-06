import { CAMPOS_PENDENTES, VAULT_PENDENTE } from '../data/conteudo'

/**
 * Faixa amarela no topo enquanto houver [PREENCHER] em src/data/conteudo.ts.
 * Some sozinha quando todos os campos forem trocados.
 */
export function AvisoPendencias() {
  const pendentes = VAULT_PENDENTE ? [...CAMPOS_PENDENTES, 'VAULT (estrutura do grafo)'] : CAMPOS_PENDENTES
  if (pendentes.length === 0) return null
  return (
    <div role="alert" className="bg-[#fde047] px-4 py-3 text-tinta sm:px-6">
      <p className="mx-auto max-w-6xl font-mono text-sm leading-relaxed font-bold">
        Não publique ainda. Falta preencher em src/data/conteudo.ts: {pendentes.join(', ')}
      </p>
    </div>
  )
}
