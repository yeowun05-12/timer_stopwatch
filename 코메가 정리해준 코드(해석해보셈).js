//nav 버튼
const navBtns = document.querySelectorAll('.nav button'); // 모든 버튼 가져오기
const timer = document.querySelector('.timer');
const stopWatch = document.querySelector('.stopwatch');

// 초기 화면 고정 함수
function initialScreen(button) {
  selectedClassAddNav(button);
  stopWatch.style.display = 'none';
  timer.style.display = 'flex';
}

// 버튼 활성화 함수
function selectedClassAddNav(button) {
  // 모든 버튼에서 'selected' 클래스 제거
  navBtns.forEach((btn) => btn.classList.remove('selected'));
  button.classList.add('selected'); // 클릭된 버튼에 추가
}

// 화면 전환 함수
function switchScreen(button) {
  //.contains 대상 문자열에 특정 문자열이 포함되어있는지를 확인하는 역할을 한다.
  if (button.classList.contains('timerNav')) {
    timer.style.display = 'flex';
    stopWatch.style.display = 'none';
  } else if (button.classList.contains('stopwatchNav')) {
    stopWatch.style.display = 'flex';
    timer.style.display = 'none';
  }
}

// 모든 버튼에 클릭 이벤트 추가
navBtns.forEach((button) => {
  button.addEventListener('click', function () {
    selectedClassAddNav(this);
    switchScreen(this);
  });
});

// 초기 화면 설정
window.addEventListener('DOMContentLoaded', () => {
  initialScreen(document.querySelector('.timerNav')); // 초기 버튼 설정
});
