import { useCallback, useEffect, useRef, useState } from 'react'
import { useReducedMotion } from 'framer-motion'
import { VAULT, estaPendente, type ModuloVault } from '../../data/conteudo'

/*
 * Grafo interativo do vault: o núcleo no centro, as áreas e os prompts em volta.
 * Passar o mouse (ou tocar) mostra o que vem no módulo; clicar abre os itens dele;
 * arrastar mexe na rede, que se reacomoda com uma física de mola parecida com a do Obsidian.
 * Física própria, sem biblioteca, para manter a página leve.
 */

type Tipo = 'nucleo' | 'modulo' | 'item'
type No = {
  id: string
  tipo: Tipo
  rotulo: string
  modulo?: ModuloVault
  pai?: string
  x: number
  y: number
  vx: number
  vy: number
  preso: boolean
}
type Ligacao = { de: string; para: string; comprimento: number }

const RAIO: Record<Tipo, number> = { nucleo: 18, modulo: 9, item: 5 }

/** Nome curto para desenhar no grafo; o [PREENCHER] completo aparece no cartão. */
function rotuloCurto(nome: string, i: number) {
  return estaPendente(nome) ? `Área ${i + 1}` : nome
}

function montarRede(largura: number, altura: number) {
  const cx = largura / 2
  const cy = altura / 2
  const modulos = [...VAULT.areas.map((m, i) => ({ m, rotulo: rotuloCurto(m.nome, i) })), { m: VAULT.prompts, rotulo: VAULT.prompts.nome }]
  const raio = Math.min(largura, altura) * 0.34
  const nos: No[] = [
    { id: 'nucleo', tipo: 'nucleo', rotulo: VAULT.nucleo.nome, modulo: VAULT.nucleo, x: cx, y: cy, vx: 0, vy: 0, preso: false },
    ...modulos.map(({ m, rotulo }, i) => {
      const angulo = (i / modulos.length) * Math.PI * 2 - Math.PI / 2
      return {
        id: `m${i}`,
        tipo: 'modulo' as const,
        rotulo,
        modulo: m,
        x: cx + Math.cos(angulo) * raio,
        y: cy + Math.sin(angulo) * raio,
        vx: 0,
        vy: 0,
        preso: false,
      }
    }),
  ]
  const ligacoes: Ligacao[] = modulos.map((_, i) => ({ de: 'nucleo', para: `m${i}`, comprimento: raio }))
  return { nos, ligacoes }
}

/** Um passo da física: repulsão entre todos, molas nas ligações, leve atração ao centro. */
function passo(nos: No[], ligacoes: Ligacao[], largura: number, altura: number) {
  const porId = new Map(nos.map((n) => [n.id, n]))
  for (let i = 0; i < nos.length; i++) {
    for (let j = i + 1; j < nos.length; j++) {
      const a = nos[i]
      const b = nos[j]
      let dx = b.x - a.x
      let dy = b.y - a.y
      let d2 = dx * dx + dy * dy
      if (d2 < 0.01) {
        dx = Math.random() - 0.5
        dy = Math.random() - 0.5
        d2 = 0.5
      }
      const forca = (a.tipo === 'item' || b.tipo === 'item' ? 900 : 2600) / d2
      const d = Math.sqrt(d2)
      const fx = (dx / d) * forca
      const fy = (dy / d) * forca
      a.vx -= fx
      a.vy -= fy
      b.vx += fx
      b.vy += fy
    }
  }
  for (const l of ligacoes) {
    const a = porId.get(l.de)!
    const b = porId.get(l.para)!
    const dx = b.x - a.x
    const dy = b.y - a.y
    const d = Math.sqrt(dx * dx + dy * dy) || 1
    const f = (d - l.comprimento) * 0.03
    const fx = (dx / d) * f
    const fy = (dy / d) * f
    a.vx += fx
    a.vy += fy
    b.vx -= fx
    b.vy -= fy
  }
  let energia = 0
  const margem = 24
  for (const n of nos) {
    if (n.preso) {
      n.vx = 0
      n.vy = 0
      continue
    }
    const gravidade = n.tipo === 'nucleo' ? 0.04 : 0.004
    n.vx += (largura / 2 - n.x) * gravidade
    n.vy += (altura / 2 - n.y) * gravidade
    n.vx *= 0.82
    n.vy *= 0.82
    n.x = Math.min(largura - margem, Math.max(margem, n.x + n.vx))
    n.y = Math.min(altura - margem, Math.max(margem, n.y + n.vy))
    energia += Math.abs(n.vx) + Math.abs(n.vy)
  }
  return energia
}

function Cartao({ no, largura, altura, aberto, fixo }: { no: No; largura: number; altura: number; aberto: boolean; fixo: boolean }) {
  const m = no.modulo
  const px = (no.x / largura) * 100
  const py = (no.y / altura) * 100
  const abaixo = py < 38
  const tx = px < 25 ? '-12%' : px > 75 ? '-88%' : '-50%'
  const base = 'rounded-xl bg-[#f5f7f5] p-4 text-left text-tinta ring-1 ring-black/10'
  return (
    <div
      className={
        fixo
          ? `${base} mx-2 mt-2`
          : `${base} pointer-events-none absolute z-20 w-[min(17rem,80%)] shadow-[0_20px_40px_-12px_rgb(0_0_0/0.6)]`
      }
      style={
        fixo
          ? undefined
          : {
              left: `${px}%`,
              top: `${py}%`,
              transform: `translate(${tx}, ${abaixo ? '28px' : 'calc(-100% - 28px)'})`,
            }
      }
      role="status"
    >
      {m ? (
        <>
          <p className="text-base leading-snug font-semibold">
            <Texto valor={m.nome} />
          </p>
          <p className="mt-1 text-sm leading-relaxed text-suave-claro">
            <Texto valor={m.descricao} />
          </p>
          {m.itens.length > 0 && (
            <>
              <ul className="mt-2 space-y-0.5 text-sm leading-snug">
                {m.itens.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="mt-[0.45em] size-1.5 shrink-0 rounded-full bg-menta-escura" aria-hidden="true" />
                    <Texto valor={item} />
                  </li>
                ))}
              </ul>
              <p className="mt-2 font-mono text-xs text-menta-escura">{fixo ? (aberto ? 'toque de novo para fechar' : 'toque de novo para abrir no grafo') : aberto ? 'clique para fechar' : 'clique para abrir no grafo'}</p>
            </>
          )}
        </>
      ) : (
        <p className="text-sm leading-snug font-medium">
          <Texto valor={no.rotulo} />
        </p>
      )}
    </div>
  )
}

function Texto({ valor }: { valor: string }) {
  if (estaPendente(valor)) return <mark className="pendente text-[0.7rem] break-all">{valor}</mark>
  return <>{valor}</>
}

export function GrafoVault() {
  const reduzir = useReducedMotion()
  const caixa = useRef<HTMLDivElement>(null)
  const svg = useRef<SVGSVGElement>(null)
  const [dim, setDim] = useState({ largura: 800, altura: 520 })
  const rede = useRef(montarRede(800, 520))
  const [, setQuadro] = useState(0)
  const [abertos, setAbertos] = useState<Set<string>>(new Set())
  const [ativo, setAtivo] = useState<string | null>(null)
  const animacao = useRef<number | null>(null)
  const arrasto = useRef<{ id: string; x0: number; y0: number; moveu: boolean; toque: boolean; jaAtivo: boolean } | null>(null)

  const dimRef = useRef(dim)
  const redesenhar = useCallback(() => setQuadro((q) => q + 1), [])

  /** Liga a física até a rede assentar. Sob movimento reduzido, assenta de uma vez. */
  const agitar = useCallback(() => {
    const { largura, altura } = dimRef.current
    if (reduzir) {
      for (let i = 0; i < 300; i++) passo(rede.current.nos, rede.current.ligacoes, largura, altura)
      redesenhar()
      return
    }
    if (animacao.current !== null) return
    const loop = () => {
      const energia = passo(rede.current.nos, rede.current.ligacoes, largura, altura)
      redesenhar()
      if (energia < 0.05 * rede.current.nos.length && !arrasto.current) {
        animacao.current = null
        return
      }
      animacao.current = requestAnimationFrame(loop)
    }
    animacao.current = requestAnimationFrame(loop)
  }, [reduzir, redesenhar])

  // Celular ganha um quadro mais alto; desktop, mais largo.
  useEffect(() => {
    const estreito = (caixa.current?.clientWidth ?? 800) < 640
    const nova = estreito ? { largura: 400, altura: 430 } : { largura: 800, altura: 520 }
    dimRef.current = nova
    setDim(nova)
    rede.current = montarRede(nova.largura, nova.altura)
    agitar()
    return () => {
      if (animacao.current !== null) cancelAnimationFrame(animacao.current)
      animacao.current = null
    }
  }, [agitar])

  /** Abre ou fecha os itens de um módulo, criando neurônios menores em volta dele. */
  const alternar = (id: string) => {
    const no = rede.current.nos.find((n) => n.id === id)
    if (!no?.modulo || no.modulo.itens.length === 0) return
    const novos = new Set(abertos)
    if (novos.has(id)) {
      novos.delete(id)
      rede.current.nos = rede.current.nos.filter((n) => n.pai !== id)
      rede.current.ligacoes = rede.current.ligacoes.filter((l) => !l.para.startsWith(`${id}-`))
    } else {
      novos.add(id)
      no.modulo.itens.forEach((item, i) => {
        const angulo = (i / no.modulo!.itens.length) * Math.PI * 2
        const filho: No = {
          id: `${id}-${i}`,
          tipo: 'item',
          rotulo: item,
          pai: id,
          x: no.x + Math.cos(angulo) * 20,
          y: no.y + Math.sin(angulo) * 20,
          vx: 0,
          vy: 0,
          preso: false,
        }
        rede.current.nos.push(filho)
        rede.current.ligacoes.push({ de: id, para: filho.id, comprimento: id === 'nucleo' ? 70 : 52 })
      })
    }
    setAbertos(novos)
    agitar()
  }

  const pontoNoSvg = (e: React.PointerEvent) => {
    const s = svg.current!
    const p = s.createSVGPoint()
    p.x = e.clientX
    p.y = e.clientY
    const m = s.getScreenCTM()
    return m ? p.matrixTransform(m.inverse()) : p
  }

  const aoApertar = (e: React.PointerEvent, id: string) => {
    e.stopPropagation()
    ;(e.currentTarget as Element).setPointerCapture(e.pointerId)
    arrasto.current = {
      id,
      x0: e.clientX,
      y0: e.clientY,
      moveu: false,
      toque: e.pointerType !== 'mouse',
      jaAtivo: ativo === id,
    }
    setAtivo(id)
  }

  const aoMover = (e: React.PointerEvent) => {
    const a = arrasto.current
    if (!a) return
    if (Math.abs(e.clientX - a.x0) + Math.abs(e.clientY - a.y0) > 4) a.moveu = true
    if (!a.moveu) return
    const no = rede.current.nos.find((n) => n.id === a.id)
    if (!no) return
    const p = pontoNoSvg(e)
    no.x = p.x
    no.y = p.y
    no.preso = true
    agitar()
    redesenhar()
  }

  const aoSoltar = (id: string) => {
    const a = arrasto.current
    arrasto.current = null
    const no = rede.current.nos.find((n) => n.id === id)
    if (no) no.preso = false
    // No mouse, clicar abre na hora (o cartão já apareceu ao passar o mouse).
    // No toque, o primeiro toque mostra o cartão e o segundo abre os itens.
    if (a && !a.moveu && (!a.toque || a.jaAtivo)) alternar(id)
    agitar()
  }

  const { largura, altura } = dim
  const porId = new Map(rede.current.nos.map((n) => [n.id, n]))
  const noAtivo = ativo ? porId.get(ativo) : undefined
  const ordem = [...rede.current.nos].sort((a, b) => (a.tipo === 'item' ? 0 : 1) - (b.tipo === 'item' ? 0 : 1))

  return (
    <div ref={caixa} className="relative w-full select-none">
      <svg
        ref={svg}
        viewBox={`0 0 ${largura} ${altura}`}
        className="block h-auto w-full touch-pan-y"
        onPointerDown={() => setAtivo(null)}
        role="group"
        aria-label="Grafo interativo do vault: o núcleo ligado às áreas da vida e aos prompts. Use Tab para passar pelos módulos e Enter para abrir os itens de cada um."
      >
        <g stroke="#5ED3B3" strokeLinecap="round">
          {rede.current.ligacoes.map((l) => {
            const a = porId.get(l.de)!
            const b = porId.get(l.para)!
            const destaque = ativo === l.de || ativo === l.para
            return (
              <line
                key={`${l.de}>${l.para}`}
                x1={a.x}
                y1={a.y}
                x2={b.x}
                y2={b.y}
                strokeOpacity={destaque ? 0.9 : 0.35}
                strokeWidth={destaque ? 2 : 1.2}
              />
            )
          })}
        </g>

        {ordem.map((n) => {
          const r = RAIO[n.tipo]
          const destaque = ativo === n.id
          const aberto = abertos.has(n.id)
          const temItens = (n.modulo?.itens.length ?? 0) > 0
          return (
            <g
              key={n.id}
              transform={`translate(${n.x} ${n.y})`}
              className="cursor-grab touch-none outline-none active:cursor-grabbing"
              tabIndex={n.tipo === 'item' ? -1 : 0}
              role="button"
              aria-label={`${n.modulo ? n.modulo.nome : n.rotulo}${temItens ? `, ${n.modulo!.itens.length} itens` : ''}`}
              aria-expanded={temItens ? aberto : undefined}
              onPointerEnter={(e) => e.pointerType === 'mouse' && !arrasto.current && setAtivo(n.id)}
              onPointerLeave={(e) => e.pointerType === 'mouse' && !arrasto.current && setAtivo((x) => (x === n.id ? null : x))}
              onPointerDown={(e) => aoApertar(e, n.id)}
              onPointerMove={aoMover}
              onPointerUp={() => aoSoltar(n.id)}
              onFocus={() => setAtivo(n.id)}
              onBlur={() => setAtivo((x) => (x === n.id ? null : x))}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault()
                  alternar(n.id)
                }
              }}
            >
              {/* Área de toque maior que o desenho, para o dedo acertar */}
              <circle r={Math.max(r + 12, 22)} fill="transparent" />
              {(destaque || n.tipo === 'nucleo') && (
                <circle r={r + (n.tipo === 'nucleo' ? 16 : 8)} fill="none" stroke="#5ED3B3" strokeOpacity={destaque ? 0.6 : 0.3} />
              )}
              <circle
                r={destaque ? r * 1.25 : r}
                fill={n.tipo === 'item' ? '#A9BDB7' : n.tipo === 'nucleo' || aberto || destaque ? '#5ED3B3' : '#E8EFEC'}
              />
              {n.tipo === 'item' && (
                <text
                  x={n.x > largura * 0.62 ? -(r + 6) : r + 6}
                  y={4}
                  textAnchor={n.x > largura * 0.62 ? 'end' : 'start'}
                  fill={destaque ? '#E8EFEC' : '#A9BDB7'}
                  fontSize={largura < 640 ? 13 : 12}
                  fontFamily="'Instrument Sans', sans-serif"
                  className="pointer-events-none"
                >
                  {estaPendente(n.rotulo) ? '…' : n.rotulo}
                </text>
              )}
              {n.tipo !== 'item' && (
                <text
                  y={r + 18}
                  textAnchor="middle"
                  fill={destaque ? '#E8EFEC' : '#A9BDB7'}
                  fontSize={largura < 640 ? 15 : 14}
                  fontFamily="'Instrument Sans', sans-serif"
                  className="pointer-events-none"
                >
                  {n.rotulo}
                </text>
              )}
            </g>
          )
        })}
      </svg>

      {noAtivo && !arrasto.current?.moveu && <Cartao no={noAtivo} largura={largura} altura={altura} aberto={abertos.has(noAtivo.id)} fixo={largura < 640} />}
    </div>
  )
}
