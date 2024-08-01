# Javascript Request 보내기

### `fetch()` 기본 문법
```js
const res = await fetch(url);

// 리스폰스 상태 코드
res.status;

// 리스폰스 헤더
res.headers;

// 리스폰스 바디
await res.json(); // JSON 문자열을 파싱해서 자바스크립트 객체로 변환
await res.text(); // 문자열을 그대로 가져옴
```
`res.json()` 메소드는 바디의 JSON 문자열을 파싱해서 자바스크립트 객체로 변환해 주고 `res.text()` 메소드는 바디의 내용을 문자열로 그대로 가져옵니다. 따라서 바디의 내용이 JSON 형식이 아닌데 `res.json()` 메소드를 사용하면 파싱 오류가 납니다.

### `fetch()` 사용 예시
```js
const res = await fetch('https://learn.codeit.kr/api/color-surveys');
const data = await res.json();
console.log(data);
```
```
{
  count: 51,
  next: 'https://learn.codeit.kr/api/color-surveys/?offset=10&limit=10',
  previous: null,
  results: [
    {
      createdAt: 1688448542000,
      updatedAt: 1688448542000,
      colorCode: '#FFFFFF',
      id: 51,
      mbti: 'ENTJ'
    },
    {
      createdAt: 1688448539000,
      updatedAt: 1688448539000,
      colorCode: '#FFFFFF',
      id: 50,
      mbti: 'ENTJ'
    },
    .
    .
    .
    {
      createdAt: 1688190719000,
      updatedAt: 1688190719000,
      colorCode: '#FD1B6C',
      id: 43,
      mbti: 'ESTJ'
    },
    {
      createdAt: 1688104686000,
      updatedAt: 1688104686000,
      colorCode: '#ABCD00',
      id: 42,
      mbti: 'ENFJ'
    }
  ]
}
```

### `URL` 객체
쿼리 파라미터를 보낼 때는 URL 객체를 사용할 수 있습니다.
```js
const params = { offset: 10, limit: 10 };
const url = new URL('https://learn.codeit.kr/api/color-surveys');
Object.keys(params).forEach((key) => url.searchParams.append(key, params[key]));
const res = await fetch(url);
const data = await res.json();
console.log(data);
```

### fetch() 옵션
리퀘스트 설정을 할 수 있습니다.
- `method`(메소드): `'GET'`, `'POST'`, `'PATCH'`, `'DELETE'` 같은 값으로 설정할 수 있습니다. `method`를 설정하지 않으면 기본 값이 `'GET'`입니다.
- `headers`(헤더): 자주 설정하는 헤더로는 `'Content-Type'`가 있습니다.
- `body`(바디): 자바스크립트 객체는 그대로 전달할 수 없기 때문에 JSON 문자열로 바꿔 줘야 합니다.
```js
// POST 예시
const surveyData = {
  mbti: 'ENFP',
  colorCode: '#ABCDEF',
    password: '0000',
};

const res = fetch('https://learn.codeit.kr/api/color-surveys', { 
  method: 'POST' ,
  body: JSON.stringify(surveyData),
  headers: {
    'Content-Type': 'application/json',
  },
});
const data = await res.json();
console.log(data);
```
```
{
  createdAt: 1688477153992,
  updatedAt: 1688477153992,
  colorCode: '#ABCDEF',
  id: 52,
  mbti: 'ENFP',
  password: '0000'
}
```
### API 함수 만들기
똑같은 리퀘스트를 보내는 코드가 반복된다면 함수로 만들어 주는 것이 좋습니다. 보통 웹 개발을 할 때는 API를 호출하는 함수들을 따로 모아 두고 필요할 때 import해서 씁니다. 예를 들어 `api.js`라는 파일에 아래와 같은 함수들을 만들어 놓을 수 있다.
```js
export async function getColorSurveys(params = {}) {
  const url = new URL('https://learn.codeit.kr/api/color-surveys');
  Object.keys(params).forEach((key) =>
    url.searchParams.append(key, params[key])
  );
  const res = await fetch(url);
  const data = await res.json();
  return data;
}

export async function getColorSurvey(id) {
  const res = await fetch(`https://learn.codeit.kr/api/color-surveys/${id}`);
  const data = await res.json();
  return data;
}

export async function createColorSurvey(surveyData) {
  const res = await fetch('https://learn.codeit.kr/api/color-surveys', {
    method: 'POST',
    body: JSON.stringify(surveyData),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const data = await res.json();
  return data;
}
```
리퀘스트마다 바뀔 수 있는 부분을 함수 파라미터 받아서 활용하면 됩니다.

### `fetch()` 오류 처리
리퀘스트를 보낼 때 발생하는 오류는 크게 두 가지가 있습니다.
- URL이 이상하거나 헤더 정보가 이상해서 리퀘스트 자체가 실패하는 경우
- 리퀘스트는 성공적이지만 상태 코드가 실패를 나타내는 경우(4XX, 5XX)

`fetch()` 함수는 첫 번째 경우에만 리턴하는 Promise를 reject합니다. 따라서 `fetch()`에 대한 오류 처리를 할 때는 언제 Promise가 reject되는지, 어떤 내용이 리스폰스 바디로 돌아오는지를 잘 생각해야 합니다.

`fetch()` 오류를 깔끔하게 처리하는 방법은 두 번째 경우에도 오류를 `throw`하는 것입니다. 리스폰스 상태 코드의 성공 여부는 `.ok` 프로퍼티로 확인할 수 있습니다.

```js
export async function getColorSurvey(id) {
  const res = await fetch(`https://learn.codeit.kr/api/color-surveys/${id}`);

  if (!res.ok) {
    throw new Error('데이터를 불러오는데 실패했습니다.');
  }

  const data = await res.json();
  return data;
}
```
그러면 리퀘스트가 완전히 성공하지 않는 이상 오류를 `throw`하기 때문에 쉽게 처리할 수 있습니다. 여기서 리퀘스트가 완전히 성공한다는 건, 리퀘스트가 잘 전달되고 리스폰스도 성공을 나타내는 상황을 말합니다.

```js
import { getColorSurvey } from './api.js';

try {
  const data = await getColorSurvey(1234); // 존재하지 않는 id
  console.log(data);
} catch (e) {
  console.log('오류가 발생했습니다:')
  console.log(e.message);
}
```
```
오류가 발생했습니다:
데이터를 불러오는 데 실패했습니다.
```

### 🚀 `axios` 문법
`axios`는 HTTP 메소드 이름과 동일한 메소드를 사용하고 리스폰스 바디를 `data` 프로퍼티로 접근할 수 있습니다.

### GET 리퀘스트
```js
// axios

async function getColorSurvey(id) {
  const res = await axios.get(`https://learn.codeit.kr/api/color-surveys/${id}`);
  return res.data;
}
```
```js
// fetch

async function getColorSurvey(id) {
  const res = await fetch(`https://learn.codeit.kr/api/color-surveys/${id}`);
  const data = await res.json();
  return data;
}
```
쿼리 파라미터를 보낼 경우 params 옵션을 사용하면 됩니다.
```js
// axios

export async function getColorSurveys(params = {}) {
  const res = await axios.get('https://learn.codeit.kr/api/color-surveys', {
    params,
  });
  return res.data;
}
```
```js
// fetch

async function getColorSurveys(params = {}) {
  const url = new URL('https://learn.codeit.kr/api/color-surveys');
  Object.keys(params).forEach((key) =>
    url.searchParams.append(key, params[key])
  );
  const res = await fetch(url);
  const data = await res.json();
  return data;
}
```
`params` 외에 헤더 같은 정보도 옵션으로 설정할 수 있습니다.

### POST 리퀘스트
리퀘스트에 보낼 바디 내용은 두 번째 아규먼트로 전달하면 됩니다. 그리고 자바스크립트 객체를 문자열로 변환하지 않고 그대로 전달할 수 있습니다.
```js
// axios

async function createColorSurvey(surveyData) {
  const res = await axios.post('https://learn.codeit.kr/api/color-surveys', surveyData);
  return res.data;
}
```
```js
// fetch

async function createColorSurvey(surveyData) {
  const res = await fetch('https://learn.codeit.kr/api/color-surveys', {
    method: 'POST',
    body: JSON.stringify(surveyData),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (!res.ok) {
    throw new Error('데이터를 생성하는데 실패했습니다.');
  }

  const data = await res.json();
  return data;
}
```
리퀘스트에 바디가 필요 없는 get이나 delete는 옵션을 두 번째 아규먼트로 받고 바디가 필요한 post, patch, put은 바디 데이터를 두 번째 아규먼트로 받고, 옵션을 세 번째 아규먼트로 받습니다.

### ❗ `axios` 인스턴
리퀘스트마다 공통되는 부분이 있으면 인스턴스를 생성하고 인스턴스로 리퀘스트를 보내면 됩니다.

```js
const instance = axios.create({
  baseURL: 'https://learn.codeit.kr/api',
  timeout: 3000,
});

async function getColorSurveys(params = {}) {
  const res = await instance.get(`/color-surveys`, {
    params,
  });
  return res.data;
}
```

### `axios` 오류 처리
`axios`는 리퀘스트 자체가 실패하거나 리스폰스의 상태코드가 실패(4XX, 5XX)를 나타내면 Promise를 reject합니다. 두 번째 경우는 리스폰스가 돌아오는 것이기 때문에 이걸 에러 객체에 전달합니다.
그래서 에러를 처리할 때, 에러 리스폰스에 접근할 수 있습니다.
```js
export async function createColorSurvey(surveyData) {
  const res = await axios.post('https://learn.codeit.kr/api/color-surveys', surveyData);
  return res.data;
}
```
```js
import { createColorSurvey } from './api.js';

const surveyData = {
  mbti: 'EEEE',
  colorCode: '#CDCDCD',
  password: '0000',
};

try {
  const newColorSurvey = await createColorSurvey(surveyData);
  console.log(newColorSurvey);
} catch (e) {
  if (e.response) { 
    // 리퀘스트는 성공했지만 상태 코드가 실패(4XX, 5XX)를 나타냄
    console.log(e.response.status);
    console.log(e.response.data);
  } else { 
    // 리퀘스트 자체가 실패
    console.log('리퀘스트가 실패했습니다.');
  }
}
```
```
Invalid MBTI
```