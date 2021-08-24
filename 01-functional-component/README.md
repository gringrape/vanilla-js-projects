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
