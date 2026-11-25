# 영어 수업 검수 체크리스트

검수한 수업만 검색엔진에 노출됩니다. 한 수업씩 아래를 모두 확인한 뒤 `i18n/en/review.js`에 기록하고 `npm run build:global`을 실행해 커밋합니다.

## 준비
- 실제 갤럭시 휴대폰, 언어를 **English**로 설정(설정 → General management → Language)
- 휴대폰의 기종과 One UI 버전을 기록(설정 → About phone → Software information)

## 수업마다 확인
1. **동작**: 단계를 처음부터 끝까지 실제 휴대폰에서 그대로 따라 했을 때 같은 결과가 나온다
2. **메뉴 이름**: 따옴표 안의 이름(‘Font size and style’ 등)이 휴대폰 화면 글자와 **똑같다**(대소문자 포함)
3. **한 단계 한 동작**: 한 단계에 동작이 두 개 들어 있지 않다
4. **연습 그림**: 그림 속 메뉴 이름과 빨간 상자 위치가 실제 화면과 맞다
5. **쉬운 영어**: 짧은 문장, 전문 용어 없이 시니어가 읽기 쉽다
6. **국가 차이**: 한국에서만 쓰는 앱·전화번호·서비스가 없다
7. **안전**: 결제·잠금·긴급 전화 수업의 주의 문구가 있다
8. **설명(desc)**: 160자 이하, 수업 내용과 맞다
9. **출처**: ‘Sources and checks’의 설명서 쪽 링크가 열린다

## 고칠 곳이 있으면
- 단계 문장: `i18n/en/steps-*.js` 또는 `i18n/en/galaxy.js`
- 그림 속 단어: `i18n/en/screen-terms.js`

## 기록 예시
```js
// i18n/en/review.js
export const REVIEWED = {
  'g03-font': { by: '홍길동', date: '2026-12-01', device: 'Galaxy S26 · One UI 9.0' },
};
```
기록하면 다음 빌드에서 그 수업의 `noindex`가 빠지고 `sitemap.xml`에 들어갑니다.
