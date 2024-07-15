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