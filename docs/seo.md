# 검색(SEO) 구성 — 2026-11-26

## 국내(한국어)
- 앱은 `#/` 주소라 구글이 수업을 따로 수집하지 못함 → 빌드가 수업마다 정적 페이지를 만든다(`scripts/build-ko.mjs`).
  - `/learn/` 모든 과정, `/learn/<과정>/` 목차, `/learn/<과정>/<수업id>/` 수업(단계 글·연습 그림·‘연습 화면으로 따라 하기’ 버튼)
  - 6개 과정 수업 347개 + 목록 7쪽 = 354쪽, 모두 검색 노출(index)·사이트맵 포함
  - 제목: 갤럭시는 “갤럭시 ○○하는 방법 — 그림으로 쉽게”, 그 밖의 과정은 “수업 이름 — 과정 이름”
  - 설명·본문에 수업마다 있는 검색 동의어(`q`, 예: 재부팅·껐다 켜기)를 넣음(‘이렇게도 찾아요’)
- 국내 홈(`index.html`): 검색용 제목·설명, canonical, hreflang(ko·en), 공유 정보, 모든 화면 아래 `/learn/` 링크

## 해외(19개 언어)
- 수업 제목·설명을 언어별 검색어 말투로(`i18n/ui-extra.js`의 `SEO`):
  - 예) en “How to make text bigger on a Samsung Galaxy phone”, ja “文字を大きくする方法【Samsung Galaxy】”, ar “طريقة تكبير النص في هاتف سامسونج Galaxy”, zh “… 三星 Galaxy 手机使用教程（图解）”
  - 문제 해결(22번 분류)은 “~할 때: 무엇을 할까요” 형식
  - 설명 끝에 “사진과 함께 보는 무료 단계별 안내” 한 문장(길이가 허락할 때)
- 갤럭시 수업은 한국어 페이지와 hreflang으로 서로 연결(ko ↔ 19개 언어, x-default = en)
- **검수 전 해외 페이지는 여전히 noindex**: 관리자 화면에서 원어민 검수를 마친 수업만 검색에 나온다.

## 남은 일(사람)
- Search Console 연결(`i18n/site-config.js`), 사이트맵 제출: `https://digistep365.com/sitemap.xml`
- 도메인 digistep365.com 연결(모든 canonical이 이 주소를 가리킴)
- 나라별 실제 검색량 조사는 Search Console 데이터가 쌓인 뒤 제목을 다듬는 것이 정확함
