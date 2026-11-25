// Strings for the "My phone" picker on the global pages (used in the browser and at build time).
export const DEVICE_STRINGS = {
  en: {
    h: 'My phone', none: 'Not chosen · showing common instructions',
    howH: 'First, find your phone’s model and software version',
    how: ['Tap the <b>Settings</b> app.', 'Tap <b>About phone</b> at the very bottom.', 'Check the <b>model name</b> at the top (for example, Galaxy S26 · SM-S942N).', 'Tap <b>Software information</b>.', 'Check the <b>One UI version</b> (for example, 9.0).'],
    howNote: 'On some models the menu is called ‘About device’. You can also type ‘About phone’ in the Settings search.',
    practice: 'Practice these steps', series: 'Series', model: 'Model', oneui: 'One UI version', save: 'Save my phone', clear: 'Use common instructions',
    note: 'Choosing is optional. It is saved only in this browser, and we never guess your model.',
    dontKnow: 'I don’t know', dontKnowWhich: 'I don’t know which one', chooseSeries: 'Choose a series first', baseVersion: 'lessons written for this',
    saved: 'Saved. Each lesson now shows whether it works on your phone.', cleared: 'Cleared. Showing common instructions.',
    modelUnknown: 'Model unknown', seriesUnknown: (s) => `${s} (model unknown)`, versionUnknown: 'One UI version unknown',
    level: { ok: 'Supported', diff: 'Check needed', check: 'Check needed', no: 'Not supported' },
    text: { ok: 'Checked against the official manual', diff: 'Menu names may differ on this One UI version', check: 'Not checked for this model yet', no: 'Not supported on this model', min: (v) => `Needs One UI ${v} or later` },
    on: 'on', change: 'Change',
    words: [['갤럭시 ', 'Galaxy '], ['플립', 'Flip'], ['폴드', 'Fold'], ['노트', 'Note'], ['엑스커버', 'XCover']],
    other: { 's-old': 'Other S series (S22 and earlier, FE)', 'a-old': 'Other A series', 'm-any': 'A Galaxy M series phone', 'f-any': 'A Galaxy F series phone', 'note-old': 'Other Note phones', 'xcover-old': 'Other XCover phones', etc: 'A Galaxy phone not in this list' },
    seriesNames: { s: 'Galaxy S series', a: 'Galaxy A series', flip: 'Galaxy Z Flip', fold: 'Galaxy Z Fold', m: 'Galaxy M series', f: 'Galaxy F series', note: 'Galaxy Note', xcover: 'Galaxy XCover', etc: 'Other / not listed' },
  },
  es: {
    h: 'Mi móvil', none: 'Sin elegir · instrucciones generales',
    howH: 'Primero, busca el modelo y la versión de software de tu móvil',
    how: ['Toca la aplicación <b>Ajustes</b>.', 'Toca <b>Acerca del teléfono</b>, abajo del todo.', 'Mira el <b>nombre del modelo</b> arriba (por ejemplo, Galaxy S26 · SM-S942N).', 'Toca <b>Información de software</b>.', 'Mira la <b>versión de One UI</b> (por ejemplo, 9.0).'],
    howNote: 'En algunos modelos el menú se llama ‘Acerca del dispositivo’. También puedes escribir ‘Acerca del teléfono’ en la búsqueda de Ajustes.',
    practice: 'Practicar estos pasos', series: 'Serie', model: 'Modelo', oneui: 'Versión de One UI', save: 'Guardar mi móvil', clear: 'Usar instrucciones generales',
    note: 'Elegir es opcional. Solo se guarda en este navegador y nunca adivinamos tu modelo.',
    dontKnow: 'No lo sé', dontKnowWhich: 'No sé cuál', chooseSeries: 'Elige primero una serie', baseVersion: 'versión de estas lecciones',
    saved: 'Guardado. Cada lección muestra ahora si funciona en tu móvil.', cleared: 'Borrado. Se muestran las instrucciones generales.',
    modelUnknown: 'Modelo desconocido', seriesUnknown: (s) => `${s} (modelo desconocido)`, versionUnknown: 'Versión de One UI desconocida',
    level: { ok: 'Compatible', diff: 'Por comprobar', check: 'Por comprobar', no: 'No compatible' },
    text: { ok: 'Comprobado con el manual oficial', diff: 'Los menús pueden cambiar en esta versión de One UI', check: 'Todavía no comprobado en este modelo', no: 'No disponible en este modelo', min: (v) => `Necesita One UI ${v} o posterior` },
    on: 'en', change: 'Cambiar',
    words: [['갤럭시 ', 'Galaxy '], ['플립', 'Flip'], ['폴드', 'Fold'], ['노트', 'Note'], ['엑스커버', 'XCover']],
    other: { 's-old': 'Otro de la serie S (S22 o anterior, FE)', 'a-old': 'Otro de la serie A', 'm-any': 'Un móvil de la serie M', 'f-any': 'Un móvil de la serie F', 'note-old': 'Otro Note', 'xcover-old': 'Otro XCover', etc: 'Un Galaxy que no está en la lista' },
    seriesNames: { s: 'Galaxy serie S', a: 'Galaxy serie A', flip: 'Galaxy Z Flip', fold: 'Galaxy Z Fold', m: 'Galaxy serie M', f: 'Galaxy serie F', note: 'Galaxy Note', xcover: 'Galaxy XCover', etc: 'Otro / no está en la lista' },
  },
};

/** Build-time HTML of the picker box. checkHref = the "check your model" lesson in this language (or null). */
export function deviceSection(lang, checkHref) {
  const D = DEVICE_STRINGS[lang];
  return `<section class="device" id="my-phone" aria-labelledby="dev-h">
  <h2 id="dev-h">${D.h}</h2>
  <p class="device__now" data-device-now>${D.none}</p>
  <details class="device__how" open>
    <summary>${D.howH}</summary>
    <ol>${D.how.map((x) => `<li>${x}</li>`).join('')}</ol>
    <p>${D.howNote}</p>
    ${checkHref ? `<a href="${checkHref}">${D.practice}</a>` : ''}
  </details>
  <form class="device__form" data-device-form>
    <label>${D.series} <select name="series"></select></label>
    <label>${D.model} <select name="model"></select></label>
    <label>${D.oneui} <select name="oneui"></select></label>
    <div class="device__btns"><button type="submit" class="btn btn--primary">${D.save}</button><button type="button" class="btn" data-clear>${D.clear}</button></div>
    <p class="device__saved" data-saved role="status"></p>
  </form>
  <p class="device__note">${D.note}</p>
</section>`;
}
