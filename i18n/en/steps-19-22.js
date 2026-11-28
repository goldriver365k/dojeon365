// English steps for chapters 19–22 (draft, not yet reviewed).
import { open, item, settings, QUICK } from './kit.js';

const AI_ICON = ['Tap the Galaxy AI icon.'];
const HOME_BTN = ['Tap the Home button at the bottom center.', 'You go back to the first screen (the Home screen).'];

export const STEPS_19_22 = {
  'g19-bixby': {
    desc: 'Set the Side button to wake Bixby and ask it to do things with your voice.',
    steps: [
      ...settings('Advanced features', 'Side button'),
      ['Tap ‘Wake Bixby’.', 'Pressing and holding the Side button will now start Bixby.'],
      ['Press and hold the Side button and say what you want.', 'For example: “Set an alarm for 7 tomorrow morning.”'],
      ['Let go of the button when you finish speaking.'],
    ],
  },
  'g19-circle': {
    desc: 'Search for something on your screen by circling it with Circle to Search.',
    steps: [
      ['Touch and hold the Home button at the bottom of the screen.'],
      ['Draw a circle around the thing you want to know about.'],
      ['Read the search results at the bottom.', '', 'Bixby Vision is available on the Galaxy S25, S24 and S23 series. The S26 uses this method (Circle to Search).'],
    ],
  },
  'g19-interpret': {
    desc: 'Turn on Live translate in the Phone app and use it during a call.',
    steps: [
      open('Phone'),
      ['Tap the three dots at the top right.'],
      ['Tap ‘Settings’.'],
      ['Tap ‘Live translate’.'],
      ['Tap the ‘Live translate’ switch to turn it on.'],
      ['During a call, tap ‘Call assist’.'],
      ['Tap ‘Live translate’.'],
    ],
  },
  'g19-write': {
    desc: 'Fix spelling and grammar in a message with the Galaxy AI keyboard tool.',
    steps: [
      open('Messages'),
      ['Tap a conversation.'],
      ['Type your message.'],
      ['Tap the Galaxy AI icon at the top left of the keyboard.'],
      ['Tap ‘Spelling and grammar’.', 'It fixes mistakes. ‘Summarize’ makes long text shorter.'],
    ],
  },
  'g19-transcribe': {
    desc: 'Turn a voice recording into text with Galaxy AI in Voice Recorder.',
    steps: [open('Voice Recorder'), ['Tap the recording to turn into text.'], AI_ICON, ['Tap ‘Transcribe’.'], ['Read the text it made.']],
  },
  'g19-photo': {
    desc: 'Remove a person or object from a photo with Galaxy AI in Gallery.',
    steps: [
      open('Gallery'),
      ['Tap the photo to edit.'],
      AI_ICON,
      ['Tap ‘Object eraser’.'],
      ['Trace around the person or thing to remove with your finger.'],
      ['Tap ‘Erase’.'],
      ['If you like the result, tap ‘Save’.'],
    ],
  },
  'g19-support': {
    desc: 'See which Galaxy AI features your phone supports in Settings.',
    steps: [
      ...settings('Galaxy AI'),
      ['Look at the list of AI features your phone can use.', 'Features not in the list are not supported on this model.', 'Some features depend on model and carrier, or need an internet connection.'],
    ],
  },
  'g20-smartview': {
    desc: 'Show your phone screen on a TV with Smart View.',
    steps: [
      QUICK,
      ['Tap ‘Smart View’.'],
      ['Tap the name of the TV to connect to.', 'It works best when the TV and phone are on the same Wi-Fi.'],
      ['Tap ‘Start now’.'],
    ],
  },
  'g20-pc': {
    desc: 'Connect your Galaxy phone to a Windows PC with Link to Windows.',
    steps: [
      ...settings('Connected devices', 'Link to Windows'),
      ['Read the instructions on the screen.'],
      ['On the computer, open the address shown to finish connecting.'],
    ],
  },
  'g20-dex': {
    desc: 'Find out what Samsung DeX is and where its settings are.',
    steps: [...settings('Connected devices', 'Samsung DeX'), ['Read the information.']],
  },
  'g20-watch': {
    desc: 'Connect a Galaxy watch or earbuds with the Galaxy Wearable app.',
    steps: [
      ['Tap the ‘Galaxy Wearable’ app.', 'If it is not on the Home screen, find it on the Apps screen.'],
      ['Tap ‘Start’.'],
      ['Follow the instructions on the screen to finish connecting.'],
    ],
  },
  'g20-smartthings': {
    desc: 'Connect home appliances to your phone with SmartThings.',
    steps: [
      open('SmartThings'),
      ['Tap ‘+’ (Add) at the top.'],
      ['Choose the appliance to connect.'],
      ['Follow the instructions on the screen to finish connecting.'],
    ],
  },
  'g20-musicshare': {
    desc: 'Turn on Music Share so friends can play music through your Bluetooth speaker.',
    steps: [
      ...settings('Connected devices', 'Music Share'),
      ['Tap the ‘Music Share’ switch to turn it on.', 'Friends can play music from their phones on your Bluetooth speaker.'],
    ],
  },
  'g21-split': {
    desc: 'Use two apps at the same time with split screen view.',
    steps: [
      ['Tap the Recents button at the bottom left.'],
      ['Tap the small icon at the top of an app.'],
      ['Tap ‘Open in split screen view’.'],
      ['Choose the second app for the bottom half.'],
    ],
  },
  'g21-modes': {
    desc: 'Turn on Sleep mode in Modes and Routines.',
    steps: [
      ...settings('Modes and Routines', 'Modes'),
      ['Tap ‘Sleep’.'],
      ['Tap ‘Turn on’.', 'Notifications go quiet and the screen gets darker while you sleep.'],
    ],
  },
  'g21-aod': {
    desc: 'Show a clock on the screen even when it is off, with Always On Display.',
    steps: [
      ...settings('Lock screen and AOD'),
      ['Tap the ‘Always On Display’ switch to turn it on.', 'You can see the clock even when the screen is off. It uses a little more battery.'],
      ['To change the clock style, touch and hold the lock screen.'],
    ],
  },
  'g21-wellbeing': {
    desc: 'See how long you used your phone today and set app timers.',
    steps: [
      ...settings('Digital Wellbeing'),
      ['Look at how long you used your phone today.'],
      ['Tap ‘App timers’.', 'You can set a daily time limit for each app.'],
    ],
  },
  'g21-apps': {
    desc: 'Take a look at Samsung Health, Samsung Kids and Game Booster.',
    steps: [
      ['Tap the ‘Samsung Health’ app.', 'If it is not on the Home screen, find it on the Apps screen.'],
      ['Look at your step count and exercise records.'],
      ...settings('Apps', 'Samsung Kids'),
      ['Tap ‘Open’.', 'You can choose the apps and time limits for your grandchildren.'],
      ['While playing a game, tap the Game Booster icon at the bottom of the screen.'],
    ],
  },
  'g21-samsung': {
    desc: 'Find the Samsung.com and Samsung Global Goals apps, and Samsung News.',
    steps: [
      open('Samsung.com'),
      ['Here you can read Samsung product news and get support.'],
      HOME_BTN,
      ['Tap the ‘Samsung Global Goals’ app.', 'Find ‘Samsung Global Goals’ on the Apps screen.'],
      ['Look for Samsung News with the search on the Apps screen.'],
    ],
  },
  'g21-spen': {
    desc: 'Take out the S Pen, open its menu and try the PENUP app on supported Ultra models.',
    steps: [
      ['Gently press the end of the S Pen at the bottom of the phone.'],
      ['Tap the feature you want in the menu on the screen.'],
      open('PENUP'),
      ['When you finish, push the S Pen back in until it clicks.'],
    ],
  },
  'g22-ring': {
    desc: 'What to check when your phone does not ring.',
    steps: [
      QUICK,
      ['Tap the ‘Sound’ button.', 'If it is set to Mute or Vibrate, tap it to change it to Sound.'],
      ['If ‘Do not disturb’ is blue (on), tap it to turn it off.'],
      ['Press the Volume up button on the side to make it louder.'],
    ],
  },
  'g22-network': {
    desc: 'What to check when calls or the internet stop working.',
    steps: [
      QUICK,
      ['If ‘Airplane mode’ is on, tap it to turn it off.'],
      ['If ‘Mobile data’ is off, tap it to turn it on.'],
      ['If the signal is weak, try moving to another place.'],
      ['If it still does not work, restart your phone.'],
    ],
  },
  'g22-charge': {
    desc: 'What to check when your Galaxy phone will not charge.',
    steps: [
      ['Check that the cable and charger are plugged in all the way.'],
      ['If the port is wet, let it dry completely before charging.'],
      ...settings('Battery', 'Charging settings'),
      ['If it still does not charge, take the phone, charger and cable to a service center.'],
    ],
  },
  'g22-hot': {
    desc: 'What to do when your phone gets hot.',
    steps: [
      ['If it is charging, unplug the charger.'],
      ['Tap the Recents button.'],
      ['Tap ‘Close all’ to close the apps.'],
      ['Stop using the phone for a while and let it cool in a cool place.'],
    ],
  },
  'g22-freeze': {
    desc: 'Force a frozen Galaxy phone to restart with two buttons.',
    steps: [
      ['Press and hold the Side button and the Volume down button together for more than 7 seconds.', 'Keep holding until the screen turns off.'],
      ['When the screen turns off, let go and wait.'],
    ],
  },
  'g22-water': {
    desc: 'What to check and do when your phone gets wet.',
    steps: [
      ['Wipe the phone with a soft cloth and dry it completely.'],
      ['Do not plug in the charger until it is completely dry.'],
      ['If it was sea water, pool water or soapy water, rinse it with clean water and then dry it.'],
      ['If anything seems wrong, go to a service center right away.'],
    ],
  },
  'g22-members': {
    desc: 'Check your phone for problems with Phone diagnostics in Samsung Members.',
    steps: [
      ['Tap the ‘Samsung Members’ app.', 'If it is not on the Home screen, find it on the Apps screen.'],
      ['Tap ‘Support’.'],
      ['Tap ‘Phone diagnostics’.'],
      ['Tap ‘Test all’ or the item you want to check.'],
    ],
  },
  'g22-service': {
    desc: 'Write down your model name and the problem before contacting Samsung service.',
    steps: [
      ...settings('About phone'),
      ['Write down the model number (for example, SM-S942N).'],
      ['Write down when and how the problem happens.'],
      ['Contact Samsung support for your country or book a service center visit.', 'Find your country’s support page at samsung.com/support.'],
    ],
  },
};
