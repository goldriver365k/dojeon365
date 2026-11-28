// 아이폰 시니어 필수 사용법 100개 — 단계 카드 원고(한국어·영어)
// 단계 = [한국어 설명, English, 누를 곳(화면 글자, 한국어), 누를 곳(English), 캡처할 화면]
// 기종에 따라 순서가 다르면 { face: [...], home: [...] } (face = Face ID 기종, home = 홈 버튼 기종)
// 기준: iOS 18·26 (메뉴 이름은 실제 화면 캡처 때 다시 대조한다 — 캡처 전에는 공개하지 않음)
const S = (ko, en, tko = '', ten = '', shot = '') => [ko, en, tko, ten, shot];

export const STEPS = {
  // ── 기본 사용법
  'power-on': [
    S('오른쪽 옆 버튼을 길게 누르세요.', 'Press and hold the side button on the right.', '', '', 'iPhone off, side button'),
    S('화면에 Apple 로고가 나오면 손을 떼세요.', 'When the Apple logo appears, let go.', '', '', 'Apple logo on black'),
    S('잠금 화면이 나올 때까지 기다리세요.', 'Wait for the Lock Screen to appear.', '', '', 'Lock Screen'),
  ],
  'power-off': {
    face: [
      S('옆 버튼과 음량 버튼 하나를 함께 길게 누르세요.', 'Press and hold the side button and either volume button together.', '', '', 'buttons'),
      S('‘밀어서 전원 끄기’의 전원 모양을 오른쪽으로 미세요.', 'Drag the power slider to the right.', '밀어서 전원 끄기', 'slide to power off', 'power-off slider'),
      S('화면이 꺼질 때까지 기다리세요.', 'Wait for the screen to go dark.', '', '', 'black screen'),
    ],
    home: [
      S('옆 버튼을 길게 누르세요.', 'Press and hold the side button.', '', '', 'buttons'),
      S('‘밀어서 전원 끄기’의 전원 모양을 오른쪽으로 미세요.', 'Drag the power slider to the right.', '밀어서 전원 끄기', 'slide to power off', 'power-off slider'),
      S('화면이 꺼질 때까지 기다리세요.', 'Wait for the screen to go dark.', '', '', 'black screen'),
    ],
  },
  restart: [
    S('먼저 전원을 끄세요.', 'First, turn off your iPhone.', '', '', 'power-off slider'),
    S('30초쯤 기다리세요.', 'Wait about 30 seconds.', '', '', 'black screen'),
    S('옆 버튼을 Apple 로고가 나올 때까지 길게 누르세요.', 'Press and hold the side button until the Apple logo appears.', '', '', 'Apple logo'),
  ],
  'wake-unlock': {
    face: [
      S('화면을 한 번 누르거나 옆 버튼을 누르세요.', 'Tap the screen or press the side button.', '', '', 'Lock Screen'),
      S('아이폰을 얼굴 앞에 들고 화면을 보세요.', 'Hold iPhone in front of your face and look at it.', '', '', 'Lock Screen, padlock opening'),
      S('화면 맨 아래에서 위로 쓸어올리세요.', 'Swipe up from the bottom of the screen.', '', '', 'Lock Screen bottom bar'),
    ],
    home: [
      S('홈 버튼을 누르세요.', 'Press the Home button.', '', '', 'Lock Screen'),
      S('Touch ID에 지문을 등록한 손가락을 올려 두세요.', 'Rest your registered finger on Touch ID.', '', '', 'Home Screen'),
    ],
  },
  'lock-screen': [
    S('오른쪽 옆 버튼을 한 번 짧게 누르세요.', 'Press the side button once.', '', '', 'buttons'),
    S('화면이 꺼지고 잠겼어요.', 'The screen turns off and iPhone is locked.', '', '', 'black screen'),
  ],
  'go-home': {
    face: [S('화면 맨 아래 가로줄에서 위로 쓸어올리세요.', 'Swipe up from the bottom edge of the screen.', '', '', 'app open, home indicator'), S('홈 화면이 나왔어요.', 'Now you see the Home Screen.', '', '', 'Home Screen')],
    home: [S('화면 아래 동그란 홈 버튼을 누르세요.', 'Press the round Home button below the screen.', '', '', 'app open'), S('홈 화면이 나왔어요.', 'Now you see the Home Screen.', '', '', 'Home Screen')],
  },
  'basic-gestures': [
    S('누르기: 손가락으로 한 번 톡 누르세요.', 'Tap: touch the screen once, lightly.', '', '', 'Home Screen'),
    S('길게 누르기: 손가락을 떼지 말고 잠시 꾹 누른 채로 두세요.', 'Touch and hold: keep your finger on the screen for a moment.', '', '', 'app icon menu'),
    S('쓸어넘기기: 손가락을 화면에 댄 채 옆으로 미세요.', 'Swipe: slide your finger across the screen.', '', '', 'Home Screen page 2'),
  ],
  'open-app': [S('홈 화면에서 쓰려는 앱 아이콘을 누르세요.', 'On the Home Screen, tap the app you want.', '사진', 'Photos', 'Home Screen'), S('앱이 열렸어요.', 'The app opens.', '', '', 'Photos app')],
  'switch-apps': {
    face: [S('화면 맨 아래에서 위로 쓸어올리고 가운데에서 잠깐 멈추세요.', 'Swipe up from the bottom and pause in the middle.', '', '', 'app open'), S('앱 화면들을 옆으로 넘기세요.', 'Swipe left or right through the apps.', '', '', 'App Switcher'), S('쓰고 싶은 앱을 누르세요.', 'Tap the app you want.', '', '', 'App Switcher')],
    home: [S('홈 버튼을 빠르게 두 번 누르세요.', 'Double-click the Home button.', '', '', 'app open'), S('앱 화면들을 옆으로 넘기세요.', 'Swipe left or right through the apps.', '', '', 'App Switcher'), S('쓰고 싶은 앱을 누르세요.', 'Tap the app you want.', '', '', 'App Switcher')],
  },
  'control-center': {
    face: [S('화면 오른쪽 위 모서리에서 아래로 쓸어내리세요.', 'Swipe down from the top-right corner.', '', '', 'Home Screen'), S('제어 센터가 열렸어요. 위로 쓸어올리면 닫혀요.', 'Control Center opens. Swipe up to close it.', '', '', 'Control Center')],
    home: [S('화면 맨 아래에서 위로 쓸어올리세요.', 'Swipe up from the bottom edge of the screen.', '', '', 'Home Screen'), S('제어 센터가 열렸어요. 홈 버튼을 누르면 닫혀요.', 'Control Center opens. Press the Home button to close it.', '', '', 'Control Center')],
  },
  'notification-center': [S('화면 위쪽 가운데에서 아래로 쓸어내리세요.', 'Swipe down from the top middle of the screen.', '', '', 'Home Screen'), S('알림을 눌러 내용을 보세요.', 'Tap a notification to open it.', '', '', 'Notification Center'), S('위로 쓸어올리면 닫혀요.', 'Swipe up to close.', '', '', 'Notification Center')],
  'volume-buttons': [S('왼쪽 위 버튼을 누르면 소리가 커져요.', 'Press the upper button on the left to turn the volume up.', '', '', 'volume indicator'), S('왼쪽 아래 버튼을 누르면 소리가 작아져요.', 'Press the lower button to turn the volume down.', '', '', 'volume indicator')],
  'silent-mode': {
    face: [S('제어 센터를 여세요.', 'Open Control Center.', '', '', 'Control Center'), S('종 모양 ‘무음 모드’ 버튼을 누르세요.', 'Tap the bell-shaped Silent Mode button.', '무음 모드', 'Silent Mode', 'Control Center')],
    home: [S('왼쪽 옆의 작은 스위치(벨/무음 스위치)를 아래로 내리세요.', 'Flip the Ring/Silent switch on the left side down.', '', '', 'silent indicator'), S('주황색이 보이면 무음이에요. 다시 올리면 소리가 나요.', 'Orange means silent. Flip it up to turn sound back on.', '', '', 'ring indicator')],
  },
  'check-model': [
    S('‘설정’을 누르세요.', 'Tap Settings.', '설정', 'Settings', 'Home Screen'),
    S('‘일반’을 누르세요.', 'Tap General.', '일반', 'General', 'Settings'),
    S('‘정보’를 누르세요.', 'Tap About.', '정보', 'About', 'General'),
    S('‘모델 이름’에 내 아이폰 이름이 나와요.', 'Model Name shows your iPhone model.', '모델 이름', 'Model Name', 'About'),
  ],
  'check-ios-version': [
    S('‘설정’을 누르세요.', 'Tap Settings.', '설정', 'Settings', 'Home Screen'),
    S('‘일반’을 누르세요.', 'Tap General.', '일반', 'General', 'Settings'),
    S('‘정보’를 누르세요.', 'Tap About.', '정보', 'About', 'General'),
    S('‘iOS 버전’ 옆 숫자가 내 iOS 버전이에요.', 'The number next to iOS Version is your iOS version.', 'iOS 버전', 'iOS Version', 'About'),
  ],
  // ── 전화
  'make-call': [
    S('초록색 ‘전화’ 앱을 누르세요.', 'Tap the green Phone app.', '전화', 'Phone', 'Home Screen'),
    S('아래쪽 ‘키패드’를 누르세요.', 'Tap Keypad at the bottom.', '키패드', 'Keypad', 'Phone'),
    S('전화번호 숫자를 누르세요.', 'Tap the phone number.', '', '', 'Keypad with number'),
    S('초록색 전화 버튼을 누르세요.', 'Tap the green call button.', '통화', 'Call', 'Keypad'),
  ],
  'answer-call': [
    S('전화가 오면 초록색 버튼을 누르세요.', 'When a call comes in, tap the green button.', '수락', 'Accept', 'incoming call (unlocked)'),
    S('화면이 잠겨 있으면 ‘밀어서 응답하기’를 오른쪽으로 미세요.', 'If iPhone is locked, drag the slider to answer.', '밀어서 응답하기', 'slide to answer', 'incoming call (locked)'),
  ],
  'decline-call': [
    S('전화가 오면 빨간색 ‘거절’ 버튼을 누르세요.', 'When a call comes in, tap the red Decline button.', '거절', 'Decline', 'incoming call (unlocked)'),
    S('잠금 상태라면 옆 버튼을 빠르게 두 번 누르세요.', 'If iPhone is locked, press the side button twice quickly.', '', '', 'incoming call (locked)'),
  ],
  'end-call': [S('통화 화면에서 빨간색 버튼을 누르세요.', 'On the call screen, tap the red button.', '종료', 'End', 'in-call screen')],
  'speaker-call': [S('통화 중에 ‘스피커’를 누르세요.', 'During a call, tap Speaker.', '스피커', 'Speaker', 'in-call screen'), S('다시 누르면 귀에 대고 들어요.', 'Tap it again to use the earpiece.', '스피커', 'Speaker', 'in-call screen')],
  'call-from-recents': [S('‘전화’ 앱을 누르세요.', 'Tap the Phone app.', '전화', 'Phone', 'Home Screen'), S('아래쪽 ‘최근 기록’을 누르세요.', 'Tap Recents at the bottom.', '최근 기록', 'Recents', 'Phone'), S('다시 걸 사람의 이름을 누르세요.', 'Tap the name you want to call back.', '', '', 'Recents list')],
  'keypad-during-call': [S('통화 중에 ‘키패드’를 누르세요.', 'During a call, tap Keypad.', '키패드', 'Keypad', 'in-call screen'), S('안내에 따라 숫자를 누르세요.', 'Tap the numbers you are asked for.', '', '', 'in-call keypad'), S('‘가리기’를 누르면 통화 화면으로 돌아가요.', 'Tap Hide to go back to the call screen.', '가리기', 'Hide', 'in-call keypad')],
  'block-number': [S('‘전화’ 앱에서 ‘최근 기록’을 누르세요.', 'In Phone, tap Recents.', '최근 기록', 'Recents', 'Phone'), S('차단할 번호 옆 ⓘ를 누르세요.', 'Tap the info button next to the number.', 'ⓘ', 'info button', 'Recents list'), S('맨 아래 ‘이 발신자 차단’을 누르세요.', 'Tap Block this Caller at the bottom.', '이 발신자 차단', 'Block this Caller', 'contact info'), S('‘연락처 차단’을 눌러 확인하세요.', 'Tap Block Contact to confirm.', '연락처 차단', 'Block Contact', 'confirm sheet')],
  'facetime-call': [S('‘FaceTime’ 앱을 누르세요.', 'Tap the FaceTime app.', 'FaceTime', 'FaceTime', 'Home Screen'), S('‘새로운 FaceTime’을 누르세요.', 'Tap New FaceTime.', '새로운 FaceTime', 'New FaceTime', 'FaceTime'), S('통화할 사람의 이름을 입력하세요.', 'Type the name of the person.', '', '', 'New FaceTime'), S('초록색 ‘FaceTime’ 버튼을 누르세요.', 'Tap the green FaceTime button.', 'FaceTime', 'FaceTime', 'New FaceTime with contact')],
  // ── 연락처
  'add-contact': [S('‘연락처’ 앱을 누르세요.', 'Tap the Contacts app.', '연락처', 'Contacts', 'Home Screen'), S('오른쪽 위 ＋를 누르세요.', 'Tap ＋ at the top right.', '＋', '＋', 'Contacts'), S('이름을 입력하세요.', 'Type the name.', '이름', 'First name', 'New Contact'), S('‘전화번호 추가’를 누르세요.', 'Tap add phone.', '전화번호 추가', 'add phone', 'New Contact'), S('전화번호를 입력하세요.', 'Type the phone number.', '', '', 'New Contact phone field'), S('‘완료’를 누르세요.', 'Tap Done.', '완료', 'Done', 'New Contact')],
  'edit-contact': [S('‘연락처’에서 고칠 사람을 누르세요.', 'In Contacts, tap the person.', '', '', 'Contacts list'), S('오른쪽 위 ‘편집’을 누르세요.', 'Tap Edit at the top right.', '편집', 'Edit', 'contact card'), S('내용을 고치세요.', 'Change the details.', '', '', 'contact edit'), S('‘완료’를 누르세요.', 'Tap Done.', '완료', 'Done', 'contact edit')],
  'search-contact': [S('‘연락처’를 여세요.', 'Open Contacts.', '연락처', 'Contacts', 'Home Screen'), S('위쪽 ‘검색’ 칸을 누르세요.', 'Tap the Search field at the top.', '검색', 'Search', 'Contacts'), S('이름을 입력하세요.', 'Type the name.', '', '', 'search results')],
  // ── 메시지
  'send-message': [S('초록색 ‘메시지’ 앱을 누르세요.', 'Tap the green Messages app.', '메시지', 'Messages', 'Home Screen'), S('오른쪽 위 ‘새로운 메시지’ 버튼을 누르세요.', 'Tap the compose button at the top right.', '새로운 메시지', 'Compose', 'Messages list'), S('받는 사람 이름이나 번호를 입력하세요.', 'Type the name or number.', '받는 사람', 'To', 'New Message'), S('아래 입력 칸에 내용을 쓰세요.', 'Type your message in the box below.', '', '', 'New Message keyboard'), S('위쪽 화살표 버튼을 누르세요.', 'Tap the up-arrow button to send.', '보내기', 'Send', 'New Message with text')],
  'read-message': [S('‘메시지’ 앱을 누르세요.', 'Tap Messages.', '메시지', 'Messages', 'Home Screen'), S('파란 점이 있는 대화를 누르세요.', 'Tap the conversation with a blue dot.', '', '', 'Messages list'), S('새 문자를 읽으세요.', 'Read the new message.', '', '', 'conversation')],
  'reply-message': [S('답장할 대화를 여세요.', 'Open the conversation.', '', '', 'Messages list'), S('아래 입력 칸을 누르세요.', 'Tap the text field at the bottom.', '', '', 'conversation'), S('답장을 쓰세요.', 'Type your reply.', '', '', 'conversation keyboard'), S('위쪽 화살표를 누르세요.', 'Tap the up arrow.', '보내기', 'Send', 'conversation with text')],
  'send-photo': [S('사진을 보낼 대화를 여세요.', 'Open the conversation.', '', '', 'conversation'), S('입력 칸 왼쪽 ＋를 누르세요.', 'Tap ＋ next to the text field.', '＋', '＋', 'conversation'), S('‘사진’을 누르세요.', 'Tap Photos.', '사진', 'Photos', 'apps menu'), S('보낼 사진을 누르세요.', 'Tap the photo.', '', '', 'photo picker'), S('위쪽 화살표를 누르세요.', 'Tap the up arrow to send.', '보내기', 'Send', 'photo attached')],
  'save-photo-from-message': [S('받은 사진을 누르세요.', 'Tap the photo you received.', '', '', 'conversation with photo'), S('왼쪽 아래 공유 버튼을 누르세요.', 'Tap the Share button.', '공유', 'Share', 'photo viewer'), S('‘이미지 저장’을 누르세요.', 'Tap Save Image.', '이미지 저장', 'Save Image', 'share sheet')],
  'group-message': [S('‘새로운 메시지’를 누르세요.', 'Tap Compose.', '새로운 메시지', 'Compose', 'Messages list'), S('받는 사람을 한 명씩 넣으세요.', 'Add each person one by one.', '받는 사람', 'To', 'New Message'), S('내용을 쓰세요.', 'Type your message.', '', '', 'New Message keyboard'), S('위쪽 화살표를 누르세요.', 'Tap the up arrow.', '보내기', 'Send', 'New Message with text')],
  'delete-message': [S('지울 말풍선을 길게 누르세요.', 'Touch and hold the message bubble.', '', '', 'conversation'), S('‘더 보기...’를 누르세요.', 'Tap More.', '더 보기...', 'More...', 'context menu'), S('왼쪽 아래 휴지통을 누르세요.', 'Tap the trash button.', '삭제', 'Delete', 'select mode'), S('‘메시지 삭제’를 누르세요.', 'Tap Delete Message.', '메시지 삭제', 'Delete Message', 'confirm')],
  'copy-code': [S('인증번호 문자가 오면 자판 위에 번호가 나와요.', 'When a code arrives, it appears above the keyboard.', '', '', 'code suggestion'), S('그 번호를 누르면 자동으로 들어가요.', 'Tap the code to fill it in.', '', '', 'code suggestion'), S('인증번호는 다른 사람에게 절대 알려 주지 마세요.', 'Never tell anyone your code.', '', '', 'code suggestion')],
  // ── 자판
  'use-keyboard': [S('글을 쓸 칸을 누르면 자판이 나와요.', 'Tap a text field to show the keyboard.', '', '', 'keyboard'), S('글자를 하나씩 누르세요.', 'Tap the letters one by one.', '', '', 'keyboard'), S('틀리면 ⌫ 버튼을 누르세요.', 'Tap ⌫ to delete a mistake.', '⌫', '⌫', 'keyboard')],
  dictation: [S('글을 쓸 칸을 누르세요.', 'Tap the text field.', '', '', 'keyboard'), S('자판의 마이크 버튼을 누르세요.', 'Tap the microphone on the keyboard.', '마이크', 'microphone', 'keyboard'), S('천천히 말하세요. 글자가 써져요.', 'Speak slowly. Your words appear as text.', '', '', 'dictation'), S('다 말하면 마이크 버튼을 다시 누르세요.', 'Tap the microphone again when you finish.', '마이크', 'microphone', 'dictation')],
  'emoji-keyboard': [S('자판 왼쪽 아래 웃는 얼굴(또는 지구본)을 누르세요.', 'Tap the smiley (or globe) key at the bottom left.', '이모지', 'Emoji', 'keyboard'), S('넣고 싶은 이모지를 누르세요.', 'Tap the emoji you want.', '', '', 'emoji keyboard'), S('‘ABC’ 또는 ‘가’를 누르면 글자 자판으로 돌아가요.', 'Tap ABC to go back to letters.', 'ABC', 'ABC', 'emoji keyboard')],
  'copy-paste': [S('복사할 글자를 길게 누르세요.', 'Touch and hold the text.', '', '', 'text'), S('‘복사하기’를 누르세요.', 'Tap Copy.', '복사하기', 'Copy', 'edit menu'), S('붙여넣을 칸을 길게 누르세요.', 'Touch and hold where you want to paste.', '', '', 'text field'), S('‘붙여넣기’를 누르세요.', 'Tap Paste.', '붙여넣기', 'Paste', 'edit menu')],
  // ── 카메라
  'open-camera': [S('‘카메라’ 앱을 누르세요.', 'Tap the Camera app.', '카메라', 'Camera', 'Home Screen'), S('카메라 화면이 나왔어요.', 'The Camera opens.', '', '', 'Camera')],
  'take-photo': [S('‘카메라’ 앱을 여세요.', 'Open Camera.', '카메라', 'Camera', 'Home Screen'), S('아래쪽 ‘사진’이 노란색인지 보세요.', 'Make sure Photo is selected.', '사진', 'PHOTO', 'Camera'), S('찍을 것을 화면에 맞추세요.', 'Point at what you want to take.', '', '', 'Camera'), S('하얀 동그라미 버튼을 누르세요.', 'Tap the white shutter button.', '셔터', 'Shutter', 'Camera')],
  'zoom-photo': [S('카메라 화면에서 두 손가락을 벌리세요.', 'Spread two fingers on the Camera screen.', '', '', 'Camera zoom'), S('하얀 버튼을 눌러 찍으세요.', 'Tap the shutter to take the photo.', '셔터', 'Shutter', 'Camera')],
  selfie: [S('카메라에서 오른쪽 아래 화살표 동그라미를 누르세요.', 'Tap the camera-switch button.', '카메라 전환', 'Switch camera', 'Camera'), S('화면에 내 얼굴을 맞추세요.', 'Frame your face.', '', '', 'front camera'), S('하얀 버튼을 누르세요.', 'Tap the shutter.', '셔터', 'Shutter', 'front camera')],
  'record-video': [S('카메라에서 ‘비디오’를 누르세요.', 'In Camera, tap Video.', '비디오', 'VIDEO', 'Camera'), S('빨간 버튼을 누르면 촬영이 시작돼요.', 'Tap the red button to start.', '녹화', 'Record', 'Video mode'), S('빨간 네모 버튼을 누르면 끝나요.', 'Tap the red square to stop.', '중단', 'Stop', 'recording')],
  // ── 사진
  'view-photos': [S('‘사진’ 앱을 누르세요.', 'Tap the Photos app.', '사진', 'Photos', 'Home Screen'), S('보고 싶은 사진을 누르세요.', 'Tap a photo.', '', '', 'Photos library'), S('옆으로 넘기면 다음 사진이 나와요.', 'Swipe to see the next photo.', '', '', 'photo')],
  'zoom-in-photo': [S('사진 위에서 두 손가락을 벌리세요.', 'Spread two fingers on the photo.', '', '', 'photo zoomed'), S('두 손가락을 오므리면 작아져요.', 'Pinch to zoom out.', '', '', 'photo')],
  'play-video': [S('‘사진’에서 동영상을 누르세요.', 'In Photos, tap a video.', '', '', 'Photos library'), S('재생 버튼을 누르세요.', 'Tap Play.', '재생', 'Play', 'video')],
  'delete-photo': [S('지울 사진을 여세요.', 'Open the photo.', '', '', 'photo'), S('휴지통 버튼을 누르세요.', 'Tap the trash button.', '삭제', 'Delete', 'photo'), S('‘사진 삭제’를 누르세요.', 'Tap Delete Photo.', '사진 삭제', 'Delete Photo', 'confirm')],
  'recover-photo': [S('‘사진’에서 ‘최근 삭제된 항목’을 찾아 누르세요.', 'In Photos, tap Recently Deleted.', '최근 삭제된 항목', 'Recently Deleted', 'Photos collections'), S('Face ID나 암호로 여세요.', 'Unlock with Face ID or your passcode.', '', '', 'locked album'), S('되살릴 사진을 누르세요.', 'Tap the photo.', '', '', 'Recently Deleted'), S('‘복구’를 누르세요.', 'Tap Recover.', '복구', 'Recover', 'photo')],
  'share-photo': [S('보낼 사진을 여세요.', 'Open the photo.', '', '', 'photo'), S('공유 버튼을 누르세요.', 'Tap the Share button.', '공유', 'Share', 'photo'), S('보낼 방법이나 사람을 누르세요.', 'Tap how or to whom to send.', '', '', 'share sheet')],
  // ── Safari
  'open-safari': [S('파란 나침반 ‘Safari’를 누르세요.', 'Tap Safari, the blue compass.', 'Safari', 'Safari', 'Home Screen')],
  'search-web': [S('Safari에서 주소창을 누르세요.', 'In Safari, tap the address bar.', '검색 또는 웹 사이트 이름 입력', 'Search or enter website name', 'Safari'), S('찾고 싶은 말을 쓰세요.', 'Type what you want to find.', '', '', 'Safari keyboard'), S('자판의 ‘이동’을 누르세요.', 'Tap Go on the keyboard.', '이동', 'go', 'Safari keyboard')],
  'go-back': [S('왼쪽 아래 ‹ 버튼을 누르세요.', 'Tap ‹ at the bottom left.', '뒤로', 'Back', 'Safari page')],
  'text-size-web': [S('주소창 왼쪽 ‘가가’ 또는 메뉴 버튼을 누르세요.', 'Tap the page menu button in the address bar.', '페이지 메뉴', 'Page Menu', 'Safari page'), S('큰 ‘가’를 눌러 글자를 키우세요.', 'Tap the larger A to make text bigger.', '가', 'A', 'page menu')],
  // ── 연결
  'wifi-connect': [S('‘설정’을 누르세요.', 'Tap Settings.', '설정', 'Settings', 'Home Screen'), S('‘Wi-Fi’를 누르세요.', 'Tap Wi-Fi.', 'Wi-Fi', 'Wi-Fi', 'Settings'), S('연결할 와이파이 이름을 누르세요.', 'Tap the network name.', '', '', 'Wi-Fi list'), S('비밀번호를 입력하세요.', 'Type the password.', '암호', 'Password', 'password sheet'), S('‘연결’을 누르세요.', 'Tap Join.', '연결', 'Join', 'password sheet')],
  'bluetooth-on': [S('‘설정’을 누르세요.', 'Tap Settings.', '설정', 'Settings', 'Home Screen'), S('‘Bluetooth’를 누르세요.', 'Tap Bluetooth.', 'Bluetooth', 'Bluetooth', 'Settings'), S('스위치를 눌러 초록색으로 켜세요.', 'Turn on the switch.', 'Bluetooth', 'Bluetooth', 'Bluetooth')],
  'bluetooth-pair': [S('이어폰을 연결 대기 상태로 만드세요(이어폰 설명서 참고).', 'Put the headphones in pairing mode (see their manual).', '', '', 'Bluetooth'), S('‘설정’ › ‘Bluetooth’를 여세요.', 'Open Settings › Bluetooth.', 'Bluetooth', 'Bluetooth', 'Settings'), S('‘기타 기기’에 나온 이어폰 이름을 누르세요.', 'Under Other Devices, tap the headphones.', '', '', 'Bluetooth list')],
  'airplane-mode': [S('제어 센터를 여세요.', 'Open Control Center.', '', '', 'Control Center'), S('비행기 버튼을 누르세요.', 'Tap the airplane button.', '에어플레인 모드', 'Airplane Mode', 'Control Center')],
  // ── 화면·글자
  'text-size': [S('‘설정’을 누르세요.', 'Tap Settings.', '설정', 'Settings', 'Home Screen'), S('‘디스플레이 및 밝기’를 누르세요.', 'Tap Display & Brightness.', '디스플레이 및 밝기', 'Display & Brightness', 'Settings'), S('‘텍스트 크기’를 누르세요.', 'Tap Text Size.', '텍스트 크기', 'Text Size', 'Display & Brightness'), S('막대를 오른쪽으로 끌어 글자를 키우세요.', 'Drag the slider to the right.', '', '', 'Text Size slider')],
  'bold-text': [S('‘설정’ › ‘디스플레이 및 밝기’를 여세요.', 'Open Settings › Display & Brightness.', '디스플레이 및 밝기', 'Display & Brightness', 'Settings'), S('‘볼드체 텍스트’를 켜세요.', 'Turn on Bold Text.', '볼드체 텍스트', 'Bold Text', 'Display & Brightness')],
  'display-zoom': [S('‘설정’ › ‘디스플레이 및 밝기’를 여세요.', 'Open Settings › Display & Brightness.', '디스플레이 및 밝기', 'Display & Brightness', 'Settings'), S('‘디스플레이 확대’를 누르세요.', 'Tap Display Zoom.', '디스플레이 확대', 'Display Zoom', 'Display & Brightness'), S('‘더 큰 텍스트’를 고르세요.', 'Choose Larger Text.', '더 큰 텍스트', 'Larger Text', 'Display Zoom'), S('‘완료’를 누르세요.', 'Tap Done.', '완료', 'Done', 'Display Zoom')],
  brightness: [S('제어 센터를 여세요.', 'Open Control Center.', '', '', 'Control Center'), S('해 모양 막대를 위로 밀면 밝아져요.', 'Drag the sun slider up to make it brighter.', '밝기', 'Brightness', 'Control Center')],
  'auto-lock': [S('‘설정’ › ‘디스플레이 및 밝기’를 여세요.', 'Open Settings › Display & Brightness.', '디스플레이 및 밝기', 'Display & Brightness', 'Settings'), S('‘자동 잠금’을 누르세요.', 'Tap Auto-Lock.', '자동 잠금', 'Auto-Lock', 'Display & Brightness'), S('화면이 꺼질 시간을 고르세요.', 'Choose a time.', '5분', '5 minutes', 'Auto-Lock')],
  // ── 소리
  'ringtone-volume': [S('‘설정’ › ‘사운드 및 햅틱’을 여세요.', 'Open Settings › Sounds & Haptics.', '사운드 및 햅틱', 'Sounds & Haptics', 'Settings'), S('‘벨소리 및 알림’ 막대를 오른쪽으로 끄세요.', 'Drag the Ringtone and Alerts slider to the right.', '벨소리 및 알림', 'Ringtone and Alerts', 'Sounds & Haptics')],
  'change-ringtone': [S('‘설정’ › ‘사운드 및 햅틱’을 여세요.', 'Open Settings › Sounds & Haptics.', '사운드 및 햅틱', 'Sounds & Haptics', 'Settings'), S('‘벨소리’를 누르세요.', 'Tap Ringtone.', '벨소리', 'Ringtone', 'Sounds & Haptics'), S('마음에 드는 벨소리를 누르세요.', 'Tap a ringtone you like.', '', '', 'Ringtone list')],
  'do-not-disturb': [S('제어 센터를 여세요.', 'Open Control Center.', '', '', 'Control Center'), S('‘집중 모드’를 누르세요.', 'Tap Focus.', '집중 모드', 'Focus', 'Control Center'), S('‘방해 금지 모드’를 누르세요.', 'Tap Do Not Disturb.', '방해 금지 모드', 'Do Not Disturb', 'Focus menu')],
  // ── 앱
  'install-app': [S('‘App Store’를 누르세요.', 'Tap App Store.', 'App Store', 'App Store', 'Home Screen'), S('아래쪽 ‘검색’을 누르세요.', 'Tap Search.', '검색', 'Search', 'App Store'), S('앱 이름을 쓰세요.', 'Type the app name.', '', '', 'App Store search'), S('앱 옆 ‘받기’를 누르세요.', 'Tap Get next to the app.', '받기', 'Get', 'search results'), S('옆 버튼을 두 번 누르거나 Face ID로 확인하세요.', 'Double-click the side button or use Face ID to confirm.', '', '', 'confirm sheet')],
  'update-apps': [S('‘App Store’를 여세요.', 'Open App Store.', 'App Store', 'App Store', 'Home Screen'), S('오른쪽 위 내 사진을 누르세요.', 'Tap your profile picture at the top right.', '계정', 'Account', 'App Store'), S('‘모두 업데이트’를 누르세요.', 'Tap Update All.', '모두 업데이트', 'Update All', 'Account')],
  'delete-app': [S('지울 앱을 길게 누르세요.', 'Touch and hold the app.', '', '', 'Home Screen'), S('‘앱 제거’를 누르세요.', 'Tap Remove App.', '앱 제거', 'Remove App', 'app menu'), S('‘앱 삭제’를 누르세요.', 'Tap Delete App.', '앱 삭제', 'Delete App', 'confirm'), S('‘삭제’를 눌러 확인하세요.', 'Tap Delete to confirm.', '삭제', 'Delete', 'confirm')],
  // ── 배터리
  'charge-iphone': [S('충전 케이블을 아이폰 아래 구멍에 꽂으세요.', 'Plug the cable into the port at the bottom.', '', '', 'charging'), S('케이블 반대쪽을 충전기에 꽂고 콘센트에 연결하세요.', 'Connect the other end to a power adapter and outlet.', '', '', 'charging'), S('배터리 모양에 번개 표시가 나오면 충전 중이에요.', 'A lightning bolt on the battery means it is charging.', '', '', 'status bar charging')],
  'battery-percentage': [S('‘설정’ › ‘배터리’를 여세요.', 'Open Settings › Battery.', '배터리', 'Battery', 'Settings'), S('‘배터리 잔량(%)’을 켜세요.', 'Turn on Battery Percentage.', '배터리 잔량(%)', 'Battery Percentage', 'Battery')],
  'low-power-mode': [S('‘설정’ › ‘배터리’를 여세요.', 'Open Settings › Battery.', '배터리', 'Battery', 'Settings'), S('‘저전력 모드’를 켜세요.', 'Turn on Low Power Mode.', '저전력 모드', 'Low Power Mode', 'Battery')],
  // ── 시계
  'set-alarm': [S('‘시계’ 앱을 누르세요.', 'Tap the Clock app.', '시계', 'Clock', 'Home Screen'), S('아래쪽 ‘알람’을 누르세요.', 'Tap Alarms at the bottom.', '알람', 'Alarms', 'Clock'), S('오른쪽 위 ＋를 누르세요.', 'Tap ＋ at the top right.', '＋', '＋', 'Alarms'), S('시간과 분을 위아래로 돌려 맞추세요.', 'Scroll to set the hour and minute.', '', '', 'Add Alarm'), S('‘저장’을 누르세요.', 'Tap Save.', '저장', 'Save', 'Add Alarm')],
  timer: [S('‘시계’ › ‘타이머’를 누르세요.', 'Open Clock › Timers.', '타이머', 'Timers', 'Clock'), S('시간을 돌려 맞추세요.', 'Set the time.', '', '', 'Timer'), S('‘시작’을 누르세요.', 'Tap Start.', '시작', 'Start', 'Timer')],
  flashlight: {
    face: [S('제어 센터를 여세요.', 'Open Control Center.', '', '', 'Control Center'), S('손전등 버튼을 누르세요. 다시 누르면 꺼져요.', 'Tap the flashlight button. Tap again to turn it off.', '손전등', 'Flashlight', 'Control Center')],
    home: [S('화면 아래에서 위로 쓸어올려 제어 센터를 여세요.', 'Swipe up from the bottom to open Control Center.', '', '', 'Control Center'), S('손전등 버튼을 누르세요. 다시 누르면 꺼져요.', 'Tap the flashlight button. Tap again to turn it off.', '손전등', 'Flashlight', 'Control Center')],
  },
  weather: [S('‘날씨’ 앱을 누르세요.', 'Tap the Weather app.', '날씨', 'Weather', 'Home Screen'), S('오늘 날씨와 시간별 날씨를 보세요.', 'See today’s and hourly weather.', '', '', 'Weather')],
  'new-note': [S('‘메모’ 앱을 누르세요.', 'Tap the Notes app.', '메모', 'Notes', 'Home Screen'), S('오른쪽 아래 새 메모 버튼을 누르세요.', 'Tap the new note button at the bottom right.', '새로운 메모', 'New Note', 'Notes'), S('내용을 쓰세요. 저절로 저장돼요.', 'Type your note. It saves by itself.', '', '', 'note')],
  // ── 보안
  passcode: [S('‘설정’ › ‘Face ID 및 암호’(또는 ‘Touch ID 및 암호’)를 여세요.', 'Open Settings › Face ID & Passcode (or Touch ID & Passcode).', 'Face ID 및 암호', 'Face ID & Passcode', 'Settings'), S('‘암호 켜기’를 누르세요.', 'Tap Turn Passcode On.', '암호 켜기', 'Turn Passcode On', 'Face ID & Passcode'), S('6자리 숫자를 두 번 입력하세요.', 'Enter a 6-digit passcode twice.', '', '', 'passcode entry')],
  'face-id-setup': [S('‘설정’ › ‘Face ID 및 암호’를 여세요.', 'Open Settings › Face ID & Passcode.', 'Face ID 및 암호', 'Face ID & Passcode', 'Settings'), S('‘Face ID 설정’을 누르세요.', 'Tap Set Up Face ID.', 'Face ID 설정', 'Set Up Face ID', 'Face ID & Passcode'), S('얼굴을 동그라미 안에 맞추고 천천히 고개를 돌리세요.', 'Put your face in the circle and slowly move your head.', '', '', 'Face ID scan')],
  'touch-id-setup': [S('‘설정’ › ‘Touch ID 및 암호’를 여세요.', 'Open Settings › Touch ID & Passcode.', 'Touch ID 및 암호', 'Touch ID & Passcode', 'Settings'), S('‘지문 추가...’를 누르세요.', 'Tap Add a Fingerprint.', '지문 추가...', 'Add a Fingerprint...', 'Touch ID & Passcode'), S('홈 버튼에 손가락을 올렸다 떼기를 반복하세요.', 'Touch the Home button with your finger again and again.', '', '', 'Touch ID scan')],
  'software-update': [S('‘설정’ › ‘일반’을 여세요.', 'Open Settings › General.', '일반', 'General', 'Settings'), S('‘소프트웨어 업데이트’를 누르세요.', 'Tap Software Update.', '소프트웨어 업데이트', 'Software Update', 'General'), S('업데이트가 있으면 ‘지금 업데이트’를 누르세요.', 'If there is an update, tap Update Now.', '지금 업데이트', 'Update Now', 'Software Update')],
  'scam-prevention': [S('모르는 번호로 온 링크는 누르지 마세요.', 'Do not tap links from unknown numbers.', '', '', 'message with link'), S('가족이라며 돈을 보내 달라는 문자는 전화로 먼저 확인하세요.', 'If “family” asks for money by text, call them first.', '', '', 'scam text'), S('인증번호·비밀번호는 누구에게도 알려 주지 마세요.', 'Never share codes or passwords.', '', '', 'code message'), S('스팸이면 문자를 길게 눌러 ‘정크로 신고’하세요.', 'For spam, use Report Junk.', '정크 신고', 'Report Junk', 'conversation')],
  // ── 손쉬운 사용
  zoom: [S('‘설정’ › ‘손쉬운 사용’을 여세요.', 'Open Settings › Accessibility.', '손쉬운 사용', 'Accessibility', 'Settings'), S('‘확대/축소’를 누르세요.', 'Tap Zoom.', '확대/축소', 'Zoom', 'Accessibility'), S('‘확대/축소’를 켜세요.', 'Turn on Zoom.', '확대/축소', 'Zoom', 'Zoom'), S('세 손가락으로 화면을 두 번 두드리면 커져요.', 'Double-tap the screen with three fingers to zoom.', '', '', 'zoomed screen')],
  magnifier: [S('‘돋보기’ 앱을 누르세요(없으면 검색해서 여세요).', 'Open the Magnifier app (search for it if needed).', '돋보기', 'Magnifier', 'Home Screen'), S('보고 싶은 글자에 카메라를 대세요.', 'Point the camera at the text.', '', '', 'Magnifier'), S('막대를 밀어 크게 보세요.', 'Drag the slider to zoom.', '', '', 'Magnifier')],
  'speak-screen': [S('‘설정’ › ‘손쉬운 사용’ › ‘말하기 콘텐츠’를 여세요.', 'Open Settings › Accessibility › Spoken Content.', '말하기 콘텐츠', 'Spoken Content', 'Accessibility'), S('‘화면 말하기’를 켜세요.', 'Turn on Speak Screen.', '화면 말하기', 'Speak Screen', 'Spoken Content'), S('읽고 싶은 화면에서 두 손가락으로 위에서 아래로 쓸어내리세요.', 'On any screen, swipe down from the top with two fingers.', '', '', 'Speak Screen controller')],
  voiceover: [S('‘설정’ › ‘손쉬운 사용’ › ‘VoiceOver’를 여세요.', 'Open Settings › Accessibility › VoiceOver.', 'VoiceOver', 'VoiceOver', 'Accessibility'), S('‘VoiceOver’ 스위치를 누르세요.', 'Tap the VoiceOver switch.', 'VoiceOver', 'VoiceOver', 'VoiceOver'), S('끌 때는 스위치를 눌러 고른 다음, 화면 아무 곳이나 두 번 두드리세요.', 'To turn it off, select the switch. Double-tap anywhere to switch it.', '', '', 'VoiceOver')],
  assistivetouch: [S('‘설정’ › ‘손쉬운 사용’ › ‘터치’를 여세요.', 'Open Settings › Accessibility › Touch.', '터치', 'Touch', 'Accessibility'), S('‘AssistiveTouch’를 누르세요.', 'Tap AssistiveTouch.', 'AssistiveTouch', 'AssistiveTouch', 'Touch'), S('스위치를 켜세요. 화면에 회색 동그라미 버튼이 생겨요.', 'Turn it on. A gray round button appears.', 'AssistiveTouch', 'AssistiveTouch', 'AssistiveTouch')],
  'assistive-access': [S('‘설정’ › ‘손쉬운 사용’ › ‘보조 접근’을 여세요.', 'Open Settings › Accessibility › Assistive Access.', '보조 접근', 'Assistive Access', 'Accessibility'), S('‘보조 접근 설정’을 누르세요.', 'Tap Set Up Assistive Access.', '보조 접근 설정', 'Set Up Assistive Access', 'Assistive Access'), S('화면 안내에 따라 쓸 앱을 고르세요.', 'Follow the steps to choose apps.', '', '', 'setup'), S('보호자와 함께 설정하는 것이 좋아요.', 'It is best to set it up with a helper.', '', '', 'setup')],
  // ── 파일
  'airdrop-send': [S('보낼 사진을 여세요.', 'Open the photo.', '', '', 'photo'), S('공유 버튼을 누르세요.', 'Tap Share.', '공유', 'Share', 'photo'), S('‘AirDrop’을 누르세요.', 'Tap AirDrop.', 'AirDrop', 'AirDrop', 'share sheet'), S('받을 사람의 기기를 누르세요.', 'Tap the person’s device.', '', '', 'AirDrop list')],
  screenshot: {
    face: [S('옆 버튼과 음량 높이기 버튼을 동시에 눌렀다 떼세요.', 'Press and release the side button and volume up together.', '', '', 'screenshot thumbnail'), S('왼쪽 아래 작은 그림이 나오면 찍힌 거예요.', 'A thumbnail appears at the bottom left.', '', '', 'screenshot thumbnail')],
    home: [S('옆 버튼과 홈 버튼을 동시에 눌렀다 떼세요.', 'Press and release the side button and Home button together.', '', '', 'screenshot thumbnail'), S('왼쪽 아래 작은 그림이 나오면 찍힌 거예요.', 'A thumbnail appears at the bottom left.', '', '', 'screenshot thumbnail')],
  },
  'check-storage': [S('‘설정’ › ‘일반’을 여세요.', 'Open Settings › General.', '일반', 'General', 'Settings'), S('‘iPhone 저장 공간’을 누르세요.', 'Tap iPhone Storage.', 'iPhone 저장 공간', 'iPhone Storage', 'General'), S('남은 공간과 앱별 사용량을 보세요.', 'See free space and how much each app uses.', '', '', 'iPhone Storage')],
  // ── iCloud
  'icloud-backup': [S('‘설정’을 누르세요.', 'Tap Settings.', '설정', 'Settings', 'Home Screen'), S('맨 위 내 이름을 누르세요.', 'Tap your name at the top.', '', '', 'Settings'), S('‘iCloud’를 누르세요.', 'Tap iCloud.', 'iCloud', 'iCloud', 'Apple Account'), S('‘iCloud 백업’을 누르세요.', 'Tap iCloud Backup.', 'iCloud 백업', 'iCloud Backup', 'iCloud'), S('‘지금 백업’을 누르세요.', 'Tap Back Up Now.', '지금 백업', 'Back Up Now', 'iCloud Backup')],
  // ── 건강·지도
  'medical-id': [S('‘건강’ 앱을 누르세요.', 'Tap the Health app.', '건강', 'Health', 'Home Screen'), S('오른쪽 위 내 사진을 누르세요.', 'Tap your picture at the top right.', '', '', 'Health'), S('‘의료 정보’를 누르세요.', 'Tap Medical ID.', '의료 정보', 'Medical ID', 'profile'), S('‘시작하기’ 또는 ‘편집’을 누르세요.', 'Tap Get Started or Edit.', '편집', 'Edit', 'Medical ID'), S('지병·복용 약·혈액형을 쓰세요.', 'Add your conditions, medications and blood type.', '', '', 'Medical ID edit'), S('‘잠겨 있을 때 보기’를 켜세요.', 'Turn on Show When Locked.', '잠겨 있을 때 보기', 'Show When Locked', 'Medical ID edit'), S('‘완료’를 누르세요.', 'Tap Done.', '완료', 'Done', 'Medical ID edit')],
  'maps-search': [S('‘지도’ 앱을 누르세요.', 'Tap the Maps app.', '지도', 'Maps', 'Home Screen'), S('‘지도 검색’ 칸을 누르세요.', 'Tap the search field.', '지도 검색', 'Search Maps', 'Maps'), S('장소 이름을 쓰세요.', 'Type the place name.', '', '', 'search results')],
  'find-my': [S('‘나의 찾기’ 앱을 누르세요.', 'Tap the Find My app.', '나의 찾기', 'Find My', 'Home Screen'), S('아래쪽 ‘기기’를 누르세요.', 'Tap Devices.', '기기', 'Devices', 'Find My'), S('찾을 기기를 누르세요.', 'Tap the device.', '', '', 'device list'), S('‘사운드 재생’을 누르면 소리가 나요.', 'Tap Play Sound.', '사운드 재생', 'Play Sound', 'device card')],
  // ── Siri
  'siri-setup': [S('‘설정’ › ‘Siri’를 여세요(예전 버전: ‘Siri 및 검색’).', 'Open Settings › Siri (or Siri & Search).', 'Siri', 'Siri', 'Settings'), S('‘Siri에게 말하기’ 또는 ‘듣기’를 누르세요.', 'Tap Talk to Siri or Listen for.', 'Siri에게 말하기', 'Talk to Siri', 'Siri'), S('화면 안내에 따라 몇 문장을 말하세요.', 'Say the phrases on screen.', '', '', 'Siri setup')],
  'siri-voice': [S('“시리야”라고 부르세요(설정한 말).', 'Say “Siri” or “Hey Siri” (as set up).', '', '', 'Siri active'), S('하고 싶은 일을 말하세요. 예: “내일 날씨 알려 줘”.', 'Say what you want, for example “What’s the weather tomorrow?”', '', '', 'Siri answer')],
  // ── 문제 해결
  'emergency-sos': [S('긴급 구조 요청은 버튼으로 긴급 전화를 거는 기능이에요.', 'Emergency SOS calls emergency services with the buttons.', '', '', 'Emergency SOS settings'), S('연습 때는 실제로 누르지 말고 이 화면으로만 익히세요.', 'Do not press it to practice — learn with these pictures.', '', '', 'SOS slider (demo)'), S('‘설정’ › ‘긴급 구조 요청’에서 방법을 확인하세요.', 'Check how it works in Settings › Emergency SOS.', '긴급 구조 요청', 'Emergency SOS', 'Settings')],
  'frozen-screen': [S('먼저 옆 버튼을 길게 눌러 전원을 꺼 보세요.', 'First, try turning it off with the side button.', '', '', 'power-off slider'), S('꺼지지 않으면 ‘강제로 다시 시작하기’ 수업을 따라 하세요.', 'If it won’t turn off, follow the “Force restart” lesson.', '', '', 'Apple logo')],
  'not-charging': [S('케이블과 충전기가 끝까지 꽂혔는지 보세요.', 'Check the cable and adapter are plugged in firmly.', '', '', 'charging'), S('다른 콘센트나 케이블로 바꿔 보세요.', 'Try another outlet or cable.', '', '', 'charging'), S('충전 구멍의 먼지를 조심히 확인하세요.', 'Check the port for lint, gently.', '', '', 'port'), S('그래도 안 되면 Apple 지원에 문의하세요.', 'If it still won’t charge, contact Apple Support.', '', '', 'Apple Support')],
};
