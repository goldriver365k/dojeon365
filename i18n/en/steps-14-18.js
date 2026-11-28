// English steps for chapters 14–18 (draft, not yet reviewed).
import { open, item, settings, BACK } from './kit.js';

const REAL = 'This lesson changes real settings or has real results. Read all the steps first, then do them on your phone.';
const SETTINGS_REAL = [...open('Settings'), REAL];
const WALLET = open('Samsung Wallet');
const sub = (...names) => names.map((n) => item(n));

export const STEPS_14_18 = {
  'g14-open': {
    desc: 'Open Samsung Wallet and look around the cards and menus.',
    steps: [
      ['Tap the ‘Samsung Wallet’ app.', 'You can also open it by swiping up the card image at the bottom of the screen.'],
      ['Look at your saved cards and the menus.', 'If this is your first time, there are no cards yet. The next lesson shows the add card screen.'],
    ],
  },
  'g14-add': {
    desc: 'Look at the screen for adding a payment card to Samsung Wallet.',
    steps: [
      [...WALLET, REAL],
      ['Tap ‘+’ (Add) at the top.'],
      ['Look at what you can add.', 'You can add payment cards, transit cards and more, depending on your country.'],
      ['Tap ‘Payment card’.'],
      ['Read the instructions for adding a card.'],
    ],
  },
  'g14-pay': {
    desc: 'Choose a card in Samsung Wallet and pay by holding your phone near the card reader.',
    steps: [
      [...WALLET, REAL],
      ['Tap the card you want to pay with.'],
      ['Use your fingerprint or enter your payment PIN.'],
      ['Hold the back of your phone close to the card reader.'],
    ],
  },
  'g15-pin': {
    desc: 'Protect your phone with a PIN screen lock.',
    steps: [
      SETTINGS_REAL,
      ...sub('Lock screen and AOD', 'Screen lock and biometrics'),
      ['Tap ‘Screen lock type’.'],
      ['Tap ‘PIN’.'],
      ['Type at least 4 digits that are easy for you to remember.', 'Avoid numbers others can guess, like your birthday or phone number.'],
      ['Type the same digits again to confirm.'],
    ],
  },
  'g15-bio': {
    desc: 'Register your fingerprint, and your face if you like, to unlock your phone.',
    steps: [
      SETTINGS_REAL,
      ...sub('Security and privacy', 'Screen lock and biometrics'),
      ['Tap ‘Fingerprints’.'],
      ['Enter your PIN.', 'If you do not have a PIN, create one first.'],
      ['Touch and lift your finger on the fingerprint mark at the bottom of the screen, again and again.', 'Use a finger you use often and move it a little each time.'],
      ['To add your face too, tap ‘Face recognition’ on the same screen.'],
    ],
  },
  'g15-perm': {
    desc: 'See which apps used your location, camera or microphone and turn off access you do not need.',
    steps: [
      ...settings('Security and privacy', 'Permissions used in last 24 hours'),
      ['See which apps used your location, camera or microphone.'],
      ['Tap ‘Location’.'],
      ['If there is an app you do not know, change it to ‘Don’t allow’.'],
    ],
  },
  'g15-folder': {
    desc: 'Find Secure Folder and Samsung Pass in Settings.',
    steps: [
      ...settings('Security and privacy', 'More security settings'),
      ['Tap ‘Secure Folder’.'],
      ['Read the information about Secure Folder.'],
      BACK,
      ['Tap ‘Passwords, passkeys and autofill’.', 'Samsung Pass is in here. It helps you sign in with your fingerprint.'],
    ],
  },
  'g15-medical': {
    desc: 'Add medical information and emergency contacts that can help in an emergency.',
    steps: [
      ...settings('Safety and emergency', 'Medical info'),
      ['Enter your name, blood type, medicines and allergies.'],
      BACK,
      ['Tap ‘Emergency contacts’.'],
      ['Add your family members as contacts.'],
    ],
  },
  'g15-sos': {
    desc: 'Check how Emergency SOS works on your phone without making a call.',
    steps: [
      [...open('Settings'), 'Actually pressing the buttons calls emergency services. In this lesson, only look at the screen.'],
      ...sub('Safety and emergency', 'Emergency SOS'),
      ['Read how many times to press the Side button to make the call.', 'Pressing the Side button the number of times shown calls the number you set.'],
    ],
  },
  'g15-find': {
    desc: 'Turn on the setting that lets you find your phone with Samsung Find if you lose it.',
    steps: [
      ...settings('Security and privacy', 'Lost device protection', 'Find My Mobile'),
      ['Tap the ‘Allow this phone to be found’ switch to turn it on.', 'You must be signed in to your Samsung account.'],
      ['If you lose your phone, go to smartthingsfind.samsung.com on another device.'],
    ],
  },
  'g16-setup': {
    desc: 'Set up a new Galaxy phone for the first time.',
    steps: [
      ['Press and hold the Side button to turn the phone on.'],
      ['Check your language and tap ‘Start’.'],
      ['Choose a Wi-Fi network and connect.'],
      ['For the rest, follow the instructions on the screen and tap ‘Next’.'],
    ],
  },
  'g16-sim': {
    desc: 'Learn what a SIM card and an eSIM are, and check your phone number in SIM manager.',
    steps: [
      ['A SIM (Nano-SIM) is a small card from your mobile carrier.'],
      ['An eSIM is a SIM you download to the phone, with no card.', '', 'Support for eSIM and two numbers depends on your model and carrier.'],
      ...settings('Connections', 'SIM manager'),
      ['Check that your number and carrier appear.'],
    ],
  },
  'g16-account': {
    desc: 'Check that your phone is signed in to a Samsung account and a Google account.',
    steps: [
      ...settings('Accounts and backup', 'Manage accounts'),
      ['Check that there is a Samsung account and a Google account.', 'You need them for backups, installing apps and finding your phone. Write down your ID and password.'],
    ],
  },
  'g16-switch': {
    desc: 'Move contacts, photos and more to a new Galaxy phone with Smart Switch.',
    steps: [
      ...settings('Accounts and backup', 'Bring data from old device'),
      ['On the new phone, choose ‘Receive data’.'],
      ['Keep the two phones close together and follow the instructions on the screen.'],
    ],
  },
  'g16-backup': {
    desc: 'Check when your phone was last backed up to Samsung Cloud.',
    steps: [...settings('Accounts and backup', 'Samsung Cloud'), ['Check the date of the last backup.']],
  },
  'g16-restore': {
    desc: 'Restore your data from a Samsung Cloud backup.',
    steps: [
      ...settings('Accounts and backup', 'Samsung Cloud'),
      ['Tap ‘Restore data’.'],
      ['Choose the device and the items to restore.'],
      ['Tap ‘Restore’.'],
    ],
  },
  'g17-magnify': {
    desc: 'Turn on the magnification shortcut and zoom in on part of the screen with a triple tap.',
    steps: [
      ...settings('Accessibility', 'Vision enhancements', 'Magnification'),
      ['Tap ‘Magnification shortcut’.'],
      ['Tap the ‘Magnification shortcut’ switch to turn it on.'],
      ['Tap ‘Triple tap screen’.'],
      ['Quickly tap three times where you want to zoom in.'],
    ],
  },
  'g17-contrast': {
    desc: 'Turn on high contrast fonts so text stands out from the background.',
    steps: [
      ...settings('Accessibility', 'Vision enhancements'),
      ['Tap the ‘High contrast fonts’ switch to turn it on.', 'Letters get a darker outline and stand out from the background.'],
    ],
  },
  'g17-talkback': {
    desc: 'Turn on TalkBack to have the screen read aloud, after learning how to turn it off.',
    steps: [
      [...open('Settings'), 'With TalkBack on, the way you tap changes. Read how to turn it off first.'],
      ...sub('Accessibility', 'TalkBack'),
      ['Read how to turn it off first.'],
      ['Tap the ‘TalkBack’ switch to turn it on.', 'With it on, one tap reads an item aloud and a double tap opens it.'],
    ],
  },
  'g17-caption': {
    desc: 'Turn on Live Caption for videos and Mono audio for one-ear listening.',
    steps: [
      ...settings('Accessibility', 'Hearing enhancements'),
      ['Tap ‘Live Caption’.'],
      ['Tap the ‘Use Live Caption’ switch to turn it on.', 'Speech in videos is shown as text.'],
      BACK,
      ['Tap the ‘Mono audio’ switch to turn it on.', 'You hear both sides of the sound even with one ear.'],
    ],
  },
  'g17-hearing': {
    desc: 'Turn on hearing aid compatibility for clearer calls with a hearing aid.',
    steps: [
      ...settings('Accessibility', 'Hearing enhancements', 'Hearing aid support'),
      ['Tap the ‘Hearing aid compatibility’ switch to turn it on.', 'Calls sound clearer when you use a hearing aid.'],
      ['Connect Bluetooth hearing aids in the Bluetooth menu.'],
    ],
  },
  'g17-touch': {
    desc: 'Make touches easier: answer calls with one tap, change the touch and hold delay and set an accessibility shortcut.',
    steps: [
      ...settings('Accessibility', 'Interaction and dexterity'),
      ['Tap the ‘Single tap mode’ switch to turn it on.', 'You can answer calls with one tap instead of swiping.'],
      ['Tap ‘Touch and hold delay’.', 'If touch and hold is hard, make the time longer.'],
      ['Choose the time you want.'],
      ['Tap the Back button twice.'],
      ['Tap ‘Accessibility shortcut’.', 'You can turn on an accessibility feature you use often with one button.'],
    ],
  },
  'g18-usage': {
    desc: 'Find out which apps use the most battery.',
    steps: [
      ...settings('Battery', 'Daily usage'),
      ['Look at the apps that used the most battery.', 'If an app you rarely use uses a lot, close or remove it.'],
    ],
  },
  'g18-saver': {
    desc: 'Turn on Power saving to make the battery last longer.',
    steps: [
      ...settings('Battery'),
      ['Tap the ‘Power saving’ switch to turn it on.', 'The battery lasts longer. Some app notifications may arrive later.', 'You can also turn it on with the ‘Power saving’ button in the quick settings panel.'],
    ],
  },
  'g18-storage': {
    desc: 'Check how much storage space is left on your phone.',
    steps: [
      ...settings('Device care', 'Storage'),
      ['Check how much space is left.', 'Emptying the recycle bin and removing duplicate files frees up space.'],
    ],
  },
  'g18-clean': {
    desc: 'Find and delete large files you no longer need in My Files.',
    steps: [open('My Files'), ['Tap ‘Manage storage’.'], ['Tap ‘Large files’.'], ['Select only the files you do not need and tap ‘Delete’.']],
  },
  'g18-care': {
    desc: 'Check and tidy up your phone with Device care.',
    steps: [...settings('Device care'), ['Tap ‘Optimize now’.', 'It closes apps you are not using and checks your phone.']],
  },
  'g18-update': {
    desc: 'Check for and install software updates on your Galaxy phone.',
    steps: [
      ...settings('Software update'),
      ['Tap ‘Download and install’.', 'If there is a new version, it downloads and installs. Do this on Wi-Fi while charging.'],
    ],
  },
  'g18-version': {
    desc: 'Find your phone’s model name and its One UI version in Settings → About phone.',
    steps: [
      ...settings('About phone'),
      ['Check the model name at the top.'],
      ['Tap ‘Software information’.'],
      ['Check the ‘One UI version’.', 'Tell the service center this along with your model name.'],
    ],
  },
};
