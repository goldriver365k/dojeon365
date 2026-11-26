// DigiStep365 site footer (Korean site + 19 global languages): brand, share icons, notice, contact, policies.
// One place for the footer text so every page says the same thing in its own language.
export const CONTACT_EMAIL = 'goldriver365@gmail.com';
export const SITE_HOME = 'https://digistep365.com/';
export const TERMS_DATE = '2026-11-26';

/**
 * Per language:
 *   tagline, slogan, share (group label), kakao/facebook/whatsapp/copy/qr/more (icon labels),
 *   copied, kakaoCopied, qrTitle, qrText, close, notice, contact, privacy, terms, languages,
 *   shareText (text sent with the link), terms page (termsDesc, termsItems [[h, p]], effective),
 *   privacy page extras (privacyShareH/privacyShare, privacyContactH/privacyContact)
 */
export const FOOTER = {
  ko: {
    tagline: '도전, 디지털세상', slogan: '누구나 쉽게, 매일 한 걸음씩.',
    share: '이 사이트 공유하기', kakao: '카카오톡', facebook: '페이스북', whatsapp: 'WhatsApp', copy: '주소 복사', qr: 'QR코드', more: '공유하기',
    copied: '홈페이지 주소를 복사했어요. 대화창에 붙여 넣어 보내세요.', kakaoCopied: '주소를 복사했어요. 카카오톡 대화창에 붙여 넣어 보내세요.',
    qrTitle: '휴대폰 카메라로 비춰 보세요', qrText: '휴대폰 카메라를 이 그림에 대면 digistep365.com이 열려요.', close: '닫기',
    notice: '본 사이트는 독립적인 디지털 교육 플랫폼이며 삼성전자의 공식 서비스가 아닙니다. 기종 및 소프트웨어 버전에 따라 사용 방법이 다를 수 있습니다.',
    contact: '문의', privacy: '개인정보처리방침', terms: '이용약관', languages: '언어',
    shareText: 'DigiStep365 — 그림을 보며 한 단계씩 따라 하는 무료 휴대폰 교실',
  },
  en: {
    tagline: 'Take on the digital world', slogan: 'Easy for everyone, one step a day.',
    share: 'Share this site', kakao: 'KakaoTalk', facebook: 'Facebook', whatsapp: 'WhatsApp', copy: 'Copy link', qr: 'QR code', more: 'Share',
    copied: 'Link copied. Paste it into a chat to share.', kakaoCopied: 'Link copied. Paste it into a KakaoTalk chat.',
    qrTitle: 'Scan with your phone camera', qrText: 'Point your phone camera at this code to open digistep365.com.', close: 'Close',
    notice: 'This site is an independent digital education platform and is not an official Samsung Electronics service. Instructions may differ depending on your phone model and software version.',
    contact: 'Contact', privacy: 'Privacy Policy', terms: 'Terms of Use',
    shareText: 'DigiStep365 — free step-by-step phone lessons with pictures',
    termsDesc: 'Terms of use for DigiStep365, a free and independent website that teaches smartphone basics step by step.',
    termsItems: [
      ['About the service', 'DigiStep365 is a free, independent website that teaches how to use smartphones with pictures and practice screens. You do not need an account.'],
      ['Not an official service', 'We are not affiliated with Samsung Electronics or any company whose products appear in the lessons. Galaxy and other names are trademarks of their owners. Menus can differ by model and software version, so check the official manual for important settings.'],
      ['Practice screens', 'Practice screens are pictures that imitate a phone. They are not real apps. Never type real passwords, card numbers or ID numbers.'],
      ['Use at your own judgment', 'We try to keep every lesson accurate, but we cannot promise it is complete or up to date. For money, banking or security, always confirm with the official company or your bank.'],
      ['Content', 'The text, pictures and design belong to DigiStep365. You may share links and print lessons for personal or free teaching use. Commercial copying needs our permission.'],
      ['Changes and contact', 'We may update these terms. Changes are posted on this page with the date.'],
    ],
    effective: 'Effective date', privacyShareH: 'Share buttons',
    privacyShare: 'Share buttons open KakaoTalk, Facebook or WhatsApp only when you tap them. We do not send them any information; those services have their own privacy policies. The QR code and “Copy link” work inside your browser.',
    privacyContactH: 'Contact', privacyContact: 'Questions or requests about your data:',
  },
  es: {
    tagline: 'Atrévete con el mundo digital', slogan: 'Fácil para todos, un paso cada día.',
    share: 'Compartir este sitio', kakao: 'KakaoTalk', facebook: 'Facebook', whatsapp: 'WhatsApp', copy: 'Copiar enlace', qr: 'Código QR', more: 'Compartir',
    copied: 'Enlace copiado. Pégalo en un chat para compartirlo.', kakaoCopied: 'Enlace copiado. Pégalo en un chat de KakaoTalk.',
    qrTitle: 'Escanéalo con la cámara del móvil', qrText: 'Apunta la cámara del móvil a este código para abrir digistep365.com.', close: 'Cerrar',
    notice: 'Este sitio es una plataforma independiente de educación digital y no es un servicio oficial de Samsung Electronics. Los pasos pueden variar según el modelo y la versión de software.',
    contact: 'Contacto', privacy: 'Política de privacidad', terms: 'Condiciones de uso',
    shareText: 'DigiStep365 — clases gratuitas de móvil, paso a paso y con imágenes',
    termsDesc: 'Condiciones de uso de DigiStep365, un sitio gratuito e independiente que enseña a usar el móvil paso a paso.',
    termsItems: [
      ['Sobre el servicio', 'DigiStep365 es un sitio gratuito e independiente que enseña a usar el móvil con imágenes y pantallas de práctica. No necesitas cuenta.'],
      ['No es un servicio oficial', 'No tenemos relación con Samsung Electronics ni con otras empresas cuyos productos aparecen en las lecciones. Galaxy y otros nombres son marcas de sus dueños. Los menús pueden cambiar según el modelo y la versión, así que consulta el manual oficial para ajustes importantes.'],
      ['Pantallas de práctica', 'Las pantallas de práctica son imágenes que imitan un móvil; no son aplicaciones reales. Nunca escribas contraseñas, números de tarjeta ni de documento reales.'],
      ['Uso bajo tu criterio', 'Intentamos que cada lección sea correcta, pero no podemos garantizar que esté completa o actualizada. Para dinero, banca o seguridad, confirma siempre con la empresa oficial o tu banco.'],
      ['Contenido', 'Los textos, imágenes y diseño pertenecen a DigiStep365. Puedes compartir enlaces e imprimir lecciones para uso personal o enseñanza gratuita. La copia comercial necesita nuestro permiso.'],
      ['Cambios y contacto', 'Podemos actualizar estas condiciones. Los cambios se publican en esta página con la fecha.'],
    ],
    effective: 'Fecha de entrada en vigor', privacyShareH: 'Botones para compartir',
    privacyShare: 'Los botones para compartir abren KakaoTalk, Facebook o WhatsApp solo cuando los tocas. No les enviamos ningún dato; esos servicios tienen sus propias políticas de privacidad. El código QR y «Copiar enlace» funcionan dentro de tu navegador.',
    privacyContactH: 'Contacto', privacyContact: 'Preguntas o solicitudes sobre tus datos:',
  },
  pt: {
    tagline: 'Encare o mundo digital', slogan: 'Fácil para todos, um passo por dia.',
    share: 'Compartilhar este site', kakao: 'KakaoTalk', facebook: 'Facebook', whatsapp: 'WhatsApp', copy: 'Copiar link', qr: 'Código QR', more: 'Compartilhar',
    copied: 'Link copiado. Cole em uma conversa para compartilhar.', kakaoCopied: 'Link copiado. Cole em uma conversa do KakaoTalk.',
    qrTitle: 'Aponte a câmera do celular', qrText: 'Aponte a câmera do celular para este código para abrir digistep365.com.', close: 'Fechar',
    notice: 'Este site é uma plataforma independente de educação digital e não é um serviço oficial da Samsung Electronics. As instruções podem variar conforme o modelo e a versão do software.',
    contact: 'Contato', privacy: 'Política de privacidade', terms: 'Termos de uso',
    shareText: 'DigiStep365 — aulas gratuitas de celular, passo a passo e com imagens',
    termsDesc: 'Termos de uso do DigiStep365, um site gratuito e independente que ensina a usar o celular passo a passo.',
    termsItems: [
      ['Sobre o serviço', 'O DigiStep365 é um site gratuito e independente que ensina a usar o celular com imagens e telas de prática. Não é preciso criar conta.'],
      ['Não é um serviço oficial', 'Não temos ligação com a Samsung Electronics nem com outras empresas cujos produtos aparecem nas aulas. Galaxy e outros nomes são marcas de seus donos. Os menus podem mudar conforme o modelo e a versão; consulte o manual oficial para configurações importantes.'],
      ['Telas de prática', 'As telas de prática são imagens que imitam um celular; não são aplicativos reais. Nunca digite senhas, números de cartão ou de documentos reais.'],
      ['Uso por sua conta', 'Tentamos manter cada aula correta, mas não podemos garantir que esteja completa ou atualizada. Para dinheiro, banco ou segurança, confirme sempre com a empresa oficial ou seu banco.'],
      ['Conteúdo', 'Textos, imagens e design pertencem ao DigiStep365. Você pode compartilhar links e imprimir aulas para uso pessoal ou ensino gratuito. Cópia comercial precisa de nossa autorização.'],
      ['Alterações e contato', 'Podemos atualizar estes termos. As alterações são publicadas nesta página com a data.'],
    ],
    effective: 'Data de vigência', privacyShareH: 'Botões de compartilhar',
    privacyShare: 'Os botões de compartilhar abrem o KakaoTalk, o Facebook ou o WhatsApp somente quando você toca neles. Não enviamos nenhum dado a esses serviços, que têm suas próprias políticas de privacidade. O código QR e “Copiar link” funcionam no seu navegador.',
    privacyContactH: 'Contato', privacyContact: 'Dúvidas ou pedidos sobre seus dados:',
  },
  de: {
    tagline: 'Mutig in die digitale Welt', slogan: 'Einfach für alle – jeden Tag ein Schritt.',
    share: 'Diese Seite teilen', kakao: 'KakaoTalk', facebook: 'Facebook', whatsapp: 'WhatsApp', copy: 'Link kopieren', qr: 'QR-Code', more: 'Teilen',
    copied: 'Link kopiert. Fügen Sie ihn in einen Chat ein.', kakaoCopied: 'Link kopiert. Fügen Sie ihn in einen KakaoTalk-Chat ein.',
    qrTitle: 'Mit der Handykamera scannen', qrText: 'Halten Sie die Handykamera auf diesen Code, um digistep365.com zu öffnen.', close: 'Schließen',
    notice: 'Diese Website ist eine unabhängige Plattform für digitale Bildung und kein offizieller Dienst von Samsung Electronics. Die Bedienung kann je nach Modell und Softwareversion abweichen.',
    contact: 'Kontakt', privacy: 'Datenschutzerklärung', terms: 'Nutzungsbedingungen',
    shareText: 'DigiStep365 – kostenlose Handy-Kurse Schritt für Schritt mit Bildern',
    termsDesc: 'Nutzungsbedingungen von DigiStep365, einer kostenlosen, unabhängigen Website, die die Handy-Bedienung Schritt für Schritt erklärt.',
    termsItems: [
      ['Über das Angebot', 'DigiStep365 ist eine kostenlose, unabhängige Website, die mit Bildern und Übungsbildschirmen die Handy-Bedienung erklärt. Ein Konto ist nicht nötig.'],
      ['Kein offizieller Dienst', 'Wir stehen in keiner Verbindung zu Samsung Electronics oder anderen Firmen, deren Produkte in den Lektionen vorkommen. Galaxy und andere Namen sind Marken ihrer Inhaber. Menüs können je nach Modell und Version abweichen; prüfen Sie wichtige Einstellungen im offiziellen Handbuch.'],
      ['Übungsbildschirme', 'Übungsbildschirme sind Bilder, die ein Handy nachahmen, keine echten Apps. Geben Sie niemals echte Passwörter, Kartennummern oder Ausweisnummern ein.'],
      ['Nutzung nach eigenem Ermessen', 'Wir bemühen uns um richtige Lektionen, können aber nicht garantieren, dass sie vollständig oder aktuell sind. Bei Geld, Bankgeschäften oder Sicherheit fragen Sie immer beim offiziellen Anbieter oder Ihrer Bank nach.'],
      ['Inhalte', 'Texte, Bilder und Gestaltung gehören DigiStep365. Sie dürfen Links teilen und Lektionen für den privaten Gebrauch oder kostenlosen Unterricht ausdrucken. Gewerbliches Kopieren bedarf unserer Erlaubnis.'],
      ['Änderungen und Kontakt', 'Wir können diese Bedingungen ändern. Änderungen werden mit Datum auf dieser Seite veröffentlicht.'],
    ],
    effective: 'Gültig ab', privacyShareH: 'Teilen-Schaltflächen',
    privacyShare: 'Die Teilen-Schaltflächen öffnen KakaoTalk, Facebook oder WhatsApp nur, wenn Sie darauf tippen. Wir übermitteln diesen Diensten keine Daten; dort gelten deren eigene Datenschutzerklärungen. QR-Code und „Link kopieren“ funktionieren in Ihrem Browser.',
    privacyContactH: 'Kontakt', privacyContact: 'Fragen oder Anliegen zu Ihren Daten:',
  },
  fr: {
    tagline: 'Osez le monde numérique', slogan: 'Facile pour tous, un pas chaque jour.',
    share: 'Partager ce site', kakao: 'KakaoTalk', facebook: 'Facebook', whatsapp: 'WhatsApp', copy: 'Copier le lien', qr: 'Code QR', more: 'Partager',
    copied: 'Lien copié. Collez-le dans une conversation pour le partager.', kakaoCopied: 'Lien copié. Collez-le dans une conversation KakaoTalk.',
    qrTitle: 'Scannez avec l’appareil photo', qrText: 'Dirigez l’appareil photo de votre téléphone vers ce code pour ouvrir digistep365.com.', close: 'Fermer',
    notice: 'Ce site est une plateforme indépendante d’éducation numérique et n’est pas un service officiel de Samsung Electronics. La marche à suivre peut varier selon le modèle et la version du logiciel.',
    contact: 'Contact', privacy: 'Politique de confidentialité', terms: 'Conditions d’utilisation',
    shareText: 'DigiStep365 — cours de téléphone gratuits, pas à pas et en images',
    termsDesc: 'Conditions d’utilisation de DigiStep365, un site gratuit et indépendant qui apprend à utiliser son téléphone pas à pas.',
    termsItems: [
      ['À propos du service', 'DigiStep365 est un site gratuit et indépendant qui apprend à utiliser son téléphone avec des images et des écrans d’entraînement. Aucun compte n’est nécessaire.'],
      ['Pas un service officiel', 'Nous n’avons aucun lien avec Samsung Electronics ni avec les autres entreprises dont les produits apparaissent dans les leçons. Galaxy et les autres noms sont des marques de leurs propriétaires. Les menus peuvent varier selon le modèle et la version ; vérifiez les réglages importants dans le manuel officiel.'],
      ['Écrans d’entraînement', 'Les écrans d’entraînement sont des images qui imitent un téléphone, pas de vraies applications. Ne saisissez jamais de vrais mots de passe, numéros de carte ou de pièce d’identité.'],
      ['Utilisation sous votre responsabilité', 'Nous veillons à l’exactitude des leçons, sans pouvoir garantir qu’elles sont complètes ou à jour. Pour l’argent, la banque ou la sécurité, vérifiez toujours auprès de l’entreprise officielle ou de votre banque.'],
      ['Contenu', 'Les textes, images et la mise en page appartiennent à DigiStep365. Vous pouvez partager les liens et imprimer les leçons pour un usage personnel ou un enseignement gratuit. Toute copie commerciale nécessite notre accord.'],
      ['Modifications et contact', 'Nous pouvons modifier ces conditions. Les changements sont publiés sur cette page avec leur date.'],
    ],
    effective: 'Date d’entrée en vigueur', privacyShareH: 'Boutons de partage',
    privacyShare: 'Les boutons de partage ouvrent KakaoTalk, Facebook ou WhatsApp uniquement quand vous les touchez. Nous ne leur transmettons aucune donnée ; ces services ont leurs propres politiques de confidentialité. Le code QR et « Copier le lien » fonctionnent dans votre navigateur.',
    privacyContactH: 'Contact', privacyContact: 'Questions ou demandes concernant vos données :',
  },
  it: {
    tagline: 'Affronta il mondo digitale', slogan: 'Facile per tutti, un passo al giorno.',
    share: 'Condividi questo sito', kakao: 'KakaoTalk', facebook: 'Facebook', whatsapp: 'WhatsApp', copy: 'Copia link', qr: 'Codice QR', more: 'Condividi',
    copied: 'Link copiato. Incollalo in una chat per condividerlo.', kakaoCopied: 'Link copiato. Incollalo in una chat di KakaoTalk.',
    qrTitle: 'Inquadra con la fotocamera', qrText: 'Inquadra questo codice con la fotocamera del telefono per aprire digistep365.com.', close: 'Chiudi',
    notice: 'Questo sito è una piattaforma indipendente di educazione digitale e non è un servizio ufficiale di Samsung Electronics. Le istruzioni possono variare in base al modello e alla versione del software.',
    contact: 'Contatti', privacy: 'Informativa sulla privacy', terms: 'Condizioni d’uso',
    shareText: 'DigiStep365 — lezioni gratuite sul telefono, passo dopo passo e con immagini',
    termsDesc: 'Condizioni d’uso di DigiStep365, un sito gratuito e indipendente che insegna a usare il telefono passo dopo passo.',
    termsItems: [
      ['Il servizio', 'DigiStep365 è un sito gratuito e indipendente che insegna a usare il telefono con immagini e schermate di prova. Non serve un account.'],
      ['Non è un servizio ufficiale', 'Non abbiamo legami con Samsung Electronics né con altre aziende i cui prodotti compaiono nelle lezioni. Galaxy e gli altri nomi sono marchi dei rispettivi titolari. I menu possono cambiare in base a modello e versione: per le impostazioni importanti consulta il manuale ufficiale.'],
      ['Schermate di prova', 'Le schermate di prova sono immagini che imitano un telefono, non app vere. Non inserire mai password, numeri di carta o di documenti reali.'],
      ['Uso secondo il tuo giudizio', 'Cerchiamo di mantenere corrette le lezioni, ma non possiamo garantire che siano complete o aggiornate. Per denaro, banca o sicurezza verifica sempre con l’azienda ufficiale o la tua banca.'],
      ['Contenuti', 'Testi, immagini e grafica appartengono a DigiStep365. Puoi condividere i link e stampare le lezioni per uso personale o insegnamento gratuito. La copia a scopo commerciale richiede il nostro permesso.'],
      ['Modifiche e contatti', 'Possiamo aggiornare queste condizioni. Le modifiche sono pubblicate in questa pagina con la data.'],
    ],
    effective: 'In vigore dal', privacyShareH: 'Pulsanti di condivisione',
    privacyShare: 'I pulsanti di condivisione aprono KakaoTalk, Facebook o WhatsApp solo quando li tocchi. Non inviamo loro alcun dato; questi servizi hanno le proprie informative sulla privacy. Il codice QR e «Copia link» funzionano nel tuo browser.',
    privacyContactH: 'Contatti', privacyContact: 'Domande o richieste sui tuoi dati:',
  },
  id: {
    tagline: 'Taklukkan dunia digital', slogan: 'Mudah untuk semua, selangkah setiap hari.',
    share: 'Bagikan situs ini', kakao: 'KakaoTalk', facebook: 'Facebook', whatsapp: 'WhatsApp', copy: 'Salin tautan', qr: 'Kode QR', more: 'Bagikan',
    copied: 'Tautan disalin. Tempelkan di obrolan untuk membagikan.', kakaoCopied: 'Tautan disalin. Tempelkan di obrolan KakaoTalk.',
    qrTitle: 'Pindai dengan kamera ponsel', qrText: 'Arahkan kamera ponsel ke kode ini untuk membuka digistep365.com.', close: 'Tutup',
    notice: 'Situs ini adalah platform pendidikan digital independen dan bukan layanan resmi Samsung Electronics. Cara penggunaan bisa berbeda tergantung model dan versi perangkat lunak.',
    contact: 'Kontak', privacy: 'Kebijakan Privasi', terms: 'Ketentuan Penggunaan',
    shareText: 'DigiStep365 — pelajaran ponsel gratis, langkah demi langkah dengan gambar',
    termsDesc: 'Ketentuan penggunaan DigiStep365, situs gratis dan independen yang mengajarkan cara memakai ponsel langkah demi langkah.',
    termsItems: [
      ['Tentang layanan', 'DigiStep365 adalah situs gratis dan independen yang mengajarkan cara memakai ponsel dengan gambar dan layar latihan. Tidak perlu membuat akun.'],
      ['Bukan layanan resmi', 'Kami tidak berafiliasi dengan Samsung Electronics atau perusahaan lain yang produknya muncul dalam pelajaran. Galaxy dan nama lain adalah merek dagang pemiliknya. Menu bisa berbeda menurut model dan versi; periksa manual resmi untuk pengaturan penting.'],
      ['Layar latihan', 'Layar latihan adalah gambar yang meniru ponsel, bukan aplikasi sungguhan. Jangan pernah mengetik kata sandi, nomor kartu, atau nomor identitas asli.'],
      ['Gunakan dengan bijak', 'Kami berusaha agar setiap pelajaran benar, tetapi tidak bisa menjamin selalu lengkap atau terbaru. Untuk urusan uang, bank, atau keamanan, selalu pastikan ke perusahaan resmi atau bank Anda.'],
      ['Konten', 'Teks, gambar, dan desain adalah milik DigiStep365. Anda boleh membagikan tautan dan mencetak pelajaran untuk pemakaian pribadi atau pengajaran gratis. Penyalinan untuk tujuan komersial memerlukan izin kami.'],
      ['Perubahan dan kontak', 'Kami dapat memperbarui ketentuan ini. Perubahan diumumkan di halaman ini beserta tanggalnya.'],
    ],
    effective: 'Tanggal berlaku', privacyShareH: 'Tombol berbagi',
    privacyShare: 'Tombol berbagi membuka KakaoTalk, Facebook, atau WhatsApp hanya ketika Anda menekannya. Kami tidak mengirim data apa pun ke layanan tersebut; masing-masing punya kebijakan privasi sendiri. Kode QR dan “Salin tautan” berjalan di browser Anda.',
    privacyContactH: 'Kontak', privacyContact: 'Pertanyaan atau permintaan tentang data Anda:',
  },
  ms: {
    tagline: 'Sahut cabaran dunia digital', slogan: 'Mudah untuk semua, selangkah setiap hari.',
    share: 'Kongsi laman ini', kakao: 'KakaoTalk', facebook: 'Facebook', whatsapp: 'WhatsApp', copy: 'Salin pautan', qr: 'Kod QR', more: 'Kongsi',
    copied: 'Pautan disalin. Tampal dalam sembang untuk berkongsi.', kakaoCopied: 'Pautan disalin. Tampal dalam sembang KakaoTalk.',
    qrTitle: 'Imbas dengan kamera telefon', qrText: 'Halakan kamera telefon ke kod ini untuk membuka digistep365.com.', close: 'Tutup',
    notice: 'Laman ini ialah platform pendidikan digital bebas dan bukan perkhidmatan rasmi Samsung Electronics. Cara penggunaan mungkin berbeza mengikut model dan versi perisian.',
    contact: 'Hubungi', privacy: 'Dasar Privasi', terms: 'Terma Penggunaan',
    shareText: 'DigiStep365 — pelajaran telefon percuma, langkah demi langkah dengan gambar',
    termsDesc: 'Terma penggunaan DigiStep365, laman percuma dan bebas yang mengajar cara menggunakan telefon langkah demi langkah.',
    termsItems: [
      ['Tentang perkhidmatan', 'DigiStep365 ialah laman percuma dan bebas yang mengajar cara menggunakan telefon dengan gambar dan skrin latihan. Akaun tidak diperlukan.'],
      ['Bukan perkhidmatan rasmi', 'Kami tidak bergabung dengan Samsung Electronics atau syarikat lain yang produknya muncul dalam pelajaran. Galaxy dan nama lain ialah tanda dagangan pemiliknya. Menu mungkin berbeza mengikut model dan versi; semak manual rasmi untuk tetapan penting.'],
      ['Skrin latihan', 'Skrin latihan ialah gambar yang meniru telefon, bukan aplikasi sebenar. Jangan sekali-kali menaip kata laluan, nombor kad atau nombor pengenalan sebenar.'],
      ['Gunakan dengan bijak', 'Kami berusaha memastikan setiap pelajaran tepat, tetapi tidak dapat menjamin ia lengkap atau terkini. Untuk wang, perbankan atau keselamatan, sentiasa sahkan dengan syarikat rasmi atau bank anda.'],
      ['Kandungan', 'Teks, gambar dan reka bentuk adalah milik DigiStep365. Anda boleh berkongsi pautan dan mencetak pelajaran untuk kegunaan peribadi atau pengajaran percuma. Penyalinan komersial memerlukan kebenaran kami.'],
      ['Perubahan dan hubungi', 'Kami boleh mengemas kini terma ini. Perubahan diumumkan di halaman ini bersama tarikhnya.'],
    ],
    effective: 'Tarikh berkuat kuasa', privacyShareH: 'Butang kongsi',
    privacyShare: 'Butang kongsi membuka KakaoTalk, Facebook atau WhatsApp hanya apabila anda menekannya. Kami tidak menghantar sebarang data kepada perkhidmatan tersebut; setiap satu mempunyai dasar privasi sendiri. Kod QR dan “Salin pautan” berfungsi dalam pelayar anda.',
    privacyContactH: 'Hubungi', privacyContact: 'Soalan atau permintaan tentang data anda:',
  },
  vi: {
    tagline: 'Chinh phục thế giới số', slogan: 'Dễ cho mọi người, mỗi ngày một bước.',
    share: 'Chia sẻ trang này', kakao: 'KakaoTalk', facebook: 'Facebook', whatsapp: 'WhatsApp', copy: 'Sao chép liên kết', qr: 'Mã QR', more: 'Chia sẻ',
    copied: 'Đã sao chép liên kết. Hãy dán vào cuộc trò chuyện để chia sẻ.', kakaoCopied: 'Đã sao chép liên kết. Hãy dán vào cuộc trò chuyện KakaoTalk.',
    qrTitle: 'Quét bằng camera điện thoại', qrText: 'Đưa camera điện thoại vào mã này để mở digistep365.com.', close: 'Đóng',
    notice: 'Trang này là nền tảng giáo dục số độc lập, không phải dịch vụ chính thức của Samsung Electronics. Cách sử dụng có thể khác tùy theo mẫu máy và phiên bản phần mềm.',
    contact: 'Liên hệ', privacy: 'Chính sách quyền riêng tư', terms: 'Điều khoản sử dụng',
    shareText: 'DigiStep365 — bài học điện thoại miễn phí, từng bước có hình ảnh',
    termsDesc: 'Điều khoản sử dụng của DigiStep365, trang web miễn phí và độc lập dạy cách dùng điện thoại từng bước.',
    termsItems: [
      ['Về dịch vụ', 'DigiStep365 là trang web miễn phí và độc lập dạy cách dùng điện thoại bằng hình ảnh và màn hình luyện tập. Không cần tạo tài khoản.'],
      ['Không phải dịch vụ chính thức', 'Chúng tôi không liên kết với Samsung Electronics hay bất kỳ công ty nào có sản phẩm xuất hiện trong bài học. Galaxy và các tên khác là nhãn hiệu của chủ sở hữu. Menu có thể khác theo mẫu máy và phiên bản; hãy xem sách hướng dẫn chính thức cho các cài đặt quan trọng.'],
      ['Màn hình luyện tập', 'Màn hình luyện tập là hình ảnh mô phỏng điện thoại, không phải ứng dụng thật. Đừng bao giờ nhập mật khẩu, số thẻ hay số giấy tờ thật.'],
      ['Tự cân nhắc khi sử dụng', 'Chúng tôi cố gắng giữ bài học chính xác nhưng không thể bảo đảm luôn đầy đủ hoặc mới nhất. Với tiền bạc, ngân hàng hay bảo mật, hãy luôn xác nhận với công ty chính thức hoặc ngân hàng của bạn.'],
      ['Nội dung', 'Văn bản, hình ảnh và thiết kế thuộc về DigiStep365. Bạn có thể chia sẻ liên kết và in bài học để dùng cá nhân hoặc dạy học miễn phí. Sao chép vì mục đích thương mại cần có sự cho phép của chúng tôi.'],
      ['Thay đổi và liên hệ', 'Chúng tôi có thể cập nhật điều khoản này. Thay đổi được đăng trên trang này kèm ngày.'],
    ],
    effective: 'Ngày hiệu lực', privacyShareH: 'Nút chia sẻ',
    privacyShare: 'Nút chia sẻ chỉ mở KakaoTalk, Facebook hoặc WhatsApp khi bạn chạm vào. Chúng tôi không gửi dữ liệu nào cho các dịch vụ đó; mỗi dịch vụ có chính sách quyền riêng tư riêng. Mã QR và “Sao chép liên kết” hoạt động trong trình duyệt của bạn.',
    privacyContactH: 'Liên hệ', privacyContact: 'Câu hỏi hoặc yêu cầu về dữ liệu của bạn:',
  },
  tr: {
    tagline: 'Dijital dünyaya meydan oku', slogan: 'Herkes için kolay, her gün bir adım.',
    share: 'Bu siteyi paylaş', kakao: 'KakaoTalk', facebook: 'Facebook', whatsapp: 'WhatsApp', copy: 'Bağlantıyı kopyala', qr: 'QR kod', more: 'Paylaş',
    copied: 'Bağlantı kopyalandı. Paylaşmak için bir sohbete yapıştırın.', kakaoCopied: 'Bağlantı kopyalandı. Bir KakaoTalk sohbetine yapıştırın.',
    qrTitle: 'Telefon kamerasıyla tarayın', qrText: 'digistep365.com’u açmak için telefon kameranızı bu koda tutun.', close: 'Kapat',
    notice: 'Bu site bağımsız bir dijital eğitim platformudur ve Samsung Electronics’in resmi hizmeti değildir. Kullanım şekli telefon modeline ve yazılım sürümüne göre değişebilir.',
    contact: 'İletişim', privacy: 'Gizlilik Politikası', terms: 'Kullanım Koşulları',
    shareText: 'DigiStep365 — resimli, adım adım ücretsiz telefon dersleri',
    termsDesc: 'Telefon kullanımını adım adım öğreten ücretsiz ve bağımsız site DigiStep365’in kullanım koşulları.',
    termsItems: [
      ['Hizmet hakkında', 'DigiStep365, telefon kullanımını resimler ve alıştırma ekranlarıyla öğreten ücretsiz ve bağımsız bir sitedir. Hesap açmanız gerekmez.'],
      ['Resmi hizmet değildir', 'Samsung Electronics veya derslerde ürünleri geçen başka şirketlerle bağlantımız yoktur. Galaxy ve diğer adlar sahiplerinin markalarıdır. Menüler modele ve sürüme göre değişebilir; önemli ayarlar için resmi kılavuza bakın.'],
      ['Alıştırma ekranları', 'Alıştırma ekranları telefonu taklit eden resimlerdir, gerçek uygulama değildir. Asla gerçek şifre, kart numarası veya kimlik numarası yazmayın.'],
      ['Kendi takdirinizle kullanın', 'Derslerin doğru olması için çalışıyoruz ancak her zaman eksiksiz veya güncel olduklarını garanti edemeyiz. Para, bankacılık veya güvenlik konularında her zaman resmi şirkete ya da bankanıza danışın.'],
      ['İçerik', 'Metinler, resimler ve tasarım DigiStep365’e aittir. Bağlantıları paylaşabilir, dersleri kişisel kullanım veya ücretsiz eğitim için yazdırabilirsiniz. Ticari kopyalama iznimize tabidir.'],
      ['Değişiklikler ve iletişim', 'Bu koşulları güncelleyebiliriz. Değişiklikler tarihiyle birlikte bu sayfada yayımlanır.'],
    ],
    effective: 'Yürürlük tarihi', privacyShareH: 'Paylaş düğmeleri',
    privacyShare: 'Paylaş düğmeleri KakaoTalk, Facebook veya WhatsApp’ı yalnızca dokunduğunuzda açar. Bu hizmetlere hiçbir veri göndermeyiz; her birinin kendi gizlilik politikası vardır. QR kod ve “Bağlantıyı kopyala” tarayıcınızda çalışır.',
    privacyContactH: 'İletişim', privacyContact: 'Verilerinizle ilgili soru ve talepler:',
  },
  fil: {
    tagline: 'Harapin ang mundong digital', slogan: 'Madali para sa lahat, isang hakbang bawat araw.',
    share: 'Ibahagi ang site na ito', kakao: 'KakaoTalk', facebook: 'Facebook', whatsapp: 'WhatsApp', copy: 'Kopyahin ang link', qr: 'QR code', more: 'Ibahagi',
    copied: 'Nakopya ang link. I-paste sa chat para maibahagi.', kakaoCopied: 'Nakopya ang link. I-paste sa KakaoTalk chat.',
    qrTitle: 'I-scan gamit ang camera ng telepono', qrText: 'Itapat ang camera ng telepono sa code na ito para buksan ang digistep365.com.', close: 'Isara',
    notice: 'Ang site na ito ay isang malayang plataporma ng digital na edukasyon at hindi opisyal na serbisyo ng Samsung Electronics. Maaaring mag-iba ang paraan ng paggamit depende sa modelo at bersyon ng software.',
    contact: 'Makipag-ugnayan', privacy: 'Patakaran sa Privacy', terms: 'Mga Tuntunin ng Paggamit',
    shareText: 'DigiStep365 — libreng aralin sa telepono, hakbang-hakbang na may larawan',
    termsDesc: 'Mga tuntunin ng paggamit ng DigiStep365, isang libre at malayang site na nagtuturo ng paggamit ng telepono nang hakbang-hakbang.',
    termsItems: [
      ['Tungkol sa serbisyo', 'Ang DigiStep365 ay libre at malayang site na nagtuturo ng paggamit ng telepono gamit ang mga larawan at practice screen. Hindi kailangan ng account.'],
      ['Hindi opisyal na serbisyo', 'Wala kaming kaugnayan sa Samsung Electronics o sa ibang kumpanyang lumalabas ang produkto sa mga aralin. Ang Galaxy at iba pang pangalan ay trademark ng kanilang may-ari. Maaaring mag-iba ang menu ayon sa modelo at bersyon; tingnan ang opisyal na manual para sa mahahalagang setting.'],
      ['Mga practice screen', 'Ang mga practice screen ay larawang ginagaya ang telepono, hindi totoong app. Huwag kailanman mag-type ng totoong password, numero ng card o ID.'],
      ['Gamitin nang may pag-iingat', 'Sinisikap naming tama ang bawat aralin, pero hindi namin magagarantiya na laging kumpleto o bago. Para sa pera, bangko o seguridad, laging kumpirmahin sa opisyal na kumpanya o sa iyong bangko.'],
      ['Nilalaman', 'Pag-aari ng DigiStep365 ang mga teksto, larawan at disenyo. Maaari mong ibahagi ang mga link at i-print ang mga aralin para sa personal o libreng pagtuturo. Kailangan ng pahintulot namin ang pagkopya para sa negosyo.'],
      ['Mga pagbabago at pakikipag-ugnayan', 'Maaari naming baguhin ang mga tuntuning ito. Ipinapaskil ang mga pagbabago sa pahinang ito kasama ang petsa.'],
    ],
    effective: 'Petsa ng bisa', privacyShareH: 'Mga button sa pagbabahagi',
    privacyShare: 'Binubuksan lang ng mga button sa pagbabahagi ang KakaoTalk, Facebook o WhatsApp kapag pinindot mo. Wala kaming ipinapadalang datos sa mga serbisyong iyon; may sarili silang patakaran sa privacy. Gumagana sa iyong browser ang QR code at “Kopyahin ang link”.',
    privacyContactH: 'Makipag-ugnayan', privacyContact: 'Mga tanong o kahilingan tungkol sa iyong datos:',
  },
  ru: {
    tagline: 'Смело в цифровой мир', slogan: 'Просто для всех — каждый день по шагу.',
    share: 'Поделиться сайтом', kakao: 'KakaoTalk', facebook: 'Facebook', whatsapp: 'WhatsApp', copy: 'Копировать ссылку', qr: 'QR-код', more: 'Поделиться',
    copied: 'Ссылка скопирована. Вставьте её в чат, чтобы поделиться.', kakaoCopied: 'Ссылка скопирована. Вставьте её в чат KakaoTalk.',
    qrTitle: 'Наведите камеру телефона', qrText: 'Наведите камеру телефона на этот код, чтобы открыть digistep365.com.', close: 'Закрыть',
    notice: 'Этот сайт — независимая платформа цифрового обучения и не является официальным сервисом Samsung Electronics. Порядок действий может отличаться в зависимости от модели и версии ПО.',
    contact: 'Связаться', privacy: 'Политика конфиденциальности', terms: 'Условия использования',
    shareText: 'DigiStep365 — бесплатные уроки по телефону, шаг за шагом с картинками',
    termsDesc: 'Условия использования DigiStep365 — бесплатного независимого сайта, который шаг за шагом учит пользоваться телефоном.',
    termsItems: [
      ['О сервисе', 'DigiStep365 — бесплатный независимый сайт, который учит пользоваться телефоном с помощью картинок и учебных экранов. Регистрация не нужна.'],
      ['Неофициальный сервис', 'Мы не связаны с Samsung Electronics и другими компаниями, чьи продукты упоминаются в уроках. Galaxy и другие названия — товарные знаки их владельцев. Меню могут отличаться в зависимости от модели и версии; важные настройки сверяйте с официальным руководством.'],
      ['Учебные экраны', 'Учебные экраны — это картинки, изображающие телефон, а не настоящие приложения. Никогда не вводите настоящие пароли, номера карт или документов.'],
      ['Используйте на своё усмотрение', 'Мы стараемся, чтобы уроки были точными, но не можем гарантировать их полноту и актуальность. В вопросах денег, банков и безопасности всегда уточняйте у официальной компании или в своём банке.'],
      ['Материалы', 'Тексты, изображения и оформление принадлежат DigiStep365. Можно делиться ссылками и печатать уроки для личного использования или бесплатного обучения. Коммерческое копирование — только с нашего разрешения.'],
      ['Изменения и связь', 'Мы можем обновлять эти условия. Изменения публикуются на этой странице с указанием даты.'],
    ],
    effective: 'Дата вступления в силу', privacyShareH: 'Кнопки «Поделиться»',
    privacyShare: 'Кнопки «Поделиться» открывают KakaoTalk, Facebook или WhatsApp только после нажатия. Мы не передаём этим сервисам никаких данных; у них свои политики конфиденциальности. QR-код и «Копировать ссылку» работают в вашем браузере.',
    privacyContactH: 'Связаться', privacyContact: 'Вопросы и запросы о ваших данных:',
  },
  ja: {
    tagline: '挑戦、デジタルの世界へ', slogan: 'だれでも簡単に、毎日一歩ずつ。',
    share: 'このサイトを共有', kakao: 'カカオトーク', facebook: 'Facebook', whatsapp: 'WhatsApp', copy: 'リンクをコピー', qr: 'QRコード', more: '共有',
    copied: 'リンクをコピーしました。トーク画面に貼り付けて送ってください。', kakaoCopied: 'リンクをコピーしました。カカオトークのトーク画面に貼り付けてください。',
    qrTitle: 'スマホのカメラで読み取ってください', qrText: 'スマホのカメラをこのコードに向けると digistep365.com が開きます。', close: '閉じる',
    notice: '本サイトは独立したデジタル教育プラットフォームであり、サムスン電子の公式サービスではありません。機種やソフトウェアのバージョンによって操作方法が異なる場合があります。',
    contact: 'お問い合わせ', privacy: 'プライバシーポリシー', terms: '利用規約',
    shareText: 'DigiStep365 — 絵を見ながら一歩ずつ学べる無料スマホ教室',
    termsDesc: 'スマホの使い方を一歩ずつ学べる無料の独立サイト、DigiStep365 の利用規約です。',
    termsItems: [
      ['サービスについて', 'DigiStep365 は、絵と練習画面でスマホの使い方を学べる無料の独立サイトです。会員登録は不要です。'],
      ['公式サービスではありません', 'サムスン電子や、レッスンに登場する製品の企業とは関係ありません。Galaxy などの名称は各社の商標です。機種やバージョンによってメニューが異なるため、大切な設定は公式マニュアルでご確認ください。'],
      ['練習画面', '練習画面はスマホを模した絵で、本物のアプリではありません。本物のパスワード、カード番号、身分証番号は絶対に入力しないでください。'],
      ['ご自身の判断で', '内容の正確さに努めていますが、完全さや最新性を保証することはできません。お金、銀行、セキュリティに関することは、必ず公式の会社や銀行にご確認ください。'],
      ['コンテンツ', '文章・絵・デザインの権利は DigiStep365 にあります。リンクの共有や、個人利用・無料の教室での印刷は自由です。商用での複製には許可が必要です。'],
      ['変更とお問い合わせ', '本規約は更新することがあります。変更はこのページに日付とともに掲載します。'],
    ],
    effective: '施行日', privacyShareH: '共有ボタン',
    privacyShare: '共有ボタンは、押したときにだけカカオトーク・Facebook・WhatsApp を開きます。これらのサービスに当サイトから情報を送ることはありません（各サービスのプライバシーポリシーが適用されます）。QRコードと「リンクをコピー」はブラウザ内で動作します。',
    privacyContactH: 'お問い合わせ', privacyContact: 'データに関するご質問・ご要望：',
  },
  'zh-Hans': {
    tagline: '挑战，数字世界', slogan: '人人都能轻松学，每天进步一小步。',
    share: '分享本站', kakao: 'KakaoTalk', facebook: 'Facebook', whatsapp: 'WhatsApp', copy: '复制链接', qr: '二维码', more: '分享',
    copied: '链接已复制，粘贴到聊天中即可分享。', kakaoCopied: '链接已复制，请粘贴到 KakaoTalk 聊天中。',
    qrTitle: '用手机相机扫一扫', qrText: '用手机相机对准这个二维码，即可打开 digistep365.com。', close: '关闭',
    notice: '本站是独立的数字教育平台，并非三星电子的官方服务。具体操作可能因机型和软件版本而有所不同。',
    contact: '联系我们', privacy: '隐私政策', terms: '使用条款',
    shareText: 'DigiStep365 — 看图一步步学，免费手机课堂',
    termsDesc: 'DigiStep365 使用条款。DigiStep365 是一个免费、独立的网站，一步步教您使用手机。',
    termsItems: [
      ['关于本服务', 'DigiStep365 是免费、独立的网站，通过图片和练习画面教您使用手机。无需注册账号。'],
      ['非官方服务', '本站与三星电子及课程中出现产品的其他公司均无关联。Galaxy 等名称为其所有者的商标。菜单可能因机型和版本而异，重要设置请以官方说明书为准。'],
      ['练习画面', '练习画面是模仿手机的图片，并不是真正的应用。请勿输入真实的密码、银行卡号或证件号码。'],
      ['请自行判断', '我们尽力保证课程准确，但无法保证内容完整或最新。涉及钱款、银行或安全的事项，请务必向官方公司或您的银行确认。'],
      ['内容', '文字、图片和设计归 DigiStep365 所有。您可以分享链接，也可以为个人使用或免费教学打印课程。商业复制须经我们许可。'],
      ['变更与联系', '我们可能更新本条款，变更将连同日期在本页公布。'],
    ],
    effective: '生效日期', privacyShareH: '分享按钮',
    privacyShare: '分享按钮仅在您点按时才会打开 KakaoTalk、Facebook 或 WhatsApp。本站不会向这些服务发送任何数据，各服务适用其自身的隐私政策。二维码和“复制链接”在您的浏览器内运行。',
    privacyContactH: '联系我们', privacyContact: '关于您数据的问题或请求：',
  },
  'zh-Hant': {
    tagline: '挑戰，數位世界', slogan: '人人都能輕鬆學，每天進步一小步。',
    share: '分享本站', kakao: 'KakaoTalk', facebook: 'Facebook', whatsapp: 'WhatsApp', copy: '複製連結', qr: 'QR 碼', more: '分享',
    copied: '連結已複製，貼到聊天中即可分享。', kakaoCopied: '連結已複製，請貼到 KakaoTalk 聊天中。',
    qrTitle: '用手機相機掃描', qrText: '用手機相機對準這個 QR 碼，即可開啟 digistep365.com。', close: '關閉',
    notice: '本站是獨立的數位教育平台，並非三星電子的官方服務。實際操作可能因機型和軟體版本而有所不同。',
    contact: '聯絡我們', privacy: '隱私權政策', terms: '使用條款',
    shareText: 'DigiStep365 — 看圖一步步學，免費手機教室',
    termsDesc: 'DigiStep365 使用條款。DigiStep365 是免費、獨立的網站，一步步教您使用手機。',
    termsItems: [
      ['關於本服務', 'DigiStep365 是免費、獨立的網站，透過圖片和練習畫面教您使用手機。不需要註冊帳號。'],
      ['非官方服務', '本站與三星電子及課程中出現產品的其他公司皆無關聯。Galaxy 等名稱為其所有者的商標。選單可能因機型和版本而異，重要設定請以官方說明書為準。'],
      ['練習畫面', '練習畫面是模仿手機的圖片，並不是真正的應用程式。請勿輸入真實的密碼、信用卡號或證件號碼。'],
      ['請自行判斷', '我們盡力確保課程正確，但無法保證內容完整或最新。涉及金錢、銀行或安全的事項，請務必向官方公司或您的銀行確認。'],
      ['內容', '文字、圖片和設計歸 DigiStep365 所有。您可以分享連結，也可以為個人使用或免費教學列印課程。商業複製須經我們同意。'],
      ['變更與聯絡', '我們可能更新本條款，變更將連同日期公布於本頁。'],
    ],
    effective: '生效日期', privacyShareH: '分享按鈕',
    privacyShare: '分享按鈕只有在您點按時才會開啟 KakaoTalk、Facebook 或 WhatsApp。本站不會傳送任何資料給這些服務，各服務適用其自身的隱私權政策。QR 碼和「複製連結」在您的瀏覽器內運作。',
    privacyContactH: '聯絡我們', privacyContact: '關於您資料的問題或請求：',
  },
  th: {
    tagline: 'ก้าวสู่โลกดิจิทัล', slogan: 'ง่ายสำหรับทุกคน ก้าวทีละนิดทุกวัน',
    share: 'แชร์เว็บไซต์นี้', kakao: 'KakaoTalk', facebook: 'Facebook', whatsapp: 'WhatsApp', copy: 'คัดลอกลิงก์', qr: 'คิวอาร์โค้ด', more: 'แชร์',
    copied: 'คัดลอกลิงก์แล้ว วางในแชทเพื่อแชร์ได้เลย', kakaoCopied: 'คัดลอกลิงก์แล้ว วางในแชท KakaoTalk ได้เลย',
    qrTitle: 'สแกนด้วยกล้องโทรศัพท์', qrText: 'หันกล้องโทรศัพท์มาที่โค้ดนี้เพื่อเปิด digistep365.com', close: 'ปิด',
    notice: 'เว็บไซต์นี้เป็นแพลตฟอร์มการศึกษาดิจิทัลอิสระ และไม่ใช่บริการอย่างเป็นทางการของซัมซุงอิเล็กทรอนิกส์ วิธีใช้งานอาจแตกต่างกันตามรุ่นและเวอร์ชันซอฟต์แวร์',
    contact: 'ติดต่อ', privacy: 'นโยบายความเป็นส่วนตัว', terms: 'ข้อกำหนดการใช้งาน',
    shareText: 'DigiStep365 — บทเรียนโทรศัพท์ฟรี ทีละขั้นพร้อมภาพ',
    termsDesc: 'ข้อกำหนดการใช้งาน DigiStep365 เว็บไซต์อิสระที่สอนการใช้โทรศัพท์ทีละขั้นตอนฟรี',
    termsItems: [
      ['เกี่ยวกับบริการ', 'DigiStep365 เป็นเว็บไซต์อิสระที่สอนการใช้โทรศัพท์ด้วยภาพและหน้าจอฝึกหัดฟรี ไม่ต้องสมัครสมาชิก'],
      ['ไม่ใช่บริการอย่างเป็นทางการ', 'เราไม่มีส่วนเกี่ยวข้องกับซัมซุงอิเล็กทรอนิกส์หรือบริษัทอื่นที่มีผลิตภัณฑ์ปรากฏในบทเรียน Galaxy และชื่ออื่น ๆ เป็นเครื่องหมายการค้าของเจ้าของ เมนูอาจต่างกันตามรุ่นและเวอร์ชัน โปรดตรวจสอบการตั้งค่าสำคัญกับคู่มืออย่างเป็นทางการ'],
      ['หน้าจอฝึกหัด', 'หน้าจอฝึกหัดเป็นภาพจำลองโทรศัพท์ ไม่ใช่แอปจริง ห้ามพิมพ์รหัสผ่าน เลขบัตร หรือเลขประจำตัวจริง'],
      ['ใช้ตามวิจารณญาณ', 'เราพยายามให้บทเรียนถูกต้อง แต่ไม่อาจรับประกันว่าครบถ้วนหรือเป็นปัจจุบันเสมอ เรื่องเงิน ธนาคาร หรือความปลอดภัย โปรดตรวจสอบกับบริษัทหรือธนาคารของคุณโดยตรงทุกครั้ง'],
      ['เนื้อหา', 'ข้อความ ภาพ และการออกแบบเป็นของ DigiStep365 คุณแชร์ลิงก์และพิมพ์บทเรียนเพื่อใช้ส่วนตัวหรือสอนฟรีได้ การคัดลอกเพื่อการค้าต้องได้รับอนุญาตจากเรา'],
      ['การเปลี่ยนแปลงและการติดต่อ', 'เราอาจปรับปรุงข้อกำหนดนี้ โดยจะประกาศการเปลี่ยนแปลงพร้อมวันที่ในหน้านี้'],
    ],
    effective: 'วันที่มีผลบังคับใช้', privacyShareH: 'ปุ่มแชร์',
    privacyShare: 'ปุ่มแชร์จะเปิด KakaoTalk, Facebook หรือ WhatsApp เฉพาะเมื่อคุณแตะเท่านั้น เราไม่ส่งข้อมูลใด ๆ ให้บริการเหล่านั้น ซึ่งแต่ละบริการมีนโยบายความเป็นส่วนตัวของตนเอง คิวอาร์โค้ดและ “คัดลอกลิงก์” ทำงานในเบราว์เซอร์ของคุณ',
    privacyContactH: 'ติดต่อ', privacyContact: 'คำถามหรือคำขอเกี่ยวกับข้อมูลของคุณ:',
  },
  hi: {
    tagline: 'डिजिटल दुनिया की ओर कदम', slogan: 'सबके लिए आसान, हर दिन एक कदम।',
    share: 'यह साइट शेयर करें', kakao: 'KakaoTalk', facebook: 'Facebook', whatsapp: 'WhatsApp', copy: 'लिंक कॉपी करें', qr: 'QR कोड', more: 'शेयर करें',
    copied: 'लिंक कॉपी हो गया। शेयर करने के लिए चैट में पेस्ट करें।', kakaoCopied: 'लिंक कॉपी हो गया। KakaoTalk चैट में पेस्ट करें।',
    qrTitle: 'फ़ोन के कैमरे से स्कैन करें', qrText: 'digistep365.com खोलने के लिए फ़ोन का कैमरा इस कोड की ओर करें।', close: 'बंद करें',
    notice: 'यह साइट एक स्वतंत्र डिजिटल शिक्षा मंच है और Samsung Electronics की आधिकारिक सेवा नहीं है। फ़ोन मॉडल और सॉफ़्टवेयर संस्करण के अनुसार उपयोग का तरीका अलग हो सकता है।',
    contact: 'संपर्क', privacy: 'गोपनीयता नीति', terms: 'उपयोग की शर्तें',
    shareText: 'DigiStep365 — तस्वीरों के साथ, कदम-दर-कदम मुफ़्त फ़ोन पाठ',
    termsDesc: 'DigiStep365 की उपयोग की शर्तें — एक मुफ़्त, स्वतंत्र वेबसाइट जो फ़ोन चलाना कदम-दर-कदम सिखाती है।',
    termsItems: [
      ['सेवा के बारे में', 'DigiStep365 एक मुफ़्त, स्वतंत्र वेबसाइट है जो तस्वीरों और अभ्यास स्क्रीन से फ़ोन चलाना सिखाती है। खाता बनाने की ज़रूरत नहीं है।'],
      ['आधिकारिक सेवा नहीं', 'हमारा Samsung Electronics या पाठों में दिखने वाले उत्पादों की किसी भी कंपनी से कोई संबंध नहीं है। Galaxy और अन्य नाम उनके मालिकों के ट्रेडमार्क हैं। मेनू मॉडल और संस्करण के अनुसार बदल सकते हैं; ज़रूरी सेटिंग के लिए आधिकारिक मैनुअल देखें।'],
      ['अभ्यास स्क्रीन', 'अभ्यास स्क्रीन फ़ोन जैसी दिखने वाली तस्वीरें हैं, असली ऐप नहीं। कभी भी असली पासवर्ड, कार्ड नंबर या पहचान संख्या न लिखें।'],
      ['अपने विवेक से उपयोग करें', 'हम हर पाठ को सही रखने की कोशिश करते हैं, पर पूर्ण या नवीनतम होने की गारंटी नहीं दे सकते। पैसे, बैंक या सुरक्षा के मामलों में हमेशा आधिकारिक कंपनी या अपने बैंक से पुष्टि करें।'],
      ['सामग्री', 'पाठ, तस्वीरें और डिज़ाइन DigiStep365 के हैं। आप लिंक शेयर कर सकते हैं और निजी उपयोग या मुफ़्त पढ़ाई के लिए पाठ प्रिंट कर सकते हैं। व्यावसायिक नकल के लिए हमारी अनुमति ज़रूरी है।'],
      ['बदलाव और संपर्क', 'हम इन शर्तों को बदल सकते हैं। बदलाव तारीख के साथ इसी पेज पर दिखाए जाते हैं।'],
    ],
    effective: 'लागू होने की तारीख', privacyShareH: 'शेयर बटन',
    privacyShare: 'शेयर बटन KakaoTalk, Facebook या WhatsApp को केवल तभी खोलते हैं जब आप उन्हें दबाते हैं। हम इन सेवाओं को कोई जानकारी नहीं भेजते; उनकी अपनी गोपनीयता नीतियाँ लागू होती हैं। QR कोड और “लिंक कॉपी करें” आपके ब्राउज़र में ही काम करते हैं।',
    privacyContactH: 'संपर्क', privacyContact: 'आपके डेटा से जुड़े सवाल या अनुरोध:',
  },
  bn: {
    tagline: 'ডিজিটাল দুনিয়ায় এগিয়ে চলুন', slogan: 'সবার জন্য সহজ, প্রতিদিন এক ধাপ।',
    share: 'এই সাইট শেয়ার করুন', kakao: 'KakaoTalk', facebook: 'Facebook', whatsapp: 'WhatsApp', copy: 'লিংক কপি করুন', qr: 'QR কোড', more: 'শেয়ার',
    copied: 'লিংক কপি হয়েছে। শেয়ার করতে চ্যাটে পেস্ট করুন।', kakaoCopied: 'লিংক কপি হয়েছে। KakaoTalk চ্যাটে পেস্ট করুন।',
    qrTitle: 'ফোনের ক্যামেরা দিয়ে স্ক্যান করুন', qrText: 'digistep365.com খুলতে ফোনের ক্যামেরা এই কোডের দিকে ধরুন।', close: 'বন্ধ করুন',
    notice: 'এই সাইটটি একটি স্বাধীন ডিজিটাল শিক্ষা প্ল্যাটফর্ম এবং Samsung Electronics-এর অফিসিয়াল সেবা নয়। ফোনের মডেল ও সফটওয়্যার সংস্করণ অনুযায়ী ব্যবহারের পদ্ধতি ভিন্ন হতে পারে।',
    contact: 'যোগাযোগ', privacy: 'গোপনীয়তা নীতি', terms: 'ব্যবহারের শর্তাবলি',
    shareText: 'DigiStep365 — ছবিসহ ধাপে ধাপে বিনামূল্যে ফোনের পাঠ',
    termsDesc: 'DigiStep365-এর ব্যবহারের শর্তাবলি — একটি বিনামূল্যের স্বাধীন ওয়েবসাইট যা ধাপে ধাপে ফোন চালানো শেখায়।',
    termsItems: [
      ['সেবা সম্পর্কে', 'DigiStep365 একটি বিনামূল্যের স্বাধীন ওয়েবসাইট, যা ছবি ও অনুশীলন স্ক্রিন দিয়ে ফোন চালানো শেখায়। অ্যাকাউন্ট খোলার দরকার নেই।'],
      ['অফিসিয়াল সেবা নয়', 'Samsung Electronics বা পাঠে যেসব কোম্পানির পণ্য দেখা যায় তাদের সঙ্গে আমাদের কোনো সম্পর্ক নেই। Galaxy ও অন্যান্য নাম তাদের মালিকদের ট্রেডমার্ক। মডেল ও সংস্করণ অনুযায়ী মেনু ভিন্ন হতে পারে; গুরুত্বপূর্ণ সেটিংয়ের জন্য অফিসিয়াল ম্যানুয়াল দেখুন।'],
      ['অনুশীলন স্ক্রিন', 'অনুশীলন স্ক্রিন হলো ফোনের মতো দেখতে ছবি, আসল অ্যাপ নয়। কখনো আসল পাসওয়ার্ড, কার্ড নম্বর বা পরিচয়পত্রের নম্বর লিখবেন না।'],
      ['নিজের বিবেচনায় ব্যবহার করুন', 'আমরা প্রতিটি পাঠ নির্ভুল রাখার চেষ্টা করি, তবে সম্পূর্ণ বা হালনাগাদ থাকার নিশ্চয়তা দিতে পারি না। টাকা, ব্যাংক বা নিরাপত্তার বিষয়ে সবসময় অফিসিয়াল কোম্পানি বা আপনার ব্যাংকের সঙ্গে নিশ্চিত হোন।'],
      ['বিষয়বস্তু', 'লেখা, ছবি ও নকশার মালিক DigiStep365। আপনি লিংক শেয়ার করতে পারেন এবং ব্যক্তিগত ব্যবহার বা বিনামূল্যে শেখানোর জন্য পাঠ প্রিন্ট করতে পারেন। বাণিজ্যিক কপির জন্য আমাদের অনুমতি লাগবে।'],
      ['পরিবর্তন ও যোগাযোগ', 'আমরা এই শর্তাবলি হালনাগাদ করতে পারি। পরিবর্তন তারিখসহ এই পাতায় প্রকাশ করা হয়।'],
    ],
    effective: 'কার্যকর হওয়ার তারিখ', privacyShareH: 'শেয়ার বোতাম',
    privacyShare: 'শেয়ার বোতাম কেবল চাপলেই KakaoTalk, Facebook বা WhatsApp খোলে। আমরা এই সেবাগুলোকে কোনো তথ্য পাঠাই না; তাদের নিজস্ব গোপনীয়তা নীতি প্রযোজ্য। QR কোড ও “লিংক কপি করুন” আপনার ব্রাউজারের ভেতরেই কাজ করে।',
    privacyContactH: 'যোগাযোগ', privacyContact: 'আপনার তথ্য নিয়ে প্রশ্ন বা অনুরোধ:',
  },
  ar: {
    tagline: 'انطلق إلى العالم الرقمي', slogan: 'سهل للجميع، خطوة كل يوم.',
    share: 'مشاركة هذا الموقع', kakao: 'KakaoTalk', facebook: 'Facebook', whatsapp: 'WhatsApp', copy: 'نسخ الرابط', qr: 'رمز QR', more: 'مشاركة',
    copied: 'تم نسخ الرابط. الصقه في محادثة لمشاركته.', kakaoCopied: 'تم نسخ الرابط. الصقه في محادثة KakaoTalk.',
    qrTitle: 'امسح الرمز بكاميرا الهاتف', qrText: 'وجّه كاميرا هاتفك إلى هذا الرمز لفتح digistep365.com.', close: 'إغلاق',
    notice: 'هذا الموقع منصة مستقلة للتعليم الرقمي وليس خدمة رسمية من سامسونج للإلكترونيات. قد تختلف طريقة الاستخدام حسب طراز الهاتف وإصدار البرنامج.',
    contact: 'تواصل معنا', privacy: 'سياسة الخصوصية', terms: 'شروط الاستخدام',
    shareText: 'DigiStep365 — دروس مجانية للهاتف خطوة بخطوة مع الصور',
    termsDesc: 'شروط استخدام DigiStep365، وهو موقع مجاني ومستقل يعلّم استخدام الهاتف خطوة بخطوة.',
    termsItems: [
      ['عن الخدمة', 'DigiStep365 موقع مجاني ومستقل يعلّم استخدام الهاتف بالصور وشاشات التدريب. لا تحتاج إلى إنشاء حساب.'],
      ['ليست خدمة رسمية', 'لا تربطنا أي علاقة بسامسونج للإلكترونيات أو بأي شركة تظهر منتجاتها في الدروس. Galaxy وغيرها من الأسماء علامات تجارية لأصحابها. قد تختلف القوائم حسب الطراز والإصدار، لذا راجع الدليل الرسمي للإعدادات المهمة.'],
      ['شاشات التدريب', 'شاشات التدريب صور تحاكي الهاتف وليست تطبيقات حقيقية. لا تكتب أبدًا كلمات مرور أو أرقام بطاقات أو هويات حقيقية.'],
      ['الاستخدام على مسؤوليتك', 'نحرص على دقة كل درس، لكن لا يمكننا ضمان اكتماله أو حداثته. في أمور المال والبنوك والأمان، تحقّق دائمًا من الشركة الرسمية أو من بنكك.'],
      ['المحتوى', 'النصوص والصور والتصميم ملك لـ DigiStep365. يمكنك مشاركة الروابط وطباعة الدروس للاستخدام الشخصي أو التعليم المجاني. يتطلب النسخ التجاري إذنًا منا.'],
      ['التغييرات والتواصل', 'قد نحدّث هذه الشروط، وتُنشر التغييرات في هذه الصفحة مع التاريخ.'],
    ],
    effective: 'تاريخ السريان', privacyShareH: 'أزرار المشاركة',
    privacyShare: 'تفتح أزرار المشاركة KakaoTalk أو Facebook أو WhatsApp فقط عند الضغط عليها. لا نرسل أي بيانات إلى هذه الخدمات، ولكل منها سياسة خصوصية خاصة بها. يعمل رمز QR و«نسخ الرابط» داخل متصفحك.',
    privacyContactH: 'تواصل معنا', privacyContact: 'للأسئلة أو الطلبات المتعلقة ببياناتك:',
  },
};

/* ---------- footer HTML ---------- */
// Brand marks: KakaoTalk, Facebook, WhatsApp from Simple Icons (CC0), drawn on each brand's official color.
// Link / QR / share glyphs from Material Icons (Apache-2.0).
const ICON_PATH = {
  kakao: 'M22.125 0H1.875C.8394 0 0 .8394 0 1.875v20.25C0 23.1606.8394 24 1.875 24h20.25C23.1606 24 24 23.1606 24 22.125V1.875C24 .8394 23.1606 0 22.125 0zM12 18.75c-.591 0-1.1697-.0413-1.7317-.1209-.5626.3965-3.813 2.6797-4.1198 2.7225 0 0-.1258.0489-.2328-.0141s-.0876-.2282-.0876-.2282c.0322-.2198.8426-3.0183.992-3.5333-2.7452-1.36-4.5701-3.7686-4.5701-6.5135C2.25 6.8168 6.6152 3.375 12 3.375s9.75 3.4418 9.75 7.6875c0 4.2457-4.3652 7.6875-9.75 7.6875zM8.0496 9.8672h-.8777v3.3417c0 .2963-.2523.5372-.5625.5372s-.5625-.2409-.5625-.5372V9.8672h-.8777c-.3044 0-.552-.2471-.552-.5508s.2477-.5508.552-.5508h2.8804c.3044 0 .552.2471.552.5508s-.2477.5508-.552.5508zm10.9879 2.9566a.558.558 0 0 1 .108.4167.5588.5588 0 0 1-.2183.371.5572.5572 0 0 1-.3383.1135.558.558 0 0 1-.4493-.2236l-1.3192-1.7479-.1952.1952v1.2273a.5635.5635 0 0 1-.5627.5628.563.563 0 0 1-.5625-.5625V9.3281c0-.3102.2523-.5625.5625-.5625s.5625.2523.5625.5625v1.209l1.5694-1.5694c.0807-.0807.1916-.1252.312-.1252.1404 0 .2814.0606.3871.1661.0985.0984.1573.2251.1654.3566.0082.1327-.036.2542-.1241.3425l-1.2818 1.2817 1.3845 1.8344zm-8.3502-3.5023c-.095-.2699-.3829-.5475-.7503-.5557-.3663.0083-.6542.2858-.749.5551l-1.3455 3.5415c-.1708.5305-.0217.7272.1333.7988a.8568.8568 0 0 0 .3576.0776c.2346 0 .4139-.0952.4678-.2481l.2787-.7297 1.7152.0001.2785.7292c.0541.1532.2335.2484.4681.2484a.8601.8601 0 0 0 .3576-.0775c.1551-.0713.3041-.2681.1329-.7999l-1.3449-3.5398zm-1.3116 2.4433l.5618-1.5961.5618 1.5961H9.3757zm5.9056 1.3836c0 .2843-.2418.5156-.5391.5156h-1.8047c-.2973 0-.5391-.2314-.5391-.5156V9.3281c0-.3102.2576-.5625.5742-.5625s.5742.2523.5742.5625v3.3047h1.1953c.2974 0 .5392.2314.5392.5156z',
  facebook: 'M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036 26.805 26.805 0 0 0-.733-.009c-.707 0-1.259.096-1.675.309a1.686 1.686 0 0 0-.679.622c-.258.42-.374.995-.374 1.752v1.297h3.919l-.386 2.103-.287 1.564h-3.246v8.245C19.396 23.238 24 18.179 24 12.044c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.628 3.874 10.35 9.101 11.647Z',
  whatsapp: 'M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z',
  copy: 'M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z',
  qr: 'M3 11h8V3H3v8zm2-6h4v4H5V5zM3 21h8v-8H3v8zm2-6h4v4H5v-4zM13 3v8h8V3h-8zm6 6h-4V5h4v4zM19 19h2v2h-2zM13 13h2v2h-2zM15 15h2v2h-2zM13 17h2v2h-2zM15 19h2v2h-2zM17 17h2v2h-2zM17 13h2v2h-2zM19 15h2v2h-2z',
  more: 'M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92s2.92-1.31 2.92-2.92-1.31-2.92-2.92-2.92z',
};
export const SHARE_KINDS = ['kakao', 'facebook', 'whatsapp', 'copy', 'qr', 'more'];
const icon = (k) => `<span class="share__ic share__ic--${k}" aria-hidden="true"><svg viewBox="0 0 24 24" width="26" height="26" focusable="false"><path d="${ICON_PATH[k]}"/></svg></span>`;
const escF = (s) => String(s ?? '').replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

/**
 * The footer shared by every page.
 * @param {object} o
 * @param {string} o.lang            'ko' or a global language code
 * @param {string} o.privacyHref     link to the privacy policy
 * @param {string} o.termsHref       link to the terms of use
 * @param {string} o.shareUrl        address that the share buttons send (QR code always opens digistep365.com)
 * @param {string} o.langLinks       language links (HTML), shown folded
 * @param {string} [o.languagesLabel]
 * @param {string} [o.extra]         extra line at the top (e.g. draft translation notice)
 * @param {string} [o.logo]          logo image path
 */
export function siteFooter({ lang, privacyHref, termsHref, shareUrl, langLinks, languagesLabel, extra = '', logo = '/assets/logo-mark.png' }) {
  const F = { ...FOOTER.en, ...FOOTER[lang] };
  const year = new Date().getFullYear();
  return `<footer class="sfoot" data-share-root data-share-url="${escF(shareUrl)}" data-share-text="${escF(F.shareText)}"
  data-msg-copied="${escF(F.copied)}" data-msg-kakao="${escF(F.kakaoCopied)}">
  ${extra}
  <div class="sfoot__brand">
    <img src="${logo}" alt="" width="40" height="43">
    <p><b>Digi<i>Step</i>365</b><span>${escF(F.tagline)}</span></p>
  </div>
  <p class="sfoot__slogan">${escF(F.slogan)}</p>
  <div class="sfoot__share" role="group" aria-label="${escF(F.share)}">
    ${SHARE_KINDS.map((k) => `<button type="button" class="share" data-share="${k}">${icon(k)}<span class="share__t">${escF(F[k])}</span></button>`).join('\n    ')}
  </div>
  <p class="sfoot__notice">${escF(F.notice)}</p>
  <p class="sfoot__links"><a href="mailto:${CONTACT_EMAIL}">${escF(F.contact)} <span dir="ltr">${CONTACT_EMAIL}</span></a></p>
  <p class="sfoot__links"><a href="${privacyHref}"><b>${escF(F.privacy)}</b></a><a href="${termsHref}">${escF(F.terms)}</a></p>
  ${langLinks ? `<details class="sfoot__langs"><summary>${escF(languagesLabel ?? F.languages ?? 'Languages')} · Language</summary><p>${langLinks}</p></details>` : ''}
  <p class="sfoot__copy" dir="ltr">© <span data-year>${year}</span> DigiStep365. All rights reserved.</p>
</footer>
<dialog class="qr" data-qr aria-labelledby="qr-h">
  <h2 id="qr-h">${escF(F.qrTitle)}</h2>
  <img src="/assets/qr-digistep365.svg" alt="digistep365.com QR" width="220" height="220">
  <p>${escF(F.qrText)}</p>
  <p class="qr__url" dir="ltr">digistep365.com</p>
  <button class="qr__close" type="button" data-qr-close>${escF(F.close)}</button>
</dialog>
<p class="toast" data-toast role="status" aria-live="polite" hidden></p>`;
}
