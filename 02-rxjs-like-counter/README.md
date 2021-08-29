# functional component TODO
함수형 컴포넌트로 TODO list 만들기

## 의존성
- ESLint
- Jest
- Dom-Testing-Library
- Babel -> ES6 module, async / await
- serve -> html

## 계획
### 1. DOM element 를 생성하는 함수 만들기
- 목적: 렌더링을 위한 돔 조작 코드를 최소화하고, DSL 처럼 활용하기 위함.

- 예시
```javascript
$.h1('Hello, World')
$.form('', {},
  $.label(),
  $.input(),
)
```

### 2. service
비즈니스 로직을 담는 service 를 분리해주기.

### 3. store
상태를 저장하는 store 를 분리해주기.

## 반성
### 1. services 와 view update 결합
비즈니스 로직이 격리되지 못하고, 화면에 관련한 함수를 같이 실행함.

### 2. index.js 에서 export
store 에서 view 를 업데이트 해주기 위해, 
index 에서 update 함수를 export 하는 만행을 저지름.
store 를 초기화 하고 업데이트 함수를 건네주는 역할을 하는 것이 적절.
