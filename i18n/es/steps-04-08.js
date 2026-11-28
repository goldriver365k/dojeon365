// Pasos en español, capítulos 04–08 (borrador, sin revisar).
import { open, item, settings, BACK, QUICK } from './kit.js';

const PHONE = open('Teléfono');
const CONTACTS = open('Contactos');
const MESSAGES = open('Mensajes');

export const TITLES_04_08 = {
  'g04-call': ['hacer-una-llamada', 'Llamar marcando el número'],
  'g04-answer': ['contestar-o-rechazar', 'Contestar o rechazar una llamada'],
  'g04-speaker': ['altavoz', 'Activar el altavoz durante una llamada'],
  'g04-missed': ['devolver-llamada-perdida', 'Devolver una llamada perdida'],
  'g04-log': ['historial-de-llamadas', 'Ver el historial de llamadas'],
  'g04-block': ['bloquear-numeros', 'Bloquear números de spam'],
  'g05-new': ['guardar-contacto', 'Guardar un contacto nuevo'],
  'g05-search': ['buscar-contacto', 'Buscar un contacto por nombre'],
  'g05-edit': ['editar-numero', 'Cambiar un número de teléfono'],
  'g05-speed': ['marcacion-rapida', 'Añadir a quien llamas a menudo'],
  'g05-share': ['compartir-contacto', 'Compartir un contacto'],
  'g06-send': ['enviar-y-responder-mensajes', 'Enviar y responder mensajes'],
  'g06-type': ['escribir-letras-numeros-simbolos', 'Escribir letras, números y símbolos'],
  'g06-fix': ['corregir-errores', 'Corregir errores al escribir'],
  'g06-copy': ['copiar-y-pegar', 'Copiar y pegar'],
  'g06-photo': ['adjuntar-foto', 'Adjuntar una foto a un mensaje'],
  'g06-translate': ['traducir-texto', 'Traducir un texto'],
  'g07-noti': ['ver-y-borrar-notificaciones', 'Ver y borrar notificaciones'],
  'g07-appnoti': ['notificaciones-de-apps', 'Ajustar las notificaciones de las apps'],
  'g07-quick': ['panel-de-ajustes-rapidos', 'Abrir el panel de ajustes rápidos'],
  'g07-flash': ['linterna', 'Encender la linterna'],
  'g07-rotate': ['rotacion-de-pantalla', 'Controlar la rotación de la pantalla'],
  'g07-dnd': ['no-molestar-y-modo-avion', 'Usar No molestar y el Modo Avión'],
  'g08-wifi': ['conectar-wifi', 'Conectarse a una red Wi-Fi'],
  'g08-data': ['datos-moviles', 'Activar y desactivar los datos móviles'],
  'g08-usage': ['uso-de-datos', 'Ver el uso de datos'],
  'g08-bt': ['auriculares-bluetooth', 'Conectar auriculares Bluetooth'],
  'g08-hotspot': ['zona-wifi', 'Usar la Zona Wi-Fi'],
  'g08-location': ['ubicacion-y-nfc', 'Encontrar los ajustes de ubicación y NFC'],
};

export const STEPS_04_08 = {
  'g04-call': {
    desc: 'Haz una llamada desde un móvil Galaxy marcando el número en el teclado.',
    steps: [
      PHONE,
      ['Toca ‘Teclado’ abajo.'],
      ['Toca los números del teléfono en orden.', 'Si te equivocas, bórralo con el botón de borrar de abajo a la derecha.'],
      ['Toca el botón verde de llamar.'],
      ['Al terminar de hablar, toca el botón rojo de colgar.'],
    ],
  },
  'g04-answer': {
    desc: 'Contesta deslizando el botón verde, rechaza con el rojo o rechaza con un mensaje.',
    steps: [
      ['Mantén pulsado el botón verde de contestar y deslízalo hacia arriba.', 'Sácalo del círculo para conectar la llamada.'],
      ['Para rechazar, mantén pulsado el botón rojo y deslízalo hacia arriba.'],
      ['Para rechazar con un mensaje, desliza hacia arriba ‘Enviar mensaje’, abajo.', 'Elige un mensaje y se le envía a quien llama.', 'En Ajustes → Accesibilidad → Interacción y destreza puedes contestar con un solo toque.'],
    ],
  },
  'g04-speaker': {
    desc: 'Activa el altavoz durante una llamada para hablar sin acercar el móvil a la oreja.',
    steps: [
      ['Haz o contesta una llamada.'],
      ['Toca ‘Altavoz’.', 'Puedes oír y hablar con el móvil lejos de la oreja.'],
      ['Para desactivar el altavoz, vuelve a tocar ‘Altavoz’.'],
    ],
  },
  'g04-missed': {
    desc: 'Devuelve una llamada perdida desde la lista Recientes de la app Teléfono.',
    steps: [
      PHONE,
      ['Toca ‘Recientes’ abajo.'],
      ['Desliza hacia la derecha el número perdido.', 'Al deslizar a la derecha se llama enseguida.', 'Si no llama al deslizar, toca el número y luego el botón de llamar.'],
    ],
  },
  'g04-log': {
    desc: 'Mira quién te llamó y cuándo en la lista Recientes de la app Teléfono.',
    steps: [PHONE, ['Toca ‘Recientes’ abajo.'], ['Toca un nombre para ver los detalles.', 'Puedes ver cuándo hablasteis.']],
  },
  'g04-block': {
    desc: 'Bloquea un número de spam en los ajustes de la app Teléfono.',
    steps: [
      PHONE,
      ['Toca los tres puntos (Más opciones), arriba a la derecha.'],
      ['Toca ‘Ajustes’.'],
      ['Toca ‘Bloquear números’.'],
      ['Toca ‘Añadir número de teléfono’.', '', 'La pantalla puede ser un poco distinta según la versión.'],
      ['Escribe el número que quieres bloquear.'],
      ['Toca ‘Guardar’.'],
    ],
  },
  'g05-new': {
    desc: 'Guarda un contacto nuevo con nombre y número en la app Contactos.',
    steps: [
      CONTACTS,
      ['Toca ‘+’ (Crear contacto), arriba a la derecha.'],
      ['Toca la casilla Nombre.'],
      ['Escribe el nombre.'],
      ['Toca la casilla Teléfono.'],
      ['Escribe el número de teléfono.'],
      ['Toca ‘Guardar’.'],
    ],
  },
  'g05-search': {
    desc: 'Encuentra un contacto rápidamente buscando su nombre.',
    steps: [CONTACTS, ['Toca la lupa (Buscar), arriba.'], ['Escribe el nombre que buscas.'], ['Toca el nombre que aparece.']],
  },
  'g05-edit': {
    desc: 'Cambia el número de teléfono guardado de un contacto.',
    steps: [
      CONTACTS,
      ['Toca el nombre de la persona.'],
      ['Toca ‘Editar’ abajo.'],
      ['Toca la casilla Teléfono.'],
      ['Borra el número antiguo y escribe el nuevo.'],
      ['Toca ‘Guardar’.'],
    ],
  },
  'g05-speed': {
    desc: 'Configura la marcación rápida para llamar manteniendo pulsado un número del teclado.',
    steps: [
      PHONE,
      ['Toca ‘Teclado’ abajo.'],
      ['Toca los tres puntos (Más opciones), arriba a la derecha.'],
      ['Toca ‘Números de marcación rápida’.'],
      ['Toca el número ‘2’.', 'Elige cualquier número libre.'],
      ['Elige a la persona en tus contactos.'],
      ['Mantén pulsado el ‘2’ del teclado para llamarla.', 'Prueba a mantener pulsado el ‘2’ en la imagen de práctica.'],
    ],
  },
  'g05-share': {
    desc: 'Envía los datos de un contacto a otra persona por mensaje.',
    steps: [
      CONTACTS,
      ['Toca el nombre de la persona que quieres compartir.'],
      ['Toca ‘Compartir’ abajo.'],
      ['Toca ‘Mensajes’.'],
      ['Elige quién lo recibirá.'],
      ['Toca el botón Enviar.'],
    ],
  },
  'g06-send': {
    desc: 'Envía un mensaje de texto y responde a otro en la app Mensajes.',
    steps: [
      MESSAGES,
      ['Toca la conversación a la que quieres responder.', 'Para un mensaje nuevo, toca el botón Iniciar chat, abajo a la derecha.'],
      ['Toca la casilla del mensaje, abajo.'],
      ['Escribe tu mensaje.'],
      ['Toca el botón Enviar, a la derecha.'],
    ],
  },
  'g06-type': {
    desc: 'Escribe letras, números y símbolos, y cambia de idioma en el Teclado Samsung.',
    steps: [
      ['Escribe ‘Hola’ en el teclado.'],
      ['Para escribir números o símbolos, toca ‘!#1’.'],
      ['Para volver a las letras, toca ‘ABC’ en el mismo sitio.'],
      ['Para escribir en otro idioma, desliza la barra espaciadora a la izquierda o a la derecha.', 'Solo aparecen los idiomas que añadiste en los ajustes del teclado.'],
    ],
  },
  'g06-fix': {
    desc: 'Corrige errores con la tecla de borrar y moviendo el cursor.',
    steps: [
      ['Toca una vez la tecla de borrar (⌫).', 'Se borra la letra que está justo antes del cursor.'],
      ['Escribe la letra correcta.'],
      ['Para corregir una letra en medio, toca ese sitio.', 'El cursor (la rayita que parpadea) se mueve donde tocaste.'],
    ],
  },
  'g06-copy': {
    desc: 'Copia un texto y pégalo en otro sitio.',
    steps: [
      ['Mantén pulsado el texto que quieres copiar.'],
      ['Toca ‘Copiar’.'],
      ['Mantén pulsada la casilla donde quieres pegarlo.'],
      ['Toca ‘Pegar’.'],
    ],
  },
  'g06-photo': {
    desc: 'Adjunta una foto de la Galería a un mensaje de texto.',
    steps: [
      MESSAGES,
      ['Toca la conversación a la que quieres enviar la foto.'],
      ['Toca ‘+’ a la izquierda de la casilla del mensaje.'],
      ['Toca ‘Galería’.'],
      ['Toca la foto que quieres enviar.'],
      ['Toca el botón Enviar.'],
    ],
  },
  'g06-translate': {
    desc: 'Traduce una conversación de Mensajes con la herramienta Galaxy AI del teclado.',
    steps: [
      MESSAGES,
      ['Toca la conversación que quieres traducir.'],
      ['Toca la casilla del mensaje, abajo.'],
      ['Toca el icono de Galaxy AI, arriba a la izquierda del teclado.'],
      ['Toca ‘Traducción de chat’.'],
      ['Elige los idiomas en el recuadro de arriba.'],
    ],
  },
  'g07-noti': {
    desc: 'Abre el panel de notificaciones, lee una y bórralas todas.',
    steps: [
      ['Desliza hacia abajo desde la parte superior izquierda de la pantalla.', 'Se abre el panel de notificaciones.'],
      ['Toca la notificación que quieres leer.', 'Al tocarla se abre su app.'],
      ['Desliza hacia abajo desde la parte superior izquierda de la pantalla.', 'Se abre el panel de notificaciones.'],
      ['Toca ‘Borrar’.', 'Se quitan todas las notificaciones.'],
    ],
  },
  'g07-appnoti': {
    desc: 'Desactiva las notificaciones de las apps que no necesitas.',
    steps: [
      ...settings('Notificaciones', 'Notificaciones de aplicaciones'),
      ['Toca el interruptor de una app para desactivar sus notificaciones.', 'Deja activadas las de las apps de mensajes importantes.'],
    ],
  },
  'g07-quick': {
    desc: 'Abre el panel de ajustes rápidos y aprende cómo funcionan sus botones.',
    steps: [
      QUICK,
      ['Mira los botones del panel.', 'Los azules están activados. Toca un botón para activarlo o desactivarlo.'],
      ['Mantén pulsado el botón ‘Wi-Fi’.', 'Al mantenerlo pulsado se abren sus ajustes.'],
      ['Desliza hacia arriba para cerrar el panel.'],
    ],
  },
  'g07-flash': {
    desc: 'Enciende y apaga la linterna desde el panel de ajustes rápidos.',
    steps: [QUICK, ['Toca ‘Linterna’.', 'Se enciende la luz de la parte de atrás del móvil.'], ['Para apagarla, vuelve a tocar ‘Linterna’.']],
  },
  'g07-rotate': {
    desc: 'Elige si la pantalla gira cuando pones el móvil de lado.',
    steps: [
      QUICK,
      ['Toca ‘Rotación automática’.', 'Si está activada, la pantalla gira con el móvil. Si no, se queda en vertical.'],
      ['Pon el móvil de lado para probarlo.'],
    ],
  },
  'g07-dnd': {
    desc: 'Silencia llamadas y avisos con No molestar y usa el Modo Avión en el avión.',
    steps: [
      QUICK,
      ['Toca ‘No molestar’.', 'Las llamadas y notificaciones no suenan. Tócalo otra vez para desactivarlo.'],
      ['Vuelve a tocar ‘No molestar’ para desactivarlo.'],
      ['Toca ‘Modo Avión’.', 'Se cortan las llamadas e internet. Úsalo en el avión.'],
      ['Al bajar del avión, tócalo otra vez para desactivarlo.'],
    ],
  },
  'g08-wifi': {
    desc: 'Conecta tu móvil Galaxy a una red Wi-Fi en Ajustes → Conexiones → Wi-Fi.',
    steps: [
      ...settings('Conexiones', 'Wi-Fi'),
      ['Toca el interruptor ‘Wi-Fi’ para activarlo.', 'Aparece la lista de redes Wi-Fi cercanas.'],
      ['Toca el nombre de la red Wi-Fi.', 'El candado indica que necesita contraseña.'],
      ['Escribe la contraseña de la Wi-Fi.', 'Suele estar escrita en la parte de atrás del router.'],
      ['Toca ‘Conectar’.'],
    ],
  },
  'g08-data': {
    desc: 'Activa o desactiva los datos móviles en Ajustes → Conexiones → Uso de datos.',
    steps: [
      ...settings('Conexiones', 'Uso de datos'),
      ['Toca el interruptor ‘Datos móviles’ para activarlo.', 'Si está desactivado, internet solo funciona con Wi-Fi.'],
    ],
  },
  'g08-usage': {
    desc: 'Mira cuántos datos móviles has gastado este mes y qué apps gastan más.',
    steps: [
      ...settings('Conexiones', 'Uso de datos'),
      ['Toca ‘Uso de datos móviles’.'],
      ['Mira cuánto has usado este mes.', 'Las apps que más gastan salen arriba. La app de tu operador muestra lo que te queda.'],
    ],
  },
  'g08-bt': {
    desc: 'Empareja unos auriculares Bluetooth con tu móvil Galaxy.',
    steps: [
      ['Enciende los auriculares en modo de emparejamiento.'],
      ...settings('Conexiones', 'Bluetooth'),
      ['Toca el interruptor ‘Bluetooth’ para activarlo.'],
      ['Toca el nombre de tus auriculares en la lista.'],
      ['Toca ‘Conectar’.'],
    ],
  },
  'g08-hotspot': {
    desc: 'Comparte la conexión a internet del móvil con otro dispositivo usando la Zona Wi-Fi.',
    steps: [
      ...settings('Conexiones', 'Zona Wi-Fi y módem', 'Zona Wi-Fi'),
      ['Toca el interruptor ‘Zona Wi-Fi’ para activarlo.', '', 'Puede tener coste extra. Revisa antes tu tarifa.'],
      ['En el otro dispositivo, elige el nombre de tu móvil en la lista de Wi-Fi.'],
    ],
  },
  'g08-location': {
    desc: 'Encuentra los interruptores de Ubicación y NFC en Ajustes.',
    steps: [
      ...settings('Ubicación'),
      ['Toca el interruptor ‘Ubicación’ para activarlo.', 'Así las apps de mapas y del tiempo saben dónde estás.'],
      BACK,
      item('Conexiones'),
      ['Toca el interruptor ‘NFC y pagos sin contacto’ para activarlo.', 'Actívalo para pagar o usar tarjetas de transporte con el móvil.'],
    ],
  },
};
