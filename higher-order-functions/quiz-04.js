// 문제
// 온라인 서점의 주문 데이터가 다음과 같이 있습니다:
const orders = [
  {
    id: 1,
    customerId: 1,
    books: [
      { id: 101, title: 'JavaScript 완벽 가이드', price: 45000, quantity: 1 },
      { id: 102, title: 'React 마스터하기', price: 38000, quantity: 2 },
    ],
    date: '2023-03-15',
  },
  {
    id: 2,
    customerId: 2,
    books: [
      { id: 101, title: 'JavaScript 완벽 가이드', price: 45000, quantity: 1 },
      { id: 103, title: 'Node.js 교과서', price: 35000, quantity: 1 },
    ],
    date: '2023-03-16',
  },
  {
    id: 3,
    customerId: 1,
    books: [
      { id: 103, title: 'Node.js 교과서', price: 35000, quantity: 2 },
      { id: 104, title: 'Python 데이터 분석', price: 42000, quantity: 1 },
    ],
    date: '2023-03-18',
  },
  {
    id: 4,
    customerId: 3,
    books: [
      { id: 102, title: 'React 마스터하기', price: 38000, quantity: 1 },
      { id: 105, title: 'GraphQL 입문', price: 32000, quantity: 3 },
    ],
    date: '2023-03-19',
  },
];
/*
  다음 작업을 수행하는 함수를 작성해주세요:
    1. 모든 주문에서 총 판매된 책의 수량을 계산합니다.
    2. 가장 많이 판매된 책의 제목과 총 판매 수량을 찾습니다.
    3. 각 고객별로 총 주문 금액을 계산합니다.
    4. 평균 주문 금액보다 높은 주문들의 ID를 반환합니다.
    5. 위의 모든 정보를 객체로 반환합니다.

  힌트:
    - reduce, map, filter 함수를 활용하세요.
    - 객체를 다루기 위해 Object.entries, Object.fromEntries 메서드를 사용할 수 있습니다.
    - 중첩된 배열을 다룰 때는 flatMap을 고려해보세요.
*/

// 답변
solution = (orders) => {
  // 1. 모든 주문에서 총 판매된 책의 수량을 계산
  const pickQuantity = ({ books }) => books.map((book) => book.quantity);
  const sum = (acc, cur) => acc + cur;

  const quantities = orders.map(pickQuantity);
  const totalQuantitySold = quantities.reduce(sum, 0);

  // 2. 가장 많이 판매된 책의 제목과 총 판매 수량
  //   const salesPerBook = [
  //     {title: 'JavaScript', quantity: 3},
  //     {title: 'JavaScript', quantity: 3},
  //     {title: 'JavaScript', quantity: 3},
  // ]
  const pickTitleAndPrice = ({ books }) => ({ title: books.title, quantity: books.quantity });
  const salesPerBook = orders.map(pickTitleAndPrice);

  // 3. 각 고객별로 총 주문 금액을 계산

  // 4. 평균 주문 금액보다 높은 주문들의 ID를 반환

  // 5. 위의 모든 정보를 객체로 반환
  return {
    totalQuantitySold: totalQuantitySold,
  };
};

// 테스트 함수
const test = (solution) => {
  const result = solution(orders);
  const expectedResult = '';
  const isEqual = JSON.stringify(result) === JSON.stringify(expectedResult);

  isEqual ? console.log('통과') : console.log('실패');
};

// 테스트 함수 실행
test(solution);
