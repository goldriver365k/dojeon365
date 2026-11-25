/** 음성 안내 점검 */
import test from 'node:test';
import assert from 'node:assert/strict';
import { ordinal, stepWords, forSpeech, speechText, pickVoice, koreanVoices } from '../assets/speech.js';

test('단계는 첫 번째·두 번째로 읽는다', () => {
  assert.equal(ordinal(1), '첫 번째');
  assert.equal(ordinal(2), '두 번째');
  assert.equal(ordinal(4), '네 번째');
  assert.equal(ordinal(11), '열한 번째');
  assert.equal(stepWords(0, 4), '첫 번째 단계');
  assert.equal(stepWords(3, 4), '네 번째 단계, 마지막 단계');
  const t = speechText({ text: '‘설정’ 앱을 누르세요.', hint: '홈 화면에 없으면 찾으세요.', idx: 1, total: 4 });
  assert.equal(t, '두 번째 단계. 설정 앱을 누르세요. 홈 화면에 없으면 찾으세요.');
  assert.ok(!/단계 중/.test(t));
});

test('영어 이름·기호·전화번호를 읽기 좋게 바꾼다', () => {
  assert.equal(forSpeech('‘Wi-Fi’ 스위치를 눌러 켜세요.'), '와이파이 스위치를 눌러 켜세요.');
  assert.equal(forSpeech('‘Play 스토어’ 앱을 누르세요.'), '플레이 스토어 앱을 누르세요.');
  assert.equal(forSpeech('그림에서 음량(하) 버튼을 누르세요.'), '그림에서 음량 내리기 버튼을 누르세요.');
  assert.equal(forSpeech('지우기 버튼(⌫)을 한 번 누르세요.'), '지우기 버튼을 한 번 누르세요.');
  assert.equal(forSpeech('010-0000-0000'), '공일공, 공공공공, 공공공공');
});

test('가장 선명한 한국어 목소리를 먼저 고른다', () => {
  const list = [
    { name: 'English US', lang: 'en-US', voiceURI: 'en' },
    { name: 'ko-kr-x-kob-local', lang: 'ko-KR', voiceURI: 'local', localService: true, default: true },
    { name: 'Google 한국의', lang: 'ko-KR', voiceURI: 'google', localService: false },
    { name: 'Microsoft SunHi Online (Natural) - Korean (Korea)', lang: 'ko-KR', voiceURI: 'sunhi', localService: false },
  ];
  assert.deepEqual(koreanVoices(list).map((v) => v.voiceURI), ['sunhi', 'google', 'local']);
  assert.equal(pickVoice(list).voiceURI, 'sunhi');
  assert.equal(pickVoice(list, 'google').voiceURI, 'google', '고른 목소리를 기억');
  assert.equal(pickVoice([{ name: 'English', lang: 'en-US' }]), null);
});
