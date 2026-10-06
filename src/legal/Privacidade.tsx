import { EMAIL_CONTATO, RESPONSAVEL } from '../data/conteudo'
import { Clausula, PaginaLegal } from '../components/PaginaLegal'
import { Preencher } from '../components/ui/Preencher'

export function Privacidade() {
  return (
    <PaginaLegal titulo="Política de privacidade" atualizacao="6 de outubro de 2026">
      <p className="text-lg leading-relaxed text-suave-claro">
        Esta política explica quais dados pessoais são coletados quando você visita esta página e compra o{' '}
        <strong className="text-tinta">Meu Segundo Cérebro</strong>, para que eles servem e quais são os seus
        direitos, de acordo com a Lei Geral de Proteção de Dados (Lei 13.709/2018). O responsável pelos dados é{' '}
        <Preencher valor={RESPONSAVEL} />, e o contato é <Preencher valor={EMAIL_CONTATO} />.
      </p>

      <Clausula numero="01" titulo="O resumo">
        <ul>
          <li>Esta página não tem formulário, não pede cadastro e não usa cookies de rastreamento nem ferramentas de análise de visitas.</li>
          <li>O pagamento acontece na Kiwify, não aqui.</li>
          <li>O que você escreve no seu vault fica no seu computador e nunca passa por nós.</li>
          <li>Não vendemos e não repassamos seus dados para publicidade.</li>
        </ul>
      </Clausula>

      <Clausula numero="02" titulo="Quando você visita a página">
        <p>
          <strong>Hospedagem.</strong> O site fica na Vercel, que registra dados técnicos de cada acesso, como
          endereço IP, tipo de navegador e páginas abertas, para manter o site seguro e funcionando.
        </p>
        <p>
          <strong>Fontes.</strong> As letras da página vêm do Google Fonts. Para carregá-las, o seu navegador se
          conecta aos servidores do Google, que recebem o seu endereço IP.
        </p>
        <p>
          <strong>Links externos.</strong> Ao clicar no link do Instagram, você sai deste site e passa a seguir a
          política do Instagram.
        </p>
      </Clausula>

      <Clausula numero="03" titulo="Quando você compra">
        <p>
          A compra é feita na Kiwify, que coleta os dados necessários para o pagamento (como nome, e-mail, CPF e
          dados do cartão ou do Pix) e cuida deles segundo a política de privacidade dela. Nós não recebemos os
          dados do seu cartão.
        </p>
        <p>
          A Kiwify nos repassa apenas o necessário para entregar o produto e dar suporte: seu nome, seu e-mail e as
          informações da compra.
        </p>
      </Clausula>

      <Clausula numero="04" titulo="Para que usamos seus dados">
        <ul>
          <li>entregar o produto e o acesso aos arquivos;</li>
          <li>responder às suas dúvidas e dar suporte;</li>
          <li>fazer o reembolso, se você pedir;</li>
          <li>cumprir obrigações legais e fiscais.</li>
        </ul>
        <p>Não usamos seus dados para nada além disso sem pedir antes.</p>
      </Clausula>

      <Clausula numero="05" titulo="Dentro do produto">
        <p>
          O vault é um conjunto de arquivos que roda no Obsidian, no seu computador. Não temos acesso a ele.
        </p>
        <p>
          Se você colar textos no ChatGPT ou no Claude, esses textos passam a seguir a política de privacidade da
          OpenAI ou da Anthropic. Vale ler as configurações de privacidade de cada uma antes de colar algo pessoal.
        </p>
      </Clausula>

      <Clausula numero="06" titulo="Por quanto tempo guardamos">
        <p>
          Os dados da compra ficam guardados pelo tempo exigido pela lei, principalmente para fins fiscais. Os
          registros técnicos da hospedagem seguem os prazos da Vercel.
        </p>
      </Clausula>

      <Clausula numero="07" titulo="Seus direitos">
        <p>A qualquer momento, você pode pedir para:</p>
        <ul>
          <li>confirmar se temos dados seus e ver quais são;</li>
          <li>corrigir dados errados ou desatualizados;</li>
          <li>apagar dados que não precisamos mais guardar por lei;</li>
          <li>receber seus dados em formato que possa levar a outro serviço;</li>
          <li>saber com quem seus dados foram compartilhados.</li>
        </ul>
        <p>
          É só escrever para <Preencher valor={EMAIL_CONTATO} />. Se achar que algo está errado, você também pode
          procurar a Autoridade Nacional de Proteção de Dados (ANPD).
        </p>
      </Clausula>

      <Clausula numero="08" titulo="Mudanças nesta política">
        <p>
          Esta política pode ser atualizada. A data da última versão fica sempre no topo da página.
        </p>
      </Clausula>
    </PaginaLegal>
  )
}
