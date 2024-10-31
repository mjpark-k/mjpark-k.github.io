## interval (타이머)

이 코드는 특정 시간이 지나야 사용할 수 있는 기능(여기서는 1시간)에 대한 타이머를 실시간으로 화면에 보여주는 역할을 합니다. 네트워크에서 남은 시간을 가져온 후, 클라이언트 측에서 초 단위로 남은 시간을 실시간으로 업데이트하여 표시합니다. 아래에서 코드의 각 부분을 하나하나 자세히 설명하겠습니다.

### 1. **`useGetLastAddTime` 훅**

```js
const { data, isLoading, error } = useGetLastAddTime();
```

- 이 라인은 `useGetLastAddTime`이라는 커스텀 훅을 호출해 서버에서 마지막으로 포인트를 추가한 시간을 가져옵니다.
- `data`: 서버에서 받아온 응답 데이터.
- `isLoading`: 데이터가 로드 중인지 여부를 나타내는 상태 (boolean).
- `error`: 요청 중 오류가 발생했을 때 오류 정보를 담고 있습니다.

이 커스텀 훅을 사용하여 남은 시간이 얼마인지 서버에서 받아오는 API 요청을 처리합니다.

### 2. **`useState`를 통한 상태 관리**

```js
const [remainingTime, setRemainingTime] = useState(null);
```

- `remainingTime`은 남은 시간을 `밀리초`로 저장하는 상태입니다.
- `useState(null)`은 초기값을 `null`로 설정해 타이머가 로딩되기 전에는 아무 값도 없는 상태로 두는 것입니다.
- `setRemainingTime`은 `remainingTime`을 업데이트하기 위해 사용되는 함수입니다.

### 3. **`useEffect`로 남은 시간 계산**

```js
useEffect(() => {
  if (!data) return;

  const { timeDifference } = data.data;
  setRemainingTime(3600000 - timeDifference); // 1시간에서 경과된 시간을 뺌
  console.log(3600000 - timeDifference);
  console.log(1000 * 60 * 60);

  const interval = setInterval(() => {
    setRemainingTime((prevTime) => {
      if (prevTime <= 0) {
        clearInterval(interval); // 시간이 0 이하일 경우 타이머 멈춤
        return 0;
      }
      return prevTime - 1000; // 1초마다 1000ms씩 감소
    });
  }, 1000);

  return () => clearInterval(interval); // 컴포넌트 언마운트 시 타이머 해제
}, [data]);
```

- `useEffect`는 컴포넌트가 렌더링된 이후(혹은 특정 상태가 변경될 때) 실행됩니다. 여기서 의존성 배열 `[data]`로 인해 `data`가 변경될 때마다 이 `useEffect`가 실행됩니다.
- **`data`가 존재할 때만 작동**:
  ```js
  if (!data) return;
  ```
  `data`가 아직 로딩되지 않은 경우 바로 반환하여 이후의 코드를 실행하지 않게 합니다.

#### 3.1 **남은 시간 계산**

```js
const { timeDifference } = data.data;
setRemainingTime(3600000 - timeDifference);
```

- 서버에서 받아온 `timeDifference`는 마지막 포인트 상자를 뽑은 이후로 경과된 시간입니다.
- 1시간(3600000ms)에서 이 `timeDifference`를 뺌으로써 남은 시간을 계산합니다.

#### 3.2 **타이머 설정**

```js
const interval = setInterval(() => {
  setRemainingTime((prevTime) => {
    if (prevTime <= 0) {
      clearInterval(interval); // 시간이 0 이하일 경우 타이머 멈춤
      return 0;
    }
    return prevTime - 1000; // 1초마다 1000ms씩 감소
  });
}, 1000);
```

- 이 `setInterval` 함수는 1초마다(`1000ms`) 실행되며, `remainingTime`을 매 초 1000ms씩 감소시킵니다.
- 남은 시간이 0 이하가 되면 `clearInterval`을 호출해 타이머를 멈춥니다. 이로써 타이머가 계속 실행되는 것을 방지합니다.
- `setInterval`로 생성된 반복 작업은 컴포넌트가 사라질 때(언마운트될 때) 종료되어야 하므로, 마지막에 `clearInterval`로 이를 정리하는 코드가 들어 있습니다.

#### 3.3 **`useEffect` Cleanup**

```js
return () => clearInterval(interval);
```

- 이 코드는 `useEffect`의 클린업 함수로, 컴포넌트가 언마운트되거나 `data`가 변경되면 기존 `interval`을 해제하는 역할을 합니다.
- 타이머가 남은 상태에서 새로 타이머를 설정할 경우 중복 실행을 방지하는 역할도 합니다.

### 4. **로딩 상태 처리**

```js
if (isLoading) return <div>Loading...</div>;
```

- 데이터를 로딩 중일 때는 `"Loading..."` 메시지를 보여줍니다.
- 이 부분은 사용자가 서버 응답을 기다리는 동안 보여지는 로딩 화면 역할을 합니다.

### 5. **시간 포맷 변환 함수**

```js
const formatTime = (milliseconds) => {
  const totalSeconds = Math.floor(milliseconds / 1000);
  const minutes = String(Math.floor(totalSeconds / 60)).padStart(2, "0");
  const seconds = String(totalSeconds % 60).padStart(2, "0");
  return `${minutes}분 ${seconds}초`;
};
```

- 이 함수는 `밀리초` 단위로 저장된 시간을 `분`과 `초`로 변환합니다.
- **`padStart(2, "0")`**: 숫자가 한 자리일 때 앞에 `0`을 붙여 두 자리로 만듭니다. 예를 들어, 5초는 `"05"`로 변환됩니다.
- 최종적으로 `minutes분 seconds초` 형태의 문자열을 반환하여 화면에 표시할 수 있게 합니다.

### 6. **타이머 출력**

```js
return (
  <div className={styles["container"]}>
    <span className={styles["text"]}>다음 기회까지 남은 시간</span>
    <span className={styles["time"]}>
      {remainingTime ? formatTime(remainingTime) : "00분 00초"}
    </span>
  </div>
);
```

- 타이머가 로딩되면 남은 시간을 `remainingTime`을 기준으로 포맷팅하여 화면에 보여줍니다.
- 만약 `remainingTime`이 `null`이거나 아직 데이터를 받지 못한 상태라면 `"00분 00초"`를 표시합니다.

### 요약

- 이 코드는 서버로부터 남은 시간을 가져온 후, 클라이언트 측에서 1초마다 시간을 감소시켜 실시간으로 남은 시간을 사용자에게 보여줍니다.
- `useEffect`를 통해 타이머 설정 및 정리를 하고, `useState`로 남은 시간을 관리하며, `setInterval`로 매 초마다 시간을 업데이트합니다.
- 포맷팅된 `분:초` 형태로 남은 시간을 화면에 출력하고, 남은 시간이 0이 되면 타이머가 자동으로 멈추게 됩니다.
