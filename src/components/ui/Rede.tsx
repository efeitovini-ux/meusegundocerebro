import { m, useReducedMotion } from 'framer-motion'

type Ponto = [number, number]

const NUCLEO: Ponto = [260, 260]
const PRINCIPAIS: Ponto[] = [
  [130, 140],
  [400, 120],
  [430, 300],
  [330, 430],
  [120, 380],
  [90, 250],
]
const PONTAS: [number, Ponto][] = [
  [0, [60, 80]],
  [0, [200, 60]],
  [1, [470, 60]],
  [1, [480, 190]],
  [2, [500, 360]],
  [3, [400, 490]],
  [3, [250, 490]],
  [4, [50, 440]],
  [5, [20, 300]],
]
const PONTES: [number, number][] = [
  [0, 5],
  [2, 1],
]

/** Rótulos das áreas, ao lado de cada ponto principal (mesma ordem de PRINCIPAIS). */
const ROTULOS: { texto: string; x: number; y: number; ancora: 'start' | 'end' }[] = [
  { texto: 'Trabalho', x: 140, y: 132, ancora: 'start' },
  { texto: 'Projetos', x: 410, y: 112, ancora: 'start' },
  { texto: 'Casa', x: 442, y: 296, ancora: 'start' },
  { texto: 'Estudos', x: 340, y: 426, ancora: 'start' },
  { texto: 'Saúde', x: 20, y: 400, ancora: 'start' },
  { texto: 'Finanças', x: 20, y: 236, ancora: 'start' },
]

/**
 * A rede neural do hero: um núcleo com áreas ligadas, sinais correndo pelas conexões
 * e o nome de cada área. Puramente decorativa.
 */
export function Rede() {
  const reduzir = useReducedMotion()
  const desenhar = (atraso: number) =>
    reduzir
      ? {}
      : {
          initial: { pathLength: 0, opacity: 0 },
          animate: { pathLength: 1, opacity: 1 },
          transition: { duration: 0.9, delay: atraso, ease: 'easeOut' as const },
        }
  const surgir = (atraso: number) =>
    reduzir
      ? {}
      : {
          initial: { scale: 0, opacity: 0 },
          animate: { scale: 1, opacity: 1 },
          transition: { duration: 0.5, delay: atraso, ease: [0.22, 1, 0.36, 1] as const },
        }

  return (
    <div className="relative mx-auto aspect-square w-full max-w-[520px]" aria-hidden="true">
      <svg viewBox="0 0 520 520" className="h-full w-full overflow-visible">
        <g stroke="#5ED3B3" strokeOpacity="0.45" strokeWidth="1.2">
          {PRINCIPAIS.map(([x, y], i) => (
            <m.line key={`c${i}`} x1={NUCLEO[0]} y1={NUCLEO[1]} x2={x} y2={y} {...desenhar(0.2 + i * 0.08)} />
          ))}
          {PONTAS.map(([de, [x, y]], i) => (
            <m.line
              key={`p${i}`}
              x1={PRINCIPAIS[de][0]}
              y1={PRINCIPAIS[de][1]}
              x2={x}
              y2={y}
              {...desenhar(0.8 + i * 0.05)}
            />
          ))}
          {PONTES.map(([a, b], i) => (
            <m.line
              key={`b${i}`}
              x1={PRINCIPAIS[a][0]}
              y1={PRINCIPAIS[a][1]}
              x2={PRINCIPAIS[b][0]}
              y2={PRINCIPAIS[b][1]}
              {...desenhar(1.2 + i * 0.1)}
            />
          ))}
        </g>

        {!reduzir &&
          PRINCIPAIS.map(([x, y], i) => (
            <m.circle
              key={`s${i}`}
              r="3.5"
              fill="#5ED3B3"
              initial={{ cx: NUCLEO[0], cy: NUCLEO[1], opacity: 0 }}
              animate={{ cx: [NUCLEO[0], x], cy: [NUCLEO[1], y], opacity: [0, 1, 1, 0] }}
              transition={{ duration: 1.8, delay: 1.6 + i * 0.7, repeat: Infinity, repeatDelay: 2.4, ease: 'easeInOut' }}
            />
          ))}

        <g fill="#E8EFEC">
          {PONTAS.map(([, [x, y]], i) => (
            <m.circle key={`np${i}`} cx={x} cy={y} r="4" style={{ transformOrigin: `${x}px ${y}px` }} {...surgir(1 + i * 0.05)} />
          ))}
          {PRINCIPAIS.map(([x, y], i) => (
            <m.circle key={`nc${i}`} cx={x} cy={y} r="7" style={{ transformOrigin: `${x}px ${y}px` }} {...surgir(0.5 + i * 0.08)} />
          ))}
        </g>

        <m.circle
          cx={NUCLEO[0]}
          cy={NUCLEO[1]}
          r="34"
          fill="none"
          stroke="#5ED3B3"
          strokeOpacity="0.35"
          style={{ transformOrigin: '260px 260px' }}
          {...(reduzir
            ? {}
            : {
                animate: { scale: [1, 1.35, 1], opacity: [0.8, 0, 0.8] },
                transition: { duration: 3, repeat: Infinity, ease: 'easeOut' },
              })}
        />
        <m.circle cx={NUCLEO[0]} cy={NUCLEO[1]} r="16" fill="#5ED3B3" style={{ transformOrigin: '260px 260px' }} {...surgir(0)} />
        {ROTULOS.map(({ texto, x, y, ancora }, i) => (
          <m.text
            key={texto}
            x={x}
            y={y}
            textAnchor={ancora}
            fill="#A9BDB7"
            fontSize="15"
            fontFamily="'Instrument Sans', sans-serif"
            {...(reduzir
              ? {}
              : { initial: { opacity: 0 }, animate: { opacity: 1 }, transition: { duration: 0.6, delay: 0.9 + i * 0.08 } })}
          >
            {texto}
          </m.text>
        ))}
        <text x="260" y="310" textAnchor="middle" fill="#A9BDB7" fontSize="14" fontFamily="'JetBrains Mono', monospace">
          núcleo
        </text>
      </svg>

    </div>
  )
}
