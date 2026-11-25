// Lecciones de Galaxy en español (borrador, sin revisar → noindex y fuera del sitemap).
// Piloto: capítulos 01–03. steps[i] corresponde a la tarjeta coreana i de la misma lección.
import { open, item, settings } from './kit.js';

export const GROUPS = { basic: 'Lo básico', life: 'Uso diario', apply: 'Más funciones', adv: 'Avanzado y solución de problemas' };

export const CATEGORIES = {
  1: ['Encender y apagar el móvil', 'Botones, carga, encendido y pantalla de bloqueo'],
  2: ['Tocar, mantener y deslizar', 'Los gestos básicos y los botones de navegación'],
  3: ['Texto y sonido más cómodos', 'Letra más grande, brillo, tiempo de pantalla y volumen'],
  4: ['Hacer y contestar llamadas', 'Llamar, contestar, altavoz y bloqueo'],
  5: ['Guardar y buscar contactos', 'Contactos nuevos, búsqueda, edición y favoritos'],
  6: ['Enviar mensajes', 'Escribir, corregir, copiar y adjuntar fotos'],
  7: ['Notificaciones y ajustes rápidos', 'Panel de notificaciones, linterna, rotación y No molestar'],
  8: ['Wi-Fi, datos y Bluetooth', 'Conectarse a internet y a otros dispositivos'],
  9: ['Buscar en internet e instalar apps', 'Navegador, códigos QR, descargas y tiendas de apps'],
  10: ['Hacer fotos y vídeos', 'Cámara, selfis, zoom, temporizador y vídeo'],
  11: ['Ordenar fotos y archivos', 'Galería, edición, recuperar y Mis archivos'],
  12: ['Pantalla de inicio y herramientas', 'Apps, carpetas, fondo, alarmas, calendario y notas'],
  13: ['Compartir fotos con la familia', 'Correo, vídeos y videollamadas'],
  14: ['Pagar con Samsung Wallet', 'Abrir Wallet y elegir una tarjeta'],
  15: ['Usar el móvil con seguridad', 'Bloqueo, biometría, permisos y SOS de emergencia'],
  16: ['Pasar a un móvil nuevo', 'Configuración, cuentas, Smart Switch y copias de seguridad'],
  17: ['Vista, oído y tacto', 'Ampliación, contraste, TalkBack y subtítulos'],
  18: ['Batería y almacenamiento', 'Ahorro de energía, almacenamiento y actualizaciones'],
  19: ['Galaxy AI y Bixby', 'Peticiones por voz y funciones de Galaxy AI'],
  20: ['Conectar a TV, PC y reloj', 'Smart View, PC, DeX, wearables y SmartThings'],
  21: ['Más funciones útiles', 'Pantalla dividida, modos y rutinas, Always On Display'],
  22: ['Cuando algo falla', 'Sin sonido, sin señal, carga, calor y bloqueos'],
};

// Solo las lecciones ya traducidas (el resto aparece como “próximamente” en el índice).
export const TITLES = {
  'g01-buttons': ['botones-laterales', 'Encontrar los botones laterales'],
  'g01-charge': ['cargar-el-movil', 'Cargar el móvil'],
  'g01-power': ['apagar-y-encender', 'Apagar y volver a encender el móvil'],
  'g01-restart': ['reiniciar-el-movil', 'Reiniciar el móvil'],
  'g01-lock': ['bloquear-y-desbloquear', 'Bloquear y desbloquear la pantalla'],
  'g02-tap': ['tocar', 'Tocar una vez'],
  'g02-hold': ['mantener-pulsado', 'Mantener pulsado'],
  'g02-swipe': ['deslizar', 'Deslizar para moverse'],
  'g02-pinch': ['zoom-con-dos-dedos', 'Ampliar con dos dedos'],
  'g02-back': ['boton-atras', 'Volver atrás'],
  'g02-home': ['boton-inicio', 'Ir a la pantalla de inicio'],
  'g02-recent': ['apps-recientes', 'Abrir las apps recientes'],
  'g03-font': ['letra-mas-grande', 'Poner la letra más grande'],
  'g03-zoom': ['zoom-de-pantalla', 'Agrandar la pantalla y los iconos'],
  'g03-easy': ['modo-facil', 'Activar el Modo fácil'],
  'g03-bright': ['ajustar-brillo', 'Ajustar el brillo'],
  'g03-timeout': ['tiempo-de-pantalla', 'Cambiar cuánto tarda en apagarse la pantalla'],
  'g03-sound': ['volumen-y-vibracion', 'Ajustar el volumen del tono y la vibración'],
};

export const LESSONS = {
  'g01-buttons': {
    desc: 'Aprende dónde están los botones Subir volumen, Bajar volumen y Lateral de un móvil Galaxy y para qué sirve cada uno.',
    steps: [
      ['Mira el borde derecho del móvil.', 'Hay tres botones. De arriba abajo: Subir volumen, Bajar volumen y el botón Lateral.'],
      ['Pulsa el botón Lateral en la imagen.', 'Es el de abajo. Sirve para encender y apagar el móvil o apagar la pantalla.'],
      ['Pulsa el botón Bajar volumen en la imagen.', 'Es el del medio. Baja el sonido.'],
      ['Pulsa el botón Subir volumen en la imagen.', 'Es el de arriba. Sube el sonido.'],
    ],
  },
  'g01-charge': {
    desc: 'Carga tu móvil Galaxy paso a paso: enchufa el cargador, conecta el cable y comprueba que está cargando.',
    steps: [
      ['Enchufa el cargador a la toma de corriente.'],
      ['Conecta el extremo del cable al puerto de la parte de abajo del móvil.', 'Si el puerto está mojado, espera a que se seque del todo.'],
      ['Comprueba que en la pantalla aparece el símbolo de carga.'],
      ['Desconecta el cable cuando termine de cargar.'],
    ],
  },
  'g01-power': {
    desc: 'Apaga un móvil Galaxy con los botones Lateral y Bajar volumen, y vuelve a encenderlo.',
    steps: [
      ['Mantén pulsados a la vez el botón Lateral y el botón Bajar volumen.', 'Púlsalos al mismo tiempo y espera a que aparezca el menú.'],
      ['Toca Apagar.'],
      ['Toca Apagar otra vez.', 'Cuando la pantalla se apague, pasa al siguiente paso para encenderlo.'],
      ['Mantén pulsado el botón Lateral para encender el móvil.', 'Mantenlo unos segundos hasta que salga el logotipo de Samsung. Después, desbloquea la pantalla.'],
    ],
  },
  'g01-restart': {
    desc: 'Reinicia un móvil Galaxy cuando va lento o hace cosas raras.',
    steps: [
      ['Mantén pulsados a la vez el botón Lateral y el botón Bajar volumen.', 'Mantenlos hasta que aparezca el menú de apagado.'],
      ['Toca Reiniciar.'],
      ['Toca Reiniciar otra vez.'],
      ['Espera a que el móvil se apague y se vuelva a encender.', '', 'Si la pantalla está bloqueada y no sale el menú, mantén los dos botones más de 7 segundos.'],
    ],
  },
  'g01-lock': {
    desc: 'Bloquea la pantalla con el botón Lateral y desbloquéala deslizando hacia arriba.',
    steps: [
      ['Pulsa una vez, brevemente, el botón Lateral.', 'La pantalla se apaga y se bloquea sola.'],
      ['Vuelve a pulsar brevemente el botón Lateral.', 'Se enciende la pantalla de bloqueo. También puedes tocar dos veces la pantalla.'],
      ['Desliza hacia arriba en la pantalla.', 'Si configuraste un PIN o una huella, úsalos para desbloquear.'],
    ],
  },
  'g02-tap': {
    desc: 'Practica el gesto más básico: tocar una vez para abrir una app.',
    steps: [
      ['Toca Galería una vez, suavemente, con la yema del dedo.', 'No aprietes. Un toque ligero abre la app.'],
      ['Toca el botón Inicio, abajo en el centro.', 'Vuelves a la primera pantalla (la pantalla de inicio).'],
    ],
  },
  'g02-hold': {
    desc: 'Practica mantener pulsado para abrir el menú de una app.',
    steps: [
      ['Mantén pulsado Galería durante 2 segundos.', 'No levantes el dedo hasta que salga un menú.'],
      ['Comprueba que ha salido un menú.', 'Al mantener pulsado ves lo que puedes hacer con esa app.'],
      ['Toca el botón Atrás para cerrar el menú.'],
    ],
  },
  'g02-swipe': {
    desc: 'Desliza para pasar de página en la pantalla de inicio y abrir la pantalla de aplicaciones.',
    steps: [
      ['Desliza hacia la izquierda en la pantalla.', 'Pasas a la siguiente página de la pantalla de inicio.'],
      ['Desliza hacia arriba desde abajo en la pantalla de inicio.', 'Se abre la pantalla de aplicaciones con todas tus apps.'],
      ['Desliza hacia abajo en la pantalla de aplicaciones.', 'Vuelves a la pantalla de inicio.'],
    ],
  },
  'g02-pinch': {
    desc: 'Separa dos dedos para ampliar una foto y júntalos para reducirla.',
    steps: [
      open('Galería'),
      ['Toca la foto que quieres ver.'],
      ['Pon dos dedos sobre la foto y sepáralos.', 'Separa el pulgar y el índice para verla más grande.'],
      ['Junta los dos dedos.', 'La foto vuelve a hacerse pequeña.'],
    ],
  },
  'g02-back': {
    desc: 'Usa el botón Atrás para volver a la pantalla anterior.',
    steps: [
      ...settings('Pantalla'),
      ['Toca el botón Atrás, abajo a la derecha.', 'Vuelves a la pantalla anterior (Ajustes).', 'Puedes cambiar el orden de los botones en Ajustes → Pantalla → Barra de navegación.'],
    ],
  },
  'g02-home': {
    desc: 'Vuelve a la pantalla de inicio desde cualquier app con el botón Inicio.',
    steps: [
      open('Ajustes'),
      ['Toca el botón Inicio, abajo en el centro.', 'Vuelves a la primera pantalla (la pantalla de inicio).'],
      ['Comprueba que aparece la pantalla de inicio.', 'Uses la app que uses, el botón Inicio te trae aquí.', 'Si no ves los botones, desliza un poco hacia arriba desde el borde inferior.'],
    ],
  },
  'g02-recent': {
    desc: 'Abre las apps recientes para cambiar de app o cerrarlas todas.',
    steps: [
      ['Toca el botón Recientes, abajo a la izquierda.', 'Las apps que usaste hace poco aparecen como tarjetas.'],
      ['Toca la app que quieres volver a usar.', 'Desliza hacia los lados para ver otras apps.'],
      ['Vuelve a tocar el botón Recientes.'],
      ['Toca ‘Cerrar todo’.', 'Se cierran todas las apps abiertas.'],
    ],
  },
  'g03-font': {
    desc: 'Pon la letra más grande y en negrita en Ajustes → Pantalla → Tamaño y estilo de fuente.',
    steps: [
      ...settings('Pantalla', 'Tamaño y estilo de fuente'),
      ['Arrastra el círculo de la barra de tamaño hacia la derecha.', 'Cuanto más a la derecha, más grande es la letra.'],
      ['Toca el interruptor ‘Fuente en negrita’ para activarlo.', 'La letra en negrita se lee mejor.'],
      ['Comprueba que la letra es más grande.'],
    ],
  },
  'g03-zoom': {
    desc: 'Agranda los iconos y botones con Zoom de pantalla en Ajustes → Pantalla.',
    steps: [
      ...settings('Pantalla', 'Zoom de pantalla'),
      ['Arrastra el círculo de la barra hacia la derecha.', 'Cuanto más a la derecha, más grandes son los iconos y botones.'],
      ['Comprueba que los iconos y botones son más grandes.'],
    ],
  },
  'g03-easy': {
    desc: 'Activa el Modo fácil para tener una pantalla de inicio más sencilla, con letra e iconos grandes.',
    steps: [
      ...settings('Pantalla', 'Modo fácil'),
      ['Toca el interruptor ‘Modo fácil’ para activarlo.', 'La letra y los iconos de la pantalla de inicio se hacen más grandes.'],
      ['Comprueba que la letra y los iconos de la pantalla de inicio son más grandes.'],
    ],
  },
  'g03-bright': {
    desc: 'Ajusta el brillo de la pantalla desde el panel de ajustes rápidos.',
    steps: [
      ['Desliza hacia abajo desde la parte superior derecha de la pantalla.', 'Se abre el panel de ajustes rápidos.'],
      ['Arrastra la barra de brillo hacia la derecha.', 'Arrástrala a la izquierda para oscurecer la pantalla.'],
      ['Desliza hacia arriba para cerrar el panel.'],
    ],
  },
  'g03-timeout': {
    desc: 'Cambia cuánto tiempo se queda encendida la pantalla en Ajustes → Pantalla → Tiempo de espera de pantalla.',
    steps: [
      ...settings('Pantalla', 'Tiempo de espera de pantalla'),
      ['Toca ‘5 minutos’.', 'Elige el tiempo que quieras. Cuanto más largo, más batería gasta.'],
    ],
  },
  'g03-sound': {
    desc: 'Sube el volumen del tono de llamada y haz que el móvil vibre al sonar.',
    steps: [
      ...settings('Sonidos y vibración', 'Volumen'),
      ['Arrastra la barra de Tono de llamada hacia la derecha.', 'Cuanto más a la derecha, más alto suena.'],
      ['Toca el botón Atrás, abajo.', 'Vuelves a la pantalla anterior.'],
      ['Toca ‘Sonido’.', 'Para que solo vibre, toca ‘Vibrar’.'],
      ['Toca el interruptor ‘Vibrar al sonar’ para activarlo.', 'Te avisan el sonido y la vibración a la vez.'],
    ],
  },
};
