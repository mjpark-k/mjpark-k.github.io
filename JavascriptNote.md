## Basic Javascipt
📝 code form
```js
```

>변수선언
```js
let espressoPrice = 3000;
let lattePrice = 4300;
let mochaPrice=4800;

console.log(espressoPrice * 2);
console.log(lattePrice * 4 + mochaPrice * 2);
```

> 함수 선언 및 호출
```js
function greetings(sentence) {  // 함수 선언
  console.log('Hi');
  console.log('안녕');
  console.log('こんにちは');
  console.log('你好');
  console.log('Guten Tag');
  console.log('Bonjour');
  console.log('Buongiorno');
  console.log(sentence);
};

greetings('Hola');  // 함수 호출
```

```js
function welcome(name){
  console.log('안녕하세요 ' + name + '님!');
};

welcome('코드잇');
welcome('박명준');

function printSquare(x){
  console.log(x * x);
};

printSquare(2);
printSquare(3);
printSquare(4);
```

> 실습 코드 (내 노트북의 용량은?)
```js
function teraToGiga(number){
  console.log(number + 'TB는');
  console.log(number * 1024 + 'GB 입니다.')
};

function teraToMega(number){
  console.log(number + 'TB는');
  console.log(number * 1024 * 1024 + 'MB 입니다.');
};

// TB -> GB 테스트
teraToGiga(2);
// TB -> MB 테스트
teraToMega(2);
```

> 여러 개의 파라미터
```js
function printSum(num1, num2){
  console.log(num1 + num2);
};

printSum(10, 5);

function introduce(name, birth, nationality, job){
  console.log('안녕하세요! 반갑습니다.');
  console.log('제 이름은 ' + name + '입니다.');
  console.log('생년월일은 ' + birth + '이고,');
  console.log('국적은 ' + nationality + '입니다.' );
  console.log('직업은 ' + job + '입니다.');
  console.log('잘 부탁드립니다!');
};

introduce('자몽준', '240101', '한국', '학생');
```

> 실습 코드 (나의 체질량지수는?)
```js
function bmiCalculator(name, weight, height){
  console.log(name + '님의 체질량지수는 ' + weight / (height * height / 10000) + '입니다.');
};

// 테스트 코드
bmiCalculator('홀쭉이', 43.52, 160);
bmiCalculator('코린이', 61.25, 175);
bmiCalculator('통통이', 77.76, 180);
```

> return 값
```js
function getTwice(number){
  return number * 2;
};

let x = getTwice(5);
let y = getTwice(2);

console.log(x * y);
```

> 실습 코드 (1년 뒤엔 얼마를 받을까?)
```js
function interestCalculator(myMoney, saveTerm, interestRate){
  return myMoney * saveTerm * interestRate / 100;
};

// 조건 입력 테스트
let myMoney = 3650000; // 맡긴 금액 (원)
let saveTerm = 1; // 맡기는 기간 (년)
let interestRate = 4; // 이자율 (%)

// 수령액 계산 테스트
let myInterest = interestCalculator(myMoney, saveTerm, interestRate);
let totalMoney = myMoney + myInterest;

// 출력 테스트
console.log('맡긴 금액은 ' + myMoney + '원 입니다.');
console.log('이자는 ' + myInterest + '원 입니다.');
console.log('최종 받을 금액은 ' + totalMoney + '원 입니다.');
```

> 고급 연산
```js
// 거듭제곱 (2 * 2 * 2와 같다.)
console.log(2 ** 3);

// 나머지
console.log(7 % 3);

// 사칙연산 우선순위 (거듭제곱 > 곱하기, 나누기, 나머지, > 더하기, 빼기)
console.log(2 + 3 * 2);
console.log((2 + 3) * 2);
console.log((3 + 27) * 12 ** (5 % 3));
```

> 문자열
```js
console.log("I'm Iron man");
console.log("He said \"I'm Iron man\"");
console.log(`He said "I'm Iron man"`);

console.log(3 + 5);   // 8
console.log('3' + '5');   // 35
console.log('3 + 5');   // 3 + 5
```

> 불린 (Boolean)
```js
console.log(2 > 1);
console.log(2 < 1);
console.log(3 >= 2); // 등호는 무조건 부등호 뒤에 나와야 한다. (>=, <=)
console.log(3 <= 3);
console.log(3 === 3);
console.log(3 !== 3);

console.log(true && true);
console.log(true && false);
console.log(false && true);
console.log(false && false);

console.log(true || true);
console.log(true || false);
console.log(false || true);
console.log(false || false);

console.log(!true);
console.log(!!true);
console.log(!false);
console.log(!!false);
```

> 연습 문제 (헷갈리는 Boolean)
```js
let z = 'c';
console.log('codeit' !== z + 'odeit');    // false
console.log('codeit');
console.log(z + 'odeit');
console.log(typeof 'codeit');   // string
console.log(typeof z + 'odeit');    // stringodeit
```

> typeof 연산자
```js
console.log(typeof 1);
console.log(typeof '1');

let name = 'codeIt';
function sayHello(){
  console.log('Hello');
};

console.log(typeof name);
console.log(typeof sayHello);

console.log(typeof 'Hello' + 'Codeit');   // stringCodeit
console.log(typeof 8 - 3);    // NaN = Not A Number
// 해결 방법
console.log(typeof ('Hello' + 'Codeit'));
console.log(typeof (8 - 3));
```

> **연산자 우선순위**
> 1. 그룹 ()
> 2. 논리NOT !
> 3. typeof
> 4. 거듭제곱 **
> 5. 곱셈 *, 나눗셈 / 
> 6. 나머지 %
> 7. 덧셈 +, 뺄셈 -
> 8. 미만 <, 이하 <=, 초과 >, 이상 >=
> 9. 동등 ==, 부등 !=, 일치 ====, 불일치 !==
> 10. 논리AND &&
> 11. 논리OR ||
> 12. 할당 =
> 13. [자세한내용](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Operator_precedence) 

>형 변환 (Type Conversion)
```js
// String, Number, Boolean
console.log('10' + '5');
console.log(Number('10') + Number('5'));
console.log(10 + 5);
console.log(String(10) + String(5));

// 문자 -> 숫자
x = '123';
console.log(x);
console.log(Number(x));
console.log(typeof x);
console.log(typeof Number(x));

// 불린 -> 숫자
y = true;
console.log(y);
console.log(Number(y));   // true -> 숫자로 1, false -> 숫자로 0
console.log(typeof y);
console.log(typeof Number(y));

// 문자 -> 불린
x = '문자';
console.log(x);
console.log(Boolean(x));    // 값이 있으면 true, 값이 없는 '' 이런 것들은 false
console.log(typeof x);
console.log(typeof Boolean(x));

// 숫자 -> 불린
y = 123;
console.log(y);
console.log(Boolean(y));   // 0, NaN -> false, 이 외의 숫자 값들은 true로 출력
console.log(typeof y);
console.log(typeof Boolean(y));
```
👉 **'', 0, NaN -> falsy값**

> 형 변환 2(Type Conversion)
```js
// 산술 연산(+, -, *, /, %, **)
console.log(4 + '2');   // 더하기의 경우 어느 한쪽이라도 문자열이면 양쪽 모두를 문자열로 취급(+ ->문자열을 연결하는 기능이 강함)
console.log(4 + 2);
console.log(4 - true);
console.log(4 * false);
console.log(4 / '2');
console.log('4' ** true);
console.log(4 % 'two');   // 'two'라는 문자열은 숫자형으로 변경하면 NaN, NaN 값은 어떤 값과 연산을 해도 NaN

// 관계 비교 연산(<. <=, >, >=)
console.log(2 < '3');
console.log(2 > true);
console.log('2' <= false);
console.log('two' >= 1);    //NaN은 비교 불가 -> false

// 같음 비교 연산(===, !==, ==, !=)
console.log(1 === '1');   // 일치, 불일치
console.log(1 === true);
console.log(1 == '1');    // 동등, 부등등
console.log(1 == true);

// 일치, 불일치(===, !==)를 선호

// 연습 문제(헷갈리는 문제)
console.log(typeof ('4' + 3));    // 결과로 나오는 43도 '43'이라는 문자열로 생각해야 함!!
console.log(typeof (3 - true));
console.log(typeof(Boolean(5) * true));   // number
console.log(typeof(true < false));
console.log(Number(true) == String(1));
console.log('5' / true !== '5');    //true (좌항은 number 우항은 string)
```

> 템플릿 문자열 (template strings)
```js
// template: 일정한 틀, 형식
let year = 2018;
let month = 3;
let day = 11;

console.log('생년월일은 ' + year + '년 ' + month + '월 ' + day + '일 입니다.');
console.log(`생년월일은 ${year}년 ${month}월 ${day}일 입니다.`);
console.log('');

let myNumber = 3;
function getTwice(x){
  return x * 2;
}

console.log(`${myNumber}의 두 배는 ${getTwice(myNumber)}입니다.`);
```
> '값이 없다'
> * `null` -> 의도적으로 표현할 때, 사용하는 값 -> 의도적인 없음!
> * `undefined` -> 값이 없다는 것을 확인하는 값 -> 처음부터 없음!

> null과 undefined
```js
let codeit;
console.log(codeit);
codeit = null;
console.log(codeit);
codeit = undefined;
console.log(codeit);    // 문제는 없으나, 값이 없다는 것을 표현할 때는 null 사용을 권장!!!

console.log('')
console.log(null == undefined);
console.log(null === undefined);    // 서로 다른 자료형

console.log('')
let cup;
console.log(cup); // undefined
cup = '물';
console.log(cup); // 물
cup = null;
console.log(cup); // null
```
> 할당 연산자 (Assignment operators)
```js
x = 5;

x = x - 2;
console.log(x);
```
> 복합 할당 연산자 (Compound assignment operators)
```js
// 다음 두 줄은 같습니다
x = x + 1;
x += 1;

// 다음 두 줄은 같습니다
x = x * 2;
x *= 2;

// 다음 두 줄은 같습니다
x = x - 3;
x -= 3;

// 다음 두 줄은 같습니다
x = x / 2;
x /= 2;

// 다음 두 줄은 같습니다
x = x % 7;
x %= 7;
```
> 증가(increment), 감소 (decrement) 연산자
```js
// 다음 세 줄은 같은 의미입니다
x = x + 1;
x += 1;
x++;

// 다음 세 줄은 같은 의미입니다
x = x - 1;
x -= 1;
x--;
```
> return과 console.log의 차이
```js
function square(x){
  console.log('return 전');
  return x * x;
  console.log('return 후');   // Dead Code (return은 함수 자체를 종료함)
}

console.log('함수 호출 전');
console.log(square(3));
console.log('함수 호출 후');

function printSquare(x){
  console.log(x * x);
}

function getSquare(x){
  return x*x;
}

printSquare(3);
console.log(printSquare(3));    // return문을 따로 작성하지 않으면 undefined 값을 반환한다!!
console.log(getSquare(3));
```
> 416번 부터 다시
```js
```
```js
```
```js
```
```js
```
```js
```
