'use strict';

// 상수 정의
const LOTTO_NUMBER_COUNT = 6;
const MAX_LOTTO_NUMBER = 45;

// 요소 선택
const todaySpan = document.querySelector('#today');
const numbersDiv = document.querySelector('.lotto__numbers');
const drawButton = document.querySelector('#draw');
const resetButton = document.querySelector('#reset');

let lottoNumbers = [];

// 날짜 포맷팅 함수
const formatDate = (date) => {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  return `${year}년 ${month}월 ${day}일`;
};

// 초기화 함수
const initialize = () => {
  todaySpan.textContent = formatDate(new Date());
};

// 랜덤 숫자 초기화 함수
const resetRandomNumbers = () => {
  lottoNumbers = [];
  numbersDiv.innerHTML = '';
};

// 화면에 숫자를 그리는 함수
const paintNumber = (number) => {
  const numberDiv = document.createElement('div');
  numberDiv.classList.add('lotto__number');
  numberDiv.textContent = number;
  numbersDiv.appendChild(numberDiv);
};

// 랜덤 숫자 생성 함수
const createRandomNumbers = () => {
  // 랜덤 숫자 초기화
  resetRandomNumbers();

  // 1~45 사이의 랜덤 숫자 여섯 개를 배열에 추가
  while (lottoNumbers.length < LOTTO_NUMBER_COUNT) {
    let randomNumber = Math.floor(Math.random() * MAX_LOTTO_NUMBER) + 1;

    // 중복 숫자가 아닐 때만 숫자를 배열에 추가 & 화면에 그리기
    if (!lottoNumbers.includes(randomNumber)) {
      lottoNumbers.push(randomNumber);
      paintNumber(randomNumber);
    }
  }
};

// 이벤트 리스너 등록
drawButton.addEventListener('click', createRandomNumbers);

// 페이지 로드 시 초기화
initialize();
