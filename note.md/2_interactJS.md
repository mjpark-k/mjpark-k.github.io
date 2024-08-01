# Interaction Javascript

### Javascript로 태그 선택하기

```js
// HTML id속성으로 태그 선택하기 --> id에 해당하는 태그 하나
document.getElementById('id');
// HTML class속성으로 태그 선택하기 --> class에 해당하는 태그 모음(HTMLCollection)
document.getElementsByClassName('class');
// HTML 태그 이름으로 태그 선택하기 --> tag에 해당하는 태그 모음(HTMLCollection)
document.getElementsByTagName('tag'); 
// css 선택자로 태그 선택하기 --> css 선택자에 해당하는 태그 중 가장 첫번째 태그 하나
document.querySelector('css');
// css 선택자로 태그 선택하기 --> css 선택자에 해당하는 태그 모음(NodeList)
document.querySelectorAll('css');
```
`document.querySelector('css');`, `document.querySelectorAll('css');` : 제일 많이 쓰임(실무, 작업 등)

---
### 유사배열? 
`document.getElementsByClassName('class');`,  `document.querySelectorAll('css');`

배열과 유사한 객체 ex) HTMLCollection, NodeList, DOMTokenList, ...

유사 배열에 담기는 순서는 태그의 깊이보다는 문서 전체적인 측면에서 위에서부터 차례대로, 위치에 따라서 순서를 갖게 됩니다.

<특징>
- 숫자 형태의 indexing이 가능하다.
- length 프로퍼티가 있다.
- 배열의 기본 메소드를 사용할 수 없다.
- Array.isArray(유사배열)의 리턴값은 false다.

> 유사배열은 변환하자! 배열 형태로 변환 가능
```js
Array.from(document.getElementsByClassName('class_name'));
```

> 유사배열은 변환하자!
Array.from(document.getElementsByClassName('class_name));

---
### 이벤트, 이벤트 핸들링 그리고 이벤트 핸들러
- 이벤트 : 웹 페이지에서 발생하는 대부분의 일(사건)들
  ex) 버튼 클릭, 스크롤, 키보드 입력, ...

- 이벤트 핸들링 : 자바스크립트를 통해 이벤트를 다루는 일

- 이벤트 핸들러 : 이벤트가 발생했을 때 일어나야하는 구체적인 동작들을 표현한 코드. **이벤트 리스너(Event Listener)** 라고도 부른다.
```js
// 자바스크립트로 해당 DOM 객체의 onclick 프로퍼티에 등록하기
const btn = document.querySelector('#myBtn');

// 이벤트 핸들링 (Event Handling)
btn.onclick = function () { // 이벤트 핸들러 (Event Handler)
  console.log('Heloo Codeit!');
}
```
---

### DOM 
(진짜 중요!! 면접에서도 많이 물어봄)

> `DOM (Document Object Model)(문서 객체 모델)` : 웹페이지 내용을 대변하고 수정할 수 있는 객체의 규격 (규칙), 간단하게 표현하면 웹 페이지에 나타나는 HTML 문서 전체를 객체로 표현한 것으로 생각하면 됩니다.

document 객체: 우리가 보고있는 웹페이지의 내용을 대변하는 DOM 객체

DOM 문서(document)는 **트리 구조** (나무처럼 가지를 뻗어나가는 형태)
>Parent node(부모 노드), Child node(자식 노드), Sibling node(형제 노드)

>Text node(텍스트 노드), Element node(요소 노드)

---

### 요소 노드의 프로퍼티
`element.innerHTML`
- 요소 노드 내부의 HTML 코드를 문자열로 리턴해 줍니다. (내부에 있는 줄 바꿈이나 들여쓰기 모두 포함합니다.)
```js
const myTag = document.querySelector('#list-1');

// innerHTML
console.log(myTag.innerHTML);
```
![alt text](/images/image-2.png)

- 요소 안의 정보를 확인할 수도 있지만, 내부의 HTML 자체를 수정할 때 좀 더 자주 활용됩니다. (내부에 있던 값을 완전히 새로운 값으로 교체하기 때문에 주의해서 사용해야해요!)
```js
const myTag = document.querySelector('#list-1');

// innerHTML
console.log(myTag.innerHTML);
myTag.innerHTML = '<li>Exotic</li>';
console.log(myTag.innerHTML);
```
![alt text](/images/image-3.png)

`element.outerHTML`
- 요소 노드 자체의 전체적인 HTML 코드를 문자열로 리턴해줍니다. (내부에 있는 줄 바꿈이나 들여쓰기 모두 포함합니다.)

```js
const myTag = document.querySelector('#list-1');

// outerHTML
console.log(myTag.outerHTML);
```
![alt text](/images/image-4.png)

- outerHTML은 새로운 값을 할당할 경우 요소 자체가 교체되어 버리기 때문에 주의해야 합니다.
```js
const myTag = document.querySelector('#list-1');

// outerHTML
console.log(myTag.outerHTML);
myTag.outerHTML = '<ul id="new-list"><li>Exotic</li></ul>';
```
![alt text](/images/image-5.png)

`element.textContent`
- 요소 안의 내용들 중에서 HTML 태그 부분은 제외하고 텍스트만 가져옵니다. (내부에 있는 줄 바꿈이나 들여쓰기 모두 포함합니다.)
```js
const myTag = document.querySelector('#list-1');

// textContext
console.log(myTag.textContent);
```
![alt text](/images/image-6.png)

- 새로운 값을 할당하면 innerHTML과 마찬가지로 내부의 값을 완전히 새로운 값으로 교체 합니다.
```js
const myTag = document.querySelector('#list-1');

// textContext
console.log(myTag.textContent);
myTag.textContent = 'new text!';
```
![alt text](/images/image-7.png)

- 하지만 textContent는 말그대로 텍스트만 다루기 때문에, 특수문자도 그냥 텍스트로 처리한다는 점, 꼭 기억해주세요!

```js
const myTag = document.querySelector('#list-1');

// textContext
console.log(myTag.textContent);
myTag.textContent = '<li>new text!</li>';
```
![alt text](/images/image-8.png)

---

### 요소 노드 다루기
- 요소 노드 만들기: `document.createElement('태그이름')`
- 요소 노드 꾸미기: `element.textContent`, `element.innerHTML`, ...
- 요소 노드 추가 혹은 이동하기: `element.prepend`, `element.append`, `element.after`, `element.before`
- 요소 노드 삭제하기: `element.remove()`

### HTML 속성 다루기
대부분의 HTML 속성은 DOM 객체의 프로퍼티로 변환이 됩니다.
하지만, 표준 속성이 아닌 경우에는 프로퍼티로 변환이 안 되는데요. 아래 메소드를 활용하면 표준이 아닌 HTML 속성들도 다룰 수 있습니다.

- 속성에 접근하기: `element.getAttribute('속성')`
- 속성 추가(수정)하기: `element.setAttribute('속성', '값')`
- 속성 제거하기: `element.removeAttribute('속성')`

### 스타일 다루기
자바스크립트로 태그의 스타일을 다루는 방법에는 크게 두 가지가 있습니다.

1. style 프로퍼티 활용하기: `element.style.styleName = 'value';`  (거의 안씀)
2. class 변경을 통해 간접적으로 스타일 적용하기: `element.className`, `element.classList`(진짜 많이 씀. 이해 바람)


> **중요한 사항**
>
> * DOM 이동 시 활용 가능한 프로퍼티
>
> * `element.querySelector`
>
> * `innerHTML`
>
> * `document.createElement`
>
> * `classList`, 

---
## ✍ 이벤트 핸들러(Event Handler)
### 이벤트 핸들러 등록 및 삭제
> HTML의 속성이나 DOM 프로퍼티를 활용해 이벤트를 등록하는 방법 외에 `Element.addEventListener('type', 'handler')`를 통해서 이벤트 핸들러를 등록할 수 있습니다.

> `addEventListener` 메소드를 활용해서 이벤트 핸들러를 등록했다면, `Element.removeEventListner('type', 'handler')`를 통해서 이벤트 핸들러를 삭제할 수 있습니다.

### 다양한 이벤트 살펴보기
*참고 후, 사용하고 싶은 것은 찾아서 쓰자*
#### <마우스 이벤트>
| 이벤트 타입 |	설명 |
| :---: | :--- |
`mousedown` |	마우스 버튼을 누르는 순간
`mouseup` |	마우스 버튼을 눌렀다 떼는 순간
`click` |	왼쪽 버튼을 클릭한 순간
`dblclick` |	왼쪽 버튼을 빠르게 두 번 클릭한 순간
`contextmenu` |	오른쪽 버튼을 클릭한 순간
`mousemove` |	마우스를 움직이는 순간
`mouseover` |	마우스 포인터가 요소 위로 올라온 순간
`mouseout` |	마우스 포인터가 요소에서 벗어나는 순간
`mouseenter` |	마우스 포인터가 요소 위로 올라온 순간 (버블링이 일어나지 않음)
`mouseleave` |	마우스 포인터가 요소에서 벗어나는 순간 (버블링이 일어나지 않음)

#### <키보드 이벤트>
| 이벤트 타입 |	설명 |
| :---: | :--- |
`keydown` |	키보드의 버튼을 누르는 순간
`keypress` |	키보드의 버튼을 누르는 순간 ('a', '5' 등 출력이 가능한 키에서만 동작하며, Shift, Esc 등의 키에는 반응하지 않음)
`keyup` |	키보드의 버튼을 눌렀다 떼는 순간

#### <포커스 이벤트>
| 이벤트 타입 |	설명 |
| :---: | :--- |
`focusin` |	요소에 포커스가 되는 순간
`focusout` |	요소로부터 포커스가 빠져나가는 순간
`focus` |	요소에 포커스가 되는 순간 (버블링이 일어나지 않음)
`blur` |	요소로부터 포커스가 빠져나가는 순간 (버블링이 일어나지 않음)

#### <입력 이벤트>
| 이벤트 타입 |	설명 |
| :---: | :--- |
`change` |	입력된 값이 바뀌는 순간
`input` |	값이 입력되는 순간
`select` |	입력 양식의 하나가 선택되는 순간
`submit` |	폼을 전송하는 순간

#### <스크롤 이벤트>
| 이벤트 타입 |	설명 |
| :---: | :--- |
`scroll` |	스크롤 바가 움직일 때

#### <윈도우 창 이벤트>
| 이벤트 타입 |	설명 |
| :---: | :--- |
`resize` |	윈도우 사이즈를 움직일 때 발생

### 이벤트 객체 (Event Object)
> 이벤트가 발생하면 이벤트 핸들러의 첫 번째 파라미터에는 자동으로 이벤트 객체가 전달, 이벤트 객체는 이벤트 종류마다 가지고 있는 프로퍼티가 다르며, 이벤트에 대한 유용한 정보들을 프로퍼티로 가지고 있습니다.

아래에 표로 자주 사용되는 프로퍼티를 알아보자!

#### <공통 프로퍼티>
| 프로퍼티 |	설명 |
| :---: | :--- |
`type` |	이벤트 이름 ('click', 'mouseup', 'keydown' 등)
`target` |	이벤트가 발생한 요소
`currentTarget` |	이벤트 핸들러가 등록된 요소
`timeStamp` |	이벤트 발생 시각(페이지가 로드된 이후부터 경과한 밀리초)
`bubbles` |	버블링 단계인지를 판단하는 값

#### <마우스 이벤트>
| 프로퍼티 |	설명 |
| :---: | :--- |
`button` |	누른 마우스의 버튼 (0: 왼쪽, 1: 가운데(휠), 2: 오른쪽)
`clientX`, `clientY` |	마우스 커서의 브라우저 표시 영역에서의 위치
`pageX`, `pageY` |	마우스 커서의 문서 영역에서의 위치
`offsetX`, `offsetY` |	마우스 커서의 이벤트 발생한 요소에서의 위치
`screenX`, `screenY` |	마우스 커서의 모니터 화면 영역에서의 위치
`altKey` |	이벤트가 발생할 때 alt키를 눌렀는지
`ctrlKey` |	이벤트가 발생할 때 ctrl키를 눌렀는지
`shiftKey` |	이벤트가 발생할 때 shift키를 눌렀는지
`metaKey` |	이벤트가 발생할 때 meta키를 눌렀는지 (window는 window키, mac은 cmd키)

#### <키보드 이벤트>
| 프로퍼티 |	설명 |
| :---: | :--- |
`key` |	누른 키가 가지고 있는 값
`code` |	누른 키의 물리적인 위치
`altKey` |	이벤트가 발생할 때 alt키를 눌렀는지
`ctrlKey` |	이벤트가 발생할 때 ctrl키를 눌렀는지
`shiftKey` |	이벤트가 발생할 때 shift키를 눌렀는지
`metaKey` |	이벤트가 발생할 때 meta키를 눌렀는지 (window는 window키, mac은 cmd키)

### 이벤트 버블링 (Event Bubbling)
이벤트는 전파가 됩니다.
어떤 요소에서 이벤트가 발생하면 해당 요소에 등록된 이벤트 핸들러가 동작하는 것뿐만 아니라 부모 요소로 이벤트가 계속해서 전파되면서 각 요소에도 등록된 이벤트 핸들러가 있다면 차례로 이벤트 핸들러가 동작합니다.
> 자식 요소에서 부모요소로 이벤트가 전파되는 것을 이벤트 **버블링(Event Bubbling)** 이라고 부릅니다.

참고로 이벤트 버블링은 **이벤트 객체** 의 `stopPropagation` 메소드로 전파를 막을 수 있습니다. (하지만 잘 안쓰임, 버블링을 잘 생각해서 짜야함)

### 이벤트 위임 (Event Delegation)
버블링 개념을 활용하며 훨씬 효과적인 이벤트 관리를 할 수 있습니다. 예를 들어 자식 요소 각각에 이벤트 핸들러를 하나씩 등록할 필요 없이 부모 요소에서 한 번에 자식 요소들에 발생한 이벤트를 관리할 수 있습니다.
> 이벤트를 다루는 방식을 자식 요소의 이벤트를 부모 요소에 위임한다고 해서 **이벤트 위임(Event Delegation)** 이라고 부릅니다.

이벤트 위임을 잘 활용하면 훨씬 더 효율적으로 이벤트를 다룰 수 있습니다.

### 브라우저의 기본 동작

브라우저에는 각 태그별 혹은 상황별로 기본적으로 약속된 동작들이 있습니다.

예를 들어 마우스 오른쪽 버튼을 클릭하면 상황에 맞는 메뉴 창이 뜬다거나, `input` 태그에 커서를 두고 키보드 키를 누르면 해당 값이 입력된다거나.

> 그런데 이러한 동작들을 막고 싶다면 **이벤트 객체** 의 `preventDefault` 메소드를 통해 막을 수가 있습니다.

하지만 각 HTML 태그들이 가지고 있는 고유한 역할과 의미를 훼손하게 될 수도 있기 때문에 꼭 필요한 경우에만 주의해서 사용해야 합니다.

---
## 📝다양한 이벤트 알아보기
https://www.codeit.kr/topics/interactive-javascript/lessons/3826
### MouseEvent.button
| 값 |	내용 |
| :---: | :--- |
`0` |	마우스 왼쪽 버튼
`1` |	마우스 휠
`2` |	마우스 오른쪽 버튼
`3` |	X1 (일반적으로 브라우저 뒤로 가기 버튼)
`4` |	X2 (일반적으로 브라우저 앞으로 가기 버튼)

### MouseEvent.type
| 이벤트 타입 |	설명 |
| :---: | :--- |
`mousedown` |	마우스 버튼을 누르는 순간
`mouseup` |	마우스 버튼을 눌렀다 떼는 순간
`click` |	왼쪽 버튼을 클릭한 순간
`dblclick` |	왼쪽 버튼을 빠르게 두 번 클릭한 순간
`contextmenu` |	오른쪽 버튼을 클릭한 순간
`mousemove` |	마우스를 움직이는 순간
`mouseover` |	마우스 포인터가 요소 위로 올라온 순간
`mouseout` |	마우스 포인터가 요소에서 벗어나는 순간
`mouseenter` |	마우스 포인터가 요소 위로 올라온 순간 (버블링이 일어나지 않음)
`mouseleave` |	마우스 포인터가 요소에서 벗어나는 순간 (버블링이 일어나지 않음)

> 이벤트 핸들러가 자식 요소에까지 영향을 끼치게 하고싶은 경우에는 `mouseover`/`mouseout`을, 자식 요소에는 영향을 끼치지 않고 해당 요소에만 이벤트 핸들러를 다루고자 한다면 `mouseenter`/`mouseleave`를 활용하면 좋습니다.

### MouseEvent.위치프로퍼티
![alt text](/images/mouseMove.png)

### MouseEvent.relatedTarget
`mouseenter`, `mouseleave`, `mouseover, mouseout` 이벤트에는 `relatedTarget`이라는 프로퍼티가 존재하는데요.

target 프로퍼티가 이벤트가 발생한 요소를 담고 있다면, `relatedTarget` 프로퍼티는 이벤트가 발생하기 직전(또는 직후)에 마우스가 위치해 있던 요소를 담고 있습니다.

### KeyboardEvent.type
| 이벤트 타입 |	설명 |
| :---: | :--- |
`keydown` |	키보드의 버튼을 누르는 순간
`keypress` |	키보드의 버튼을 누르는 순간 ('a', '5' 등 출력이 가능한 키에서만 동작하며, Shift, Esc 등의 키에는 반응하지 않음)(의도해서 사용하는 경우가 아니라면, **권장하지 않음** `keydown`을 사용해라!)
`keyup` |	키보드의 버튼을 눌렀다 떼는 순간

### KeyboardEvent.key vs KeyboardEvent.code
키보드 이벤트 객체에는 `key`와 `code` 프로퍼티가 자주 사용되는데요.

> `key`는 **사용자가 누른 키가 가지고 있는 값** 을 나타내고 `code`는 **누른 키의 물리적인 위치** 를 나타낸다는 점!

### input태그 다루기
`input` 태그는 말 그대로 입력의 역할을 하는 태그입니다. `input` 태그를 다룰 때는 아래와 같은 이벤트 타입들이 활용될 수 있습니다.
| 이벤트 타입 |	설명 |
| :---: | :--- |
`focusin` |	요소에 포커스가 되는 순간
`focusout` |	요소에 포커스가 빠져나가는 순간
`focus` |	요소에 포커스가 되는 순간 (버블링이 일어나지 않음)
`blur` |	요소에 포커스가 빠져나가는 순간 (버블링이 일어나지 않음)
`change` |	입력된 값이 바뀌는 순간
`input` |	값이 입력되는 순간
`select` |	입력 양식의 하나가 선택되는 순간
`submit` |	폼을 전송하는 순간

### 스크롤 이벤트
`scroll` 이벤트는 보통 `window` 객체에 이벤트 핸들러를 등록하고 `window` 객체의 프로퍼티와 함께 자주 활용됩니다.

특히 `scrollY` 프로퍼티를 활용하면 스크롤된 특정한 위치를 기준으로 이벤트 핸들러가 동작하게 하거나 혹은 스크롤 방향(위로 스크롤 중인지/아래로 스크롤 중인지)을 기준으로 이벤트 핸들러가 동작하게끔 활용할 수도 있습니다.