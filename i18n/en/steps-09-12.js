// English steps for chapters 09–12 (draft, not yet reviewed).
import { open, item, settings, QUICK } from './kit.js';

const CAMERA = open('Camera');
const GALLERY = open('Gallery');
const HOME_BTN = ['Tap the Home button at the bottom center.', 'You go back to the first screen (the Home screen).'];
const SHUTTER = ['Tap the white shutter button.'];

export const STEPS_09_12 = {
  'g09-search': {
    desc: 'Search the web with the Samsung Internet browser on a Galaxy phone.',
    steps: [
      [...open('Samsung Internet'), 'Depending on the version, the app may be called ‘Samsung Internet’ or ‘Browser’.'],
      ['Tap the address bar at the top.'],
      ['Type what you want to find.'],
      ['Tap the Go (↵) key at the bottom right of the keyboard.'],
      ['Tap the search result you want to read.'],
    ],
  },
  'g09-bookmark': {
    desc: 'Save web pages you visit often as bookmarks and open them later.',
    steps: [
      open('Samsung Internet'),
      ['Tap the star (☆) to the right of the address bar.', 'The page you are viewing is saved to your bookmarks.'],
      ['To open it later, tap the star (Bookmarks) at the bottom.'],
      ['Tap the page you saved.'],
    ],
  },
  'g09-qr': {
    desc: 'Open a QR code with the Galaxy camera.',
    steps: [
      CAMERA,
      ['Point the camera at the QR code.', 'In Photo mode, keep the code in the middle of the screen.'],
      ['Tap the yellow link that appears on the screen.', 'Be careful with QR codes from places you do not know.'],
    ],
  },
  'g09-files': {
    desc: 'Find files you downloaded in the My Files app.',
    steps: [open('My Files'), ['Tap ‘Downloads’.'], ['Tap the file to open.']],
  },
  'g09-stores': {
    desc: 'Learn the difference between Google Play Store and Samsung Galaxy Store.',
    steps: [
      open('Play Store'),
      ['This is Google’s app store, where you can find and download apps.', 'You need to sign in with a Google account.'],
      HOME_BTN,
      open('Galaxy Store'),
      ['This is Samsung’s app store, with many Samsung apps and themes.'],
    ],
  },
  'g09-install': {
    desc: 'Install an app from Play Store, update apps in Galaxy Store and uninstall an app.',
    steps: [
      open('Play Store'),
      ['Tap the search bar at the top.'],
      ['Type the name of the app to install.'],
      ['Tap ‘Install’ next to the app name.'],
      ['Tap the ‘Galaxy Store’ app.', 'Now let us update apps.'],
      ['Tap ‘Menu’ at the bottom.'],
      ['Tap ‘Updates’.'],
      ['Tap ‘Update all’.'],
      ['On the Home screen, touch and hold the app you want to remove.'],
      ['Tap ‘Uninstall’.'],
      ['Tap ‘OK’.', 'You can install a removed app again from the store.'],
    ],
  },
  'g09-google': {
    desc: 'Find Google apps and your mobile carrier’s app with the search on the Apps screen.',
    steps: [
      ['Swipe up on the Home screen to open the Apps screen.'],
      ['Tap ‘Search’ at the top.'],
      ['Type the name of the app.', 'Try Google, YouTube or the name of your mobile carrier.'],
      ['Tap the app you found.'],
    ],
  },
  'g10-open': {
    desc: 'Open the Camera app and find the shutter button.',
    steps: [CAMERA, ['Check that the camera screen appeared.', 'The white circle at the bottom center is the shutter button.']],
  },
  'g10-focus': {
    desc: 'Tap the screen to focus the camera before taking a photo.',
    steps: [
      CAMERA,
      ['Tap the spot on the screen that you want to be sharp.', 'When a yellow circle appears, it is in focus.'],
      ['Tap the white shutter button.', 'If photos look blurry, wipe the lens with a soft cloth.'],
    ],
  },
  'g10-switch': {
    desc: 'Switch between the rear camera and the front (selfie) camera.',
    steps: [
      CAMERA,
      ['Tap the circular arrows at the bottom right.', 'Swiping up or down on the screen also switches cameras.'],
      ['Check that the front camera now shows your face.'],
    ],
  },
  'g10-selfie': {
    desc: 'Take a selfie with the front camera.',
    steps: [
      CAMERA,
      ['Tap the circular arrows at the bottom right.'],
      ['Hold the phone so your face is in the middle of the screen.'],
      SHUTTER,
    ],
  },
  'g10-zoom': {
    desc: 'Zoom in on things far away when taking a photo.',
    steps: [
      CAMERA,
      ['Tap the number ‘3’ at the bottom.', 'Things far away look 3 times bigger. Tap ‘1x’ to go back.', 'The numbers differ by model (Ultra models zoom further).'],
      SHUTTER,
    ],
  },
  'g10-timer': {
    desc: 'Use the camera timer so the photo is taken a few seconds later.',
    steps: [
      CAMERA,
      ['Tap the Quick controls (⌄) icon at the top.'],
      ['Tap the Timer icon.'],
      ['Tap ‘5 seconds’.'],
      SHUTTER,
      ['The photo is taken after the countdown.'],
    ],
  },
  'g10-modes': {
    desc: 'Try Portrait mode for blurred backgrounds and Night mode for dark places.',
    steps: [
      CAMERA,
      ['Tap ‘Portrait’ at the bottom.', 'The person is sharp and the background is blurred.'],
      SHUTTER,
      ['Tap ‘More’ at the bottom.'],
      ['Tap ‘Night’.', 'Photos in dark places come out bright without the flash. Hold the phone still while it takes the photo.'],
    ],
  },
  'g10-video': {
    desc: 'Record a video with the Galaxy camera.',
    steps: [CAMERA, ['Tap ‘Video’ at the bottom.'], ['Tap the red Record button.'], ['When you are done, tap the Stop button.']],
  },
  'g10-capture': {
    desc: 'Take a screenshot with two buttons and record your screen from the quick settings panel.',
    steps: [
      ['Briefly press the Side button and the Volume down button at the same time.', 'With a click sound, the screen is saved as a picture. You can see it in Gallery.'],
      QUICK,
      ['Tap ‘Screen recorder’.', 'If you cannot see it, swipe down on the panel once more.'],
      ['Tap ‘Start recording’.'],
      ['To stop recording, tap the Stop icon at the top of the screen.'],
    ],
  },
  'g11-latest': {
    desc: 'Find the photo you just took in Gallery.',
    steps: [
      GALLERY,
      ['Tap the first photo (top left).', 'Your newest photo is always first.'],
      ['Swipe left to see the next photo.'],
    ],
  },
  'g11-album': {
    desc: 'Create a new album in Gallery to keep photos together.',
    steps: [
      GALLERY,
      ['Tap ‘Albums’ at the bottom.'],
      ['Tap ‘+’ (Add) at the top.'],
      ['Tap ‘Album’.'],
      ['Type a name for the album.'],
      ['Tap ‘Create’.', 'Then choose the photos to put in it.'],
    ],
  },
  'g11-edit': {
    desc: 'Crop a photo and make it brighter in Gallery.',
    steps: [
      GALLERY,
      ['Tap the photo to edit.'],
      ['Tap the pencil icon (Edit) at the bottom.'],
      ['Drag a corner of the photo inward to crop it.'],
      ['Tap ‘Tone’ at the bottom.'],
      ['Drag the brightness bar to the right.'],
      ['Tap ‘Save’.'],
    ],
  },
  'g11-text': {
    desc: 'Copy text from a photo in Gallery and paste it into a message or note.',
    steps: [
      GALLERY,
      ['Tap a photo that has text in it.'],
      ['Tap the yellow ‘T’ icon.', 'It appears only when there is text in the photo.'],
      ['Touch and hold the text you want to copy.'],
      ['Tap ‘Copy’.', 'You can paste it into a message or a note.'],
    ],
  },
  'g11-multi': {
    desc: 'Select several photos in Gallery and share them at once.',
    steps: [
      GALLERY,
      ['Touch and hold one photo you want to send.'],
      ['Tap more photos to send with it.', 'A check in the circle means the photo is selected.'],
      ['Tap ‘Share’ at the bottom.'],
      ['Tap the app to send with (for example, Messages).'],
      ['Choose who to send to and send.'],
    ],
  },
  'g11-restore': {
    desc: 'Get back photos you deleted from the Gallery Recycle bin.',
    steps: [
      GALLERY,
      ['Tap ‘Menu’ at the bottom.'],
      ['Tap ‘Recycle bin’.'],
      ['Tap the photo to bring back.', 'Deleted photos stay in the Recycle bin for a while.'],
      ['Tap ‘Restore’.'],
    ],
  },
  'g11-docs': {
    desc: 'Find documents saved on your phone in the My Files app.',
    steps: [open('My Files'), ['Tap ‘Documents’.'], ['Tap the document to open.']],
  },
  'g11-quickshare': {
    desc: 'Send a photo to a nearby phone with Quick Share.',
    steps: [
      GALLERY,
      ['Tap the photo to send.'],
      ['Tap ‘Share’ at the bottom.'],
      ['Tap ‘Quick Share’.', '', 'The other phone needs Quick Share turned on too (Settings → Connected devices → Quick Share).'],
      ['Tap the name of the phone to send to.'],
      ['On the receiving phone, tap ‘Accept’.'],
    ],
  },
  'g12-addapp': {
    desc: 'Put an app from the Apps screen on your Home screen.',
    steps: [
      ['Swipe up on the Home screen to open the Apps screen.'],
      ['Touch and hold the app you want on the Home screen.'],
      ['Tap ‘Add to Home’.'],
    ],
  },
  'g12-folder': {
    desc: 'Group apps into a folder and add a weather widget to the Home screen.',
    steps: [
      ['Touch and hold an app on the Home screen and drag it onto another app.', 'A folder with both apps is created.'],
      ['Tap the folder name and type a name.'],
      ['Touch and hold an empty spot on the Home screen.'],
      ['Tap ‘Widgets’.'],
      ['Tap ‘Weather’.'],
      ['Tap ‘Add’.'],
    ],
  },
  'g12-wallpaper': {
    desc: 'Use one of your photos as the wallpaper for the lock screen or Home screen.',
    steps: [
      ...settings('Wallpaper and style'),
      ['Tap ‘Change wallpapers’.'],
      ['To use your own photo, tap ‘Gallery’.'],
      ['Tap the photo to use.'],
      ['Choose the lock screen, the Home screen or both.'],
      ['Tap ‘Done’.'],
    ],
  },
  'g12-alarm': {
    desc: 'Set an alarm and start a timer in the Clock app.',
    steps: [
      open('Clock'),
      ['Tap ‘Alarm’ at the bottom.'],
      ['Tap ‘+’ at the bottom right.'],
      ['Swipe the numbers up or down to set the time.'],
      ['Tap ‘Save’.'],
      ['To use a timer, tap ‘Timer’ at the bottom.'],
      ['Set the time and tap ‘Start’.'],
    ],
  },
  'g12-calendar': {
    desc: 'Add an appointment to the Calendar app.',
    steps: [
      open('Calendar'),
      ['Tap ‘+’ (Add event) at the bottom right.'],
      ['Tap the Title field.'],
      ['Type the name of the appointment.'],
      ['Tap ‘Start’ to choose the date and time.'],
      ['Tap ‘Save’.'],
    ],
  },
  'g12-reminder': {
    desc: 'Get a reminder for something you need to do by adding an alert to a calendar event.',
    steps: [
      open('Calendar'),
      ['Tap ‘+’ (Add event) at the bottom right.'],
      ['Type the thing to do as the title.'],
      ['Tap ‘Reminder’.'],
      ['Tap when you want the reminder (for example, 10 minutes before).'],
      ['Tap ‘Save’.', 'The reminder arrives at the time you chose.'],
    ],
  },
  'g12-note': {
    desc: 'Write a quick note in Samsung Notes.',
    steps: [
      open('Samsung Notes'),
      ['Tap ‘+’ at the bottom right.'],
      ['Write what you want to note.'],
      ['When you finish, tap the Back button.', 'The note is saved automatically.'],
    ],
  },
  'g12-recorder': {
    desc: 'Record your voice with the Voice Recorder app.',
    steps: [
      open('Voice Recorder'),
      ['Tap the Record button.'],
      ['Speak into the phone.'],
      ['Tap ‘Stop’.', 'The recording is saved in the list.'],
    ],
  },
  'g12-tools': {
    desc: 'Check the weather, use the calculator and listen to the radio.',
    steps: [
      open('Weather'),
      ['Look at today’s weather and temperature.', 'Location must be on to see the weather where you are.'],
      HOME_BTN,
      open('Calculator'),
      ['Tap numbers, + and = to calculate.'],
      ['Tap the ‘Radio’ app.', 'The radio needs wired earphones, which work as the antenna.', 'Some models and carriers do not have a Radio app.'],
    ],
  },
};
