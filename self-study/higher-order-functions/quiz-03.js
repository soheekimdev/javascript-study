/*
  문제:
  다음과 같은 제품 목록이 있습니다:
  const products = [
    { id: 1, name: "노트북", price: 1000000, category: "전자제품" },
    { id: 2, name: "티셔츠", price: 20000, category: "의류" },
    { id: 3, name: "커피머신", price: 500000, category: "주방가전" },
    { id: 4, name: "청바지", price: 50000, category: "의류" },
    { id: 5, name: "스마트폰", price: 800000, category: "전자제품" },
    { id: 6, name: "운동화", price: 80000, category: "신발" }
  ];
  
  다음 작업을 수행하는 함수를 작성해주세요:
    1. category가 "의류"인 제품만 필터링합니다.
    2. 필터링된 제품들의 가격을 10% 할인합니다.
    3. 할인된 가격이 30000원 이상인 제품만 다시 필터링합니다.
    4. 최종 결과로 제품 이름과 할인된 가격을 포함한 객체 배열을 반환합니다.

  힌트: filter, map, 그리고 메서드 체이닝을 사용하면 효과적으로 해결할 수 있습니다.
*/

// 주어진 데이터
const products = [
  { id: 1, name: '노트북', price: 1000000, category: '전자제품' },
  { id: 2, name: '티셔츠', price: 20000, category: '의류' },
  { id: 3, name: '커피머신', price: 500000, category: '주방가전' },
  { id: 4, name: '청바지', price: 50000, category: '의류' },
  { id: 5, name: '스마트폰', price: 800000, category: '전자제품' },
  { id: 6, name: '운동화', price: 80000, category: '신발' },
];

// 답변
solution = (products) => {
  const isClothesCategory = ({ category }) => category === '의류';
  const applyDiscount = ({ price, ...rest }) => ({ ...rest, price: price * 0.9 });
  const PRICE_THRESHOLD = 30000;
  const isOver30000 = ({ price }) => price > PRICE_THRESHOLD;

  const result = products
    .filter(isClothesCategory)
    .map(applyDiscount)
    .filter(isOver30000)
    .map(({ name, price }) => ({ name, price }));

  return result;
};

// 테스트 함수
const test = (solution) => {
  const result = solution(products);
  const expectedResult = [{ name: '청바지', price: 45000 }];
  const isEqual = JSON.stringify(result) === JSON.stringify(expectedResult);

  isEqual ? console.log('통과') : console.log('실패');
};

// 테스트 함수 실행
test(solution);
