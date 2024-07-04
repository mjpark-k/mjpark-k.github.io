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
![alt text](image-8.png)

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
> - DOM 이동 시 활용 가능한 프로퍼티
>
> - `element.querySelector`
>
> - `innerHTML`
>
> - `document.createElement`
>
> - `classList`

---
### 이벤트 핸들러 등록


