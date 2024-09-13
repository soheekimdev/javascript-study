'use strict';
/* -----------------------------------------------------------------------------*/
// <요구사항>
// 1. input에 트윗을 입력하고 '게시'버튼을 누르면 트윗이 생성되어야 합니다.
// 2. 생성된 트윗은 게시글, 좋아요 버튼, 좋아요 카운트하는 요소를 포함해야 합니다.
// 3. input에 아무것도 입력되어 있지 않으면 트윗이 생성되지 않아야 합니다. (if문)
// 4. 좋아요 버튼을 클릭하면 좋아요 카운트가 1씩 증가해야 합니다.
// 5. styles.css 파일을 보고 새롭게 생성한 요소에 class를 추가하면 미리 작성해둔 스타일이 적용됩니다.
// 6. 스타일은 마음껏 수정해도 좋습니다.
/* -----------------------------------------------------------------------------*/

// 요소 선택
const tweetButton = document.querySelector('#postTweet'); // 트윗 게시 버튼 요소
const tweetInput = document.querySelector('#tweetInput'); // 트윗을 입력할 input 요소
const tweetsContainer = document.querySelector('#tweets_container'); // 트윗이 게시될 컨테이너
const likeButton = document.querySelector('.like-button');
const likeCount = document.querySelector('.like-counter');

// 입력값 유무에 따른 '게시' 버튼 비활성화 여부 처리
const handleTweetButtonState = () => {
  tweetInput.value.trim() ? (tweetButton.disabled = false) : (tweetButton.disabled = true);
};

// 트윗 요소 생성 함수
const createTweetElement = (content) => {
  const tweet = document.createElement('div');
  tweet.classList.add('tweet');

  const tweetContent = document.createElement('p');
  tweetContent.classList.add('tweet-text');
  tweetContent.textContent = content;

  const tweetLikeButton = document.createElement('button');
  tweetLikeButton.classList.add('like-button');
  tweetLikeButton.textContent = '♥';

  const tweetLikeCount = document.createElement('p');
  tweetLikeCount.classList.add('like-counter');
  tweetLikeCount.textContent = 0;

  tweet.appendChild(tweetContent);
  tweet.appendChild(tweetLikeButton);
  tweet.appendChild(tweetLikeCount);

  return tweet;
};

// 트윗 추가 함수
const addTweet = () => {
  const inputValue = tweetInput.value.trim(); // 사용자 입력 값
  const tweet = createTweetElement(inputValue);
  tweetsContainer.appendChild(tweet);
  tweetInput.value = ''; // 사용자 입력 값 초기화
  handleTweetButtonState();
};

// 좋아요 카운트 핸들링 함수
const handleLikeCount = (event) => {
  if (event.target.classList.contains('like-button')) {
    const likeCountEl = event.target.nextSibling;
    const likeCount = parseInt(likeCountEl.textContent);
    likeCountEl.textContent = likeCount + 1;
  }
};

// 트윗 게시 버튼 이벤트 핸들링
tweetButton.addEventListener('click', addTweet);

// 입력 값 변경 시 버튼 상태 업데이트
tweetInput.addEventListener('input', handleTweetButtonState);

// 좋아요 카운트 핸들링
tweetsContainer.addEventListener('click', handleLikeCount);
