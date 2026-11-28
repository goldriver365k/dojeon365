// WhatsApp lessons — English step cards, part 2 (the 110 lessons after the 50 essentials).
// Same rules as lessons-en.mjs: one action per card, fictional names and numbers, reconstructed screens.
const home = (x = {}) => ({ v: 'home', ...x });
const store = (x = {}) => ({ v: 'store', ...x });
const tab = (t, x = {}) => ({ v: 'tab', tab: t, ...x });
const room = (x = {}) => ({ v: 'room', name: 'Maria', ...x });
const list = (title, rows, x = {}) => ({ v: 'list', title, rows: rows.map((r) => (typeof r === 'string' ? { label: r } : r)), ...x });
const sheet = (base, items, x = {}) => ({ v: 'sheet', base, items, ...x });
const dialog = (base, title, text, buttons = ['Cancel', 'OK'], x = {}) => ({ v: 'dialog', base, title, text, buttons, ...x });
const form = (x) => ({ v: 'form', ...x });
const info = (title, lines, warn = false) => ({ v: 'info', title, lines, warn });
const pick = (title, items, x = {}) => ({ v: 'pick', title, items: items.map((n) => (typeof n === 'string' ? { name: n } : n)), ...x });

const MSGS = [{ date: 'Today' }, { text: 'Did you eat dinner?' }, { me: true, text: 'Yes, I did. And you?', ticks: 'blue' }];
const GROUP = { name: 'Family', group: true, sub: 'Maria, John, Tom, You', msgs: [{ date: 'Today' }, { from: 'John', text: 'Lunch together on Saturday?' }, { me: true, text: 'Yes, see you!', ticks: 'grey' }] };
const MENU = ['New group', 'New community', 'Broadcast lists', 'Linked devices', 'Starred', 'Settings'];
const SETTINGS_ROWS = [{ label: 'Account', sub: 'Security notifications, change number', icon: true }, { label: 'Privacy', sub: 'Block contacts, disappearing messages', icon: true }, { label: 'Chats', sub: 'Theme, wallpapers, chat history', icon: true }, { label: 'Notifications', sub: 'Message, group & call tones', icon: true }, { label: 'Storage and data', sub: 'Network usage, auto-download', icon: true }, { label: 'App language', sub: 'English (device’s language)', icon: true }, { label: 'Help', sub: 'Help center, contact us', icon: true }];
const SETTINGS = list('Settings', SETTINGS_ROWS, { profile: 'Anna' });
const PRIVACY = list('Privacy', [{ label: 'Last seen and online', value: 'Everyone' }, { label: 'Profile photo', value: 'Everyone' }, { label: 'About', value: 'Everyone' }, { label: 'Status', value: 'My contacts' }, { label: 'Read receipts', toggle: true }, { label: 'App lock', value: 'Off' }, { label: 'Blocked contacts', value: 'None' }, { label: 'Privacy checkup' }]);
const CHATS_SET = list('Chats', [{ section: 'Display' }, { label: 'Theme', value: 'System default' }, { label: 'Default chat theme' }, { section: 'Chat settings' }, { label: 'Enter is send', toggle: false }, { label: 'Font size', value: 'Medium' }, { label: 'Chat backup' }, { label: 'Transfer chats' }]);
const NOTIF = list('Notifications', [{ label: 'Conversation tones', toggle: true }, { section: 'Messages' }, { label: 'Notification tone', value: 'Default' }, { label: 'Vibrate', value: 'Default' }, { label: 'Use high priority notifications', toggle: true }, { section: 'Groups' }, { label: 'Group notification tone', value: 'Default' }]);
const ACCOUNT = list('Account', ['Security notifications', 'Passkeys', 'Email address', 'Two-step verification', 'Change number', 'Request account info', 'Delete account']);
const BACKUP = list('Chat backup', [{ label: 'Back up', sub: 'Last backup: Yesterday 02:00' }, { label: 'Google Account', value: 'anna@example.com' }, { label: 'Frequency', value: 'Daily' }, { label: 'End-to-end encrypted backup', value: 'Off' }, { label: 'Include videos', toggle: false }]);
const toSettings = [
  ['On the Chats screen, tap the three dots at the top right.', tab('chats'), 'More options'],
  ['Tap “Settings”.', tab('chats', { menu: MENU }), 'Settings'],
];
const set = (row) => [...toSettings, [`Tap “${row}”.`, SETTINGS, row]];
const openChat = (name = 'Maria') => [['On the Chats screen, tap the chat with ' + name + '.', tab('chats'), name]];
const chatMenu = (r, items) => [['Tap the three dots at the top right.', r, 'More options'], ...(items ? [] : [])];
const ATTACH = room({ msgs: MSGS, attach: true });

export const LESSONS_EN_2 = {
  /* 01 */
  'w01-language': { menuPath: 'First start › language list', steps: [
    ['When WhatsApp opens for the first time, a list of languages appears.', list('Choose your language', [{ label: 'English', radio: true }, { label: 'Español', radio: false }, { label: 'Português (Brasil)', radio: false }, { label: 'Deutsch', radio: false }, { label: 'Français', radio: false }], { back: false, button: 'Next' }), null],
    ['Tap your language.', list('Choose your language', [{ label: 'English', radio: true }, { label: 'Español', radio: false }, { label: 'Português (Brasil)', radio: false }, { label: 'Deutsch', radio: false }], { back: false, button: 'Next' }), 'English', { hint: 'You can change it later in Settings › App language.' }],
    ['Tap “Next”.', list('Choose your language', [{ label: 'English', radio: true }, { label: 'Español', radio: false }], { back: false, button: 'Next' }), 'Next'],
  ] },
  'w01-profile-photo-setup': { menuPath: 'Profile info › camera circle', steps: [
    ['On the Profile info screen, tap the round camera picture.', form({ title: 'Profile info', back: false, lead: 'Please provide your name and an optional profile photo.', photo: true, fields: [{ value: 'Anna', name: 'Name box' }], button: 'Next' }), 'Add photo'],
    ['Tap “Gallery”.', sheet(form({ title: 'Profile info', back: false, photo: true }), ['Camera', 'Gallery'], { title: 'Profile photo' }), 'Gallery'],
    ['Tap the photo you want.', { v: 'gallery', selected: [] }, 'Photo 4'],
    ['Tap “Done”.', form({ title: 'Profile info', back: false, photo: true, fields: [{ value: 'Anna', name: 'Name box' }], buttons: ['Done'] }), 'Done', { hint: 'Your photo is optional. You can add it later.' }],
  ] },
  'w01-update': { menuPath: 'Play Store › WhatsApp › Update', steps: [
    ['Open “Play Store” from your home screen.', home(), 'Play Store'],
    ['Search for “WhatsApp” and open WhatsApp Messenger.', store({ button: 'Update', uninstall: false }), 'Developer name'],
    ['Tap “Update”.', store({ button: 'Update', uninstall: false }), 'Update', { hint: 'If you only see “Open”, you already have the newest version.' }],
  ] },
  /* 02 */
  'w02-add-by-number': { menuPath: 'Chats › New chat › New contact', steps: [
    ['Tap the green New chat button.', tab('chats'), 'New chat'],
    ['Tap “New contact”.', pick('Select contact', ['John', 'Maria'], { top: ['New group', 'New contact', 'New community'] }), 'New contact'],
    ['Type the name.', form({ title: 'New contact', fields: [{ label: 'First name', value: 'Lucy' }, { code: '+1', value: '' }], button: 'Save' }), 'First name'],
    ['Type the phone number.', form({ title: 'New contact', fields: [{ label: 'First name', value: 'Lucy' }, { code: '+1', value: '555 0177' }], button: 'Save' }), 'Phone number'],
    ['Tap “Save”.', form({ title: 'New contact', fields: [{ label: 'First name', value: 'Lucy' }, { code: '+1', value: '555 0177' }], button: 'Save' }), 'Save'],
  ] },
  'w02-add-international': { menuPath: 'New contact › country code', steps: [
    ['Tap the green New chat button.', tab('chats'), 'New chat'],
    ['Tap “New contact”.', pick('Select contact', ['John', 'Maria'], { top: ['New group', 'New contact', 'New community'] }), 'New contact'],
    ['Tap the country code to choose the friend’s country.', form({ title: 'New contact', fields: [{ label: 'First name', value: 'Paolo' }, { code: '+1', value: '' }], button: 'Save' }), 'Phone number', { hint: 'Every country has a code, for example +39 for Italy.' }],
    ['Type the number without the first 0.', form({ title: 'New contact', fields: [{ label: 'First name', value: 'Paolo' }, { code: '+39', value: '312 345 6789' }], button: 'Save' }), 'Phone number'],
    ['Tap “Save”.', form({ title: 'New contact', fields: [{ label: 'First name', value: 'Paolo' }, { code: '+39', value: '312 345 6789' }], button: 'Save' }), 'Save'],
  ] },
  'w02-add-by-qr': { menuPath: 'New chat › QR icon next to New contact', steps: [
    ['Tap the green New chat button.', tab('chats'), 'New chat'],
    ['Tap “New contact”.', pick('Select contact', ['John', 'Maria'], { top: ['New group', 'New contact', 'New community'] }), 'New contact'],
    ['Tap the QR code picture to scan.', { v: 'qr' }, 'Scan code'],
    ['Point the camera at your friend’s QR code.', { v: 'qr', scan: true }, 'Scan area'],
    ['Tap “Add to contacts”.', form({ heading: 'Lucy', lead: 'WhatsApp contact', buttons: ['Add to contacts'] }), 'Add to contacts'],
  ] },
  'w02-my-qr': { menuPath: 'Settings › QR icon', steps: [
    ...toSettings,
    ['Tap the small QR icon next to your name.', SETTINGS, 'QR code'],
    ['Show this code to a friend so they can add you.', { v: 'qr' }, 'My QR code'],
  ] },
  'w02-invite-friend': { menuPath: 'Settings › Invite a friend', steps: [
    ...toSettings,
    ['Near the bottom, tap “Invite a friend”.', list('Settings', [...SETTINGS_ROWS.slice(4), { label: 'Invite a friend', icon: true }]), 'Invite a friend'],
    ['Tap how you want to send the invitation, for example “Messages”.', sheet(SETTINGS, ['Messages', 'Email', 'More']), 'Messages'],
  ] },
  'w02-rename-contact': { menuPath: 'Chat › contact name › More options › Edit', steps: [
    ...openChat('John'),
    ['Tap the name at the top.', room({ name: 'John', msgs: MSGS }), 'Contact name'],
    ['Tap the three dots at the top right.', { v: 'profile', name: 'John' }, 'More options'],
    ['Tap “Edit”.', { v: 'room', name: '', msgs: [], menu: ['Share', 'Edit', 'View in address book', 'Verify security code'] }, 'Edit'],
    ['Change the name.', form({ title: 'Edit contact', fields: [{ label: 'First name', value: 'John (neighbour)' }], button: 'Save' }), 'First name'],
    ['Tap “Save”.', form({ title: 'Edit contact', fields: [{ label: 'First name', value: 'John (neighbour)' }], button: 'Save' }), 'Save'],
  ] },
  /* 03 */
  'w03-paste': { menuPath: 'Chat › hold Message box › Paste', steps: [
    ...openChat(),
    ['Touch and hold the message box.', room({ msgs: MSGS }), 'Message box'],
    ['Tap “Paste”.', sheet(room({ msgs: MSGS }), ['Paste', 'Clipboard']), 'Paste'],
    ['Tap the green send arrow.', room({ msgs: MSGS, input: 'Did you eat dinner?' }), 'Send'],
  ] },
  'w03-send-link': { menuPath: 'Chat › paste link › Send', steps: [
    ...openChat(),
    ['Touch and hold the message box.', room({ msgs: MSGS }), 'Message box'],
    ['Tap “Paste” to insert the copied link.', sheet(room({ msgs: MSGS }), ['Paste', 'Clipboard']), 'Paste'],
    ['Tap the green send arrow.', room({ msgs: MSGS, input: 'https://example.com/weather' }), 'Send', { hint: 'Never open links from people you don’t know.' }],
  ] },
  'w03-star-message': { menuPath: 'Chat › hold message › Star', steps: [
    ...openChat(),
    ['Touch and hold the important message.', room({ msgs: MSGS }), 'Received message'],
    ['Tap the star at the top.', room({ select: true, msgs: [{ text: 'Did you eat dinner?', selected: true }] }), 'Star'],
    ['Find starred messages in the three-dot menu › “Starred”.', tab('chats', { menu: MENU }), 'Starred'],
  ] },
  'w03-disappearing': { menuPath: 'Chat › contact name › Disappearing messages', steps: [
    ...openChat(),
    ['Tap the name at the top.', room({ msgs: MSGS }), 'Contact name'],
    ['Tap “Disappearing messages”.', { v: 'profile', name: 'Maria' }, 'Disappearing messages'],
    ['Choose how long messages stay, for example “24 hours”.', list('Disappearing messages', [{ label: '24 hours', radio: false }, { label: '7 days', radio: false }, { label: '90 days', radio: false }, { label: 'Off', radio: true }]), '24 hours', { hint: 'New messages will disappear after that time. Old messages stay.' }],
  ] },
  /* 04 */
  'w04-view-photo': { menuPath: 'Chat › tap photo', steps: [
    ...openChat(),
    ['Tap the photo in the chat.', room({ msgs: [{ text: 'Look at the garden!' }, { photo: true, label: 'Received photo' }] }), 'Received photo'],
    ['The photo fills the screen. Spread two fingers to zoom in.', { v: 'preview', viewer: true, zoom: true }, 'Photo'],
  ] },
  'w04-send-hd-video': { menuPath: 'Attach › Gallery › video › HD', steps: [
    ...openChat(),
    ['Tap the paper clip in the message box.', room({ msgs: MSGS }), 'Attach'],
    ['Tap “Gallery”.', ATTACH, 'Gallery'],
    ['Tap a video.', { v: 'gallery', selected: [], video: true }, 'Photo 2'],
    ['Tap “HD” at the top.', { v: 'preview', video: true }, 'HD'],
    ['Tap “HD quality”.', { v: 'preview', video: true, hdSheet: true }, 'HD quality'],
    ['Tap “Done”.', { v: 'preview', video: true, hdSheet: true, hd: true }, 'Done'],
    ['Tap the green send button.', { v: 'preview', video: true, hd: true }, 'Send'],
  ] },
  'w04-save-video': { menuPath: 'Chat › video › More options › Save', steps: [
    ...openChat(),
    ['Tap the video you received.', room({ msgs: [{ photo: true, video: true, label: 'Received video' }] }), 'Received video'],
    ['Tap the three dots at the top right.', { v: 'preview', viewer: true, video: true }, 'More options'],
    ['Tap “Save”.', { v: 'preview', viewer: true, video: true, menu: ['All media', 'Show in chat', 'Share', 'Save'] }, 'Save'],
  ] },
  'w04-open-document': { menuPath: 'Chat › tap document', steps: [
    ...openChat(),
    ['Tap the document in the chat.', room({ msgs: [{ doc: 'Garden plan.pdf', label: 'Received document' }] }), 'Received document', { hint: 'Do not open files from people you don’t know.' }],
    ['It opens in an app that can show it.', info('Opening a document', ['PDF files open in a PDF viewer.', 'If your phone asks which app to use, choose one you know.']), null],
  ] },
  'w04-media-links-docs': { menuPath: 'Chat › More options › Media, links, and docs', steps: [
    ...openChat(),
    ['Tap the three dots at the top right.', room({ msgs: MSGS }), 'More options'],
    ['Tap “Media, links, and docs”.', room({ msgs: MSGS, menu: ['View contact', 'Search', 'Media, links, and docs', 'Mute notifications', 'More'] }), 'Media, links, and docs'],
    ['Photos, links and documents are on separate tabs.', { v: 'gallery', title: 'Media', selected: [] }, null],
  ] },
  /* 05 */
  'w05-hands-free-voice': { menuPath: 'Chat › hold microphone › slide up to lock', steps: [
    ...openChat(),
    ['Touch and hold the green microphone.', room({ msgs: MSGS }), 'Microphone'],
    ['Slide your finger up to the lock.', room({ msgs: MSGS, recording: true }), 'Lock recording'],
    ['Now you can let go and keep talking. Tap send when finished.', room({ msgs: MSGS, recording: true, locked: true }), 'Send'],
  ] },
  'w05-pause-voice': { menuPath: 'Locked recording › Pause', steps: [
    ['While recording hands-free, tap the pause button.', room({ msgs: MSGS, recording: true, locked: true }), 'Pause recording'],
    ['Tap it again to continue recording.', room({ msgs: MSGS, recording: true, locked: true, paused: true }), 'Resume recording'],
  ] },
  'w05-preview-voice': { menuPath: 'Locked recording › Pause › Play', steps: [
    ['While recording hands-free, tap the pause button.', room({ msgs: MSGS, recording: true, locked: true }), 'Pause recording'],
    ['Tap play to hear your message before sending.', room({ msgs: MSGS, recording: true, locked: true, paused: true }), 'Resume recording', { hint: 'Tap the bin to delete it if you want to try again.' }],
    ['Tap the green send arrow.', room({ msgs: MSGS, recording: true, locked: true, paused: true }), 'Send'],
  ] },
  'w05-voice-speed': { menuPath: 'Voice message › 1×', steps: [
    ...openChat(),
    ['Start playing the voice message.', room({ msgs: [{ voice: '0:45', speed: '1×' }] }), 'Received voice message'],
    ['Tap “1×” to play faster (1.5× or 2×).', room({ msgs: [{ voice: '0:45', speed: '1×' }] }), 'Playback speed'],
  ] },
  /* 06 */
  'w06-group-call': { menuPath: 'Group › phone icon', steps: [
    ...openChat('Family'),
    ['Tap the phone icon at the top of the group chat.', room(GROUP), 'Voice call'],
    ['Tap the people you want to call.', pick('Start group call', [{ name: 'Maria', checked: true }, { name: 'John', checked: true }, 'Tom'], { next: 'Call' }), 'Tom'],
    ['Tap the call button.', pick('Start group call', [{ name: 'Maria', checked: true }, { name: 'John', checked: true }, { name: 'Tom', checked: true }], { next: 'Call' }), 'Call'],
  ] },
  'w06-share-screen': { menuPath: 'Video call › Share screen', steps: [
    ['During a video call, tap “Share screen”.', { v: 'call', kind: 'video', state: 'talking' }, 'Share screen'],
    ['Tap “Start now” to confirm.', dialog({ v: 'call', kind: 'video', state: 'talking' }, 'Start recording or casting with WhatsApp?', 'WhatsApp will have access to everything on your screen.', ['Cancel', 'Start now']), 'Start now', { hint: 'Close private apps first. Your friend sees everything on your screen.' }],
  ] },
  /* 07 */
  'w07-group-link': { menuPath: 'Group info › Invite via link', steps: [
    ...openChat('Family'),
    ['Tap the group name at the top.', room(GROUP), 'Contact name'],
    ['Tap “Invite via link”.', { v: 'profile', name: 'Family', group: true }, 'Invite via link'],
    ['Tap “Send link via WhatsApp”.', list('Invite via link', [{ label: 'Send link via WhatsApp' }, { label: 'Copy link' }, { label: 'Share link' }, { label: 'QR code' }, { label: 'Reset link', danger: true }]), 'Send link via WhatsApp'],
  ] },
  'w07-join-by-link': { menuPath: 'Chat › group link › Join group', steps: [
    ...openChat(),
    ['Tap the group invite link someone sent you.', room({ msgs: [{ text: 'Join our group: chat.whatsapp.com/example' }] }), 'Received message', { hint: 'Only join groups from people you know.' }],
    ['Tap “Join group”.', form({ heading: 'Walking club', lead: 'Group · 12 members', buttons: ['Join group'] }), 'Join group'],
  ] },
  'w07-rename-group': { menuPath: 'Group info › pencil next to name', steps: [
    ...openChat('Family'),
    ['Tap the group name at the top.', room(GROUP), 'Contact name'],
    ['Tap the group name.', { v: 'profile', name: 'Family', group: true }, 'Name'],
    ['Type the new name.', form({ title: 'Enter group name', fields: [{ value: 'Family ❤', name: 'Group name' }], button: 'OK' }), 'Group name'],
    ['Tap “OK”.', form({ title: 'Enter group name', fields: [{ value: 'Family ❤', name: 'Group name' }], button: 'OK' }), 'OK'],
  ] },
  'w07-group-photo': { menuPath: 'Group info › group photo', steps: [
    ...openChat('Family'),
    ['Tap the group name at the top.', room(GROUP), 'Contact name'],
    ['Tap the group photo.', { v: 'profile', name: 'Family', group: true }, 'Profile photo'],
    ['Tap “Gallery”.', sheet({ v: 'profile', name: 'Family', group: true }, ['Camera', 'Gallery', 'Emoji & stickers'], { title: 'Group icon' }), 'Gallery'],
    ['Tap the photo you want.', { v: 'gallery', selected: [] }, 'Photo 6'],
  ] },
  'w07-group-members': { menuPath: 'Group info › members', steps: [
    ...openChat('Family'),
    ['Tap the group name at the top.', room(GROUP), 'Contact name'],
    ['Scroll down to see everyone in the group.', { v: 'profile', name: 'Family', group: true, rows: [{ section: '4 members' }, { label: 'You' }, { label: 'Maria' }, { label: 'John', sub: 'Group admin' }, { label: 'Tom' }] }, null],
  ] },
  'w07-group-admin': { menuPath: 'Group info › member › Make group admin', steps: [
    ...openChat('Family'),
    ['Tap the group name at the top.', room(GROUP), 'Contact name'],
    ['Tap the person you want to make an admin.', { v: 'profile', name: 'Family', group: true, rows: [{ section: '4 members' }, { label: 'You', sub: 'Group admin' }, { label: 'Maria' }, { label: 'Tom' }] }, 'Maria'],
    ['Tap “Make group admin”.', sheet({ v: 'profile', name: 'Family', group: true }, ['Message Maria', 'View Maria', 'Make group admin', { label: 'Remove Maria', danger: true }]), 'Make group admin', { hint: 'Admins can add and remove people and change group settings.' }],
  ] },
  'w07-mention': { menuPath: 'Group › type @', steps: [
    ...openChat('Family'),
    ['Type “@” in the message box.', room({ ...GROUP, input: '@' }), 'Message box'],
    ['Tap the person’s name in the list.', pick('Mention', ['Maria', 'John', 'Tom']), 'John'],
    ['Type the rest of your message.', room({ ...GROUP, input: '@John can you come on Saturday?' }), 'Message box'],
    ['Tap the green send arrow.', room({ ...GROUP, input: '@John can you come on Saturday?' }), 'Send', { hint: 'The person you mention gets a notification.' }],
  ] },
  'w07-pin-message': { menuPath: 'Group › hold message › More › Pin', steps: [
    ...openChat('Family'),
    ['Touch and hold the message you want to pin.', room(GROUP), 'Received message'],
    ['Tap the three dots at the top right.', room({ ...GROUP, select: true, msgs: [{ from: 'John', text: 'Lunch together on Saturday?', selected: true }] }), 'More options'],
    ['Tap “Pin”.', room({ ...GROUP, select: true, msgs: [{ from: 'John', text: 'Lunch together on Saturday?', selected: true }], menu: ['Info', 'Copy', 'Pin', 'Report'] }), 'Pin'],
    ['The message stays at the top of the chat.', room({ ...GROUP, pinnedMsg: 'Lunch together on Saturday?' }), 'Pinned message'],
  ] },
  /* 08 */
  'w08-view-profile': { menuPath: 'Settings › your name', steps: [
    ...toSettings,
    ['Tap your name at the top.', SETTINGS, 'Profile'],
    ['Here you see your photo, name, About and phone number.', list('Profile', [{ label: 'Name', sub: 'Anna' }, { label: 'About', sub: 'Hey there! I am using WhatsApp.' }, { label: 'Phone', sub: '+1 555 0100' }], { profile: 'Anna' }), null],
  ] },
  'w08-change-photo': { menuPath: 'Settings › Profile › photo', steps: [
    ...toSettings,
    ['Tap your name at the top.', SETTINGS, 'Profile'],
    ['Tap your photo.', list('Profile', [{ label: 'Name', sub: 'Anna' }, { label: 'About', sub: 'Hey there!' }], { profile: 'Anna' }), 'Profile'],
    ['Tap “Gallery”.', sheet(list('Profile', []), ['Camera', 'Gallery', 'Avatar', { label: 'Remove photo', danger: true }], { title: 'Profile photo' }), 'Gallery'],
    ['Tap the photo you want.', { v: 'gallery', selected: [] }, 'Photo 3'],
  ] },
  'w08-change-name': { menuPath: 'Settings › Profile › Name', steps: [
    ...toSettings,
    ['Tap your name at the top.', SETTINGS, 'Profile'],
    ['Tap “Name”.', list('Profile', [{ label: 'Name', sub: 'Anna' }, { label: 'About', sub: 'Hey there!' }, { label: 'Phone', sub: '+1 555 0100' }]), 'Name'],
    ['Type your new name.', form({ title: 'Name', fields: [{ value: 'Anna B.', name: 'Name box' }], button: 'Save' }), 'Name box'],
    ['Tap “Save”.', form({ title: 'Name', fields: [{ value: 'Anna B.', name: 'Name box' }], button: 'Save' }), 'Save'],
  ] },
  'w08-change-about': { menuPath: 'Settings › Profile › About', steps: [
    ...toSettings,
    ['Tap your name at the top.', SETTINGS, 'Profile'],
    ['Tap “About”.', list('Profile', [{ label: 'Name', sub: 'Anna' }, { label: 'About', sub: 'Hey there! I am using WhatsApp.' }]), 'About'],
    ['Tap a ready-made line, for example “Available”.', list('About', [{ section: 'Select About' }, { label: 'Available', radio: false }, { label: 'Busy', radio: false }, { label: 'At work', radio: false }, { label: 'Hey there! I am using WhatsApp.', radio: true }]), 'Available'],
  ] },
  'w08-text-status': { menuPath: 'Updates › pencil', steps: [
    ['Tap “Updates” at the bottom.', tab('chats'), 'Updates tab'],
    ['Tap “My status”.', tab('updates'), 'My status'],
    ['Type a short message.', { v: 'status', mode: 'text', text: 'Good morning, everyone!' }, 'Status text'],
    ['Tap the green send button.', { v: 'status', mode: 'text', text: 'Good morning, everyone!' }, 'Send', { hint: 'A status disappears after 24 hours.' }],
  ] },
  'w08-photo-status': { menuPath: 'Updates › camera', steps: [
    ['Tap “Updates” at the bottom.', tab('chats'), 'Updates tab'],
    ['Tap the camera button at the bottom right.', tab('updates'), 'Add status'],
    ['Tap a photo from your gallery.', { v: 'gallery', selected: [] }, 'Photo 1'],
    ['Tap the green send button.', { v: 'preview' }, 'Send'],
  ] },
  'w08-video-status': { menuPath: 'Updates › camera › video', steps: [
    ['Tap “Updates” at the bottom.', tab('chats'), 'Updates tab'],
    ['Tap the camera button at the bottom right.', tab('updates'), 'Add status'],
    ['Tap a video from your gallery.', { v: 'gallery', selected: [], video: true }, 'Photo 2'],
    ['Tap the green send button.', { v: 'preview', video: true }, 'Send'],
  ] },
  'w08-view-status': { menuPath: 'Updates › friend’s name', steps: [
    ['Tap “Updates” at the bottom.', tab('chats'), 'Updates tab'],
    ['Tap a friend with a green ring around their photo.', tab('updates'), 'Maria'],
    ['Their status plays. Tap the right side to skip ahead.', { v: 'status', mode: 'view', text: 'Lovely walk in the park today' }, null],
  ] },
  'w08-status-privacy': { menuPath: 'Updates › three dots › Status privacy', steps: [
    ['Tap “Updates” at the bottom.', tab('chats'), 'Updates tab'],
    ['Tap the three dots at the top right.', tab('updates'), 'More options'],
    ['Tap “Status privacy”.', tab('updates', { menu: ['Create channel', 'Status privacy', 'Starred', 'Settings'] }), 'Status privacy'],
    ['Choose who can see your status.', list('Status privacy', [{ label: 'My contacts', radio: true }, { label: 'My contacts except…', radio: false }, { label: 'Only share with…', radio: false }]), 'Only share with…'],
  ] },
  'w08-delete-status': { menuPath: 'Updates › My status › three dots › Delete', steps: [
    ['Tap “Updates” at the bottom.', tab('chats'), 'Updates tab'],
    ['Tap “My status”.', tab('updates'), 'My status'],
    ['Tap the three dots at the top right.', { v: 'status', mode: 'view', name: 'My status', mine: true, text: 'Good morning, everyone!' }, 'More options'],
    ['Tap “Delete”.', dialog({ v: 'status', mode: 'view', mine: true, text: 'Good morning, everyone!' }, 'Delete this status update?', 'It will also be deleted for everyone who received it.', ['Cancel', 'Delete'], { danger: true }), 'Delete'],
  ] },
  /* 09 */
  'w09-send-emoji': { menuPath: 'Chat › smiley › emoji', steps: [
    ...openChat(),
    ['Tap the smiley face in the message box.', room({ msgs: MSGS }), 'Emoji'],
    ['Tap an emoji to add it.', room({ msgs: MSGS, emoji: true }), 'Emoji 4'],
    ['Tap the green send arrow.', room({ msgs: MSGS, input: '🙏' }), 'Send'],
  ] },
  'w09-react': { menuPath: 'Chat › hold message › reaction', steps: [
    ...openChat(),
    ['Touch and hold the message.', room({ msgs: MSGS }), 'Received message'],
    ['Tap an emoji in the row that appears.', room({ msgs: MSGS, reactions: true, reactionsY: 90 }), 'React ❤️'],
    ['Your reaction shows under the message.', room({ msgs: [{ date: 'Today' }, { text: 'Did you eat dinner?', reaction: '❤️' }] }), 'Received message'],
  ] },
  'w09-send-sticker': { menuPath: 'Chat › smiley › Stickers', steps: [
    ...openChat(),
    ['Tap the smiley face in the message box.', room({ msgs: MSGS }), 'Emoji'],
    ['Tap “Stickers”.', room({ msgs: MSGS, emoji: true }), 'Stickers tab'],
    ['Tap a sticker. It is sent right away.', room({ msgs: MSGS, emoji: true, emojiTab: 2 }), 'Sticker 1'],
  ] },
  'w09-search-sticker': { menuPath: 'Chat › Stickers › search', steps: [
    ...openChat(),
    ['Tap the smiley face in the message box.', room({ msgs: MSGS }), 'Emoji'],
    ['Tap “Stickers”.', room({ msgs: MSGS, emoji: true }), 'Stickers tab'],
    ['Tap “Search stickers”.', room({ msgs: MSGS, emoji: true, emojiTab: 2 }), 'Search emoji'],
    ['Type a word such as “thank you”.', { v: 'search', query: 'thank you', results: [{ label: 'Thank you stickers', sub: 'Sticker pack' }] }, 'Thank you stickers'],
  ] },
  'w09-add-stickers': { menuPath: 'Stickers › + › Get more stickers', steps: [
    ...openChat(),
    ['Tap the smiley face in the message box.', room({ msgs: MSGS }), 'Emoji'],
    ['Tap “Stickers”.', room({ msgs: MSGS, emoji: true }), 'Stickers tab'],
    ['Tap the “+” to see more sticker packs.', room({ msgs: MSGS, emoji: true, emojiTab: 2 }), 'Create sticker'],
    ['Tap “Add” next to a pack you like.', { v: 'search', placeholder: 'Sticker packs', results: [{ label: 'Happy faces', sub: 'Free', mark: 'Add' }, { label: 'Flowers', sub: 'Free', mark: 'Add' }] }, 'Add'],
  ] },
  'w09-favourite-stickers': { menuPath: 'Chat › hold sticker › Add to favourites', steps: [
    ...openChat(),
    ['Touch and hold a sticker in the chat.', room({ msgs: [{ sticker: 0, label: 'Received sticker' }] }), 'Received sticker'],
    ['Tap “Add to favourites”.', sheet(room({ msgs: [{ sticker: 0 }] }), ['Add to favourites', 'View sticker pack']), 'Add to favourites', { hint: 'Favourite stickers appear under the star in the sticker panel.' }],
  ] },
  'w09-send-gif': { menuPath: 'Chat › smiley › GIF', steps: [
    ...openChat(),
    ['Tap the smiley face in the message box.', room({ msgs: MSGS }), 'Emoji'],
    ['Tap “GIF”.', room({ msgs: MSGS, emoji: true }), 'GIF tab'],
    ['Tap a GIF to choose it.', room({ msgs: MSGS, emoji: true, emojiTab: 1 }), 'GIF 1'],
    ['Tap the green send button.', { v: 'preview' }, 'Send'],
  ] },
  'w09-create-sticker': { menuPath: 'Stickers › Create', steps: [
    ...openChat(),
    ['Tap the smiley face in the message box.', room({ msgs: MSGS }), 'Emoji'],
    ['Tap “Stickers”.', room({ msgs: MSGS, emoji: true }), 'Stickers tab'],
    ['Tap the “+” box to create a sticker.', room({ msgs: MSGS, emoji: true, emojiTab: 2 }), 'Create sticker'],
    ['Tap a photo to turn into a sticker.', { v: 'gallery', selected: [] }, 'Photo 5'],
    ['Tap the green send button.', { v: 'preview' }, 'Send'],
  ] },
  /* 10 */
  'w10-about-channels': { menuPath: 'Updates › Channels', steps: [
    ['Channels are one-way news feeds from people or organisations.', info('What are channels?', ['You read updates; you cannot reply in the channel.', 'Your phone number is not shown to the channel.', 'Follow only channels you trust.']), null],
    ['You find channels in the “Updates” tab.', tab('updates'), 'Channels'],
  ] },
  'w10-find-channel': { menuPath: 'Updates › Explore', steps: [
    ['Tap “Updates” at the bottom.', tab('chats'), 'Updates tab'],
    ['Tap “Explore” next to Channels.', tab('updates'), 'Explore'],
    ['Tap the search icon and type a topic.', { v: 'search', query: 'garden', results: [{ label: 'Garden Tips', sub: '12K followers', mark: 'Follow' }] }, 'Garden Tips'],
  ] },
  'w10-follow-channel': { menuPath: 'Updates › Explore › Follow', steps: [
    ['In the Updates tab, tap “Explore”.', tab('updates'), 'Explore'],
    ['Tap “Follow” next to the channel.', { v: 'search', placeholder: 'Find channels', results: [{ label: 'Garden Tips', sub: '12K followers', mark: 'Follow' }, { label: 'Health News', sub: '48K followers', mark: 'Follow' }] }, 'Follow'],
  ] },
  'w10-read-channel': { menuPath: 'Updates › channel name', steps: [
    ['Tap “Updates” at the bottom.', tab('chats'), 'Updates tab'],
    ['Tap the channel’s name.', tab('updates'), 'Garden Tips'],
    ['Read the newest updates at the bottom.', room({ name: 'Garden Tips', sub: '12K followers', msgs: [{ date: 'Today' }, { text: 'Water your tomatoes early in the morning.' }, { text: 'This week: planting tulip bulbs.' }] }), null],
  ] },
  'w10-channel-alerts': { menuPath: 'Channel › bell', steps: [
    ['Open the channel from the Updates tab.', tab('updates'), 'Garden Tips'],
    ['Tap the three dots at the top right.', room({ name: 'Garden Tips', sub: '12K followers', msgs: [{ text: 'This week: planting tulip bulbs.' }] }), 'More options'],
    ['Tap “Mute” or “Unmute” to choose alerts.', room({ name: 'Garden Tips', msgs: [], menu: ['Channel info', 'Mute', 'Unfollow', 'Report'] }), 'Mute'],
  ] },
  'w10-unfollow-channel': { menuPath: 'Channel › three dots › Unfollow', steps: [
    ['Open the channel from the Updates tab.', tab('updates'), 'Garden Tips'],
    ['Tap the three dots at the top right.', room({ name: 'Garden Tips', sub: '12K followers', msgs: [{ text: 'This week: planting tulip bulbs.' }] }), 'More options'],
    ['Tap “Unfollow”.', room({ name: 'Garden Tips', msgs: [], menu: ['Channel info', 'Mute', 'Unfollow', 'Report'] }), 'Unfollow'],
    ['Tap “Unfollow” again to confirm.', dialog(room({ name: 'Garden Tips', msgs: [] }), 'Unfollow Garden Tips?', '', ['Cancel', 'Unfollow'], { danger: true }), 'Unfollow'],
  ] },
  'w10-about-communities': { menuPath: 'Communities tab', steps: [
    ['A community brings several related groups together, like a neighbourhood or club.', info('What are communities?', ['Admins can send announcements to everyone.', 'Members can join the groups they like.', 'Your number is visible to group members.']), null],
    ['Find communities in the “Communities” tab.', tab('communities'), 'Communities tab'],
  ] },
  'w10-create-community': { menuPath: 'Communities › New community', steps: [
    ['Tap “Communities” at the bottom.', tab('chats'), 'Communities tab'],
    ['Tap “New community”.', tab('communities'), 'New community'],
    ['Type a name and short description.', form({ title: 'New community', photo: true, fields: [{ value: 'Neighbourhood', name: 'Community name' }, { value: 'News for our street', name: 'Description' }], button: 'Next' }), 'Community name'],
    ['Tap the green arrow to continue.', form({ title: 'New community', photo: true, fields: [{ value: 'Neighbourhood', name: 'Community name' }], button: 'Next' }), 'Next'],
  ] },
  'w10-join-community': { menuPath: 'Community invite link › Join', steps: [
    ...openChat(),
    ['Tap the community invite link someone sent you.', room({ msgs: [{ text: 'Join our community: chat.whatsapp.com/example' }] }), 'Received message'],
    ['Tap “Join community”.', form({ heading: 'Grandparents club', lead: 'Community · 3 groups', buttons: ['Join community'] }), 'Join community'],
  ] },
  'w10-leave-community': { menuPath: 'Communities › community › three dots › Exit community', steps: [
    ['Tap “Communities” at the bottom.', tab('chats'), 'Communities tab'],
    ['Tap the community.', tab('communities'), 'Neighbourhood'],
    ['Tap the three dots at the top right.', list('Neighbourhood', ['Announcements', 'General', 'Garden group'], { right: [{ icon: 'dots', label: 'More options' }] }), 'More options'],
    ['Tap “Exit community”.', { v: 'room', name: '', msgs: [], menu: ['Community info', 'Exit community', 'Report'] }, 'Exit community'],
  ] },
  /* 11 */
  'w11-font-size': { menuPath: 'Settings › Chats › Font size', steps: [
    ...set('Chats'),
    ['Tap “Font size”.', CHATS_SET, 'Font size'],
    ['Choose “Small”, “Medium” or “Large”.', dialog(CHATS_SET, 'Font size', '', [], { options: ['Small', 'Medium', 'Large'], selected: 1 }), 'Medium'],
  ] },
  'w11-light-theme': { menuPath: 'Settings › Chats › Theme › Light', steps: [
    ...set('Chats'),
    ['Tap “Theme”.', CHATS_SET, 'Theme'],
    ['Tap “Light”.', dialog(CHATS_SET, 'Choose theme', '', ['Cancel', 'OK'], { options: ['System default', 'Light', 'Dark'], selected: 0 }), 'Light'],
    ['Tap “OK”.', dialog(CHATS_SET, 'Choose theme', '', ['Cancel', 'OK'], { options: ['System default', 'Light', 'Dark'], selected: 1 }), 'OK'],
  ] },
  'w11-dark-theme': { menuPath: 'Settings › Chats › Theme › Dark', steps: [
    ...set('Chats'),
    ['Tap “Theme”.', CHATS_SET, 'Theme'],
    ['Tap “Dark”.', dialog(CHATS_SET, 'Choose theme', '', ['Cancel', 'OK'], { options: ['System default', 'Light', 'Dark'], selected: 0 }), 'Dark', { hint: 'A dark screen can be easier on the eyes at night.' }],
    ['Tap “OK”.', dialog(CHATS_SET, 'Choose theme', '', ['Cancel', 'OK'], { options: ['System default', 'Light', 'Dark'], selected: 2 }), 'OK'],
  ] },
  'w11-chat-theme': { menuPath: 'Settings › Chats › Default chat theme', steps: [
    ...set('Chats'),
    ['Tap “Default chat theme”.', CHATS_SET, 'Default chat theme'],
    ['Tap a colour theme you like.', { v: 'gallery', title: 'Chat theme', selected: [] }, 'Photo 3'],
  ] },
  'w11-wallpaper': { menuPath: 'Chat › three dots › Wallpaper', steps: [
    ...openChat(),
    ['Tap the three dots at the top right.', room({ msgs: MSGS }), 'More options'],
    ['Tap “Wallpaper”.', room({ msgs: MSGS, menu: ['View contact', 'Search', 'Mute notifications', 'Wallpaper', 'More'] }), 'Wallpaper'],
    ['Tap a picture you like.', { v: 'gallery', title: 'Wallpaper', selected: [] }, 'Photo 2'],
  ] },
  'w11-notifications': { menuPath: 'Settings › Notifications', steps: [
    ...set('Notifications'),
    ['Check “Use high priority notifications” is on so messages pop up.', NOTIF, 'Use high priority notifications switch', { hint: 'Your phone’s own Settings › Notifications must also allow WhatsApp.' }],
  ] },
  'w11-notification-tone': { menuPath: 'Settings › Notifications › Notification tone', steps: [
    ...set('Notifications'),
    ['Tap “Notification tone”.', NOTIF, 'Notification tone'],
    ['Choose a sound.', list('Notification tone', [{ label: 'Default', radio: true }, { label: 'Chime', radio: false }, { label: 'Bell', radio: false }, { label: 'Silent', radio: false }], { button: 'OK' }), 'Bell'],
  ] },
  'w11-pin-chat': { menuPath: 'Chats › hold chat › pin', steps: [
    ['Touch and hold a chat in the Chats list.', tab('chats'), 'Maria'],
    ['Tap the pin at the top.', { v: 'room', select: true, actions: [['Pin', 'pin'], ['Delete', 'trash'], ['Mute', 'chat'], ['Archive', 'down'], ['More options', 'dots']], name: '', msgs: [] }, 'Pin'],
    ['The chat stays at the top of your list.', tab('chats', { pinned: 'Maria' }), 'Maria'],
  ] },
  'w11-archive-chat': { menuPath: 'Chats › hold chat › archive', steps: [
    ['Touch and hold the chat you want to hide.', tab('chats'), 'Walking club'],
    ['Tap the archive box at the top.', { v: 'room', select: true, actions: [['Pin', 'pin'], ['Delete', 'trash'], ['Mute', 'chat'], ['Archive', 'down'], ['More options', 'dots']], name: '', msgs: [] }, 'Archive', { hint: 'Archived chats are hidden, not deleted.' }],
  ] },
  'w11-unarchive-chat': { menuPath: 'Chats › Archived › hold chat › unarchive', steps: [
    ['Tap “Archived” at the top of the Chats list.', tab('chats', { archived: 1 }), 'Archived'],
    ['Touch and hold the chat.', list('Archived', [{ label: 'Walking club', sub: 'Meeting is on Saturday' }]), 'Walking club'],
    ['Tap the unarchive box at the top.', { v: 'room', select: true, actions: [['Unarchive', 'down'], ['Delete', 'trash'], ['More options', 'dots']], name: '', msgs: [] }, 'Unarchive'],
  ] },
  /* 12 */
  'w12-privacy-settings': { menuPath: 'Settings › Privacy', steps: [
    ...set('Privacy'),
    ['Check each line. It shows who can see your information.', PRIVACY, null],
  ] },
  'w12-last-seen': { menuPath: 'Settings › Privacy › Last seen and online', steps: [
    ...set('Privacy'),
    ['Tap “Last seen and online”.', PRIVACY, 'Last seen and online'],
    ['Choose who can see when you were last on WhatsApp.', list('Last seen and online', [{ section: 'Who can see my last seen' }, { label: 'Everyone', radio: true }, { label: 'My contacts', radio: false }, { label: 'Nobody', radio: false }]), 'My contacts'],
  ] },
  'w12-online-status': { menuPath: 'Settings › Privacy › Last seen and online', steps: [
    ...set('Privacy'),
    ['Tap “Last seen and online”.', PRIVACY, 'Last seen and online'],
    ['Under “Who can see when I’m online”, choose “Same as last seen”.', list('Last seen and online', [{ section: 'Who can see when I’m online' }, { label: 'Everyone', radio: true }, { label: 'Same as last seen', radio: false }]), 'Same as last seen'],
  ] },
  'w12-photo-privacy': { menuPath: 'Settings › Privacy › Profile photo', steps: [
    ...set('Privacy'),
    ['Tap “Profile photo”.', PRIVACY, 'Profile photo'],
    ['Choose “My contacts”.', list('Profile photo', [{ label: 'Everyone', radio: true }, { label: 'My contacts', radio: false }, { label: 'Nobody', radio: false }]), 'My contacts'],
  ] },
  'w12-read-receipts-setting': { menuPath: 'Settings › Privacy › Read receipts', steps: [
    ...set('Privacy'),
    ['Tap the “Read receipts” switch.', PRIVACY, 'Read receipts switch', { hint: 'If you turn it off, you also won’t see blue ticks from others.' }],
  ] },
  'w12-two-step': { menuPath: 'Settings › Account › Two-step verification', steps: [
    ...set('Account'),
    ['Tap “Two-step verification”.', ACCOUNT, 'Two-step verification'],
    ['Tap “Turn on”.', form({ title: 'Two-step verification', lead: 'For extra security, turn on two-step verification, which will require a PIN when registering your phone number with WhatsApp again.', button: 'Turn on' }), 'Turn on'],
    ['Type a 6-digit PIN you will remember.', form({ title: 'Two-step verification', lead: 'Enter a 6-digit PIN which you’ll be asked for when you register your phone number with WhatsApp.', fields: [{ otp: true, value: '' }], button: 'Next' }), 'Code box', { hint: 'Never tell this PIN to anyone.' }],
    ['Tap “Next”.', form({ title: 'Two-step verification', fields: [{ otp: true, value: '●●●●●●' }], button: 'Next' }), 'Next'],
  ] },
  'w12-app-lock': { menuPath: 'Settings › Privacy › App lock', steps: [
    ...set('Privacy'),
    ['Tap “App lock”.', PRIVACY, 'App lock'],
    ['Turn on “Unlock with biometric”.', list('App lock', [{ label: 'Unlock with biometric', toggle: false }, { label: 'Automatically lock', value: 'Immediately' }]), 'Unlock with biometric switch'],
    ['Touch the fingerprint sensor to confirm.', info('Confirm your fingerprint', ['Place your registered finger on the sensor.', 'From now on WhatsApp opens only with your fingerprint.']), null],
  ] },
  'w12-chat-lock': { menuPath: 'Chat › contact name › Chat lock', steps: [
    ...openChat(),
    ['Tap the name at the top.', room({ msgs: MSGS }), 'Contact name'],
    ['Tap “Chat lock”.', { v: 'profile', name: 'Maria', rows: [{ label: 'Notifications' }, { label: 'Media visibility' }, { label: 'Disappearing messages', sub: 'Off' }, { label: 'Chat lock' }] }, 'Chat lock'],
    ['Turn on the switch.', list('Chat lock', [{ label: 'Lock this chat with fingerprint', toggle: false }]), 'Lock this chat with fingerprint switch'],
  ] },
  'w12-linked-devices': { menuPath: 'Chats › three dots › Linked devices', steps: [
    ['Tap the three dots at the top right.', tab('chats'), 'More options'],
    ['Tap “Linked devices”.', tab('chats', { menu: MENU }), 'Linked devices'],
    ['Check the list. Every computer or tablet using your WhatsApp is here.', list('Linked devices', [{ section: 'Device status' }, { label: 'Windows', sub: 'Active now' }, { label: 'Chrome (Mac OS)', sub: 'Last active 3 days ago' }], { button: 'Link a device' }), null],
  ] },
  'w12-log-out-device': { menuPath: 'Linked devices › device › Log out', steps: [
    ['Tap the three dots at the top right.', tab('chats'), 'More options'],
    ['Tap “Linked devices”.', tab('chats', { menu: MENU }), 'Linked devices'],
    ['Tap the device you don’t recognise.', list('Linked devices', [{ label: 'Windows', sub: 'Active now' }, { label: 'Unknown browser', sub: 'Last active 1 hour ago' }]), 'Unknown browser'],
    ['Tap “Log out”.', dialog(list('Linked devices', []), 'Unknown browser', 'Last active 1 hour ago', ['Close', 'Log out'], { danger: true }), 'Log out'],
  ] },
  'w12-silence-callers': { menuPath: 'Settings › Privacy › Calls › Silence unknown callers', steps: [
    ...set('Privacy'),
    ['Tap “Calls”.', list('Privacy', [{ label: 'Last seen and online', value: 'Everyone' }, { label: 'Calls' }, { label: 'Read receipts', toggle: true }]), 'Calls'],
    ['Turn on “Silence unknown callers”.', list('Calls', [{ label: 'Silence unknown callers', sub: 'Calls from unknown numbers will be silenced', toggle: false }]), 'Silence unknown callers switch'],
  ] },
  'w12-privacy-checkup': { menuPath: 'Settings › Privacy › Privacy checkup', steps: [
    ...set('Privacy'),
    ['Tap “Privacy checkup”.', PRIVACY, 'Privacy checkup'],
    ['Go through each topic and choose what suits you.', list('Privacy checkup', [{ label: 'Choose who can contact you' }, { label: 'Control your personal info' }, { label: 'Add more privacy to your chats' }, { label: 'Add more protection to your account' }]), 'Choose who can contact you'],
  ] },
  /* 13 */
  'w13-about-backup': { menuPath: 'Safety lesson', steps: [
    ['A backup copies your chats to your Google account.', info('What chat backup does', ['Your messages and photos can be saved to Google Drive.', 'If you lose your phone, you can restore them.', 'You need the same phone number and Google account.']), null],
  ] },
  'w13-google-account': { menuPath: 'Settings › Chats › Chat backup › Google Account', steps: [
    ...set('Chats'),
    ['Tap “Chat backup”.', CHATS_SET, 'Chat backup'],
    ['Tap “Google Account”.', BACKUP, 'Google Account'],
    ['Tap your Google account.', list('Choose an account', [{ label: 'anna@example.com', radio: false }, { label: 'Add account', radio: false }]), 'anna@example.com'],
  ] },
  'w13-backup-now': { menuPath: 'Settings › Chats › Chat backup › Back up', steps: [
    ...set('Chats'),
    ['Tap “Chat backup”.', CHATS_SET, 'Chat backup'],
    ['Tap “Back up”.', BACKUP, 'Back up', { hint: 'Connect to Wi-Fi first. Backups can be large.' }],
  ] },
  'w13-auto-backup': { menuPath: 'Chat backup › Frequency', steps: [
    ...set('Chats'),
    ['Tap “Chat backup”.', CHATS_SET, 'Chat backup'],
    ['Tap “Frequency”.', BACKUP, 'Frequency'],
    ['Choose “Daily”.', dialog(BACKUP, 'Frequency', '', [], { options: ['Daily', 'Weekly', 'Monthly', 'Off'], selected: 1 }), 'Daily'],
  ] },
  'w13-encrypted-backup': { menuPath: 'Chat backup › End-to-end encrypted backup', steps: [
    ...set('Chats'),
    ['Tap “Chat backup”.', CHATS_SET, 'Chat backup'],
    ['Tap “End-to-end encrypted backup”.', BACKUP, 'End-to-end encrypted backup'],
    ['Tap “Turn on”.', form({ title: 'End-to-end encrypted backup', lead: 'Add a layer of protection to your backup.', button: 'Turn on' }), 'Turn on'],
    ['Create a password and keep it safe.', form({ title: 'Create password', fields: [{ masked: true, value: 'x', name: 'Password' }], button: 'Next', note: 'If you forget this password, you cannot restore your backup.' }), 'Next'],
  ] },
  'w13-backup-status': { menuPath: 'Settings › Chats › Chat backup', steps: [
    ...set('Chats'),
    ['Tap “Chat backup”.', CHATS_SET, 'Chat backup'],
    ['Look at “Last backup” to see when your chats were last saved.', BACKUP, 'Back up'],
  ] },
  'w13-restore': { menuPath: 'New phone › verify number › Restore', steps: [
    ['On the new phone, install WhatsApp and verify the same phone number.', form({ heading: 'Enter your phone number', fields: [{ country: 'United States' }, { code: '+1', value: '555 0100' }], button: 'Next' }), 'Next'],
    ['When WhatsApp finds a backup, tap “Restore”.', form({ title: 'Restore backup', back: false, lead: 'Backup found. Last backup: Yesterday 02:00.', buttons: ['Skip', 'Restore'] }), 'Restore', { hint: 'Use the same Google account that holds the backup.' }],
  ] },
  'w13-transfer': { menuPath: 'Old phone › Settings › Chats › Transfer chats', steps: [
    ['On the old phone, open Settings.', tab('chats', { menu: MENU }), 'Settings'],
    ['Tap “Chats”.', SETTINGS, 'Chats'],
    ['Tap “Transfer chats”.', CHATS_SET, 'Transfer chats'],
    ['Tap “Start”. The new phone will show the next steps.', form({ title: 'Transfer chats', lead: 'Keep both phones close together and connected to Wi-Fi.', button: 'Start' }), 'Start'],
  ] },
  'w13-change-number': { menuPath: 'Settings › Account › Change number', steps: [
    ...set('Account'),
    ['Tap “Change number”.', ACCOUNT, 'Change number'],
    ['Tap “Next”.', form({ title: 'Change number', lead: 'Changing your phone number will migrate your account info, groups and settings.', button: 'Next' }), 'Next'],
    ['Type your old number and your new number.', form({ title: 'Change number', fields: [{ code: '+1', value: '555 0100', name: 'Old number' }, { code: '+1', value: '555 0222', name: 'New number' }], button: 'Next' }), 'New number'],
  ] },
  'w13-backup-help': { menuPath: 'Safety lesson', steps: [
    ['If backup or restore does not work, check these things.', info('Backup and restore problems', ['Same phone number and same Google account?', 'Enough space in Google Drive and on the phone?', 'Connected to Wi-Fi?', 'For encrypted backups: the right password?']), null],
  ] },
  /* 14 */
  'w14-send-location': { menuPath: 'Chat › Attach › Location › Send your current location', steps: [
    ...openChat(),
    ['Tap the paper clip in the message box.', room({ msgs: MSGS }), 'Attach'],
    ['Tap “Location”.', ATTACH, 'Location'],
    ['Tap “Send your current location”.', { v: 'map' }, 'Send your current location'],
  ] },
  'w14-live-location': { menuPath: 'Attach › Location › Share live location', steps: [
    ...openChat(),
    ['Tap the paper clip in the message box.', room({ msgs: MSGS }), 'Attach'],
    ['Tap “Location”.', ATTACH, 'Location'],
    ['Tap “Share live location”.', { v: 'map' }, 'Share live location'],
    ['Choose how long, for example “1 hour”.', { v: 'map', duration: true, selected: 0 }, '1 hour'],
    ['Tap “Send”.', { v: 'map', duration: true, selected: 1 }, 'Send'],
  ] },
  'w14-stop-live-location': { menuPath: 'Chat › live location › Stop sharing', steps: [
    ...openChat(),
    ['Tap “Stop sharing” under your live location.', room({ msgs: [{ me: true, location: true, live: true, ticks: 'blue' }] }), 'Stop sharing'],
    ['Tap “Stop” to confirm.', dialog(room({ msgs: [] }), 'Stop sharing live location?', '', ['Cancel', 'Stop'], { danger: true }), 'Stop'],
  ] },
  'w14-send-contact': { menuPath: 'Chat › Attach › Contact', steps: [
    ...openChat(),
    ['Tap the paper clip in the message box.', room({ msgs: MSGS }), 'Attach'],
    ['Tap “Contact”.', ATTACH, 'Contact'],
    ['Tap the contact you want to share.', pick('Share contacts', ['John', 'Tom', 'Lucy']), 'Tom'],
    ['Tap the green send button.', pick('Share contacts', [{ name: 'Tom', checked: true }], { next: 'Send' }), 'Send'],
  ] },
  'w14-save-contact': { menuPath: 'Chat › contact card › Add contact', steps: [
    ...openChat(),
    ['Tap the contact card you received.', room({ msgs: [{ contact: 'Dr. Lee', label: 'Received contact' }] }), 'Received contact'],
    ['Tap “Add contact”.', form({ heading: 'Dr. Lee', lead: '+1 555 0188', buttons: ['Message', 'Add contact'] }), 'Add contact'],
  ] },
  'w14-location-safety': { menuPath: 'Safety lesson', steps: [
    ['Your location shows where you are, so be careful.', info('Keep your location private', ['Share it only with family and close friends.', 'Live location stops after the time you chose — stop it earlier if you like.', 'Never share it with strangers or in big groups.'], true), null],
  ] },
  /* 15 */
  'w15-bad-links': { menuPath: 'Safety lesson', steps: [
    ['Be careful with links that promise prizes or urgent problems.', room({ name: '+1 555 0199', sub: 'Not a contact', msgs: [{ sys: 'This sender is not in your contacts.' }, { text: 'Your parcel is waiting! Pay the fee here: parcel-check.example' }] }), 'Received message'],
    ['Do not tap the link. Delete the message.', info('Spot dangerous links', ['Strange spelling, prizes, or “pay a small fee”.', 'If a link asks for passwords or card numbers, stop.', 'Check with the company using its official app.'], true), null],
  ] },
  'w15-investment-scam': { menuPath: 'Safety lesson', steps: [
    ['Someone promises big profits with no risk.', room({ name: 'Investment Club', group: true, sub: '300 members', msgs: [{ from: 'Mentor Jay', text: 'Join today and double your money in one week!' }] }), 'Received message'],
    ['Do not send money. Leave the group and report it.', info('Avoid investment scams', ['No real investment guarantees quick, big profits.', 'Scammers use groups full of fake “happy members”.', 'Ask your bank or family before investing.'], true), null],
  ] },
  'w15-money-request': { menuPath: 'Safety lesson', steps: [
    ['A friend’s account asks you to send money urgently.', room({ name: 'John', msgs: [{ text: 'I’m stuck abroad, can you send me 500 right now?' }] }), 'Received message'],
    ['Call your friend first. Their account may be stolen.', info('Avoid money request scams', ['Call the person on the phone.', 'Do not send money only because of a message.', 'If the account is fake, report it.'], true), null],
  ] },
  'w15-report-spam': { menuPath: 'Chat › three dots › More › Report', steps: [
    ['Open the chat with the unknown number.', tab('chats', { chats: [['+1 555 0199', 'You won a prize!', '10:02', 1], ['Maria', 'Did you eat dinner?', '18:20', 0]] }), '+1 555 0199'],
    ['Tap the three dots at the top right.', room({ name: '+1 555 0199', sub: 'Not a contact', msgs: [{ text: 'You won a prize!' }] }), 'More options'],
    ['Tap “More”.', room({ name: '+1 555 0199', msgs: [], menu: ['View contact', 'Search', 'More'] }), 'More'],
    ['Tap “Report”.', room({ name: '+1 555 0199', msgs: [], menu: ['Report', 'Block', 'Clear chat'] }), 'Report'],
    ['Tap “Report” to confirm.', dialog(room({ name: '+1 555 0199', msgs: [] }), 'Report this contact to WhatsApp?', 'The most recent messages will be forwarded to WhatsApp.', ['Cancel', 'Report'], { danger: true }), 'Report'],
  ] },
  'w15-hacked': { menuPath: 'Safety lesson › re-register phone number', steps: [
    ['If friends get strange messages from you, act quickly.', info('If your account was stolen', ['Open WhatsApp and register your number again with the SMS code.', 'Turn on two-step verification.', 'Tell family and friends not to send money.', 'Contact WhatsApp support from Settings › Help.'], true), null],
    ['After you are back in, turn on two-step verification.', ACCOUNT, 'Two-step verification'],
  ] },
  'w15-wont-open': { menuPath: 'Troubleshooting', steps: [
    ['If WhatsApp won’t open, try these steps in order.', info('WhatsApp won’t open', ['Restart your phone.', 'Update WhatsApp in the Play Store.', 'Check that your phone has free storage.']), null],
    ['In the Play Store, tap “Update” if you see it.', store({ button: 'Update', uninstall: false }), 'Update'],
  ] },
  'w15-message-not-sent': { menuPath: 'Troubleshooting', steps: [
    ['A clock instead of ticks means the message is still waiting.', room({ msgs: [{ me: true, text: 'Are you coming?', ticks: 'one' }] }), 'Sent message'],
    ['Check your internet connection.', info('A message won’t send', ['Turn Wi-Fi or mobile data on.', 'Turn airplane mode off.', 'Restart your phone if it still waits.']), null],
  ] },
  'w15-photo-not-sent': { menuPath: 'Troubleshooting', steps: [
    ['If a photo won’t send, check these things.', info('A photo won’t send', ['Is your internet working?', 'Is the date and time on your phone correct?', 'Does WhatsApp have permission to use photos? (phone Settings › Apps › WhatsApp › Permissions)']), null],
  ] },
  'w15-call-problems': { menuPath: 'Troubleshooting', steps: [
    ['If calls won’t connect, check these things.', info('Calls won’t connect', ['Both phones need a good internet connection.', 'Try Wi-Fi instead of mobile data.', 'Check that WhatsApp may use the microphone and camera.']), null],
  ] },
  'w15-no-notifications': { menuPath: 'Settings › Notifications', steps: [
    ['If notifications don’t arrive, check these things.', info('Notifications don’t arrive', ['Is the chat muted?', 'Are WhatsApp notifications on in your phone’s Settings?', 'Is battery saver stopping WhatsApp?']), null],
    ...set('Notifications'),
    ['Turn on “Use high priority notifications”.', NOTIF, 'Use high priority notifications switch'],
  ] },
  'w15-free-storage': { menuPath: 'Settings › Storage and data › Manage storage', steps: [
    ...set('Storage and data'),
    ['Tap “Manage storage”.', list('Storage and data', [{ label: 'Manage storage', sub: '2.1 GB used' }, { label: 'Network usage' }, { label: 'Use less data for calls', toggle: false }]), 'Manage storage'],
    ['Tap a chat to review and delete big files.', list('Manage storage', [{ section: 'Chats' }, { label: 'Family', sub: '1.2 GB' }, { label: 'Walking club', sub: '540 MB' }]), 'Family', { hint: 'Deleted photos can’t come back. Save the ones you want first.' }],
  ] },
  'w15-help-center': { menuPath: 'Settings › Help › Help center', steps: [
    ...set('Help'),
    ['Tap “Help center”.', list('Help', ['Help center', 'Contact us', 'Terms and Privacy Policy', 'App info']), 'Help center'],
    ['Type your question to find an answer.', { v: 'search', placeholder: 'Search Help Center', results: [{ label: 'How to back up chats', sub: 'Help Center' }, { label: 'How to stay safe', sub: 'Help Center' }] }, 'How to back up chats', { hint: 'Official help: faq.whatsapp.com' }],
  ] },
};
