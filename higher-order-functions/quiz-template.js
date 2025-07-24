/*
  문제:

*/

// 주어진 데이터

// 답변
solution = (주어진_데이터) => {
  // 여기에 답안 입력
};

// 테스트 함수
const test = (solution) => {
  const result = solution(주어진_데이터);
  const expectedResult = 정답_결과;
  const isEqual = JSON.stringify(result) === JSON.stringify(expectedResult);

  isEqual ? console.log('통과') : console.log('실패');
};

// 테스트 함수 실행
test(solution);
