'use strict';

/*
요구사항: 
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
  checkEmail: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  // TODO: 일부 특수문자만 허용하려면?
};

// ------ 요소 선택 ------
const container = document.querySelector('.join');
const form = document.getElementById('form');
const btnSubmit = document.getElementById('btnSubmit');

// ------ form field 객체 리스트 ------
const fieldList = [
  {
    name: 'id',
    condition: (value) =>
      value.length >= 5 &&
      value.length <= 13 &&
      letterCheck.checkEnga.test(value) &&
      !letterCheck.checkEngA.test(value) &&
      !letterCheck.checkKor.test(value) &&
      !letterCheck.checkSpc.test(value),
    errMsg: '5~13자의 영문 소문자, 숫자를 입력하세요.',
  },
  {
    name: 'pw1',
    condition: (value) =>
      value.length >= 8 &&
      value.length <= 30 &&
      letterCheck.checkEngAll.test(value) &&
      letterCheck.checkNum.test(value) &&
      letterCheck.checkSpc.test(value),
    errMsg: '8~30자의 영문, 숫자, 특수문자를 입력하세요.',
  },
  {
    name: 'pw2',
    condition: (value, form) => value === form.elements['pw1'].value,
    errMsg: '동일한 비밀번호를 입력하세요.',
  },
  {
    name: 'name',
    condition: (value) => value.trim() !== '',
    errMsg: '이름을 입력하세요.',
  },
  {
    name: 'phone',
    condition: (value) => value.trim() !== '',
    errMsg: '휴대폰 번호를 입력하세요.',
  },
  {
    name: 'position',
    condition: (value) => value.trim() !== '',
    errMsg: '원하는 직무를 선택하세요.',
  },
  {
    name: 'email',
    condition: (value) => letterCheck.checkEmail.test(value),
    errMsg: '유효한 이메일 주소를 입력하세요.',
  },
  {
    name: 'intro',
    condition: (value) => value.trim() !== '',
    errMsg: '자기소개를 입력하세요.',
  },
];

// ------ 유효성 검사 ------
let fieldValidStatus = {};
fieldList.forEach((field) => {
  fieldValidStatus[field.name] = false;
});

// 가입하기 버튼 상태 업데이트 함수
const updateSubmitButtonState = () => {
  const allFieldsValid = Object.values(fieldValidStatus).every((status) => status === true);
  btnSubmit.disabled = !allFieldsValid;
};

// 유효성 검사 함수
const validCheck = (field, form) => {
  const el = form.elements[field.name];
  const value = el.value;
  const errMsgEl = document.getElementById(el.id + 'Err');

  if (field.condition(value, form)) {
    errMsgEl.style.display = 'none';
    fieldValidStatus[field.name] = true;
  } else {
    errMsgEl.innerHTML = field.errMsg;
    errMsgEl.style.display = 'block';
    fieldValidStatus[field.name] = false;
  }

  updateSubmitButtonState();
  return fieldValidStatus[field.name];
};

// 각 필드에 대해 유효성 검사 진행
fieldList.forEach((field) => {
  const el = form.elements[field.name];
  el.addEventListener('blur', () => validCheck(field, form));
});

// ------ 폼 제출 이벤트 핸들러 ------
form.addEventListener('submit', function (e) {
  e.preventDefault();

  console.log(form.elements[id]);

  container.innerHTML = `
    <h1>회원가입이 완료되었습니다</h1>
    <p>회원가입 시 입력하신 정보는 다음과 같습니다.</p>
    <ul>
      <li>아이디: ${form.elements['id'].value}</li>
      <li>이름: ${form.elements['name'].value}</li>
      <li>휴대폰 번호: ${form.elements['phone'].value}</li>
      <li>원하는 직무: ${form.elements['position'].value}</li>
      <li>이메일: ${form.elements['email'].value}</li>
      <li>자기소개: ${form.elements['intro'].value}</li>
    </ul>
  `;
});
