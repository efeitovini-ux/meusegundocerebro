/**
 * Campos que ainda não existem.
 * Enquanto algum valor começar com "[PREENCHER", ele aparece destacado em amarelo
 * na página e um aviso fixo fica no topo da tela. Troque aqui antes de publicar.
 */
export const CAMPOS = {
  CHECKOUT_URL: '[PREENCHER-LINK-KIWIFY]',
  POLITICA_REEMBOLSO: '[PREENCHER-POLITICA-REEMBOLSO]',
  URL_TERMOS: '[PREENCHER]',
  URL_PRIVACIDADE: '[PREENCHER]',
} as const

export const { CHECKOUT_URL, POLITICA_REEMBOLSO, URL_TERMOS, URL_PRIVACIDADE } = CAMPOS

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
  heroTopo: {
    src: '/imagens/hero-topo.webp',
    largura: 1600,
    altura: 900,
    alt: 'Mesa de trabalho à noite, com um notebook aberto e uma luz quente subindo do canto da sala.',
  },
  despejoPoster: {
    src: '/imagens/despejo-poster.webp',
    largura: 1080,
    altura: 1350,
    alt: '',
  },
  vaultObsidian: {
    src: '/imagens/vault-obsidian.webp',
    largura: 1600,
    altura: 1000,
    alt: 'Captura de tela do vault Meu Segundo Cérebro aberto no Obsidian, com o núcleo e as nove áreas da vida listadas na barra lateral.',
  },
  vinicius: {
    src: '/imagens/vinicius.webp',
    largura: 800,
    altura: 1000,
    alt: 'Foto de Vinicius, criador do Meu Segundo Cérebro e fundador da Agência Prumo.',
  },
} as const

/**
 * Vídeos em loop, gerados no Google Flow (Veo). Prompts em PROMPTS-MIDIA.md.
 * Celular recebe a versão vertical; desktop, a horizontal. Sem som.
 * Enquanto o arquivo não existir, a seção mostra só a luz de fundo e um selo amarelo.
 */
export const VIDEOS = {
  heroFundo: {
    horizontal: '/midia/hero-loop-16x9.mp4',
    vertical: '/midia/hero-loop-9x16.mp4',
    poster: IMAGENS.heroTopo.src,
  },
  despejoMental: {
    horizontal: '/midia/despejo-loop-16x9.mp4',
    vertical: '/midia/despejo-loop-9x16.mp4',
    poster: IMAGENS.despejoPoster.src,
  },
} as const

export const VIRADA_ITENS = [
  'Minhas tarefas não acumulam mais.',
  'Enxergo tudo no micro e no macro ao mesmo tempo.',
  'Consigo olhar pra trás e ver onde errei, e pra frente e projetar.',
  'Quando tenho uma ideia, tenho com quem conversar sobre ela.',
] as const

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
  'Meu Segundo Cérebro é uma ferramenta de organização pessoal. Não é tratamento, não substitui acompanhamento profissional e não promete resultado clínico.'
