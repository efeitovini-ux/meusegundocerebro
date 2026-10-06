/**
 * Campos que ainda não existem.
 * Enquanto algum valor começar com "[PREENCHER", ele aparece destacado em amarelo listrado
 * na página e um aviso fixo fica no topo da tela. Troque aqui antes de publicar.
 */
export const CAMPOS = {
  CHECKOUT_URL: '[PREENCHER-LINK-KIWIFY]',
  /** Quem vende, para os termos e a política de privacidade. */
  RESPONSAVEL: 'Vinicius Henrique',
  /** E-mail de contato para dúvidas, reembolso e pedidos sobre dados pessoais. */
  EMAIL_CONTATO: 'efeitovini@gmail.com',
} as const

export const { CHECKOUT_URL, RESPONSAVEL, EMAIL_CONTATO } = CAMPOS

export const POLITICA_REEMBOLSO =
  'Você tem 7 dias, a partir da compra, para pedir o reembolso. O pedido é feito pela Kiwify, a plataforma de pagamento, e o valor volta integral.'

export const URL_TERMOS = '/termos/'
export const URL_PRIVACIDADE = '/privacidade/'

export function estaPendente(valor: string): boolean {
  return valor.trim().startsWith('[PREENCHER')
}

export const CAMPOS_PENDENTES = (Object.keys(CAMPOS) as (keyof typeof CAMPOS)[]).filter((chave) =>
  estaPendente(CAMPOS[chave]),
)

export const PRECO = 'R$ 47'
export const INSTAGRAM_URL = 'https://www.instagram.com/efeitovini/'

/**
 * Imagens finais. Ainda não foram geradas: enquanto o arquivo não existir,
 * a página mostra um bloco com a proporção correta e o texto alternativo.
 */
export const IMAGENS = {
  vaultObsidian: {
    src: '/imagens/vault-obsidian.webp',
    largura: 1586,
    altura: 992,
    alt: 'Notebook aberto numa mesa clara mostrando a visão em grafo do vault do Vinicius no Obsidian, com centenas de notas ligadas, ao lado de dois blocos de post-it.',
  },
  vinicius: {
    src: '/imagens/vinicius.webp',
    largura: 1122,
    altura: 1402,
    alt: 'Vinicius, criador do Meu Segundo Cérebro, sentado numa cadeira de diretor lendo uma revista com o símbolo da marca na capa.',
  },
  meuGrafo: {
    src: '/imagens/meu-grafo.webp',
    largura: 981,
    altura: 841,
    alt: 'Visão em grafo do vault do Vinicius no Obsidian: centenas de notas como pontos, ligadas em dois grandes aglomerados no centro.',
  },
} as const

/**
 * Mídias opcionais que incrementam a página. Prompts em PROMPTS-MIDIA.md.
 * Enquanto o arquivo não existir, o espaço some no site publicado
 * (no ambiente de desenvolvimento aparece um selo amarelo mostrando onde entra).
 * Com vídeo, a foto vira o pôster e o substituto para quem pediu menos movimento.
 */
export type Midia = { foto: string; video?: string; largura: number; altura: number; alt: string }

export const MIDIAS = {
  diaManha: {
    foto: '/imagens/dia-manha.webp',
    video: '/midia/dia-manha.mp4',
    largura: 1024,
    altura: 1536,
    alt: 'Começo da manhã: uma caneca de café ao lado de um celular que acende sobre a mesa, com a primeira luz do dia entrando pela janela.',
  },
  diaNoite: {
    foto: '/imagens/dia-noite.webp',
    video: '/midia/dia-noite.mp4',
    largura: 1024,
    altura: 1536,
    alt: 'Noite: uma mão segurando o celular aceso num quarto escuro, respondendo mensagem.',
  },
  diaFimDeSemana: {
    foto: '/imagens/dia-fim-de-semana.webp',
    video: '/midia/dia-fim-de-semana.mp4',
    largura: 1024,
    altura: 1536,
    alt: 'Fim de semana: notebook aberto no sofá, numa sala clara de sábado, com uma xícara ao lado.',
  },
  ferramentas: {
    foto: '/imagens/ferramentas.webp',
    largura: 1536,
    altura: 1024,
    alt: 'Mesa vista de cima com uma agenda de papel fechada, listas de tarefas soltas, post-its antigos e um celular virado para baixo: tudo que já foi tentado.',
  },
  produto: {
    foto: '/imagens/produto.webp',
    video: '/midia/produto.mp4',
    largura: 1280,
    altura: 720,
    alt: 'O Meu Segundo Cérebro: um notebook mostrando uma rede de notas conectadas com pulsos verde-menta, um guia impresso de capa verde-escura com o símbolo da marca e post-its amarelos sobre uma mesa clara.',
  },
} satisfies Record<string, Midia>

export const VIRADA_ITENS = [
  'Minhas tarefas não acumulam mais.',
  'Enxergo tudo no micro e no macro ao mesmo tempo.',
  'Consigo olhar pra trás e ver onde errei, e pra frente e projetar.',
  'Quando tenho uma ideia, tenho com quem conversar sobre ela.',
] as const

/**
 * Estrutura do vault que a pessoa recebe, usada no grafo interativo da seção "O que vem dentro".
 * Cada módulo vira um neurônio; os itens viram neurônios menores quando a pessoa clica.
 * As seis primeiras áreas são as mesmas da rede do topo da página.
 */
export type ModuloVault = { nome: string; descricao: string; itens: string[] }

export const VAULT: { nucleo: ModuloVault; areas: ModuloVault[]; prompts: ModuloVault } = {
  nucleo: {
    nome: 'Núcleo',
    descricao: 'O centro do vault. É por aqui que você abre o dia, e é daqui que tudo se liga.',
    itens: ['Painel do dia', 'Caixa de entrada', 'Onde eu parei', 'Mapa das áreas'],
  },
  areas: [
    {
      nome: 'Trabalho',
      descricao: 'O que você faz pra ganhar a vida, com o contexto de cada frente guardado.',
      itens: ['Frentes em andamento', 'Reuniões e combinados', 'Onde parei em cada frente'],
    },
    {
      nome: 'Projetos',
      descricao: 'Tudo que tem começo, meio e fim, com o próximo passo sempre à vista.',
      itens: ['Projetos ativos', 'Próximo passo de cada um', 'Projetos concluídos'],
    },
    {
      nome: 'Finanças',
      descricao: 'Contas, metas e decisões de dinheiro num lugar só.',
      itens: ['Contas do mês', 'Metas', 'Decisões e o porquê delas'],
    },
    {
      nome: 'Saúde',
      descricao: 'Rotina, consultas e o que faz bem pro corpo e pra cabeça.',
      itens: ['Rotina de exercício', 'Consultas e exames', 'Sono e energia'],
    },
    {
      nome: 'Casa',
      descricao: 'O que a casa pede: manutenção, compras e os combinados com quem mora junto.',
      itens: ['Manutenção', 'Lista de compras', 'Combinados da casa'],
    },
    {
      nome: 'Estudos',
      descricao: 'O que você está aprendendo, com anotações que dá pra reencontrar depois.',
      itens: ['Estudando agora', 'Anotações de leitura', 'Quero aprender'],
    },
    {
      nome: 'Relações',
      descricao: 'As pessoas importantes, as datas e o que você não quer esquecer de ninguém.',
      itens: ['Pessoas', 'Datas importantes', 'Conversas pendentes'],
    },
    {
      nome: 'Ideias',
      descricao: 'Onde a ideia cai antes de sumir, pronta pra virar conversa com a IA.',
      itens: ['Ideias soltas', 'Ideias em teste', 'Conversas sobre ideias'],
    },
    {
      nome: 'Revisão',
      descricao: 'Olhar pra trás e ver onde errou, e pra frente e projetar.',
      itens: ['Revisão da semana', 'Revisão do mês', 'Aprendizados'],
    },
  ],
  prompts: {
    nome: 'Oito prompts',
    descricao: 'Copiar e colar no ChatGPT ou no Claude.',
    itens: [
      'Despejo mental',
      'Briefing do dia',
      'Planejamento de tarefa',
      'Fechamento de sessão',
      'Recuperação de contexto',
      'Modo sobrecarga',
      'Revisão da semana',
      'Conversa sobre uma ideia',
    ],
  },
}

const textosDoVault = [VAULT.nucleo, VAULT.prompts, ...VAULT.areas].flatMap((m) => [m.nome, m.descricao, ...m.itens])
export const VAULT_PENDENTE = textosDoVault.some(estaPendente)

export const ENTREGAVEIS = [
  {
    titulo: 'O vault pronto',
    texto: [
      'Um cofre de Obsidian já montado, com o núcleo e nove áreas da sua vida separadas.',
      'Você instala e começa a usar. Não monta nada do zero.',
    ],
  },
  {
    titulo: 'O método',
    texto: [
      'Como guardar contexto em vez de tarefa, explicado em linguagem direta, com exemplos.',
      'É a parte que faz o template funcionar depois da primeira semana.',
    ],
  },
  {
    titulo: 'Oito prompts prontos',
    texto: [
      'Despejo mental, briefing do dia, planejamento de tarefa, fechamento de sessão, recuperação de contexto, modo sobrecarga e mais.',
      'Copiar e colar no ChatGPT ou no Claude.',
    ],
  },
  {
    titulo: 'O guia de início',
    texto: ['PDF de cinco páginas que te leva da instalação até a primeira vitória.'],
  },
] as const

export const E_PRA_VOCE = [
  'Você já tentou se organizar e não durou',
  'Você começa mais coisas do que termina',
  'Você perde tempo lembrando onde parou',
  'Você tem coisa demais aberta ao mesmo tempo',
  'Você quer uma coisa que funcione no seu computador, sem depender de assinatura',
] as const

export const NAO_E_PRA_VOCE = [
  'Você procura um aplicativo bonito pra instalar e esquecer',
  'Você quer que alguém organize por você',
  'Você não quer abrir o Obsidian nenhuma vez',
  'Você espera resultado sem mexer em nada',
] as const

export const DUVIDAS: { pergunta: string; resposta: string }[] = [
  {
    pergunta: 'Preciso saber usar Obsidian?',
    resposta:
      'Não. O guia leva você da instalação até a primeira vitória. Se você consegue usar um editor de texto, consegue usar isso.',
  },
  {
    pergunta: 'Funciona com ChatGPT ou com Claude?',
    resposta: 'Com os dois. Os prompts são os mesmos.',
  },
  {
    pergunta: 'Preciso pagar alguma assinatura além disso?',
    resposta:
      'Não para usar o template. O Obsidian é gratuito. Se você já usa ChatGPT ou Claude, a versão gratuita dá conta de começar.',
  },
  {
    pergunta: 'Meus dados ficam onde?',
    resposta: 'No seu computador. O Obsidian é local. Nada do que você escrever passa por mim.',
  },
  {
    pergunta: 'Em quanto tempo eu consigo usar?',
    resposta:
      'A instalação leva cerca de dez minutos. A primeira vitória acontece na mesma sessão.',
  },
  {
    pergunta: 'E se não funcionar pra mim?',
    resposta: POLITICA_REEMBOLSO,
  },
]

export const NOTA_RODAPE =
  'Meu Segundo Cérebro é uma ferramenta de organização pessoal. Não substitui acompanhamento profissional e não promete resultado clínico.'
