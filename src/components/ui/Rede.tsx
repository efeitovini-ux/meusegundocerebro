import { m, useReducedMotion } from 'framer-motion'
import { POSTITS_HERO } from '../../data/conteudo'

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

/** Onde cada post-it se prende: índice do ponto principal e deslocamento do papel. */
const PRESOS: { ponto: number; rot: number; dx: string; dy: string }[] = [
  { ponto: 0, rot: -6, dx: '-55%', dy: '-115%' },
  { ponto: 2, rot: 4, dx: '-55%', dy: '35%' },
  { ponto: 4, rot: -3, dx: '-20%', dy: '30%' },
]

/**
 * A rede neural do hero: um núcleo com áreas ligadas, sinais correndo pelas conexões
 * e três post-its presos (os prompts). Puramente decorativa.
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
        <text x="260" y="310" textAnchor="middle" fill="#A9BDB7" fontSize="14" fontFamily="'JetBrains Mono', monospace">
          núcleo
        </text>
      </svg>

      {PRESOS.map(({ ponto, rot, dx, dy }, i) => {
        const [x, y] = PRINCIPAIS[ponto]
        return (
          <m.div
            key={POSTITS_HERO[i]}
            className="absolute"
            style={{ left: `${(x / 520) * 100}%`, top: `${(y / 520) * 100}%` }}
            {...(reduzir
              ? {}
              : {
                  initial: { opacity: 0, y: -12 },
                  animate: { opacity: 1, y: 0 },
                  transition: { duration: 0.6, delay: 1.5 + i * 0.25, ease: [0.22, 1, 0.36, 1] },
                })}
          >
            <div
              className="postit w-[clamp(6.5rem,26vw,8.5rem)] rounded-sm px-3 py-2.5 text-[clamp(1.15rem,4.4vw,1.45rem)] leading-tight font-semibold"
              style={{ transform: `translate(${dx}, ${dy}) rotate(${rot}deg)` }}
            >
              {POSTITS_HERO[i]}
            </div>
          </m.div>
        )
      })}
    </div>
  )
}
