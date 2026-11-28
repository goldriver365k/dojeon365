// WhatsApp lessons — English step cards (base language). Screens are drawn by assets/whatsapp-screens.js.
// One action per card. Fictional names, chats and numbers only.
// The screens are reconstructions of WhatsApp for Android; every lesson stays unpublished until it is
// compared with the real app (in that language) and approved in /admin/whatsapp/.
// Step: [text, screen, target, { hint }]

const home = (x = {}) => ({ v: 'home', ...x });
const store = (x = {}) => ({ v: 'store', ...x });
const tab = (t, x = {}) => ({ v: 'tab', tab: t, ...x });
const room = (x = {}) => ({ v: 'room', name: 'Maria', ...x });
const list = (title, rows, x = {}) => ({ v: 'list', title, rows: rows.map((r) => (typeof r === 'string' ? { label: r } : r)), ...x });
const sheet = (base, items, x = {}) => ({ v: 'sheet', base, items, ...x });
const dialog = (base, title, text, buttons = ['Cancel', 'OK'], x = {}) => ({ v: 'dialog', base, title, text, buttons, ...x });
const form = (x) => ({ v: 'form', ...x });
const info = (title, lines, warn = false) => ({ v: 'info', title, lines, warn });

const MSGS = [{ date: 'Today' }, { text: 'Did you eat dinner?' }, { me: true, text: 'Yes, I did. And you?', ticks: 'blue' }];
const GROUP = { name: 'Family', group: true, sub: 'Maria, John, Tom, You', msgs: [{ date: 'Today' }, { from: 'John', text: 'Lunch together on Saturday?' }, { me: true, text: 'Yes, see you!', ticks: 'grey' }] };
const SETTINGS_ROWS = [{ label: 'Account', sub: 'Security notifications, change number', icon: true }, { label: 'Privacy', sub: 'Block contacts, disappearing messages', icon: true }, { label: 'Chats', sub: 'Theme, wallpapers, chat history', icon: true }, { label: 'Notifications', sub: 'Message, group & call tones', icon: true }, { label: 'Storage and data', sub: 'Network usage, auto-download', icon: true }, { label: 'App language', sub: 'English (device’s language)', icon: true }, { label: 'Help', sub: 'Help center, contact us', icon: true }];
const toSettings = [
  ['On the Chats screen, tap the three dots at the top right.', tab('chats'), 'More options'],
  ['Tap “Settings”.', tab('chats', { menu: ['New group', 'New community', 'Broadcast lists', 'Linked devices', 'Starred', 'Settings'] }), 'Settings'],
];
const openChat = (name = 'Maria') => [['On the Chats screen, tap the chat with ' + name + '.', tab('chats'), name]];
const ATTACH = room({ msgs: MSGS, attach: true });

export const LESSONS_EN = {
  /* ---------- 01 Install and register ---------- */
  'w01-download': { menuPath: 'Play Store › search “WhatsApp”', steps: [
    ['On your home screen, tap “Play Store”.', home(), 'Play Store'],
    ['Tap the search bar at the top.', store({ query: '' , button: 'Install' }), 'Search bar'],
    ['Check that the developer is “WhatsApp LLC”.', store({ button: 'Install' }), 'Developer name', { hint: 'Only install the official app. Never install WhatsApp from a link someone sends you.' }],
  ] },
  'w01-install': { menuPath: 'Play Store › WhatsApp Messenger › Install', steps: [
    ['On the WhatsApp Messenger page, tap “Install”.', store({ button: 'Install' }), 'Install'],
    ['Wait while it downloads and installs.', store({ button: 'Install', installing: true }), null, { hint: 'Use Wi-Fi if you can. It saves mobile data.' }],
    ['When it is finished, the button changes to “Open”.', store({ button: 'Open' }), 'Open'],
  ] },
  'w01-open': { menuPath: 'Home screen › WhatsApp', steps: [
    ['Find the green WhatsApp icon on your home screen.', home(), 'WhatsApp'],
    ['Tap it once to open WhatsApp.', tab('chats'), null],
  ] },
  'w01-phone-number': { menuPath: 'Welcome › Agree and continue › phone number', steps: [
    ['On the welcome screen, tap “Agree and continue”.', form({ heading: 'Welcome to WhatsApp', lead: 'Read our Privacy Policy. Tap “Agree and continue” to accept the Terms of Service.', button: 'Agree and continue' }), 'Agree and continue'],
    ['Tap the country name to choose your country.', form({ heading: 'Enter your phone number', lead: 'WhatsApp will need to verify your phone number.', fields: [{ country: 'United States' }, { code: '+1', value: '' }], button: 'Next' }), 'Choose a country'],
    ['Type your phone number.', form({ heading: 'Enter your phone number', lead: 'WhatsApp will need to verify your phone number.', fields: [{ country: 'United States' }, { code: '+1', value: '555 0100' }], button: 'Next' }), 'Phone number', { hint: 'This is a practice number. Use your own number on your phone.' }],
    ['Tap “Next”.', form({ heading: 'Enter your phone number', fields: [{ country: 'United States' }, { code: '+1', value: '555 0100' }], button: 'Next' }), 'Next'],
  ] },
  'w01-verify': { menuPath: 'Verify your number › 6-digit code', steps: [
    ['WhatsApp sends a 6-digit code by text message.', info('Your code is only for you', ['Look for a text message from WhatsApp.', 'Never tell this code to anyone — not even someone who says they work for WhatsApp.'], true), null],
    ['Type the 6 numbers into the code boxes.', form({ title: 'Verifying your number', back: false, lead: 'Waiting to automatically detect a 6-digit code sent by SMS.', fields: [{ otp: true, value: '' }], links: ['Didn’t receive code?'] }), 'Code box', { hint: 'Often the code is filled in by itself.' }],
  ] },
  'w01-profile-name': { menuPath: 'Profile info › name › Next', steps: [
    ['Tap the name box.', form({ title: 'Profile info', back: false, lead: 'Please provide your name and an optional profile photo.', photo: true, fields: [{ placeholder: 'Type your name here', name: 'Name box' }], button: 'Next' }), 'Name box'],
    ['Type the name your friends know you by.', form({ title: 'Profile info', back: false, photo: true, fields: [{ value: 'Anna', name: 'Name box' }], button: 'Next' }), null],
    ['Tap “Next”.', form({ title: 'Profile info', back: false, photo: true, fields: [{ value: 'Anna', name: 'Name box' }], button: 'Next' }), 'Next'],
  ] },
  'w01-home-screen': { menuPath: 'Tabs: Chats · Updates · Communities · Calls', steps: [
    ['“Chats” shows all your conversations.', tab('chats'), 'Chats tab'],
    ['“Updates” shows friends’ status updates and channels.', tab('updates'), 'Updates tab'],
    ['“Communities” groups related groups together.', tab('communities'), 'Communities tab'],
    ['“Calls” shows your recent calls.', tab('calls'), 'Calls tab'],
  ] },

  /* ---------- 02 Contacts ---------- */
  'w02-new-contact': { menuPath: 'Chats › New chat › New contact', steps: [
    ['On the Chats screen, tap the green New chat button.', tab('chats'), 'New chat'],
    ['Tap “New contact”.', { v: 'pick', title: 'Select contact', sub: '5 contacts', top: ['New group', 'New contact', 'New community'], items: [{ name: 'John' }, { name: 'Maria' }] }, 'New contact'],
    ['Type the first name.', form({ title: 'New contact', fields: [{ label: 'First name', value: 'Tom' }, { label: 'Last name', placeholder: 'Last name' }, { code: '+1', value: '' }], button: 'Save' }), 'First name'],
    ['Type the phone number.', form({ title: 'New contact', fields: [{ label: 'First name', value: 'Tom' }, { label: 'Last name', placeholder: 'Last name' }, { code: '+1', value: '555 0123' }], button: 'Save' }), 'Phone number'],
    ['Tap “Save”.', form({ title: 'New contact', fields: [{ label: 'First name', value: 'Tom' }, { code: '+1', value: '555 0123' }], button: 'Save' }), 'Save'],
  ] },
  'w02-search-contact': { menuPath: 'Chats › New chat › Search', steps: [
    ['Tap the green New chat button.', tab('chats'), 'New chat'],
    ['Tap the magnifying glass at the top.', { v: 'pick', title: 'Select contact', top: ['New group', 'New contact'], items: [{ name: 'John' }, { name: 'Maria' }] }, 'Search'],
    ['Type a name. Matching contacts appear.', { v: 'search', query: 'Mar', results: [{ label: 'Maria', sub: 'Hey there! I am using WhatsApp.' }] }, 'Maria'],
  ] },
  'w02-block': { menuPath: 'Chat › contact name › Block', steps: [
    ...openChat('John'),
    ['Tap the contact’s name at the top.', room({ name: 'John', msgs: MSGS }), 'Contact name'],
    ['Scroll down to the bottom of the contact info.', { v: 'profile', name: 'John' }, null],
    ['Tap “Block”.', { v: 'profile', name: 'John' }, 'Block'],
    ['Tap “Block” again to confirm.', dialog({ v: 'profile', name: 'John' }, 'Block John?', 'Blocked contacts will no longer be able to call you or send you messages.', ['Cancel', 'Block'], { danger: true }), 'Block'],
  ] },
  'w02-unblock': { menuPath: 'Settings › Privacy › Blocked contacts', steps: [
    ...toSettings,
    ['Tap “Privacy”.', list('Settings', SETTINGS_ROWS, { profile: 'Anna' }), 'Privacy'],
    ['Tap “Blocked contacts” near the bottom.', list('Privacy', [{ label: 'Last seen and online', value: 'Everyone' }, { label: 'Profile photo', value: 'Everyone' }, { label: 'Read receipts', toggle: true }, { label: 'Blocked contacts', value: '1' }]), 'Blocked contacts'],
    ['Tap the person you want to unblock.', list('Blocked contacts', [{ label: 'John', sub: '+1 555 0142' }]), 'John'],
    ['Tap “Unblock John”.', sheet(list('Blocked contacts', [{ label: 'John' }]), ['Unblock John']), 'Unblock John'],
  ] },

  /* ---------- 03 Chats ---------- */
  'w03-new-chat': { menuPath: 'Chats › New chat › contact', steps: [
    ['On the Chats screen, tap the green New chat button.', tab('chats'), 'New chat'],
    ['Tap the person you want to message.', { v: 'pick', title: 'Select contact', top: ['New group', 'New contact'], items: [{ name: 'John' }, { name: 'Maria' }, { name: 'Tom' }] }, 'Maria'],
    ['The chat opens. Type in the message box at the bottom.', room({ msgs: [] }), 'Message box'],
  ] },
  'w03-send-message': { menuPath: 'Chat › Message box › Send', steps: [
    ...openChat(),
    ['Tap the message box at the bottom.', room({ msgs: MSGS }), 'Message box'],
    ['Type your message.', room({ msgs: MSGS, input: 'Get home safely!' }), null],
    ['Tap the green send arrow.', room({ msgs: MSGS, input: 'Get home safely!' }), 'Send'],
  ] },
  'w03-voice-typing': { menuPath: 'Chat › Message box › keyboard microphone', steps: [
    ...openChat(),
    ['Tap the message box so the keyboard opens.', room({ msgs: MSGS }), 'Message box'],
    ['Tap the microphone on your keyboard and speak slowly.', info('Speak instead of typing', ['Your keyboard has a small microphone key.', 'Speak slowly. Your words appear as text.', 'The keyboard looks a little different on each phone.']), null],
    ['Check that the words are right.', room({ msgs: MSGS, input: 'I went to the doctor today' }), 'Message box'],
    ['Tap the green send arrow.', room({ msgs: MSGS, input: 'I went to the doctor today' }), 'Send'],
  ] },
  'w03-read-messages': { menuPath: 'Chats › chat with green number', steps: [
    ['A green number shows how many new messages a chat has.', tab('chats'), 'Maria'],
    ['Tap the chat to read the new messages.', room({ msgs: MSGS }), 'Received message'],
  ] },
  'w03-reply': { menuPath: 'Chat › swipe message right / hold › Reply', steps: [
    ...openChat(),
    ['Touch and hold the message you want to answer.', room({ msgs: MSGS }), 'Received message'],
    ['Tap the reply arrow at the top.', room({ select: true, msgs: [{ text: 'Did you eat dinner?', selected: true }] }), 'Reply'],
    ['Type your answer.', room({ msgs: MSGS, input: 'Yes, soup and bread.' }), null],
    ['Tap the green send arrow.', room({ msgs: MSGS, input: 'Yes, soup and bread.' }), 'Send'],
  ] },
  'w03-copy': { menuPath: 'Chat › hold message › Copy', steps: [
    ...openChat(),
    ['Touch and hold the message you want to copy.', room({ msgs: MSGS }), 'Received message'],
    ['Tap the copy icon at the top.', room({ select: true, actions: [['Reply', 'reply'], ['Star', 'star'], ['Copy', 'copy'], ['Forward', 'fwd'], ['More options', 'dots']], msgs: [{ text: 'Did you eat dinner?', selected: true }] }), 'Copy'],
  ] },
  'w03-forward': { menuPath: 'Chat › hold message › Forward', steps: [
    ...openChat(),
    ['Touch and hold the message you want to share.', room({ msgs: MSGS }), 'Received message'],
    ['Tap the forward arrow at the top.', room({ select: true, msgs: [{ text: 'Did you eat dinner?', selected: true }] }), 'Forward'],
    ['Tap the person you want to send it to.', { v: 'pick', title: 'Forward to…', items: [{ name: 'John' }, { name: 'Tom', checked: true }] }, 'Tom'],
    ['Tap the green send button.', { v: 'pick', title: 'Forward to…', items: [{ name: 'John' }, { name: 'Tom', checked: true }], next: 'Send' }, 'Send', { hint: 'Messages forwarded many times are marked “Forwarded many times”. Be careful — they may be rumours.' }],
  ] },
  'w03-edit-message': { menuPath: 'Chat › hold your message › More › Edit', steps: [
    ...openChat(),
    ['Touch and hold a message you sent.', room({ msgs: MSGS }), 'Sent message', { hint: 'You can edit a message for a short time after sending it.' }],
    ['Tap the three dots at the top.', room({ select: true, actions: [['Reply', 'reply'], ['Star', 'star'], ['Delete', 'trash'], ['Forward', 'fwd'], ['More options', 'dots']], msgs: [{ me: true, text: 'Yes, I did. And you?', selected: true, ticks: 'blue' }] }), 'More options'],
    ['Tap “Edit”.', room({ select: true, msgs: [{ me: true, text: 'Yes, I did. And you?', selected: true }], menu: ['Info', 'Copy', 'Edit', 'Pin'] }), 'Edit'],
    ['Change the words in the message box.', room({ msgs: [{ me: true, text: 'Yes, I did. And you?' }], input: 'Yes, I did. How about you?' }), 'Message box'],
    ['Tap the green tick to save.', room({ msgs: [{ me: true, text: 'Yes, I did. And you?' }], input: 'Yes, I did. How about you?' }), 'Send'],
  ] },
  'w03-delete-message': { menuPath: 'Chat › hold message › Delete', steps: [
    ...openChat(),
    ['Touch and hold the message you sent.', room({ msgs: MSGS }), 'Sent message'],
    ['Tap the bin icon at the top.', room({ select: true, msgs: [{ me: true, text: 'Yes, I did. And you?', selected: true }] }), 'Delete'],
    ['Tap “Delete for everyone”.', dialog(room({ msgs: MSGS }), 'Delete message?', '', ['Delete for everyone', 'Delete for me', 'Cancel']), 'Delete for everyone', { hint: '“Delete for everyone” only works for a while after sending.' }],
  ] },
  'w03-read-receipts': { menuPath: 'Chat › tick marks next to your message', steps: [
    ['One grey tick: the message was sent.', room({ msgs: [{ me: true, text: 'Are you home?', ticks: 'one' }] }), 'Sent message'],
    ['Two grey ticks: it arrived on their phone.', room({ msgs: [{ me: true, text: 'Are you home?', ticks: 'grey' }] }), 'Sent message'],
    ['Two blue ticks: they have read it.', room({ msgs: [{ me: true, text: 'Are you home?', ticks: 'blue' }] }), 'Sent message', { hint: 'If someone turned off read receipts, the ticks stay grey.' }],
  ] },
  'w03-search-chat': { menuPath: 'Chat › More options › Search', steps: [
    ...openChat(),
    ['Tap the three dots at the top right.', room({ msgs: MSGS }), 'More options'],
    ['Tap “Search”.', room({ msgs: MSGS, menu: ['View contact', 'Search', 'Add to list', 'Media, links, and docs', 'Mute notifications', 'More'] }), 'Search'],
    ['Type a word. WhatsApp jumps to messages with that word.', { v: 'search', query: 'doctor', results: [{ label: 'Maria', sub: 'What time is the doctor?' }] }, 'Maria'],
  ] },

  /* ---------- 04 Media ---------- */
  'w04-send-photo': { menuPath: 'Chat › Attach › Gallery › photo › Send', steps: [
    ...openChat(),
    ['Tap the paper clip in the message box.', room({ msgs: MSGS }), 'Attach'],
    ['Tap “Gallery”.', ATTACH, 'Gallery'],
    ['Tap the photo you want to send.', { v: 'gallery', selected: [] }, 'Photo 1'],
    ['Tap the green send button.', { v: 'preview' }, 'Send'],
    ['Check that the photo appears in the chat.', room({ msgs: [...MSGS, { me: true, photo: true, ticks: 'grey' }] }), 'Sent message'],
  ] },
  'w04-send-photos': { menuPath: 'Chat › Attach › Gallery › hold photos › Next', steps: [
    ...openChat(),
    ['Tap the paper clip in the message box.', room({ msgs: MSGS }), 'Attach'],
    ['Tap “Gallery”.', ATTACH, 'Gallery'],
    ['Touch and hold the first photo.', { v: 'gallery', selected: [] }, 'Photo 1'],
    ['Tap the other photos you want. Each gets a number.', { v: 'gallery', selected: [0] }, 'Photo 5'],
    ['Tap the green arrow at the bottom.', { v: 'gallery', selected: [0, 4, 7] }, 'Next'],
    ['Tap the green send button.', { v: 'preview' }, 'Send'],
  ] },
  'w04-send-hd-photo': { menuPath: 'Chat › Attach › Gallery › photo › HD', steps: [
    ...openChat(),
    ['Tap the paper clip in the message box.', room({ msgs: MSGS }), 'Attach'],
    ['Tap “Gallery”.', ATTACH, 'Gallery'],
    ['Tap the photo you want to send.', { v: 'gallery', selected: [] }, 'Photo 1'],
    ['Tap “HD” at the top.', { v: 'preview' }, 'HD'],
    ['Tap “HD quality”.', { v: 'preview', hdSheet: true }, 'HD quality'],
    ['Tap “Done”.', { v: 'preview', hdSheet: true, hd: true }, 'Done'],
    ['Tap the green send button.', { v: 'preview', hd: true }, 'Send', { hint: 'HD photos use more mobile data. Wi-Fi is best.' }],
  ] },
  'w04-take-and-send': { menuPath: 'Chat › Camera button', steps: [
    ...openChat(),
    ['Tap the camera icon in the message box.', room({ msgs: MSGS }), 'Camera button'],
    ['Take the photo with the round white button.', info('Take the photo', ['Hold the phone steady.', 'Tap the big round button once.']), null],
    ['Tap the green send button.', { v: 'preview' }, 'Send'],
  ] },
  'w04-save-photo': { menuPath: 'Chat › photo › More options › Save', steps: [
    ...openChat(),
    ['Tap the photo you received.', room({ msgs: [{ text: 'Look at the grandkids!' }, { photo: true, label: 'Received photo' }] }), 'Received photo'],
    ['Tap the three dots at the top right.', { v: 'preview', viewer: true }, 'More options'],
    ['Tap “Save”.', { v: 'preview', viewer: true, menu: ['Edit', 'All media', 'Show in chat', 'Share', 'Save', 'View in gallery'] }, 'Save', { hint: 'Many phones save received photos automatically.' }],
  ] },
  'w04-send-video': { menuPath: 'Chat › Attach › Gallery › video › Send', steps: [
    ...openChat(),
    ['Tap the paper clip in the message box.', room({ msgs: MSGS }), 'Attach'],
    ['Tap “Gallery”.', ATTACH, 'Gallery'],
    ['Tap a video. Videos show their length in the corner.', { v: 'gallery', selected: [], video: true }, 'Photo 2'],
    ['Tap the green send button.', { v: 'preview', video: true }, 'Send'],
  ] },
  'w04-send-document': { menuPath: 'Chat › Attach › Document', steps: [
    ...openChat(),
    ['Tap the paper clip in the message box.', room({ msgs: MSGS }), 'Attach'],
    ['Tap “Document”.', ATTACH, 'Document'],
    ['Tap the file you want to send.', list('Send to Maria', [{ label: 'Doctor appointment.pdf', sub: '240 kB · PDF' }, { label: 'Garden plan.pdf', sub: '1 MB · PDF' }]), 'Doctor appointment.pdf'],
    ['Tap “Send”.', dialog(room({ msgs: MSGS }), 'Send “Doctor appointment.pdf” to Maria?', '', ['Cancel', 'Send']), 'Send'],
  ] },

  /* ---------- 05 Voice messages ---------- */
  'w05-record-voice': { menuPath: 'Chat › hold microphone', steps: [
    ...openChat(),
    ['Touch and hold the green microphone.', room({ msgs: MSGS }), 'Microphone', { hint: 'Keep your finger on the button while you talk.' }],
    ['Speak while you hold it. You will see a red dot and the time.', room({ msgs: MSGS, recording: true }), null],
  ] },
  'w05-send-voice': { menuPath: 'Chat › hold microphone › lift finger', steps: [
    ['Hold the microphone and speak.', room({ msgs: MSGS, recording: true }), null],
    ['Lift your finger. The voice message is sent.', room({ msgs: [...MSGS, { me: true, voice: '0:07', ticks: 'grey' }] }), 'Sent voice message'],
  ] },
  'w05-play-voice': { menuPath: 'Chat › voice message › play', steps: [
    ...openChat(),
    ['Tap the play button on the voice message.', room({ msgs: [{ voice: '0:12' }] }), 'Received voice message', { hint: 'Hold the phone to your ear to hear it quietly.' }],
  ] },
  'w05-cancel-voice': { menuPath: 'Chat › hold microphone › slide left', steps: [
    ['While recording, keep holding and slide your finger to the left.', room({ msgs: MSGS, recording: true }), 'Slide to cancel'],
    ['Lift your finger. The recording is deleted and not sent.', room({ msgs: MSGS }), null],
  ] },

  /* ---------- 06 Calls ---------- */
  'w06-voice-call': { menuPath: 'Chat › phone icon', steps: [
    ...openChat(),
    ['Tap the phone icon at the top.', room({ msgs: MSGS }), 'Voice call', { hint: 'WhatsApp calls use the internet (Wi-Fi or mobile data).' }],
    ['Wait for your friend to answer.', { v: 'call', state: 'calling' }, null],
  ] },
  'w06-answer-voice': { menuPath: 'Incoming call › Accept', steps: [
    ['When WhatsApp rings, tap the green “Accept” button.', { v: 'call', state: 'incoming' }, 'Accept', { hint: 'On some phones you swipe the button up instead.' }],
    ['You are connected. Start talking.', { v: 'call', state: 'talking' }, null],
  ] },
  'w06-end-call': { menuPath: 'Call › red button', steps: [
    ['Tap the red button to end the call.', { v: 'call', state: 'talking' }, 'End call'],
  ] },
  'w06-video-call': { menuPath: 'Chat › video camera icon', steps: [
    ...openChat(),
    ['Tap the video camera icon at the top.', room({ msgs: MSGS }), 'Video call'],
    ['Hold the phone so your face is on the screen and wait.', { v: 'call', kind: 'video', state: 'calling' }, null],
  ] },
  'w06-answer-video': { menuPath: 'Incoming video call › Accept', steps: [
    ['Tap the green “Accept” button.', { v: 'call', kind: 'video', state: 'incoming' }, 'Accept'],
    ['Your friend fills the screen. You appear in the small box.', { v: 'call', kind: 'video', state: 'talking' }, null],
  ] },
  'w06-flip-camera': { menuPath: 'Video call › Flip camera', steps: [
    ['During a video call, tap “Flip camera”.', { v: 'call', kind: 'video', state: 'talking' }, 'Flip camera', { hint: 'Now your friend sees what you see — the garden, the grandkids…' }],
  ] },
  'w06-mute': { menuPath: 'Call › Mute', steps: [
    ['During a call, tap “Mute”. Your friend can’t hear you.', { v: 'call', state: 'talking' }, 'Mute'],
    ['Tap it again to talk again.', { v: 'call', state: 'talking', on: 'Mute' }, 'Mute'],
  ] },
  'w06-speaker': { menuPath: 'Voice call › Speaker', steps: [
    ['During a voice call, tap “Speaker” to hear without holding the phone.', { v: 'call', state: 'talking' }, 'Speaker'],
  ] },

  /* ---------- 07 Groups ---------- */
  'w07-create-group': { menuPath: 'Chats › New chat › New group', steps: [
    ['Tap the green New chat button.', tab('chats'), 'New chat'],
    ['Tap “New group”.', { v: 'pick', title: 'Select contact', top: ['New group', 'New contact', 'New community'], items: [{ name: 'John' }, { name: 'Maria' }] }, 'New group'],
    ['Tap each person you want in the group.', { v: 'pick', title: 'New group', sub: 'Add members', items: [{ name: 'John', checked: true }, { name: 'Maria' }, { name: 'Tom' }] }, 'Maria'],
    ['Tap the green arrow.', { v: 'pick', title: 'New group', sub: 'Add members', items: [{ name: 'John', checked: true }, { name: 'Maria', checked: true }, { name: 'Tom' }], next: 'Next' }, 'Next'],
    ['Type a group name.', form({ title: 'New group', photo: true, fields: [{ value: 'Family', name: 'Group name' }], button: 'Create' }), 'Group name'],
    ['Tap the green tick to create the group.', form({ title: 'New group', photo: true, fields: [{ value: 'Family', name: 'Group name' }], button: 'Create' }), 'Create'],
  ] },
  'w07-add-to-group': { menuPath: 'Group › group name › Add members', steps: [
    ...openChat('Family'),
    ['Tap the group name at the top.', room(GROUP), 'Contact name'],
    ['Tap “Add members”.', { v: 'profile', name: 'Family', group: true }, 'Add members', { hint: 'Only group admins may be able to add people.' }],
    ['Tap the person you want to add.', { v: 'pick', title: 'Add members', items: [{ name: 'Tom' }, { name: 'Lucy' }] }, 'Tom'],
    ['Tap the green tick.', { v: 'pick', title: 'Add members', items: [{ name: 'Tom', checked: true }, { name: 'Lucy' }], next: 'Add' }, 'Add'],
  ] },
  'w07-mute-group': { menuPath: 'Group › More options › Mute notifications', steps: [
    ...openChat('Family'),
    ['Tap the three dots at the top right.', room(GROUP), 'More options'],
    ['Tap “Mute notifications”.', room({ ...GROUP, menu: ['Group info', 'Group media', 'Search', 'Mute notifications', 'Disappearing messages', 'More'] }), 'Mute notifications'],
    ['Choose how long, for example “Always”.', dialog(room(GROUP), 'Mute notifications', 'Other members will not see that you muted this chat.', ['Cancel', 'OK'], { options: ['8 hours', '1 week', 'Always'], selected: 1 }), 'Always'],
    ['Tap “OK”.', dialog(room(GROUP), 'Mute notifications', 'Other members will not see that you muted this chat.', ['Cancel', 'OK'], { options: ['8 hours', '1 week', 'Always'], selected: 2 }), 'OK'],
  ] },
  'w07-leave-group': { menuPath: 'Group › More options › More › Exit group', steps: [
    ...openChat('Walking club'),
    ['Tap the three dots at the top right.', room({ ...GROUP, name: 'Walking club' }), 'More options'],
    ['Tap “More”.', room({ ...GROUP, name: 'Walking club', menu: ['Group info', 'Group media', 'Search', 'Mute notifications', 'More'] }), 'More'],
    ['Tap “Exit group”.', room({ ...GROUP, name: 'Walking club', menu: ['Report', 'Exit group', 'Clear chat', 'Export chat'] }), 'Exit group'],
    ['Tap “Exit” to confirm.', dialog(room({ ...GROUP, name: 'Walking club' }), 'Exit “Walking club”?', 'Only group admins will be notified that you left the group.', ['Cancel', 'Exit'], { danger: true }), 'Exit'],
  ] },

  /* ---------- 11 Display ---------- */
  'w11-bigger-text': { menuPath: 'Settings › Chats › Font size', steps: [
    ...toSettings,
    ['Tap “Chats”.', list('Settings', SETTINGS_ROWS, { profile: 'Anna' }), 'Chats'],
    ['Tap “Font size”.', list('Chats', [{ section: 'Display' }, { label: 'Theme', value: 'System default' }, { label: 'Default chat theme' }, { section: 'Chat settings' }, { label: 'Enter is send', toggle: false }, { label: 'Media visibility', toggle: true }, { label: 'Font size', value: 'Medium' }]), 'Font size'],
    ['Tap “Large”.', dialog(list('Chats', [{ label: 'Font size', value: 'Medium' }]), 'Font size', '', [], { options: ['Small', 'Medium', 'Large'], selected: 1 }), 'Large', { hint: 'For even bigger text, also make the text bigger in your phone’s Settings › Display.' }],
  ] },
  'w11-mute-chat': { menuPath: 'Chat › More options › Mute notifications', steps: [
    ...openChat('Walking club'),
    ['Tap the three dots at the top right.', room({ ...GROUP, name: 'Walking club' }), 'More options'],
    ['Tap “Mute notifications”.', room({ ...GROUP, name: 'Walking club', menu: ['Group info', 'Group media', 'Search', 'Mute notifications', 'More'] }), 'Mute notifications'],
    ['Choose “Always”.', dialog(room({ ...GROUP, name: 'Walking club' }), 'Mute notifications', '', ['Cancel', 'OK'], { options: ['8 hours', '1 week', 'Always'], selected: 0 }), 'Always'],
    ['Tap “OK”.', dialog(room({ ...GROUP, name: 'Walking club' }), 'Mute notifications', '', ['Cancel', 'OK'], { options: ['8 hours', '1 week', 'Always'], selected: 2 }), 'OK'],
  ] },

  /* ---------- 15 Safety ---------- */
  'w15-unknown-sender': { menuPath: 'Chat from unknown number › Block / Report', steps: [
    ['A message from a number not in your contacts shows a warning.', room({ name: '+44 7700 900123', sub: 'Not a contact', msgs: [{ sys: 'This sender is not in your contacts.' }, { text: 'Hello dear, I have a great offer for you' }] }), 'Received message'],
    ['Do not reply. Tap “Block” at the bottom.', { v: 'form', heading: '+44 7700 900123', lead: 'Not a contact · No groups in common', buttons: ['Add to contacts', 'Block'] }, 'Block'],
  ] },
  'w15-fake-family': { menuPath: 'Safety lesson', steps: [
    ['Scammers write “Hi Mum, I lost my phone, this is my new number.”', room({ name: '+1 555 0199', sub: 'Not a contact', msgs: [{ sys: 'This sender is not in your contacts.' }, { text: 'Hi Mum, I broke my phone. This is my new number.' }, { text: 'Can you send money? It is urgent.' }] }), 'Received message'],
    ['Before sending money, call your child on their old number.', info('Spot a fake family message', ['A new number, and an urgent request for money.', 'They say they cannot talk on the phone.', 'Always call the old number and hear their voice first.'], true), null],
  ] },
  'w15-code-request': { menuPath: 'Safety lesson', steps: [
    ['Someone asks for the 6-digit code you just received.', room({ name: 'WhatsApp Support?', sub: 'Not a contact', msgs: [{ text: 'Your account will be closed. Send me the 6-digit code from your SMS.' }] }), 'Received message'],
    ['Never share it. WhatsApp will never ask you for this code.', info('Your code is a key to your account', ['Anyone with the code can take over your WhatsApp.', 'Do not reply. Block and report.', 'Turn on two-step verification for extra safety.'], true), null],
  ] },
};
