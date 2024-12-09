# Basic React

## React 시작
- create-react-app으로 리액트 프로젝트 생성
  - npm init react-app <폴더 이름>
  - 폴더를 VS code로 열고 터미널에서 `npm init react-app .`

- 개발 모드 실행
  - `npm run start`

- 개발 모드 종료
  - `Ctrl + c`

## ✨ JSX
### JSX란?
JSX는 자바스크립트의 확장 문법, 리액트로 코드를 작성할 떄 HTML 문법과 비슷한 이 JSX 문법을 활용하면 훨씬 더 편리하게 화면에 나타낼 코드를 작성할 수가 있게 됩니다.

```JS
import ReactDOM from 'react-dom/client';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<h1>안녕 리액트!</h1>);
```

### JSX 문법
JSX는 자바스크립트로 HTML과 같은 문법을 사용할 수 있도록 만들어주는 편리한 문법이지만, 그만큼 꼭 지켜야 할 규칙들도 있습니다.

- HTML과 다른 속성명
1. **속성명은 camelCase로 작성하기!**         
  JSX 문법에서도 태그에 속성을 지정해 줄 수 있습니다. 단, 여러 단어가 조합된 몇몇 속성들을 사용할 때는 반드시 카멜 케이스(Camel Case)로 작성해야 합니다.    
  여러 단어가 조합된 HTML 송성들이 많진 않지만, 예를 들면 `onclick`, `onblur`, `onfocus` 등과 같은 이벤트 속성이나, `tabindex` 같은 속성들이 있습니다.   
  이런 속성들은 모두 `onClick`, `omBlur`, `onFocus`, `onMouseDown`, `onMouseOver`, `tabIndex` 처럼 작성하는 것이죠!
  ```js
  import ReactDOM from 'react-dom';

  ReactDOM.render(
    <button onClick= ... >클릭!</button>,
    document.getElementById('root')
  );
  ```
  ```js
  // 단, 예외적으로 HTML에서 비표준 속성을 다룰 때 활용하는 data-* 속성은 카멜 케이스(Camel Case)가 아니라 기존의 HTML 문법 그대로 작성하셔야 합니다.
  import ReactDOM from 'react-dom';

  ReactDOM.render(
    <div>
      상태 변경: 
      <button className="btn" data-status="대기중">대기중</button>
      <button className="btn" data-status="진행중">진행중</button>
      <button className="btn" data-status="완료">완료</button>
    </div>,
    document.getElementById('root')
  );
  ```
2. **자바스크립트 예약어와 같은 속성명은 사용할 수 없다!**  
JSX 문법도 결국은 자바스크립트 문법이기 때문에, `for`나 `class`처럼 자바스크립트의 문법에 해당하는 예약어와 똑같은 이름의 속성명은 사용할 수 없습니다.
그래서 HTML의 `for`의 경우에는 자바스크립트의 반복문 키워드 `for`와 겹치기 때문에 `htmlFor`로, HTML의 `class` 속성도 자바스크립트의 클래스 키워드 `class`와 겹치기 때문에 `className`으로 작성해 주어야 합니다.
```js
import ReactDOM from 'react-dom';

ReactDOM.render(
  <form>
    <label htmlFor="name">이름</label>
    <input id="name" className="name-input" type="text" />
  </form>,
  document.getElementById('root')
);
```
- 반드시 하나의 요소로 감싸기 - Fragment     
JSX 문법을 활용할 때는 반드시 하나의 요소로 감싸주어야 합니다. 그래서 아래 코드처럼 여러 개의 요소를 작성하면 오류가 발생하는데요.
```js
import ReactDOM from 'react-dom';

ReactDOM.render(
  <p>안녕</p>
  <p>리액트!</p>,
  document.getElementById('root')
);    // 오류 발생!
```
```js
// 이럴 때는 아래 코드처럼 여러 태그를 감싸는 부모 태그를 만들어 하나의 요소로 만들어 주어야 합니다.
import ReactDOM from 'react-dom';

ReactDOM.render(
  <div>
    <p>안녕</p>
    <p>리액트!</p>
  </div>,
  document.getElementById('root')
);
```
```js
// 하지만 이렇게 작성한다면 때로는 꼭 필요하지 않은 부모 태그가 작성될 수 있겠죠? 그럴 땐 Fragment로 감싸주면 의미 없는 부모 태그를 만들지 않아도 여러 요소를 작성할 수 있습니다.
import { Fragment } from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render(
  <Fragment>
    <p>안녕</p>
    <p>리액트!</p>
  </Fragment>,
  document.getElementById('root')
);
```
```js
// 참고로 Fragment는 아래 코드처럼 빈 태그로 감싸는 단축 문법으로 활용할 수도 있습니다.
import ReactDOM from 'react-dom';

ReactDOM.render(
  <>
    <p>안녕</p>
    <p>리액트!</p>
  </>,
  document.getElementById('root')
);
```
- 자바스크립트 표현식 넣기     
JSX 문법에서 중괄호({})를 활용하면 자바스크립트 표현식을 넣을 수 있습니다.
```js
import ReactDOM from 'react-dom';

const product = '맥북';

ReactDOM.render(
  <h1>나만의 {product} 주문하기</h1>,
  document.getElementById('root')
);
```
```js
// 이런 부분들을 잘 활용하면, 아래 코드처럼 중괄호 안에서 문자열을 조합할 수도 있고 변수에 이미지 주소를 할당해서 img 태그의 src 속성값을 전달해 줄 수도 있고, 이벤트 핸들러를 좀 더 편리하게 등록할 수도 있습니다.
import ReactDOM from 'react-dom';

const product = 'MacBook';
const model = 'Air';
const imageUrl = 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/MacBook_with_Retina_Display.png/500px-MacBook_with_Retina_Display.png'

function handleClick(e) {
  alert('곧 도착합니다!');
}

ReactDOM.render(
  <>
    <h1>{product + ' ' + model} 주문하기</h1>
    <img src={imageUrl} alt="제품 사진" />
    <button onClick={handleClick}>확인</button>
  </>,
  document.getElementById('root')
);
```
> 단, JSX 문법에서 중괄호는 자바스크립트 표현식을 다룰 때 활용하기 때문에, 중괄호 안에서 for, if문 등의 문장은 다룰 수 없다는 점은 꼭 기억해 주세요.

> 그런데도 만약 JSX 문법을 활용할 때 조건문이 꼭 필요하다면 조건 연산자를, 반복문이 꼭 필요하다면 배열의 반복 메소드를 활용해 볼 수는 있겠죠?

## ✨ 컴포넌트(component) 문법
### 리액트 엘리먼트(React Element)
JSX 문법으로 작성한 요소는 결과적으로 자바스크립트 객체가 됩니다.
```js
import ReactDOM from 'react-dom';

const element = <h1>안녕 리액트!</h1>;
console.log(element);
ReactDOM.render(element, document.getElementById('root'));
```
```
{$$typeof: Symbol(react.element), type: "h1", key: null, ref: null, props: {…}, …}
```
이런 객체를 리액트 엘리먼트라고 부른다.

이 리액트 엘리먼트를 `ReactDOM.render` 함수의 아규먼트로 전달하게 되면, 리액트가 객체 형태의 값을 해석해서 HTML 형태로 브라우저에 띄워주는 것이다.

리액트 엘리먼트는 리액트로 화면을 그려내는데 가장 기본적인 요소입니다.

### ❗ 리액트 컴포넌트(React Component)
리액트 컴포넌트는 리액트 엘리먼트를 조금 더 자유롭게 다루기 위한 하나의 문법입니다.

컴포넌트를 만드는 가장 간단한 방법은 자바스크립트의 함수를 활용하는 것인데, 아래 코드에서 JSX 문법으로 작성된 하나의 요소를 리턴하는 `Hello` 함수가 바로 하나의 컴포넌트입니다.

이렇게 요소를 컴포넌트로 작성하게 되면 다양한 장점들이 있습니다. 자세한 내용은 밑에서!
```js
import ReactDOM from 'react-dom';

function Hello() {
  return <h1>안녕 리액트</h1>;
}

const element = (
  <>
    <Hello />
    <Hello />
    <Hello />
  </>
);

ReactDOM.render(element, document.getElementById('root'));
```
이렇게 컴포넌트를 작성하면, 위 코드에서 `element` 변수 안의 JSX 코드에서 볼 수 있듯 컴포넌트 함수 이름을 통해 하나의 태그처럼 활용할 수가 있습니다.

이런 특성을 모듈 문법으로 활용하면 훨씬 더 독립적으로 컴포넌트 특성에 집중해서 코드를 작성할 수가 있습니다.
```js
// Dice.js
import diceBlue01 from './assets/dice-blue-1.svg';

function Dice() {
  return <img src={diceBlue01} alt="주사위" />;
}

export default Dice;
```
```js
// App.js
import Dice from './Dice';

function App() {
  return (
    <div>
      <Dice />
    </div>
  );
}

export default App;
```
> 주의 사항) 리액트 컴포넌트의 이름은 반드시 **첫 글자를 대문자로 작성**해야 한다는 것!! (컴포넌트 이름의 첫 글자가 소문자면 에러 발생!)

## ✨ Props
### Props
JSX 문법에서 컴포넌트를 작성할 때 컴포넌트에도 속성을 지정할 수 있는데요. 리액트에서 이렇게 컴포넌트에 지정한 속성들을 **Props**라고 부릅니다.

**Props**는 **Properties의 약자**인데요. 컴포넌트에 속성을 지정해주면 **각 속성이 하나의 객체로 모여서 컴포넌트를 정의한 함수의 첫 번째 파라미터로 전달**됩니다.

```js
// App.js
import Dice from './Dice';

function App() {
  return (
    <div>
      <Dice color="blue" />
    </div>
  );
}

export default App;
```
```js
// Dice.js
import diceBlue01 from './assets/dice-blue-1.svg';

function Dice(props) {
  console.log(props)
  return <img src={diceBlue01} alt="주사위" />;
}

export default Dice;
```
위 코드들처럼 `App` 함수에서 사용하는 `Dice` 컴포넌트에 `color`라는 속성을 `blue`로 지정해주고, `Dice` 함수 내부에서 `props`라는 파라미터를 하나 만들어 출력해보면 브라우저 콘솔에는 다음과 같은 출력 결과가 나타나게 됩니다.
```
{ color: "blue" }
```
그래서 컴포넌트를 활용할 때 속성값을 다양하게 전달하고 이 props 값을 활용하면, 똑같은 컴포넌트라도 전달된 속성값에 따라 서로 다른 모습을 그려낼 수도 있게 됩니다.

```js
// App.js
import Dice from './Dice';

function App() {
  return (
    <div>
      <Dice color="red" num={2} />
    </div>
  );
}

export default App;
```
```js
// Dice.js
import diceBlue01 from './assets/dice-blue-1.svg';
import diceBlue02 from './assets/dice-blue-2.svg';
// ...
import diceRed01 from './assets/dice-red-1.svg';
import diceRed02 from './assets/dice-red-2.svg';
// ...

const DICE_IMAGES = {
  blue: [diceBlue01, diceBlue02],
  red: [diceRed01, diceRed02],
};

function Dice(props) {
  const src = DICE_IMAGES[props.color][props.num - 1];
  const alt = `${props.color} ${props.num}`;
  return <img src={src} alt={alt} />;
}

export default Dice;
```
참고로, 이렇게 🔥**props가 객체 형태를 띠고 있으니 Destructuring 문법을 활용해서 조금 더 간결하게 코드를 작성할 수 있다!!**
```js
// Destructuring 활용
import diceBlue01 from './assets/dice-blue-1.svg';
import diceBlue02 from './assets/dice-blue-2.svg';
// ...
import diceRed01 from './assets/dice-red-1.svg';
import diceRed02 from './assets/dice-red-2.svg';
// ...

const DICE_IMAGES = {
  blue: [diceBlue01, diceBlue02],
  red: [diceRed01, diceRed02],
};

function Dice({ color = 'blue', num = 1 }) {
  const src = DICE_IMAGES[color][num - 1];
  const alt = `${color} ${num}`;
  return <img src={src} alt={alt} />;
}

export default Dice;
```

### Children
`props`에는 `children`이라는 조금 특별한 프로퍼트(props, 프롭)가 있습니다.

JSX 문법으로 컴포넌트를 작성할 때 컴포넌트를 단일 태그가 아니라 여는 태그와 닫는 태그의 형태로 작성하면, 그 안에 작성된 코드가 바로 이 `children` 값에 담기게 됩니다.
```js
// Button.js
function Button({ children }) {
  return <button>{children}</button>;
}

export default Button;
```
```js
// App.js
import Button from './Button';
import Dice from './Dice';

function App() {
  return (
    <div>
      <div>
        <Button>던지기</Button>
        <Button>처음부터</Button>
      </div>
      <Dice color="red" num={2} />
    </div>
  );
}

export default App;
```
그래서 JSX 문법으로 컴포넌트를 작성할 때 어떤 정보를 전달할 때는 일반적인 `props`의 속성값을 주로 활용하고, 화면에 보여질 모습을 조금 더 직관적인 코드로 작성하고자 할 때 `childeren` 값을 활용할 수가 있습니다.

참고로 이 `childeren`을 활용하면 단순히 텍스트만 작성하는 걸 넘어서 컴포넌트 안에 컴포넌트를 작성할 수도 있고, 컴포넌트 안에 복잡한 태그들을 더 작성할 수도 있으니깐 이 값을 어떻게 활용하면 좋을지 여러분도 한번 고민해보시면 좋을 것 같습니다!

## ✨ State
### State
> **state**는 리액트에서 화면을 그려내는 데 굉장히 중요한 역할을 합니다.

State라는 단어는 한국어로 '상태'라는 뜻이 있는데요. 리액트에서의 state도 그 의미가 다르지 않습니다.

상태가 바뀔 때마다 화면을 새롭게 그려내는 방식으로 동작을 하는 것이죠.

리액트에서 state를 만들고, state를 바꾸기 위해서는 일단 `useState`라는 함수를 활용해야 합니다.
```js
import { useState } from 'react';

// ...

  const [num, setNum] = useState(1);

// ...
```
보통 이렇게 Destructuring 문법으로 작성하는데요. `useState` 함수가 초깃값을 아규먼트로 받고 그에 따른 실행 결과로 요소 2개를 가진 배열의 형태로 리턴을 하기 때문입니다.

이때 첫 번째 요소가 바로 state이고, 두 번째 요소가 이 state를 바꾸는 setter 함수입니다.

참고로 위 코드에서도 볼 수 있듯 첫 번째 변수는 원하는 state의 이름(`num`)을 지어주고, 두 번째 변수에는 state 이름 앞에 set을 붙인 다음 카멜 케이스로 이름을 지어주는 것(setNum)이 일반적입니다.

state는 변수에 새로운 값을 할당하는 방식으로 변경하는 것이 아니라 이 setter 함수를 활용해야 하는데요. setter 함수는 호출할 때 전달하는 아규먼트 값으로 state 값을 변경해 줍니다.

그래서 아래 코드처럼 setter 함수를 활용해서 이벤트 핸들러를 등록해두면, 이벤트가 발생할 때마다 상태가 변하면서 화면이 새로 그려지는 것입니다!

```js
import { useState } from 'react';
import Button from './Button';
import Dice from './Dice';

function App() {
  const [num, setNum] = useState(1);

  const handleRollClick = () => {
    setNum(3); // num state를 3으로 변경!
  };

  const handleClearClick = () => {
    setNum(1); // num state를 1로 변경!
  };

  return (
    <div>
      <Button onClick={handleRollClick}>던지기</Button>
      <Button onClick={handleClearClick}>처음부터</Button>
      <Dice color="red" num={num} />
    </div>
  );
}

export default App;
```
### 참조형 State
자바스크립트의 자료형은 크게 기본형(Primitive type)과 참조형(Reference type)으로 나눌 수 있습니다.

특히 참조형 값들은 조금 독특한 특성을 가지고 있어서 변수로 다룰 때도 조금 주의해야 할 부분들이 있었는데요. state를 활용할 때도 마찬가지입니다!

```js
// ... 

  const [gameHistory, setGameHistory] = useState([]);

  const handleRollClick = () => {
    const nextNum = random(6);
    gameHistory.push(nextNum);
    setGameHistory(gameHistory); // state가 제대로 변경되지 않는다!
  };

// ...
```

위 코드에서 볼 수 있듯 배열 값을 가진 `gameHistory`에 `push` 메소드를 이용해서 배열의 값을 변경한 다음, 변경된 배열을 setter 함수로 state를 변경하려고 하면 코드가  제대로 동작하지 않습니다.

`gameHistory` state는 배열 값 자체를 가지고 있는 게 아니라 그 배열의 주솟값을 참조하고 있는 건데요. 때문에 `push` 메소드로 배열 안에 요소를 변경했다고 하더라도 결과적으로 참조하는 배열의 주솟값은 변경된 것이 아니게 됩니다.

결과적으로 리액트 입장에서는 `gameHistory` state가 참조하는 주솟값은 여전히 똑같기 때문에 상태(state)가 바뀌었다고 판단하지 않는 것이죠!

> 그래서 참조형 state를 활용할 때는 반드시 **새로운 참조형 값을 만들어 state를 변경**해야 합니다.

> 가장 간단한 방법은 **Spread 문법(...)**을 활용하는 것입니다!
```js
// ... 

  const [gameHistory, setGameHistory] = useState([]);

  const handleRollClick = () => {
    const nextNum = random(6);
    setGameHistory([...gameHistory, nextNum]); // state가 제대로 변경된다!
  };

// ...
```
이 참조형 state의 특성을 이해하지 못하면, 간혹 state가 제대로 변경되지 않는 버그가 발생했을 때 원인을 제대로 찾지 못하는 경우가 발생할 수도 있습니다.

## ✨ 디자인 적용하는 방법과 팁

CSS 파일을 불러오거나 이미지 파일을 불러오는 기능은 리액트 고유의 기능이 아니라 **Create React App**이라는 프로그램이 대신 설정해 준 기능입니다.(참고: [Create React App 문서](https://create-react-app.dev/docs/adding-a-stylesheet/))

### 디자인을 적용하는 방법
#### 이미지를 불러오기
이미지 파일은 `import` 구문을 통해 불러오고, 불러온 이미지 주소를 `src` 속성으로 사용하면 됩니다.
```js
import diceImg from './assets/dice.png';

function Dice() {
  return <img src={diceImg} alt="주사위 이미지" />;
}

export default App;
```

#### 인라인 스타일
리액트에서 인라인 스타일은 문자열이 아닌 **객체형**으로 사용합니다. 프로퍼티 이름은 CSS 속성 이름으로, 프로퍼티 값은 CSS 속성 값으로 쓰는데요, 이때 프로퍼티 이름은 아래의 `boarderRadius` 처럼 **대시 기호 없이 카멜 케이스**로 써야 한다는 점도 꼭 기억해두세요.

```js
import diceImg from './assets/dice.png';

const style = {
  borderRadius: '50%',
  width: '120px',
  height: '120px',
};

function Dice() {
  return <img style={style} src={diceImg} alt="주사위 이미지" />;
}

export default App;
```
#### CSS 파일 불러오기
`import` 구문으로 파일을 불러올 수 있는데요, 이때 `from` 키워드 없이 쓰면 됩니다.
```js
import diceImg from './assets/dice.png';
import './Dice.css';

function Dice() {
  return <img src={diceImg} alt="주사위 이미지" />;
}

export default App;
```

#### 클래스네임 사용하기
CSS 파일에 정의된 클래스명을 `className` prop에 문자열로 넣어주면 됩니다.
이때 재사용성을 위해 `className` prop을 부모 컴포넌트에서 받으면 더 좋습니다.

```js
import diceImg from './assets/dice.png';
import './Dice.css';

function Dice({ className = '' }) {
  const classNames = `Dice ${className}`;
  return <img className={classNames} src={diceImg} alt="주사위 이미지" />;
}

export default App;
```

#### 편리하게 클래스 네임을 쓰는 방법
앞에서 여러  classNmae을 템플릿 문자열로 합쳐서 사용했습니다.
몇 개 없을 때는 상관없지만, 개수가 늘어날수록 아래처럼 알아보기 힘들어진다는 문제점이 있다.

- 템플릿 문자열을 사용한 예
```js
function Button({ isPending, color, size, invert, children }) {
  const classNames = `Button ${isPending ? 'pending' : ''} ${color} ${size} ${invert ? 'invert' : ''}`;
  return <button className={classNames}>{children}</button>;
}

export default Button;
```
- 배열을 사용한 예
```js
function Button({ isPending, color, size, invert, children }) {
  const classNames = [
    'Button',
    isPending ? 'pending' : '',
    color,
    size,
    invert ? 'invert' : '',
  ].join(' ');
  return <button className={classNames}>{children}</button>;
}

export default Button;
```
위 예시 코드 처럼 지저분하게 느껴지고, 매번 반복되는 코드를 작성한다는 번거로움이 있습니다.
개발자들은 이럴 때 라이브러리라는 걸 쓰는데요, 다른 개발자가 미리 만들어 놓은 코드를 이용해서 편하게 개발하는 겁니다.

클래스 네임의 경우에도ㅛ 편리하게 사용할 수 있는 라이브러리가 많이 있는데요, 그 중에서도 이번에 소개할 라이브러리는 바로 `classnames`라는 라이브러리입니다. 아래 예시 코드를 보시면 아시겠지만, 클래스네임에 만 집중할 수 있어 훨씬 읽기 편해집니다. 이렇게 적절한 라이브러리를 쓰면 개발 생산성이 굉장히 좋아집니다.

- classnames 라이브러리를 사용한 예
```js
import classNames from 'classnames';

function Button({ isPending, color, size, invert, children }) {
  return (
    <button
      className={classNames(
        'Button',
        isPending && 'pending',
        color,
        size,
        invert && 'invert',
      )}>
     { children }
   </button >
  );
}

export default Button;
```
`classnames`는 NPM이라는 프로그램을 통해 설치할 수 있습니다. 터미널에서 `npm install classnames`를 입력하고 설치한 다음, 위 예시처럼 `import`로 불러와서 사용하면 됩니다.

***
### [마무리 연습](https://www.codeit.kr/topics/getting-started-with-react/lessons/4658)
