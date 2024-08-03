# ✍ Modern Javascript


### 자바스크립트의 동작 원리

> 기본형 (Primitive Type)

- Number
- String
- Boolean
- Null
- Undefined

> 참조형 (Reference Type)

- Object

> Symbol과 BigInt는 많이 사용하지 않는다.

- Symbol() : 유일무이한 값
- BigInt : 큰 숫자의 연산을 다룰 때, 사용됨.

---

### AND OR 논리연산자

- AND: `&&`
- OR: `||`

> Falsy 값: false, null, undefined, NaN, 0, ' '

```js
const flowers = ["장미", "수국", "백합", "튤립", "진달래"];

for (let i = 4; i; i = i - 2) {
  // 0은 falsy 값이라 for문 중단
  console.log(flowers[i]);
}

if (flowers.length) {
  console.log(flowers[3]);
}

if (Number("codeit")) {
  // codeit을 Number로 형변환하면 NaN, 즉 falsy값이라 실행 X
  console.log(flowers[1]);
}
```

```
<!-- 출력결과 -->
진달래
백합
튤립
```

**특이한 경우**

```JS
console.log(null && undefined); // -> null
console.log(0 || true); // -> true
console.log('0' && NaN);  // -> NaN
console.log({} || 123);   // -> {}
```

```js
console.log("String" && 123);
console.log({} || []);
console.log(0 && false);
console.log(null || undefined);
console.log(NaN && "Codeit");
console.log("" || true);
console.log("JavaScript" && null);
console.log(3000 || undefined);
```

자바스크립트에서 AND와 OR연산자는 무조건 불린 값을 리턴하는 게 아니라, 왼쪽 피연산자 값의 유형에 따라서 두 피연산자 중 하나를 리턴하는 방식으로 동작합니다.
AND 연산자는 왼쪽 피연산자가 falsy값일 때 왼쪽 피연산자를, 왼쪽 피연산자가 truthy값일 때 오른쪽 피연산자를 리턴하고 반대로 OR 연산자는 왼쪽 피연산자가 falsy 일 때 오른쪽 피연산자를, 왼쪽 피연산자가 truthy 일 때 왼쪽 피연산자를 리턴합니다.

`'String' && 123`은 AND 연산자의 왼쪽 피연산자가 truthy 값이기 때문에 오른쪽에 있는 `123`을 출력합니다.  
`{} || []`은 OR 연산자의 왼쪽 피연산자가 truthy 값이기 때문에 그대로 `{}`을 출력합니다.  
`0 && false`는 AND 연산자의 왼쪽 피연산자가 falsy 값이기 때문에 그대로 `0`을 출력합니다.  
`null || undefined`는 OR 연산자의 왼쪽 피연산자가 falsy 값이기 때문에 오른쪽에 있는 `undefined`를 출력합니다.  
`NaN && 'Codeit'`은 AND 연산자의 왼쪽 피연산자가 falsy 값이기 때문에 그대로 `NaN`을 출력합니다.  
`'' || true`은 OR 연산자의 왼쪽 피연산자가 falsy 값이기 때문에 오른쪽에 있는 `true`를 출력합니다.  
`'JavaScript' && null`는 AND 연산자의 왼쪽 피연산자가 truthy 값이기 때문에 오른쪽에 있는 `null`을 출력합니다.  
`3000 || undefined`는 OR 연산자의 왼쪽 피연산자가 truthy 값이기 때문에 그대로 `3000`을 출력합니다.

> 연산자 우선순위를 알아두면 좋지만, **괄호를 사용해서 다른 사람들이 보기 쉽게 명확한 코드를 작성해야 한다.**

---

### 변수와 스코프

`var` 키워드로 선언한 변수는 **함수 스코프** , `let`과 `const` 키워드로 선언한 변수는 **블록 스코프**를 가집니다.

- `let` : 바꿀 수 있는 값(재할당 가능)
- `const` : 상수, 바뀌지 않는 값(재할당 불가능)
  > let과 const만 거의 쓴다고 보면 된다!

**함수 스코프**란 말 그대로 함수를 기준으로 스코프를 구분한다는 뜻인데요. 그렇기 때문에 함수 안에서 선언한 변수는 함수 안에서만 유효하게 됩니다.

**블록 스코프**는 중괄호로 감싸진 코드 블록에 따라 유효 범위를 구분하게 되는데요.

```js
if (true) {
  var title = "JavaScript";
  console.log(title); // JavaScript
}

console.log(title); // JavaScript  -- 만약 var title이 아니라 let title이면 Error 발생!
```

## ✍ 함수 다루기

### 함수를 만드는 방법

> 자바스크립트에서 함수는 다양한 방식으로 선언할 수 있습니다.

> **함수 선언 (Function Declaration)** : 가장 일반적인 방법은 function 키워드를 통해 함수를 선언하는 방식인데요.

```js
// function 함수이름(파라미터) {
//   동작
//   return 리턴값;
// }

// 함수 선언
function sayHi() {
  console.log("Hi!");
}
```

> **함수 표현식 (Fuction Expression)** : 자바스크립트에서 함수는 값으로 취급될 수도 있기 때문에 변수에 할당해서 함수를 선언할 수도 있습니다. -> **함수를 값으로 다루는 방식**

```js
// const printCodeit = function () {
//   console.log(codeit);
// }
// printCodeit();

// 함수 표현식
const sayHi = function () {
  console.log("Hi!");
};
```

#### 호이스팅

함수 선언문은 호이스팅되어 코드의 최상단으로 끌어올려지기 때문입니다.  
따라서 printHello() 함수 호출이 실제로 정의된 함수보다 앞에 있어도 문제가 없습니다.  
함수 선언문 (Function Declarations): 전체 함수가 호이스팅됩니다.

```js
printHello();

function printHello() {
  console.log("Hello");
}
```

#### 호이스팅 실패

const로 변수를 선언하고 함수 표현식을 할당하는 경우, 변수 선언은 호이스팅되지만, 변수의 할당 부분은 호이스팅되지 않기 때문입니다.  
변수 선언 (var, let, const): 변수 선언만 호이스팅되지만, 할당된 값이나 함수 표현식은 호이스팅되지 않습니다.

```js
printHello();

const printHello = function () {
  console.log("Hello");
};
```

> **다양한 함수의 형태** : 자바스크립트에서 함수는 값으로 취급되는데요. 이런 특징은 코드를 작성할 때 다양한 형태로 활용될 수 있습니다.

```js
// named function
// function 뒤엔 굳이 이름을 붙일 이유가 없지만, 저런 식으로 사용할 때가 가끔 있다. 그때 유용함.
const fibonacci = function fibo(n) {
  return fibo(n + 1);
};
```

```js
// 변수에 할당해서 활용
const printJS = function () {
  console.log("JavaScript");
};

// 객체의 메소드로 활용
const codeit = {
  printTitle: function () {
    console.log("Codeit");
  },
};

// 🔥 콜백 함수로 활용 (중요!)
myBtn.addEventListener("click", function () {
  console.log("button is clicked!");
});

// 고차 함수로 활용
function myFunction() {
  return function () {
    console.log("Hi!?");
  };
}

// named function
const fibonacci = function fibo(n) {
  return fibo(n + 1);
};
```

### Parameter(파라미터)와 Argument(아규먼트)

선언 부분에서 소괄호에 작성된는 것이 `parameter`, 함수 호출 부분에서 parameter로 전달하는 부분이 `argument`

```js
function sum(a, b, c) {
  // 여기서 a, b, c ...가 parameter이다.
  const args = argument;

  let sum = 0;
  for (let i of args) {
    sum += i;
  }

  rest.reduce();

  return sum;
}

sum(1, 2, 3); // sum의 argument는 1, 2, 3, 4 ... 즉, 호출할 때 사용되는 값을 argument라고 한다.
```

```js
// Parameter 익히기
function introduce(name = "홍길동", birth = 1443) {
  console.log(`안녕하세요 저는 ${name}입니다.`);
  console.log(`${birth}년에 태어났습니다.`);
}

introduce("장동건");
introduce("Joy", null);
introduce(undefined, 2090);
```

```
<!-- 출력결과 -->
안녕하세요 저는 장동건입니다.
1443년에 태어났습니다.
안녕하세요 저는 Joy입니다.
null년에 태어났습니다.
안녕하세요 저는 홍길동입니다.
2090년에 태어났습니다.
```

`argument`: 함수 내부에서 자동으로 만들어지는 `argumnet`객체를 통해 유연하게 동작하는 함수에 활용 가능

```js
function printArguments(a, b, c) {
  console.log(a);
  console.log(b);
  console.log(c);
  console.log(arguments);
  console.log("----------------");
}

printArguments("Youg", "Mark", "Koby");
printArguments("Captain");
printArguments("Suri", "Jack", "Joy", "Noel");
```

```
<!-- 출력결과 -->
Youg
Mark
Koby
[Arguments] { '0': 'Youg', '1': 'Mark', '2': 'Koby' }
----------------
Captain
undefined
undefined
[Arguments] { '0': 'Captain' }
----------------
Suri
Jack
Joy
[Arguments] { '0': 'Suri', '1': 'Jack', '2': 'Joy', '3': 'Noel' }
```

```js
function printArguments(a, b, c) {
  console.log(arguments[0]);
  console.log(arguments[1]);
  console.log(arguments.length); // argument의 개수를 알 수 있다.
  console.log("----------------");
}

printArguments("Youg", "Mark", "Koby");
printArguments("Captain");
printArguments("Suri", "Jack", "Joy", "Noel");
```

```
<!-- 출력결과 -->
Youg
Mark
3
----------------
Captain
undefined
1
----------------
Suri
Jack
4
----------------
```

```js
function printArguments(a, b, c) {
  for (const arg of arguments) {
    // for ...of 반복문
    console.log(arg);
  }
  console.log("----------------");
}

printArguments("Youg", "Mark", "Koby");
printArguments("Captain");
printArguments("Suri", "Jack", "Joy", "Noel");
```

```
<!-- 출력 결과 -->
Youg
Mark
Koby
----------------
Captain
----------------
Suri
Jack
Joy
Noel
----------------
```

### 🔥 Rest Parameter

> `Rest Parameter` : `argument` 객체를 이용하는 것 말고도 불규칙적으로 전달되는 argument를 다루는 방법, `parameter` 앞에 마침표 세 개(`...`)를 붙여주면, 여러 개로 전달되는 argument들을 배열로 다룰 수가 있게 됨. 그래서 **배열의 메소드를 자유롭게 사용할 수 있다는 장점**이 있음.

```js
// arguments 객체를 활용한 부분
function printArguments() {
  for (const arg of arguments) {
    // for ...of 반복문
    console.log(arg);
  }
  console.log("----------------");
}

printArguments("Youg", "Mark", "Koby");
printArguments("Captain");
printArguments("Suri", "Jack", "Joy", "Noel");
```

```
<!-- 출력 결과 -->
Youg
Mark
Koby
----------------
Captain
----------------
Suri
Jack
Joy
Noel
----------------
```

```js
// ...Rest Parameter를 활용한 부분, 결과는 위와 똑같다.
function printArguments(...args) {
  for (const arg of ...args) {  // for ...of 반복문
    console.log(arg);
  }
  console.log('----------------');
}

printArguments('Youg', 'Mark', 'Koby');
printArguments('Captain');
printArguments('Suri', 'Jack', 'Joy', 'Noel');
```

**명확하게 구분해서 다뤄야하는 부분**은 일반 **parameter**(first, second)로,  
**유연하게 다룰 수 있는 부분**은 **Rest Parameter**(...others)로 나눠 사용

```js
function printRankingList(first, second, ...others) {
  console.log("코드잇 레이스 최종 결과");
  console.log(`우승: ${first}`);
  console.log(`준우승: ${second}`);
  for (const arg of others) {
    console.log(`참가자: ${arg}`);
  }
}

printRankingList("Tommy", "Jerry", "Suri", "Sunny", "Jack");
```

```
<!-- 출력 결과 -->
코드잇 레이스 최종 결과
우승: Tommy
준우승: Jerry
참가자: Suri
참가자: Sunny
참가자: Jack
```

> `argument` 객체의 아쉬운 점을 보완, `Rest Parameter` 를 우선적으로 활용하는 것이 권장하는 방법

### Arrow Function

```js
// 화살표 함수 정의
const getTwice = (number) => {
  return number * 2;
};

// 콜백 함수로 활용
myBtn.addEventListener("click", () => {
  console.log("button is clicked!");
});
```

```js
// 1. 함수의 파라미터가 하나 뿐일 때
const getTwice = (number) => {
  return number * 2;
};

// 파라미터를 감싸는 소괄호 생략 가능 (근데 웬만하면 생략하지 말자!!)
const getTwice = (number) => {
  return number * 2;
};

// 2. 함수 동작 부분이 return문만 있을 때
const sum = (a, b) => {
  return a + b;
};

// return문과 중괄호 생략 가능
const sum = (a, b) => a + b;
```

> `Arrow function`이 일반 함수와 몇 가지 차이점이 있는데요. 가장 대표적인 차이점은 **arguments 객체가 없다는 점**과 **this가 가리키는 값이 일반 함수와 다르다는 점**입니다.

### this

> 자바스크립트에는 `this`라는 조금 특별한 키워드가 있습니다.
> 웹 브라우저에서 `this`가 사용될 때는 전역 객체, Window 객체를 가지게 됩니다. 하지만 객체의 메소드를 정의하기 위한 함수 안에선 메소드를 호출한 객체를 가리키게 됩니다.

```js
const user = {
  firstName: "Tess",
  lastName: "Jang",
  getFullName: function () {
    return `${this.firstName} ${this.lastName}`;
  },
};

console.log(user.getFullName());
// getFullName 안에서의 this는 getFullName을 호출한 user객체가 담긴다!
```

> 참고) 대부분 property지만, 함수를 호출하거나 뭔가를 호출하면 method

```js
// 예시
const robotObj_R2D2 = {
  name: "R2D2", // property
  sayHello: function () {
    // method
    console.log("Hello, I am " + this.name);
  },
};
```

## 📝 자바스크립트의 문법과 표현

> 목차
1. [조건부 연산자 (Conditional operator)](#조건부-연산자-conditional-operator)
2. [Spread 구문](#spread-구문)..
3. [모던한 프로퍼티 표기법](#모던한-프로퍼티-표기법)
4. [옵셔널 체이닝](#옵셔널-체이닝)..
5. [Destructuring (구조 분해)](#-destructuring-구조-분해)..
6. [에러와 에러 객체](#에러와-에러-객체) 
7. [try...catch문](#trycatch문)
8. [자바스크립트의 유용한 내부 기능](#-자바스크립트의-유용한-내부-기능)..

### 조건부 연산자 (Conditional operator)

간단한 조건식의 경우에는 if문 보다 훨씬 더 간결하게 표현할 수 있는 장점이 있지만  
내부에 변수나 함수를 선언한다거나 반복문 같은 표현식이 아닌 문장은 작성할 수 없다는 한계가 있기 때문에 if문을 완벽하게 대체할 수는 없다는 점.

**🔥 삼항 연산자 (Ternary operator)**  
`조건 ? truthy 할 때 표현식 : falsy 할 때 표현식`

```js
// 조건 ? truthy 할 때 표현식 : falsy 할 때 표현식

const CUT_OFF = 80;

const passChecker = (score) =>
  score > CUT_OFF ? "합격입니다!" : "불합격입니다!";

console.log(passChecker(75)); // 불합격
console.log(passChecker(90)); // 합격
```

```js
// 위에 코드를 if문으로 작성한다면,
const CUT_OFF = 80;

function passChecker(score) {
  if (score > CUT_OFF) {
    return "합격!";
  } else {
    return "불합격!";
  }
}

console.log(passChecker(75)); // 불합격
console.log(passChecker(90)); // 합격
```

### 🔥 Spread 구문

여러 개의 값을 묶어놓은 배열이나 객체와 같은 값은 바로 앞에 마침표 세 개를 붙여서 펼칠 수가 있습니다.  
주로 복사하거나, 여러 개의 배열이나 객체를 하나로 합칠 때 사용됩니다.

```js
const webPublishing = ["HTML", "CSS"];
const interactiveWeb = [webPublishing, "JavaScript"];

console.log(webPublishing);
console.log(interactiveWeb);
```

```
<!-- 출력 결과 -->
[ 'HTML', 'CSS' ]
[ [ 'HTML', 'CSS' ], 'JavaScript' ]
```

```js
// spread 사용
const webPublishing = ["HTML", "CSS"];
const interactiveWeb = [...webPublishing, "JavaScript"];

console.log(webPublishing);
console.log(interactiveWeb);
```

```
<!-- 출력 결과 -->
[ 'HTML', 'CSS' ]
[ 'HTML', 'CSS', 'JavaScript' ]
```

```js
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const arr3 = [...arr1, ...arr2];
const arr4 = [arr1, arr2];

console.log(arr3);
console.log(arr4);
```

```
<!-- 출력 결과 -->
[ 1, 2, 3, 4, 5, 6 ]
[ [ 1, 2, 3 ], [ 4, 5, 6 ] ]
```

🔥 **Spread 구문은 배열이나 객체를 복사하거나 혹은 복사해서 새로운 요소들을 추가할 때 유용하게 활용 될 수 있습니다.**

⚠ 참고로 **배열은 객체로 펼칠 수 있지만 객체는 배열로 펼칠 수 없다**는 부분도 잘 기억해 두시면 좋을 것 같습니다.

```js
// 배열 => 객체
const members = ["태호", "종훈", "우재"];
const newObject = { ...members };

console.log(newObject); // {0: "태호", 1: "종훈", 2: "우재"}

// 객체 => 배열
const topic = {
  name: "모던 자바스크립트",
  language: "JavaScript",
};
const newArray = [...topic]; // TypeError!
```

### 모던한 프로퍼티 표기법

변수나 함수를 활용해서 property를 만들 때 property name과 변수나 함수 이름이 같다면 아래와 같이 축약해서 사용할 수 있습니다.

```js
function sayHi() {
  console.log("Hi!");
}

const title = "codeit";
const birth = 2017;
const job = "프로그래밍 강사";

const user = {
  title,
  birth,
  job,
  sayHi,
};

console.log(user);
```

```
<!-- 출력 결과 -->
{
  title: 'codeit',
  birth: 2017,
  job: '프로그래밍 강사',
  sayHi: [Function: sayHi]
}
```

> 메소드를 작성할 때도 다음과 같이 `function` 키워드를 생략할 수가 있습니다.

```js
const user = {
  firstName: "Tess",
  lastName: "Jang",
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  },
};

console.log(user.getFullName()); // Tess Jang
```

> 대괄호를 활용하면 다양한 표현식으로 property name을 작성할 수도 있습니다.

```js
const propertyName = "birth";
const getJob = () => "job";

const codeit = {
  ["topic" + "name"]: "Modern JavaScript",
  [propertyName]: 2017,
  [getJob()]: "프로그래밍 강사",
};

console.log(codeit); // { topicname: 'Modern JavaScript', birth: 2017, job: '프로그래밍 강사' }
```

### 🔥 옵셔널 체이닝

```js
function printCatName(user) {
  console.log(user.cat?.name);
}
```

> 위 코드에서 볼 수 있는 것처럼 **물음표**와 **마침표**를 붙여 사용하는 부분이 바로 `옵셔널 체이닝 연산자(?.)`

만약 옵셔널 체이닝 연산자 왼편의 프로퍼티 값이 `undefined` 또는 `null`이 아니라면 그 다음 프로퍼티 값을 리턴하고 그렇지 않은 경우에는 undefined를 반환하는 문법입니다.

```js
// 옵셔널 체이닝 연산자의 동작원리를 삼항 연산자를 통해 구체적으로 표현하면 다음과 같다.
function printCatName(user) {
  console.log(
    user.cat === null || user.cat === undefined ? undefined : user.cat.name
  );
}
```

```js
// null 병합 연산자와 함께 활용하면 다음과 같이 응용할 수도 있습니다.
function printCatName(user) {
  console.log(user.cat?.name ?? "함께 지내는 고양이가 없습니다.");
}

const user2 = {
  name: "Young",
};

printCatName(user2); // 함께 지내는 고양이가 없습니다.
```

> ✨ null 병합 연산자  
> `??` 연산자가 사용되어 `user.cat?.name`이 `null` 또는 `undefined`일 경우 `"함께 지내는 고양이가 없습니다."`를 반환합니다.

### 🔥 Destructuring (구조 분해)

```js
// 배열 Destructuring
const arr = [1, 2, 3];
const [first, second, third] = arr;

console.log(first); // 1
console.log(second); // 2
console.log(third); // 3
```

```js
// 객체 Destructuring
const obj = { a: 1, b: 2, c: 3 };
const { a, b, c } = obj;

console.log(a); // 1
console.log(b); // 2
console.log(c); // 3
```

또 다른 **Destructuring (구조 분해)** 예시

```js
// Array Destructuring
const members = ["코딩하는효준", "글쓰는유나", "편집하는민환"];
const [macbook, ipad, coupon] = members;

console.log(macbook); // 코딩하는효준
console.log(ipad); // 글쓰는유나
console.log(coupon); // 편집하는민환

// Object Destructuring
const macbookPro = {
  title: "맥북 프로 16형",
  price: 3690000,
};

const { title, price } = macbookPro;

console.log(title); // 맥북 프로 16형
console.log(price); // 3690000
```

함수에서 **default parater**, **rest parameter**를 다루듯이 **Destructuring** 문법을 활용할 때도 기본값과 rest 문법을 활용할 수 있습니다.

```js
// Array Destructuring
const members = [
  "코딩하는효준",
  "글쓰는유나",
  undefined,
  "편집하는민환",
  "촬영하는재하",
];
const [macbook, ipad, airpod = "녹음하는규식", ...coupon] = members;

console.log(macbook); // 코딩하는효준
console.log(ipad); // 글쓰는유나
console.log(airpod); // 녹음하는규식
console.log(coupon); // (2) ["편집하는민환", "촬영하는재하"]

// Object Destructuring
const macbookPro = {
  title: "맥북 프로 16형",
  price: 3690000,
  memory: "16 GB 2667 MHz DDR4",
  storage: "1TB SSD 저장 장치",
};

const { title, price, color = "silver", ...rest } = macbookPro;

console.log(title); // 맥북 프로 16형
console.log(price); // 3690000
console.log(color); // silver
console.log(rest); // {memory: "16 GB 2667 MHz DDR4", storage: "1TB SSD 저장 장치"}
```

### 에러와 에러 객체

자바스크립트에서 에러를 다루는 일은 굉장히 중요하다고 할 수 있습니다.  
자바스크립트에서 에러가 발생하면 그 순간 프로그램 자체가 멈춰버리고 이후의 코드가 동작하지 않기 때문입니다.  
그리고 에러가 발생하면 에러에 대한 정보를 `name`과 `message`라는 프로퍼티로 담고 있는 에러 객체가 만들어지는데요.  
대표적인 에러 객체는 **SyntaxError**, **ReferenceError**, **TypeError** 입니다.

에러 객체는 직접 만들 수도 있는데요.  
new 키워드와 에러 객체 이름을 딴 함수를 통해 에러 객체를 만들 수 있고, throw 키워드로 에러를 발생시킬 수 있습니다.

```js
throw new TypeError("타입 에러가 발생했습니다.");
```

### try...catch문

`try...catch`문은 **자바스크립트에서 대표적인 에러 처리 방법**입니다.

```js
try {
  // 실행할 코드
} catch (error) {
  // 에러 발생 시 동작할 코드
}
```

> 사용법: try문 안에서 실행할 코드를 작성하고, try문에서 에러가 발생한 경우에 실행할 코드를 catch문 안에 작성하면 됩니다.

이 때, `try`문에서 발생한 에러 객체가 `catch`문의 첫 번째 파라미터로 전달됩니다.  
만약, `try`문에서 에러가 발생하지 않을 경우 `catch`문의 코드는 동작하지 않습니다.

그리고 `try...catch`문에서 에러의 유무와 상관없이 항상 동작해야할 코드가 필요하다면 `finally`문을 활용할 수 있습니다.

```js
try {
  // 실행할 코드
} catch (error) {
  // 에러가 발상했을 때 실행할 코드
} finally {
  // 항상 실행할 코드
}
```

## 📝 자바스크립트의 유용한 내부 기능

### forEach 메소드

**배열의 요소를 하나씩 살펴보면서 반복 작업을 하는 메소드**입니다.  
`forEach` 메소드는 첫 번째 아규먼트로 콜백 함수를 전달받는데요. 콜백 함수의 파라미터에는 각각 배열의 요소, index, 메소드를 호출한 배열이 전달됩니다. (index와 array는 생략가능)

```js
const numbers = [1, 2, 3];

numbers.forEach((element, index, array) => {
  console.log(element); // 순서대로 콘솔에 1, 2, 3이 한 줄씩 출력됨.
});
```

```js
const numbers = ["T1", "GenG", "DK"];

numbers.forEach((element, index, array) => {
  console.log(`${index + 1}등 ${element}`);
});
```

```
1등 T1
2등 GenG
3등 DK
```

```js
// 결과는 위와 같음 element와 index라는 글자에 얽메이지 말고 아무 값이나 넣어서 나타내주면 된다.
const numbers = ["T1", "GenG", "DK"];

numbers.forEach((lckTeam, i) => {
  const ranking = i + 1;
  console.log(`${ranking}등 ${lckTeam}`); // 순서대로 콘솔에 1, 2, 3이 한 줄씩 출력됨.
});
```

### map 메소드

`forEach`와 비슷하게 배열의 요소를 하나씩 살펴보면서 반복 작업을 하는 메소드 입니다.

❗ 단, **첫 번째 아규먼트로 전달하는 콜백 함수가 매번 리턴하는 값들을 모아서 새로운 배열을 만들어 리턴하는 특징**이 있습니다.

아래는 spread(`...twiceNumbers`)문법과 destructuring(`[a, b, c]`)문법을 같이 적용해본 것

```js
const numbers = [1, 2, 3];
const twiceNumbers = numbers.map((element, index, array) => {
  return element * 2;
});

console.log(twiceNumbers); // [ 2, 4, 6 ]

const [a, b, c] = twiceNumbers;

console.log(...twiceNumbers); // 2 4 6
console.log(a); // 2
console.log(b); // 4
console.log(c); // 6
```

### filter 메소드

`filter` 메소드는 배열의 요소를 하나씩 살펴보면서 **콜백함수가 리턴하는 조건과 일치하는 요소만 모아서 새로운 배열을 리턴하는 메소드**입니다.

```js
const devices = [
  { name: "GalaxyNote", brand: "Samsung" },
  { name: "MacbookPro", brand: "Apple" },
  { name: "Gram", brand: "LG" },
  { name: "SurfacePro", brand: "Microsoft" },
  { name: "ZenBook", brand: "Asus" },
  { name: "MacbookAir", brand: "Apple" },
];

const apples = devices.filter((element, index, array) => {
  return element.brand === "Apple";
});

console.log(apples); // [{name: "MacbookPro", brand: "Apple"}, {name: "MacbookAir", brand: "Apple"}]

const proApple = devices.filter((el) => {
  return el.brand === "Apple" && el.name === "MacbookPro";
});

console.log(proApple); // [ { name: 'MacbookPro', brand: 'Apple' } ]
```

```js
// filter 실습 김씨 빼고 다 찾아내!

const seoul = ['김영훈', '김윤수', '김동욱', '강대위', '김영준',
  '김규식', '김태호', '김효신', '손효준', '김현승', '김재하', '김유나',
  '김재훈', '김혜선', '김민환', '김규리', '김소원', '김우재', '최영준',
  '김태순', '김종훈', '김성환', '김승용', '김지혜', '이승욱', '김도현',
  '김승규', '윤하은', '김유진', '김정민', '김혜정', '김예진', '김여진',
  '김성희', '김혜수', '김인선', '김상필', '김혜진', '서상원', '김상혜',
  '김민기', '김그루', '김희지'];

const notKims = seoul.filter((firstName, index) => {
  return firstName[0] !== "김";
});

console.log(notKims);
```

**💡 자바스크립트에서는 문자열도 indexing이 가능하다**

```
[ '강대위', '손효준', '최영준', '이승욱', '윤하은', '서상원' ]
```

### find 메소드

`find` 메소드는 `filter` 메소드와 비슷하게 동작하지만,  
 배열의 요소들을 반복하는 중에 **콜백함수가 리턴하는 조건과 일치하는 가장 첫번째 요소를 리턴하고 반복을 종료하는 메소드** 입니다.

```js
const devices = [
  { name: "GalaxyNote", brand: "Samsung" },
  { name: "MacbookPro", brand: "Apple" },
  { name: "Gram", brand: "LG" },
  { name: "SurfacePro", brand: "Microsoft" },
  { name: "ZenBook", brand: "Asus" },
  { name: "MacbookAir", brand: "Apple" },
];

const myLaptop = devices.find((element, index, array) => {
  console.log(index); // 콘솔에는 0, 1, 2까지만 출력됨.
  return element.name === "Gram";
});

console.log(myLaptop); // {name: "Gram", brand: "LG"}
```
```
<!-- 출력 결과 -->
0
1
2
{ name: 'Gram', brand: 'LG' }
```

**<실습하면서 얻은 정보>**

`find` 메서드는 **조건을 만족하는 첫 번째 요소를 반환하거나, 조건을 만족하는 요소가 없을 경우** `undefined`를 반환합니다.  
따라서 if (user) 조건문은 조건을 만족하는 사용자가 있는 경우에만 참이 됩니다.

```js
// USER_DATA와 입력값 비교 후 로그인 성공 / 실패
var link = "items.html";

function loginSuccess() {
  const emailValue = emailInput.value;
  const passwordValue = passwordInput.value;

  const user = USER_DATA.find(
    (el) => emailValue === el.email && passwordValue === el.password
  );

  console.log("로그인 시도:", emailValue, passwordValue); // 추가된 로그
  if (user) {
    console.log("로그인 성공:", user); // 추가된 로그
    document.location.href = link;
    alert("로그인 성공!");
  } else {
    alert("비밀번호가 일치하지 않습니다.");
    console.log("로그인 실패"); // 추가된 로그
  }
}
useBtn.addEventListener("click", loginSuccess);
```

### some 메소드

`some` 메소드는 배열 안에 **콜백함수가 리턴하는 조건을 만족하는 요소가 1개 이상 있는지를 확인하는 메소드** 입니다.

배열을 반복하면서 모든 요소가 콜백함수가 리턴하는 조건을 만족하지 않는다면 `false`를 리턴하고,   
배열을 반복하면서 콜백함수가 리턴하는 조건을 만족하는 요소가 등장한다면 바로 `true`를 리턴하고 반복을 종료합니다.

```js
const numbers = [1, 3, 5, 7, 9];

// some: 조건을 만족하는 요소가 1개 이상 있는지
const someReturn = numbers.some((element, index, array) => {
  console.log(index); // 콘솔에는 0, 1, 2까지만 출력됨.
  return element > 3;
});

console.log(someReturn); // true;

// 전부 반복해서 돌아보고 조건에 맞는 것이 없어서 false 반환
const someNegativeReturn = numbers.some((el, i, array) => {
  console.log(i); // 콘솔에는 0, 1, 2, 3, 4 전부 출력됨.
  return el < 0;
});

console.log(someNegativeReturn); // false;
```
```
<!-- 출력 결과 -->
0
1
2
true
0
1
2
3
4
false
```

### every 메소드

`every` 메소드는 배열 안에 **콜백 함수가 리턴하는 조건을 만족하지 않는 요소가 1개 이상 있는지를 확인하는 메소드** 입니다.

배열을 반복하면서 모든 요소가 콜백함수가 리턴하는 조건을 만족한다면 `true`를 리턴하고,  
배열을 반복하면서 콜백함수가 리턴하는 조건을 만족하지 않는 요소가 등장한다면 바로 `false`를 리턴하고 반복을 종료합니다.

```js
const numbers = [1, 3, 5, 7, 9];

// every: 조건을 만족하지 않는 요소가 1개 이상 있는지
const everyReturn = numbers.every((element, index, array) => {
  console.log(index); // 콘솔에는 0까지만 출력됨.
  return element > 5;
});

console.log(everyReturn); // false;
```

### reduce 메소드

`reduce` 메소드는 누적값을 계산할 때 활용하는 조금 독특한 메소드 입니다. `reduce` 메소드는 일반적으로 **두 개의 파라미터**를 활용하는데요.

**첫 번째는 반복동작할 콜백함수**입니다. 매번 실행되는 콜백함수의 리턴값이 다음에 동작할 콜백함수의 첫번째 파라미터로 전달되는데요. 결과적으로 마지막 콜백함수가 리턴하는 값이 `reduce` 메소드의 최종 리턴값이 되는겁니다.

이 때 `reduce` 메소드의 **두 번째 파라미터로 전달한 초기값이 첫 번째로 실행될 콜백함수의 가장 첫 번째 파라미터로 전달**되는 것이죠.

```js
// reduce 함수의 기본구조
array.reduce((accumulator, element, index, array) => {
  // 누산 작업 수행
}, initialValue);
```
> - accumulator: 이전 반복의 결과값을 누적하는 변수.
> - element: 현재 배열 요소.
> - index: 현재 배열 요소의 인덱스.
> - array: 배열 자체.
> - initialValue: accumulator의 초기값.

```js
const numbers = [1, 2, 3, 4];

// reduce
const sumAll = numbers.reduce((accumulator, element, index, array) => {
  return accumulator + element;
}, 0);

const sumAllWith100 = numbers.reduce((accumulator, element, index, array) => {
  return accumulator + element;
}, 100);

console.log(sumAll); // 10
console.log(sumAllWith100); // 110
```

### sort 메소드

배열에서 **`sort`라는 메소드를 활용하면 배열**을 정렬할 수 있습니다.

`sort` 메소드에 아무런 아규먼트도 전달하지 않을 때는 기본적으로 유니코드에 정의된 문자열 순서에 따라 정렬됩니다.

```js
const letters = ["D", "C", "E", "B", "A"];
const numbers = [1, 10, 4, 21, 36000];

letters.sort();
numbers.sort();

console.log(letters); // (5) ["A", "B", "C", "D", "E"]
console.log(numbers); // (5) [1, 10, 21, 36000, 4]
```

> 그렇기 때문에 `numbers`에 `sort` 메소드를 사용한 것 처럼, 숫자를 정렬할 때는 **우리가 상식적으로 이해하는 오름차순이나 내림차순 정렬이 되지 않습니다.**

그럴 땐 `sort` 메소드에 다음과 같은 콜백함수를 아규먼트로 작성해주면 되는데요.

```js
const numbers = [1, 10, 4, 21, 36000];

// 오름차순 정렬
numbers.sort((a, b) => a - b);
console.log(numbers); // (5) [1, 4, 10, 21, 36000]

// 내림차순 정렬
numbers.sort((a, b) => b - a);
console.log(numbers); // (5) [36000, 21, 10, 4, 1]
```

⚠ `sort` 메소드를 사용할 때 한 가지 주의해야될 부분은 **메소드를 실행하는 원본 배열의 요소들을 정렬한다는 점**입니다.   
그래서 한 번 정렬하고 나면 정렬하기 전의 순서로 다시 되돌릴 수 없으니까, 원본 배열의 순서가 필요하다면 미리 다른 변수에 복사해두는 것이 좋습니다!

### reverse 메소드

`reverse` 메소드는 말 그대로 **배열의 순서를 뒤집어 주는 메소드** 입니다.

`reverse` 메소드는 별도의 파라미터가 존재하지 않기 때문에 단순히 메소드를 호출해주기만 하면 배열의 순서가 뒤집히는데요. `sort` 메소드와 마찬가지로 **원본 배열의 요소들을 뒤집어 버린다는 점**은 꼭 주의해야 합니다.

```js
const letters = ["a", "c", "b"];
const numbers = [421, 721, 353];

letters.reverse();
numbers.reverse();

console.log(letters); // (3) ["b", "c", "a"]
console.log(numbers); // (3) [353, 721, 421]
```

### Map

Map은 이름이 있는 데이터를 저장한다는 점에서 **객체**와 비슷합니다.  
하지만, 할당연산자를 통해 값을 추가하고 점 표기법이나 대괄호 표기법으로 접근하는 일반 객체와 다르게 Map은 메소드를 통해서 값을 추가하거나 접근할 수 있습니다.

`new` 키워드를 통해서 Map을 만들 수 있고 아래와 같은 메소드를 통해 Map 안의 여러 값들을 다룰 수 있습니다.

- `map.set(key, value)`: key를 이용해 value를 추가하는 메소드.
- `map.get(key)`: key에 해당하는 값을 얻는 메소드. key가 존재하지 않으면 undefined를 반환.
- `map.has(key)`: key가 존재하면 true, 존재하지 않으면 false를 반환하는 메소드.
- `map.delete(key)`: key에 해당하는 값을 삭제하는 메소드.
- `map.clear()`: Map 안의 모든 요소를 제거하는 메소드.
- `map.size`: 요소의 개수를 반환하는 프로퍼티. (메소드가 아닌 점 주의! 배열의 length 프로퍼티와 같은 역할)

```js
// Map 생성
const codeit = new Map();

// set 메소드
codeit.set("title", "문자열 key");
codeit.set(2017, "숫자형 key");
codeit.set(true, "불린형 key");

// get 메소드
console.log(codeit.get(2017)); // 숫자형 key
console.log(codeit.get(true)); // 불린형 key
console.log(codeit.get("title")); // 문자열 key

// has 메소드
console.log(codeit.has("title")); // true
console.log(codeit.has("name")); // false

// size 프로퍼티
console.log(codeit.size); // 3

// delete 메소드
codeit.delete(true);
console.log(codeit.get(true)); // undefined
console.log(codeit.size); // 2

// clear 메소드
codeit.clear();
console.log(codeit.get(2017)); // undefined
console.log(codeit.size); // 0
```

> 문자열과 심볼 값만 key(프로퍼티 네임)로 사용할 수 있는 일반 객체와는 다르게 Map 객체는 메소드를 통해 값을 다루기 때문에, 다양한 자료형을 key로 활용할 수 있다는 장점이 있습니다.

### Set

Set은 여러 개의 값을 순서대로 저장한다는 점에서 **배열**과 비슷합니다.   
하지만, 배열의 메소드는 활용할 수 없고 Map과 비슷하게 Set만의 메소드를 통해서 값을 다루는 특징이 있습니다.

Map과 마찬가지로 `new` 키워드로 Set을 만들 수 있고 아래와 같은 메소드를 통해 Set 안의 여러 값들을 다룰 수 있습니다.

- `set.add(value)`: 값을 추가하는 메소드. (메소드를 호출한 자리에는 추가된 값을 가진 Set 자신을 반환.)
- `set.has(value)`: Set 안에 값이 존재하면 true, 아니면 false를 반환하는 메소드.
- `set.delete(value)`: 값을 제거하는 메소드. (메소드를 호출한 자리에는 셋 내에 값이 있어서 제거에 성공하면 true, 아니면 false를 반환.)
- `set.clear()`: Set 안의 모든 요소를 제거하는 메소드.
- `set.size`: 요소의 개수를 반환하는 프로퍼티. (메소드가 아닌 점 주의! 배열의 length 프로퍼티와 같은 역할)

```js
// Set 생성
const members = new Set();

// add 메소드
members.add("영훈"); // Set(1) {"영훈"}
members.add("윤수"); // Set(2) {"영훈", "윤수"}
members.add("동욱"); // Set(3) {"영훈", "윤수", "동욱"}
members.add("태호"); // Set(4) {"영훈", "윤수", "동욱", "태호"}

// has 메소드
console.log(members.has("동욱")); // true
console.log(members.has("현승")); // false

// size 프로퍼티
console.log(members.size); // 4

// delete 메소드
members.delete("종훈"); // false
console.log(members.size); // 4
members.delete("태호"); // true
console.log(members.size); // 3

// clear 메소드
members.clear();
console.log(members.size); // 0
```

> 한가지 특이한 점은 일반 객체는 프로퍼티 네임으로, Map은 `get`메소드로, 그리고 배열은 index를 통해서 개별 값에 접근할 수 있었는데요. 한 가지 특이한 점은 Set에는 개별 값에 바로 접근하는 방법이 없다는 점입니다.

```js
// Set 생성
const members = new Set();

// add 메소드
members.add("영훈"); // Set(1) {"영훈"}
members.add("윤수"); // Set(2) {"영훈", "윤수"}
members.add("동욱"); // Set(3) {"영훈", "윤수", "동욱"}
members.add("태호"); // Set(4) {"영훈", "윤수", "동욱", "태호"}

for (const member of members) {
  console.log(member); // 영훈, 윤수, 동욱, 태호가 순서대로 한 줄 씩 콘솔에 출력됨.
}
```

> 그래서 위 코드와 같이 반복문을 통해서 전체요소를 한꺼번에 다룰 때 반복되는 그 순간에 개별적으로 접근할 수가 있습니다.

그런데, 이런 특징을 가지고도 Set이 유용하게 사용되는 경우가 있는데요. 바로, **중복을 허용하지 않는 값들을 모을 때**입니다.

Set은 **중복되는 값을 허용하지 않는 독특한 특징**이 있습니다. Set 객체에 요소를 추가할 때 이미 Set 객체 안에 있는 값(중복된 값)을 추가하려고 하면 그 값은 무시되는 특징이 있습니다.

처음 Set을 생성할 때 아규먼트로 배열을 전달할 수가 있습니다. 이런 특징을 활용해서 배열 내에서 중복을 제거한 값들의 묶음을 만들 때 Set을 활용할 수 있습니다.

```js
const numbers = [1, 3, 4, 3, 3, 3, 2, 1, 1, 1, 5, 5, 3, 2, 1, 4];
const uniqNumbers = new Set(numbers);

console.log(uniqNumbers); // Set(5) {1, 3, 4, 2, 5}
```