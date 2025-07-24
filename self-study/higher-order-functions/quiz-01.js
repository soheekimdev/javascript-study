/*
  문제:
  다음과 같은 객체 배열이 있습니다:
  const people = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 35 },
    { name: "David", age: 28 }
  ];
  
  map 함수를 사용하여 각 사람의 이름만 포함하는 새로운 배열을 만드세요.
*/

// 주어진 데이터
const people = [
  { name: 'Alice', age: 25 },
  { name: 'Bob', age: 30 },
  { name: 'Charlie', age: 35 },
  { name: 'David', age: 28 },
];

// 답변
const solution1 = (people) => {
  return people.map((person) => person.name);
};

const solution2 = (people) => {
  const names = people.map((person) => person.name);
  return names;
};

const solution3 = (people) => {
  const names = people.map(({ name }) => name);
  return names;
};

// 테스트 함수
const test = (solution) => {
  const result = solution(people);
  const expectedResult = ['Alice', 'Bob', 'Charlie', 'David'];
  const isEqual = JSON.stringify(result) === JSON.stringify(expectedResult);

  isEqual ? console.log('통과') : console.log('실패');
};

// 테스트 함수 실행
test(solution1);
test(solution2);
test(solution3);

/*
  메모: 구조 분해 할당을 사용할 때의 장단점

  장점:
  코드 간결성: 객체나 배열에서 원하는 속성만 쉽게 추출할 수 있어 코드가 더 간결해진다.
  가독성 향상: 어떤 속성을 사용하는지 명확하게 볼 수 있어 코드의 의도를 더 쉽게 파악할 수 있다.
  변수 생성 용이: 객체의 속성을 동일한 이름의 변수로 쉽게 생성할 수 있다.
  기본값 설정: 구조 분해 할당 시 기본값을 설정할 수 있어, 속성이 undefined일 때 대체값을 사용할 수 있다.
  중첩 객체 처리: 복잡한 중첩 객체에서도 원하는 속성을 쉽게 추출할 수 있다.

  단점:
  학습 곡선: 처음 접하는 개발자에게는 익숙해지는 데 시간이 필요할 수 있다.
  과도한 사용: 너무 많은 속성을 한 번에 구조 분해하면 코드가 복잡해질 수 있다.
  성능: 매우 큰 객체에서 많은 속성을 구조 분해할 경우, 미세한 성능 저하가 있을 수 있다(일반적으로 무시할 만한 수준).
  타입 정보 손실: TypeScript와 같은 정적 타입 언어에서는 구조 분해 후 원래 객체의 타입 정보가 손실될 수 있다.
  런타임 오류 가능성: 존재하지 않는 속성을 구조 분해하려고 하면 런타임 에러가 발생할 수 있다.
*/
