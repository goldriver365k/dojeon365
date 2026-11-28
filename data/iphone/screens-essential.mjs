// 필수 100개 수업의 단계별 화면(코드로 그린 재현 화면) — steps-essential.mjs의 단계 순서와 1:1
// 한 단계 = 화면 정의(assets/iphone-screens.js의 v 종류). t = 빨간 원 위치(영어 키; 없으면 단계의 누를 곳 영어 이름), a = 동작(hold·swipe)
// { face: [...], home: [...] } = Face ID 기종 / 홈 버튼 기종 그림
const home = (x = {}) => ({ v: 'home', ...x });
const dev = (t, x = {}) => ({ v: 'device', t, ...x });
const A = [{ label: 'Airplane Mode', toggle: false, chev: false }, { label: 'Wi-Fi', value: 'Home' }, { label: 'Bluetooth', value: 'On' }, 'Cellular', 'Battery'];
const B = ['General', 'Accessibility', 'Camera', 'Control Center', 'Display & Brightness'];
/** 설정 첫 화면(위쪽) */
const SET = (t, x = {}) => ({ v: 'list', title: 'Settings', large: true, profile: 'Maria Kim', groups: [{ icons: true, rows: A }, { icons: true, rows: B }], t, ...x });
/** 설정(아래로 내린 화면) — 사운드·Siri·Face ID·긴급 구조 */
const SET2 = (t, touch = false) => ({ v: 'list', title: 'Settings', groups: [{ icons: true, rows: ['Accessibility', 'Camera', 'Display & Brightness', 'Siri'] }, { icons: true, rows: ['Notifications', 'Sounds & Haptics', 'Focus', 'Screen Time'] }, { icons: true, rows: [touch ? 'Touch ID & Passcode' : 'Face ID & Passcode', 'Emergency SOS', 'Privacy & Security'] }], t });
const GENERAL = (t) => ({ v: 'list', title: 'General', back: 'Settings', groups: [{ icons: true, rows: ['About', 'Software Update'] }, { rows: ['AirDrop', 'AutoFill & Passwords', 'Date & Time', 'Keyboard', 'Language & Region'] }, { icons: true, rows: ['iPhone Storage'] }, { rows: ['Transfer or Reset iPhone', { label: 'Shut Down', blue: true }] }], t });
const ABOUT = (t) => ({ v: 'list', title: 'About', back: 'General', groups: [{ rows: [{ label: 'Name', value: 'iPhone' }, { label: 'iOS Version', value: '26.1' }, { label: 'Model Name', value: 'iPhone 16', chev: false }, { label: 'Model Number', value: 'MYE73', chev: false }, { label: 'Serial Number', value: 'F2LXXXXXXX', chev: false }] }, { rows: [{ label: 'Photos', value: '1,204', chev: false }, { label: 'Applications', value: '38', chev: false }, { label: 'Capacity', value: '128 GB', chev: false }, { label: 'Available', value: '61.2 GB', chev: false }] }], t });
const DISPLAY = (t, x = {}) => ({ v: 'list', title: 'Display & Brightness', back: 'Settings', groups: [{ header: 'APPEARANCE', rows: [{ label: 'Light', check: true }, { label: 'Dark', chev: false }] }, { header: 'BRIGHTNESS', rows: [{ label: 'True Tone', toggle: true }] }, { rows: ['Night Shift', { label: 'Auto-Lock', value: '30 seconds' }, { label: 'Raise to Wake', toggle: true }] }, { rows: ['Text Size', { label: 'Bold Text', toggle: !!x.bold }] }, { header: 'DISPLAY', rows: [{ label: 'Display Zoom', value: 'Default' }] }], t });
const ACCESS = (t) => ({ v: 'list', title: 'Accessibility', back: 'Settings', groups: [{ header: 'VISION', icons: true, rows: ['VoiceOver', 'Zoom', 'Display & Text Size', 'Spoken Content'] }, { header: 'PHYSICAL AND MOTOR', icons: true, rows: ['Touch'] }, { header: 'GENERAL', icons: true, rows: ['Assistive Access'] }], t });
const SOUNDS = (t) => ({ v: 'list', title: 'Sounds & Haptics', back: 'Settings', groups: [{ rows: [{ label: 'Silent Mode', toggle: false }] }, { header: 'RINGTONE AND ALERTS', rows: [{ label: 'Ringtone and Alerts', value: '▬▬▬▬○──', chev: false }, { label: 'Change with Buttons', toggle: true }] }, { rows: [{ label: 'Ringtone', value: 'Reflection' }, { label: 'Text Tone', value: 'Note' }, 'Haptics'] }], t });
const BATTERY = (t, x = {}) => ({ v: 'list', title: 'Battery', back: 'Settings', groups: [{ rows: [{ label: 'Battery Percentage', toggle: !!x.pct }, { label: 'Low Power Mode', toggle: !!x.low }], footer: 'Low Power Mode temporarily reduces background activity until you can fully charge your iPhone.' }, { rows: ['Battery Health & Charging'] }], t });
const WIFI = (t) => ({ v: 'list', title: 'Wi-Fi', back: 'Settings', groups: [{ rows: [{ label: 'Wi-Fi', toggle: true }] }, { header: 'NETWORKS', rows: ['Home', 'Cafe_Free', 'Neighbor 5G'] }], t });
const BT = (t, on = true, devices = false) => ({ v: 'list', title: 'Bluetooth', back: 'Settings', groups: [{ rows: [{ label: 'Bluetooth', toggle: on }] }, ...(devices ? [{ header: 'OTHER DEVICES', rows: [{ label: 'Buds Pro', chev: false }] }] : [])], t });
const msgs = (x = {}) => ({ v: 'messages', ...x });
const chat = (x = {}) => ({ v: 'chat', ...x });
const CTRL = (x = {}) => ({ v: 'control', ...x });
const photo = (x = {}) => ({ v: 'photo', ...x });
const sheet = (base, buttons, t, title) => ({ v: 'sheet', base, buttons, t, title });
const alert = (base, title, buttons, t, x = {}) => ({ v: 'alert', base, title, buttons, t, ...x });
const appv = (app, x = {}) => ({ v: 'app', app, ...x });
const weather = appv('Weather', { title: 'Seoul', big: '21°', rows: [{ label: 'Sunny', card: 'rgba(255,255,255,.18)' }, { label: 'High 24°  Low 15°', card: 'rgba(255,255,255,.18)' }] });
const kbd = {};

export const SCREENS = {
  'power-on': [dev('Side button', { a: 'hold' }), { v: 'black', logo: true }, { v: 'lock' }],
  'power-off': { face: [dev('Side button', { a: 'hold' }), { v: 'power' }, { v: 'black' }], home: [dev('Side button', { a: 'hold' }), { v: 'power' }, { v: 'black' }] },
  restart: [{ v: 'power', t: 'slide to power off', a: 'swipe' }, { v: 'black' }, { v: 'black', logo: true }],
  'wake-unlock': { face: [{ v: 'lock', t: 'Screen' }, { v: 'lock', open: true }, { v: 'lock', open: true, t: 'Home indicator', a: 'swipe' }], home: [dev('Home button'), home()] },
  'lock-screen': [dev('Side button'), { v: 'black' }],
  'go-home': { face: [{ ...weather, t: 'Home indicator', a: 'swipe' }, home()], home: [dev('Home button'), home()] },
  'basic-gestures': [home({ t: 'Photos' }), home({ menu: ['Edit Home Screen', 'Share App', 'Remove App'], menuApp: 'Weather' }), home({ page2: true, t: 'Screen', a: 'swipe' })],
  'open-app': [home({ t: 'Photos' }), { v: 'photos' }],
  'switch-apps': { face: [{ ...weather, t: 'Home indicator', a: 'swipe' }, { v: 'switcher', t: 'Screen', a: 'swipe' }, { v: 'switcher', t: 'Safari' }], home: [dev('Home button'), { v: 'switcher', t: 'Screen', a: 'swipe' }, { v: 'switcher', t: 'Safari' }] },
  'control-center': { face: [home({ t: 'Top right corner', a: 'swipe' }), CTRL()], home: [home({ t: 'Bottom edge', a: 'swipe' }), CTRL()] },
  'notification-center': [home({ t: 'Top middle', a: 'swipe' }), { v: 'notif', t: 'Notification' }, { v: 'notif' }],
  'volume-buttons': [dev('Volume up'), dev('Volume down')],
  'silent-mode': { face: [CTRL(), CTRL({ t: 'Silent Mode' })], home: [dev('Ring/Silent switch'), dev('Ring/Silent switch')] },
  'check-model': [home({ t: 'Settings' }), SET('General'), GENERAL('About'), ABOUT('Model Name')],
  'check-ios-version': [home({ t: 'Settings' }), SET('General'), GENERAL('About'), ABOUT('iOS Version')],
  'make-call': [home({ t: 'Phone' }), { v: 'recents', t: 'Keypad' }, { v: 'keypad', number: '010 1234 5678' }, { v: 'keypad', number: '010 1234 5678' }],
  'answer-call': [{ v: 'incoming' }, { v: 'lock', call: 'Maria', a: 'swipe' }],
  'decline-call': [{ v: 'incoming' }, dev('Side button')],
  'end-call': [{ v: 'call' }],
  'speaker-call': [{ v: 'call' }, { v: 'call', on: 'Speaker' }],
  'call-from-recents': [home({ t: 'Phone' }), { v: 'recents' }, { v: 'recents', t: 'Maria' }],
  'keypad-during-call': [{ v: 'call' }, { v: 'call', keypad: true }, { v: 'call', keypad: true }],
  'block-number': [{ v: 'recents' }, { v: 'recents' }, { v: 'contact', name: '+82 10 1234 5678', back: 'Recents', block: true, rows: ['Send Message', 'Add to Favorites'] }, sheet({ v: 'contact', name: '+82 10 1234 5678', block: true }, ['Block Contact'], 'Block Contact', 'You will not receive phone calls, messages or FaceTime from people on the block list.')],
  'facetime-call': [home({ t: 'FaceTime' }), appv('FaceTime', { title: 'FaceTime', rows: [{ label: 'New FaceTime', card: '#34c759', key: 'New FaceTime' }, { label: 'Create Link', card: true }] }), appv('FaceTime', { title: 'New FaceTime', rows: [{ label: 'To: ', card: true }], keyboard: kbd }), appv('FaceTime', { title: 'New FaceTime', rows: [{ label: 'To: Maria', card: true }, { label: 'FaceTime', card: '#34c759', key: 'FaceTime' }] })],
  'add-contact': [home({ t: 'Contacts' }), { v: 'contacts' }, { v: 'newContact', keyboard: kbd }, { v: 'newContact', first: 'Maria' }, { v: 'newContact', first: 'Maria', phone: '010 1234 5678', keyboard: kbd }, { v: 'newContact', first: 'Maria', phone: '010 1234 5678' }],
  'edit-contact': [{ v: 'contacts', t: 'Maria' }, { v: 'contact' }, { v: 'contact', edit: true }, { v: 'contact', edit: true, t: 'Done' }],
  'search-contact': [home({ t: 'Contacts' }), { v: 'contacts' }, { v: 'contacts', query: 'Ma', names: ['Maria'], keyboard: kbd }],
  'send-message': [home({ t: 'Messages' }), msgs(), chat({ compose: true, keyboard: kbd, t: 'To' }), chat({ compose: true, to: 'Maria', keyboard: kbd }), chat({ compose: true, to: 'Maria', text: 'Hello!', keyboard: kbd })],
  'read-message': [home({ t: 'Messages' }), msgs({ t: 'Maria' }), chat()],
  'reply-message': [msgs({ t: 'Maria' }), chat({ t: 'Message field' }), chat({ keyboard: kbd, text: 'Yes' }), chat({ keyboard: kbd, text: 'Yes, see you!' })],
  'send-photo': [msgs({ t: 'Maria' }), chat(), chat({ apps: true }), { v: 'photos', picker: true, t: 'Photo' }, chat({ attached: true })],
  'save-photo-from-message': [chat({ msgs: [{ t: 'Look!' }, { photo: true }], t: 'Photo' }), photo(), { v: 'share' }],
  'group-message': [msgs(), chat({ compose: true, to: 'Maria, John', keyboard: kbd }), chat({ compose: true, to: 'Maria, John', text: 'Lunch?', keyboard: kbd }), chat({ compose: true, to: 'Maria, John', text: 'Lunch on Saturday?', keyboard: kbd })],
  'delete-message': [chat({ t: 'Message bubble', a: 'hold' }), chat({ menu: ['Reply', 'Copy', 'More...'] }), chat({ select: true }), sheet(chat({ select: true }), ['Delete Message'], 'Delete Message')],
  'copy-code': [chat({ name: 'Bank', msgs: [{ t: 'Your code is 123456. Do not share it.' }], keyboard: kbd, suggest: 'From Messages  123456', t: 'Code suggestion' }), chat({ name: 'Bank', msgs: [{ t: 'Your code is 123456. Do not share it.' }], keyboard: kbd, suggest: 'From Messages  123456', t: 'Code suggestion' }), chat({ name: 'Bank', msgs: [{ t: 'Your code is 123456. Do not share it.' }] })],
  'use-keyboard': [{ v: 'type', text: '' }, { v: 'type', text: 'Hello' }, { v: 'type', text: 'Helo' }],
  dictation: [{ v: 'type', text: '', t: 'Text field' }, { v: 'type', text: '' }, { v: 'type', text: 'See you tomorrow', keyboard: { dictation: true } }, { v: 'type', text: 'See you tomorrow', keyboard: { dictation: true } }],
  'emoji-keyboard': [{ v: 'type', text: 'Thank you' }, { v: 'type', text: 'Thank you', keyboard: { emoji: true }, t: 'Emoji' }, { v: 'type', text: 'Thank you 🙏', keyboard: { emoji: true } }],
  'copy-paste': [{ v: 'type', text: 'Hello', t: 'Text field', a: 'hold' }, { v: 'type', text: 'Hello', menu: ['Cut', 'Copy', 'Paste'] }, { v: 'type', text: 'Hello', t: 'Text field', a: 'hold' }, { v: 'type', text: 'Hello', menu: ['Paste', 'Select'] }],
  'open-camera': [home({ t: 'Camera' }), { v: 'camera' }],
  'take-photo': [home({ t: 'Camera' }), { v: 'camera' }, { v: 'camera' }, { v: 'camera' }],
  'zoom-photo': [{ v: 'camera', zoom: true, t: 'Screen', a: 'swipe' }, { v: 'camera', zoom: true }],
  selfie: [{ v: 'camera' }, { v: 'camera', front: true }, { v: 'camera', front: true }],
  'record-video': [{ v: 'camera' }, { v: 'camera', video: true }, { v: 'camera', video: true, recording: true }],
  'view-photos': [home({ t: 'Photos' }), { v: 'photos', t: 'Photo' }, photo({ t: 'Screen', a: 'swipe' })],
  'zoom-in-photo': [photo({ zoom: true, t: 'Screen', a: 'swipe' }), photo()],
  'play-video': [{ v: 'photos', video: true, t: 'Video' }, photo({ play: true })],
  'delete-photo': [{ v: 'photos', t: 'Photo' }, photo(), sheet(photo(), ['Delete Photo'], 'Delete Photo')],
  'recover-photo': [{ v: 'photos', collections: true }, appv('Photos', { title: 'Recently Deleted', face: true }), { v: 'photos', picker: true, t: 'Photo' }, photo({ recover: true })],
  'share-photo': [{ v: 'photos', t: 'Photo' }, photo(), { v: 'share' }],
  'open-safari': [home({ t: 'Safari' })],
  'search-web': [{ v: 'safari' }, { v: 'safari', keyboard: kbd, query: 'weather' }, { v: 'safari', keyboard: kbd, query: 'weather' }],
  'go-back': [{ v: 'safari', page: true }],
  'text-size-web': [{ v: 'safari', page: true }, { v: 'safari', page: true, menu: true }],
  'wifi-connect': [home({ t: 'Settings' }), SET('Wi-Fi'), WIFI('Home'), alert(WIFI(), 'Enter the password for “Home”', ['Cancel', 'Join'], 'Password', { input: 'Password' }), alert(WIFI(), 'Enter the password for “Home”', ['Cancel', 'Join'], 'Join', { input: 'Password' })],
  'bluetooth-on': [home({ t: 'Settings' }), SET('Bluetooth'), BT('Bluetooth', false)],
  'bluetooth-pair': [BT('', true), SET('Bluetooth'), BT('Buds Pro', true, true)],
  'airplane-mode': [CTRL(), CTRL({ airplane: true })],
  'text-size': [home({ t: 'Settings' }), SET('Display & Brightness'), DISPLAY('Text Size'), { v: 'list', title: 'Text Size', back: 'Display & Brightness', slider: 0.75, groups: [], t: 'Text size slider', a: 'swipe' }],
  'bold-text': [SET('Display & Brightness'), DISPLAY('Bold Text', { bold: true })],
  'display-zoom': [SET('Display & Brightness'), DISPLAY('Display Zoom'), { v: 'list', title: 'Display Zoom', back: 'Display & Brightness', right: 'Done', groups: [{ rows: [{ label: 'Default', chev: false }, { label: 'Larger Text', check: true }] }], t: 'Larger Text' }, { v: 'list', title: 'Display Zoom', back: 'Display & Brightness', right: 'Done', groups: [{ rows: [{ label: 'Default', chev: false }, { label: 'Larger Text', check: true }] }] }],
  brightness: [CTRL(), CTRL({ a: 'swipe' })],
  'auto-lock': [SET('Display & Brightness'), DISPLAY('Auto-Lock'), { v: 'list', title: 'Auto-Lock', back: 'Display & Brightness', groups: [{ rows: ['30 seconds', '1 minute', '2 minutes', '3 minutes', '4 minutes', { label: '5 minutes', check: true }, 'Never'].map((r) => (typeof r === 'string' ? { label: r, chev: false } : r)) }] }],
  'ringtone-volume': [SET2('Sounds & Haptics'), { ...SOUNDS(), a: 'swipe' }],
  'change-ringtone': [SET2('Sounds & Haptics'), SOUNDS(), { v: 'list', title: 'Ringtone', back: 'Sounds & Haptics', groups: [{ rows: [{ label: 'Reflection', check: true }, ...['Apex', 'Beacon', 'Bulletin', 'Chimes', 'Circuit'].map((r) => ({ label: r, chev: false }))] }], t: 'Apex' }],
  'do-not-disturb': [CTRL(), CTRL(), CTRL({ focus: true })],
  'install-app': [home({ t: 'App Store' }), { v: 'store' }, { v: 'store', searchTab: true, query: 'Big Clock', keyboard: kbd }, { v: 'store', results: true }, { v: 'store', results: true, confirm: true, t: 'Confirm' }],
  'update-apps': [home({ t: 'App Store' }), { v: 'store' }, { v: 'store', account: true }],
  'delete-app': [home({ t: 'Weather', a: 'hold' }), home({ menu: ['Edit Home Screen', 'Share App', 'Remove App'], menuApp: 'Weather' }), alert(home(), 'Remove “Weather”?', ['Delete App', 'Remove from Home Screen', 'Cancel']), alert(home(), 'Delete “Weather”?', ['Cancel', 'Delete'], 'Delete', { message: 'Deleting this app will also delete its data.' })],
  'charge-iphone': [dev('Charging port', { port: true, cable: true }), dev('', { port: true, cable: true, bolt: true }), home({ charging: true, t: 'Battery icon' })],
  'battery-percentage': [SET('Battery'), BATTERY('Battery Percentage', { pct: true })],
  'low-power-mode': [SET('Battery'), BATTERY('Low Power Mode', { low: true })],
  'set-alarm': [home({ t: 'Clock' }), { v: 'clock' }, { v: 'clock' }, { v: 'clock', mode: 'add', t: 'Time wheels', a: 'swipe' }, { v: 'clock', mode: 'add' }],
  timer: [{ v: 'clock', t: 'Timers' }, { v: 'clock', mode: 'timer', t: 'Timer wheels', a: 'swipe' }, { v: 'clock', mode: 'timer' }],
  flashlight: { face: [CTRL(), CTRL()], home: [{ ...CTRL(), t: 'Screen', a: 'swipe' }, CTRL()] },
  weather: [home({ t: 'Weather' }), weather],
  'new-note': [home({ t: 'Notes' }), appv('Notes', { title: 'Notes', rows: [{ label: 'Shopping list', card: true }, { label: 'Doctor 10:00', card: true }], fab: 'New Note' }), { v: 'type', text: 'Buy milk and eggs' }],
  passcode: [SET2('Face ID & Passcode'), { v: 'list', title: 'Face ID & Passcode', back: 'Settings', groups: [{ rows: [{ label: 'Set Up Face ID', blue: true }] }, { rows: [{ label: 'Turn Passcode On', blue: true }] }] }, appv('Settings', { dots: 3 })],
  'face-id-setup': [SET2('Face ID & Passcode'), { v: 'list', title: 'Face ID & Passcode', back: 'Settings', groups: [{ rows: [{ label: 'Set Up Face ID', blue: true }] }, { rows: [{ label: 'Turn Passcode Off', blue: true }, { label: 'Change Passcode', blue: true }] }] }, appv('Settings', { face: true, bubble: '' })],
  'touch-id-setup': [{ ...SET2('Touch ID & Passcode', true), model: 'home' }, { v: 'list', title: 'Touch ID & Passcode', back: 'Settings', model: 'home', groups: [{ header: 'FINGERPRINTS', rows: [{ label: 'Add a Fingerprint...', blue: true }] }] }, appv('Settings', { finger: true, model: 'home' })],
  'software-update': [SET('General'), GENERAL('Software Update'), { v: 'list', title: 'Software Update', back: 'General', groups: [{ rows: [{ label: 'iOS 26.1', chev: false }], footer: 'This update includes bug fixes and security updates.' }, { rows: [{ label: 'Update Now', blue: true }] }] }],
  'scam-prevention': [chat({ name: '+44 7700 900123', msgs: [{ t: 'Your parcel is waiting. Pay here: parcel-check.example' }] }), chat({ name: '+82 10 9999 0000', msgs: [{ t: 'Mom, I broke my phone. Please send money now.' }] }), chat({ name: 'Bank', msgs: [{ t: 'Your code is 123456. Do not share it.' }] }), chat({ name: '+44 7700 900123', msgs: [{ t: 'Your parcel is waiting. Pay here: parcel-check.example' }], menu: ['Reply', 'Copy', 'Report Junk'] })],
  zoom: [SET('Accessibility'), ACCESS('Zoom'), { v: 'list', title: 'Zoom', back: 'Accessibility', groups: [{ rows: [{ label: 'Zoom', toggle: true }], footer: 'Double-tap three fingers to zoom. Drag three fingers to move around the screen.' }] }, home({ zoom: true, t: 'Screen' })],
  magnifier: [home({ page2: true, t: 'Magnifier' }), appv('Magnifier', { slider: true }), appv('Magnifier', { slider: true, t: 'Zoom slider', a: 'swipe' })],
  'speak-screen': [ACCESS('Spoken Content'), { v: 'list', title: 'Spoken Content', back: 'Accessibility', groups: [{ rows: [{ label: 'Speak Selection', toggle: false }, { label: 'Speak Screen', toggle: true }], footer: 'Swipe down with two fingers from the top of the screen to hear the content of the screen.' }] }, home({ speak: true, t: 'Top middle', a: 'swipe' })],
  voiceover: [ACCESS('VoiceOver'), { v: 'list', title: 'VoiceOver', back: 'Accessibility', groups: [{ rows: [{ label: 'VoiceOver', toggle: false }], footer: 'VoiceOver speaks items on the screen.' }] }, { v: 'list', title: 'VoiceOver', back: 'Accessibility', groups: [{ rows: [{ label: 'VoiceOver', toggle: true }] }], t: 'VoiceOver' }],
  assistivetouch: [ACCESS('Touch'), { v: 'list', title: 'Touch', back: 'Accessibility', groups: [{ rows: [{ label: 'AssistiveTouch', value: 'Off' }, 'Haptic Touch', { label: 'Tap to Wake', toggle: true }] }] }, { v: 'list', title: 'AssistiveTouch', back: 'Touch', groups: [{ rows: [{ label: 'AssistiveTouch', toggle: true }], footer: 'AssistiveTouch allows you to use your iPhone if you have difficulty touching the screen.' }] }],
  'assistive-access': [ACCESS('Assistive Access'), { v: 'list', title: 'Assistive Access', back: 'Accessibility', groups: [{ rows: [{ label: 'Set Up Assistive Access', blue: true }], footer: 'Assistive Access makes iPhone simpler, with larger buttons and only the apps you choose.' }] }, appv('Settings', { title: 'Choose Apps', rows: [{ label: 'Calls', card: true }, { label: 'Messages', card: true }, { label: 'Camera', card: true }, { label: 'Photos', card: true }] }), appv('Settings', { title: 'Choose Apps', rows: [{ label: 'Calls', card: true }, { label: 'Messages', card: true }, { label: 'Camera', card: true }, { label: 'Photos', card: true }] })],
  'airdrop-send': [{ v: 'photos', t: 'Photo' }, photo(), { v: 'share' }, { v: 'share', airdrop: true, t: 'Maria’s iPhone' }],
  screenshot: { face: [dev('Side button'), home({ thumb: true, t: 'Screenshot' })], home: [dev('Home button'), home({ thumb: true, t: 'Screenshot' })] },
  'check-storage': [SET('General'), GENERAL('iPhone Storage'), { v: 'list', title: 'iPhone Storage', back: 'General', groups: [{ rows: [{ label: 'iPhone: 66.8 GB of 128 GB Used', chev: false }] }, { rows: [{ label: 'Photos', value: '21.4 GB' }, { label: 'Messages', value: '6.1 GB' }, { label: 'YouTube', value: '2.3 GB' }, { label: 'Weather', value: '120 MB' }] }] }],
  'icloud-backup': [home({ t: 'Settings' }), SET('Maria Kim'), { v: 'list', title: 'Apple Account', back: 'Settings', groups: [{ rows: ['Personal Information', 'Sign-In & Security', 'Payment & Shipping'] }, { icons: true, rows: ['iCloud', 'Family', 'Find My'] }] }, { v: 'list', title: 'iCloud', back: 'Apple Account', groups: [{ header: 'SAVED TO ICLOUD', rows: [{ label: 'Photos', value: 'On' }, { label: 'iCloud Drive', value: 'On' }, { label: 'iCloud Backup', value: 'On' }] }] }, { v: 'list', title: 'iCloud Backup', back: 'iCloud', groups: [{ rows: [{ label: 'Back Up This iPhone', toggle: true }] }, { rows: [{ label: 'Back Up Now', blue: true }], footer: 'Last successful backup: Yesterday at 2:00 AM' }] }],
  'medical-id': [home({ t: 'Health' }), appv('Health', { title: 'Summary', avatar: true, rows: [{ label: 'Steps', value: '4,210', card: true }, { label: 'Heart Rate', value: '72 BPM', card: true }], t: 'Profile' }), appv('Health', { title: 'Maria Kim', rows: [{ label: 'Health Details', card: true }, { label: 'Medical ID', card: true }] }), { v: 'list', title: 'Medical ID', back: 'Profile', right: 'Edit', groups: [{ rows: [{ label: 'Medical Conditions', value: '', chev: false }, { label: 'Medications', value: '', chev: false }, { label: 'Blood Type', value: '', chev: false }] }] }, { v: 'list', title: 'Medical ID', right: 'Done', groups: [{ rows: [{ label: 'Medical Conditions', value: 'Diabetes', chev: false }, { label: 'Medications', value: 'Metformin', chev: false }, { label: 'Blood Type', value: 'A+', chev: false }] }], keyboard: kbd }, { v: 'list', title: 'Medical ID', right: 'Done', groups: [{ rows: [{ label: 'Show When Locked', toggle: true }], footer: 'Your Medical ID can be viewed when iPhone is locked by tapping Emergency, then Medical ID.' }] }, { v: 'list', title: 'Medical ID', right: 'Done', groups: [{ rows: [{ label: 'Show When Locked', toggle: true }] }] }],
  'maps-search': [home({ t: 'Maps' }), appv('Maps', { search: 'Search Maps', rows: [] }), appv('Maps', { title: 'Seoul Station', rows: [{ label: 'Seoul Station', card: true }, { label: 'Seoul Station Exit 1', card: true }], keyboard: kbd })],
  'find-my': [home({ t: 'Find My' }), appv('Find My', { title: 'Find My', tabs: ['People', 'Devices', 'Items', 'Me'], tab: 0 }), appv('Find My', { title: 'Devices', rows: [{ label: 'Maria’s iPhone', card: true }, { label: 'Maria’s iPad', card: true }], tabs: ['People', 'Devices', 'Items', 'Me'], tab: 1, t: 'Maria’s iPhone' }), appv('Find My', { title: 'Maria’s iPhone', rows: [{ label: 'Play Sound', card: true, blue: true }, { label: 'Directions', card: true }, { label: 'Mark As Lost', card: true }] })],
  'siri-setup': [SET2('Siri'), { v: 'list', title: 'Siri', back: 'Settings', groups: [{ rows: [{ label: 'Talk to Siri', value: 'Off' }, { label: 'Press Side Button for Siri', toggle: true }] }, { rows: [{ label: 'Language', value: 'English' }, { label: 'Siri Voice', value: 'American' }] }] }, appv('Siri', { bubble: 'Say “Siri, what’s the weather today?”', orb: true })],
  'siri-voice': [appv('Siri', { bubble: 'Siri', orb: true }), appv('Siri', { bubble: 'Tomorrow will be sunny, with a high of 24°.', orb: true })],
  'emergency-sos': [{ v: 'list', title: 'Emergency SOS', back: 'Settings', groups: [{ rows: [{ label: 'Call with Hold and Release', toggle: true }, { label: 'Call with 5 Button Presses', toggle: true }, { label: 'Call Quietly', toggle: false }] }] }, { v: 'power' }, SET2('Emergency SOS')],
  'frozen-screen': [{ v: 'power', t: 'slide to power off', a: 'swipe' }, { v: 'black', logo: true }],
  'not-charging': [dev('Charging port', { port: true, cable: true }), dev('', { port: true, cable: true }), dev('Charging port', { port: true }), appv('Apple Support', { title: 'Apple Support', rows: [{ label: 'Get Support', card: true }, { label: 'Book a Repair', card: true }] })],
};
