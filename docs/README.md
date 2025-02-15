## 요구 사항

1. 반환되는 동전 최소화
2. 상단에는 탭 메뉴가 존재
   1. 상품관리 : 자판기에 상품 추가 기능
   2. 잔돈 충전 : 자판기 보유할 금액 충전
   3. 상품 구매 : 금액 투입, 상품 구매, 잔돈 반환

### 상품 관리

1. 처음엔 목록이 비워져 있음.
2. 상품명, 가격, 수량을 입력 -> 상품 추가
3. 가격은 100원부터 시작, 10원으로 나누어 떨어져야 함.
4. 사용자는 추가한 상품을 볼 수 있다.

### 잔돈 충전

1. 처음 각 동전의 개수는 0개
2. 입력 요소에 금액 입력 -> 자판기 보유 금액 충전 `{금액}원`
3. 동전의 개수는 `{개수}개` 형식
4. 추가 충전 금액 만큼 동전이 `무작위 생성`, 기존 동전에 더해진다.
5. 구매할 때 투입 금액이랑 관계X

### 상품 구매

1. 충전 금액은 0원에서 시작
2. 투입하기
   1. 10원으로 나누어 떨어지는 금액만 투입
   2. 금액은 `{금액}원` 형식
   3. 금액은 누적으로 투입할 수 있다.
   4. 품절된 상품의 `구매하기` 버튼은 disabled 되어야 한다.
   5. 사용자는 `반환하기` 버튼을 통해 잔돈을 반환
   6. 잔돈을 돌려줄 때는 현재 보유한 최소 개수의 동전
   7. 지폐는 없다
   8. 반환할 수 있는 금액만 반환
   9. 동전의 개수를 나타내는 정보는 `{개수}개` 형식
