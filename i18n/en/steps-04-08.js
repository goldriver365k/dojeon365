// English steps for chapters 04–08 (draft, not yet reviewed).
import { open, item, settings, BACK, QUICK } from './kit.js';

const PHONE = open('Phone');
const CONTACTS = open('Contacts');
const MESSAGES = open('Messages');

export const STEPS_04_08 = {
  'g04-call': {
    desc: 'Make a phone call on a Galaxy phone by typing the number on the keypad.',
    steps: [
      PHONE,
      ['Tap ‘Keypad’ at the bottom.'],
      ['Tap the digits of the phone number in order.', 'If you tap a wrong digit, delete it with the delete button at the bottom right.'],
      ['Tap the green Call button.'],
      ['When you finish talking, tap the red End call button.'],
    ],
  },
  'g04-answer': {
    desc: 'Answer a call by swiping the green button, decline with the red button, or decline with a text message.',
    steps: [
      ['Touch and hold the green Answer button and swipe it up.', 'Swipe it out of the circle to connect the call.'],
      ['To decline, touch and hold the red Decline button and swipe it up.'],
      ['To decline with a text, swipe up ‘Send message’ at the bottom.', 'Choose a message and it is sent to the caller.', 'In Settings → Accessibility → Interaction and dexterity you can set calls to be answered with a single tap.'],
    ],
  },
  'g04-speaker': {
    desc: 'Turn on the speaker during a call so you can talk without holding the phone to your ear.',
    steps: [
      ['Make or answer a call to start talking.'],
      ['Tap ‘Speaker’.', 'You can hear and talk with the phone away from your ear.'],
      ['To turn the speaker off, tap ‘Speaker’ again.'],
    ],
  },
  'g04-missed': {
    desc: 'Call back a missed call from the Recents list in the Phone app.',
    steps: [
      PHONE,
      ['Tap ‘Recents’ at the bottom.'],
      ['Swipe the missed number to the right.', 'Swiping right calls the number straight away.', 'If swiping does not call, tap the number and then tap the Call button.'],
    ],
  },
  'g04-log': {
    desc: 'Check who called and when in the Recents list of the Phone app.',
    steps: [
      PHONE,
      ['Tap ‘Recents’ at the bottom.'],
      ['Tap a name to see the details.', 'You can see when you talked.'],
    ],
  },
  'g04-block': {
    desc: 'Block a spam phone number in the Phone app settings.',
    steps: [
      PHONE,
      ['Tap the three dots (More options) at the top right.'],
      ['Tap ‘Settings’.'],
      ['Tap ‘Block numbers’.'],
      ['Tap ‘Add phone number’.', '', 'The screen can look slightly different depending on the version.'],
      ['Type the number you want to block.'],
      ['Tap ‘Save’.'],
    ],
  },
  'g05-new': {
    desc: 'Save a new contact with a name and phone number in the Contacts app.',
    steps: [
      CONTACTS,
      ['Tap ‘+’ (Create contact) at the top right.'],
      ['Tap the Name field.'],
      ['Type the name.'],
      ['Tap the Phone field.'],
      ['Type the phone number.'],
      ['Tap ‘Save’.'],
    ],
  },
  'g05-search': {
    desc: 'Find a contact quickly by searching for their name.',
    steps: [
      CONTACTS,
      ['Tap the magnifying glass (Search) at the top.'],
      ['Type the name you are looking for.'],
      ['Tap the name that appears.'],
    ],
  },
  'g05-edit': {
    desc: 'Change the phone number saved for a contact.',
    steps: [
      CONTACTS,
      ['Tap the name of the person to change.'],
      ['Tap ‘Edit’ at the bottom.'],
      ['Tap the Phone field.'],
      ['Delete the old number and type the new one.'],
      ['Tap ‘Save’.'],
    ],
  },
  'g05-speed': {
    desc: 'Set up speed dial so you can call someone by holding one number on the keypad.',
    steps: [
      PHONE,
      ['Tap ‘Keypad’ at the bottom.'],
      ['Tap the three dots (More options) at the top right.'],
      ['Tap ‘Speed dial numbers’.'],
      ['Tap number ‘2’.', 'Choose any empty number.'],
      ['Choose the person from your contacts.'],
      ['Touch and hold ‘2’ on the keypad to call them.', 'Try holding ‘2’ on the practice screen.'],
    ],
  },
  'g05-share': {
    desc: 'Send someone’s contact details to another person by text message.',
    steps: [
      CONTACTS,
      ['Tap the name of the person to share.'],
      ['Tap ‘Share’ at the bottom.'],
      ['Tap ‘Messages’.'],
      ['Choose who will receive it.'],
      ['Tap the Send button.'],
    ],
  },
  'g06-send': {
    desc: 'Send a text message and reply to one in the Messages app.',
    steps: [
      MESSAGES,
      ['Tap the conversation you want to reply to.', 'To start a new message, tap the Start chat button at the bottom right.'],
      ['Tap the message box at the bottom.'],
      ['Type your message.'],
      ['Tap the Send button on the right.'],
    ],
  },
  'g06-type': {
    desc: 'Type letters, numbers and symbols, and switch keyboard languages on the Samsung Keyboard.',
    steps: [
      ['Type ‘Hello’ on the keyboard.'],
      ['To type numbers or symbols, tap ‘!#1’.'],
      ['To go back to letters, tap ‘ABC’ in the same place.'],
      ['To type in another language, swipe the space bar left or right.', 'Only languages you added in the keyboard settings appear.'],
    ],
  },
  'g06-fix': {
    desc: 'Fix typing mistakes with the delete key and by moving the cursor.',
    steps: [
      ['Tap the delete key (⌫) once.', 'The letter just before the cursor is deleted.'],
      ['Type the correct letter.'],
      ['To fix a letter in the middle, tap that spot.', 'The cursor (the blinking line) moves to where you tapped.'],
    ],
  },
  'g06-copy': {
    desc: 'Copy text and paste it somewhere else.',
    steps: [
      ['Touch and hold the text you want to copy.'],
      ['Tap ‘Copy’.'],
      ['Touch and hold the box where you want to paste.'],
      ['Tap ‘Paste’.'],
    ],
  },
  'g06-photo': {
    desc: 'Attach a photo from Gallery to a text message.',
    steps: [
      MESSAGES,
      ['Tap the conversation to send the photo to.'],
      ['Tap ‘+’ to the left of the message box.'],
      ['Tap ‘Gallery’.'],
      ['Tap the photo to send.'],
      ['Tap the Send button.'],
    ],
  },
  'g06-translate': {
    desc: 'Translate a conversation in Messages with the Galaxy AI keyboard tool.',
    steps: [
      MESSAGES,
      ['Tap the conversation to translate.'],
      ['Tap the message box at the bottom.'],
      ['Tap the Galaxy AI icon at the top left of the keyboard.'],
      ['Tap ‘Chat translation’.'],
      ['Choose the languages in the box at the top.'],
    ],
  },
  'g07-noti': {
    desc: 'Open the notification panel, read a notification and clear them all.',
    steps: [
      ['Swipe down from the top left of the screen.', 'The notification panel opens.'],
      ['Tap the notification you want to read.', 'Tapping a notification opens its app.'],
      ['Swipe down from the top left of the screen.', 'The notification panel opens.'],
      ['Tap ‘Clear’.', 'All notifications are removed.'],
    ],
  },
  'g07-appnoti': {
    desc: 'Turn off notifications for apps you do not need to hear from.',
    steps: [
      ...settings('Notifications', 'App notifications'),
      ['Tap the switch of an app to turn its notifications off.', 'Keep notifications on for important messaging apps.'],
    ],
  },
  'g07-quick': {
    desc: 'Open the quick settings panel and learn how its buttons work.',
    steps: [
      QUICK,
      ['Look at the buttons on the panel.', 'Blue buttons are turned on. Tap a button to turn it on or off.'],
      ['Touch and hold the ‘Wi-Fi’ button.', 'Holding a button opens its detailed settings.'],
      ['Swipe up to close the panel.'],
    ],
  },
  'g07-flash': {
    desc: 'Turn the flashlight on and off from the quick settings panel.',
    steps: [
      QUICK,
      ['Tap ‘Flashlight’.', 'The light on the back of the phone turns on.'],
      ['To turn it off, tap ‘Flashlight’ again.'],
    ],
  },
  'g07-rotate': {
    desc: 'Choose whether the screen turns when you turn the phone sideways.',
    steps: [
      QUICK,
      ['Tap ‘Auto rotate’.', 'When it is on, the screen turns with the phone. When it is off, the screen stays upright.'],
      ['Turn your phone sideways to try it.'],
    ],
  },
  'g07-dnd': {
    desc: 'Silence calls and alerts with Do not disturb, and use Airplane mode on a plane.',
    steps: [
      QUICK,
      ['Tap ‘Do not disturb’.', 'Calls and notifications will not make a sound. Tap again to turn it off.'],
      ['Tap ‘Do not disturb’ again to turn it off.'],
      ['Tap ‘Airplane mode’.', 'Calls and the internet are disconnected. Use it on a plane.'],
      ['Tap it again to turn it off after your flight.'],
    ],
  },
  'g08-wifi': {
    desc: 'Connect your Galaxy phone to a Wi-Fi network in Settings → Connections → Wi-Fi.',
    steps: [
      ...settings('Connections', 'Wi-Fi'),
      ['Tap the ‘Wi-Fi’ switch to turn it on.', 'A list of nearby Wi-Fi networks appears.'],
      ['Tap the name of the Wi-Fi network to join.', 'A lock icon means it needs a password.'],
      ['Type the Wi-Fi password.', 'It is often written on the back of the router.'],
      ['Tap ‘Connect’.'],
    ],
  },
  'g08-data': {
    desc: 'Turn mobile data on or off in Settings → Connections → Data usage.',
    steps: [
      ...settings('Connections', 'Data usage'),
      ['Tap the ‘Mobile data’ switch to turn it on.', 'When it is off, the internet works only on Wi-Fi.'],
    ],
  },
  'g08-usage': {
    desc: 'See how much mobile data you used this month and which apps used the most.',
    steps: [
      ...settings('Connections', 'Data usage'),
      ['Tap ‘Mobile data usage’.'],
      ['Check how much you used this month.', 'Apps that use the most are at the top. Your mobile carrier’s app shows how much is left.'],
    ],
  },
  'g08-bt': {
    desc: 'Pair Bluetooth earphones with your Galaxy phone.',
    steps: [
      ['Turn on your earphones in pairing mode.'],
      ...settings('Connections', 'Bluetooth'),
      ['Tap the ‘Bluetooth’ switch to turn it on.'],
      ['Tap the name of your earphones in the list.'],
      ['Tap ‘Connect’.'],
    ],
  },
  'g08-hotspot': {
    desc: 'Share your phone’s internet connection with another device using Mobile Hotspot.',
    steps: [
      ...settings('Connections', 'Mobile Hotspot and Tethering', 'Mobile Hotspot'),
      ['Tap the ‘Mobile Hotspot’ switch to turn it on.', '', 'This may cost extra. Check your mobile plan first.'],
      ['On the other device, choose your phone’s name from its Wi-Fi list.'],
    ],
  },
  'g08-location': {
    desc: 'Find the Location and NFC switches in Settings.',
    steps: [
      ...settings('Location'),
      ['Tap the ‘Location’ switch to turn it on.', 'Map and weather apps can then know where you are.'],
      BACK,
      item('Connections'),
      ['Tap the ‘NFC and contactless payments’ switch to turn it on.', 'Turn it on to pay or use transit cards with your phone.'],
    ],
  },
};
