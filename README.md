# 11st-phone-emulator
11번가 스마트폰 에뮬레이터 과제 저장소

---

## 참고사항
* 개발 모드에서 실행 가능한 에뮬레이터입니다.
* 크롬 개발자 도구에서 디바이스 설정을 모바일로 변환하여 모바일 뷰로도 실행해볼 수 있습니다.
* 프로젝트 루트에서 터미널에 `npm test` 를 입력하면 테스트 파일들을 실행해볼 수 있습니다.

---

## 실행방법
1. 터미널을 열고 `git clone https://github.com/junzero741/11st-phone-emulator` 을 입력합니다.
2. 터미널에 `npm i` 를 입력해 의존 모듈들을 설치합니다.
3. 모듈 설치가 끝나면 터미널에 `npm run start` 를 입력합니다.
4. 웹 브라우저 주소창에 `localhost:3000` 주소를 입력합니다.

---

## 모듈구조
* `index.html` : 프로젝트의 HTML 엔트리 파일
* `index.ts` : 프로젝트의 TypeScript 엔트리 파일
* `src` : 번들링 될 파일들이 모여있는 소스 폴더
  * `css` : 각 페이지별 css 파일들이 모여있는 폴더
  * `images` : 사진 앱에 쓰일 이미지들을 저장해둔 폴더
  * `test` : 유닛 테스트 파일들을 저장해둔 폴더
  * `ts` : 앱에 쓰이는 타입스크립트 파일들을 모아둔 폴더
    * `models` : 페이지 별 동적 HTML 생성, 데이터 저장 등의 모델들을 저장해둔 폴더
    * `utils` : 유틸리티 함수들을 모아둔 폴더
    * `views` : 페이지 별 정적 HTML 을 저장해둔 폴더
    * `types.ts` : 커스텀 타입들이 저장된 파일
  * `index.d.ts` : 이미지 파일(jpg, jpeg, png) 모듈들을 선언하는 파일
---


## 데모영상

### 1. 홈
![데모_4_홈화면](https://user-images.githubusercontent.com/71166372/130389856-1332313c-40a2-4bd6-b86b-f7fedab5826d.gif)

### 2. 메모
![데모_1_메모](https://user-images.githubusercontent.com/71166372/130389877-046ea582-e86f-4a40-aaea-cf035375f31c.gif)

### 3. 사진
![데모_2_사진](https://user-images.githubusercontent.com/71166372/130389884-582c7ea8-1ba3-4010-a260-abbeb927b021.gif)

### 4. 알람
![데모_3_알람](https://user-images.githubusercontent.com/71166372/130389892-30e70089-dfdf-455c-887f-272cd8806c60.gif)



