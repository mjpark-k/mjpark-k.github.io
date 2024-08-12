## 요구사항

## 기본 요구사항

### 공통

- [x] Github에 스프린트 미션 PR을 만들어 주세요.
- [x] React, Express를 사용해 진행합니다.

### 백엔드 구현 요구 사항

**중고마켓**

- [x] Product 스키마를 작성해 주세요.
  - [x] `id`, `name`, `description`, `price`, `tags`, `createdAt`, `updatedAt`필드를 가집니다.
  - [x] 필요한 필드가 있다면 자유롭게 추가해 주세요.
- [x] 상품 등록 API를 만들어 주세요.

  - [x] `name`, `description`, `price`, `tags`를 입력하여 상품을 등록합니다.

- [x] 상품 상세 조회 API를 만들어 주세요.

  - [x] `id`, `name`, `description`, `price`, `tags`, `createdAt`를 조회합니다.

- [x] 상품 수정 API를 만들어 주세요.

  - [x] PATCH 메서드를 사용해 주세요.

- [x] 상품 삭제 API를 만들어 주세요.

- [x] 상품 목록 조회 API를 만들어 주세요.

  - [x] `id`, `name`, `price`, `createdAt`를 조회합니다.
  - [x] offset 방식의 페이지네이션 기능을 포함해 주세요.
  - [x] 최신순(recent)으로 정렬할 수 있습니다.
  - [x] `name`, `description`에 포함된 단어로 검색할 수 있습니다.

- [x] 각 API에 적절한 에러 처리를 해 주세요.

- [x] 각 API 응답에 적절한 상태 코드를 리턴하도록 해 주세요.

- [x] `. env` 파일에 환경 변수를 설정해 주세요.

- [x] CORS를 설정해 주세요.

- [x] render.com로 배포해 주세요.

- [x] MongoDB를 활용해 주세요.

## 주요 변경사항

- API를 사용하여 CRUD(생성, 읽기, 업데이트, 삭제) 기능을 구현
- MongoDB 활용, Render로 배포

## 스크린샷

![](https://velog.velcdn.com/images/pmj9498/post/f7e2f49b-b273-4fe6-b018-54447ab97d3f/image.png)
![](https://velog.velcdn.com/images/pmj9498/post/ab1ceaaf-30cd-4664-804d-bdae09f3466d/image.png)

## 멘토에게

- 부족한 점 말씀해주시면, 수정해보겠습니다!
