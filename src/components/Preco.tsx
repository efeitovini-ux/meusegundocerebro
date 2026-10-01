import { PRECO } from '../data/conteudo'
import { BotaoCompra } from './ui/BotaoCompra'
import { Revelar } from './ui/Revelar'
import { Secao } from './ui/Secao'

export function Preco() {
  return (
    <Secao id="preco" numero="08" tom="claro">
      <Revelar>
        <div className="fundo-escuro mx-auto max-w-xl rounded-2xl px-6 py-12 text-center shadow-[0_40px_80px_-30px_rgb(12_10_9/0.55)] ring-1 ring-preto sm:px-12 sm:py-16">
          <h2 className="font-anton text-[clamp(2.25rem,9vw,3.75rem)] leading-none text-gelo uppercase">
            Meu Segundo Cérebro
          </h2>
          <p className="mt-4 text-lg text-cinza-claro">Template + método + 8 prompts + guia</p>

          <div className="my-10 border-y border-gelo/15 py-8">
            <p className="font-anton text-[clamp(4.5rem,22vw,7rem)] leading-none text-gelo">{PRECO}</p>
            <p className="mt-3 font-mono text-sm tracking-wide text-cinza-claro">pagamento único</p>
          </div>

          <BotaoCompra className="w-full [&>a]:w-full">Comprar agora</BotaoCompra>

          <p className="mt-6 font-mono text-sm leading-relaxed text-cinza-claro">
            Download imediato após o pagamento · Obsidian é gratuito
          </p>
        </div>
      </Revelar>
    </Secao>
  )
}
