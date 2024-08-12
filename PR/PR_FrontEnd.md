## 요구사항

## 기본 요구사항

### 공통

- [x] Github에 스프린트 미션 PR을 만들어 주세요.

- [x] React, Express를 사용해 진행합니다.

### 프론트엔드 구현 요구사항

**중고마켓 페이지**

- [x] 중고마켓 페이지 url path를 “/items”으로 설정하세요.
- [x] 페이지 주소가 “/items” 일 때 상단내비게이션바의 “중고마켓" 버튼의 색상은 “3692FF”입니다.
- [x] 중고마켓 페이지 판매 중인 상품은 본인이 만든 GET 메서드를 사용해 주세요.
  - [x] 다만 좋아요 순 정렬 기능은 제외해 주세요.
  - [x] 사진은 디폴트 이미지로 프론트엔드에서 처리해주세요.
  - [x] 베스트 상품 목록 조회는 구현하지 않습니다.
- [x] '상품 등록하기' 버튼을 누르면 “/registration” 로 이동합니다. ( 빈 페이지 )

**상품 등록 페이지**

- [x] PC, Tablet, Mobile 디자인에 해당하는 상품 등록 페이지를 만들어 주세요.
- [x] 상품 등록 url path는 “/registration”입니다.
- [x] 상품 등록은 본인이 만든 POST 메서드를 사용해 주세요.
- [x] 등록 성공 시, 해당 상품 상세 페이지로 이동합니다. (빈페이지)

## 심화 요구사항

### 프론트엔드 구현 요구사항

**상품 등록 페이지**

- [x] 모든 입력 input box에 빈 값이 있을 경우, 등록 버튼이 비활성화됩니다.
- [x] 태그를 입력한 후 엔터키를 누르면, 그 태그가 칩 형태로 쌓입니다.
- [x] 상품명, 상품 소개, 판매 가격, 태그에 대한 유효성 검사 Custom Hook을 만들어주세요. 유효성 검사를 통과하지 않을 경우, 각 input에 빨간색 테두리와, 각각의 Input 아래에 빨간색 에러 메시지를 보여주세요.
  - 유효한 조건
    - 상품명: 1자 이상, 10자 이내
    - 상품 소개: 10자 이상, 100자 이내
    - 판매 가격: 1자 이상, 숫자
    - 태그: 5글자 이내

## 주요 변경사항

- 상품 등록 페이지 만들기
- Link를 이용한 페이지 이동
- BackEnd API 연결

## 스크린샷

![](https://velog.velcdn.com/images/pmj9498/post/bc924dc7-f217-424d-b1e4-4606b342a30d/image.png)
![](https://velog.velcdn.com/images/pmj9498/post/64c72e3a-fec0-4ddb-a900-3307c9c19088/image.png)
![](https://velog.velcdn.com/images/pmj9498/post/668b665f-86ad-415a-a562-3c71638524e8/image.png)
![](https://velog.velcdn.com/images/pmj9498/post/9dd47414-2521-4832-af26-73740437e7bd/image.png)
![](https://velog.velcdn.com/images/pmj9498/post/800923f6-7e2f-4bef-9b07-b76186489879/image.png)
![](https://velog.velcdn.com/images/pmj9498/post/03fa040d-b512-49c6-a677-1f8db7ae30f3/image.png)

## 멘토에게

- 아직 React를 이용할 때, 버벅거리고 애매하게 이해하고 있다는 생각이 들 때도 있는 것 같아서 좋은 참고 사이트같은게 있는지 궁금합니다..
- 처음에 데이터 받아오는게 느립니다. 개발자도구 network 부분에서 pending이 오래걸리는데(한 30초~40초?) 문제가 있을까요?
