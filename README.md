This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

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

- getServerSideProps()는 SSR이기 때문에, todo api 도메인 내에서만 호출
    - cors 에러가 나지 않음
