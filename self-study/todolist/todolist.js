'use strict';

// DOM 요소 선택
const form = document.getElementById('todo-form');
const input = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');

// 할 일 삭제하기
const deleteTodo = (e) => {
  const li = e.target.closest('li');
  li.remove();
};

// 새 할 일 추가하기
const addTodo = (e) => {
  e.preventDefault(); // 기본 제출 동작 방지

  const todoText = input.value.trim();
  if (todoText === '') return; // 빈 입력 방지

  // 새로운 투두 아이템 생성
  const li = document.createElement('li');
  const label = document.createElement('label');
  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  const span = document.createElement('span');
  span.textContent = todoText;
  const deleteButton = document.createElement('button');
  deleteButton.textContent = '삭제';
  deleteButton.className = 'btn-delete';
  deleteButton.addEventListener('click', deleteTodo); // 삭제 버튼에 이벤트 리스너 추가

  label.appendChild(checkbox);
  label.appendChild(span);
  li.appendChild(label);
  li.appendChild(deleteButton);
  todoList.appendChild(li);

  input.value = ''; // 입력 필드 초기화
};

// 이벤트 리스너 추가
form.addEventListener('submit', addTodo);

// TODO: 할 일 삭제 기능 추가: 각 항목에 삭제 버튼을 추가하고, 클릭 시 해당 항목을 제거
// TODO: 체크박스 상태 변경 처리: 체크된 항목의 텍스트에 취소선을 추가
// TODO: 에러 처리: 입력값의 최대 길이를 제한하거나, 특수문자를 필터링하는 등의 추가적인 유효성 검사를 고려해볼 수 있습니다.
// TODO: 로컬 스토리지 사용: 브라우저를 닫았다 열어도 할 일 목록이 유지되도록 로컬 스토리지를 사용할 수 있습니다.
// TODO: css 스타일링
