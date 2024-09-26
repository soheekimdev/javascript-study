'use strict';

const apiRandomDogs = 'https://dog.ceo/api/breeds/image/random/42';
const apiAllBreeds = 'https://dog.ceo/api/breeds/list/all';
const request1 = new XMLHttpRequest();
const request2 = new XMLHttpRequest();

const header = document.getElementById('header');
const main = document.getElementById('main');
const input = document.getElementById('filter-text');
const filterButton = document.getElementById('filter-button');
const select = document.getElementById('filter-select');
const resetButton = document.getElementById('reset-button');
const more = document.getElementById('more');
const tothetop = document.getElementById('tothetop');

const currentDogs = [];

const displayDogs = (item) => {
  const dogImgDiv = document.createElement('div');
  dogImgDiv.classList.add('flex-item');
  dogImgDiv.innerHTML = `<img src=${item}>`;
  main.appendChild(dogImgDiv);
};

const fetchAndDisplayDogs = () => {
  request1.open('get', apiRandomDogs);
  request1.addEventListener('load', () => {
    const response = JSON.parse(request1.response);
    currentDogs.length = 0;
    response.message.forEach((item) => {
      currentDogs.push(item);
      displayDogs(item);
    });
  });
  request1.send();
};

window.addEventListener('load', () => {
  // 강아지 사진 뿌리기
  fetchAndDisplayDogs();

  // 셀렉트에 견종 정보 뿌리기
  request2.open('get', apiAllBreeds);
  request2.addEventListener('load', () => {
    const response = JSON.parse(request2.response);
    Object.keys(response.message).forEach((item) => {
      const option = document.createElement('option');
      option.textContent = item;
      option.value = item;
      select.appendChild(option);
    });
  });
  request2.send();
});

filterButton.addEventListener('click', () => {
  main.innerHTML = '';
  let filteredDogs = currentDogs.filter((item) => {
    return item.includes(input.value);
  });
  input.value = '';
  filteredDogs.forEach(displayDogs);
});

select.addEventListener('change', () => {
  main.innerHTML = '';
  let filteredDogs = currentDogs.filter((item) => {
    return item.includes(select.value);
  });
  filteredDogs.forEach(displayDogs);
});

resetButton.addEventListener('click', () => {
  main.innerHTML = '';
  fetchAndDisplayDogs();
});

more.addEventListener('click', () => {
  request1.open('get', apiRandomDogs);
  request1.addEventListener('load', () => {
    const response = JSON.parse(request1.response);
    response.message.forEach((item) => {
      currentDogs.push(item);
      displayDogs(item);
    });
  });
  request1.send();
});

tothetop.addEventListener('click', () => {
  window.scrollTo({ top: 0 });
});
