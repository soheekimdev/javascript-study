'use strict';

// 요소 선택 및 상수 설정
const todoForm = document.getElementById('todo-form');
const button = document.getElementById('add-button');
const todoList = document.getElementById('todo-list');
let todoArr = [];

// 할 일 추가 버튼 상태 관리
const handleButtonState = () => {
  const value = todoForm.todo.value;
  if (value) {
    button.disabled = false;
  } else {
    button.disabled = true;
  }
};

// 할 일 보여주기
const displayTodos = () => {
  todoList.innerHTML = '';
  todoArr.forEach((todo) => {
    const todoItem = document.createElement('li');
    const todoDeleteButton = document.createElement('button');
    todoItem.textContent = todo.todoText;
    todoItem.classList.add('todo-item');
    if (todo.todoDone) {
      todoItem.classList.add('done');
    }
    todoItem.dataset.todoId = todo.todoId;
    todoDeleteButton.textContent = 'x';
    todoDeleteButton.ariaLabel = '삭제 버튼';
    todoDeleteButton.classList.add('delete-button');
    todoDeleteButton.dataset.todoId = todo.todoId;
    todoItem.appendChild(todoDeleteButton);
    todoList.appendChild(todoItem);
  });
};

// 할 일 추가하기
const addTodo = (text) => {
  const toBeAdded = {
    todoText: text,
    todoId: new Date().getTime(),
    todoDone: false,
  };
  todoArr.push(toBeAdded);
  displayTodos();
  saveTodos();

  todoForm.todo.value = '';
  handleButtonState();
};

// 할 일 완료하기
const doneTodo = (clickedId) => {
  todoArr = todoArr.map((todo) => {
    if (todo.todoId === clickedId) {
      return {
        ...todo,
        todoDone: !todo.todoDone,
      };
    } else {
      return todo;
    }
  });
  displayTodos();
  saveTodos();
};

// 할 일 삭제하기
const deleteTodo = (clickedId) => {
  todoArr = todoArr.filter((todo) => {
    return todo.todoId !== clickedId;
  });
  displayTodos();
  saveTodos();
};

// 이벤트 리스너 등록
todoForm.addEventListener('submit', (event) => {
  event.preventDefault();
  addTodo(todoForm.todo.value);
});
todoForm.todo.addEventListener('keyup', handleButtonState);
todoList.addEventListener('click', (event) => {
  if (event.target.classList.contains('delete-button')) {
    const todoId = parseInt(event.target.dataset.todoId);
    deleteTodo(todoId);
  }
});
todoList.addEventListener('click', (event) => {
  if (event.target.classList.contains('todo-item')) {
    const todoId = parseInt(event.target.dataset.todoId);
    doneTodo(todoId);
  }
});

// 로컬 저장소에 저장하기
const saveTodos = () => {
  const todoString = JSON.stringify(todoArr);
  localStorage.setItem('myTodos', todoString);
};

// 로컬 저장소에서 가져오기
const loadTodos = () => {
  const myTodos = localStorage.getItem('myTodos');
  todoArr = JSON.parse(myTodos);
  displayTodos();
};
loadTodos();
