// Pasos en español, capítulos 09–12 (borrador, sin revisar).
import { open, settings, QUICK } from './kit.js';

const CAMERA = open('Cámara');
const GALLERY = open('Galería');
const HOME_BTN = ['Toca el botón Inicio, abajo en el centro.', 'Vuelves a la primera pantalla (la pantalla de inicio).'];
const SHUTTER = ['Toca el botón blanco de disparo.'];

export const TITLES_09_12 = {
  'g09-search': ['buscar-en-samsung-internet', 'Buscar en Samsung Internet'],
  'g09-bookmark': ['guardar-paginas', 'Guardar las páginas que visitas a menudo'],
  'g09-qr': ['leer-codigo-qr', 'Abrir un código QR'],
  'g09-files': ['archivos-descargados', 'Encontrar archivos descargados'],
  'g09-stores': ['play-store-y-galaxy-store', 'Usar Play Store y Galaxy Store'],
  'g09-install': ['instalar-actualizar-borrar-apps', 'Instalar, actualizar y borrar apps'],
  'g09-google': ['buscar-apps-de-google', 'Encontrar las apps de Google y del operador'],
  'g10-open': ['abrir-la-camara', 'Abrir la cámara'],
  'g10-focus': ['enfocar', 'Enfocar la cámara'],
  'g10-switch': ['cambiar-de-camara', 'Cambiar entre la cámara trasera y la frontal'],
  'g10-selfie': ['hacer-un-selfi', 'Hacer un selfi'],
  'g10-zoom': ['zoom-al-hacer-fotos', 'Acercar la imagen al hacer fotos'],
  'g10-timer': ['temporizador-de-camara', 'Usar el temporizador de la cámara'],
  'g10-modes': ['modo-retrato-y-noche', 'Probar los modos Retrato y Noche'],
  'g10-video': ['grabar-video', 'Grabar un vídeo'],
  'g10-capture': ['captura-y-grabacion-de-pantalla', 'Hacer una captura o grabar la pantalla'],
  'g11-latest': ['ultima-foto', 'Encontrar la foto que acabas de hacer'],
  'g11-album': ['crear-album', 'Crear un álbum'],
  'g11-edit': ['recortar-y-aclarar-foto', 'Recortar y aclarar una foto'],
  'g11-text': ['copiar-texto-de-foto', 'Copiar el texto de una foto'],
  'g11-multi': ['compartir-varias-fotos', 'Compartir varias fotos'],
  'g11-restore': ['recuperar-fotos-borradas', 'Recuperar fotos borradas'],
  'g11-docs': ['documentos-en-mis-archivos', 'Encontrar documentos en Mis archivos'],
  'g11-quickshare': ['quick-share', 'Enviar archivos con Quick Share'],
  'g12-addapp': ['app-en-pantalla-de-inicio', 'Poner una app en la pantalla de inicio'],
  'g12-folder': ['carpetas-y-widgets', 'Crear carpetas y widgets'],
  'g12-wallpaper': ['fondo-tema-y-bloqueo', 'Cambiar el fondo, el tema y la pantalla de bloqueo'],
  'g12-alarm': ['alarma-y-temporizador', 'Poner una alarma y un temporizador'],
  'g12-calendar': ['cita-en-calendario', 'Añadir una cita al calendario'],
  'g12-reminder': ['recordatorios', 'Recibir avisos de tareas'],
  'g12-note': ['samsung-notes', 'Usar Samsung Notes'],
  'g12-recorder': ['grabadora-de-voz', 'Grabar tu voz'],
  'g12-tools': ['tiempo-calculadora-radio', 'Usar el tiempo, la calculadora y la radio'],
};

export const STEPS_09_12 = {
  'g09-search': {
    desc: 'Busca en internet con el navegador Samsung Internet de un móvil Galaxy.',
    steps: [
      [...open('Samsung Internet'), 'Según la versión, la app puede llamarse ‘Samsung Internet’ o ‘Navegador’.'],
      ['Toca la barra de direcciones, arriba.'],
      ['Escribe lo que quieres buscar.'],
      ['Toca la tecla Ir (↵), abajo a la derecha del teclado.'],
      ['Toca el resultado que quieres leer.'],
    ],
  },
  'g09-bookmark': {
    desc: 'Guarda como favoritas las páginas que visitas a menudo y ábrelas después.',
    steps: [
      open('Samsung Internet'),
      ['Toca la estrella (☆) a la derecha de la barra de direcciones.', 'La página que estás viendo se guarda en Favoritos.'],
      ['Para abrirla después, toca la estrella (Favoritos), abajo.'],
      ['Toca la página que guardaste.'],
    ],
  },
  'g09-qr': {
    desc: 'Abre un código QR con la cámara del Galaxy.',
    steps: [
      CAMERA,
      ['Apunta la cámara al código QR.', 'En modo Foto, deja el código en el centro de la pantalla.'],
      ['Toca el enlace amarillo que aparece en la pantalla.', 'Ten cuidado con los códigos QR de sitios que no conoces.'],
    ],
  },
  'g09-files': {
    desc: 'Encuentra los archivos descargados en la app Mis archivos.',
    steps: [open('Mis archivos'), ['Toca ‘Descargas’.'], ['Toca el archivo que quieres abrir.']],
  },
  'g09-stores': {
    desc: 'Aprende la diferencia entre Google Play Store y Samsung Galaxy Store.',
    steps: [
      open('Play Store'),
      ['Es la tienda de apps de Google, donde puedes buscar y descargar apps.', 'Necesitas iniciar sesión con una cuenta de Google.'],
      HOME_BTN,
      open('Galaxy Store'),
      ['Es la tienda de apps de Samsung, con muchas apps y temas de Samsung.'],
    ],
  },
  'g09-install': {
    desc: 'Instala una app desde Play Store, actualiza apps en Galaxy Store y desinstala una app.',
    steps: [
      open('Play Store'),
      ['Toca la barra de búsqueda, arriba.'],
      ['Escribe el nombre de la app que quieres instalar.'],
      ['Toca ‘Instalar’ junto al nombre de la app.'],
      ['Toca la app ‘Galaxy Store’.', 'Ahora vamos a actualizar apps.'],
      ['Toca ‘Menú’ abajo.'],
      ['Toca ‘Actualizaciones’.'],
      ['Toca ‘Actualizar todo’.'],
      ['En la pantalla de inicio, mantén pulsada la app que quieres quitar.'],
      ['Toca ‘Desinstalar’.'],
      ['Toca ‘Aceptar’.', 'Puedes volver a instalar desde la tienda una app que quitaste.'],
    ],
  },
  'g09-google': {
    desc: 'Encuentra las apps de Google y la de tu operador con la búsqueda de la pantalla de aplicaciones.',
    steps: [
      ['Desliza hacia arriba en la pantalla de inicio para abrir la pantalla de aplicaciones.'],
      ['Toca ‘Buscar’ arriba.'],
      ['Escribe el nombre de la app.', 'Prueba con Google, YouTube o el nombre de tu operador.'],
      ['Toca la app que has encontrado.'],
    ],
  },
  'g10-open': {
    desc: 'Abre la app Cámara y encuentra el botón de disparo.',
    steps: [CAMERA, ['Comprueba que aparece la pantalla de la cámara.', 'El círculo blanco de abajo en el centro es el botón de disparo.']],
  },
  'g10-focus': {
    desc: 'Toca la pantalla para enfocar antes de hacer una foto.',
    steps: [
      CAMERA,
      ['Toca en la pantalla el sitio que quieres que salga nítido.', 'Cuando aparece un círculo amarillo, está enfocado.'],
      ['Toca el botón blanco de disparo.', 'Si las fotos salen borrosas, limpia la lente con un paño suave.'],
    ],
  },
  'g10-switch': {
    desc: 'Cambia entre la cámara trasera y la frontal (para selfis).',
    steps: [
      CAMERA,
      ['Toca las flechas en círculo, abajo a la derecha.', 'También puedes deslizar hacia arriba o abajo en la pantalla.'],
      ['Comprueba que la cámara frontal muestra tu cara.'],
    ],
  },
  'g10-selfie': {
    desc: 'Hazte un selfi con la cámara frontal.',
    steps: [
      CAMERA,
      ['Toca las flechas en círculo, abajo a la derecha.'],
      ['Sujeta el móvil para que tu cara quede en el centro de la pantalla.'],
      SHUTTER,
    ],
  },
  'g10-zoom': {
    desc: 'Acerca las cosas lejanas al hacer una foto.',
    steps: [
      CAMERA,
      ['Toca el número ‘3’, abajo.', 'Lo que está lejos se ve 3 veces más grande. Toca ‘1x’ para volver.', 'Los números cambian según el modelo (los Ultra acercan más).'],
      SHUTTER,
    ],
  },
  'g10-timer': {
    desc: 'Usa el temporizador de la cámara para que la foto se haga unos segundos después.',
    steps: [
      CAMERA,
      ['Toca el icono de Controles rápidos (⌄), arriba.'],
      ['Toca el icono del temporizador.'],
      ['Toca ‘5 segundos’.'],
      SHUTTER,
      ['La foto se hace al terminar la cuenta atrás.'],
    ],
  },
  'g10-modes': {
    desc: 'Prueba el modo Retrato para desenfocar el fondo y el modo Noche para sitios oscuros.',
    steps: [
      CAMERA,
      ['Toca ‘Retrato’ abajo.', 'La persona sale nítida y el fondo desenfocado.'],
      SHUTTER,
      ['Toca ‘Más’ abajo.'],
      ['Toca ‘Noche’.', 'En sitios oscuros las fotos salen claras sin flash. Mantén el móvil quieto mientras hace la foto.'],
    ],
  },
  'g10-video': {
    desc: 'Graba un vídeo con la cámara del Galaxy.',
    steps: [CAMERA, ['Toca ‘Vídeo’ abajo.'], ['Toca el botón rojo de grabar.'], ['Cuando termines, toca el botón de parar.']],
  },
  'g10-capture': {
    desc: 'Haz una captura con dos botones y graba la pantalla desde el panel de ajustes rápidos.',
    steps: [
      ['Pulsa brevemente a la vez el botón Lateral y el botón Bajar volumen.', 'Suena un clic y la pantalla se guarda como imagen. Puedes verla en Galería.'],
      QUICK,
      ['Toca ‘Grabar pantalla’.', 'Si no lo ves, desliza otra vez hacia abajo en el panel.'],
      ['Toca ‘Iniciar grabación’.'],
      ['Para terminar, toca el icono de parar en la parte de arriba.'],
    ],
  },
  'g11-latest': {
    desc: 'Encuentra en Galería la foto que acabas de hacer.',
    steps: [GALLERY, ['Toca la primera foto (arriba a la izquierda).', 'La foto más reciente siempre sale la primera.'], ['Desliza a la izquierda para ver la siguiente foto.']],
  },
  'g11-album': {
    desc: 'Crea un álbum nuevo en Galería para tener las fotos juntas.',
    steps: [
      GALLERY,
      ['Toca ‘Álbumes’ abajo.'],
      ['Toca ‘+’ (Añadir), arriba.'],
      ['Toca ‘Álbum’.'],
      ['Escribe un nombre para el álbum.'],
      ['Toca ‘Crear’.', 'Después elige las fotos que quieres meter.'],
    ],
  },
  'g11-edit': {
    desc: 'Recorta una foto y hazla más clara en Galería.',
    steps: [
      GALLERY,
      ['Toca la foto que quieres editar.'],
      ['Toca el lápiz (Editar), abajo.'],
      ['Arrastra una esquina de la foto hacia dentro para recortarla.'],
      ['Toca ‘Tono’ abajo.'],
      ['Arrastra la barra de brillo hacia la derecha.'],
      ['Toca ‘Guardar’.'],
    ],
  },
  'g11-text': {
    desc: 'Copia el texto de una foto en Galería y pégalo en un mensaje o una nota.',
    steps: [
      GALLERY,
      ['Toca una foto que tenga texto.'],
      ['Toca el icono amarillo ‘T’.', 'Solo aparece si hay texto en la foto.'],
      ['Mantén pulsado el texto que quieres copiar.'],
      ['Toca ‘Copiar’.', 'Puedes pegarlo en un mensaje o una nota.'],
    ],
  },
  'g11-multi': {
    desc: 'Selecciona varias fotos en Galería y compártelas de una vez.',
    steps: [
      GALLERY,
      ['Mantén pulsada una de las fotos que quieres enviar.'],
      ['Toca más fotos para enviarlas juntas.', 'Una marca en el círculo indica que está seleccionada.'],
      ['Toca ‘Compartir’ abajo.'],
      ['Toca la app con la que quieres enviarlas (por ejemplo, Mensajes).'],
      ['Elige a quién enviarlas y envíalas.'],
    ],
  },
  'g11-restore': {
    desc: 'Recupera fotos borradas desde la Papelera de Galería.',
    steps: [
      GALLERY,
      ['Toca ‘Menú’ abajo.'],
      ['Toca ‘Papelera’.'],
      ['Toca la foto que quieres recuperar.', 'Las fotos borradas se quedan un tiempo en la Papelera.'],
      ['Toca ‘Restaurar’.'],
    ],
  },
  'g11-docs': {
    desc: 'Encuentra los documentos guardados en el móvil con la app Mis archivos.',
    steps: [open('Mis archivos'), ['Toca ‘Documentos’.'], ['Toca el documento que quieres abrir.']],
  },
  'g11-quickshare': {
    desc: 'Envía una foto a un móvil cercano con Quick Share.',
    steps: [
      GALLERY,
      ['Toca la foto que quieres enviar.'],
      ['Toca ‘Compartir’ abajo.'],
      ['Toca ‘Quick Share’.', '', 'El otro móvil también necesita Quick Share activado (Ajustes → Dispositivos conectados → Quick Share).'],
      ['Toca el nombre del móvil al que quieres enviarla.'],
      ['En el móvil que la recibe, toca ‘Aceptar’.'],
    ],
  },
  'g12-addapp': {
    desc: 'Pon en la pantalla de inicio una app de la pantalla de aplicaciones.',
    steps: [
      ['Desliza hacia arriba en la pantalla de inicio para abrir la pantalla de aplicaciones.'],
      ['Mantén pulsada la app que quieres en la pantalla de inicio.'],
      ['Toca ‘Añadir a Inicio’.'],
    ],
  },
  'g12-folder': {
    desc: 'Agrupa apps en una carpeta y añade un widget del tiempo a la pantalla de inicio.',
    steps: [
      ['Mantén pulsada una app de la pantalla de inicio y arrástrala encima de otra.', 'Se crea una carpeta con las dos apps.'],
      ['Toca el nombre de la carpeta y escribe un nombre.'],
      ['Mantén pulsado un hueco libre de la pantalla de inicio.'],
      ['Toca ‘Widgets’.'],
      ['Toca ‘El Tiempo’.'],
      ['Toca ‘Añadir’.'],
    ],
  },
  'g12-wallpaper': {
    desc: 'Usa una de tus fotos como fondo de la pantalla de bloqueo o de inicio.',
    steps: [
      ...settings('Fondo y estilo'),
      ['Toca ‘Cambiar fondos’.'],
      ['Para usar una foto tuya, toca ‘Galería’.'],
      ['Toca la foto que quieres usar.'],
      ['Elige la pantalla de bloqueo, la de inicio o las dos.'],
      ['Toca ‘Listo’.'],
    ],
  },
  'g12-alarm': {
    desc: 'Pon una alarma e inicia un temporizador en la app Reloj.',
    steps: [
      open('Reloj'),
      ['Toca ‘Alarma’ abajo.'],
      ['Toca ‘+’ abajo a la derecha.'],
      ['Desliza los números hacia arriba o abajo para poner la hora.'],
      ['Toca ‘Guardar’.'],
      ['Para usar el temporizador, toca ‘Temporizador’ abajo.'],
      ['Pon el tiempo y toca ‘Iniciar’.'],
    ],
  },
  'g12-calendar': {
    desc: 'Añade una cita a la app Calendario.',
    steps: [
      open('Calendario'),
      ['Toca ‘+’ (Añadir evento), abajo a la derecha.'],
      ['Toca la casilla Título.'],
      ['Escribe el nombre de la cita.'],
      ['Toca ‘Inicio’ para elegir la fecha y la hora.'],
      ['Toca ‘Guardar’.'],
    ],
  },
  'g12-reminder': {
    desc: 'Recibe un aviso de algo que tienes que hacer añadiendo un recordatorio a un evento.',
    steps: [
      open('Calendario'),
      ['Toca ‘+’ (Añadir evento), abajo a la derecha.'],
      ['Escribe la tarea como título.'],
      ['Toca ‘Recordatorio’.'],
      ['Toca cuándo quieres el aviso (por ejemplo, 10 minutos antes).'],
      ['Toca ‘Guardar’.', 'El aviso llega a la hora que elegiste.'],
    ],
  },
  'g12-note': {
    desc: 'Escribe una nota rápida en Samsung Notes.',
    steps: [
      open('Samsung Notes'),
      ['Toca ‘+’ abajo a la derecha.'],
      ['Escribe lo que quieres apuntar.'],
      ['Cuando termines, toca el botón Atrás.', 'La nota se guarda sola.'],
    ],
  },
  'g12-recorder': {
    desc: 'Graba tu voz con la app Grabadora de voz.',
    steps: [open('Grabadora de voz'), ['Toca el botón Grabar.'], ['Habla hacia el móvil.'], ['Toca ‘Detener’.', 'La grabación se guarda en la lista.']],
  },
  'g12-tools': {
    desc: 'Mira el tiempo, usa la calculadora y escucha la radio.',
    steps: [
      open('El Tiempo'),
      ['Mira el tiempo y la temperatura de hoy.', 'La ubicación debe estar activada para ver el tiempo donde estás.'],
      HOME_BTN,
      open('Calculadora'),
      ['Toca los números, + y = para calcular.'],
      ['Toca la app ‘Radio’.', 'La radio necesita auriculares con cable, que hacen de antena.', 'Algunos modelos y operadores no tienen la app Radio.'],
    ],
  },
};
