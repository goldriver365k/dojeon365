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

## 검색 등록·분석 설정 (Search Console · GA4)
값은 한 곳에만 넣으면 국내 첫 화면, `/learn/` 354쪽, `/privacy/`, 해외 19개 언어 페이지에 모두 들어간다. 비어 있으면 아무 태그도, 아무 스크립트도 넣지 않는다.

| 방법 | 넣는 곳 |
|---|---|
| 넷리파이 환경 변수(추천, 코드 수정 없음) | Site configuration → Environment variables → `GOOGLE_SITE_VERIFICATION`, `GA4_ID` → 다시 배포 |
| 코드 | `i18n/site-config.js`의 `searchConsole`, `ga4Id`, `gtmId` |

- **구글 태그 관리자(GTM) `GTM-KQXTB99T` 적용됨**(2026-11-26). 환경 변수 `GTM_ID`로 바꿀 수 있고, 붙여 넣은 `<script>` 조각에서도 ID만 골라 쓴다.
  - GTM과 GA4 ID를 둘 다 넣으면 GTM만 쓴다 → GA4는 GTM 안에서 'Google 태그'(측정 ID `G-…`)로 만들고 트리거는 'All Pages' + 'History Change'(국내 앱 `#/` 화면 이동).
  - 화면 이동 때 dataLayer에 `virtual_page_view` 이벤트도 보낸다(맞춤 이벤트 트리거로 써도 됨).
  - **국내 페이지(첫 화면·/learn/·/privacy/)**: 구글 태그 확인 도구가 찾을 수 있도록 `<head>`에 gtm.js를 바로 넣고 **동의 모드**를 쓴다(`assets/gtm-head.js`가 먼저 실행: `analytics_storage`는 ‘좋아요’ 전까지 denied, 광고 관련은 항상 denied). 동의 전에는 쿠키 없이 대략적인 집계만 된다.
  - 해외 페이지(검수 전 초안): 개인정보 안내 문구대로 ‘좋아요’ 뒤에만 gtm.js를 불러온다. 보안 정책(CSP) 때문에 GTM의 '맞춤 HTML' 태그(인라인 스크립트)는 동작하지 않는다 — GA4 같은 기본 태그를 쓴다.

- Search Console: 'HTML 태그' 방식에서 보여 주는 `<meta name="google-site-verification" content="…">`를 **통째로 붙여 넣어도** content 값만 골라 쓴다.
- GA4: `G-`로 시작하는 측정 ID만 받는다(다른 값은 꺼짐). 방문자가 ‘좋아요’를 누른 뒤에만 불러오고(동의 상자), 국내 앱의 `#/` 화면 이동도 페이지 보기로 센다. 보안 정책(CSP)은 ID가 있을 때만 구글 주소를 연다.
- 개인정보 안내: `/privacy/`(국내), `/<언어>/privacy/`(해외). 분석을 켜면 ‘선택 다시 하기’ 버튼이 생긴다.

- **네이버 서치어드바이저 소유 확인 태그 적용됨**(`naver-site-verification`, 2026-11-26). 모든 페이지 head에 들어간다. 바꿀 때는 `i18n/site-config.js`의 `naverVerification` 또는 환경 변수 `NAVER_SITE_VERIFICATION`.
  - 네이버 로봇(Yeti)도 robots.txt에서 허용됨. 서치어드바이저 → 요청 → 사이트맵 제출에 `https://digistep365.com/sitemap.xml`

## 자바스크립트 없이 읽히게
- `/learn/` 페이지는 모두 순수 HTML(단계 글·그림이 HTML 안에 있음).
- 국내 첫 화면(`index.html`)의 `<div id="app">` 안에 과정 6개 링크와 소개 글을 미리 넣는다(빌드가 `<!-- ssr:start -->`~`<!-- ssr:end -->` 사이를 만듦). 앱이 뜨면 평소 화면으로 바뀌므로 보이는 디자인은 그대로다.

## 사이트맵·robots
- `sitemap.xml`: 첫 화면 + `/learn/` 354쪽(6개 과정 전체) + 검수 마친 해외 페이지. 주소마다 `<lastmod>`.
  - lastmod는 본문·제목·설명이 실제로 바뀐 날만 갱신(`data/seo-lastmod.json`에 내용 지문 보관). 버전 번호나 분석·검색 등록 설정만 바뀐 것은 날짜를 바꾸지 않는다.
- 검수 전 해외 페이지는 noindex라 사이트맵에 넣지 않는다(넣으면 Search Console이 '제출된 URL에 noindex' 오류를 낸다). 검수하면 자동으로 들어간다.
- `robots.txt`: 모두 허용, `/admin/`만 막음, 사이트맵 주소 안내.
- 자동 점검: `tests/seo.test.js`(robots, 사이트맵 전체 수업·lastmod·파일 존재, 페이지마다 고유 제목·설명·자기 canonical·본문 HTML, hreflang 상호 연결, 첫 화면 무JS 링크, 설정값 정리)

## 남은 일(사람)
1. Search Console → 속성 추가 → 'URL 접두어' `https://digistep365.com/` → 'HTML 태그' 선택 → 태그를 넷리파이 환경 변수 `GOOGLE_SITE_VERIFICATION`에 붙여 넣고 다시 배포 → '확인'
   (도메인 전체를 등록하려면 '도메인' 방식의 DNS TXT 레코드를 도메인 업체에 추가)
2. Search Console → Sitemaps → `sitemap.xml` 제출
3. URL 검사로 `https://digistep365.com/learn/galaxy/g01-charge/` 등 몇 쪽 '색인 생성 요청'
4. GA4 속성 만들기 → 웹 스트림 `https://digistep365.com` → 측정 ID(`G-…`)를 환경 변수 `GA4_ID`에 넣고 다시 배포
5. 나라별 실제 검색량 조사는 Search Console 데이터가 쌓인 뒤 제목을 다듬는 것이 정확함

## 하단(Footer) — 2026-11-26
- 모든 페이지(국내 첫 화면·/learn/·정책 페이지·해외 19개 언어) 같은 하단: `i18n/footer.js`(문구·HTML), `assets/footer.css`, `assets/share.js`
- 브랜드(DigiStep365 · 도전, 디지털세상 · 누구나 쉽게, 매일 한 걸음씩.), 공유 아이콘 6개, 안내 문구(언어별), 문의 메일(mailto), 개인정보처리방침·이용약관, 언어 목록(접힘), © 연도 자동
- 공유: 페이스북(sharer.php), WhatsApp(wa.me), 주소 복사(클립보드), QR코드(`assets/qr-digistep365.svg`, digistep365.com 고정), 휴대폰 기본 공유(navigator.share, 없으면 주소 복사)
  - 카카오톡: 카카오 개발자 앱 키 없이 쓸 수 있는 공식 링크 공유 방법이 없어서, 휴대폰에서는 기본 공유 창(카카오톡 선택), PC에서는 주소를 복사해 카카오톡에 붙여 넣도록 안내. 카카오 JavaScript 키를 받으면 카카오 공유 API로 바로 보내기로 바꿀 수 있음
  - 외부 스크립트는 하나도 불러오지 않음(누를 때만 해당 서비스 창이 열림)
- 정책: 국내 `/privacy/`(개인정보처리방침: 처리 목적·항목, 보유·파기, 제3자 제공, 위탁·국외 이전, 쿠키, 권리, 안전조치, 책임자), `/terms/`(이용약관 9조). 해외 `/<언어>/privacy/`, `/<언어>/terms/`
- 국내 연습 화면(`#/lesson/…`)에서는 하단을 숨겨 수업 화면을 넓게 씀
- 점검: `tests/footer.test.js`, e2e(공유 6개 PC·모바일, 연도, 메일)

## 검색어 점검·최적화 — 2026-11-27
- 국내 검색어 설계: `i18n/ko-seo.js` (목차별 주제 검색어 `TOPIC`, 과정·전체·첫 화면 제목/설명/소개 글). meta keywords는 쓰지 않음
- 수업 제목: 갤럭시 “갤럭시 ○○하는 방법”(문제 해결은 “~할 때 해결 방법”), 그 밖의 과정 “주제 검색어: 수업 이름”(수업 이름에 이미 있으면 생략)
- 수업 설명: 과정별 문장 + 수업마다 있는 검색 동의어(q). 기종·One UI 문구는 기종 제한이 있는 8개 수업에만(One UI 6.1 이상 6개, S펜 울트라, 삼성 파인드 S24 이상)
- 과정·전체 목록 페이지에 소개 H2+본문, 첫 화면 무JS 영역에 H2
- 구조화 데이터: 첫 화면 WebSite·EducationalOrganization·ItemList, 전체 목록 ItemList, 과정 Course, 수업 LearningResource(+BreadcrumbList)
- hreflang: 국내 첫 화면·갤럭시 목록·개인정보·약관 ↔ 19개 언어 상호 연결(이전에는 영어만), 해외 첫 화면 제목을 언어별 검색 문구로
- Bing: `BING_SITE_VERIFICATION`(또는 site-config `bingVerification`) 넣으면 msvalidate.01 태그가 모든 페이지에
- 점검 스크립트(세션 스크래치): 사이트맵 전 페이지 title/desc/H1/H2/본문/alt/중복/구조화 데이터/검색어 분포, 해외 2,736쪽 hreflang 상호 연결, 내부 링크 97,810개
