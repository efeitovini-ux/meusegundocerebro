import { m, useReducedMotion } from 'framer-motion'

/**
 * O despejo mental em imagem: post-its jogados de qualquer jeito
 * que, ao entrar na tela, se alinham em três colunas e se ligam por fios menta.
 */
const ESPALHADOS = [
  { x: 34, y: 26, r: -14 },
  { x: -18, y: 58, r: 9 },
  { x: -40, y: -6, r: -6 },
  { x: 52, y: -38, r: 12 },
  { x: 10, y: 40, r: -18 },
  { x: -46, y: 30, r: 7 },
  { x: 28, y: -54, r: -9 },
  { x: -8, y: -46, r: 16 },
  { x: -30, y: -20, r: -11 },
]

const RABISCOS = ['M6 10 q8 -6 16 0 t16 0 t16 0', 'M6 22 q6 -5 12 0 t12 0 t14 0', 'M6 34 q7 -5 14 0 t14 0']

export function Despejo() {
  const reduzir = useReducedMotion()

  return (
    <div className="relative mx-auto aspect-square w-full max-w-md" aria-hidden="true">
      {/* Fios que aparecem depois que tudo se organiza */}
      <svg viewBox="0 0 300 300" className="absolute inset-0 h-full w-full">
        <g stroke="#5ED3B3" strokeWidth="1.5" strokeOpacity="0.55" fill="none">
          {[50, 150, 250].map((x, i) => (
            <m.line
              key={x}
              x1={x}
              y1="50"
              x2={x}
              y2="250"
              {...(reduzir
                ? {}
                : {
                    initial: { pathLength: 0 },
                    whileInView: { pathLength: 1 },
                    viewport: { once: true, margin: '0px 0px -20% 0px' },
                    transition: { duration: 0.8, delay: 1.3 + i * 0.15 },
                  })}
            />
          ))}
          <m.path
            d="M50 150 H250"
            {...(reduzir
              ? {}
              : {
                  initial: { pathLength: 0 },
                  whileInView: { pathLength: 1 },
                  viewport: { once: true, margin: '0px 0px -20% 0px' },
                  transition: { duration: 0.8, delay: 1.8 },
                })}
          />
        </g>
      </svg>

      <div className="absolute inset-0 grid grid-cols-3 grid-rows-3 place-items-center">
        {ESPALHADOS.map((e, i) => (
          <m.div
            key={i}
            className="postit aspect-square w-[72%] rounded-sm p-[8%]"
            {...(reduzir
              ? {}
              : {
                  initial: { x: `${e.x}%`, y: `${e.y}%`, rotate: e.r * 1.6 },
                  whileInView: { x: '0%', y: '0%', rotate: (i % 2 ? 1.5 : -1.5) },
                  viewport: { once: true, margin: '0px 0px -20% 0px' },
                  transition: { type: 'spring', stiffness: 60, damping: 14, delay: 0.25 + i * 0.07 },
                })}
          >
            <svg viewBox="0 0 54 42" className="h-full w-full">
              {RABISCOS.slice(0, 2 + (i % 2)).map((d) => (
                <path key={d} d={d} fill="none" stroke="#0E1715" strokeOpacity="0.45" strokeWidth="2.2" strokeLinecap="round" />
              ))}
            </svg>
          </m.div>
        ))}
      </div>
    </div>
  )
}
