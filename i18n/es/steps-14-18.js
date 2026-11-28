// Pasos en español, capítulos 14–18 (borrador, sin revisar).
import { open, item, settings, BACK } from './kit.js';

const REAL = 'Esta lección cambia ajustes reales o tiene resultados reales. Lee primero todos los pasos y después hazlos en el móvil.';
const SETTINGS_REAL = [...open('Ajustes'), REAL];
const WALLET = open('Samsung Wallet');
const sub = (...names) => names.map((n) => item(n));

export const TITLES_14_18 = {
  'g14-open': ['abrir-samsung-wallet', 'Abrir Samsung Wallet'],
  'g14-add': ['pantalla-anadir-tarjeta', 'Ver la pantalla para añadir una tarjeta'],
  'g14-pay': ['elegir-tarjeta-para-pagar', 'Elegir la tarjeta para pagar'],
  'g15-pin': ['crear-pin', 'Crear un PIN'],
  'g15-bio': ['huellas-y-cara', 'Registrar huellas y cara'],
  'g15-perm': ['permisos-y-ubicacion', 'Revisar los permisos de las apps y la ubicación'],
  'g15-folder': ['carpeta-segura-samsung-pass', 'Conocer Carpeta segura y Samsung Pass'],
  'g15-medical': ['informacion-medica-y-contactos', 'Añadir información médica y contactos de emergencia'],
  'g15-sos': ['sos-de-emergencia', 'Revisar el SOS de emergencia'],
  'g15-find': ['samsung-find', 'Encontrar el móvil con Samsung Find'],
  'g16-setup': ['primera-configuracion', 'Configurar el móvil por primera vez'],
  'g16-sim': ['sim-y-esim', 'Conocer la SIM y la eSIM'],
  'g16-account': ['cuentas-samsung-y-google', 'Revisar las cuentas de Samsung y Google'],
  'g16-switch': ['smart-switch', 'Pasar contactos y fotos con Smart Switch'],
  'g16-backup': ['copia-de-seguridad', 'Revisar la copia de seguridad'],
  'g16-restore': ['restaurar-copia', 'Restaurar una copia de seguridad'],
  'g17-magnify': ['ampliacion', 'Ampliar una parte de la pantalla'],
  'g17-contrast': ['fuentes-alto-contraste', 'Aumentar el contraste del texto'],
  'g17-talkback': ['talkback', 'Que el móvil lea la pantalla con TalkBack'],
  'g17-caption': ['sonido-y-subtitulos', 'Ajustar el sonido y los subtítulos'],
  'g17-hearing': ['audifonos', 'Revisar la compatibilidad con audífonos'],
  'g17-touch': ['ajustes-de-toque', 'Ajustar el toque y el acceso directo de accesibilidad'],
  'g18-usage': ['apps-que-gastan-bateria', 'Encontrar las apps que gastan más batería'],
  'g18-saver': ['ahorro-de-energia', 'Activar el Ahorro de energía'],
  'g18-storage': ['ver-almacenamiento', 'Ver el almacenamiento'],
  'g18-clean': ['borrar-archivos-grandes', 'Borrar archivos grandes'],
  'g18-care': ['mantenimiento-del-dispositivo', 'Revisar el móvil con Mantenimiento del dispositivo'],
  'g18-update': ['actualizar-software', 'Actualizar el software'],
  'g18-version': ['ver-modelo-y-version-one-ui', 'Ver tu modelo y la versión de One UI'],
};

export const STEPS_14_18 = {
  'g14-open': {
    desc: 'Abre Samsung Wallet y mira las tarjetas y los menús.',
    steps: [
      ['Toca la app ‘Samsung Wallet’.', 'También se abre deslizando hacia arriba la imagen de tarjeta de la parte de abajo.'],
      ['Mira tus tarjetas guardadas y los menús.', 'Si es la primera vez, aún no hay tarjetas. En la siguiente lección verás la pantalla para añadirlas.'],
    ],
  },
  'g14-add': {
    desc: 'Mira la pantalla para añadir una tarjeta de pago a Samsung Wallet.',
    steps: [
      [...WALLET, REAL],
      ['Toca ‘+’ (Añadir), arriba.'],
      ['Mira lo que puedes añadir.', 'Puedes añadir tarjetas de pago, de transporte y más, según tu país.'],
      ['Toca ‘Tarjeta de pago’.'],
      ['Lee las instrucciones para añadir una tarjeta.'],
    ],
  },
  'g14-pay': {
    desc: 'Elige una tarjeta en Samsung Wallet y paga acercando el móvil al datáfono.',
    steps: [
      [...WALLET, REAL],
      ['Toca la tarjeta con la que quieres pagar.'],
      ['Usa tu huella o escribe el PIN de pago.'],
      ['Acerca la parte de atrás del móvil al datáfono.'],
    ],
  },
  'g15-pin': {
    desc: 'Protege tu móvil con un bloqueo de pantalla por PIN.',
    steps: [
      SETTINGS_REAL,
      ...sub('Pantalla de bloqueo y AOD', 'Bloqueo de pantalla y biometría'),
      ['Toca ‘Tipo de bloqueo de pantalla’.'],
      ['Toca ‘PIN’.'],
      ['Escribe al menos 4 números fáciles de recordar para ti.', 'Evita números fáciles de adivinar, como tu cumpleaños o tu teléfono.'],
      ['Vuelve a escribir los mismos números para confirmar.'],
    ],
  },
  'g15-bio': {
    desc: 'Registra tu huella y, si quieres, tu cara para desbloquear el móvil.',
    steps: [
      SETTINGS_REAL,
      ...sub('Seguridad y privacidad', 'Bloqueo de pantalla y biometría'),
      ['Toca ‘Huellas digitales’.'],
      ['Escribe tu PIN.', 'Si no tienes PIN, créalo primero.'],
      ['Pon y levanta el dedo sobre la marca de huella de la parte de abajo, una y otra vez.', 'Usa un dedo que uses mucho y muévelo un poco cada vez.'],
      ['Para añadir también tu cara, toca ‘Reconocimiento facial’ en la misma pantalla.'],
    ],
  },
  'g15-perm': {
    desc: 'Mira qué apps usaron tu ubicación, cámara o micrófono y quita los accesos que no necesitas.',
    steps: [
      ...settings('Seguridad y privacidad', 'Permisos usados en las últimas 24 horas'),
      ['Mira qué apps usaron tu ubicación, cámara o micrófono.'],
      ['Toca ‘Ubicación’.'],
      ['Si hay una app que no conoces, cámbiala a ‘No permitir’.'],
    ],
  },
  'g15-folder': {
    desc: 'Encuentra Carpeta segura y Samsung Pass en Ajustes.',
    steps: [
      ...settings('Seguridad y privacidad', 'Más ajustes de seguridad'),
      ['Toca ‘Carpeta segura’.'],
      ['Lee la información sobre Carpeta segura.'],
      BACK,
      ['Toca ‘Contraseñas, claves de acceso y autocompletar’.', 'Aquí está Samsung Pass. Te ayuda a iniciar sesión con tu huella.'],
    ],
  },
  'g15-medical': {
    desc: 'Añade información médica y contactos de emergencia que pueden ayudar en una urgencia.',
    steps: [
      ...settings('Seguridad y emergencias', 'Información médica'),
      ['Escribe tu nombre, grupo sanguíneo, medicamentos y alergias.'],
      BACK,
      ['Toca ‘Contactos de emergencia’.'],
      ['Añade a tus familiares como contactos.'],
    ],
  },
  'g15-sos': {
    desc: 'Mira cómo funciona el SOS de emergencia de tu móvil sin hacer ninguna llamada.',
    steps: [
      [...open('Ajustes'), 'Si pulsas de verdad los botones, se llama a emergencias. En esta lección solo mira la pantalla.'],
      ...sub('Seguridad y emergencias', 'SOS de emergencia'),
      ['Lee cuántas veces hay que pulsar el botón Lateral para llamar.', 'Al pulsar el botón Lateral las veces indicadas, se llama al número configurado.'],
    ],
  },
  'g15-find': {
    desc: 'Activa el ajuste que permite encontrar el móvil con Samsung Find si lo pierdes.',
    steps: [
      ...settings('Seguridad y privacidad', 'Protección de dispositivo perdido', 'Encontrar mi móvil'),
      ['Toca el interruptor ‘Permitir encontrar este teléfono’ para activarlo.', 'Tienes que haber iniciado sesión con tu cuenta Samsung.'],
      ['Si pierdes el móvil, entra en smartthingsfind.samsung.com desde otro dispositivo.'],
    ],
  },
  'g16-setup': {
    desc: 'Configura un móvil Galaxy nuevo por primera vez.',
    steps: [
      ['Mantén pulsado el botón Lateral para encender el móvil.'],
      ['Comprueba tu idioma y toca ‘Iniciar’.'],
      ['Elige una red Wi-Fi y conéctate.'],
      ['Para lo demás, sigue las instrucciones de la pantalla y toca ‘Siguiente’.'],
    ],
  },
  'g16-sim': {
    desc: 'Aprende qué son la tarjeta SIM y la eSIM, y mira tu número en el Administrador de SIM.',
    steps: [
      ['La SIM (Nano-SIM) es una tarjeta pequeña que te da tu operador.'],
      ['La eSIM es una SIM que se descarga en el móvil, sin tarjeta.', '', 'La eSIM y el uso de dos números dependen del modelo y del operador.'],
      ...settings('Conexiones', 'Administrador de SIM'),
      ['Comprueba que aparecen tu número y tu operador.'],
    ],
  },
  'g16-account': {
    desc: 'Comprueba que el móvil tiene iniciada sesión en una cuenta Samsung y una cuenta de Google.',
    steps: [
      ...settings('Cuentas y copia de seguridad', 'Administrar cuentas'),
      ['Comprueba que hay una cuenta Samsung y una cuenta de Google.', 'Las necesitas para copias de seguridad, instalar apps y encontrar el móvil. Apunta tu usuario y contraseña.'],
    ],
  },
  'g16-switch': {
    desc: 'Pasa contactos, fotos y más a un Galaxy nuevo con Smart Switch.',
    steps: [
      ...settings('Cuentas y copia de seguridad', 'Traer datos del dispositivo antiguo'),
      ['En el móvil nuevo, elige ‘Recibir datos’.'],
      ['Pon los dos móviles cerca y sigue las instrucciones de la pantalla.'],
    ],
  },
  'g16-backup': {
    desc: 'Mira cuándo se hizo la última copia de seguridad en Samsung Cloud.',
    steps: [...settings('Cuentas y copia de seguridad', 'Samsung Cloud'), ['Mira la fecha de la última copia de seguridad.']],
  },
  'g16-restore': {
    desc: 'Restaura tus datos desde una copia de seguridad de Samsung Cloud.',
    steps: [
      ...settings('Cuentas y copia de seguridad', 'Samsung Cloud'),
      ['Toca ‘Restaurar datos’.'],
      ['Elige el dispositivo y lo que quieres restaurar.'],
      ['Toca ‘Restaurar’.'],
    ],
  },
  'g17-magnify': {
    desc: 'Activa el acceso directo a la ampliación y amplía una parte de la pantalla tocando tres veces.',
    steps: [
      ...settings('Accesibilidad', 'Mejoras de visibilidad', 'Ampliación'),
      ['Toca ‘Acceso directo a Ampliación’.'],
      ['Toca el interruptor ‘Acceso directo a Ampliación’ para activarlo.'],
      ['Toca ‘Tocar tres veces la pantalla’.'],
      ['Toca rápido tres veces donde quieres ampliar.'],
    ],
  },
  'g17-contrast': {
    desc: 'Activa las fuentes de alto contraste para que el texto destaque del fondo.',
    steps: [
      ...settings('Accesibilidad', 'Mejoras de visibilidad'),
      ['Toca el interruptor ‘Fuentes de alto contraste’ para activarlo.', 'Las letras tienen un borde más oscuro y destacan del fondo.'],
    ],
  },
  'g17-talkback': {
    desc: 'Activa TalkBack para que el móvil lea la pantalla en voz alta, después de aprender a desactivarlo.',
    steps: [
      [...open('Ajustes'), 'Con TalkBack activado cambia la forma de tocar. Lee primero cómo desactivarlo.'],
      ...sub('Accesibilidad', 'TalkBack'),
      ['Lee primero cómo desactivarlo.'],
      ['Toca el interruptor ‘TalkBack’ para activarlo.', 'Con él activado, un toque lee el elemento y dos toques lo abren.'],
    ],
  },
  'g17-caption': {
    desc: 'Activa Subtítulos automáticos para vídeos y Audio mono para oír con un solo oído.',
    steps: [
      ...settings('Accesibilidad', 'Mejoras de audición'),
      ['Toca ‘Subtítulos automáticos’.'],
      ['Toca el interruptor ‘Usar Subtítulos automáticos’ para activarlo.', 'Lo que se dice en los vídeos aparece como texto.'],
      BACK,
      ['Toca el interruptor ‘Audio mono’ para activarlo.', 'Oyes los dos lados del sonido aunque uses un solo oído.'],
    ],
  },
  'g17-hearing': {
    desc: 'Activa la compatibilidad con audífonos para oír mejor las llamadas.',
    steps: [
      ...settings('Accesibilidad', 'Mejoras de audición', 'Soporte para audífonos'),
      ['Toca el interruptor ‘Compatibilidad con audífonos’ para activarlo.', 'Las llamadas se oyen mejor si usas audífono.'],
      ['Conecta los audífonos Bluetooth en el menú Bluetooth.'],
    ],
  },
  'g17-touch': {
    desc: 'Facilita el toque: contesta con un toque, cambia el retraso de mantener pulsado y pon un acceso directo de accesibilidad.',
    steps: [
      ...settings('Accesibilidad', 'Interacción y destreza'),
      ['Toca el interruptor ‘Modo de un toque’ para activarlo.', 'Puedes contestar las llamadas con un toque en vez de deslizar.'],
      ['Toca ‘Retraso de mantener pulsado’.', 'Si te cuesta mantener pulsado, alarga el tiempo.'],
      ['Elige el tiempo que quieras.'],
      ['Toca dos veces el botón Atrás.'],
      ['Toca ‘Acceso directo de accesibilidad’.', 'Puedes activar con un botón una función de accesibilidad que uses mucho.'],
    ],
  },
  'g18-usage': {
    desc: 'Descubre qué apps gastan más batería.',
    steps: [
      ...settings('Batería', 'Uso diario'),
      ['Mira las apps que más batería han gastado.', 'Si una app que casi no usas gasta mucho, ciérrala o quítala.'],
    ],
  },
  'g18-saver': {
    desc: 'Activa el Ahorro de energía para que la batería dure más.',
    steps: [
      ...settings('Batería'),
      ['Toca el interruptor ‘Ahorro de energía’ para activarlo.', 'La batería dura más. Algunas notificaciones pueden llegar más tarde.', 'También puedes activarlo con el botón ‘Ahorro de energía’ del panel de ajustes rápidos.'],
    ],
  },
  'g18-storage': {
    desc: 'Mira cuánto espacio de almacenamiento te queda en el móvil.',
    steps: [
      ...settings('Mantenimiento del dispositivo', 'Almacenamiento'),
      ['Mira cuánto espacio queda.', 'Vaciar la papelera y borrar archivos duplicados libera espacio.'],
    ],
  },
  'g18-clean': {
    desc: 'Encuentra y borra en Mis archivos los archivos grandes que ya no necesitas.',
    steps: [open('Mis archivos'), ['Toca ‘Administrar almacenamiento’.'], ['Toca ‘Archivos grandes’.'], ['Selecciona solo los archivos que no necesitas y toca ‘Eliminar’.']],
  },
  'g18-care': {
    desc: 'Revisa y ordena el móvil con Mantenimiento del dispositivo.',
    steps: [...settings('Mantenimiento del dispositivo'), ['Toca ‘Optimizar ahora’.', 'Cierra las apps que no usas y revisa el móvil.']],
  },
  'g18-update': {
    desc: 'Busca e instala actualizaciones de software en tu móvil Galaxy.',
    steps: [
      ...settings('Actualización de software'),
      ['Toca ‘Descargar e instalar’.', 'Si hay una versión nueva, se descarga y se instala. Hazlo con Wi-Fi y cargando.'],
    ],
  },
  'g18-version': {
    desc: 'Mira el modelo de tu móvil y la versión de One UI en Ajustes → Acerca del teléfono.',
    steps: [
      ...settings('Acerca del teléfono'),
      ['Mira el nombre del modelo, arriba.'],
      ['Toca ‘Información de software’.'],
      ['Mira la ‘Versión de One UI’.', 'Díselo al servicio técnico junto con el modelo.'],
    ],
  },
};
