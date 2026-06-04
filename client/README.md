# Components

## ProductSection

### states

- products
- name
- price
- error

### functions

- handleAdd
- handleDelete

### views

```
<div>
  <input />
  <input />
  <button />
  {error}
  <ul>
    {products.map(product => <li />)}
  </ul>
</div>
```

# 현재의 문제점?

- 한 컴포넌트의 책임이 섞여있고, 테스트하기 어려움
- 테스트하기 어려운 이유?
  - 너무 많은 기능들이 한 컴포넌트에 있어서
  - 비즈니스 로직, api, 상태관리가 전부 handle 함수가 담당하고 있음 -> handle함수의 관심사 분리가 필요함!
- ProductSection이 가지는 역할(서로 다른 변경 이유를 가진 책임)!
  - 서버(외부)에서 데이터를 주고받는 역할 (api 함수) -> 온 결과를 전달만 해주고, 에러처리 해주고
  - 서버에서 받아온 데이터를 검증하고 저장하는 역할 (훅)
  - Form 데이터를 검증하고 관리하는 역할 (훅)
  - 상품 도메인 규칙에 맞게 검증하는 역할 (함수)
  - UI/UX를 보여주는 역할 (컴포넌트)
