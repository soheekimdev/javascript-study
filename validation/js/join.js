'use strict';

/*
과제: 
  1. 제출 이벤트를 받는다 (이벤트 핸들링)
  2. 제출된 입력 값들을 참조한다
  3. 입력값에 문제가 있는 경우 이를 감지한다
  4. 가입 환영 인사를 제공한다
*/

// ------ 문자 구분 정규식 객체 ------
const letterCheck = {
  checkEngAll: /[a-zA-Z]/,
  checkEngA: /[A-Z]/,
  checkEnga: /[a-z]/,
  checkNum: /[0-9]/,
  checkSpc: /[~!@#$%^&*()_+|<>?:{}]/,
  checkKor: /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/,
  // TODO: 일부 특수문자만 허용하려면?
};

// ------ 요소 선택 ------
const form = document.getElementById('form');
const btnSubmit = document.getElementById('btnSubmit');

// TODO: form field 객체 선택 과정을 간소화할 방법?
const userId = form.id;
const userPw1 = form.pw1;
const userPw2 = form.pw2;
const userName = form.name;
const userPhone = form.phone;
const userPosition = form.position;
const userGender = form.gender;
const userEmail = form.email;
const userIntro = form.intro;

// ------ 유효성 검사 ------
let isValid = false;

// TODO: 각 필드 별 유효성 검사 반복 코드 간소화
// 아이디 유효성 검사
// 조건: 5~13자 AND 영문 소문자 (+ 숫자) (대문자 영어, 한글 및 특수문자 입력 불가능)
userId.addEventListener('blur', function () {
  const value = this.value;
  const errMsg = document.getElementById(userId.id + 'Err');

  if (
    value.length >= 5 &&
    value.length <= 13 &&
    letterCheck.checkEnga.test(value) &&
    !letterCheck.checkEngA.test(value) &&
    !letterCheck.checkKor.test(value) &&
    !letterCheck.checkSpc.test(value)
  ) {
    isValid = true;
    errMsg.style.display = 'none';
  } else {
    isValid = false;
    errMsg.innerHTML = '5~13자의 영문 소문자, 숫자를 입력해주세요.';
    errMsg.style.display = 'block';
  }
});

// 비밀번호 유효성 검사
// 조건: 8~30자 AND 영문 AND 숫자 AND 특수문자
userPw1.addEventListener('blur', function () {
  const value = this.value;
  const errMsg = document.getElementById(userPw1.id + 'Err');

  if (
    value.length >= 8 &&
    value.length <= 30 &&
    letterCheck.checkEngAll.test(value) &&
    letterCheck.checkNum.test(value) &&
    letterCheck.checkSpc.test(value)
  ) {
    isValid = true;
    errMsg.style.display = 'none';
  } else {
    isValid = false;
    errMsg.innerHTML = '8~30자의 영문, 숫자, 특수문자를 입력해주세요.';
    errMsg.style.display = 'block';
  }
});

// 비밀번호 확인 유효성 검사
// 조건: 비밀번호 입력값과 동일
userPw2.addEventListener('blur', function () {
  const value = this.value;
  const errMsg = document.getElementById(userPw2.id + 'Err');

  if (value === userPw1.value) {
    isValid = true;
    errMsg.style.display = 'none';
  } else {
    isValid = false;
    errMsg.innerHTML = '동일한 비밀번호를 입력해주세요.';
    errMsg.style.display = 'block';
  }
});

console.log(isValid);

// ------ 폼 제출 이벤트 핸들러 ------
form.addEventListener('submit', function (e) {
  e.preventDefault();
  //
});
