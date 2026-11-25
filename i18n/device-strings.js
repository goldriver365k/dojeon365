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
  pt: {
    h: 'Meu celular', none: 'Não escolhido · instruções gerais',
    howH: 'Primeiro, veja o modelo e a versão de software do seu celular',
    how: ['Toque no app <b>Configurações</b>.', 'Toque em <b>Sobre o telefone</b>, lá embaixo.', 'Veja o <b>nome do modelo</b> em cima (por exemplo, Galaxy S26 · SM-S942N).', 'Toque em <b>Informações do software</b>.', 'Veja a <b>versão do One UI</b> (por exemplo, 9.0).'],
    howNote: 'Em alguns modelos o menu se chama ‘Sobre o dispositivo’. Você também pode digitar ‘Sobre o telefone’ na busca das Configurações.',
    practice: 'Praticar estes passos', series: 'Série', model: 'Modelo', oneui: 'Versão do One UI', save: 'Salvar meu celular', clear: 'Usar instruções gerais',
    note: 'Escolher é opcional. Fica salvo só neste navegador e nunca adivinhamos seu modelo.',
    dontKnow: 'Não sei', dontKnowWhich: 'Não sei qual', chooseSeries: 'Escolha uma série antes', baseVersion: 'versão destas aulas',
    saved: 'Salvo. Cada aula agora mostra se funciona no seu celular.', cleared: 'Apagado. Mostrando instruções gerais.',
    modelUnknown: 'Modelo desconhecido', seriesUnknown: (s) => `${s} (modelo desconhecido)`, versionUnknown: 'Versão do One UI desconhecida',
    level: { ok: 'Compatível', diff: 'Verificar', check: 'Verificar', no: 'Não compatível' },
    text: { ok: 'Conferido com o manual oficial', diff: 'Os menus podem mudar nesta versão do One UI', check: 'Ainda não conferido neste modelo', no: 'Não disponível neste modelo', min: (v) => `Precisa do One UI ${v} ou mais novo` },
    on: 'no', change: 'Mudar',
    words: [['갤럭시 ', 'Galaxy '], ['플립', 'Flip'], ['폴드', 'Fold'], ['노트', 'Note'], ['엑스커버', 'XCover']],
    other: { 's-old': 'Outro da série S (S22 ou anterior, FE)', 'a-old': 'Outro da série A', 'm-any': 'Um celular da série M', 'f-any': 'Um celular da série F', 'note-old': 'Outro Note', 'xcover-old': 'Outro XCover', etc: 'Um Galaxy fora da lista' },
    seriesNames: { s: 'Galaxy série S', a: 'Galaxy série A', flip: 'Galaxy Z Flip', fold: 'Galaxy Z Fold', m: 'Galaxy série M', f: 'Galaxy série F', note: 'Galaxy Note', xcover: 'Galaxy XCover', etc: 'Outro / fora da lista' },
  },
  de: {
    h: 'Mein Handy', none: 'Nicht gewählt · allgemeine Anleitung',
    howH: 'Zuerst Modell und Softwareversion Ihres Handys finden',
    how: ['Tippen Sie auf die App <b>Einstellungen</b>.', 'Tippen Sie ganz unten auf <b>Telefoninfo</b>.', 'Sehen Sie oben den <b>Modellnamen</b> (z. B. Galaxy S26 · SM-S942N).', 'Tippen Sie auf <b>Softwareinformationen</b>.', 'Sehen Sie die <b>One UI-Version</b> (z. B. 9.0).'],
    howNote: 'Bei manchen Modellen heißt das Menü ‘Geräteinformationen’. Sie können auch ‘Telefoninfo’ in die Suche der Einstellungen eingeben.',
    practice: 'Diese Schritte üben', series: 'Serie', model: 'Modell', oneui: 'One UI-Version', save: 'Mein Handy speichern', clear: 'Allgemeine Anleitung nutzen',
    note: 'Die Auswahl ist freiwillig. Sie wird nur in diesem Browser gespeichert, und wir raten Ihr Modell nie.',
    dontKnow: 'Weiß nicht', dontKnowWhich: 'Weiß nicht, welches', chooseSeries: 'Zuerst eine Serie wählen', baseVersion: 'Version dieser Lektionen',
    saved: 'Gespeichert. Jede Lektion zeigt jetzt, ob sie auf Ihrem Handy funktioniert.', cleared: 'Gelöscht. Allgemeine Anleitung wird gezeigt.',
    modelUnknown: 'Modell unbekannt', seriesUnknown: (s) => `${s} (Modell unbekannt)`, versionUnknown: 'One UI-Version unbekannt',
    level: { ok: 'Unterstützt', diff: 'Prüfen', check: 'Prüfen', no: 'Nicht unterstützt' },
    text: { ok: 'Mit dem offiziellen Handbuch geprüft', diff: 'Menünamen können in dieser One UI-Version abweichen', check: 'Für dieses Modell noch nicht geprüft', no: 'Auf diesem Modell nicht verfügbar', min: (v) => `Benötigt One UI ${v} oder neuer` },
    on: 'auf', change: 'Ändern',
    words: [['갤럭시 ', 'Galaxy '], ['플립', 'Flip'], ['폴드', 'Fold'], ['노트', 'Note'], ['엑스커버', 'XCover']],
    other: { 's-old': 'Andere S-Serie (S22 oder älter, FE)', 'a-old': 'Andere A-Serie', 'm-any': 'Ein Handy der M-Serie', 'f-any': 'Ein Handy der F-Serie', 'note-old': 'Anderes Note', 'xcover-old': 'Anderes XCover', etc: 'Ein Galaxy, das nicht aufgeführt ist' },
    seriesNames: { s: 'Galaxy S-Serie', a: 'Galaxy A-Serie', flip: 'Galaxy Z Flip', fold: 'Galaxy Z Fold', m: 'Galaxy M-Serie', f: 'Galaxy F-Serie', note: 'Galaxy Note', xcover: 'Galaxy XCover', etc: 'Andere / nicht aufgeführt' },
  },
  fr: {
    h: 'Mon téléphone', none: 'Non choisi · instructions générales',
    howH: 'D’abord, trouvez le modèle et la version logicielle de votre téléphone',
    how: ['Touchez l’appli <b>Paramètres</b>.', 'Touchez <b>À propos du téléphone</b>, tout en bas.', 'Regardez le <b>nom du modèle</b> en haut (par exemple Galaxy S26 · SM-S942N).', 'Touchez <b>Informations sur le logiciel</b>.', 'Regardez la <b>version de One UI</b> (par exemple 9.0).'],
    howNote: 'Sur certains modèles, le menu s’appelle ‘À propos de l’appareil’. Vous pouvez aussi taper ‘À propos du téléphone’ dans la recherche des Paramètres.',
    practice: 'S’entraîner à ces étapes', series: 'Série', model: 'Modèle', oneui: 'Version de One UI', save: 'Enregistrer mon téléphone', clear: 'Instructions générales',
    note: 'Ce choix est facultatif. Il est enregistré seulement dans ce navigateur et nous ne devinons jamais votre modèle.',
    dontKnow: 'Je ne sais pas', dontKnowWhich: 'Je ne sais pas lequel', chooseSeries: 'Choisissez d’abord une série', baseVersion: 'version de ces leçons',
    saved: 'Enregistré. Chaque leçon indique maintenant si elle marche sur votre téléphone.', cleared: 'Effacé. Instructions générales affichées.',
    modelUnknown: 'Modèle inconnu', seriesUnknown: (s) => `${s} (modèle inconnu)`, versionUnknown: 'Version de One UI inconnue',
    level: { ok: 'Compatible', diff: 'À vérifier', check: 'À vérifier', no: 'Non compatible' },
    text: { ok: 'Vérifié avec le mode d’emploi officiel', diff: 'Les menus peuvent différer dans cette version de One UI', check: 'Pas encore vérifié sur ce modèle', no: 'Non disponible sur ce modèle', min: (v) => `Nécessite One UI ${v} ou plus récent` },
    on: 'sur', change: 'Modifier',
    words: [['갤럭시 ', 'Galaxy '], ['플립', 'Flip'], ['폴드', 'Fold'], ['노트', 'Note'], ['엑스커버', 'XCover']],
    other: { 's-old': 'Autre série S (S22 ou antérieur, FE)', 'a-old': 'Autre série A', 'm-any': 'Un téléphone de la série M', 'f-any': 'Un téléphone de la série F', 'note-old': 'Autre Note', 'xcover-old': 'Autre XCover', etc: 'Un Galaxy absent de la liste' },
    seriesNames: { s: 'Galaxy série S', a: 'Galaxy série A', flip: 'Galaxy Z Flip', fold: 'Galaxy Z Fold', m: 'Galaxy série M', f: 'Galaxy série F', note: 'Galaxy Note', xcover: 'Galaxy XCover', etc: 'Autre / absent de la liste' },
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
