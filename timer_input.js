//nav 버튼
const timerNav = document.querySelector('.timerNav');
const stopwatchNav = document.querySelector('.stopwatchNav');
const navBtn = document.querySelectorAll('.nav button');
// 각 구성 불러옴
const timer = document.querySelector('.timer');
const stopWatch = document.querySelector('.stopwatch');

// 초기 화면 고정 함수
function initialScreen(button) {
  selectedClassAddNav(button);
  stopWatch.style.display = 'none';
  timer.style.display = 'flex';
}

/*
화면이 로딩 될 때 초기값을 지정해주고 싶을 떄 사용한다.
윈도우를 클릭 했을 때 DOMContentLoaded 를 실행한다. 
event 라는 매개변수를 받으면 initialScreen() 함수를 실행한다한다.
*/

window.addEventListener('DOMContentLoaded', (event) => {
  initialScreen(timerNav);
});

//nav 버튼을 눌렀을 때
// 화살표 함수에선 this 가 새로운 this 를 생성하지 않고, 외부에서 참조온다
// 그래서 외부에 this가 없어서 참조가 안 되서 실행이 안 됐던 것이다.
timerNav.addEventListener('click', function () {
  selectedClassAddNav(this);
  stopwatchNav.classList.remove('selected');
  stopWatch.style.display = 'none';
  timer.style.display = 'flex';
});

stopwatchNav.addEventListener('click', function () {
  selectedClassAddNav(this);
  timerNav.classList.remove('selected');
  timer.style.display = 'none';
  stopWatch.style.display = 'flex';
});

//버튼이 활성화된 함수
function selectedClassAddNav(button) {
  button.classList.add('selected');
}

//timer 숫자가 잘못 입력 됐을 때 경고창
const timerInput = document.querySelectorAll('.tmDis input');

timerInput.forEach(function (input) {
  input.addEventListener('input', function () {
    if (
      (input.classList.contains('hour') && parseInt(input.value) > 23) ||
      parseInt(input.value) < 0
    ) {
      alert('0부터 23사이의 숫자를 입력해주세요.');
      input.value = '00';
    } else if (
      (input.classList.contains('minute') && parseInt(input.value) > 59) ||
      parseInt(input.value) < 0
    ) {
      alert('0부터 59사이의 숫자를 입력해주세요.');
      input.value = '00';
    } else if (
      (input.classList.contains('second') && parseInt(input.value) > 59) ||
      parseInt(input.value) < 0
    ) {
      alert('0부터 59사이의 숫자를 입력해주세요.');
      input.value = '00';
    }
  });
});

//stopwatch 숫자가 잘못 입력 됐을 때 경고창
const stopwatchInput = document.querySelectorAll('.swDis input');

stopwatchInput.forEach(function (input) {
  input.addEventListener('input', function () {
    if (
      (input.classList.contains('hour') && parseInt(input.value) > 23) ||
      parseInt(input.value) < 0
    ) {
      alert('0부터 23사이의 숫자를 입력해주세요.');
      input.value = '00';
    } else if (
      (input.classList.contains('minute') && parseInt(input.value) > 59) ||
      parseInt(input.value) < 0
    ) {
      alert('0부터 59사이의 숫자를 입력해주세요.');
      input.value = '00';
    } else if (
      (input.classList.contains('second') && parseInt(input.value) > 59) ||
      parseInt(input.value) < 0
    ) {
      alert('0부터 59사이의 숫자를 입력해주세요.');
      input.value = '00';
    }
  });
});

//timer start 버튼이 눌렸을 떄
const timerStartBtn = document.querySelector('.timerStart');
const timerStopBtn = document.querySelector('.timerStop');

timerStartBtn.addEventListener('click', function () {
  console.log('시작!');
});

//timer stop 버튼이 눌렸을 때
timerStopBtn.addEventListener('click', function () {
  console.log('종료!');
  alert('타임 아웃!');
});

//start 버튼이 눌렸을 때 시간이 감소되는 함수

let second = document.querySelector('.time_second');
const Interval = setInterval(function (time) {
  if (parseInt(time.value) > 0) {
    second.value = parseInt(time.value) - 1;
  } else if (parseInt(time.value) === 0) {
    alert('타이머가 종료되었습니다!');
    clearInterval(Interval);
  }
}, 1000);

//stop 버튼이 눌렸을 때 시간이 멈추는 함수
