'use strict';

// 0. 버튼을 클릭했을 때 실행되는 이벤트 함수입니다.
document.getElementById('add-btn').addEventListener('click', function () {
  /* ------ 과제 ------
    1. index.html에 있는 input 요소에 입력된 값(value)과 button 요소를 변수에 할당합니다.
    2. 새로운 li요소를 만들고 input 요소에 입력된 값을 textContent로 갖도록 합니다.
    3. li 요소는 클릭하면 해당 li 요소가 지워지는 delete 버튼을 가지고 있어야 합니다. (버튼이 실제로 동작하지 않아도 괜찮습니다.)
    4. 입력창은 초기화되어야 합니다.
    5. 만약 입력창에 아무것도 입력하지 않은 경우 alert로 유저에게 입력을 요청해야 합니다.

    심화1) 입력한 TO-DO가 Local Storage에 저장되어 새로 고침 후에도 유지되도록 해보세요.
    심화2) 할 일 항목에 완료 표시를 할 수 있는 체크박스를 추가해 보세요.
    심화3) TO-DO 리스트를 드래그 앤 드롭으로 정렬할 수 있는 방법을 검색하고 적용해 보세요.
  */

  /* ------ 풀이 ------ */
  // 요소 선택
  const input = document.getElementById('todo-input');
  const btn = document.getElementById('add-btn');
  const ul = document.getElementById('todo-list');

  // 사용자 입력 값
  const value = input.value;

  // 사용자 입력 값 검증
  if (!value.trim()) {
    alert('할 일을 입력하세요.');
    return;
  }

  // 사용자 입력 값으로 새로운 li 요소 추가
  const li = document.createElement('li');

  const span = document.createElement('span');
  span.textContent = value;
  li.appendChild(span);

  const check = document.createElement('input');
  check.type = 'checkbox';
  check.classList.add('check');
  li.appendChild(check);

  const btnDel = document.createElement('button');
  btnDel.textContent = '삭제';
  btnDel.classList.add('delete-btn');
  li.appendChild(btnDel);

  ul.appendChild(li);

  // 인풋 값 초기화
  input.value = '';
});
