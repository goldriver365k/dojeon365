// 아이폰 사용법 목차 — 22개 대분류, 440개 사용법(한국어·영어 제목)
// 한 줄 = "주소(slug)|한국어 제목|English title". 맨 앞 * = 시니어 필수(우선 제작)
// 근거: Apple iPhone 사용 설명서(https://support.apple.com/guide/iphone/welcome/ios) 목차의 실제 기능.
// 숫자를 맞추려고 없는 기능을 만들지 않는다. 기종·버전에 따라 없는 기능은 catalog의 requires로 구분한다.

export const CHAPTERS = [
  ['basics', '아이폰 기본 사용법', 'iPhone basics', `
*power-on|아이폰 전원 켜기|Turn on your iPhone
*power-off|아이폰 전원 끄기|Turn off your iPhone
*restart|아이폰 다시 시작하기|Restart your iPhone
force-restart|아이폰 강제로 다시 시작하기|Force restart your iPhone
*wake-unlock|화면 켜고 잠금 풀기|Wake and unlock your iPhone
*lock-screen|화면 끄기(잠그기)|Lock your iPhone
*go-home|홈 화면으로 가기|Go to the Home Screen
*basic-gestures|누르기·길게 누르기·쓸어넘기기 익히기|Learn tap, touch and hold, and swipe
*open-app|앱 열기|Open an app
*switch-apps|최근 앱으로 바꾸기|Switch between open apps
close-app|앱 닫기|Close an app
*control-center|제어 센터 열기|Open Control Center
*notification-center|알림 센터 보기|View Notification Center
status-icons|화면 위 상태 아이콘 이해하기|Understand the status icons
*volume-buttons|음량 버튼 사용하기|Use the volume buttons
*silent-mode|무음 모드 켜고 끄기|Turn Silent mode on or off
action-button|동작 버튼 사용하기|Use the Action button
rearrange-apps|홈 화면 앱 위치 바꾸기|Move apps on the Home Screen
app-folder|앱 폴더 만들기|Create a folder for apps
app-library|앱 보관함 사용하기|Use the App Library
spotlight-search|홈 화면에서 검색하기|Search from the Home Screen
add-widget|위젯 추가하기|Add a widget
lock-screen-wallpaper|잠금 화면 배경 바꾸기|Change the Lock Screen wallpaper
*check-model|내 아이폰 모델 확인하기|Find your iPhone model
*check-ios-version|iOS 버전 확인하기|Find your iOS version
`],
  ['phone', '전화 걸기 및 받기', 'Phone calls', `
*make-call|전화 걸기|Make a phone call
*answer-call|전화 받기|Answer a call
*decline-call|전화 거절하기|Decline a call
*end-call|전화 끊기|End a call
*speaker-call|통화 중 스피커폰 켜기|Use the speaker during a call
mute-call|통화 중 내 소리 끄기|Mute yourself during a call
*call-from-recents|최근 통화에서 다시 걸기|Call back from Recents
call-favorites|즐겨찾기에 추가하고 전화하기|Add a favorite and call it
voicemail|음성 사서함 듣기|Listen to voicemail
*keypad-during-call|통화 중 키패드 누르기|Use the keypad during a call
*block-number|모르는 번호 차단하기|Block a phone number
silence-unknown|모르는 발신자 소리 끄기|Silence unknown callers
conference-call|여러 명과 통화하기|Make a conference call
*facetime-call|FaceTime 영상통화하기|Make a FaceTime video call
live-voicemail|실시간 음성 메시지 보기|Use Live Voicemail
`],
  ['contacts', '연락처 관리', 'Contacts', `
*add-contact|새 연락처 저장하기|Add a new contact
save-from-recents|최근 통화 번호를 연락처에 저장하기|Save a number from Recents
*edit-contact|연락처 고치기|Edit a contact
delete-contact|연락처 지우기|Delete a contact
*search-contact|연락처 찾기|Search your contacts
contact-photo|연락처에 사진 넣기|Add a photo to a contact
share-contact|연락처 보내기|Share a contact
my-card|내 정보(내 카드) 등록하기|Set up your contact card
contact-poster|연락처 포스터 만들기|Create a Contact Poster
emergency-contact|긴급 연락처 지정하기|Add an emergency contact
favorites-contact|자주 거는 사람 즐겨찾기|Add contacts to Favorites
merge-duplicates|중복된 연락처 합치기|Merge duplicate contacts
`],
  ['messages', '문자 및 iMessage 사용법', 'Messages and iMessage', `
*send-message|문자 보내기|Send a text message
*read-message|받은 문자 읽기|Read a message
*reply-message|문자에 답장하기|Reply to a message
*send-photo|사진 보내기|Send a photo
*save-photo-from-message|받은 사진 저장하기|Save a photo you received
*group-message|여러 명에게 문자 보내기|Send a group message
imessage-vs-sms|파란 말풍선과 초록 말풍선 차이 알기|Know blue and green message bubbles
tapback|문자에 반응(하트·좋아요) 남기기|React with a Tapback
*delete-message|문자 지우기|Delete a message
delete-conversation|대화 전체 지우기|Delete a conversation
send-voice-message|음성 메시지 보내기|Send an audio message
send-location-message|문자로 내 위치 보내기|Share your location in Messages
pin-conversation|자주 쓰는 대화 고정하기|Pin a conversation
mute-conversation|대화 알림 끄기|Hide alerts for a conversation
*copy-code|문자로 받은 인증번호 쓰기|Use a verification code from Messages
edit-message|보낸 iMessage 고치기|Edit a sent iMessage
undo-send|보낸 iMessage 취소하기|Undo sending an iMessage
filter-unknown|모르는 발신자 문자 따로 보기|Filter unknown senders
report-junk|스팸 문자 신고하기|Report junk messages
search-messages|문자 내용 찾기|Search your messages
`],
  ['keyboard', '자판 및 음성 입력', 'Keyboard and dictation', `
*use-keyboard|자판으로 글자 쓰기|Type with the keyboard
change-keyboard-language|자판 언어 바꾸기|Switch keyboard language
add-keyboard|자판 추가하기|Add a keyboard
numbers-symbols|숫자와 기호 입력하기|Type numbers and symbols
*dictation|음성으로 문자 입력하기|Dictate text with your voice
*emoji-keyboard|이모티콘(이모지) 넣기|Add emoji
move-cursor|글자 사이로 커서 옮기기|Move the cursor
select-text|글자 선택하기|Select text
*copy-paste|복사하고 붙여넣기|Copy and paste
undo-typing|방금 쓴 글자 되돌리기|Undo typing
autocorrect|자동 수정 켜고 끄기|Turn autocorrect on or off
text-replacement|자주 쓰는 문장 줄여 쓰기|Use text replacement
one-handed-keyboard|한 손 자판 쓰기|Use the one-handed keyboard
handwriting-keyboard|손글씨로 입력하기(중국어 등)|Use handwriting input
keyboard-sound|자판 소리와 진동 바꾸기|Change keyboard sounds and haptics
`],
  ['camera', '카메라 및 동영상 촬영', 'Camera and video', `
*open-camera|카메라 열기|Open the Camera
*take-photo|사진 찍기|Take a photo
camera-from-lock|잠금 화면에서 카메라 열기|Open the Camera from the Lock Screen
*zoom-photo|확대해서 찍기|Zoom in the Camera
focus-exposure|초점과 밝기 맞추기|Adjust focus and exposure
*selfie|셀카 찍기|Take a selfie
*record-video|동영상 찍기|Record a video
pause-video|동영상 찍다가 잠깐 멈추기|Pause while recording a video
flash|플래시 켜고 끄기|Turn the flash on or off
portrait-mode|인물 사진 모드 쓰기|Use Portrait mode
panorama|파노라마 사진 찍기|Take a panorama photo
night-mode|어두운 곳에서 찍기(야간 모드)|Use Night mode
timer-photo|타이머로 사진 찍기|Use the Camera timer
burst|연속 사진 찍기|Take burst photos
live-photo|라이브 포토 켜고 끄기|Turn Live Photos on or off
grid-lines|화면에 격자선 보기|Turn on the grid
macro|가까이 찍기(매크로)|Take macro photos
slow-motion|슬로 모션 동영상 찍기|Record slow-motion video
time-lapse|타임랩스 동영상 찍기|Record a time-lapse
cinematic|시네마틱 모드 동영상 찍기|Record in Cinematic mode
photographic-styles|사진 스타일 바꾸기|Use Photographic Styles
qr-scan|카메라로 QR 코드 읽기|Scan a QR code with the Camera
live-text-camera|카메라로 글자 읽어 복사하기|Use Live Text in the Camera
camera-control|카메라 컨트롤 버튼 쓰기|Use Camera Control
volume-shutter|음량 버튼으로 사진 찍기|Take a photo with the volume button
mirror-selfie|셀카 좌우 반전 설정하기|Mirror the front camera
video-resolution|동영상 화질 바꾸기|Change video quality
camera-settings-keep|카메라 설정 그대로 두기|Preserve Camera settings
lens-switch|광각·망원 렌즈 바꾸기|Switch camera lenses
quick-take|사진 모드에서 바로 동영상 찍기|Record a QuickTake video
`],
  ['photos', '사진 및 앨범 관리', 'Photos and albums', `
*view-photos|찍은 사진 보기|View your photos
*zoom-in-photo|사진 크게 보기|Zoom in on a photo
*play-video|동영상 보기|Play a video
*delete-photo|사진 지우기|Delete a photo
*recover-photo|지운 사진 되살리기|Recover a deleted photo
favorite-photo|좋아하는 사진 표시하기|Mark a photo as a favorite
create-album|앨범 만들기|Create an album
add-to-album|사진을 앨범에 넣기|Add photos to an album
*share-photo|사진 공유하기|Share a photo
crop-photo|사진 자르기|Crop a photo
rotate-photo|사진 돌리기|Rotate a photo
auto-enhance|사진 자동 보정하기|Auto-enhance a photo
edit-filter|사진에 필터 넣기|Add a filter to a photo
revert-edit|편집 전 사진으로 되돌리기|Revert to the original photo
trim-video|동영상 앞뒤 자르기|Trim a video
search-photos|사진 찾기|Search your photos
people-pets|사람·반려동물별 사진 보기|View People and Pets
memories|추억 영상 보기|Watch Memories
hide-photo|사진 가리기(가린 항목)|Hide a photo
select-multiple|여러 장 한꺼번에 고르기|Select multiple photos
screenshot-photos|스크린샷 모아 보기|Find screenshots
copy-subject|사진 속 대상만 떼어 내기|Lift a subject from a photo
duplicates|중복된 사진 정리하기|Merge duplicate photos
shared-album|가족과 함께 보는 공유 앨범 만들기|Create a shared album
print-photo|사진 인쇄하기|Print a photo
`],
  ['safari', 'Safari 인터넷 사용법', 'Safari web browsing', `
*open-safari|Safari 열기|Open Safari
*search-web|인터넷 검색하기|Search the web
type-address|주소 입력해서 들어가기|Go to a website address
*go-back|이전 페이지로 돌아가기|Go back to the previous page
new-tab|새 탭 열기|Open a new tab
close-tab|탭 닫기|Close tabs
bookmark|즐겨찾기(북마크) 추가하기|Bookmark a website
open-bookmark|즐겨찾기 열기|Open a bookmark
reader-mode|글만 크게 보기(읽기 도우미)|Use Reader
*text-size-web|웹 페이지 글자 크기 바꾸기|Change text size on a webpage
zoom-web|웹 페이지 확대하기|Zoom in on a webpage
reading-list|읽기 목록에 저장하기|Add to Reading List
share-link|웹 페이지 주소 보내기|Share a link
private-browsing|개인 정보 보호 브라우징 쓰기|Use Private Browsing
clear-history|방문 기록 지우기|Clear browsing history
find-on-page|페이지에서 글자 찾기|Find text on a page
download-file|파일 내려받기|Download a file
translate-page|웹 페이지 번역하기|Translate a webpage
listen-page|웹 페이지 읽어 주기 듣기|Listen to a webpage
add-to-home|웹사이트를 홈 화면에 추가하기|Add a website to the Home Screen
`],
  ['connectivity', '와이파이·블루투스·데이터', 'Wi-Fi, Bluetooth and data', `
*wifi-connect|와이파이 연결하기|Connect to Wi-Fi
wifi-forget|와이파이 지우기|Forget a Wi-Fi network
wifi-password-share|와이파이 비밀번호 공유하기|Share a Wi-Fi password
wifi-qr|QR 코드로 와이파이 연결하기|Join Wi-Fi with a QR code
cellular-data|모바일 데이터 켜고 끄기|Turn cellular data on or off
data-usage|앱별 데이터 사용량 보기|Check cellular data usage
*airplane-mode|비행기 모드 켜고 끄기|Turn Airplane Mode on or off
*bluetooth-on|블루투스 켜기|Turn on Bluetooth
*bluetooth-pair|블루투스 이어폰 연결하기|Pair Bluetooth headphones
bluetooth-unpair|블루투스 기기 연결 해제하기|Unpair a Bluetooth device
airpods-connect|AirPods 연결하기|Connect AirPods
hotspot|개인용 핫스팟 켜기|Turn on Personal Hotspot
low-data-mode|저데이터 모드 쓰기|Use Low Data Mode
roaming|해외에서 데이터 로밍 켜고 끄기|Turn data roaming on or off
esim|eSIM 추가하기|Add an eSIM
network-reset|네트워크 설정 재설정하기|Reset network settings
car-bluetooth|자동차와 블루투스로 연결하기|Connect to your car with Bluetooth
nfc-tag|NFC 태그 읽기|Read an NFC tag
`],
  ['display', '화면·글자·밝기 설정', 'Display and text size', `
*text-size|글자 크게 만들기|Make text bigger
*bold-text|글자 굵게 하기|Make text bold
*display-zoom|화면 전체 크게 보기(디스플레이 확대)|Use Display Zoom
*brightness|화면 밝기 조절하기|Adjust brightness
auto-brightness|자동 밝기 켜고 끄기|Turn auto-brightness on or off
dark-mode|다크 모드 쓰기|Use Dark Mode
night-shift|밤에 눈이 편한 색으로 바꾸기(Night Shift)|Use Night Shift
true-tone|True Tone 켜고 끄기|Turn True Tone on or off
*auto-lock|화면 꺼지는 시간 바꾸기|Change Auto-Lock time
raise-to-wake|들어 올려서 깨우기|Use Raise to Wake
always-on|상시표시형 화면 켜고 끄기|Turn Always On display on or off
wallpaper|배경 화면 바꾸기|Change the wallpaper
text-size-app|앱마다 글자 크기 다르게 하기|Set text size for one app
larger-icons|홈 화면 아이콘 크게 보기|Make Home Screen icons larger
reduce-motion|화면 움직임 줄이기|Reduce motion
increase-contrast|대비 높이기|Increase contrast
button-shapes|버튼 모양 표시하기|Turn on button shapes
color-filters|색상 필터 쓰기|Use color filters
reduce-white-point|화면 눈부심 줄이기|Reduce white point
screen-orientation|화면 회전 잠그기|Lock screen orientation
`],
  ['sound', '소리·벨소리·알림 설정', 'Sounds, ringtones and notifications', `
*ringtone-volume|벨소리 크게 만들기|Make the ringer louder
*change-ringtone|벨소리 바꾸기|Change the ringtone
vibration|진동 켜고 끄기|Turn vibration on or off
contact-ringtone|사람마다 다른 벨소리 정하기|Set a ringtone for a contact
text-tone|문자 알림음 바꾸기|Change the text tone
notification-settings|앱 알림 켜고 끄기|Turn app notifications on or off
notification-preview|잠금 화면 알림 내용 가리기|Hide notification previews
*do-not-disturb|방해 금지 모드 쓰기|Use Do Not Disturb
sleep-focus|수면 모드 켜기|Turn on Sleep Focus
emergency-bypass|특정 사람 전화는 항상 울리게 하기|Allow calls from certain people
flash-alerts|알림 올 때 플래시 깜빡이기|Turn on LED flash for alerts
headphone-safety|이어폰 큰 소리 줄이기|Reduce loud headphone audio
announce-calls|전화 건 사람 이름 소리로 듣기|Announce calls
mono-audio|양쪽 이어폰 같은 소리로 듣기|Turn on Mono Audio
sound-recognition|초인종·사이렌 소리 알림 받기|Use Sound Recognition
`],
  ['apps', 'App Store 및 앱 관리', 'App Store and apps', `
*install-app|앱 설치하기|Install an app
search-app-store|App Store에서 앱 찾기|Search the App Store
*update-apps|앱 업데이트하기|Update apps
auto-update|앱 자동 업데이트 켜기|Turn on automatic app updates
*delete-app|앱 지우기|Delete an app
remove-from-home|앱을 홈 화면에서만 없애기|Remove an app from the Home Screen
offload-app|앱 정리하기(데이터는 남기기)|Offload an app
redownload|지운 앱 다시 받기|Redownload an app
app-permissions|앱 권한(사진·위치·마이크) 바꾸기|Change app permissions
subscriptions|구독 확인하고 취소하기|Check or cancel subscriptions
purchase-history|구입 내역 보기|View purchase history
screen-time|스크린 타임으로 사용 시간 보기|Check Screen Time
app-limits|앱 사용 시간 제한하기|Set app limits
lock-app|앱 잠그기(Face ID 필요)|Lock an app
hide-app|앱 숨기기|Hide an app
`],
  ['battery', '배터리·충전·절전', 'Battery and charging', `
*charge-iphone|아이폰 충전하기|Charge your iPhone
*battery-percentage|배터리 남은 양(%) 보기|Show battery percentage
*low-power-mode|저전력 모드 켜기|Turn on Low Power Mode
battery-health|배터리 성능 상태 보기|Check battery health
battery-usage|앱별 배터리 사용량 보기|See battery usage by app
wireless-charging|무선 충전하기|Charge wirelessly
magsafe-charging|MagSafe로 충전하기|Charge with MagSafe
optimized-charging|배터리 충전 최적화 쓰기|Use Optimized Battery Charging
charge-limit|충전 한도 정하기|Set a charging limit
fast-charging|빠르게 충전하기|Fast charge your iPhone
usb-c-charging|USB-C로 충전하기|Charge with USB-C
lightning-charging|라이트닝 케이블로 충전하기|Charge with a Lightning cable
battery-widget|배터리 위젯 추가하기|Add a battery widget
save-battery-tips|배터리 오래 쓰는 방법|Tips to save battery
charge-other-device|아이폰으로 다른 기기 충전하기|Charge another device from iPhone
`],
  ['clock', '시계·알람·계산기·날씨', 'Clock, alarms, calculator and weather', `
*set-alarm|알람 맞추기|Set an alarm
delete-alarm|알람 지우기|Delete an alarm
alarm-sound|알람 소리 바꾸기|Change the alarm sound
snooze|알람 다시 울림 쓰기|Snooze an alarm
*timer|타이머 쓰기|Use the timer
stopwatch|스톱워치 쓰기|Use the stopwatch
world-clock|세계 시계 보기|View the world clock
sleep-schedule|수면 일정과 기상 알람 정하기|Set a sleep schedule
*flashlight|손전등 켜기|Turn on the flashlight
calculator|계산기 쓰기|Use the Calculator
calculator-history|계산기 기록 보기|View calculator history
unit-conversion|계산기로 단위 바꾸기|Convert units in Calculator
*weather|날씨 보기|Check the weather
weather-city|다른 도시 날씨 추가하기|Add a city to Weather
weather-alerts|날씨 알림 받기|Get weather alerts
`],
  ['notes', '캘린더·메모·음성녹음', 'Calendar, Notes and Voice Memos', `
add-event|캘린더에 일정 넣기|Add a calendar event
event-alert|일정 알림 받기|Get an event alert
edit-event|일정 고치기|Edit an event
delete-event|일정 지우기|Delete an event
repeat-event|반복 일정 만들기|Create a repeating event
calendar-view|일·월 보기 바꾸기|Change the calendar view
holidays|공휴일 보기|Show holidays
*new-note|메모 쓰기|Create a note
checklist-note|체크리스트 메모 만들기|Make a checklist
note-photo|메모에 사진 넣기|Add a photo to a note
scan-document|메모로 서류 스캔하기|Scan a document in Notes
lock-note|메모 잠그기|Lock a note
pin-note|메모 고정하기|Pin a note
share-note|메모 함께 쓰기|Share a note
delete-note|메모 지우고 되살리기|Delete and recover a note
voice-memo|음성 녹음하기|Record a voice memo
play-voice-memo|녹음 듣기|Play a recording
rename-voice-memo|녹음 이름 바꾸기|Rename a recording
share-voice-memo|녹음 보내기|Share a recording
reminders|미리 알림 만들기|Create a reminder
`],
  ['security', 'Face ID·Touch ID·보안', 'Face ID, Touch ID and security', `
*passcode|암호 설정하기|Set a passcode
change-passcode|암호 바꾸기|Change your passcode
*face-id-setup|Face ID 설정하기|Set up Face ID
face-id-mask|마스크 쓰고 Face ID 쓰기|Use Face ID with a mask
alternate-appearance|Face ID 다른 모습 추가하기|Set up an alternate appearance
*touch-id-setup|Touch ID(지문) 설정하기|Set up Touch ID
touch-id-add|지문 더 추가하기|Add another fingerprint
face-id-apps|앱에서 Face ID 쓰기|Use Face ID in apps
passwords-app|저장된 비밀번호 보기|View saved passwords
autofill|비밀번호 자동 입력 쓰기|Use password AutoFill
two-factor|Apple 계정 이중 인증 확인하기|Check two-factor authentication
safety-check|안전 확인 쓰기|Use Safety Check
stolen-device|도난 기기 보호 켜기|Turn on Stolen Device Protection
lock-screen-access|잠금 상태에서 쓸 수 있는 기능 정하기|Choose what's available when locked
erase-data|암호 10번 틀리면 지우기 설정|Erase data after 10 failed passcodes
location-privacy|앱 위치 접근 확인하기|Check app location access
tracking|앱 추적 허용 끄기|Turn off app tracking
privacy-report|앱 개인 정보 보고서 보기|View the App Privacy Report
*software-update|iOS 업데이트하기|Update iOS
*scam-prevention|보이스피싱·사기 문자 예방하기|Avoid phone and text scams
`],
  ['accessibility', '시니어 편의 기능·손쉬운 사용', 'Senior-friendly and accessibility features', `
*zoom|화면 확대하기(확대/축소 기능)|Use Zoom to magnify the screen
*magnifier|돋보기로 작은 글자 보기|Use the Magnifier
*speak-screen|화면 읽어주기 듣기|Use Speak Screen
speak-selection|선택한 글자 읽어 주기|Use Speak Selection
*voiceover|VoiceOver 켜고 끄기|Turn VoiceOver on or off
voiceover-gestures|VoiceOver 기본 동작 익히기|Learn basic VoiceOver gestures
*assistivetouch|AssistiveTouch(화면 위 버튼) 쓰기|Use AssistiveTouch
*assistive-access|보조 접근 설정하기|Set up Assistive Access
assistive-access-exit|보조 접근 끝내기|Exit Assistive Access
accessibility-shortcut|손쉬운 사용 단축키 만들기|Set up the Accessibility Shortcut
back-tap|뒷면 두드리기로 기능 실행하기|Use Back Tap
touch-accommodations|화면 누르는 감도 바꾸기|Use Touch Accommodations
haptic-touch|길게 누르는 시간 바꾸기|Change Haptic Touch duration
reachability|화면 위쪽을 아래로 내리기(간편 접근)|Use Reachability
live-captions|실시간 자막 보기|Use Live Captions
hearing-devices|보청기 연결하기|Pair a hearing device
live-listen|아이폰을 마이크처럼 쓰기(실시간 듣기)|Use Live Listen
rtt|청각 장애인용 RTT 통화 쓰기|Use RTT calls
personal-voice|개인 음성 만들기|Create a Personal Voice
live-speech|글을 써서 대신 말하기(실시간 말하기)|Use Live Speech
voice-control|목소리로 아이폰 조작하기|Use Voice Control
eye-tracking|눈으로 아이폰 조작하기|Use Eye Tracking
background-sounds|배경 소리 틀기|Play Background Sounds
call-audio-routing|전화 받을 때 스피커로 바로 받기|Set call audio routing
auto-answer|전화 자동으로 받기|Auto-answer calls
side-button-speed|측면 버튼 누르는 속도 바꾸기|Adjust side button click speed
large-keyboard|자판 글자 크게 보기|Make keyboard letters bigger
detection-mode|돋보기로 사람·문 감지하기|Use Detection Mode
guided-access|한 앱만 쓰게 잠그기(사용법 유도)|Use Guided Access
accessibility-setup|처음 켤 때 손쉬운 사용 설정하기|Set up accessibility when starting
`],
  ['files', '파일·저장공간·AirDrop', 'Files, storage and AirDrop', `
*check-storage|저장 공간 확인하기|Check iPhone storage
free-storage|저장 공간 비우기|Free up storage
files-app|파일 앱 쓰기|Use the Files app
find-downloads|내려받은 파일 찾기|Find downloaded files
save-to-files|파일을 파일 앱에 저장하기|Save a file to Files
open-pdf|PDF 열어 보기|Open a PDF
sign-pdf|PDF에 서명하기|Sign a PDF
rename-file|파일 이름 바꾸기|Rename a file
delete-file|파일 지우기|Delete a file
zip-file|압축 파일 풀기|Unzip a file
usb-drive|USB 메모리 연결하기|Connect a USB drive
*airdrop-send|AirDrop으로 사진 보내기|Send photos with AirDrop
airdrop-receive|AirDrop 받기 설정하기|Set up AirDrop receiving
namedrop|아이폰끼리 대어 연락처 주고받기(NameDrop)|Share contacts with NameDrop
*screenshot|아이폰 화면 캡처하기|Take a screenshot
full-page-screenshot|웹 페이지 전체 캡처하기|Take a full-page screenshot
screen-recording|화면 녹화하기|Record your screen
markup|캡처한 화면에 글씨 쓰기|Mark up a screenshot
print|아이폰에서 인쇄하기|Print from iPhone
computer-transfer|컴퓨터로 사진 옮기기|Transfer photos to a computer
`],
  ['icloud', 'Apple 계정·iCloud·백업', 'Apple Account, iCloud and backup', `
create-apple-account|Apple 계정 만들기|Create an Apple Account
sign-in-apple-account|Apple 계정으로 로그인하기|Sign in with your Apple Account
apple-account-password|Apple 계정 암호 바꾸기|Change your Apple Account password
forgot-password|Apple 계정 암호를 잊었을 때|If you forgot your Apple Account password
recovery-contact|복구 연락처 지정하기|Add a recovery contact
legacy-contact|유산 관리자 지정하기|Add a Legacy Contact
icloud-storage|iCloud 저장 공간 확인하기|Check iCloud storage
icloud-photos|iCloud 사진 켜기|Turn on iCloud Photos
*icloud-backup|iCloud에 백업하기|Back up with iCloud
backup-computer|컴퓨터에 백업하기|Back up with a computer
restore-backup|백업에서 되살리기|Restore from a backup
new-iphone-transfer|새 아이폰으로 옮기기|Transfer to a new iPhone
icloud-sync|연락처·캘린더 iCloud 동기화|Sync contacts and calendars with iCloud
family-sharing|가족 공유 설정하기|Set up Family Sharing
ask-to-buy|자녀 구입 요청 받기|Use Ask to Buy
payment-method|결제 수단 바꾸기|Change your payment method
trusted-number|신뢰하는 전화번호 바꾸기|Change your trusted phone number
sign-out|Apple 계정에서 로그아웃하기|Sign out of your Apple Account
icloud-plus|iCloud+ 요금제 알아보기|Learn about iCloud+
erase-iphone|아이폰 초기화하기|Erase your iPhone
`],
  ['wallet', 'Apple Pay·건강·지도', 'Apple Pay, Health and Maps', `
add-card|Apple Pay에 카드 추가하기|Add a card to Apple Pay
pay-in-store|Apple Pay로 가게에서 결제하기|Pay in stores with Apple Pay
transit-card|교통 카드 쓰기(지원 지역)|Use a transit card
wallet-pass|탑승권·입장권 넣기|Add passes to Wallet
remove-card|Apple Pay 카드 지우기|Remove a card from Apple Pay
*medical-id|의료 정보 등록하기|Set up Medical ID
health-steps|걸음 수 보기|Check your steps
health-medications|복용 약 알림 받기|Get medication reminders
fall-detection|넘어짐 감지 알아보기(Apple Watch)|Learn about Fall Detection
health-share|건강 정보 가족과 공유하기|Share health data with family
walking-steadiness|걷기 안정성 알림 받기|Get walking steadiness alerts
*maps-search|지도에서 장소 찾기|Search for a place in Maps
maps-directions|길 찾기(경로 보기)|Get directions
maps-transit|대중교통 경로 보기(지원 지역)|Get transit directions
maps-share-eta|도착 예정 시간 알리기|Share your ETA
maps-offline|오프라인 지도 내려받기|Download offline maps
*find-my|나의 찾기로 아이폰 찾기|Find your iPhone with Find My
share-location|가족과 위치 공유하기|Share your location with family
airtag|AirTag로 물건 찾기|Find items with AirTag
check-in|안전 도착 알림(확인) 보내기|Use Check In
`],
  ['siri', 'Siri·Apple Intelligence', 'Siri and Apple Intelligence', `
*siri-setup|Siri 켜기|Turn on Siri
*siri-voice|목소리로 Siri 부르기|Talk to Siri with your voice
siri-button|버튼으로 Siri 부르기|Activate Siri with a button
type-to-siri|글자로 Siri에게 묻기|Type to Siri
siri-call|Siri로 전화 걸기|Make a call with Siri
siri-message|Siri로 문자 보내기|Send a message with Siri
siri-alarm|Siri로 알람 맞추기|Set an alarm with Siri
siri-timer|Siri로 타이머 맞추기|Set a timer with Siri
siri-weather|Siri에게 날씨 묻기|Ask Siri about the weather
siri-open-app|Siri로 앱 열기|Open an app with Siri
siri-reminder|Siri로 미리 알림 만들기|Create a reminder with Siri
siri-music|Siri로 음악 틀기|Play music with Siri
siri-flashlight|Siri로 손전등 켜기|Turn on the flashlight with Siri
siri-voice-change|Siri 목소리 바꾸기|Change Siri's voice
siri-language|Siri 언어 바꾸기|Change Siri's language
siri-lock-screen|잠금 화면에서 Siri 쓰기 정하기|Allow Siri when locked
siri-announce|Siri가 알림 읽어 주기|Announce notifications
siri-history|Siri 기록 지우기|Delete Siri history
siri-shortcuts|단축어로 자주 하는 일 만들기|Create a shortcut
ai-turn-on|Apple Intelligence 켜기|Turn on Apple Intelligence
writing-tools|글쓰기 도구로 글 다듬기|Use Writing Tools
ai-summary|긴 글 요약하기|Summarize text
notification-summary|알림 요약 보기|View notification summaries
clean-up|사진에서 필요 없는 것 지우기(정리)|Use Clean Up in Photos
image-playground|Image Playground로 그림 만들기|Create images with Image Playground
genmoji|나만의 이모지(Genmoji) 만들기|Create Genmoji
visual-intelligence|시각 지능으로 주변 사물 알아보기|Use Visual Intelligence
chatgpt-extension|ChatGPT 확장 쓰기|Use the ChatGPT extension
live-translation|실시간 번역 쓰기|Use Live Translation
ai-privacy|Apple Intelligence 개인 정보 보호 알기|Learn about Apple Intelligence privacy
`],
  ['trouble', '고장·분실·문제 해결', 'Troubleshooting and lost iPhone', `
*emergency-sos|긴급 구조 요청 기능 이해하기|Understand Emergency SOS
emergency-sos-settings|긴급 구조 요청 설정 확인하기|Check Emergency SOS settings
satellite-sos|위성 긴급 구조 요청 알아보기(지원 국가)|Learn about Emergency SOS via satellite
lost-mode|잃어버린 아이폰 분실 모드 켜기|Mark your iPhone as lost
erase-remotely|잃어버린 아이폰 원격으로 지우기|Erase a lost iPhone remotely
*frozen-screen|화면이 멈췄을 때|If your screen is frozen
*not-charging|충전이 안 될 때|If your iPhone won't charge
no-sound|소리가 안 날 때|If there is no sound
wifi-problem|와이파이가 안 될 때|If Wi-Fi isn't working
storage-full|저장 공간이 꽉 찼을 때|If your storage is full
app-crash|앱이 자꾸 꺼질 때|If an app keeps closing
forgot-passcode|암호를 잊었을 때|If you forgot your passcode
disabled-iphone|아이폰을 사용할 수 없다고 나올 때|If iPhone says it's unavailable
water-damage|물에 빠졌을 때|If your iPhone got wet
overheating|아이폰이 뜨거울 때|If your iPhone is hot
cracked-screen|화면이 깨졌을 때(수리 안내)|If your screen is cracked
apple-support|Apple 지원 앱으로 수리 예약하기|Book a repair with the Apple Support app
reset-settings|모든 설정 재설정하기|Reset all settings
sim-problem|SIM이 없다고 나올 때|If iPhone says no SIM
call-problem|전화가 안 될 때|If you can't make calls
`],
];
