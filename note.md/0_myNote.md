# 정리

### ✔ DOM

DOM(Document Object Model)은 문서 객체 모델로, 웹페이지 내용을 대변하고 수정할 수 있는 객체의 규격, 간단하게 설명하면 웹 페이지에 나타나는 HTML 문서 전체를 객체로 표현한 것으로 생각하면 된다.  
document 객체: 우리가 보고있는 웹페이지의 내용을 대변하는 DOM 객체

DOM 문서(document)는 트리 구조 (나무처럼 가지를 뻗어나가는 형태)

Parent node(부모 노드), Child node(자식 노드), Sibling node(형제 노드)

Text node(텍스트 노드), Element node(요소 노드)

### ✔ Promise와 async / await

콜백 기반 코드는 모든 작업을 함수 안에서 처리하기 때문에 작업을 이어서 하려면 콜백 안에 콜백을 등록해야 합니다. 그렇기 때문에 콜백을 중첩해서 사용해야 하는 이런 현상을 **콜백 헬(callback Hell)**이라고 부릅니다.

콜백 헬(callback Hell)로 인해 코드를 이해하기도 힘들고, 디버깅이나 테스팅 같은 걸 하기도 어렵기 때문에 이러한 불편함을 해소하기 위해 **Promise**가 등장했습니다.

> **Promise**는 비동기 작업이 완료되면 값을 알려주는 객체입니다.

- Pending: 비동기 작업이 끝나기를 기다릴 때
- Fulfilled: 비동기 작업이 성공적으로 끝났을 때, 비동기 작업의 성공 결과를 결괏값으로 갖게 됨.
- Rejected: 비동기 작업이 실패했을 때, 비동기 작업에서 발생한 오류를 결괏값으로 갖게 됨.

Promise는 이렇게 세 가지 상태를 갖고있습니다.

> `async` / `await`문법은 Promise 객체를 다루는 방법 중 하나입니다.

Promise 객체 앞에 `awiat` 키워드를 쓰면 Promise의 상태가 fulfilled 또는 rejected가 될 때까지 기다립니다.

- Fulfilled 상태가 되면 Promise 객체의 결괏값을 리턴
- Rejected 상태가 되면 Promise 객체의 결괏값(error)을 throw합니다.

### 자바스크립트에서 this 키워드의 사용과 특성

- 글로벌: 최상위 혹은 일반적인 함수 내에서 사용, window 오브젝트 등을 가리킴
- 메서드: 오브젝트에 포함된 함수 내에서 사용, 오브젝트를 가리킴
- 생성자(컨스트럭터): 오브젝트를 만드는 함수에서 사용, 생성된 오브젝트 가리킴
- 화살표 함수: 생성된 시점의 this 사용

### 렉시컬 스코프(Lexical Scope)의 개념과 특성

- 스코프라는 것은 함수나 변수와 같이 선언된 것을 엑세스할 수 있는 범위
- 선언될 때 범위를 사용하는 것이 **렉시컬 스코프**임
- **클로져**: 렉시컬 스코프 밖에 변수를 만들면 선언 이후 실행할 때 계속 이용 가능
- 그에 반해 동적 스코프는 스코프가 실행 시점, 환경에 따라 달라짐

### 이벤트 버블링과 캡쳐링을 설명하고 이를 방지하기 위한 방법

- 캡쳐링: 최상위 요소에서 시작해, 이벤트 발생 위치까지 내려가는 과정
- 버블링: 발생 위치에서 상위 요소로 전파되는 과정
- `e.stopPropagation`으로 방지할 수 있다.

### 브라우저가 어떻게 동작하는지 설명

- 브라우저는 웹 페이지 등을 수신하고 탐색하기 위한 소프트웨어
- 최종적으로 웹 페이지를 렌더링하기까지 여러 과정을 거친다.
  1. UI에서 요청을 입력 받고
  2. 서버와 통신해 요청을 보내고 응답을 받고
- 위 과정에서 개입되는 일반적인 구성 요소
  - 브라우저 엔진: 인터페이스의 요청을 수신하고 전반적인 과정을 담당
  - 렌더링 엔진: 콘텐츠 표시. HTML, CSS 해석
  - 자바스크립트 해석기: JS 해석 및 실행
  - UI 백엔드: OS에서 정해진 사용자 인터페이스를 그리는 파트
  - 자료 저장소: 쿠키, 로컬 스토리지 등 담당

### 프로미스(Promise)의 3가지 상태에 대해 설명

- Promise는 자바스크립트에서 비동기 프로그래밍을 할 때 사용한다.
- 미래의 동작을 정의할 수 있으며, 3가지 상태로 미래의 동작을 표현한다.
- Pending
  - 아직 동작이 끝나지 않고, 값도 아직 없음
  - API 응답을 기다리는 등
- Fulfilled
- Rejected

### SSG, SSR, CSR