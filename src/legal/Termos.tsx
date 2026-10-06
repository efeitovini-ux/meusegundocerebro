import { EMAIL_CONTATO, POLITICA_REEMBOLSO, PRECO, RESPONSAVEL } from '../data/conteudo'
import { Clausula, PaginaLegal } from '../components/PaginaLegal'
import { Preencher } from '../components/ui/Preencher'

export function Termos() {
  return (
    <PaginaLegal titulo="Termos de uso" atualizacao="6 de outubro de 2026">
      <p className="text-lg leading-relaxed text-suave-claro">
        Estes termos valem para quem compra e usa o <strong className="text-tinta">Meu Segundo Cérebro</strong>,
        vendido por <Preencher valor={RESPONSAVEL} />. Ao comprar, você concorda com eles. Se tiver qualquer
        dúvida, escreva para <Preencher valor={EMAIL_CONTATO} />.
      </p>

      <Clausula numero="01" titulo="O que é o produto">
        <p>O Meu Segundo Cérebro é um produto digital de organização pessoal. Ele inclui:</p>
        <ul>
          <li>um cofre (vault) de Obsidian já montado, com o núcleo e nove áreas da vida, entregue em arquivo .zip;</li>
          <li>o método, explicando como guardar contexto em vez de tarefa;</li>
          <li>oito prompts prontos para usar no ChatGPT ou no Claude;</li>
          <li>um guia de início em PDF, com cinco páginas.</li>
        </ul>
        <p>Não é curso, não tem mensalidade e não depende de plataforma de aulas.</p>
      </Clausula>

      <Clausula numero="02" titulo="Preço, pagamento e entrega">
        <p>
          O preço é <strong>{PRECO}</strong>, em pagamento único. O pagamento é processado pela Kiwify, que segue
          os próprios termos e formas de pagamento.
        </p>
        <p>
          Depois que a Kiwify confirma o pagamento, você recebe o acesso para baixar os arquivos. Se o acesso não
          chegar, confira a caixa de spam e depois fale com a gente pelo e-mail acima.
        </p>
      </Clausula>

      <Clausula numero="03" titulo="Reembolso">
        <p>{POLITICA_REEMBOLSO}</p>
        <p>
          Esse prazo segue o direito de arrependimento do Código de Defesa do Consumidor (art. 49) para compras
          feitas pela internet.
        </p>
      </Clausula>

      <Clausula numero="04" titulo="O que você pode e não pode fazer com os arquivos">
        <p>
          A compra dá a você uma licença <strong>pessoal e intransferível</strong>. Você pode usar, mudar e adaptar
          o vault, o método e os prompts à vontade, na sua vida e no seu trabalho.
        </p>
        <p>Você não pode:</p>
        <ul>
          <li>revender, emprestar, distribuir ou compartilhar os arquivos, pagos ou de graça;</li>
          <li>publicar o conteúdo, inteiro ou em partes, como se fosse seu;</li>
          <li>incluir o material em outro produto, curso ou serviço.</li>
        </ul>
      </Clausula>

      <Clausula numero="05" titulo="Ferramentas de terceiros">
        <p>
          O produto funciona com ferramentas que não são nossas: o Obsidian, o ChatGPT (OpenAI) e o Claude
          (Anthropic). Cada uma tem os próprios termos, preços e regras de privacidade, e pode mudar sem aviso.
          Não temos controle sobre elas e não respondemos por mudanças, falhas ou cobranças dessas ferramentas.
        </p>
        <p>Hoje o Obsidian é gratuito para uso pessoal, e as versões gratuitas do ChatGPT e do Claude dão conta de começar.</p>
      </Clausula>

      <Clausula numero="06" titulo="Resultados">
        <p>
          O Meu Segundo Cérebro é uma ferramenta de organização pessoal. O resultado depende de como você usa.
          Ele não substitui acompanhamento profissional e não promete resultado clínico.
        </p>
      </Clausula>

      <Clausula numero="07" titulo="Seus dados dentro do produto">
        <p>
          O vault roda no seu computador. Nada do que você escreve no Obsidian passa por nós. Como seus dados são
          usados no site e na compra está explicado na{' '}
          <a href="/privacidade/" className="underline decoration-menta-escura underline-offset-4">
            política de privacidade
          </a>
          .
        </p>
      </Clausula>

      <Clausula numero="08" titulo="Direitos sobre o conteúdo">
        <p>
          Os textos, o método, os prompts, o guia, a marca e a página são protegidos por direito autoral e
          pertencem a <Preencher valor={RESPONSAVEL} />. A compra dá direito de uso, não de propriedade.
        </p>
      </Clausula>

      <Clausula numero="09" titulo="Mudanças nestes termos">
        <p>
          Estes termos podem ser atualizados. Para a sua compra, valem as condições publicadas na data em que
          você comprou.
        </p>
      </Clausula>

      <Clausula numero="10" titulo="Lei e foro">
        <p>
          Estes termos seguem as leis do Brasil. Qualquer questão é resolvida no foro do domicílio do consumidor.
        </p>
      </Clausula>
    </PaginaLegal>
  )
}
