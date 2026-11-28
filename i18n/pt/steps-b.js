// Passos em português do Brasil, capítulos 07–22 e aulas novas do capítulo 13 (rascunho, sem revisão).
import { open, item, settings, BACK, QUICK, HOME_BTN } from './kit.js';

const CAMERA = open('Câmera');
const GALLERY = open('Galeria');
const SHUTTER = ['Toque no botão branco de captura.'];
const REAL = 'Esta aula muda configurações reais ou tem resultados reais. Leia todos os passos antes e depois faça no celular.';
const AI_ICON = ['Toque no ícone do Galaxy AI.'];
const CHECK = 'Aula nova escrita para o site internacional. As telas dos apps do Google mudam com frequência; confira em um celular de verdade.';
const sub = (...names) => names.map((n) => item(n));

export const TITLES_B = {
  'g07-noti': ['ver-e-limpar-notificacoes', 'Ver e limpar notificações'],
  'g07-appnoti': ['notificacoes-dos-apps', 'Ajustar as notificações dos apps'],
  'g07-quick': ['painel-de-configuracoes-rapidas', 'Abrir o painel de configurações rápidas'],
  'g07-flash': ['lanterna', 'Ligar a lanterna'],
  'g07-rotate': ['rotacao-da-tela', 'Controlar a rotação da tela'],
  'g07-dnd': ['nao-perturbe-e-modo-aviao', 'Usar o Não perturbe e o Modo avião'],
  'g08-wifi': ['conectar-wifi', 'Conectar a uma rede Wi-Fi'],
  'g08-data': ['dados-moveis', 'Ligar e desligar os dados móveis'],
  'g08-usage': ['uso-de-dados', 'Ver o uso de dados'],
  'g08-bt': ['fones-bluetooth', 'Conectar fones de ouvido Bluetooth'],
  'g08-hotspot': ['roteador-wifi', 'Usar o Roteador Wi-Fi'],
  'g08-location': ['localizacao-e-nfc', 'Encontrar as configurações de localização e NFC'],
  'g09-search': ['pesquisar-no-samsung-internet', 'Pesquisar no Samsung Internet'],
  'g09-bookmark': ['salvar-paginas', 'Salvar as páginas que você visita sempre'],
  'g09-qr': ['ler-qr-code', 'Abrir um QR code'],
  'g09-files': ['arquivos-baixados', 'Encontrar arquivos baixados'],
  'g09-stores': ['play-store-e-galaxy-store', 'Usar a Play Store e a Galaxy Store'],
  'g09-install': ['instalar-atualizar-apagar-apps', 'Instalar, atualizar e apagar apps'],
  'g09-google': ['encontrar-apps-do-google', 'Encontrar os apps do Google e da operadora'],
  'g10-open': ['abrir-a-camera', 'Abrir a câmera'],
  'g10-focus': ['focar', 'Focar a câmera'],
  'g10-switch': ['trocar-de-camera', 'Trocar entre a câmera traseira e a frontal'],
  'g10-selfie': ['tirar-selfie', 'Tirar uma selfie'],
  'g10-zoom': ['zoom-nas-fotos', 'Aproximar ao tirar fotos'],
  'g10-timer': ['temporizador-da-camera', 'Usar o temporizador da câmera'],
  'g10-modes': ['modo-retrato-e-noite', 'Experimentar os modos Retrato e Noite'],
  'g10-video': ['gravar-video', 'Gravar um vídeo'],
  'g10-capture': ['captura-e-gravacao-de-tela', 'Fazer captura ou gravar a tela'],
  'g11-latest': ['ultima-foto', 'Encontrar a foto que acabou de tirar'],
  'g11-album': ['criar-album', 'Criar um álbum'],
  'g11-edit': ['cortar-e-clarear-foto', 'Cortar e clarear uma foto'],
  'g11-text': ['copiar-texto-da-foto', 'Copiar o texto de uma foto'],
  'g11-multi': ['compartilhar-varias-fotos', 'Compartilhar várias fotos'],
  'g11-restore': ['recuperar-fotos-apagadas', 'Recuperar fotos apagadas'],
  'g11-docs': ['documentos-em-meus-arquivos', 'Encontrar documentos em Meus arquivos'],
  'g11-quickshare': ['quick-share', 'Enviar arquivos com o Quick Share'],
  'g12-addapp': ['app-na-tela-inicial', 'Colocar um app na tela inicial'],
  'g12-folder': ['pastas-e-widgets', 'Criar pastas e widgets'],
  'g12-wallpaper': ['papel-de-parede-tema-bloqueio', 'Trocar o papel de parede, o tema e a tela de bloqueio'],
  'g12-alarm': ['alarme-e-temporizador', 'Programar um alarme e um temporizador'],
  'g12-calendar': ['compromisso-na-agenda', 'Colocar um compromisso na agenda'],
  'g12-reminder': ['lembretes', 'Receber lembretes de tarefas'],
  'g12-note': ['samsung-notes', 'Usar o Samsung Notes'],
  'g12-recorder': ['gravador-de-voz', 'Gravar sua voz'],
  'g12-tools': ['clima-calculadora-radio', 'Usar o clima, a calculadora e o rádio'],
  'x13-gmail': ['enviar-fotos-pelo-gmail', 'Enviar fotos por e-mail com o Gmail'],
  'x13-video': ['enviar-video-para-a-familia', 'Enviar um vídeo para a família'],
  'x13-meet': ['videochamada-google-meet', 'Fazer uma videochamada com o Google Meet'],
  'g14-open': ['abrir-samsung-wallet', 'Abrir o Samsung Wallet'],
  'g14-add': ['tela-adicionar-cartao', 'Ver a tela para adicionar um cartão'],
  'g14-pay': ['escolher-cartao-para-pagar', 'Escolher o cartão para pagar'],
  'g15-pin': ['criar-pin', 'Criar um PIN'],
  'g15-bio': ['digitais-e-rosto', 'Cadastrar digitais e rosto'],
  'g15-perm': ['permissoes-e-localizacao', 'Ver as permissões dos apps e a localização'],
  'g15-folder': ['pasta-segura-samsung-pass', 'Conhecer a Pasta Segura e o Samsung Pass'],
  'g15-medical': ['informacoes-medicas-e-contatos', 'Cadastrar informações médicas e contatos de emergência'],
  'g15-sos': ['sos-de-emergencia', 'Ver o SOS de emergência'],
  'g15-find': ['samsung-find', 'Encontrar o celular com o Samsung Find'],
  'g16-setup': ['primeira-configuracao', 'Configurar o celular pela primeira vez'],
  'g16-sim': ['chip-e-esim', 'Conhecer o chip (SIM) e o eSIM'],
  'g16-account': ['contas-samsung-e-google', 'Ver as contas Samsung e Google'],
  'g16-switch': ['smart-switch', 'Passar contatos e fotos com o Smart Switch'],
  'g16-backup': ['ver-backup', 'Ver o backup'],
  'g16-restore': ['restaurar-backup', 'Restaurar um backup'],
  'g17-magnify': ['ampliacao', 'Ampliar uma parte da tela'],
  'g17-contrast': ['fontes-alto-contraste', 'Aumentar o contraste do texto'],
  'g17-talkback': ['talkback', 'Fazer o celular ler a tela com o TalkBack'],
  'g17-caption': ['som-e-legendas', 'Ajustar o som e as legendas'],
  'g17-hearing': ['aparelhos-auditivos', 'Ver a compatibilidade com aparelhos auditivos'],
  'g17-touch': ['ajustes-de-toque', 'Ajustar o toque e o atalho de acessibilidade'],
  'g18-usage': ['apps-que-gastam-bateria', 'Encontrar os apps que gastam mais bateria'],
  'g18-saver': ['economia-de-energia', 'Ativar a Economia de energia'],
  'g18-storage': ['ver-armazenamento', 'Ver o armazenamento'],
  'g18-clean': ['apagar-arquivos-grandes', 'Apagar arquivos grandes'],
  'g18-care': ['assistencia-do-aparelho', 'Verificar o celular com a Assistência do aparelho'],
  'g18-update': ['atualizar-software', 'Atualizar o software'],
  'g18-version': ['ver-modelo-e-versao-one-ui', 'Ver seu modelo e a versão do One UI'],
  'g19-bixby': ['pedir-a-bixby', 'Pedir coisas à Bixby com a voz'],
  'g19-circle': ['circule-para-pesquisar', 'Pesquisar o que aparece na tela'],
  'g19-interpret': ['traducao-de-chamadas', 'Conhecer a tradução de chamadas e o Intérprete'],
  'g19-write': ['melhorar-e-resumir-texto', 'Melhorar e resumir um texto'],
  'g19-transcribe': ['transcrever-gravacoes', 'Transformar gravações em texto'],
  'g19-photo': ['editar-fotos-com-ia', 'Editar fotos com IA'],
  'g19-support': ['recursos-por-modelo', 'Ver os recursos de cada modelo'],
  'g20-smartview': ['smart-view', 'Ver o celular na TV com o Smart View'],
  'g20-pc': ['conectar-ao-pc', 'Conectar ao computador'],
  'g20-dex': ['samsung-dex', 'Conhecer o Samsung DeX'],
  'g20-watch': ['relogio-e-fones', 'Conectar um relógio e fones'],
  'g20-smartthings': ['smartthings', 'Conectar eletrodomésticos com o SmartThings'],
  'g20-musicshare': ['music-share', 'Conhecer o Music Share'],
  'g21-split': ['tela-dividida', 'Usar dois apps com a tela dividida'],
  'g21-modes': ['modos-e-rotinas', 'Configurar Modos e rotinas'],
  'g21-aod': ['always-on-display', 'Ver um relógio com a tela apagada'],
  'g21-wellbeing': ['bem-estar-digital', 'Ver o tempo de uso com o Bem-estar digital'],
  'g21-apps': ['samsung-health-kids-game-booster', 'Conhecer o Samsung Health, o Samsung Kids e o Game Booster'],
  'g21-samsung': ['samsung-news-e-samsung-com', 'Encontrar o Samsung News, o Samsung.com e o Global Goals'],
  'g21-spen': ['s-pen', 'Usar a S Pen nos modelos compatíveis'],
  'g22-ring': ['toque-nao-toca', 'Quando o toque não toca'],
  'g22-network': ['sem-chamadas-ou-internet', 'Quando as chamadas ou a internet não funcionam'],
  'g22-charge': ['nao-carrega', 'Quando o celular não carrega'],
  'g22-hot': ['celular-quente', 'Quando o celular esquenta'],
  'g22-freeze': ['tela-travada', 'Quando a tela trava'],
  'g22-water': ['celular-molhado', 'O que verificar se o celular molhar'],
  'g22-members': ['diagnostico-samsung-members', 'Fazer um diagnóstico com o Samsung Members'],
  'g22-service': ['antes-da-assistencia', 'Anotar o modelo e o problema antes de ir à assistência técnica'],
};

export const STEPS_B = {
  'g07-noti': { desc: 'Abra o painel de notificações, leia uma e limpe todas.', steps: [
    ['Deslize para baixo a partir do canto superior esquerdo da tela.', 'Abre o painel de notificações.'],
    ['Toque na notificação que quer ler.', 'Ao tocar, o app dela abre.'],
    ['Deslize para baixo a partir do canto superior esquerdo da tela.', 'Abre o painel de notificações.'],
    ['Toque em ‘Limpar’.', 'Todas as notificações somem.']] },
  'g07-appnoti': { desc: 'Desative as notificações dos apps de que você não precisa.', steps: [
    ...settings('Notificações', 'Notificações de apps'),
    ['Toque no botão de um app para desativar as notificações dele.', 'Deixe ativadas as dos apps de mensagens importantes.']] },
  'g07-quick': { desc: 'Abra o painel de configurações rápidas e aprenda como funcionam os botões.', steps: [
    QUICK,
    ['Olhe os botões do painel.', 'Os azuis estão ativados. Toque em um botão para ativar ou desativar.'],
    ['Toque e segure o botão ‘Wi-Fi’.', 'Segurar abre as configurações dele.'],
    ['Deslize para cima para fechar o painel.']] },
  'g07-flash': { desc: 'Ligue e desligue a lanterna pelo painel de configurações rápidas.', steps: [
    QUICK, ['Toque em ‘Lanterna’.', 'A luz atrás do celular acende.'], ['Para desligar, toque de novo em ‘Lanterna’.']] },
  'g07-rotate': { desc: 'Escolha se a tela gira quando você vira o celular de lado.', steps: [
    QUICK, ['Toque em ‘Girar automaticamente’.', 'Ativado, a tela gira com o celular. Desativado, fica em pé.'], ['Vire o celular de lado para testar.']] },
  'g07-dnd': { desc: 'Silencie chamadas e avisos com o Não perturbe e use o Modo avião no avião.', steps: [
    QUICK,
    ['Toque em ‘Não perturbe’.', 'Chamadas e notificações não tocam. Toque de novo para desativar.'],
    ['Toque de novo em ‘Não perturbe’ para desativar.'],
    ['Toque em ‘Modo avião’.', 'Chamadas e internet são cortadas. Use no avião.'],
    ['Ao sair do avião, toque de novo para desativar.']] },
  'g08-wifi': { desc: 'Conecte seu Galaxy a uma rede Wi-Fi em Configurações → Conexões → Wi-Fi.', steps: [
    ...settings('Conexões', 'Wi-Fi'),
    ['Toque no botão ‘Wi-Fi’ para ativar.', 'Aparece a lista de redes Wi-Fi por perto.'],
    ['Toque no nome da rede Wi-Fi.', 'O cadeado indica que precisa de senha.'],
    ['Digite a senha do Wi-Fi.', 'Muitas vezes ela está escrita atrás do roteador.'],
    ['Toque em ‘Conectar’.']] },
  'g08-data': { desc: 'Ligue ou desligue os dados móveis em Configurações → Conexões → Uso de dados.', steps: [
    ...settings('Conexões', 'Uso de dados'),
    ['Toque no botão ‘Dados móveis’ para ativar.', 'Desativado, a internet só funciona no Wi-Fi.']] },
  'g08-usage': { desc: 'Veja quantos dados móveis você usou no mês e quais apps gastam mais.', steps: [
    ...settings('Conexões', 'Uso de dados'),
    ['Toque em ‘Uso de dados móveis’.'],
    ['Veja quanto usou neste mês.', 'Os apps que mais gastam aparecem em cima. O app da sua operadora mostra quanto resta.']] },
  'g08-bt': { desc: 'Pareie fones de ouvido Bluetooth com seu Galaxy.', steps: [
    ['Ligue os fones no modo de pareamento.'],
    ...settings('Conexões', 'Bluetooth'),
    ['Toque no botão ‘Bluetooth’ para ativar.'],
    ['Toque no nome dos seus fones na lista.'],
    ['Toque em ‘Conectar’.']] },
  'g08-hotspot': { desc: 'Compartilhe a internet do celular com outro aparelho usando o Roteador Wi-Fi.', steps: [
    ...settings('Conexões', 'Roteador Wi-Fi e Ancoragem', 'Roteador Wi-Fi'),
    ['Toque no botão ‘Roteador Wi-Fi’ para ativar.', '', 'Pode haver custo extra. Confira seu plano antes.'],
    ['No outro aparelho, escolha o nome do seu celular na lista de Wi-Fi.']] },
  'g08-location': { desc: 'Encontre os botões de Localização e NFC nas Configurações.', steps: [
    ...settings('Localização'),
    ['Toque no botão ‘Localização’ para ativar.', 'Assim os apps de mapas e clima sabem onde você está.'],
    BACK,
    item('Conexões'),
    ['Toque no botão ‘NFC e pagamentos por aproximação’ para ativar.', 'Ative para pagar ou usar cartões de transporte com o celular.']] },
  'g09-search': { desc: 'Pesquise na internet com o navegador Samsung Internet de um Galaxy.', steps: [
    [...open('Samsung Internet'), 'Conforme a versão, o app pode se chamar ‘Samsung Internet’ ou ‘Navegador’.'],
    ['Toque na barra de endereço, em cima.'],
    ['Digite o que quer procurar.'],
    ['Toque na tecla Ir (↵), embaixo à direita do teclado.'],
    ['Toque no resultado que quer ler.']] },
  'g09-bookmark': { desc: 'Salve como favoritas as páginas que você visita sempre e abra depois.', steps: [
    open('Samsung Internet'),
    ['Toque na estrela (☆) à direita da barra de endereço.', 'A página que você está vendo vai para os Favoritos.'],
    ['Para abrir depois, toque na estrela (Favoritos), embaixo.'],
    ['Toque na página que salvou.']] },
  'g09-qr': { desc: 'Abra um QR code com a câmera do Galaxy.', steps: [
    CAMERA,
    ['Aponte a câmera para o QR code.', 'No modo Foto, deixe o código no meio da tela.'],
    ['Toque no link amarelo que aparece na tela.', 'Cuidado com QR codes de lugares que você não conhece.']] },
  'g09-files': { desc: 'Encontre os arquivos baixados no app Meus arquivos.', steps: [open('Meus arquivos'), ['Toque em ‘Downloads’.'], ['Toque no arquivo que quer abrir.']] },
  'g09-stores': { desc: 'Veja a diferença entre a Google Play Store e a Samsung Galaxy Store.', steps: [
    open('Play Store'),
    ['É a loja de apps do Google, onde você encontra e baixa apps.', 'É preciso entrar com uma conta Google.'],
    HOME_BTN,
    open('Galaxy Store'),
    ['É a loja de apps da Samsung, com muitos apps e temas Samsung.']] },
  'g09-install': { desc: 'Instale um app pela Play Store, atualize apps na Galaxy Store e desinstale um app.', steps: [
    open('Play Store'),
    ['Toque na barra de pesquisa, em cima.'],
    ['Digite o nome do app que quer instalar.'],
    ['Toque em ‘Instalar’ ao lado do nome do app.'],
    ['Toque no app ‘Galaxy Store’.', 'Agora vamos atualizar os apps.'],
    ['Toque em ‘Menu’ embaixo.'],
    ['Toque em ‘Atualizações’.'],
    ['Toque em ‘Atualizar tudo’.'],
    ['Na tela inicial, toque e segure o app que quer tirar.'],
    ['Toque em ‘Desinstalar’.'],
    ['Toque em ‘OK’.', 'Você pode instalar de novo pela loja um app que tirou.']] },
  'g09-google': { desc: 'Encontre os apps do Google e o da sua operadora com a busca da tela de aplicativos.', steps: [
    ['Deslize para cima na tela inicial para abrir a tela de aplicativos.'],
    ['Toque em ‘Pesquisar’ em cima.'],
    ['Digite o nome do app.', 'Experimente Google, YouTube ou o nome da sua operadora.'],
    ['Toque no app que encontrou.']] },
  'g10-open': { desc: 'Abra o app Câmera e encontre o botão de captura.', steps: [CAMERA, ['Veja se a tela da câmera apareceu.', 'O círculo branco embaixo no centro é o botão de captura.']] },
  'g10-focus': { desc: 'Toque na tela para focar antes de tirar a foto.', steps: [
    CAMERA,
    ['Toque na tela no ponto que quer nítido.', 'Quando aparece um círculo amarelo, está focado.'],
    ['Toque no botão branco de captura.', 'Se as fotos saírem borradas, limpe a lente com um pano macio.']] },
  'g10-switch': { desc: 'Troque entre a câmera traseira e a frontal (de selfie).', steps: [
    CAMERA,
    ['Toque nas setas em círculo, embaixo à direita.', 'Também dá para deslizar para cima ou para baixo na tela.'],
    ['Veja se a câmera frontal mostra seu rosto.']] },
  'g10-selfie': { desc: 'Tire uma selfie com a câmera frontal.', steps: [
    CAMERA, ['Toque nas setas em círculo, embaixo à direita.'], ['Segure o celular com seu rosto no meio da tela.'], SHUTTER] },
  'g10-zoom': { desc: 'Aproxime coisas distantes ao tirar uma foto.', steps: [
    CAMERA,
    ['Toque no número ‘3’, embaixo.', 'O que está longe fica 3 vezes maior. Toque em ‘1x’ para voltar.', 'Os números mudam conforme o modelo (os Ultra aproximam mais).'],
    SHUTTER] },
  'g10-timer': { desc: 'Use o temporizador da câmera para a foto sair alguns segundos depois.', steps: [
    CAMERA,
    ['Toque no ícone de Controles rápidos (⌄), em cima.'],
    ['Toque no ícone do temporizador.'],
    ['Toque em ‘5 segundos’.'],
    SHUTTER,
    ['A foto é tirada depois da contagem.']] },
  'g10-modes': { desc: 'Experimente o modo Retrato para desfocar o fundo e o modo Noite para lugares escuros.', steps: [
    CAMERA,
    ['Toque em ‘Retrato’ embaixo.', 'A pessoa sai nítida e o fundo desfocado.'],
    SHUTTER,
    ['Toque em ‘Mais’ embaixo.'],
    ['Toque em ‘Noite’.', 'Em lugares escuros a foto sai clara sem flash. Segure o celular parado enquanto tira.']] },
  'g10-video': { desc: 'Grave um vídeo com a câmera do Galaxy.', steps: [CAMERA, ['Toque em ‘Vídeo’ embaixo.'], ['Toque no botão vermelho de gravar.'], ['Quando terminar, toque no botão de parar.']] },
  'g10-capture': { desc: 'Faça uma captura com dois botões e grave a tela pelo painel de configurações rápidas.', steps: [
    ['Aperte rapidamente ao mesmo tempo a Tecla lateral e o botão Diminuir volume.', 'Com um clique, a tela é salva como imagem. Veja na Galeria.'],
    QUICK,
    ['Toque em ‘Gravador de tela’.', 'Se não aparecer, deslize o painel para baixo mais uma vez.'],
    ['Toque em ‘Iniciar gravação’.'],
    ['Para parar, toque no ícone de parar no alto da tela.']] },
  'g11-latest': { desc: 'Encontre na Galeria a foto que acabou de tirar.', steps: [
    GALLERY, ['Toque na primeira foto (em cima à esquerda).', 'A foto mais nova sempre aparece primeiro.'], ['Deslize para a esquerda para ver a próxima.']] },
  'g11-album': { desc: 'Crie um álbum novo na Galeria para juntar fotos.', steps: [
    GALLERY, ['Toque em ‘Álbuns’ embaixo.'], ['Toque em ‘+’ (Adicionar), em cima.'], ['Toque em ‘Álbum’.'], ['Digite um nome para o álbum.'],
    ['Toque em ‘Criar’.', 'Depois escolha as fotos que vão nele.']] },
  'g11-edit': { desc: 'Corte uma foto e deixe mais clara na Galeria.', steps: [
    GALLERY, ['Toque na foto que quer editar.'], ['Toque no lápis (Editar), embaixo.'], ['Arraste um canto da foto para dentro para cortar.'],
    ['Toque em ‘Tom’ embaixo.'], ['Arraste a barra de brilho para a direita.'], ['Toque em ‘Salvar’.']] },
  'g11-text': { desc: 'Copie o texto de uma foto na Galeria e cole em uma mensagem ou nota.', steps: [
    GALLERY, ['Toque em uma foto com texto.'], ['Toque no ícone amarelo ‘T’.', 'Só aparece se houver texto na foto.'],
    ['Toque e segure o texto que quer copiar.'], ['Toque em ‘Copiar’.', 'Você pode colar em uma mensagem ou nota.']] },
  'g11-multi': { desc: 'Selecione várias fotos na Galeria e compartilhe de uma vez.', steps: [
    GALLERY, ['Toque e segure uma das fotos que quer enviar.'], ['Toque em mais fotos para enviar juntas.', 'Uma marca no círculo indica que está selecionada.'],
    ['Toque em ‘Compartilhar’ embaixo.'], ['Toque no app para enviar (por exemplo, Mensagens).'], ['Escolha para quem enviar e envie.']] },
  'g11-restore': { desc: 'Recupere fotos apagadas na Lixeira da Galeria.', steps: [
    GALLERY, ['Toque em ‘Menu’ embaixo.'], ['Toque em ‘Lixeira’.'], ['Toque na foto que quer recuperar.', 'As fotos apagadas ficam um tempo na Lixeira.'], ['Toque em ‘Restaurar’.']] },
  'g11-docs': { desc: 'Encontre os documentos salvos no celular com o app Meus arquivos.', steps: [open('Meus arquivos'), ['Toque em ‘Documentos’.'], ['Toque no documento que quer abrir.']] },
  'g11-quickshare': { desc: 'Envie uma foto para um celular próximo com o Quick Share.', steps: [
    GALLERY, ['Toque na foto que quer enviar.'], ['Toque em ‘Compartilhar’ embaixo.'],
    ['Toque em ‘Quick Share’.', '', 'O outro celular também precisa do Quick Share ativado (Configurações → Dispositivos conectados → Quick Share).'],
    ['Toque no nome do celular que vai receber.'], ['No celular que recebe, toque em ‘Aceitar’.']] },
  'g12-addapp': { desc: 'Coloque na tela inicial um app da tela de aplicativos.', steps: [
    ['Deslize para cima na tela inicial para abrir a tela de aplicativos.'], ['Toque e segure o app que quer na tela inicial.'], ['Toque em ‘Adicionar à tela inicial’.']] },
  'g12-folder': { desc: 'Junte apps em uma pasta e coloque um widget de clima na tela inicial.', steps: [
    ['Toque e segure um app da tela inicial e arraste para cima de outro.', 'É criada uma pasta com os dois apps.'],
    ['Toque no nome da pasta e digite um nome.'], ['Toque e segure um espaço vazio da tela inicial.'], ['Toque em ‘Widgets’.'], ['Toque em ‘Clima’.'], ['Toque em ‘Adicionar’.']] },
  'g12-wallpaper': { desc: 'Use uma foto sua como papel de parede da tela de bloqueio ou da tela inicial.', steps: [
    ...settings('Papel de parede e estilo'), ['Toque em ‘Alterar papéis de parede’.'], ['Para usar uma foto sua, toque em ‘Galeria’.'],
    ['Toque na foto que quer usar.'], ['Escolha a tela de bloqueio, a tela inicial ou as duas.'], ['Toque em ‘Concluído’.']] },
  'g12-alarm': { desc: 'Programe um alarme e inicie um temporizador no app Relógio.', steps: [
    open('Relógio'), ['Toque em ‘Alarme’ embaixo.'], ['Toque em ‘+’ embaixo à direita.'], ['Deslize os números para cima ou para baixo para acertar a hora.'],
    ['Toque em ‘Salvar’.'], ['Para usar o temporizador, toque em ‘Temporizador’ embaixo.'], ['Defina o tempo e toque em ‘Iniciar’.']] },
  'g12-calendar': { desc: 'Coloque um compromisso no app Agenda.', steps: [
    open('Agenda'), ['Toque em ‘+’ (Adicionar evento), embaixo à direita.'], ['Toque no campo Título.'], ['Digite o nome do compromisso.'],
    ['Toque em ‘Início’ para escolher a data e a hora.'], ['Toque em ‘Salvar’.']] },
  'g12-reminder': { desc: 'Receba um aviso de algo que precisa fazer colocando um lembrete em um evento.', steps: [
    open('Agenda'), ['Toque em ‘+’ (Adicionar evento), embaixo à direita.'], ['Digite a tarefa como título.'], ['Toque em ‘Lembrete’.'],
    ['Toque em quando quer o aviso (por exemplo, 10 minutos antes).'], ['Toque em ‘Salvar’.', 'O aviso chega na hora escolhida.']] },
  'g12-note': { desc: 'Escreva uma nota rápida no Samsung Notes.', steps: [
    open('Samsung Notes'), ['Toque em ‘+’ embaixo à direita.'], ['Escreva o que quer anotar.'], ['Quando terminar, toque no botão Voltar.', 'A nota é salva sozinha.']] },
  'g12-recorder': { desc: 'Grave sua voz com o app Gravador de voz.', steps: [
    open('Gravador de voz'), ['Toque no botão Gravar.'], ['Fale em direção ao celular.'], ['Toque em ‘Parar’.', 'A gravação fica salva na lista.']] },
  'g12-tools': { desc: 'Veja o clima, use a calculadora e ouça o rádio.', steps: [
    open('Clima'), ['Veja o clima e a temperatura de hoje.', 'A localização precisa estar ativada para ver o clima onde você está.'],
    HOME_BTN, open('Calculadora'), ['Toque nos números, + e = para calcular.'],
    ['Toque no app ‘Rádio’.', 'O rádio precisa de fones com fio, que funcionam como antena.', 'Alguns modelos e operadoras não têm o app Rádio.']] },
  'x13-gmail': { desc: 'Envie fotos para a família por e-mail com o app Gmail de um Galaxy.', check: CHECK, steps: [
    open('Gmail'), ['Toque em ‘Escrever’, embaixo à direita.'], ['Digite o e-mail da pessoa no campo ‘Para’.'], ['Toque no clipe (Anexar), em cima.'],
    ['Toque na foto que quer enviar.', 'Você pode tocar em mais de uma foto.'], ['Digite um assunto curto.'], ['Toque no botão Enviar (aviãozinho), em cima.']] },
  'x13-video': { desc: 'Envie um vídeo da Galeria para alguém da família com o app Mensagens.', check: CHECK, steps: [
    GALLERY, ['Toque no vídeo que quer enviar.'], ['Toque em ‘Compartilhar’ embaixo.'], ['Toque em ‘Mensagens’.'], ['Escolha para quem enviar.'],
    ['Toque no botão Enviar.', '', 'Vídeos longos podem ser grandes demais para uma mensagem. Nesse caso use o Quick Share ou o e-mail.']] },
  'x13-meet': { desc: 'Faça uma videochamada para a família com o app Google Meet.', check: CHECK, steps: [
    open('Meet'), ['Toque em ‘Novo’.'], ['Toque no nome da pessoa para quem quer ligar.', 'A pessoa também precisa do Google Meet ou de uma conta Google.'],
    ['Toque no botão de videochamada.'], ['Ao terminar, toque no botão vermelho de encerrar.']] },
  'g14-open': { desc: 'Abra o Samsung Wallet e veja os cartões e os menus.', steps: [
    ['Toque no app ‘Samsung Wallet’.', 'Também abre deslizando para cima a imagem de cartão embaixo da tela.'],
    ['Veja seus cartões salvos e os menus.', 'Se for a primeira vez, ainda não há cartões. Na próxima aula você verá a tela de adicionar.']] },
  'g14-add': { desc: 'Veja a tela para adicionar um cartão de pagamento ao Samsung Wallet.', steps: [
    [...open('Samsung Wallet'), REAL], ['Toque em ‘+’ (Adicionar), em cima.'], ['Veja o que dá para adicionar.', 'Dá para adicionar cartões de pagamento, de transporte e mais, conforme o país.'],
    ['Toque em ‘Cartão de pagamento’.'], ['Leia as instruções para adicionar um cartão.']] },
  'g14-pay': { desc: 'Escolha um cartão no Samsung Wallet e pague aproximando o celular da maquininha.', steps: [
    [...open('Samsung Wallet'), REAL], ['Toque no cartão com que quer pagar.'], ['Use a digital ou digite o PIN de pagamento.'], ['Aproxime a parte de trás do celular da maquininha.']] },
  'g15-pin': { desc: 'Proteja o celular com um bloqueio de tela por PIN.', steps: [
    [...open('Configurações'), REAL], ...sub('Tela de bloqueio e AOD', 'Bloqueio de tela e biometria'), ['Toque em ‘Tipo de bloqueio de tela’.'], ['Toque em ‘PIN’.'],
    ['Digite pelo menos 4 números fáceis de lembrar.', 'Evite números fáceis de adivinhar, como seu aniversário ou telefone.'], ['Digite os mesmos números de novo para confirmar.']] },
  'g15-bio': { desc: 'Cadastre sua digital e, se quiser, seu rosto para desbloquear o celular.', steps: [
    [...open('Configurações'), REAL], ...sub('Segurança e privacidade', 'Bloqueio de tela e biometria'), ['Toque em ‘Impressões digitais’.'],
    ['Digite seu PIN.', 'Se não tiver PIN, crie um antes.'],
    ['Encoste e tire o dedo da marca de digital embaixo da tela, várias vezes.', 'Use um dedo que você usa muito e mude um pouco a posição a cada vez.'],
    ['Para cadastrar também o rosto, toque em ‘Reconhecimento facial’ na mesma tela.']] },
  'g15-perm': { desc: 'Veja quais apps usaram sua localização, câmera ou microfone e tire acessos desnecessários.', steps: [
    ...settings('Segurança e privacidade', 'Permissões usadas nas últimas 24 horas'), ['Veja quais apps usaram sua localização, câmera ou microfone.'],
    ['Toque em ‘Localização’.'], ['Se houver um app que você não conhece, mude para ‘Não permitir’.']] },
  'g15-folder': { desc: 'Encontre a Pasta Segura e o Samsung Pass nas Configurações.', steps: [
    ...settings('Segurança e privacidade', 'Mais configurações de segurança'), ['Toque em ‘Pasta Segura’.'], ['Leia as informações sobre a Pasta Segura.'], BACK,
    ['Toque em ‘Senhas, chaves de acesso e preenchimento automático’.', 'O Samsung Pass fica aqui. Ele ajuda a entrar em sites com a digital.']] },
  'g15-medical': { desc: 'Cadastre informações médicas e contatos de emergência que podem ajudar numa emergência.', steps: [
    ...settings('Segurança e emergência', 'Informações médicas'), ['Digite seu nome, tipo sanguíneo, remédios e alergias.'], BACK,
    ['Toque em ‘Contatos de emergência’.'], ['Adicione seus familiares como contatos.']] },
  'g15-sos': { desc: 'Veja como funciona o SOS de emergência do seu celular sem fazer nenhuma ligação.', steps: [
    [...open('Configurações'), 'Se você apertar os botões de verdade, liga para a emergência. Nesta aula, só olhe a tela.'],
    ...sub('Segurança e emergência', 'SOS de emergência'),
    ['Leia quantas vezes é preciso apertar a Tecla lateral para ligar.', 'Ao apertar a Tecla lateral as vezes indicadas, liga para o número configurado.']] },
  'g15-find': { desc: 'Ative a opção que permite encontrar o celular com o Samsung Find se você perdê-lo.', steps: [
    ...settings('Segurança e privacidade', 'Proteção de dispositivo perdido', 'Encontrar meu celular'),
    ['Toque no botão ‘Permitir encontrar este telefone’ para ativar.', 'Você precisa estar conectado à sua conta Samsung.'],
    ['Se perder o celular, entre em smartthingsfind.samsung.com em outro aparelho.']] },
  'g16-setup': { desc: 'Configure um Galaxy novo pela primeira vez.', steps: [
    ['Pressione e segure a Tecla lateral para ligar o celular.'], ['Confira seu idioma e toque em ‘Iniciar’.'], ['Escolha uma rede Wi-Fi e conecte.'],
    ['No resto, siga as instruções da tela e toque em ‘Próximo’.']] },
  'g16-sim': { desc: 'Saiba o que são o chip (SIM) e o eSIM, e veja seu número no Gerenciador de SIM.', steps: [
    ['O chip (Nano-SIM) é um cartãozinho que a operadora entrega.'], ['O eSIM é um chip baixado no celular, sem cartão.', '', 'O eSIM e o uso de dois números dependem do modelo e da operadora.'],
    ...settings('Conexões', 'Gerenciador de SIM'), ['Veja se aparecem seu número e sua operadora.']] },
  'g16-account': { desc: 'Confirme que o celular está conectado a uma conta Samsung e a uma conta Google.', steps: [
    ...settings('Contas e backup', 'Gerenciar contas'),
    ['Veja se há uma conta Samsung e uma conta Google.', 'Elas servem para backup, instalar apps e encontrar o celular. Anote seu usuário e senha.']] },
  'g16-switch': { desc: 'Passe contatos, fotos e mais para um Galaxy novo com o Smart Switch.', steps: [
    ...settings('Contas e backup', 'Trazer dados do dispositivo antigo'), ['No celular novo, escolha ‘Receber dados’.'], ['Deixe os dois celulares perto e siga as instruções da tela.']] },
  'g16-backup': { desc: 'Veja quando foi o último backup no Samsung Cloud.', steps: [...settings('Contas e backup', 'Samsung Cloud'), ['Veja a data do último backup.']] },
  'g16-restore': { desc: 'Restaure seus dados de um backup do Samsung Cloud.', steps: [
    ...settings('Contas e backup', 'Samsung Cloud'), ['Toque em ‘Restaurar dados’.'], ['Escolha o aparelho e o que quer restaurar.'], ['Toque em ‘Restaurar’.']] },
  'g17-magnify': { desc: 'Ative o atalho de ampliação e amplie parte da tela tocando três vezes.', steps: [
    ...settings('Acessibilidade', 'Melhorias de visibilidade', 'Ampliação'), ['Toque em ‘Atalho de ampliação’.'], ['Toque no botão ‘Atalho de ampliação’ para ativar.'],
    ['Toque em ‘Tocar três vezes na tela’.'], ['Toque rápido três vezes onde quer ampliar.']] },
  'g17-contrast': { desc: 'Ative as fontes de alto contraste para o texto se destacar do fundo.', steps: [
    ...settings('Acessibilidade', 'Melhorias de visibilidade'), ['Toque no botão ‘Fontes de alto contraste’ para ativar.', 'As letras ganham contorno escuro e se destacam do fundo.']] },
  'g17-talkback': { desc: 'Ative o TalkBack para o celular ler a tela em voz alta, depois de aprender a desativá-lo.', steps: [
    [...open('Configurações'), 'Com o TalkBack ativado, o jeito de tocar muda. Leia antes como desativar.'], ...sub('Acessibilidade', 'TalkBack'),
    ['Leia antes como desativar.'], ['Toque no botão ‘TalkBack’ para ativar.', 'Ativado, um toque lê o item e dois toques abrem.']] },
  'g17-caption': { desc: 'Ative a Legenda instantânea para vídeos e o Áudio mono para ouvir com um só ouvido.', steps: [
    ...settings('Acessibilidade', 'Melhorias de audição'), ['Toque em ‘Legenda instantânea’.'],
    ['Toque no botão ‘Usar Legenda instantânea’ para ativar.', 'O que é falado nos vídeos aparece em texto.'], BACK,
    ['Toque no botão ‘Áudio mono’ para ativar.', 'Você ouve os dois lados do som mesmo com um só ouvido.']] },
  'g17-hearing': { desc: 'Ative a compatibilidade com aparelhos auditivos para ouvir melhor as chamadas.', steps: [
    ...settings('Acessibilidade', 'Melhorias de audição', 'Suporte a aparelhos auditivos'),
    ['Toque no botão ‘Compatibilidade com aparelhos auditivos’ para ativar.', 'As chamadas ficam mais claras com aparelho auditivo.'],
    ['Conecte aparelhos auditivos Bluetooth no menu Bluetooth.']] },
  'g17-touch': { desc: 'Facilite o toque: atenda com um toque, mude o tempo de tocar e segurar e crie um atalho de acessibilidade.', steps: [
    ...settings('Acessibilidade', 'Interação e destreza'),
    ['Toque no botão ‘Modo de toque único’ para ativar.', 'Você atende chamadas com um toque em vez de deslizar.'],
    ['Toque em ‘Atraso ao tocar e segurar’.', 'Se for difícil tocar e segurar, aumente o tempo.'], ['Escolha o tempo que quiser.'], ['Toque duas vezes no botão Voltar.'],
    ['Toque em ‘Atalho de acessibilidade’.', 'Você liga com um botão um recurso de acessibilidade que usa muito.']] },
  'g18-usage': { desc: 'Descubra quais apps gastam mais bateria.', steps: [
    ...settings('Bateria', 'Uso diário'), ['Veja os apps que mais gastaram bateria.', 'Se um app que você quase não usa gasta muito, feche ou tire.']] },
  'g18-saver': { desc: 'Ative a Economia de energia para a bateria durar mais.', steps: [
    ...settings('Bateria'),
    ['Toque no botão ‘Economia de energia’ para ativar.', 'A bateria dura mais. Algumas notificações podem chegar mais tarde.', 'Também dá para ativar pelo botão ‘Economia de energia’ do painel de configurações rápidas.']] },
  'g18-storage': { desc: 'Veja quanto espaço de armazenamento resta no celular.', steps: [
    ...settings('Assistência do aparelho', 'Armazenamento'), ['Veja quanto espaço resta.', 'Esvaziar a lixeira e apagar arquivos duplicados libera espaço.']] },
  'g18-clean': { desc: 'Encontre e apague em Meus arquivos os arquivos grandes de que não precisa mais.', steps: [
    open('Meus arquivos'), ['Toque em ‘Gerenciar armazenamento’.'], ['Toque em ‘Arquivos grandes’.'], ['Selecione só os arquivos de que não precisa e toque em ‘Excluir’.']] },
  'g18-care': { desc: 'Verifique e organize o celular com a Assistência do aparelho.', steps: [
    ...settings('Assistência do aparelho'), ['Toque em ‘Otimizar agora’.', 'Fecha os apps que você não está usando e verifica o celular.']] },
  'g18-update': { desc: 'Procure e instale atualizações de software no seu Galaxy.', steps: [
    ...settings('Atualização de software'), ['Toque em ‘Baixar e instalar’.', 'Se houver versão nova, ela é baixada e instalada. Faça no Wi-Fi e carregando.']] },
  'g18-version': { desc: 'Veja o modelo do celular e a versão do One UI em Configurações → Sobre o telefone.', steps: [
    ...settings('Sobre o telefone'), ['Veja o nome do modelo, em cima.'], ['Toque em ‘Informações do software’.'],
    ['Veja a ‘Versão do One UI’.', 'Informe isso à assistência técnica junto com o modelo.']] },
  'g19-bixby': { desc: 'Faça a Tecla lateral chamar a Bixby e peça coisas com a voz.', steps: [
    ...settings('Recursos avançados', 'Tecla lateral'), ['Toque em ‘Ativar a Bixby’.', 'Agora, ao segurar a Tecla lateral, a Bixby abre.'],
    ['Segure a Tecla lateral e diga o que quer.', 'Por exemplo: “Coloque um alarme para as 7 da manhã”.'], ['Solte o botão quando terminar de falar.']] },
  'g19-circle': { desc: 'Pesquise algo que aparece na tela circulando com o Circule para Pesquisar.', steps: [
    ['Toque e segure o botão Início, embaixo da tela.'], ['Desenhe um círculo com o dedo em volta do que quer pesquisar.'],
    ['Leia os resultados que aparecem embaixo.', '', 'O Bixby Vision está disponível nas séries Galaxy S25, S24 e S23. O S26 usa este método (Circule para Pesquisar).']] },
  'g19-interpret': { desc: 'Ative a Tradução ao vivo no app Telefone e use durante uma chamada.', steps: [
    open('Telefone'), ['Toque nos três pontos, em cima à direita.'], ['Toque em ‘Configurações’.'], ['Toque em ‘Tradução ao vivo’.'],
    ['Toque no botão ‘Tradução ao vivo’ para ativar.'], ['Durante uma chamada, toque em ‘Assistente de chamada’.'], ['Toque em ‘Tradução ao vivo’.']] },
  'g19-write': { desc: 'Corrija ortografia e gramática de uma mensagem com a ferramenta Galaxy AI do teclado.', steps: [
    open('Mensagens'), ['Toque em uma conversa.'], ['Escreva sua mensagem.'], ['Toque no ícone do Galaxy AI, em cima à esquerda do teclado.'],
    ['Toque em ‘Ortografia e gramática’.', 'Corrige os erros. ‘Resumir’ encurta textos longos.']] },
  'g19-transcribe': { desc: 'Transforme uma gravação de voz em texto com o Galaxy AI no Gravador de voz.', steps: [
    open('Gravador de voz'), ['Toque na gravação que quer transformar em texto.'], AI_ICON, ['Toque em ‘Transcrever’.'], ['Leia o texto criado.']] },
  'g19-photo': { desc: 'Tire uma pessoa ou objeto de uma foto com o Galaxy AI na Galeria.', steps: [
    GALLERY, ['Toque na foto que quer editar.'], AI_ICON, ['Toque em ‘Borracha de objetos’.'], ['Contorne com o dedo a pessoa ou o objeto que quer tirar.'],
    ['Toque em ‘Apagar’.'], ['Se gostar do resultado, toque em ‘Salvar’.']] },
  'g19-support': { desc: 'Veja nas Configurações quais recursos do Galaxy AI seu celular aceita.', steps: [
    ...settings('Galaxy AI'),
    ['Veja a lista de recursos de IA que seu celular pode usar.', 'Recursos que não estão na lista não funcionam neste modelo.', 'Alguns recursos dependem do modelo e da operadora, ou precisam de internet.']] },
  'g20-smartview': { desc: 'Mostre a tela do celular em uma TV com o Smart View.', steps: [
    QUICK, ['Toque em ‘Smart View’.'], ['Toque no nome da TV.', 'Funciona melhor com a TV e o celular no mesmo Wi-Fi.'], ['Toque em ‘Iniciar agora’.']] },
  'g20-pc': { desc: 'Conecte seu Galaxy a um PC com Windows pelo Vincular ao Windows.', steps: [
    ...settings('Dispositivos conectados', 'Vincular ao Windows'), ['Leia as instruções da tela.'], ['No computador, abra o endereço indicado para terminar a conexão.']] },
  'g20-dex': { desc: 'Saiba o que é o Samsung DeX e onde ficam as configurações dele.', steps: [...settings('Dispositivos conectados', 'Samsung DeX'), ['Leia as informações.']] },
  'g20-watch': { desc: 'Conecte um relógio ou fones Galaxy com o app Galaxy Wearable.', steps: [
    ['Toque no app ‘Galaxy Wearable’.', 'Se não estiver na tela inicial, procure na tela de aplicativos.'], ['Toque em ‘Iniciar’.'], ['Siga as instruções da tela para terminar a conexão.']] },
  'g20-smartthings': { desc: 'Conecte eletrodomésticos ao celular com o SmartThings.', steps: [
    open('SmartThings'), ['Toque em ‘+’ (Adicionar), em cima.'], ['Escolha o eletrodoméstico que quer conectar.'], ['Siga as instruções da tela para terminar a conexão.']] },
  'g20-musicshare': { desc: 'Ative o Music Share para amigos tocarem música na sua caixa de som Bluetooth.', steps: [
    ...settings('Dispositivos conectados', 'Music Share'), ['Toque no botão ‘Music Share’ para ativar.', 'Seus amigos tocam música do celular deles na sua caixa de som Bluetooth.']] },
  'g21-split': { desc: 'Use dois apps ao mesmo tempo com a tela dividida.', steps: [
    ['Toque no botão Recentes, embaixo à esquerda.'], ['Toque no ícone pequeno no alto de um app.'], ['Toque em ‘Abrir na visualização de tela dividida’.'], ['Escolha o segundo app para a parte de baixo.']] },
  'g21-modes': { desc: 'Ative o modo Dormir em Modos e rotinas.', steps: [
    ...settings('Modos e rotinas', 'Modos'), ['Toque em ‘Dormir’.'], ['Toque em ‘Ativar’.', 'Enquanto você dorme, as notificações silenciam e a tela escurece.']] },
  'g21-aod': { desc: 'Veja um relógio na tela mesmo apagada, com o Always On Display.', steps: [
    ...settings('Tela de bloqueio e AOD'), ['Toque no botão ‘Always On Display’ para ativar.', 'Você vê o relógio com a tela apagada. Gasta um pouco mais de bateria.'],
    ['Para mudar o estilo do relógio, toque e segure a tela de bloqueio.']] },
  'g21-wellbeing': { desc: 'Veja quanto tempo usou o celular hoje e coloque temporizadores nos apps.', steps: [
    ...settings('Bem-estar digital'), ['Veja quanto tempo usou o celular hoje.'], ['Toque em ‘Temporizadores de apps’.', 'Você pode limitar o tempo diário de cada app.']] },
  'g21-apps': { desc: 'Conheça o Samsung Health, o Samsung Kids e o Game Booster.', steps: [
    ['Toque no app ‘Samsung Health’.', 'Se não estiver na tela inicial, procure na tela de aplicativos.'], ['Veja seus passos e registros de exercício.'],
    ...settings('Aplicativos', 'Samsung Kids'), ['Toque em ‘Abrir’.', 'Você escolhe os apps e o tempo de uso para os netos.'],
    ['Durante um jogo, toque no ícone do Game Booster embaixo da tela.']] },
  'g21-samsung': { desc: 'Encontre os apps Samsung.com e Samsung Global Goals, e o Samsung News.', steps: [
    open('Samsung.com'), ['Aqui você lê novidades dos produtos Samsung e pede ajuda.'], HOME_BTN,
    ['Toque no app ‘Samsung Global Goals’.', 'Procure ‘Samsung Global Goals’ na tela de aplicativos.'], ['Procure o Samsung News na busca da tela de aplicativos.']] },
  'g21-spen': { desc: 'Tire a S Pen, abra o menu dela e experimente o app PENUP nos modelos Ultra compatíveis.', steps: [
    ['Aperte de leve a ponta da S Pen, embaixo do celular.'], ['Toque no recurso que quer no menu da tela.'], open('PENUP'), ['Ao terminar, empurre a S Pen até fazer clique.']] },
  'g22-ring': { desc: 'O que verificar quando o celular não toca.', steps: [
    QUICK, ['Toque no botão ‘Som’.', 'Se estiver em Silencioso ou Vibrar, toque para mudar para Som.'],
    ['Se ‘Não perturbe’ estiver azul (ativado), toque para desativar.'], ['Aperte o botão Aumentar volume na lateral para aumentar o som.']] },
  'g22-network': { desc: 'O que verificar quando as chamadas ou a internet param de funcionar.', steps: [
    QUICK, ['Se o ‘Modo avião’ estiver ativado, toque para desativar.'], ['Se ‘Dados móveis’ estiver desativado, toque para ativar.'],
    ['Se o sinal estiver fraco, tente mudar de lugar.'], ['Se continuar sem funcionar, reinicie o celular.']] },
  'g22-charge': { desc: 'O que verificar quando seu Galaxy não carrega.', steps: [
    ['Veja se o cabo e o carregador estão bem encaixados.'], ['Se a entrada estiver molhada, deixe secar completamente antes de carregar.'],
    ...settings('Bateria', 'Configurações de carregamento'), ['Se ainda não carregar, leve o celular, o carregador e o cabo à assistência técnica.']] },
  'g22-hot': { desc: 'O que fazer quando o celular esquenta.', steps: [
    ['Se estiver carregando, tire o carregador.'], ['Toque no botão Recentes.'], ['Toque em ‘Fechar tudo’ para fechar os apps.'], ['Pare de usar o celular um pouco e deixe esfriar num lugar fresco.']] },
  'g22-freeze': { desc: 'Force a reinicialização de um Galaxy travado com dois botões.', steps: [
    ['Pressione e segure juntos a Tecla lateral e o Diminuir volume por mais de 7 segundos.', 'Continue segurando até a tela apagar.'], ['Quando a tela apagar, solte e espere.']] },
  'g22-water': { desc: 'O que verificar e fazer se o celular molhar.', steps: [
    ['Seque com um pano macio até ficar totalmente seco.'], ['Não ligue o carregador até estar completamente seco.'],
    ['Se foi água do mar, de piscina ou com sabão, enxágue com água limpa e depois seque.'], ['Se notar algo estranho, leve logo à assistência técnica.']] },
  'g22-members': { desc: 'Procure problemas no celular com o Diagnóstico do telefone do Samsung Members.', steps: [
    ['Toque no app ‘Samsung Members’.', 'Se não estiver na tela inicial, procure na tela de aplicativos.'], ['Toque em ‘Suporte’.'], ['Toque em ‘Diagnóstico do telefone’.'],
    ['Toque em ‘Testar tudo’ ou no item que quer verificar.']] },
  'g22-service': { desc: 'Anote o modelo e o problema antes de procurar a assistência técnica da Samsung.', steps: [
    ...settings('Sobre o telefone'), ['Anote o número do modelo (por exemplo, SM-S942N).'], ['Anote quando e como o problema acontece.'],
    ['Fale com o suporte Samsung do seu país ou agende uma assistência técnica.', 'Encontre a página de suporte do seu país em samsung.com/support.']] },
};
