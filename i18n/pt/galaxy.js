// Aulas de Galaxy em português do Brasil (rascunho, sem revisão → noindex e fora do sitemap).
// steps[i] corresponde ao cartão coreano i da mesma aula.
import { open, settings } from './kit.js';
import { TITLES_B, STEPS_B } from './steps-b.js';

export const GROUPS = { basic: 'O básico', life: 'Uso diário', apply: 'Mais recursos', adv: 'Avançado e solução de problemas' };

export const CATEGORIES = {
  1: ['Ligar e desligar o celular', 'Botões, carregamento, energia e tela de bloqueio'],
  2: ['Tocar, segurar e deslizar', 'Os toques básicos e os botões de navegação'],
  3: ['Texto e som mais confortáveis', 'Letra maior, brilho, tempo de tela e volume'],
  4: ['Fazer e atender chamadas', 'Ligar, atender, viva-voz e bloqueio'],
  5: ['Salvar e encontrar contatos', 'Novos contatos, busca, edição e favoritos'],
  6: ['Enviar mensagens', 'Escrever, corrigir, copiar e anexar fotos'],
  7: ['Notificações e configurações rápidas', 'Painel de notificações, lanterna, rotação e Não perturbe'],
  8: ['Wi-Fi, dados e Bluetooth', 'Conectar à internet e a outros aparelhos'],
  9: ['Pesquisar na internet e instalar apps', 'Navegador, QR code, downloads e lojas de apps'],
  10: ['Tirar fotos e gravar vídeos', 'Câmera, selfies, zoom, temporizador e vídeo'],
  11: ['Organizar fotos e arquivos', 'Galeria, edição, recuperar e Meus arquivos'],
  12: ['Tela inicial e ferramentas', 'Apps, pastas, papel de parede, alarmes, agenda e notas'],
  13: ['Compartilhar fotos com a família', 'E-mail, vídeos e videochamadas'],
  14: ['Pagar com o Samsung Wallet', 'Abrir o Wallet e escolher um cartão'],
  15: ['Usar o celular com segurança', 'Bloqueio, biometria, permissões e SOS de emergência'],
  16: ['Passar para um celular novo', 'Configuração, contas, Smart Switch e backup'],
  17: ['Visão, audição e toque', 'Ampliação, contraste, TalkBack e legendas'],
  18: ['Bateria e armazenamento', 'Economia de energia, armazenamento e atualizações'],
  19: ['Galaxy AI e Bixby', 'Pedidos por voz e recursos do Galaxy AI'],
  20: ['Conectar à TV, PC e relógio', 'Smart View, PC, DeX, wearables e SmartThings'],
  21: ['Mais recursos úteis', 'Tela dividida, modos e rotinas, Always On Display'],
  22: ['Quando algo dá errado', 'Sem som, sem sinal, carregamento, calor e travamentos'],
};

export const TITLES = {
  'g01-buttons': ['botoes-laterais', 'Encontrar os botões laterais'],
  'g01-charge': ['carregar-o-celular', 'Carregar o celular'],
  'g01-power': ['desligar-e-ligar', 'Desligar e ligar de novo o celular'],
  'g01-restart': ['reiniciar-o-celular', 'Reiniciar o celular'],
  'g01-lock': ['bloquear-e-desbloquear', 'Bloquear e desbloquear a tela'],
  'g02-tap': ['tocar', 'Tocar uma vez'],
  'g02-hold': ['tocar-e-segurar', 'Tocar e segurar'],
  'g02-swipe': ['deslizar', 'Deslizar para se mover'],
  'g02-pinch': ['zoom-com-dois-dedos', 'Ampliar com dois dedos'],
  'g02-back': ['botao-voltar', 'Voltar'],
  'g02-home': ['botao-inicio', 'Ir para a tela inicial'],
  'g02-recent': ['apps-recentes', 'Abrir os apps recentes'],
  'g03-font': ['letra-maior', 'Deixar a letra maior'],
  'g03-zoom': ['zoom-da-tela', 'Aumentar a tela e os ícones'],
  'g03-easy': ['modo-facil', 'Ativar o Modo Fácil'],
  'g03-bright': ['ajustar-brilho', 'Ajustar o brilho'],
  'g03-timeout': ['tempo-limite-da-tela', 'Mudar quanto tempo a tela fica ligada'],
  'g03-sound': ['volume-e-vibracao', 'Ajustar o volume do toque e a vibração'],
  'g04-call': ['fazer-uma-chamada', 'Ligar digitando o número'],
  'g04-answer': ['atender-ou-recusar', 'Atender ou recusar uma chamada'],
  'g04-speaker': ['viva-voz', 'Ligar o viva-voz durante uma chamada'],
  'g04-missed': ['retornar-chamada-perdida', 'Retornar uma chamada perdida'],
  'g04-log': ['historico-de-chamadas', 'Ver o histórico de chamadas'],
  'g04-block': ['bloquear-numeros', 'Bloquear números de spam'],
  'g05-new': ['salvar-contato', 'Salvar um contato novo'],
  'g05-search': ['buscar-contato', 'Buscar um contato pelo nome'],
  'g05-edit': ['editar-numero', 'Corrigir um número'],
  'g05-speed': ['discagem-rapida', 'Cadastrar quem você liga sempre'],
  'g05-share': ['compartilhar-contato', 'Compartilhar um contato'],
  'g06-send': ['enviar-e-responder-mensagens', 'Enviar e responder mensagens'],
  'g06-type': ['digitar-letras-numeros-simbolos', 'Digitar letras, números e símbolos'],
  'g06-fix': ['corrigir-erros', 'Corrigir erros de digitação'],
  'g06-copy': ['copiar-e-colar', 'Copiar e colar'],
  'g06-photo': ['anexar-foto', 'Anexar uma foto a uma mensagem'],
  'g06-translate': ['traduzir-texto', 'Traduzir um texto'],
  ...TITLES_B,
};

export const LESSONS = {
  'g01-buttons': {
    desc: 'Saiba onde ficam os botões Aumentar volume, Diminuir volume e a Tecla lateral de um Galaxy, e para que serve cada um.',
    steps: [
      ['Olhe a lateral direita do celular.', 'Há três botões. De cima para baixo: Aumentar volume, Diminuir volume e a Tecla lateral.'],
      ['Aperte a Tecla lateral na imagem.', 'É o botão de baixo. Serve para ligar e desligar o celular ou apagar a tela.'],
      ['Aperte o botão Diminuir volume na imagem.', 'É o botão do meio. Abaixa o som.'],
      ['Aperte o botão Aumentar volume na imagem.', 'É o botão de cima. Aumenta o som.'],
    ],
  },
  'g01-charge': {
    desc: 'Carregue seu Galaxy passo a passo: ligue o carregador na tomada, conecte o cabo e veja se está carregando.',
    steps: [
      ['Ligue o carregador na tomada.'],
      ['Encaixe a ponta do cabo na entrada embaixo do celular.', 'Se a entrada estiver molhada, espere secar completamente.'],
      ['Veja se aparece o sinal de carregamento na tela.'],
      ['Tire o cabo quando terminar de carregar.'],
    ],
  },
  'g01-power': {
    desc: 'Desligue um Galaxy com a Tecla lateral e o botão Diminuir volume, e ligue de novo.',
    steps: [
      ['Pressione e segure ao mesmo tempo a Tecla lateral e o botão Diminuir volume.', 'Aperte os dois juntos e espere o menu aparecer.'],
      ['Toque em Desligar.'],
      ['Toque em Desligar mais uma vez.', 'Quando a tela apagar, vá para o próximo passo para ligar de novo.'],
      ['Pressione e segure a Tecla lateral para ligar o celular.', 'Segure alguns segundos até aparecer o logotipo da Samsung. Depois desbloqueie a tela.'],
    ],
  },
  'g01-restart': {
    desc: 'Reinicie um Galaxy quando ele estiver lento ou estranho.',
    steps: [
      ['Pressione e segure ao mesmo tempo a Tecla lateral e o botão Diminuir volume.', 'Segure até aparecer o menu de energia.'],
      ['Toque em Reiniciar.'],
      ['Toque em Reiniciar mais uma vez.'],
      ['Espere o celular desligar e ligar de novo.', '', 'Se a tela travar e o menu não aparecer, segure os dois botões por mais de 7 segundos.'],
    ],
  },
  'g01-lock': {
    desc: 'Bloqueie a tela com a Tecla lateral e desbloqueie deslizando para cima.',
    steps: [
      ['Aperte a Tecla lateral uma vez, rapidamente.', 'A tela apaga e bloqueia sozinha.'],
      ['Aperte de novo a Tecla lateral rapidamente.', 'A tela de bloqueio acende. Tocar duas vezes na tela também funciona.'],
      ['Deslize a tela para cima.', 'Se você configurou um PIN ou digital, use para desbloquear.'],
    ],
  },
  'g02-tap': {
    desc: 'Pratique o toque mais básico: tocar uma vez para abrir um app.',
    steps: [
      ['Toque de leve uma vez em Galeria com a ponta do dedo.', 'Não aperte forte. Um toque leve abre o app.'],
      ['Toque no botão Início, embaixo no centro.', 'Você volta para a primeira tela (a tela inicial).'],
    ],
  },
  'g02-hold': {
    desc: 'Pratique tocar e segurar para abrir o menu de um app.',
    steps: [
      ['Toque e segure Galeria por 2 segundos.', 'Não tire o dedo até aparecer um menu.'],
      ['Veja se apareceu um menu.', 'Ao tocar e segurar você vê o que dá para fazer com o app.'],
      ['Toque no botão Voltar para fechar o menu.'],
    ],
  },
  'g02-swipe': {
    desc: 'Deslize para trocar de página na tela inicial e abrir a tela de aplicativos.',
    steps: [
      ['Deslize a tela para a esquerda.', 'Você vai para a próxima página da tela inicial.'],
      ['Deslize de baixo para cima na tela inicial.', 'Abre a tela de aplicativos com todos os seus apps.'],
      ['Deslize para baixo na tela de aplicativos.', 'Você volta para a tela inicial.'],
    ],
  },
  'g02-pinch': {
    desc: 'Afaste dois dedos para ampliar uma foto e junte-os para diminuir.',
    steps: [
      open('Galeria'),
      ['Toque na foto que quer ver.'],
      ['Ponha dois dedos sobre a foto e afaste-os.', 'Afaste o polegar e o indicador para ver maior.'],
      ['Junte os dois dedos.', 'A foto volta a ficar pequena.'],
    ],
  },
  'g02-back': {
    desc: 'Use o botão Voltar para voltar à tela anterior.',
    steps: [
      ...settings('Tela'),
      ['Toque no botão Voltar, embaixo à direita.', 'Você volta para a tela anterior (Configurações).', 'Você pode mudar a ordem dos botões em Configurações → Tela → Barra de navegação.'],
    ],
  },
  'g02-home': {
    desc: 'Volte para a tela inicial de qualquer app com o botão Início.',
    steps: [
      open('Configurações'),
      ['Toque no botão Início, embaixo no centro.', 'Você volta para a primeira tela (a tela inicial).'],
      ['Veja se a tela inicial apareceu.', 'Em qualquer app, o botão Início traz você até aqui.', 'Se não vir os botões, deslize um pouco para cima a partir da borda de baixo.'],
    ],
  },
  'g02-recent': {
    desc: 'Abra os apps recentes para trocar de app ou fechar todos.',
    steps: [
      ['Toque no botão Recentes, embaixo à esquerda.', 'Os apps usados há pouco aparecem como cartões.'],
      ['Toque no app que quer usar de novo.', 'Deslize para os lados para ver outros apps.'],
      ['Toque de novo no botão Recentes.'],
      ['Toque em ‘Fechar tudo’.', 'Todos os apps abertos são fechados.'],
    ],
  },
  'g03-font': {
    desc: 'Deixe a letra maior e em negrito em Configurações → Tela → Tamanho e estilo da fonte.',
    steps: [
      ...settings('Tela', 'Tamanho e estilo da fonte'),
      ['Arraste o círculo da barra de tamanho para a direita.', 'Quanto mais para a direita, maior a letra.'],
      ['Toque no botão ‘Fonte em negrito’ para ativar.', 'Letra em negrito é mais fácil de ler.'],
      ['Veja se a letra ficou maior.'],
    ],
  },
  'g03-zoom': {
    desc: 'Aumente ícones e botões com o Zoom da tela em Configurações → Tela.',
    steps: [
      ...settings('Tela', 'Zoom da tela'),
      ['Arraste o círculo da barra para a direita.', 'Quanto mais para a direita, maiores os ícones e botões.'],
      ['Veja se os ícones e botões ficaram maiores.'],
    ],
  },
  'g03-easy': {
    desc: 'Ative o Modo Fácil para ter uma tela inicial mais simples, com letra e ícones grandes.',
    steps: [
      ...settings('Tela', 'Modo Fácil'),
      ['Toque no botão ‘Modo Fácil’ para ativar.', 'A letra e os ícones da tela inicial ficam maiores.'],
      ['Veja se a letra e os ícones da tela inicial ficaram maiores.'],
    ],
  },
  'g03-bright': {
    desc: 'Ajuste o brilho da tela pelo painel de configurações rápidas.',
    steps: [
      ['Deslize para baixo a partir do canto superior direito da tela.', 'Abre o painel de configurações rápidas.'],
      ['Arraste a barra de brilho para a direita.', 'Arraste para a esquerda para escurecer a tela.'],
      ['Deslize para cima para fechar o painel.'],
    ],
  },
  'g03-timeout': {
    desc: 'Mude quanto tempo a tela fica ligada em Configurações → Tela → Tempo limite da tela.',
    steps: [
      ...settings('Tela', 'Tempo limite da tela'),
      ['Toque em ‘5 minutos’.', 'Escolha o tempo que quiser. Quanto mais longo, mais bateria gasta.'],
    ],
  },
  'g03-sound': {
    desc: 'Aumente o volume do toque e faça o celular vibrar ao tocar.',
    steps: [
      ...settings('Sons e vibração', 'Volume'),
      ['Arraste a barra Toque para a direita.', 'Quanto mais para a direita, mais alto toca.'],
      ['Toque no botão Voltar, embaixo.', 'Você volta para a tela anterior.'],
      ['Toque em ‘Som’.', 'Para só vibrar, toque em ‘Vibrar’.'],
      ['Toque no botão ‘Vibrar ao tocar’ para ativar.', 'Som e vibração avisam juntos.'],
    ],
  },
  'g04-call': {
    desc: 'Faça uma ligação em um Galaxy digitando o número no teclado.',
    steps: [
      open('Telefone'),
      ['Toque em ‘Teclado’ embaixo.'],
      ['Toque nos números do telefone em ordem.', 'Se errar, apague com o botão de apagar embaixo à direita.'],
      ['Toque no botão verde de ligar.'],
      ['Ao terminar, toque no botão vermelho de encerrar.'],
    ],
  },
  'g04-answer': {
    desc: 'Atenda deslizando o botão verde, recuse com o vermelho ou recuse com uma mensagem.',
    steps: [
      ['Toque e segure o botão verde de atender e deslize para cima.', 'Tire do círculo para atender.'],
      ['Para recusar, toque e segure o botão vermelho e deslize para cima.'],
      ['Para recusar com mensagem, deslize para cima ‘Enviar mensagem’, embaixo.', 'Escolha uma mensagem e ela é enviada para quem ligou.', 'Em Configurações → Acessibilidade → Interação e destreza você pode atender com um só toque.'],
    ],
  },
  'g04-speaker': {
    desc: 'Ligue o viva-voz durante uma chamada para falar sem segurar o celular no ouvido.',
    steps: [
      ['Faça ou atenda uma ligação.'],
      ['Toque em ‘Alto-falante’.', 'Você ouve e fala com o celular longe do ouvido.'],
      ['Para desligar, toque de novo em ‘Alto-falante’.'],
    ],
  },
  'g04-missed': {
    desc: 'Retorne uma chamada perdida pela lista Recentes do app Telefone.',
    steps: [
      open('Telefone'),
      ['Toque em ‘Recentes’ embaixo.'],
      ['Deslize o número perdido para a direita.', 'Deslizar para a direita liga na hora.', 'Se não ligar, toque no número e depois no botão de ligar.'],
    ],
  },
  'g04-log': {
    desc: 'Veja quem ligou e quando na lista Recentes do app Telefone.',
    steps: [open('Telefone'), ['Toque em ‘Recentes’ embaixo.'], ['Toque em um nome para ver os detalhes.', 'Você vê quando conversaram.']],
  },
  'g04-block': {
    desc: 'Bloqueie um número de spam nas configurações do app Telefone.',
    steps: [
      open('Telefone'),
      ['Toque nos três pontos (Mais opções), em cima à direita.'],
      ['Toque em ‘Configurações’.'],
      ['Toque em ‘Bloquear números’.'],
      ['Toque em ‘Adicionar número de telefone’.', '', 'A tela pode ser um pouco diferente conforme a versão.'],
      ['Digite o número que quer bloquear.'],
      ['Toque em ‘Salvar’.'],
    ],
  },
  'g05-new': {
    desc: 'Salve um contato novo com nome e número no app Contatos.',
    steps: [
      open('Contatos'),
      ['Toque em ‘+’ (Criar contato), em cima à direita.'],
      ['Toque no campo Nome.'],
      ['Digite o nome.'],
      ['Toque no campo Telefone.'],
      ['Digite o número de telefone.'],
      ['Toque em ‘Salvar’.'],
    ],
  },
  'g05-search': {
    desc: 'Encontre um contato rapidamente buscando pelo nome.',
    steps: [open('Contatos'), ['Toque na lupa (Buscar), em cima.'], ['Digite o nome que procura.'], ['Toque no nome que aparecer.']],
  },
  'g05-edit': {
    desc: 'Mude o número de telefone salvo de um contato.',
    steps: [
      open('Contatos'),
      ['Toque no nome da pessoa.'],
      ['Toque em ‘Editar’ embaixo.'],
      ['Toque no campo Telefone.'],
      ['Apague o número antigo e digite o novo.'],
      ['Toque em ‘Salvar’.'],
    ],
  },
  'g05-speed': {
    desc: 'Configure a discagem rápida para ligar segurando um número do teclado.',
    steps: [
      open('Telefone'),
      ['Toque em ‘Teclado’ embaixo.'],
      ['Toque nos três pontos (Mais opções), em cima à direita.'],
      ['Toque em ‘Números de discagem rápida’.'],
      ['Toque no número ‘2’.', 'Escolha qualquer número livre.'],
      ['Escolha a pessoa nos seus contatos.'],
      ['Toque e segure o ‘2’ no teclado para ligar.', 'Experimente segurar o ‘2’ na imagem de treino.'],
    ],
  },
  'g05-share': {
    desc: 'Envie os dados de um contato para outra pessoa por mensagem.',
    steps: [
      open('Contatos'),
      ['Toque no nome da pessoa que quer compartilhar.'],
      ['Toque em ‘Compartilhar’ embaixo.'],
      ['Toque em ‘Mensagens’.'],
      ['Escolha quem vai receber.'],
      ['Toque no botão Enviar.'],
    ],
  },
  'g06-send': {
    desc: 'Envie uma mensagem de texto e responda outra no app Mensagens.',
    steps: [
      open('Mensagens'),
      ['Toque na conversa que quer responder.', 'Para uma mensagem nova, toque no botão Iniciar conversa, embaixo à direita.'],
      ['Toque no campo de mensagem, embaixo.'],
      ['Escreva sua mensagem.'],
      ['Toque no botão Enviar, à direita.'],
    ],
  },
  'g06-type': {
    desc: 'Digite letras, números e símbolos, e troque de idioma no Teclado Samsung.',
    steps: [
      ['Digite ‘Olá’ no teclado.'],
      ['Para digitar números ou símbolos, toque em ‘!#1’.'],
      ['Para voltar às letras, toque em ‘ABC’ no mesmo lugar.'],
      ['Para escrever em outro idioma, deslize a barra de espaço para a esquerda ou a direita.', 'Só aparecem os idiomas que você adicionou nas configurações do teclado.'],
    ],
  },
  'g06-fix': {
    desc: 'Corrija erros com a tecla de apagar e mudando o cursor de lugar.',
    steps: [
      ['Toque uma vez na tecla de apagar (⌫).', 'Apaga a letra logo antes do cursor.'],
      ['Digite a letra certa.'],
      ['Para corrigir uma letra no meio, toque nesse lugar.', 'O cursor (o tracinho que pisca) vai para onde você tocou.'],
    ],
  },
  'g06-copy': {
    desc: 'Copie um texto e cole em outro lugar.',
    steps: [
      ['Toque e segure o texto que quer copiar.'],
      ['Toque em ‘Copiar’.'],
      ['Toque e segure o campo onde quer colar.'],
      ['Toque em ‘Colar’.'],
    ],
  },
  'g06-photo': {
    desc: 'Anexe uma foto da Galeria a uma mensagem de texto.',
    steps: [
      open('Mensagens'),
      ['Toque na conversa para onde quer enviar a foto.'],
      ['Toque em ‘+’ à esquerda do campo de mensagem.'],
      ['Toque em ‘Galeria’.'],
      ['Toque na foto que quer enviar.'],
      ['Toque no botão Enviar.'],
    ],
  },
  'g06-translate': {
    desc: 'Traduza uma conversa do app Mensagens com a ferramenta Galaxy AI do teclado.',
    steps: [
      open('Mensagens'),
      ['Toque na conversa que quer traduzir.'],
      ['Toque no campo de mensagem, embaixo.'],
      ['Toque no ícone do Galaxy AI, em cima à esquerda do teclado.'],
      ['Toque em ‘Tradução de conversa’.'],
      ['Escolha os idiomas no quadro de cima.'],
    ],
  },
  ...STEPS_B,
};

