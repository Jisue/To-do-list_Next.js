This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## NextJS Study
- npx create-next-app 이용
- npm run dev 실행

### 2021-02-22

- next.js 앱 만들기
- 페이지 간 이동
    - 설정
    - 자산
    - 메타데이터
    - CSS 스타일링


### 2021-02-25
- _app.js : 전체 컴포넌트의 공통 레이아웃

2. Data Fetching
- getStaticProps : 빌드시
- getStaticPaths : 사전 렌더링 할 동적 경로를 지정
- getSercerSideProps : 서버 측 렌더링, 각 요청에서 데이터를 가져옴

### 2021-03-02
1. CORS ERROR
- getInitialProps() 사용시, todo API 호출이 안되는 에러.(네트워크 에러)
    - getInitialProps()는 클라이언트에서 todo를 호출하기 때문에 cors(도메인이 다르기 때문에)
    - todo API에서 CORS를 허용하여 해결

```
npm install cors
npm install @types/cors

```

```
import cors from 'cors';

this.api = express();
this.api.use(cors());

```

- getServerSideProps()는 SSR이기 때문에, todo api 도메인 내에서만 호출
    - cors 에러가 나지 않음

### 2021-03-03

1. 진행 사항

- Add 페이지
    - form 부분을 컴포넌트화
    - 리스트 추가 기능 구현

- List 페이지
    - Status에 따른 분류
    - delete기능 추가

- Delete 페이지
    - trash 페이지 구현

2. 이슈 사항

- 버튼 이벤트 구현 도중 인자 전달 문제
```
onClick={handleDelete(list.list_index)} // ( X )
onClick={() => handleDelete(list.list_index)} // ( O )
```
- 아래의 코드 처럼 () => 를 추가해 주어야함 


### 2021-03-04

1. React Hook
- useState : state를 컴포넌트 안에서 사용

2. 진행 사항
- 수정 구현
    - useState를 이용하여 팝업창 Open
    - 팝업창을 Modal로 컴포넌트화 하여 기능 구현
- 영구 삭제
    - Trash메뉴에서 Delete시 영구삭제
- 복원 기능
- Fail처리를 위한 날짜 동기화 버튼 구현
- List 메뉴 컴포넌트화 진행
    - Edit 버튼
    - Delete 버튼
    - Fail 처리 버튼
    - 상태에 따른 Lists

### 2021-03-05

1. Material-UI
- React 디자인을 위한 컴포넌트 라이브러리

```
npm install @material-ui/core@next @emotion/react @emotion/styled

import ... from '@material-ui/core';
```
2. 알림창 구현
- Delete, Restore시 알림창이 0.5초동안 뜸
- Material-ui의 Snackbar를 이용

### 2021-03-08

1. Done UI 수정
- Material-ui 의 checkbox를 이용