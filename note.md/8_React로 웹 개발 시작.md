# React로 웹 개발 시작하기

미션 5는 하나의 페이지로만 구성되어 있음

**실제 웹사이트는 여러 페이지로 구성되어 있다.**
- 로그인, 회원가입, 상품 상세 페이지 등등

## 페이지란? 파일을 하나 더 만들면 될까?
HTML에서는 파일을 단위로 페이지를 만들었다.
Single Page Application(SPA): 기본 리액트 프로젝트는 단 하나의 HTML 페이지만 가진다

**그래도 페이지라는 구분은 사용자 편의를 위해 필요**

## SPA에서의 페이지 나누기 방식
리액트에서 모든 것은 State로 되어있으니 State로 가상의 페이지를 만들  수 있다.
```js
const [pageState, setPageState] = useState('loading');

const handleClickLogin = () => {
  setPageState("login");
}
// ...

return (
  {pageState === 'landing'}
) ...
```

**만들 수는 있지만 해결해야하는 문제**
- 뒤로가기를 누르면 어떻게 반응해야 하지? (히스토리)
이동 내역을 기록하고 이동 요청에 반응해야 함
- 링크 공유를 하려면 어떻게 해야 하지 (URL)
브라우저의 URL 입력창에 현재 위치를 반영해야 함
- 서브 페이지는 어떻게 다뤄야 하지? (Nested Route)
예) 제품 상세 페이지에서 이미지 모달 /products/123/images/1

## React Router 는 이런 문제를 해결해준다.
**히스토리** : 브라우저의 history 객체와 연동됨
**URL** : 브라우저 입력창에 현재 위치를 반영할 수 있음
**Route** : 상세 페이지 안의 상세 페이지 등 페이지 세분화 가능

## React Router 코드 살펴보기
Route 생성 JSX 문법을 활용할 수 있다.

## Route로 선언하고 싶은 URL
panda-market.com/             -> /
panda-market.com/products     -> /products  
panda-market.com/login        -> /login  
panda-market.com/signup       -> /signup   

## Route 컴포넌트로 변환
Routes는 URL이 주어지면, 가장 많이 일치하는 Route 컴포넌트를 골라서 그려줌

## App.js에서 최상위 컴포넌트로 넣어야 하는 것

BrowserRouter: 브라우저의 URL 히스토리와 연동
**App.js에서 BrowserRouter로 감싸줘야 한다.**

### 링크 넣기
a 태그 대신에 Link 컴포넌트를 사용해야 매번 새로고침되지 않는다
```js
<Link to="/prodeucts">
  상품 목록
</ Link>
```

### NavLink: 활성화 스타일 등 들어간 링크 넣기
활성화 여부에 따라  스타일을 다르게 적용할 수 있음
```js
<NavLink to=/prodcuts style={({ isActive }) => isActive ? {color: "red"} : {}}>
</ NavLink>
```

### 없는 페이지 처리하기
Wildcard (*) 사용해 나머지 라우트가 실행됨

### 동적 라우트(Dynamic Route)
1. 콜론(:)을 이용해 파라미터의 이름을 붙인다. (path segment)
2. 슬래시(/)로 구분된 경로에 폴더 이름 대신 넣는다.
3. useParams 훅을 사용해 동적 라우트의 파라미터를 받아온다.

### Nestded Route 표시