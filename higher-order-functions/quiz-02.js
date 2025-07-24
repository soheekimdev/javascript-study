/*
  문제:
  다음과 같은 숫자 배열이 있습니다:
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  filter와 reduce 함수를 연속해서 사용하여 다음 작업을 수행하세요:
    1. 먼저 짝수만 필터링합니다.
    2. 그 다음, 필터링된 짝수들의 합을 계산합니다.
  결과는 하나의 숫자여야 합니다.
*/

// 주어진 데이터
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// 답변
solution1 = (numbers) => {
  return numbers.filter((number) => number % 2 === 0).reduce((acc, cur) => acc + cur);
};

solution2 = (numbers) => {
  const isEven = (number) => number % 2 === 0;
  const sum = (acc, cur) => acc + cur;

  return numbers.filter(isEven).reduce(sum, 0);
};

// 테스트 함수
const test = (solution) => {
  const result = solution(numbers);
  const expectedResult = 30;
  const isEqual = JSON.stringify(result) === JSON.stringify(expectedResult);

  isEqual ? console.log('통과') : console.log('실패');
};

// 테스트 함수 실행
test(solution1);
test(solution2);
