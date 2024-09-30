`useFormValidation`이라는 **커스텀 훅**을 만들어서 폼 입력값과 유효성 검사를 처리하는 방식은 매우 적합합니다. 이렇게 하면 코드의 재사용성을 높이고, 폼 관련 로직을 분리해 컴포넌트가 더 깔끔해집니다.

아래는 `useFormValidation` 훅을 만들어서 이메일과 비밀번호의 유효성 검사를 처리하는 예시입니다.

### `useFormValidation` 훅

```javascript
import { useState } from "react";

// useFormValidation 훅 정의
export function useFormValidation(initialState, validate) {
  const [values, setValues] = useState(initialState); // 입력 필드의 값 관리
  const [errors, setErrors] = useState({}); // 유효성 검사 에러 메시지 관리

  // 입력 필드 값 변경 처리 함수
  const handleChange = (e) => {
    const { name, value } = e.target;

    // 입력 값을 업데이트
    setValues({
      ...values,
      [name]: value,
    });

    // 실시간 유효성 검사
    const error = validate(name, value);
    setErrors({
      ...errors,
      [name]: error,
    });
  };

  // 폼 제출 시 유효성 검사
  const handleSubmit = (onSubmit) => {
    const newErrors = {};

    // 모든 필드를 순회하며 유효성 검사 실행
    for (const key in values) {
      const error = validate(key, values[key]);
      if (error) {
        newErrors[key] = error;
      }
    }

    // 에러가 있으면 상태에 저장하고, 없으면 onSubmit 함수 호출
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      onSubmit();
    }
  };

  return {
    values,
    errors,
    handleChange,
    handleSubmit,
  };
}
```

### `LoginForm` 컴포넌트에서 `useFormValidation` 사용하기

이제 이 훅을 `LoginForm` 컴포넌트에서 사용하여 유효성 검사를 처리합니다.

```javascript
import Image from "next/image";
import { useFormValidation } from "./useFormValidation"; // 훅 불러오기
import styles from "./LoginForm.module.css";
import eyeClose from "@/images/eye-close.png";
import eyeShow from "@/images/eye-show.png";

// 유효성 검사 함수
const validate = (name, value) => {
  let error = "";

  switch (name) {
    case "email":
      if (!value.includes("@")) {
        error = "유효한 이메일을 입력해주세요.";
      }
      break;
    case "password":
      if (value.length < 8) {
        error = "비밀번호는 8자 이상이어야 합니다.";
      }
      break;
    default:
      break;
  }

  return error;
};

export default function LoginForm() {
  // useFormValidation 훅 사용
  const { values, errors, handleChange, handleSubmit } = useFormValidation(
    { email: "", password: "" }, // 초기값
    validate // 유효성 검사 함수
  );

  // 폼 제출 시 실행될 함수
  const onSubmit = () => {
    alert("로그인 성공!");
    // 로그인 처리 로직을 추가할 수 있습니다.
  };

  return (
    <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
      <div className={styles.inputForm}>
        <label htmlFor="email" className={styles.label}>
          이메일
        </label>
        <input
          className={styles.emailInput}
          name="email"
          placeholder="이메일을 입력해주세요"
          value={values.email}
          onChange={handleChange} // 입력 값 변경 핸들러
        />
        {errors.email && <small className={styles.error}>{errors.email}</small>}
      </div>

      <div className={styles.inputForm}>
        <label htmlFor="password" className={styles.label}>
          비밀번호
        </label>
        <div className={styles.pwContainer}>
          <input
            className={styles.pwInput}
            name="password"
            type="password"
            placeholder="비밀번호를 입력해주세요"
            value={values.password}
            onChange={handleChange} // 입력 값 변경 핸들러
          />
          <Image src={eyeClose} className={styles.eyeClose} alt="eye close" />
          <Image src={eyeShow} className={styles.eyeShow} alt="eye show" />
        </div>
        {errors.password && (
          <small className={styles.error}>{errors.password}</small>
        )}
      </div>

      <button
        className={styles.button}
        type="button"
        onClick={() => handleSubmit(onSubmit)} // 로그인 버튼 클릭 시 유효성 검사
      >
        로그인
      </button>
    </form>
  );
}
```

### 설명

1. **`useFormValidation` 훅**:

   - 이 훅은 폼 데이터를 관리하고, `validate` 함수를 통해 입력 값에 대해 실시간 유효성 검사를 수행합니다.
   - `handleChange` 함수는 입력 값이 변경될 때마다 호출되어 값을 업데이트하고, 동시에 유효성 검사를 수행합니다.
   - `handleSubmit` 함수는 폼 제출 시 호출되며, 모든 필드를 유효성 검사한 후 에러가 없으면 `onSubmit` 콜백을 호출합니다.

2. **`validate` 함수**:

   - 각 필드의 유효성을 검사하는 로직입니다. `name`에 따라 다르게 처리하여, `email` 필드는 이메일 형식(`@` 포함)인지 확인하고, `password`는 최소 8자 이상이어야 한다는 규칙을 적용했습니다.

3. **`LoginForm` 컴포넌트**:
   - `useFormValidation` 훅을 사용하여 이메일과 비밀번호 입력 값을 관리하고 유효성 검사를 수행합니다.
   - `handleSubmit`이 호출되면 유효성 검사를 통과한 경우에만 `onSubmit` 콜백을 호출하고, 그 외에는 에러 메시지를 표시합니다.

### 장점

- **재사용성**: `useFormValidation` 훅을 사용하면 다른 폼에서도 쉽게 재사용할 수 있습니다.
- **간결함**: 폼 로직과 유효성 검사를 분리하여 컴포넌트가 깔끔해집니다.
- **유연성**: 유효성 검사 로직을 외부에서 정의할 수 있기 때문에 다양한 폼에 적용할 수 있습니다.

이 방식으로 훅을 사용하면 유지보수와 코드 확장이 쉬워집니다.

---

```js
const isValid =
  !!values.email &&
  !!values.nickname &&
  !!values.password &&
  !!values.passwordConfirm &&
  !errors.email &&
  !errors.nickname &&
  !errors.password &&
  !errors.passwordConfirm;
```

`isValid`를 더 간결하게 표현하기 위해서는 논리 연산자와 배열의 **`every`** 메서드를 활용할 수 있습니다. 이는 모든 필드와 에러 상태를 한 번에 체크할 수 있도록 도와줍니다. 다음과 같이 수정할 수 있습니다.

### 수정된 `isValid` 코드:

```javascript
const isValid = ["email", "nickname", "password", "passwordConfirm"].every(
  (field) => values[field] && !errors[field]
);
```

### 설명:

- `"email"`, `"nickname"`, `"password"`, `"passwordConfirm"` 필드를 배열로 만든 후, `every` 메서드를 사용해 각 필드가 빈 값이 아니고 에러도 없는지 확인합니다.
- 이 방식은 코드의 가독성을 높이고, 나중에 필드가 추가되거나 변경될 때도 유지보수하기 쉽습니다.

이렇게 하면 `isValid` 체크가 더 간결하고 직관적으로 변합니다.

---
