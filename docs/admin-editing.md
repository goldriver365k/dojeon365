# 관리자 편집 기능 사용법

주소: **`/admin/edit/`** (현황표 `/admin/`에서 「수업 편집·검수하기」 버튼). 검색엔진에는 노출되지 않습니다(`noindex`, robots.txt 차단).

## 할 수 있는 일
- 19개 해외 언어의 갤럭시 수업 140개마다 **제목·설명·단계 문장(본문·도움말·알아두기)** 고치기
- 한국어 원문과 영어 기준 문장을 옆에 보면서 번역 다듬기
- **원어민 검수 기록**(검수자·날짜·확인한 기기) 남기기 → 그 수업은 `noindex`가 풀리고 사이트맵에 들어가 검색에 노출됨
- 검수 기록 취소(체크 해제)

바꿀 수 없는 것: 주소(슬러그), 단계 수(한국어 카드·연습 그림과 짝이 맞아야 함), 연습 그림, 국내(한국어) 사이트 내용.

## 저장 방식
고친 내용은 먼저 **이 브라우저에만 임시 저장**됩니다(창을 닫아도 남음). 사이트에 반영하려면 둘 중 하나를 합니다.

1. **GitHub에 저장(권장)**
   - GitHub → Settings → Developer settings → Fine-grained personal access tokens → 새 토큰
   - Repository access: `goldriver365k/dojeon365`만, Permissions: **Contents: Read and write**
   - 편집 화면에 토큰을 넣고 「GitHub에 저장」 → 배포 브랜치의 `i18n/<언어>/edits.json`에 커밋됨
   - Netlify가 커밋을 받아 `npm run build:global`로 페이지를 다시 만들고 **1~3분 뒤 반영**
   - 토큰은 그 브라우저 탭(sessionStorage)에만 기억되고 GitHub 외에는 보내지 않습니다. 쓰고 나면 만료일을 짧게 두거나 지우세요.
2. **파일 내려받기**: `edits.json`을 받아 저장소의 `i18n/<언어>/edits.json`에 넣고 커밋

## edits.json 형식
```json
{
  "lessons": {
    "g01-buttons": {
      "title": "새 제목",
      "desc": "새 설명",
      "steps": { "0": ["본문 한 문장.", "도움말", "알아두기"] }
    }
  },
  "reviewed": {
    "g01-buttons": { "by": "검수자", "date": "2026-12-01", "device": "Galaxy S26 · One UI 9.0" },
    "g02-tap": null
  }
}
```
- 단계 번호는 0부터. 없는 단계·없는 수업·빈 본문은 빌드에서 무시됩니다(`i18n/edits.js`).
- `reviewed`의 `null`은 저장소 `review.js`의 검수 기록 취소.
- 우선순위: `edits.json` > 언어 팩 파일(`galaxy.js`, `review.js`).

## 주의
- 편집 화면 자체는 누구나 열 수 있지만, 사이트를 바꾸려면 저장소 쓰기 권한 토큰이 있어야 하므로 아무나 내용을 바꿀 수는 없습니다.
- 여러 사람이 같은 언어를 동시에 저장하면 나중 사람이 「다른 사람이 먼저 저장했습니다」 안내를 받습니다. 다시 누르면 최신 파일에 합쳐 저장됩니다.
- 검수 완료는 실제 그 언어로 설정한 갤럭시에서 모든 단계를 확인한 뒤에만 체크하세요(`docs/review-checklist-en.md`).
