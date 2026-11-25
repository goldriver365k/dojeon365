// Pasos en español, capítulos 19–22 y lecciones nuevas del capítulo 13 (borrador, sin revisar).
import { open, settings, QUICK } from './kit.js';

const AI_ICON = ['Toca el icono de Galaxy AI.'];
const HOME_BTN = ['Toca el botón Inicio, abajo en el centro.', 'Vuelves a la primera pantalla (la pantalla de inicio).'];
const CHECK = 'Lección nueva escrita para el sitio internacional. Las pantallas de las apps de Google cambian a menudo; compruébalo en un móvil real.';

export const TITLES_19_22 = {
  'x13-gmail': ['enviar-fotos-por-gmail', 'Enviar fotos por correo con Gmail'],
  'x13-video': ['enviar-video-a-la-familia', 'Enviar un vídeo a la familia'],
  'x13-meet': ['videollamada-google-meet', 'Hacer una videollamada con Google Meet'],
  'g19-bixby': ['pedir-a-bixby', 'Pedir cosas a Bixby con la voz'],
  'g19-circle': ['rodea-para-buscar', 'Buscar lo que ves en la pantalla'],
  'g19-interpret': ['traduccion-de-llamadas', 'Conocer la traducción de llamadas y el Intérprete'],
  'g19-write': ['mejorar-y-resumir-texto', 'Mejorar y resumir un texto'],
  'g19-transcribe': ['transcribir-grabaciones', 'Pasar grabaciones a texto'],
  'g19-photo': ['editar-fotos-con-ia', 'Editar fotos con IA'],
  'g19-support': ['funciones-por-modelo', 'Ver las funciones según el modelo'],
  'g20-smartview': ['smart-view', 'Ver el móvil en la TV con Smart View'],
  'g20-pc': ['conectar-al-pc', 'Conectar con un PC'],
  'g20-dex': ['samsung-dex', 'Conocer Samsung DeX'],
  'g20-watch': ['reloj-y-auriculares', 'Conectar un reloj y unos auriculares'],
  'g20-smartthings': ['smartthings', 'Conectar electrodomésticos con SmartThings'],
  'g20-musicshare': ['music-share', 'Conocer Music Share'],
  'g21-split': ['pantalla-dividida', 'Usar dos apps con la pantalla dividida'],
  'g21-modes': ['modos-y-rutinas', 'Configurar Modos y rutinas'],
  'g21-aod': ['always-on-display', 'Ver un reloj en la pantalla apagada'],
  'g21-wellbeing': ['bienestar-digital', 'Ver el tiempo de uso con Bienestar digital'],
  'g21-apps': ['samsung-health-kids-game-booster', 'Conocer Samsung Health, Samsung Kids y Game Booster'],
  'g21-samsung': ['samsung-news-y-samsung-com', 'Encontrar Samsung News, Samsung.com y Global Goals'],
  'g21-spen': ['s-pen', 'Usar el S Pen en los modelos compatibles'],
  'g22-ring': ['no-suena-el-tono', 'Cuando no suena el tono de llamada'],
  'g22-network': ['sin-llamadas-ni-internet', 'Cuando no funcionan las llamadas o internet'],
  'g22-charge': ['no-carga', 'Cuando el móvil no carga'],
  'g22-hot': ['movil-caliente', 'Cuando el móvil se calienta'],
  'g22-freeze': ['pantalla-bloqueada', 'Cuando la pantalla se queda bloqueada'],
  'g22-water': ['movil-mojado', 'Qué revisar si el móvil se moja'],
  'g22-members': ['diagnostico-samsung-members', 'Hacer un diagnóstico con Samsung Members'],
  'g22-service': ['antes-del-servicio-tecnico', 'Apuntar el modelo y el problema antes de ir al servicio técnico'],
};

export const STEPS_19_22 = {
  'x13-gmail': {
    desc: 'Envía fotos a tu familia por correo con la app Gmail de un móvil Galaxy.',
    check: CHECK,
    steps: [
      open('Gmail'),
      ['Toca ‘Redactar’, abajo a la derecha.'],
      ['Escribe el correo de la persona en la casilla ‘Para’.'],
      ['Toca el clip (Adjuntar), arriba.'],
      ['Toca la foto que quieres enviar.', 'Puedes tocar más de una foto.'],
      ['Escribe un asunto corto.'],
      ['Toca el botón Enviar (avión de papel), arriba.'],
    ],
  },
  'x13-video': {
    desc: 'Envía un vídeo de la Galería a un familiar con la app Mensajes.',
    check: CHECK,
    steps: [
      open('Galería'),
      ['Toca el vídeo que quieres enviar.'],
      ['Toca ‘Compartir’ abajo.'],
      ['Toca ‘Mensajes’.'],
      ['Elige a quién enviarlo.'],
      ['Toca el botón Enviar.', '', 'Los vídeos largos pueden ser demasiado grandes para un mensaje. Entonces usa Quick Share o el correo.'],
    ],
  },
  'x13-meet': {
    desc: 'Haz una videollamada a tu familia con la app Google Meet.',
    check: CHECK,
    steps: [
      open('Meet'),
      ['Toca ‘Nueva’.'],
      ['Toca el nombre de la persona a la que quieres llamar.', 'Esa persona también necesita Google Meet o una cuenta de Google.'],
      ['Toca el botón de videollamada.'],
      ['Al terminar, toca el botón rojo de colgar.'],
    ],
  },
  'g19-bixby': {
    desc: 'Haz que el botón Lateral active Bixby y pídele cosas con la voz.',
    steps: [
      ...settings('Funciones avanzadas', 'Botón lateral'),
      ['Toca ‘Activar Bixby’.', 'Ahora, al mantener pulsado el botón Lateral, se abre Bixby.'],
      ['Mantén pulsado el botón Lateral y di lo que quieres.', 'Por ejemplo: “Pon una alarma a las 7 de la mañana”.'],
      ['Suelta el botón cuando termines de hablar.'],
    ],
  },
  'g19-circle': {
    desc: 'Busca algo que ves en la pantalla rodeándolo con Rodea para buscar.',
    steps: [
      ['Mantén pulsado el botón Inicio, abajo en la pantalla.'],
      ['Dibuja un círculo con el dedo alrededor de lo que quieres buscar.'],
      ['Lee los resultados de abajo.', '', 'Bixby Vision está disponible en las series Galaxy S25, S24 y S23. El S26 usa este método (Rodea para buscar).'],
    ],
  },
  'g19-interpret': {
    desc: 'Activa la Traducción en directo en la app Teléfono y úsala durante una llamada.',
    steps: [
      open('Teléfono'),
      ['Toca los tres puntos, arriba a la derecha.'],
      ['Toca ‘Ajustes’.'],
      ['Toca ‘Traducción en directo’.'],
      ['Toca el interruptor ‘Traducción en directo’ para activarlo.'],
      ['Durante una llamada, toca ‘Asistente de llamadas’.'],
      ['Toca ‘Traducción en directo’.'],
    ],
  },
  'g19-write': {
    desc: 'Corrige la ortografía y la gramática de un mensaje con la herramienta Galaxy AI del teclado.',
    steps: [
      open('Mensajes'),
      ['Toca una conversación.'],
      ['Escribe tu mensaje.'],
      ['Toca el icono de Galaxy AI, arriba a la izquierda del teclado.'],
      ['Toca ‘Ortografía y gramática’.', 'Corrige los errores. ‘Resumir’ acorta los textos largos.'],
    ],
  },
  'g19-transcribe': {
    desc: 'Pasa una grabación de voz a texto con Galaxy AI en la Grabadora de voz.',
    steps: [open('Grabadora de voz'), ['Toca la grabación que quieres pasar a texto.'], AI_ICON, ['Toca ‘Transcribir’.'], ['Lee el texto que ha creado.']],
  },
  'g19-photo': {
    desc: 'Quita a una persona o un objeto de una foto con Galaxy AI en la Galería.',
    steps: [
      open('Galería'),
      ['Toca la foto que quieres editar.'],
      AI_ICON,
      ['Toca ‘Borrador de objetos’.'],
      ['Rodea con el dedo a la persona o el objeto que quieres quitar.'],
      ['Toca ‘Borrar’.'],
      ['Si te gusta el resultado, toca ‘Guardar’.'],
    ],
  },
  'g19-support': {
    desc: 'Mira en Ajustes qué funciones de Galaxy AI admite tu móvil.',
    steps: [
      ...settings('Galaxy AI'),
      ['Mira la lista de funciones de IA que puede usar tu móvil.', 'Las funciones que no están en la lista no funcionan en este modelo.', 'Algunas funciones dependen del modelo y del operador, o necesitan internet.'],
    ],
  },
  'g20-smartview': {
    desc: 'Muestra la pantalla del móvil en una TV con Smart View.',
    steps: [
      QUICK,
      ['Toca ‘Smart View’.'],
      ['Toca el nombre de la TV a la que quieres conectarte.', 'Funciona mejor si la TV y el móvil están en la misma Wi-Fi.'],
      ['Toca ‘Iniciar ahora’.'],
    ],
  },
  'g20-pc': {
    desc: 'Conecta tu móvil Galaxy a un PC con Windows mediante Enlace a Windows.',
    steps: [
      ...settings('Dispositivos conectados', 'Enlace a Windows'),
      ['Lee las instrucciones de la pantalla.'],
      ['En el ordenador, abre la dirección que aparece para terminar de conectar.'],
    ],
  },
  'g20-dex': {
    desc: 'Descubre qué es Samsung DeX y dónde están sus ajustes.',
    steps: [...settings('Dispositivos conectados', 'Samsung DeX'), ['Lee la información.']],
  },
  'g20-watch': {
    desc: 'Conecta un reloj o unos auriculares Galaxy con la app Galaxy Wearable.',
    steps: [
      ['Toca la app ‘Galaxy Wearable’.', 'Si no está en la pantalla de inicio, búscala en la pantalla de aplicaciones.'],
      ['Toca ‘Iniciar’.'],
      ['Sigue las instrucciones de la pantalla para terminar de conectar.'],
    ],
  },
  'g20-smartthings': {
    desc: 'Conecta electrodomésticos al móvil con SmartThings.',
    steps: [
      open('SmartThings'),
      ['Toca ‘+’ (Añadir), arriba.'],
      ['Elige el electrodoméstico que quieres conectar.'],
      ['Sigue las instrucciones de la pantalla para terminar de conectar.'],
    ],
  },
  'g20-musicshare': {
    desc: 'Activa Music Share para que tus amigos pongan música en tu altavoz Bluetooth.',
    steps: [
      ...settings('Dispositivos conectados', 'Music Share'),
      ['Toca el interruptor ‘Music Share’ para activarlo.', 'Tus amigos pueden poner música de su móvil en tu altavoz Bluetooth.'],
    ],
  },
  'g21-split': {
    desc: 'Usa dos apps a la vez con la vista de pantalla dividida.',
    steps: [
      ['Toca el botón Recientes, abajo a la izquierda.'],
      ['Toca el icono pequeño de la parte de arriba de una app.'],
      ['Toca ‘Abrir en vista de pantalla dividida’.'],
      ['Elige la segunda app para la mitad de abajo.'],
    ],
  },
  'g21-modes': {
    desc: 'Activa el modo Dormir en Modos y rutinas.',
    steps: [
      ...settings('Modos y rutinas', 'Modos'),
      ['Toca ‘Dormir’.'],
      ['Toca ‘Activar’.', 'Mientras duermes, las notificaciones se silencian y la pantalla se oscurece.'],
    ],
  },
  'g21-aod': {
    desc: 'Ve un reloj en la pantalla aunque esté apagada, con Always On Display.',
    steps: [
      ...settings('Pantalla de bloqueo y AOD'),
      ['Toca el interruptor ‘Always On Display’ para activarlo.', 'Ves el reloj con la pantalla apagada. Gasta un poco más de batería.'],
      ['Para cambiar el estilo del reloj, mantén pulsada la pantalla de bloqueo.'],
    ],
  },
  'g21-wellbeing': {
    desc: 'Mira cuánto has usado hoy el móvil y pon temporizadores a las apps.',
    steps: [
      ...settings('Bienestar digital'),
      ['Mira cuánto tiempo has usado hoy el móvil.'],
      ['Toca ‘Temporizadores de apps’.', 'Puedes poner un límite de tiempo diario a cada app.'],
    ],
  },
  'g21-apps': {
    desc: 'Echa un vistazo a Samsung Health, Samsung Kids y Game Booster.',
    steps: [
      ['Toca la app ‘Samsung Health’.', 'Si no está en la pantalla de inicio, búscala en la pantalla de aplicaciones.'],
      ['Mira tus pasos y tus registros de ejercicio.'],
      ...settings('Aplicaciones', 'Samsung Kids'),
      ['Toca ‘Abrir’.', 'Puedes elegir las apps y los límites de tiempo para tus nietos.'],
      ['Mientras juegas, toca el icono de Game Booster, abajo en la pantalla.'],
    ],
  },
  'g21-samsung': {
    desc: 'Encuentra las apps Samsung.com y Samsung Global Goals, y Samsung News.',
    steps: [
      open('Samsung.com'),
      ['Aquí puedes leer noticias de productos Samsung y pedir ayuda.'],
      HOME_BTN,
      ['Toca la app ‘Samsung Global Goals’.', 'Busca ‘Samsung Global Goals’ en la pantalla de aplicaciones.'],
      ['Busca Samsung News con la búsqueda de la pantalla de aplicaciones.'],
    ],
  },
  'g21-spen': {
    desc: 'Saca el S Pen, abre su menú y prueba la app PENUP en los modelos Ultra compatibles.',
    steps: [
      ['Pulsa suavemente el extremo del S Pen, abajo del móvil.'],
      ['Toca la función que quieres en el menú de la pantalla.'],
      open('PENUP'),
      ['Cuando termines, mete el S Pen hasta que haga clic.'],
    ],
  },
  'g22-ring': {
    desc: 'Qué revisar cuando el móvil no suena.',
    steps: [
      QUICK,
      ['Toca el botón ‘Sonido’.', 'Si está en Silencio o Vibrar, tócalo para cambiarlo a Sonido.'],
      ['Si ‘No molestar’ está en azul (activado), tócalo para desactivarlo.'],
      ['Pulsa el botón Subir volumen del lateral para subir el sonido.'],
    ],
  },
  'g22-network': {
    desc: 'Qué revisar cuando dejan de funcionar las llamadas o internet.',
    steps: [
      QUICK,
      ['Si ‘Modo Avión’ está activado, tócalo para desactivarlo.'],
      ['Si ‘Datos móviles’ está desactivado, tócalo para activarlo.'],
      ['Si hay poca señal, prueba a cambiar de sitio.'],
      ['Si sigue sin funcionar, reinicia el móvil.'],
    ],
  },
  'g22-charge': {
    desc: 'Qué revisar cuando tu móvil Galaxy no carga.',
    steps: [
      ['Comprueba que el cable y el cargador están bien enchufados.'],
      ['Si el puerto está mojado, deja que se seque del todo antes de cargar.'],
      ...settings('Batería', 'Ajustes de carga'),
      ['Si sigue sin cargar, lleva el móvil, el cargador y el cable al servicio técnico.'],
    ],
  },
  'g22-hot': {
    desc: 'Qué hacer cuando el móvil se calienta.',
    steps: [
      ['Si está cargando, desenchufa el cargador.'],
      ['Toca el botón Recientes.'],
      ['Toca ‘Cerrar todo’ para cerrar las apps.'],
      ['Deja de usar el móvil un rato y déjalo enfriar en un sitio fresco.'],
    ],
  },
  'g22-freeze': {
    desc: 'Fuerza el reinicio de un móvil Galaxy bloqueado con dos botones.',
    steps: [
      ['Mantén pulsados a la vez el botón Lateral y Bajar volumen más de 7 segundos.', 'No los sueltes hasta que se apague la pantalla.'],
      ['Cuando se apague la pantalla, suéltalos y espera.'],
    ],
  },
  'g22-water': {
    desc: 'Qué revisar y qué hacer si el móvil se moja.',
    steps: [
      ['Sécalo con un paño suave hasta que quede totalmente seco.'],
      ['No enchufes el cargador hasta que esté completamente seco.'],
      ['Si era agua de mar, de piscina o con jabón, acláralo con agua limpia y luego sécalo.'],
      ['Si notas algo raro, llévalo enseguida al servicio técnico.'],
    ],
  },
  'g22-members': {
    desc: 'Busca problemas en tu móvil con el Diagnóstico del teléfono de Samsung Members.',
    steps: [
      ['Toca la app ‘Samsung Members’.', 'Si no está en la pantalla de inicio, búscala en la pantalla de aplicaciones.'],
      ['Toca ‘Soporte’.'],
      ['Toca ‘Diagnóstico del teléfono’.'],
      ['Toca ‘Probar todo’ o lo que quieres revisar.'],
    ],
  },
  'g22-service': {
    desc: 'Apunta el modelo y el problema antes de contactar con el servicio técnico de Samsung.',
    steps: [
      ...settings('Acerca del teléfono'),
      ['Apunta el número de modelo (por ejemplo, SM-S942N).'],
      ['Apunta cuándo y cómo pasa el problema.'],
      ['Contacta con el soporte de Samsung de tu país o pide cita en un servicio técnico.', 'Encuentra la página de soporte de tu país en samsung.com/support.'],
    ],
  },
};
