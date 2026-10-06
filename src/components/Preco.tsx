import { useState } from 'react'
import { MIDIAS, PRECO } from '../data/conteudo'
import { BotaoCompra } from './ui/BotaoCompra'
import { Simbolo } from './ui/Marca'
import { MidiaOpcional } from './ui/MidiaOpcional'
import { Revelar } from './ui/Revelar'
import { Secao } from './ui/Secao'

export function Preco() {
  const [semMockup, setSemMockup] = useState(false)
  const comMockup = !(semMockup && !import.meta.env.DEV)

  return (
    <Secao id="preco" numero="08" tom="claro-alt">
      <div className={comMockup ? 'grid items-center gap-10 md:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] md:gap-12' : ''}>
        {comMockup && (
          <Revelar>
            <MidiaOpcional
              {...MIDIAS.produto}
              aoFaltar={() => setSemMockup(true)}
              className="shadow-[0_40px_80px_-40px_rgb(14_23_21/0.45)]"
            />
          </Revelar>
        )}

        <Revelar>
          <div className="fundo-escuro mx-auto max-w-xl rounded-2xl px-6 py-12 text-center shadow-[0_40px_80px_-30px_rgb(14_23_21/0.55)] ring-1 ring-tinta sm:px-12 sm:py-16">
            <Simbolo tamanho={44} className="mx-auto text-[#e8efec]" />
            <h2 className="mt-5 text-[clamp(2rem,8vw,3rem)] leading-none font-semibold tracking-[-0.03em] text-[#e8efec]">
              Meu Segundo Cérebro
            </h2>
            <p className="mt-4 text-lg text-suave-escuro">Template + método + 8 prompts + guia</p>

            <div className="my-10 border-y border-white/10 py-8">
              <p className="text-[clamp(4.5rem,22vw,7rem)] leading-none font-semibold tracking-[-0.05em] text-menta">
                {PRECO}
              </p>
              <p className="mt-3 font-mono text-sm tracking-wide text-suave-escuro">pagamento único</p>
            </div>

            <BotaoCompra className="w-full [&>a]:w-full">Comprar agora</BotaoCompra>

            <p className="mt-6 font-mono text-sm leading-relaxed text-suave-escuro">
              Download imediato após o pagamento · Obsidian é gratuito
            </p>
          </div>
        </Revelar>
      </div>
    </Secao>
  )
}
