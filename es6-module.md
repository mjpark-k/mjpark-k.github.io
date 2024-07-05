## 모듈

**모듈**은 간단하게, 자바스크립트 파일 하나라고 할 수 있습니다.

복잡하고 많은 양의 코드를 기능에 따라 각각의 파일로 나눠 관리하면
1. 코드를 좀 더 효율적으로 관리할 수 있다.
2. 비슷한 기능이 필요할 때, 다른 프로그램에서 재사용이 가능함

## 모듈 스코프
모듈 파일 안에서 선언한 변수는 외부에서 자유롭게 접근할 수 없도록 막아야 합니다.

다시 말해 모듈은 파일 안에서 모듈 파일만의 독립적인 스코프를 가지고 있어야 합니다.

HTML파일에서 자바스크립트 파일을 불러올 때 모듈 스코프를 갖게 하려면 

`script`태그에 `type`속성을 `module`이라는 값으로 지정해 주어야 합니다.

```html
<body>

<script type="module" src="index.js"></script>

</body>
```
## 모듈 문법
자바스크립트의 모듈 문법은 기본적으로 `export`와 `import` 입니다.

모듈 스코프를 가진 파일에서 외부로 내보내고자 하는 변수나 함수를 `export` 키워드를 통해 내보내고,

모듈 파일에서 내보낸 변수나 함수들은 다른 파일에서 `import` 키워드를 통해 가져옵니다.

```js
// printer.js
// export로 변수 title과 함수 print를 외부로 내보내고 있다.
export const title = 'CodeitPrinter';

export function print(value) {
  console.log(value);
};
```
```js
// index.js
// import로 printer.js에서 내보낸 title 변수와 print 함수를 가져온다.
import { title, print } from './printer.js';

print(title);
```
## 이름 바꿔 import 하기
`import` 키워드를 통해 모듈을 불러올 때 `as` 키워드를 활용하면 `import` 하는 대상들의 이름을 변경할 수 있습니다.

`import` 할 변수나 함수 이름을 조금 더 간결한 이름으로 바꾸거나, 혹은 더 구체적으로 바꾸고 싶을 때 활용하면 좋다!

뿐만 아니라 이름을 바꿔서 `import` 하면 여러 파일에서 불러오는 대상들의 이름이 중복되는 문제를 해결할 수도 있습니다.
```js
import { title as printerTitle, print, printArr } from './printer.js';
import { title, data as members } from './members.js';


printer(title);
arrPrinter(members);
```
## 한꺼번에 export하기
변수나 함수 앞에 매번 `export` 키워드를 붙일 수도 있지만, 선언된 변수나 함수를 하나의 객체로 모아 한꺼번에 내보낼 수도 있습니다.

이때 `as` 키워드를 활용하면 이름을 변경해서 `export`할 수도 있습니다.
```js
const title = 'CodeitPrinter';

function print(value) {
  console.log(value);
}

function printArr(arr) {
  arr.forEach((el, i) => {
    console.log(`${i + 1}. ${el}`);
  });
}

export { title as printerTitle, print, printArr };
```


## 한꺼번에 import하기
`import` 할 때, **와일드카드 문자(*)** 와 `as`를 활용하면 모듈 파일에서 `export` 하는 모든 대상을 하나의 객체로 불러올 수 있습니다. 
```js
import * as printerJS from './printer.js';

console.log(printerJS.title); // CodeitPrinter
console.log(printerJS.print); // ƒ print(value) { console.log(value); }
```

## default export
`export`를 할때 `default` 키워드를 함께 사용하면 모듈 파일에서 기본적으로 `export`할 대상을 정할 수 있습니다.

일반적으로 모듈 파일에서 `export`대상이 하나라면, 이 `default` 키워드를 함께 활용하는 것이 조금 더 간결한 코드를 구성하는데 도움이 되는데요.

```js
const title = 'CodeitPrinter';

function print(value) {
  console.log(value);
}

export default print;
```
> **default export**는 `import` 할 때, 기본적으로 다음과 같이 불러올 수 있지만,

```js
import { default as printerJS } from './printer.js';

console.log(printerJS.title); // CodeitPrinter
console.log(printerJS.print); // ƒ print(value) { console.log(value); }
```
> 다음과 같이 축약형 문법으로 `import` 할 수도 있기 때문입니다.
```js
import printerJS from './printer.js';

console.log(printerJS.title); // CodeitPrinter
console.log(printerJS.print); // ƒ print(value) { console.log(value); }
```
