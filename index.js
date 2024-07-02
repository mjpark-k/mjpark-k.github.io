// ctrl + O(alphabet) -> index.html 파일 열기
// 개발자 도구 열기 -> console 보기

/* 아래 코드는
브라우저 콘솔에
15를 출력하는 코드입니다.
*/
// console.log(10 + 5); 
// console.log(20 - 5);

// 변수 선언
let espressoPrice = 3000;
let lattePrice = 4300;
let mochaPrice = 4800;

console.log(espressoPrice * 2);
console.log(lattePrice * 4 + mochaPrice * 2);

console.log('---------------------');
// 함수 선언
function greetings(sentence) {
  console.log('Hi');
  console.log('안녕');
  console.log('こんにちは');
  console.log('你好');
  console.log('Guten Tag');
  console.log('Bonjour');
  console.log('Buongiorno');
  console.log(sentence);
};

//함수 호출
greetings('Hola');

console.log('---------------------');
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

console.log('---------------------');
// 실습 코드(내 노트북의 용량은?)
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

console.log('---------------------');
//여러개의 파라미터
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

introduce('박명준', '980729', '한국', '취준생');

console.log('---------------------');
// 실습 코드(나의 체질량지수는?)
function bmiCalculator(name, weight, height){
  console.log(name + '님의 체질량지수는 ' + weight / (height * height / 10000) + '입니다.');
};

// 테스트 코드
bmiCalculator('홀쭉이', 43.52, 160);
bmiCalculator('코린이', 61.25, 175);
bmiCalculator('통통이', 77.76, 180);

console.log('------------------------------');
// return
function getTwice(number){
  return number * 2;
};

let x = getTwice(5);
let y = getTwice(2);

console.log(x * y);

console.log('------------------------------');
// 실습 코드(1년 뒤엔 얼마를 받을까?)

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

console.log('---------------------------------');
// 모르는 사칙 연산
// 거듭제곱 (2 * 2 * 2와 같다.)
console.log(2 ** 3);

// 나머지
console.log(7 % 3);

// 사칙연산 우선순위 (거듭제곱 > 곱하기, 나누기, 나머지, > 더하기, 빼기)
console.log(2 + 3 * 2);
console.log((2 + 3) * 2);
console.log((3 + 27) * 12 ** (5 % 3));

console.log('-----------------------');
// 문자열
console.log("I'm Iron man");
console.log("He said \"I'm Iron man\"");
console.log(`He said "I'm Iron man"`);

console.log(3 + 5);
console.log('3' + '5');
console.log('3 + 5');

console.log('-----------------------');
// 불린 (Boolean)
console.log(2 > 1);
console.log(2 < 1);
console.log(3 >= 2); // *등호는 무조건 부등호 뒤에 나와야 한다.
console.log(3 <= 3);
console.log(3 === 3);
console.log(3 !== 3);

console.log('-----------------------');
console.log(true && true);
console.log(true && false);
console.log(false && true);
console.log(false && false);

console.log('-----------------------');
console.log(true || true);
console.log(true || false);
console.log(false || true);
console.log(false || false);

console.log('-----------------------');
console.log(!true);
console.log(!!true);
console.log(!false);
console.log(!!false);

console.log('-----------------------');
// 연습 문제 (헷갈리는 Boolean)
let z = 'c';
console.log('codeit' !== z + 'odeit');
console.log('codeit');
console.log(z + 'odeit');
console.log(typeof 'codeit');
console.log(typeof z + 'odeit');

console.log('-----------------------');
// typeof 연산자
console.log(typeof 1);
console.log(typeof '1');

let name = 'codeIt';
function sayHello(){
  console.log('Hello');
};

console.log(typeof name);
console.log(typeof sayHello);

console.log(typeof 'Hello' + 'Codeit');
console.log(typeof 8 - 3);
// NaN = Not A Number
// 해결 방법
console.log(typeof ('Hello' + 'Codeit'));
console.log(typeof (8 - 3));

console.log('-----------------------');
/**
 *  연산자 우선순위
 *  1. 그룹 ()
 *  2. 논리NOT !
 *  3. typeof
 *  4. 거듭제곱 **
 *  5. 곱셈 *, 나눗셈 /
 *  6. 나머지 %
 *  7. 덧셈 +, 뺄셈 -
 *  8. 미만 <, 이하 <=, 초과 >, 이상 >=
 *  9. 동등 ==, 부등 !=, 일치 ===, 불일치 !==
 *  10. 논리 AND &&
 *  11. 논리 OR ||
 *  12. 할당 =
 * 
 *  ==> 자세한 내용은 https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Operator_precedence
 */

// 형 변환(Type Conversion)

// String, Number, Boolean
console.log('10' + '5');
console.log(Number('10') + Number('5'));
console.log(10 + 5);
console.log(String(10) + String(5));

console.log('-----------------------');
// 문자 -> 숫자
x = '123';
console.log(x);
console.log(Number(x));
console.log(typeof x);
console.log(typeof Number(x));

console.log('');
// 불린 -> 숫자
y = true;
console.log(y);
console.log(Number(y));   // true -> 숫자로 1, false -> 숫자로 0
console.log(typeof y);
console.log(typeof Number(y));

console.log('-----------------------');
// 문자 -> 불린
x = '문자';
console.log(x);
console.log(Boolean(x));    // 값이 있으면 true, 값이 없는 '' 이런 것들은 false
console.log(typeof x);
console.log(typeof Boolean(x));

console.log('');
// 숫자 -> 불린
y = 123;
console.log(y);
console.log(Boolean(y));   // 0, NaN -> false, 이 외의 숫자 값들은 true로 출력
console.log(typeof y);
console.log(typeof Boolean(y));

// '', 0, NaN -> falsy값

console.log('-----------------------');
// 형 변환2(Type Conversion)
// 산술 연산(+, -, *, /, %, **)
console.log(4 + '2');   // 더하기의 경우 어느 한쪽이라도 문자열이면 양쪽 모두를 문자열로 취급(+ ->문자열을 연결하는 기능이 강함)
console.log(4 + 2);
console.log(4 - true);
console.log(4 * false);
console.log(4 / '2');
console.log('4' ** true);
console.log(4 % 'two');   // 'two'라는 문자열은 숫자형으로 변경하면 NaN, NaN 값은 어떤 값과 연산을 해도 NaN

console.log('-----------------------');
// 관계 비교 연산(<. <=, >, >=)
console.log(2 < '3');
console.log(2 > true);
console.log('2' <= false);
console.log('two' >= 1);    //NaN은 비교 불가 -> false

console.log('-----------------------');
// 같음 비교 연산(===, !==, ==, !=)
console.log(1 === '1');   // 일치, 불일치
console.log(1 === true);
console.log(1 == '1');    // 동등, 부등등
console.log(1 == true);

// 일치, 불일치(===, !==)를 선호

console.log('-----------------------');
// 연습 문제(헷갈리는 문제)
console.log(typeof ('4' + 3));    // 결과로 나오는 43도 '43'이라는 문자열로 생각해야 함!!
console.log(typeof (3 - true));
console.log(typeof(Boolean(5) * true));
console.log(typeof(true < false));
console.log('')
console.log(Number(true) == String(1));
console.log('5' / true !== '5');

console.log('-----------------------');
// 템플릿 문자열 (template strings)
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

console.log('-----------------------');
/**
 *  '값이 없다'
 *  1) null -> 의도적으로 표현할 때, 사용하는 값 -> 의도적인 없음!
 *  2) undefined -> 값이 없다는 것을 확인하는 값 -> 처음부터 없음!
 */
// null과 undefined
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

console.log('-----------------------');
// 할당 연산자 (Assignment operators)
name = '코드잇';
x = 5;

x = x - 2;
console.log(x);

// 복합 할당 연산자(Compound assignment operators)
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

// 증가(increment), 감소(decrement) 연산자
// 다음 세 줄은 같은 의미입니다
x = x + 1;
x += 1;
x++;

// 다음 세 줄은 같은 의미입니다
x = x - 1;
x -= 1;
x--;

console.log('-----------------------');
function square(x){
  console.log('return 전');
  return x * x;
  console.log('return 후');   // Dead Code (return은 함수 자체를 종료함)
}

console.log('함수 호출 전');
console.log(square(3));
console.log('함수 호출 후');

console.log('-----------------------');
function printSquare(x){
  console.log(x * x);
}

function getSquare(x){
  return x*x;
}

printSquare(3);
console.log(printSquare(3));    // return문을 따로 작성하지 않으면 undefined 값을 반환한다!!
console.log(getSquare(3));

console.log('-----------------------');
// 옵셔널 파라미터 (Optional Parameters)  -> 생성할 때, 가장 뒤 쪽으로 생성하는 것이 좋다.(밑에 nationality처럼)
function introduce(name, age, nationality = '한국'){
  console.log(`제 이름은 ${name}입니다.`);
  console.log(`나이는 ${age}살 이고,`);
  console.log(`국적은 ${nationality}입니다.`);
}

introduce('코드잇', 4, '미국');   // 값을 모두 전달한 경우
console.log('');
introduce('코드잇', 4);   // 파라미터 값을 생략한 경우

console.log('-----------------------');
// Scope: 범위, 영역
let xa = 3; // 글로벌 변수, 전역 변수 (Global Variable)

function myFunction(){  // 블록문 (Block Statement)
  let xa = 5; // 로컬 변수, 지역 변수 (Local Variable)
  console.log(xa);
}

myFunction();
console.log(xa);

console.log('-----------------------');
// 상수 (constant) -> 대문자로 표기하는 것이 좋다. 띄어쓰기는 _로 나타낸다.(ex. MY_NUMBER)
const PI = 3.14; // 원주율 (원주율은 변화가 없으므로 상수값으로 취급할 수 있다. 그래서 let 대신 const라는 상수 표시를 사용한다!!)
let radius = 0; // 반지름 (빈 공간임을 나타낼 때, 문자열에서는 ''를 사용하고, 숫자열에서는 0을 사용하기도 한다.(null 개념))

// 원의 넓이를 계산하는 함수
function calculateArea(){
  return PI * radius * radius
}

function printArea(){
  return `반지름이 ${radius}일 때, 원의 넓이는 ${calculateArea()}`;
}

radius = 4;
console.log(printArea());

radius = 7;
console.log(printArea());

radius = 8;
console.log(printArea());

console.log('-----------------------');
// if문 (if statement)
/**
 * if (조건 부분){
 *  동작부분
 * }
 */
// let temperature = 0;
let temperature = 1;

if (temperature <= 0){
  console.log('물이 업니다.');
} else {
  console.log('물이 얼지 않습니다.')
}

console.log('-----------------------');
let temperature2 = -105;

if (temperature2 <= 0){
  console.log('물이 업니다.');
} else if (temperature2 < 100){
  console.log('물이 얼지도 끓지도 않습니다.');
} else if (temperature2 < 150){
  console.log('물이 끓습니다.');
} else {
  console.log('물이 모두 수증기가 되었습니다.');
}

console.log('-----------------------');
// 실습 코드 (서열 정리)
// 나의 나이와, 나의 성별을 저장하는 변수
let myAge = 26;
let myGender = 'male';

// 호칭을 담은 변수
let callOlderBrother = '형';
let callOlderSister = '누나';
let callFriend = '친구';
let callYoungerSister = '여동생';
let callYoungerBrother = '남동생';

// 상대방의 나이와 성별에 따른 호칭을 리턴하는 함수 whatShouldICall를 완성하세요
function whatShouldICallYou(yourAge, yourGender) {
  // 여기에 코드를 작성하세요
  if (yourAge > myAge) {
    if (yourGender === myGender) {
      return callOlderBrother;
    } else {
      return callOlderSister;
    }
  }else if (yourAge < myAge) {
    if (yourGender === myGender) {
      return callYoungerBrother;
    }else {
      return callYoungerSister;
    }
  }else {
    return callFriend;
  }
}

// 테스트 코드
let result1 = whatShouldICallYou(25, 'female');
let result2 = whatShouldICallYou(20, 'male');
let result3 = whatShouldICallYou(26, 'female');
let result4 = whatShouldICallYou(30, 'male');
let result5 = whatShouldICallYou(31, 'female');

console.log(result1);
console.log(result2);
console.log(result3);
console.log(result4);
console.log(result5);

console.log('-----------------------');
// switch문 (switch statement)
/**
 * switch (비교할 값) {
 *  case 조건값_1:
 *  break;
 *  case 조건값_2:
 *  break;
 *  default:
 *  동작부분;
 * }
 */
let myChoice = 2;

switch(myChoice) {
  case 1:
    console.log('토끼를 선택한 당신, ...');
    break;
  case 2:
    console.log('고양이를 선택한 당신, ...');
    break;
  case 3:
    console.log('코알라를 선택한 당신, ...');
    break;
  case 4:
    console.log('강아지를 선택한 당신, ...');
    break;
  default:
    console.log('1에서 4사이의 숫자를 선택해 주세요.');
}

/**
 *  범위를 만족하는 조건식을 만들 때는 if문을 활용하는 것이 효과적이고,
 *  특정값을 만족하는 조건식을 만들 때는 switch문이 효과적임
 * 
 *  다만 if문 대체할 경우에는 등호를 조심하자 (=== 사용)
 *  */ 
console.log('-----------------------');
// 반복문 (loop statement)
/**
 *  for문 (for statement)
 *  for (초기화부분; 조건부분; 추가동작부분) {
 *    동작부분
 * }
 */
for (let i = 1; i <= 10; i++){    // 초기화 부분을 생략해도 되지만 ;은 없으면 안된다.
  console.log(`${i}코드잇 최고!`);
}

// console.log(i);  -> Error, for 반복문의 초기화 부분에서 생성한 변수는 for문 안에서의 로컬 변수가 된다!

console.log('-----------------------');
// 실습 코드 (for 문)
function printTriangle(height) {
  let message = '';   // 변수를 초기화 하고 for문 들어가야 함
  for (let i = 0; i < height; i++) {
    message += '*';
    console.log(message);
  }
}

// 테스트 코드
console.log('높이: 1');
printTriangle(1);

console.log('높이: 3');
printTriangle(3);

console.log('높이: 5');
printTriangle(5);

console.log('-----------------------');
// while문 (while statement)
let i = 1;

while (i <= 10) {
  console.log(`${i} 코드잇 최고!`);
  i++;
}

for (let i = 1; i <= 10; i++){
  console.log(`${i}코드잇 최고!`);
}

console.log('');

i = 30;

while (i % 7 !== 0) {
  i++;
}

console.log(i);

console.log('-----------------------');
// 실습 코드 (while 문)
const N = 180;
i = 1;
let count = 0;    // 약수 세기, count 변수를 초기화해주고 if문 안에서 180의 약수를 발견했을 경우 1씩 늘려주면 된다.

while (i <= N) {
  if (N % i === 0) {
    console.log(i);
    count++;
  }
  i += 1;
}

console.log(`${N}의 약수는 총 ${count}개입니다.`);

console.log('-----------------------');
// break와 continue
i = 1;

while (i <= 10) {
  console.log(i);
  if (i === 7) {
    break;
  }
  i++
}

console.log('');

for (i = 1; i <= 10; i++) {
  if (i % 2 === 0) {
    continue;
  }
  console.log(i);
}

console.log('-----------------------');
// 실습 코드 (구구단 만들기)
for (let i = 1; i <= 9; i++) {
  for (let j = 1; j <= 9; j++) {
    console.log(`${i} * ${j} = ${i * j}`);
  }
}

console.log ('');
// while문으로 구구단을 만든다면 아래 처럼
i = 1;
while (i <= 9) {
  let j = 1;
  while (j <= 9) {
    console.log(`${i} * ${j} = ${i * j}`);
    j++;
  }
  i++;
}

console.log('-----------------------');
// 실습 코드 (피보나치 수열 만들기) -> 임시 보관소 개념 어려웠음
let previous = 0;
let current = 1;

for (let i = 1; i <= 50; i++) {
  console.log(current);
  let temp = previous;  // previous를 임시 보관소 temp에 저장
  previous = current;
  current = current + temp;  // temp에는 기존 previous 값이 저장돼 있음
}

console.log('-----------------------');
// 객체 (Object)
/**
 *  propertyName은 문자열로 ''(따옴표) 생략이 가능하다.
 *  1. 첫 글자는 문자, 밑줄(_), 달러($) 중 하나로 시작해야 한다.
 *  2. 띄어 쓰기 금지
 *  3. 하이픈(-) 금지
 * 
 *  하지만 위에 규칙을 벗어나는 경우에는 ''(따옴표)로 감싸야한다.
 */
codeit = {
  name: '코드잇',
  'born Year': 2017,
  isVeryNice: true,
  worstCourse: undefined,
  bestCourse: {
    title: '자바스크립트 프로그래밍 기초',
    language: 'JavaScript'
  }
}
console.log(codeit);
console.log(codeit.name);
console.log(codeit["born Year"]);
console.log(codeit.bestCourse.title);
console.log(codeit.bestCourse['title']);

console.log('');
// 객체 수정
console.log(codeit.name);
codeit.name = 'codeit'
console.log(codeit.name);
// 객체 추가
console.log(codeit.ceo);
codeit.ceo = '강영훈';
console.log(codeit.ceo);
// 객체 삭제
console.log(codeit.worstCourse);
delete codeit.worstCourse;
console.log(codeit.worstCourse);

console.log('');
console.log(codeit.worstCourse !== undefined);
// 'propertyName' in object
console.log('worstCourse' in codeit); // 위에 delete 안한다면 in 연산자에선 true가 출력된다.

if('name' in codeit){
  console.log(`name 값은 ${codeit.name} 입니다.`);
} else {
  console.log('name 프로퍼티는 존재하지 않습니다.');
}

console.log('');
// 실습 코드 (영단어장 만들기)
let myVoca = {
  function: '함수',
  variable: '변수',
  constant: '상수',
  local: '지역의',
  global: '전반적인',
};

// 이미 외운 단어 3개를 삭제해 주세요
// 여기에 코드를 작성하세요
delete myVoca.function;
delete myVoca.constant;
delete myVoca.local;

console.log(myVoca);
console.log(myVoca.constant);

// 오늘 외울 단어 4개를 추가해 주세요
// 여기에 코드를 작성하세요
myVoca.extend = '확장하다';
myVoca.export = '내보내다';
myVoca.import = '불러오다';
myVoca['default value'] = '기본값';

console.log(myVoca);
console.log(myVoca.export);

// 3. default value의 뜻을 출력해 주세요
// 여기에 코드를 작성하세요
console.log(myVoca['default value']);

console.log('------------------------');
// 메소드 (Method)
greetings = {
  sayHello: function () {
    console.log('Hello');  
  },
  sayHi: function(name){
    console.log(`Hi ${name}!`);
  },
  sayBye:function() {
    console.log('Bye!');
  }
};

greetings.sayHello();
greetings.sayHi('codeIt');
greetings['sayHi']('CodeIt');

console.log('');
let rectAngle = {
  width: 30,
  height: 50,
  getArea: function() {
    return rectAngle.width * rectAngle.height;
  }
}

let triAngle = {
  width: 15,
  height: 40,
  getArea: function () {
    return triAngle.width * triAngle.height / 2;
  }
}
console.log(rectAngle.width);
console.log(triAngle.getArea());

console.log('---------------------');
// 실습 문제 (영단어장 만들기 심화 버전)
myVoca = {
  // 여기에 코드를 작성하세요
  addVoca: function (word, mean) {
    myVoca[word] = mean;
  },
  deleteVoca: function (word) {
    delete myVoca[word];
  },
  printVoca: function (word) {
    console.log(`"${word}"의 뜻은 "${myVoca[word]}"입니다.`);
  },
};

// addVoca메소드 테스트 코드
myVoca.addVoca('parameter', '매개 변수');
myVoca.addVoca('element', '요소');
myVoca.addVoca('property', '속성');
console.log(myVoca);

// deleteVoca메소드 테스트 코드
myVoca.deleteVoca('parameter');
myVoca.deleteVoca('element');
console.log(myVoca);

// printVoca메소드 테스트 코드
myVoca.printVoca('property');

console.log('---------------------');
// for...in
/**
 *  -> for...in 문을 활용하면 객체 내부에 있는 모든 프로퍼티들을 하나씩 다룰 수 있다!
 *  
 * 
 *  for (변수 in 객체) {
 *    동작
 *  }  
 */
codeit = {
  name: '코드잇',
  bornYear: 2017,
  isVeryNice: true,
  worstCourse: null,
  bestCourse: '자바스크립트 프로그래밍 기초'
}
for(let key in codeit){
  console.log(key); // property name
  console.log(codeit[key]); // property value
  console.log('');
}

/**
 *  객체의 프로퍼티 네임의 예외사항과 함께 객체의 정렬 방식
 *  주의 사항
 *  밑에 출력 값을 보면 
 *  우리가 만든 객체 속 키 순서대로 나오지 않는 것을 알 수 있다.
 */

let myObject = {
  '2': '알고리즘의 정석',
  '3': '컴퓨터 개론',
  '1': '자바스크립트 프로그래밍 기초',
};

for (let key in myObject) {
  console.log(myObject[key]);
}

console.log('');
/**
 *  숫자형(양수) 프로퍼티 네임
 * 
 *  실제로 사용될 때는 문자열로 형 변환이 되어 사용된다. 
 *  밑에 typeof key 출력값을 확인해보면 string,문자열이 출력되는 걸 볼 수 있다.
 */
myObject = {
  300: '정수',
  1.2: '소수',
};

for (let key in myObject) {
  console.log(`${key}의 자료형은 ${typeof key}입니다.`);
}

// 그리고 예외적인 파라미터 네임은 접근할 때도 [대괄호표기법]으로만 접근이 가능함
console.log(myObject['300']);
console.log(myObject['1.2']);
// console.log(myObject.300); // Error!
// console.log(myObject.1.2); // Error!

console.log('');
/**
 *  정수형 프로퍼티 네임
 *  객체는 정수형 프로퍼티 네임을 오름차순으로 먼저 정렬하고,
 *  나머지 프로퍼티들은 추가한 순서대로 정렬하는 특징이 있음
 * 
*/
myObject = {
  3: '정수3',
  name: 'codeit',
  1: '정수1',
  birthDay: '2017.5.17',
  2: '정수2',
  };
  
  for (let key in myObject) {
    console.log(key);
    }
    console.log(myObject);
/**
 * 주의사항
    자동으로 정렬되는 특성이 장점처럼 느껴질 수도 있지만
    대부분의 경우에는 의도치 않은 결과를 초래하기도 함 
    -> 일반적으로 정수형 프로퍼티는 잘 사용되지 않음
 */

console.log('');
// 실습 코드 (시험 결과)
// 모범 답안
let hyesoonScore = {
  '데이터 모델링의 이해': 10,
  '데이터 모델과 성능': 8,
  'SQL 기본': 22,
  'SQL 활용': 18,
  'SQL 최적화 기본 원리': 20,
};

let minsoonScore = {
  '데이터 모델링의 이해': 14,
  '데이터 모델과 성능': 8,
  'SQL 기본': 12,
  'SQL 활용': 4,
  'SQL 최적화 기본 원리': 16,
};

function passChecker(scoreObject) {
  // 여기에 코드를 작성해 주세요.
  let totalScore = 0;

  for (let subject in scoreObject) {
    totalScore += scoreObject[subject];
  }
  /**
   * ↓ 내가 쓴 코드(for..in을 활용하면 간결하게 활용할 수 있다. 추상화를 위해 위에 간결한 코드를 공부해라)
   */
  // totalScore = scoreObject['데이터 모델링의 이해'] + scoreObject['데이터 모델과 성능'] 
  // + scoreObject['SQL 기본'] + scoreObject['SQL 활용'] + scoreObject['SQL 최적화 기본 원리'];

  if (totalScore >= 60) {
    console.log('축하합니다! 합격입니다!');
  } else {
    console.log('아쉽지만 불합격입니다..');       
  }
}

passChecker(hyesoonScore);
passChecker(minsoonScore);


console.log('---------------------');
// Date 객체
let myDate = new Date();

console.log(myDate);

// new Date(milliseconds)
myDate = new Date(1000);  // 밀리초로 계산하기가 어려워 '문자열'로 넣는 방법이 있다.

console.log('');
// new Date('YYYY-MM-DD')
let myDate1 = new Date('2017-05-18');

// new Date('YYYY-MM-DDThh:mm:ss')
let myDate2 = new Date('2017-05-18T19:11:16');

console.log(myDate1);
console.log(myDate2);

console.log('');
// new Date(YYYY, MM, DD, hh, mm, ss, ms);
// 연도(YYYY)와 월(MM)은 필수, 뒤에는 생략 가능(1일 0시 0분 0초)
// month의 경우만 0부터 시작하기 때문에 (ex. 4는 5월, 0은 1월)

// Date.getTime()
myDate = new Date(2017, 4, 18, 19, 11, 16);
console.log(myDate.getTime());
/**
 *  getTime()은  myDate객체가
 *  1970년 1월 1일 00:00:00 UTC부터 몇 밀리초가 지났는지
 *  -> 이것을 타임스탬프(timestamp) 라고 부른다.
*/

// 몇 밀리초, 초, 분, 시간이 차이가 나는지 계산 가능
myDate = new Date(2024, 5, 11, 3, 20, 0);
let today = new Date();

let timeDiff = myDate.getTime() - today.getTime();

console.log(timeDiff + '밀리초');
console.log(timeDiff + '초');
console.log(timeDiff / 1000 / 60 + '분');
console.log(timeDiff / 1000 / 60 / 60 + '시간');

console.log(myDate.getFullYear());
console.log(myDate.getMonth()); // 주의) month는 0부터 시작함
console.log(myDate.getDate());  // 주의) Date는 일자를 뜻함
console.log(myDate.getDay());   // 주의) Day는 요일을 나타냄 (일요일부터 0~ 6) ex. 2는 월요일
console.log(myDate.getHours());
console.log(myDate.getMinutes());
console.log(myDate.getSeconds());
console.log(myDate.getMilliseconds());

console.log('');
/**
 *  Date 객체 정보 수정하기
    set으로 시작하는 다양한 메서드를 활용하면, 생성된 Date객체의 정보를 수정할 수도 있습니다.
    (대괄호로 감싸진 요소들은 선택적인 요소입니다.)

    setFullYear(year, [month], [date])
    setMonth(month, [date])
    setDate(date)
    setHours(hour, [min], [sec], [ms])
    setMinutes(min, [sec], [ms])
    setSeconds(sec, [ms])
    setMilliseconds(ms)
    setTime(milliseconds)(1970년 1월 1일 00:00:00 UTC부터 밀리초 이후를 나타내는 날짜를 설정)
 */
myDate = new Date(2017, 4, 18, 19, 11, 16);

myDate.setFullYear(2002);
myDate.setMonth(6);
myDate.setDate(20);

console.log(myDate);

console.log('');
/**
 *  간단하게 시간 정보 알아내기!
 *  toLocaleDateString(), toLocaleTimeString(), toLocaleString() 메소드는 
 *  사용자의 브라우저에 설정된 국가의 표기에 맞춰 날짜와 시간을 보여줍니다.
 */

myDate = new Date();

console.log(myDate.toLocaleDateString()); // myDate가 가진 날짜에 대한 정보 (년. 월. 일)
console.log(myDate.toLocaleTimeString()); // myDate가 가진 시간에 대한 정보 (시:분:초)
console.log(myDate.toLocaleString()); // myDate가 가진 날짜와 시간에 대한 정보 (년. 월. 일 시:분:초)

console.log('');
/**
 *  지금 이 순간..!?
    Date.now() 메소드는 이 메소드가 호출된 시점의 타임스탬프를 반환합니다. 
    이렇게 하면 새로운 객체를 만들지 않아도 바로 현 시점의 날짜 값을 얻어낼 수 있는 것이죠!
    새로운 객체를 만들어서 getTime 메소드를 호출한 값과 일치한다는 사실을 확인할 수 있는데요.
    새로운 객체를 만들지 않는다는 점은 일단 우리 눈에 코드 한 줄을 줄일 수 있다는 이점도 있고, 
    눈에는 드러나지 않지만 코드가 실행될 때 메모리의 부담을 줄여주기도 합니다.
    그래서 특정한 시점이 아니라 단순히 순간순간 그 때 당시 시간 값이 필요한 경우에는 
    Date.now() 메소드를 활용하는 것이 코드의 가독성 뿐만아니라 성능적인 측면에서도 좀 더 유리합니다.
 */
myDate = new Date();

console.log(Date.now() === myDate.getTime()); // true
console.log(Date.now());

console.log('');
/**
 *  Date객체의 형변환
 *  세번째 줄에서 Date 객체의 자료형을 확인해보니 'object', 즉 객체라는 것을 확인할 수 있는데요.
    Date 객체를 boolean 타입으로 변환하면 true가 되고, string 타입으로 변환하면 날짜값이 그대로 문자열로 변환이 됩니다.

    우리가 눈여겨 볼 부분은 number 타입으로 변환할 경우입니다. 
    이 값은 아무 의미없는 단순한 숫자값이 아니라 getTime() 메소드를 활용한 것과 똑같은 수치의 타임스탬프 값 입니다.
    -> Date 객체끼리 바로 사칙 연산도 충분히 가능하다는 뜻
 */
myDate = new Date(2017, 4, 18);

console.log(String(myDate)); // Thu May 18 2017 00:00:00 GMT+0900 (Korean Standard Time)
console.log(Number(myDate)); // 1495033200000
console.log(Boolean(myDate)); // true

console.log(myDate.getTime() === Number(myDate)); // true
console.log(typeof myDate); // object

console.log('');
// 두 Date객체 사이의 시간차이를 어렵지 않게 확인 가능하다.
myDate1 = new Date(2017, 4, 18);
myDate2 = new Date(2017, 4, 19);

timeDiff = myDate2 - myDate1;
console.log(timeDiff); // 86400000 (ms)
console.log(timeDiff / 1000); // 86400 (sec)
console.log(timeDiff / 1000 / 60) // 1440 (min)
console.log(timeDiff / 1000 / 60 / 60) // 24 (hour)
console.log(timeDiff / 1000 / 60 / 60 / 24) // 1 (date)

console.log('');
/**
 *  날짜를 표현하는 문자열
 *  YYYY-MM-DDThh:mm:ss형식 말고도 날짜를 표현하는 다양한 방식의 문자열이 있습니다.
 *  하지만 이런 방식을 사용하다보면 브라우저나, 컴퓨터를 사용하는 위치의 시간대에 따라 
 *  서로 다른 결과 값이 나올 수도 있기 때문에 적어도 IETF 호환 RFC 2822 타임스탬프와 
 *  ISO8601의 한 버전의 형식을 준수하는 문자열로 Date객체를 생성하는 것을 권장드립니다!
 */
let date1 = new Date('12/15/1999 05:25:30');
let date2 = new Date('December 15, 1999 05:25:30');
let date3 = new Date('Dec 15 1999 05:25:30');

console.log(date1, date2, date3); // 다 같음

console.log('');
// 실습 코드 (입사한지 며칠째인지 계산해주는 계산기)
today = new Date(2112, 7, 24);
let jaeSangStart = new Date(2109, 6, 1);

function workDayCalc(startDate) {
	// 여기에 코드를 작성하세요
	let timeDiff = today - startDate; // 모범 답안) let timeDiff = today.getTime() - startDate.getTime();
	let workDate = timeDiff / 1000 / 60 / 60 /24 + 1;

  console.log(`오늘은 입사한 지 ${workDate}일째 되는 날 입니다.`); 
}

workDayCalc(jaeSangStart);

console.log('---------------------');
// 배열 (Array)
/**
 *  각 값들은 요소라고 부르고
 *  이 요소들은 인덱스라는 순서를 가지는 특징
 *  랭킹처럼 순서가 있는 값을 만들 때는 
 *  객체보다 배열을 활용하는 것이 좀 더 간결하고 효율적
 *  배열을 활용하는 예 (해리포터 시리즈, 십이지, 과일 묶음, 세트 메뉴 등)
 */
let courseRanking = [
  '자바스크립트 프로그래밍 기초',   // 요소
  'Git으로 배우는 버전 관리',
  '컴퓨터 개론',
  '파이썬 프로그래밍 기초'
];

// index == PropertyName
// console.log(배열이름[index]);
console.log(courseRanking[0]);
console.log(courseRanking[2]);
console.log(courseRanking[2 + 1]);

console.log('');
// 실습 코드 (for문, while문을 활용한 배열 값 출력)
let dataType = ['Number', 'String', 'Boolean', 'null', 'undefined', 'object'];

for (let i = 0; i < 6; i++) {
  console.log(dataType[i]);
}

console.log('');

i = 0;
while (i < 6) {
  console.log(dataType[i]);
  i++;
}

console.log('');

let members = ['쿤갈래', 'Zerrad66', '우리생각해써',
'흙토끼', 'End Miracle'];

console.log(typeof members);
// 배열을 다루는 방법
console.log(members.length);
console.log(members['length']);
console.log(members[members.length - 1]);

console.log('');
// 배열에 요소를 추가하거나 수정하는 방법
members[5] = 'NiceCodeit';  // 추가
console.log(members[5]);
console.log(members);
members[7] = 'GoodCoding';  // 6번 index 값은 empty item이 된다.
console.log(members[7]);
console.log(members);

members[3] = '달토끼';  // 수정
console.log(members);
delete members[4];  // 4번 index를 빈공간으로 만드는 것
console.log(members);

// 실습 코드 (온도 바꾸기)
let celsiusTemps = [27, 25, 26, 22, 28, 27, 21];
let fahrenheitTemps = [];

for (let i = 0; i < celsiusTemps.length; i++) {       // 배열의 길이를 일일이 셀 필요 없이 배열.length를 사용!!!
  fahrenheitTemps[i] = (celsiusTemps[i] * 9 / 5) + 32;
  }
  
  // fahrenheitTemps 테스트
  console.log(fahrenheitTemps);
  
console.log('');
// 배열의 메소드 (Array's Method)
members = ['쿤갈래', 'Zerrad66', '우리생각해써',
'흙토끼', 'End Miracle'];

console.log(members);

// splice(startIndex, deleteCount, item)
members.splice(4);
console.log(members);
members.splice(1);  // 1번 인덱스 이후로 전부 삭제하는 것을 볼 수 있다.
console.log(members);

members = ['쿤갈래', 'Zerrad66', '우리생각해써',
'흙토끼', 'End Miracle'];
members.splice(1, 1); // 1번 인덱스 이후로 1개의 인덱스만 삭제
console.log(members);
members.splice(1, 1, 'NiceCodeit', 'HiCodeit'); // 인덱스 삭제후 뒤의 item을 삽입(그만큼 배열의 길이는 늘어남)
console.log(members);

members = ['쿤갈래', 'Zerrad66', '우리생각해써',
'흙토끼', 'End Miracle'];
members.splice(1, 0, 'NiceCodeit', 'HiCodeit'); // 0개의 인덱스를 삭제, 즉 삽입만을 하는 경우
console.log(members);

members = ['쿤갈래', 'Zerrad66', '우리생각해써',
'흙토끼', 'End Miracle'];
members.splice(2, 1, 'MaumNo'); // 0개의 인덱스를 삭제, 즉 삽입만을 하는 경우
console.log(members); // 2번 인덱스를 삭제 후 'MaumNo'를 삽입한 경우, 즉 2번 인덱스를 수정한 것

members = ['쿤갈래', 'Zerrad66', '우리생각해써',
'흙토끼', 'End Miracle'];
members.splice(2, 2, 'MaumNo', '산토끼'); // 그러므로 2,3번의 인덱스를 수정한 경우이다.
console.log(members);

console.log('');
// 실습 코드 (splice 연습하기)
let fruits = ['레몬', '토마토', '딸기', '바나나'];
let ages = [20, 24, 25, 29, 30, 33];
let numbers = [];

// fruits 배열에 '토마토'를 삭제하고 그 자리에 '사과', '청포도' 를 추가해 주세요
fruits.splice(1, 1, '사과', '청포도');


// fruits 배열의 첫 번째 요소를 삭제해 주세요
fruits.splice(0, 1);


// ages 배열에 마지막 요소를 삭제해 주세요
ages.splice(ages.length - 1, 1);


// ages 배열의 2번, 3번 인덱스를 26, 28로 변경해 주세요
ages.splice(2, 2, 26, 28);


// numbers 배열에 1, 2, 3, 5, 8, 9를 순서대로 추가해 주세요
numbers.splice(0, 0, 1, 2, 3, 5, 8, 9);


// 반복문을 활용해서 numbers 배열의 요소들 중 홀수를 모두 삭제해 주세요
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 !== 0) {             // 이 부분에서 애 먹음, 
    numbers.splice(i, 1);                 // 삭제함으로써 인덱스 위치가 바뀌는 것을 인지해야 함
    i--;                                  // 해결 방법은 if가 true일 경우, i-- 해줘서 위치가 변경됨을 반응 해야함
  }
}

    
// 테스트 코드
console.log(fruits[1]);
console.log(fruits[0]);
console.log(ages[ages.length - 1]);
console.log(ages[3]);
console.log(numbers[3]);
console.log(numbers);

console.log('');
// 배열의 메소드2 (Array's Method)
members = ['쿤갈래', 'Zerrad66', '우리생각해써',
'흙토끼', 'End Miracle'];
console.log(members);

// 배열의 첫 요소를 삭제: shift()
members.shift();
console.log(members);
// 배열의 마지막 요소를 삭제: pop()
members.pop();
console.log(members);
// 배열의 첫 요소로 값 추가: unshift(value)
members.unshift('NiceCodeit');
console.log(members);
// 배열의 마지막 요소로 값 추가: push(value)
members.push('HiCodeit');
console.log(members);

console.log('');
// 활용 코드
function range(start, count, step) {
  let arr = [];

  for (let i = 0; i < count; i++) {
    arr.push(start + i * step)
  }

  return arr;
}

// 테스트 코드
console.log(range(1, 10, 3));

console.log('');
// splice, shift, pop, unshift, push 말고도 배열에는 다양한 메소드들이 있습니다.
/**
 *  배열에서 특정 값 찾기 (indexOf / lastIndexOf)
 *  배열에서 특정 값을 찾으려면 indexOf 메소드를 사용하면 됩니다.
 *  array.indexOf(item)을 하면 array 배열에 item이 포함되어 있는지 확인할 수 있습니다.
 *  만약 포함되어 있다면, item이 있는 인덱스가 리턴됩니다. 
 *  포함되어 있지 않다면, -1이 리턴됩니다.
 *  여러 번 포함되어 있으면, 처음 발견된 인덱스가 리턴됩니다.
 */
let brands = ['Google', 'Kakao', 'Naver', 'Kakao'];

console.log(brands.indexOf('Kakao'));
console.log(brands.indexOf('Daum'));
/**
 *  그리고 비슷하게 lastIndexOf라는 메소드가 있는데요. 
 *  indexOf와는 반대로 탐색을 뒤에서 부터 하게 됩니다. 
 *  그러니깐 방금과 같은 경우에 'Kakao'를 lastIndexOf 메소드로 찾게 되면 마지막 인덱스가 리턴
 */
console.log(brands.lastIndexOf('Kakao'));
console.log(brands.lastIndexOf('Daum'));

console.log('');
/**
 *  배열에서 특정 값이 있는지 확인하기 (includes)
 *  indexOf/lastIndexOf는 특정 값을 찾아서 해당 값의 index를 알려줍니다.
 *  하지만, 때로는 그냥 그 값이 배열안에 있는지, 그 여부만 확인하고 싶을 수도 있는데요. 
 *  그럴때는 includes 라는 메소드를 활용하면 됩니다.
 *  array.includes(item)을 하게되면 array배열에 item이 있을 경우 true를, 없을 경우 false를 리턴합니다.
 */
console.log(brands.includes('Kakao'));
console.log(brands.includes('Daum'));

console.log('');
/**
 *  배열 뒤집기 (reverse)
 *  reverse라는 메소드를 활용하면, 배열의 순서를 뒤집을 수도 있습니다.
 */
console.log(brands);

brands.reverse();
console.log(brands);
// 이 외 다른 메소드: https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array

console.log('---------------------------------------');
// for...of
let influencer = ['suwonlog', 'small.tiger', 'Minam.ludens', 'cu_convenience24']

for (let i= 0; i < influencer.length; i++) {
  console.log(influencer[i]);
}
/**
 * for...in문과 비슷하다.
 * for (변수 of 배열){
 *  동작부분;
 * }
 */
for (let element of influencer) {
  console.log(element);
}

for (let index in influencer) {   // 요소를 찾아낼 수는 있지만, 특별한 환경에서 배열에 for...in문을 사용하면
console.log(influencer[index]);   // 배열의 메소드나 배열의 length 프로퍼티같은 것들이 할당될 수 있기 때문에
}                                 // 배열에는 사용하지 않을 것을 권장, for...of를 사용 권장

console.log('');
// 실습 코드 (투표 집계하기)
// 투표 결과 리스트
let votes = [
  '이재식', '이재식', '이규하', '이규하', '이규하',
  '이재식', '이재식', '이규하', '이규하', '이재식',
  '이규하', '이규하', '이규하', '이규하', '이재식',
  '이재식', '이규하', '이재식', '이재식', '이재식',
  '이재식', '이재식', '이규하', '이규하', '이규하',
  '이규하', '이규하', '이재식', '이규하', '이규하',
  '이규하', '이규하', '이재식', '이규하', '이규하',
  '이규하', '이재식', '이재식', '이재식', '이규하',
];

// 후보별 득표수 객체
let voteCounter = {};

// votes 배열을 이용해서 voteCounter 객체를 정리하기
for (let name of votes) {
  // 여기에 코드를 작성하세요
  if (name in voteCounter) {
    voteCounter[name]+= 1;
  } else {
    voteCounter[name] = 1;
  }
}

// 후보별 득표수 출력
console.log(voteCounter);
/**
 *  [실습 코드 해설]
 * 
 *  for of문을 이용해서 votes에 있는 후보 이름을 순서대로 name이라는 변수에 지정되면, 
 *  name을 voteCounter 객체에 반영하면 되는데요. 
 *  일단 voteCounter 객체가 처음에는 그냥 빈 객체이기 때문에 고려해야 되는 경우를 
 *  크게 두 가지 경우로 나눠서 생각해야 합니다.
 * 
 *  1. voteCounter[name] 프로퍼티가 없는 경우
 *  2. voteCounter[name] 프로퍼티가 있는 경우 
 *  
 *  참고로 프로퍼티가 존재하는지 여부를 판단할 때는 undefined 값과 일치비교를 할 수도 있지만, 
 *  in 연산자를 통해 확인할 수도 있다고 배웠습니다.
 *  
 *  1번 케이스는 해당 후보가 첫 득표를 한 상황인데요. 그러면 그냥 voteCounter[name] = 1을 하면 되겠죠?
 *  2번 케이스는 해당 후보가 이미 최소 하나의 득표를 한 상황입니다.
 *  이 경우 기존 득표수에 1을 늘려 주면 되는데요. 그러면 voteCounter[name] += 1로 증가시켜주면 됩니다.
 */

console.log('----------------------');
// 다차원 배열 (multidimesional array)
let twoDimensional = [[1, 2], [3, 4]];  // 2차원 배열

console.log(twoDimensional[0][1]);

/**
 *  값들의 의미보다는 값들의 위치나 순서에 초점을 맞춘 경우 다차원 배열 사용
 *  값들의 의미가 중요하다면 배열보다는 프로퍼티를 활용할 수 있는 객체를 만드는게 효과적
 */

let myFridge = [                              // 배열 형태
  ['참외', '토마토', '오이', '양파'],
  ['볶음멸치', '장조림', '김치'],
  ['사이다', '콜라', '물', '쥬스'],
  ['사과', '바나나', '청포토'],
  ['얼음'],
  ['찰떡아이스', '투게더', '메로나']
];

let otherFridge = {                           // 값들이 중요한 객체
  fridge: {
    '채소층': ['참외', '토마토', '오이', '양파'],
    '반찬층': ['볶음멸치', '장조림', '김치'],
    '음료층': ['사이다', '콜라', '물', '쥬스'],
    '과일층': ['사과', '바나나', '청포토'],
  },
  freezer: {
    '얼음층': ['얼음'],
    '아이스크림층': ['찰떡아이스', '투게더', '메로나']
  }
};

let mailbox = [
  [101, 201, 301, 501, 601],
  [102, 202, 302, 502, 602],
  [103, 203, 303, 503, 603],
  [104, 204, 304, 504, 604],
  [105, 205, 305, 505, 605],
];

let chessBoard = [
  ['R', 'N', 'B', 'Q', 'K', 'B', 'N', 'R'],
  ['P', 'P', 'P', 'P', 'P', 'P', 'P', 'P'],
  [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
  ['P', 'P', 'P', 'P', 'P', 'P', 'P', 'P'],
  ['R', 'N', 'B', 'Q', 'K', 'B', 'N', 'R'],
];

// 실습 코드 (팀 나누기)
let groups = [
  ['영준', '캡틴'], 
  ['태순', '우재'],
  ['재훈', '지웅'],
  ['윤형', '동욱'],
  ['규식', '소원'],
];

let teams = [
  [],
  [],
];

/**
 * 내가 작성한 코드, 답은 맞지만 아래 코드가 추상적임
 * for (let i = 0; i < groups.length; i++) {
   teams[0][i] = groups[i][0];
   teams[1][i] = groups[i][1];
}
 */

for(let i = 0; i < groups.length; i++) {
  for(let j = 0; j < groups[i].length; j++) {   // j는 0과 1을 반복하면서 i는 0부터 그룹 길이까지 반복문
    teams[j][i] = groups[i][j];
  }
}

console.log(teams[0]);
console.log(teams[1]);

console.log('--------------------------');
// 숫자 표기법
let millionaire = 1000000000;
let myMillionaire = 1e9; // 지수표기법

console.log(millionaire);
console.log(myMillionaire);
console.log(millionaire === myMillionaire);

console.log('');
console.log(25e5 === 2500000);
console.log(5.3e3 === 5300);
console.log(-6.1e8 === -610000000);

console.log('');
console.log(16e-5 === 0.00016);
console.log(3.5e-3 === 0.0035);
console.log(-9.1e-5 === -0.000091);

// 16진법 (Hexadecimal)
let hex1 = 0xff; // 255
let hex2 = 0xFF; // 255

// 8진법 (Octal)
let octal = 0o377;  // 255

// 2진법 (Binary numeral system)
let binary = 0b11111111;  // 255

console.log('');
console.log(hex1);
console.log(hex2);
console.log(octal);
console.log(binary);

console.log('------------------');
// Number
let myNum = 0.3591;

// toFixed(0 ~ 100)
console.log(myNum.toFixed(3));
console.log(myNum.toFixed(2));
console.log(myNum.toFixed(7));
console.log(typeof myNum.toFixed(7));   // 만약 더하기 연산을 한다면 문자열 연결이 될 수도 있으니 주의바람
console.log(typeof Number(myNum.toFixed(7)));
console.log(Number(myNum.toFixed(7)));  // 문자열로 나왔을 때, 자리를 채우던 0이 사라지고 숫자형이 된다.
console.log(+myNum.toFixed(7));   // 팁! JavaScript에서 어떤 값 앞에 +기호를 넣어주면 Number함수와 똑같은 결과 얻기 가능

console.log('');
// toString(2 ~ 36)
myNum = 255;
console.log(myNum.toString(2));  // 2진법으로 변환
console.log(myNum.toString(8));  // 8진법으로 변환
console.log(myNum.toString(16)); // 16진법으로 변환

console.log(255..toString(2));   // 정수형 옆에 메소드를 사용할 때, 점 하나는 소수점으로 인식하기 때문에 꼭 점 2개를 사용해야함
console.log((255).toString(2));

// 연습 문제
Number((4 * 30 + 3).toString(10));  // 내부만 작석하면 문자열 '123' 이겠지만, Number함수를 통해 숫자형으로 형 변환
(123.456).toFixed(0);               // 문자열 '123'이다. (toFixed, toString은 결괏값이 문자열로 리턴)
1.23e2;                             // 숫자열 123

0x7b.toString(10) * 1;
/**
 *  0x7b는 숫자 123을 16진수로 표현한 코드입니다.
 *  toString 메소드로 10진법으로 표기를 바꿨는데, 그 뒤에 1을 곱해주고 있죠? 
 *  toString 메소드의 결과로 문자열 '123' 되었지만 바로 뒤에 1을 곱해주면서 
 *  문자열 '123'이 숫자 123으로 형 변환이 되어 계산됩니다. 
 *  결과적으로 이 코드는 숫자 123을 표현하는 코드가 됩니다.
 */

console.log('------------------------');
/**
 *  Date객체처럼 자바스크립트의 내장 객체 중 
 *  다양한 연산들을 유용하게 사용하기 위해 Math라는 객체가 있습니다.
 * 
 *  이번 노트에서는 Math객체의 다양한 메소드에 대해 살펴봅시다.
 */

/**
 *  절댓값 (Absolute Number)
 *  Math.abs(x)를 하면 x의 절댓값이 리턴됩니다.
 */
console.log(Math.abs(-10));
console.log(Math.abs(10));

console.log('');
/**
 *  최댓값 (Maximum)
 *  Math.max 함수에 파라미터로 여러 수를 넘겨주면, 그중 가장 큰 값이 리턴됩니다.
*/
console.log(Math.max(2, -1, 4, 5, 0));

console.log('');
/**
 *  최솟값 (Minimum)
 *  Math.min 함수에 파라미터로 여러 수를 넘겨주면, 그중 가장 작은 값이 리턴됩니다.
*/
console.log(Math.min(2, -1, 4, 5, 0));

console.log('');
/**
 *  거듭제곱 (Exponentiation)
 *  자바스크립트에서 Math.pow(x, y)를 하면 x의 y승의 결괏값이 리턴됩니다.
 */
console.log(Math.pow(2, 3));
console.log(Math.pow(5, 2));

console.log('');
/**
 *  제곱근 (Square Root)
 *  Math.sqrt(x)를 하면 x의 제곱근이 리턴됩니다.
*/
console.log(Math.sqrt(25));
console.log(Math.sqrt(49));

console.log('');
/**
 *  반올림 (Round)
 *  Math.round(x)를 하면 x의 반올림된 값이 리턴됩니다. 
 *  소수점 부분이 0.5 이상이면 가장 가까운 정숫값으로 올라가고, 
 *  소수점 부분이 0.5 미만이면 가장 가까운 정숫값으로 내려갑니다.
*/
console.log(Math.round(2.3));
console.log(Math.round(2.4));
console.log(Math.round(2.49));
console.log(Math.round(2.5));
console.log(Math.round(2.6));

console.log('');
/**
 *  버림과 올림 (Floor and Ceil)
 *  Math.floor(x)을 하면 x의 버림 값이, Math.ceil(x)을 하면 x의 올림 값이 리턴됩니다. 
 *  이 경우, 소수 부분이 얼마 인지와는 상관이 없습니다.
*/
console.log(Math.floor(2.4));
console.log(Math.floor(2.49));
console.log(Math.floor(2.8));
console.log('-');
console.log(Math.ceil(2.4));
console.log(Math.ceil(2.49));
console.log(Math.ceil(2.8));

console.log('');
/**
 *  난수 (Random)
 *  Math.random을 하면 0 이상 1 미만의 값이 랜덤으로 리턴됩니다.
 */
console.log(Math.random());
console.log(Math.random());
console.log(Math.random());
console.log(Math.random());

/**
 *  이뿐만 아니라 '삼각 함수 계산'이나 '로그'같은 더 깊은 수학 계산도 가능합니다. 
 *  더 깊게 알아보고 싶다면 
 *  https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Math를 참고해보세요!
 */

console.log('-------------------------');
// 바보 자바스크립트
sum = 0.1 + 0.2;

console.log(sum);
console.log(sum.toFixed(1));    // 이것은 문자열이기 때문에 숫자형으로 형 변환해야한다.
// 해결 방안
console.log(+sum.toFixed(1));   // 숫자형
console.log(Number(sum.toFixed(1)));   // 숫자형
console.log(Math.round(sum * 10) / 10);

console.log('');
// 실습 코드 (이자 계산기)
function interestCalculator(rate, payment, term) {
  let interest = +(payment * term * (term + 1) / 2 * rate / 12).toFixed();
  console.log(interest);
}

// 이율이 4.3%일 때 매월 80만원씩 24개월 납입할 경우
interestCalculator(0.043, 800000, 24);

// 이율이 4.3%일 때 매월 60만원씩 24개월 납입할 경우
interestCalculator(0.043, 600000, 24);

console.log('--------------------------------');
// String
let myString = 'Hi Codeit';

// 부분 문자열 접근 slice(start, end) -> end index 한칸 전까지 출력한다.
console.log(myString.slice(0, 3));
console.log(myString.slice(3)); // start 부터 끝까지
console.log(myString.slice());  // 파라미터가 없는 경우, 전체 문장 출력

// 양 끝 공백 제거
console.log(myString.trim()); // trim 메소드

// 대소문자 변환
console.log(myString.toUpperCase());  // 대문자
console.log(myString.toLowerCase());  // 소문자

// 요소 탐색
console.log(myString.indexOf('i')); // 앞 부터
console.log(myString.indexOf('ode')); // 앞 부터
console.log(myString.lastIndexOf('i'))  // 뒤 부터
console.log(myString.indexOf('a')); // 존재하지 않는 것은 -1

// 요소 접근
console.log(myString[3]); // 대괄호 표기법
console.log(myString.charAt(3));  // charAt 메소드

// 문자열 길이
console.log(myString.length); // length 프로퍼티

console.log('');
/**
 *  문자열도 생각해보면 '문자' + '열'이기 때문에 배열과 비슷한 부분들이 많습니다.
 *  
 *  실제로 지난 시간에 배열과 문자열 모두 length프로퍼티를 가지고 있고, 대괄호 표기법으로 각 요소에 접근할 수 있다거나.
 *  꽤 많은 메소드들이 배열과 문자열 모두 동일하게 사용되는 것도 확인할 수 있었는데요. 
 *  심지어 지난 시간에 다루진 못했지만 배열을 다룰 때 유용한 for..of문을 문자열에 활용할 수도 있습니다.
 */

let myString1 = 'Codeit';

for (let str of myString1) {
  console.log(str);
}

console.log('');
// 다른 점
let mString = 'Codeit';
let mArray = ['C', 'o', 'd', 'e', 'i', 't'];

console.log(typeof mString);  // string
console.log(typeof mArray);   // object
console.log('');
console.log(mString === mArray);  // false
console.log(mString == mArray);   // false, 느슨하게 비교하는 동등 비교에서도 false가 출력된다.

console.log('');
/**
 *  mutable vs. immutable
 *  가장 중요한 차이는 배열은 'mutable(바뀔 수 있는)' 자료형인 반면 
 *  문자열은 'immutable(바뀔 수 없는)' 자료형이라는 것입니다.
 * 
 *  배열은 요소에 접근해서 할당연산자를 통해 요소를 수정할 수 있었죠?
 *  문자열은 한 번 할당된 값을 수정할 수 없습니다. 다르게 표현해서, 
 *  변수에 할당된 문자열을 바꾸고 싶다면, 일부를 바꾸는 게 아니라 새로운 문자열을 지정해주어야 한다는 것이죠.
 */

// 배열은 mutable
let myArray1 = ['C', 'o', 'd', 'e', 'i', 't'];
myArray1[0] = 'B';
console.log(myArray1);

// 문자열은 immutable
let myString2 = 'Codeit';
myString[0] = 'B';
console.log(myString2);

// 실습 문제 (노래 가사 자르기)
let lyrics = "[재석]너에게 나 하고 싶었던 말 고마워 미안해 함께 있어서 할 수 있어서 웃을 수 있어[준하] 정말 고마웠어 내 손을 놓지 않아줘서 힘을 내볼게 함께 있다면 두렵지 않아[홍철] 내가 늘 웃으니까 내가 우습나 봐 하지만 웃을 거야 날 보고 웃는 너 좋아[명수] 자꾸만 도망치고 싶은데 저 화려한 큰 무대 위에 설 수 있을까? 자신 없어..[하하] 지금까지 걸어온 이 길을 의심하지는 마 잘못 든 길이 때론 지도를 만들었잖아[형돈] 혼자 걷는 이 길이 막막하겠지만 느리게 걷는 거야 천천히 도착해도 돼[길] 술 한 잔 하자는 친구의 말도 의미 없는 인사처럼 슬프게 들릴 때 날 찾아와";

let hyungdon = null;

// 여기에 코드를 작성하세요
let startIndex = lyrics.indexOf('[형돈]');
let endIndex = lyrics.indexOf('[길]');

hyungdon = lyrics.slice(startIndex, endIndex);

// 테스트 코드
console.log(hyungdon);

console.log('------------------------------');
 // 기본형(number, string, boolean, null, undefined)과 참조형(object)
 let a = 3;
 let b = a;

 console.log(a);
 console.log(b);
 b = 5;
 console.log(a);
 console.log(b);
 
 console.log('');

 let c = {name: 'Codeit'};
 let d = c;

 console.log(c);
 console.log(d);
 d.birth = 2017;
 console.log(c);
 console.log(d);
 /**
  *  기본형과 다르게 참조형, 즉 객체에서는
  *  할당하는 것이 아니라 객체의 주소값을 참조해서
  *  접근하는 것이기 때문에, c에도 길이 열린 개념이라
  *  c도 d와 같이 수정된다.
  */
 // 배열도 결국 마찬가지이다. 
 // 중요한 것은 참조형은 수정하면 할당된 변수에서도 수정된다.
 console.log('');
 let e = [1, 2, 3];
 let f = e;

 console.log(e);
 console.log(f);
 f[2] = 4;
 console.log(e);
 console.log(f);

 console.log('');
 // 연습 문제 (기본형 참조형)
 x = {
  numbers: [1, 2, 3, 4],
  title: 'Codeit',
};
y = x.numbers;
z = x.title;
 
x.numbers.unshift(5);
x.title = 'Hello';    // 기본형이라 이미 Codeit 복사되어 있다.

console.log(y);
console.log(z);

console.log('');
// 참조형 복사하기 (Reference Type Copy)
let number1 = [1, 2, 3];
let number2 = number1.slice();

number2.push(4);

console.log(number1);
console.log(number2);

// 실습 코드 (레시피 만들기)
// 아래 코드중 잘못된 부분을 수정해 주세요
let espresso = ['espresso'];

let americano = espresso.slice();
americano.push('water');

let caffeLatte = espresso.slice();
caffeLatte.push('milk');

// 여기에 caffeMocha와 vanillaLatte 레시피를 만들어 주세요
let caffeMocha = caffeLatte.slice();
caffeMocha.push('chocolateSyrup');

let vanillaLatte = caffeLatte.slice();
vanillaLatte.push('vanillaSyrup');

// 테스트 코드
console.log(espresso);
console.log(americano);
console.log(caffeLatte);
console.log(caffeMocha);
console.log(vanillaLatte);

console.log('');
// 3) 제일 깔끔 2번을 함수로 만들어서 위로 올림
// 하지만 3번 방법의 주의사항 course에 또 배열이 추가되어
// 다중 배열이 된다면, 다른 방법을 사용해야함
function cloneObject(object){
  let temp = {};

  for (let key in object) {
    temp[key] = object[key];
  }

  return temp;
}

let course1 = {
  title: '파이썬 프로그래밍 기초',
  language: 'Python'
};
// 1)
// let course2 = Object.assign({}, course1);

// 2) 너무 course1, 2에만  한정적임 course3, 4 생기면 또 for문을 만들어야함
// let course2 = {};
// for (let key in course1){
//   course2[key] = course1[key];
// }

let course2 = cloneObject(course1);   // 3번 방법
// let course3 = cloneObject(course2);   // course3이 생기면 이렇게 쉽게 대처 가능

course2.title = '자료 구조';

console.log(course1);
console.log(course2);

console.log('------------------------------------------------');
// const, 변수와 상수 사이
let q = 1;
console.log(q);
q = 2;
console.log(q);

const w = 3;
console.log(w);
// w = 4;            -> 오류 발생 
// console.log(w);

/**
 *  변하지 않는 코드가 좋아보여
 *  const를 사용하게된 계기이다.
 * 
 *  변수 vs 상수
 *  변수: myName
 *  상수: MY_NAME
 * 
 *  객체는 변수의 주소값이 저장된다.
 *  const로 정의한다해도 문제가 없다.
 * 
*/

console.log('------------------------------------------------');

/**
 *  자바스크립트에는 variable의 약자를 따서 var라는 키워드로 변수를 선언할 때가 있었습니다.
 *  자바스크립트에 변수를 선언하는 방식은 처음부터 let과 const가 아니였던 것이죠!
 *  그래서 오래된 프로젝트들이나 혹은 자바스크립트의 정보들을 정리해둔 
 *  조금 오랜 시간이 지난 블로그들을 살펴보면 심심찮게 var라는 키워드를 만나볼 수가 있는데요.
 *  이제는 거의 사용되지 않는 var 변수, 그래도 언제 어떻게 만나게 될지 모르니 조금만 살펴봅시다. 
 *  어떤 문제가 있길래 사용되지 않는지, 가볍게라도 알고 있는 게 좋겠죠?
 */
/**
 * 변수 선언
 *  일단 아래 코드 처럼 var 변수는 let 이나 const 처럼 
 *  똑같이 키워드 다음에 변수이름을 써서 선언할 수 있고,   
 */
var myVariable;

myVariable = 'codeit';

// 혹은 키워드와 변수이름, 그리고 할당연산자와 값으로 선언과 동시에 값을 할당해 줄 수도 있습니다.
var myVariable = 'codeit';

/**
 * 중복 선언 허용
 *  var 키워드로 선언한 변수의 첫 번째 문제는, let과 const와는 다르게 중복 선언이 가능하다는 겁니다.
 *  똑같은 이름으로 변수를 한 번 더 선언하게 되면, 에러가 발생하는 것이 아니라 그냥 기존의 변수를 덮어써 버리는 것이죠. 
 *  let키워드로 선언한 변수에 값을 재할당하는 것과는 엄연히 다릅니다.
 *  
 *  !주의사항!
 *  이렇게 변수가 중복선언이 되면, 길고 복잡한 코드를 작성할 때 실수를 할 가능성이 커지고, 
 *  상황에 따라서는 치명적인 오류가 발생할 수 있습니다.
 */
var myVariable = 'codeit';
console.log(myVariable);
var myVariable = 'Codeit!';
console.log(myVariable);

/**
 * 함수 스코프
 *  var 키워드 변수가 사라진 두 번째 문제는 Scope의 문제입니다. 
 *  let과 const 키워드로 선언한 변수는 if, for, function 등등 어떤 키워드와 관계없이 코드 블록,
 *  즉 {} 중괄호로 감싸진 부분을 기준으로 scope를 갖게 되지만, 
 *  var 키워드로 선언한 변수는 scope가 function에서만 구분되어 있습니다.
 */
// {
//   let x = 3;
// }

// function myFunction() {
//   let y = 4;
// }

// console.log(x);
// console.log(y);

// let이나 const 키워드의 경우에는 중괄호로 감싸진 경우라면 모두 중괄호 밖에서는 지역 변수에 접근할 수 없습니다.
// {
//   var x = 3;
// }

// function myFunction() {
//   var y = 4;
// }

// console.log(x);
// console.log(y);
/**
 *  하지만 var 변수는 지역변수의 구분이 함수에만 있기 때문에 
 *  if, for, while, switch 등 다양한 상황에서 선언한 변수가 자칫, 전역변수의 역할을 하게 될 수도 있는 것이죠.
 *  참고로 이렇게 함수를 기준으로만 적용되는 스코프를 함수 스코프, 코드 블록을 기준으로 
 *  적용되는 스코프를 블록 스코프라는 용어를 사용한다는 점도 참고해 주세요!
 */

// 끌어올림 (Hoisting)
// console.log(myVariable);
// let myVariable;
/**
 *  let과 const로 선언한 변수는 선언되기 이전에 사용될 수 없습니다. 
 *  하지만, var 변수는 함수 스코프를 기준으로 선언되기 이전에도 변수에 접근이 가능한데요.
 */
console.log(myVariable);
var myVariable;
// 변수의 선언이 끌려 올라가서 마치, 2번째 줄과 첫 번째 줄이 바뀐 것처럼 동작하는 데요.

var myVariable;
console.log(myVariable);
/**
 *  이렇게 변수가 끌어올려 지는 현상을 '호이스팅(hoisting)'이라고 부른다는 점도 기억해 두시면 좋을 것 같아요 !
 *  다행히 호이스팅은 선언과 동시에 값을 할당하더라도, 
 *  선언문만 올려지기 때문에 값은 그대로 두 번째 줄에 남아있는 데요.
 */

console.log(myVariable);
var myVariable = 2;
console.log(myVariable);
// 하지만 이런 식으로 동작하는 방식은 코드의 흐름을 방해하기에 충분해 보이죠? 
// 한 가지 주의해야 될 부분은, 함수를 선언할 때도 이 호이스팅이 적용됩니다.

sayHi();

function sayHi() {
  console.log('hi');
  }
  /**
   * 당연한 듯 함수가 잘 실행되는 모습을 확인할 수 있습니다.
   *  이런 현상은 함수를 한 번 선언하고 나면 어디서든 유연하게 사용할 수 있다는 장점이 있지만, 
   *  코드의 흐름에는 부정적인 영향을 끼칠 수 있습니다. 그래서 함수를 선언할 때는 가급적 코드 윗부분에 선언하거나, 
   *  호출을 항상 아래쪽에서 한다거나 나름대로 규칙을 세워서 코드를 작성하시기를 권장드립니다.
   *  자, 지금까지 오래된 자바스크립트에서 변수를 만들 때 사용했던 var 키워드에 대해서 살펴봤는데요.
   *  요즘은 잘 사용되지 않지만, 그래도 자바스크립트의 상식적인 측면에서 가볍게 이해하고 계시면 좋을 것 같습니다!
  */
 
 
 console.log('-----------------------------------------------------------------');
 // 과제로 복습하기 (3문제)
 /**
  * 실습 설명 (1번 문제)
 중학교 때 배운 '계승(팩토리얼)' 기억하시나요?
 
1부터 어떤 양의 정수 n까지의 정수를 모두 곱한 것을 말하며 n!로 나타낸다.

팩토리얼은 아래와 같이 계산합니다. 0!은 1이라는 점도 기억해주세요.


0! = 1
1! = 1
2! = 1 * 2 = 2
3! = 1 * 2 * 3 = 6
4! = 1 * 2 * 3 * 4 = 24
5! = 1 * 2 * 3 * 4 * 5 = 120
6! = 1 * 2 * 3 * 4 * 5 * 6 = 720
그러면, 파라미터로 양의 정수 n을 받고 n!을 계산해서 리턴해 주는 함수 factorial을 작성해 주세요.

실습 결과
코드를 잘 작성하셨다면 다음과 같은 결과가 출력되어야 합니다.

479001600
720
6
1
 */

/** <해설 (1번 문제)>
 * STEP 1: 0!
우선 결괏값이 0!의 값인 1로 초기화되어 있습니다.


let result = 1;
STEP 2: n! (1 이상에 대해)
n이 1 이상인 경우에는 반복문을 사용해서 팩토리얼을 계산해 줍니다.

처음부터 생각해 보면, n이 1 이상이니까, 조건문을 통해서 다음과 같이 작성해 줄 수 있습니다.


function factorial(n) {
  let result = 1;

  if (n > 0) {
    for (let i = 1; i <= n; i++) {
      result = result * i;
    }
  }

  return result;
}
하지만 조금만 더 생각해 보면, 사실 굳이 if문이 없어도 for문의 조건 부분에 의해서 동일하게 동작한다는 걸 알 수 있습니다.
 */

console.log('-----------------------------------------------------------------');
/**
 * 실습 설명 (2번 문제)
현태는 현명하게 거스름돈을 계산해 주는 프로그램을 만들려고 합니다. 예를 들어 33,000원짜리 물건을 사기 위해 100,000원을 냈다면,

50,000원 1장
10,000원 1장
5,000원 1장
1,000원 2장
이런 식으로 '가장 적은 수'의 지폐를 거슬러 주는 것입니다. 방금 같은 경우에는 총 5장을 거슬러 준 거죠.

우리는 calculateChange라는 함수를 작성하려고 하는데요. 이 함수는 지불한 금액을 나타내는 payment와 물건의 가격을 나타내는 cost를 파라미터로 받습니다.

주어진 코드에 이어서 깔끔하게 프로그램을 작성해 보세요.

실습 결과
함수 모두 작성하고 프로그램을 실행하면 아래와 같은 결괏값이 콘솔에 출력되어야 합니다.


50000원 지폐: 1장
10000원 지폐: 1장
5000원 지폐: 1장
1000원 지폐: 2장

50000원 지폐: 2장
10000원 지폐: 2장
5000원 지폐: 0장
1000원 지폐: 2장
 */

/**
 * 해설 (2번 문제)
예시를 통해 아이디어를 얻어 봅시다. 33,000원 하는 물건을 사는데 100,000원을 받았다고 가정할게요.

그러면 67,000원을 거슬러 줘야 하는데, 어떻게 해야 최소 지폐 개수로 거슬러 줄 수 있을까요?

조금만 생각을 해보면 금방 알아낼 수 있을 텐데요. 가장 큰 지폐부터 넣어 보면 됩니다. 그러니까 처음에는 50,000원 지폐 몇 장을 거슬러 줄 수 있는지 보는 거죠. 50,000원 지폐로 거슬러 주는 것이 다른 작은 지폐로 거슬러 주는 것보다 무조건 좋기 때문에, 50,000원 지폐부터 보는 것입니다. 67,000원에는 50,000원이 한 번만 들어가기 때문에, 67,000원에서 50,000원을 빼서 17,000원이 남습니다.

그다음으로 큰 10,000원 지폐를 봅시다. 17,000원에 10,000원이 몇 번 들어가나요? 한 번 들어가죠? 그러면 17,000원에서 10,000원을 빼서 7,000원이 남습니다.

그다음으로 큰 5,000원 지폐를 봅시다. 7,000원에 5,000원이 몇 번 들어가나요? 한 번 들어가죠? 그러면 7,000원에서 5,000원을 빼서 2,000원이 남습니다.

마지막으로 1,000 지폐를 봅시다. 2,000원에 1,000원이 몇 번 들어가나요? 두 번 들어갑니다.

결론적으로, 거스름돈은 아래와 같습니다.

50,000원 1장
10,000원 1장
5,000원 1장
1,000원 2장
이제 우리가 생각한 걸 코드로 옮겨 봅시다.

거스름돈 총액
우리가 거슬러 줘야 하는 총액은 얼마인가요? 받은 돈에서 물건 가격을 빼면 되겠죠?


change = payment - cost;  // 거스름돈 총액
몇 장을 거슬러 줘야 할까?
67,000원을 거슬러 줘야 하면, 50,000원 지폐는 몇 장 주면 될까요? 67,000원에 50,000원이 몇 번 들어가는지 확인하면 되죠?

천천히 생각해보면, 거스름돈에서, 50000으로 나눠떨어지지 않는 나머지를 뺀 다음, 다시 50000을 나눠주면 거스름돈을 지폐 금액만큼 나눠준 개수를 얻을 수 있습니다.


(change - (change % 50000)) / 50000;  // 50000원 지폐 개수
혹은 Math객체의 floor 메소드를 이용하면 좀 더 간단하게 구할 수 있는데요.

floor 메소드는 주어진 숫자와 같거나 작은 정수 중에서 가장 큰 수를 반환하기 때문에, 버림 나눗셈과 같은 결과를 얻을 수 있습니다.


Math.floor(change / 50000); // 50000원 지폐 개수
거슬러 주고 얼마가 남았을까?
67,000원에서 50,000원으로 최대한 거슬러 주고 남은 금액은 17,000원입니다.

다음 지폐 개수를 계산할 때 새롭게 계산할 수도 있겠지만, 거슬러 주고 남은 값을 바로 계산해서 change에 할당해주면, 좀 더 수월하게 다음 지폐 개수를 계산할 수 있겠죠?


change = change - 50000 * fiftyCount;  // 50,000원 지폐로 거슬러 주고 남은 금액
모범 답안 1

function calculateChange(payment, cost) {
  // 여기에 코드를 작성하세요
  let change = payment - cost; // 거스름돈 총액

  const fiftyCount = (change - (change % 50000)) / 50000;
  change = change - 50000 * fiftyCount;

  const tenCount = (change - (change % 10000)) / 10000;
  change = change - 10000 * tenCount;

  const fiveCount = (change - (change % 5000)) / 5000;
  change = change - 5000 * fiveCount;

  const oneCount = (change - (change % 1000)) / 1000;
  change = change - 1000 * oneCount;

  console.log(`50000원 지폐: ${fiftyCount}장`);
  console.log(`10000원 지폐: ${tenCount}장`);
  console.log(`5000원 지폐: ${fiveCount}장`);
  console.log(`1000원 지폐: ${oneCount}장`);
}

// 테스트 코드
calculateChange(100000, 33000);
console.log('');
calculateChange(500000, 378000);
floor 메소드를 활용한다면, 아래 코드와 같습니다.


function calculateChange(payment, cost) {
  // 여기에 코드를 작성하세요
  let change = payment - cost; // 거스름돈 총액

  const fiftyCount = Math.floor(change / 50000);
  change = change - 50000 * fiftyCount;

  const tenCount = Math.floor(change / 10000);
  change = change - 10000 * tenCount;

  const fiveCount = Math.floor(change / 5000);
  change = change - 5000 * fiveCount;

  const oneCount = Math.floor(change / 1000);
  change = change - 1000 * oneCount;

  console.log(`50000원 지폐: ${fiftyCount}장`);
  console.log(`10000원 지폐: ${tenCount}장`);
  console.log(`5000원 지폐: ${fiveCount}장`);
  console.log(`1000원 지폐: ${oneCount}장`);
}

// 테스트 코드
calculateChange(100000, 33000);
console.log('');
calculateChange(500000, 378000);
모범 답안 2
자, 그런데 코드를 다시 보면 지폐 개수를 셀 때 지폐 단위를 제외하면, 똑같이 반복된 부분들이 보이는데요.

심지어 지폐 단위 숫자도 똑같이 세 번, floor메소드를 쓰더라도 두 번은 반복되고 있습니다.

코드를 작성할 때 실수로 어느 한 곳에서 오타를 낼 수도 있고, 혹은 다 작성했는데 전체적으로 코드의 동작을 수정해야 할 수도 있기 때문에, 이렇게 똑같이 반복적으로 똑같이 동작해야 하는 코드들은 실제로 매번 반복해서 작성하는 것보다는 함수나 반복문을 통해 최대한 반복을 줄일 방법을 찾는 것이 좋습니다.

그래서 상황에 따라 변해야 하는 부분(지폐 단위)은 파라미터를 활용하고, 똑같이 반복되는 패턴을 추려서 동작 부분을 채운 함수를 작성해 보면 다음과 같이 작성할 수 있습니다.


function calculateChange(payment, cost) {
  // 여기에 코드를 작성하세요
  let change = payment - cost; // 거스름돈 총액

  function billCounting(amount) {
    const count = (change - (change % amount)) / amount;
    change = change - amount * count;
    return count;
  }

  const fiftyCount = billCounting(50000);
  const tenCount = billCounting(10000);
  const fiveCount = billCounting(5000);
  const oneCount = billCounting(1000);

  console.log(`50000원 지폐: ${fiftyCount}장`);
  console.log(`10000원 지폐: ${tenCount}장`);
  console.log(`5000원 지폐: ${fiveCount}장`);
  console.log(`1000원 지폐: ${oneCount}장`);
}

calculateChange(100000, 33000);
console.log('');
calculateChange(500000, 378000);
뭔가 조금 더 코드가 정리되어 보이죠?

만약 처음에 코드를 이렇게 작성했는데, floor 메소드를 활용하는 게 좀 더 좋을 것 같다는 판단으로 코드를 수정해야 될 상황이라고 가정해 봅시다.

모범 답안과 같은 상황에서는 코드 4줄을 고쳤어야 했는데, 이렇게 함수로 작성해 두면, 함수 내부의 동작 부분에서 딱 한 줄만 고치면 됩니다.


function calculateChange(payment, cost) {
  // 여기에 코드를 작성하세요
  let change = payment - cost; // 거스름돈 총액

  function billCounting(amount) {
    const count = Math.floor(change / amount);
    change = change - amount * count;
    return count;
  }

  const fiftyCount = billCounting(50000);
  const tenCount = billCounting(10000);
  const fiveCount = billCounting(5000);
  const oneCount = billCounting(1000);

  console.log(`50000원 지폐: ${fiftyCount}장`);
  console.log(`10000원 지폐: ${tenCount}장`);
  console.log(`5000원 지폐: ${fiveCount}장`);
  console.log(`1000원 지폐: ${oneCount}장`);
}

calculateChange(100000, 33000);
console.log('');
calculateChange(500000, 378000);
이렇게 하니 모범 답안 1보다 상대적으로 코드를 유지 보수하기가 더 편리하죠?
 */

// 또 다른 2번 문제 해설
// function calculateChange(payment, cost) {
//   // 여기에 코드를 작성하세요
//  let money = payment - cost;
//  function bild(amount){
//   const count = Math.floor(money/amount);
//   money = money - count * amount;
//   console.log(`${amount}원 지폐: ${count}장`);
//  }
//  bild(50000);
//  bild(10000);
//  bild(5000);
//  bild(1000);
// }

// // 테스트 코드
// calculateChange(100000, 33000);
// console.log('');
// calculateChange(500000, 378000);

console.log('-----------------------------------------------------------------');
/**
실습 설명
"토마토"나 "기러기"처럼 거꾸로 읽어도 똑같은 단어를 '팰린드롬(palindrome)'이라고 부릅니다.

팰린드롬 여부를 확인하는 함수 isPalindrome을 작성하려고 하는데요. 
isPalindrome은 파라미터 word가 팰린드롬이면 true를 리턴하고 팰린드롬이 아니면 false를 리턴합니다.

예를 들어서 "racecar"과 "토마토"는 거꾸로 읽어도 똑같기 때문에 true가 출력되어야 합니다. 
그리고 "hello"는 거꾸로 읽으면 "olleh"가 되기 때문에 false가 나와야 하는 거죠.

실습 결과
코드를 잘 작성하셨다면, 다음과 같은 결과가 출력되어야 합니다.

true
false
true
true
false
true
*/

/**
 * 해설
문자열의 첫 번째 원소와 마지막 원소를 비교해서 일치하는지 확인해야 합니다. 그다음 문자열의 두 번째 원소와 끝에서 두 번째 원소를 비교해서 일치하는지 확인해야겠죠.

문자열 word의 첫 번째 원소의 인덱스는 0이고, 마지막 원소의 인덱스는 word.length - 1입니다. 문자열 word의 두 번째 원소의 인덱스는 1이고, 끝에서 두 번째 원소의 인덱스는 word.length - 2입니다.

이걸 어떻게 일반화할 수 있을까요?

인덱스 i에 있는 값과 인덱스 word.length - 1 - i에 있는 값을 비교하면 됩니다.

참고로 i를 0부터 word.length - 1까지 반복할 필요는 없습니다. 어차피 반대쪽과 비교하는 것이기 때문에 i를 Math.floor(word.length / 2)까지만 반복해도 이미 모든 확인은 끝나는 거죠.

모범 답안

function isPalindrome(word) {
  // 여기에 코드를 작성하세요
  for (let i = 0; i < Math.floor(word.length / 2); i++) {
    let left = word[i];
    let right = word[word.length - 1 - i];
    if (left !== right) {
      return false;
    }
  }
  return true;
}

// 테스트 코드
console.log(isPalindrome("racecar"));
console.log(isPalindrome("stars"));
console.log(isPalindrome("기러기"));
console.log(isPalindrome("123321"));
console.log(isPalindrome("hello"));
console.log(isPalindrome("kayak"));
 */

/**
 * function isPalindrome(word) {
  // 여기에 코드를 작성하세요
  return word === word.split('').reverse().join('');
  // split('') 메소드는 문자열을 배열로 만드는 작업이다.
  // reverse() 메소드는 배열을 뒤집는 작업
  // join('') 메소드는 다시 문자열로 변환하는 작업
}

// 테스트 코드
console.log(isPalindrome("racecar"));
console.log(isPalindrome("stars"));
console.log(isPalindrome("기러기"));
console.log(isPalindrome("123321"));
console.log(isPalindrome("hello"));
console.log(isPalindrome("kayak"));
 */