//nav 버튼
const timerNav = document.querySelector('.timerNav');
const stopwatchNav = document.querySelector('.stopwatchNav');
const navBtn = document.querySelectorAll('.nav button');
// 각 구성 불러옴
const timer = document.querySelector('.timer');
const stopWatch = document.querySelector('.stopwatch');

/*
navBtn.forEach((button) => {
  button.addEventListener('click', function () {
    selectedClassAddNav(this);
    if(button === ".selected"){

    }
  });
});
*/

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

/*
//timer에 관한 애들 불러옴
const timerDisplay = document.querySelectorAll('.timer .timedisplay');
const timerBtn = document.querySelectorAll('.timer button');

//timer 화면 노출 관련 내용
timerBtn.forEach((button) => {
  button.addEventListener('click', function (e) {
    if (button.classList.contains('hourBtn')) {
      handlerClickAddTime('hour');
    } else if (button.classList.contains('minuteBtn')) {
      handlerClickAddTime('minute');
    } else if (button.classList.contains('secondBtn')) {
      handlerClickAddTime('second');
    } else if (button.classList.contains('timerReset')) {
      location.reload();
    }
  });
});

//timer 화면에 1씩 추가되는 함수
function handlerClickAddTime(type) {
  timerDisplay.forEach((timedisplay) => {
    let timeElement;

    //타입이 시간일 떄
    if (type === 'hour') {
      timeElement = document.querySelector('.time.hour');
      if (parseInt(timeElement.textContent) === 23) {
        alert('시간을 더이상 추가할 수 없습니다.');
      } else {
        timeElement.textContent = parseInt(timeElement.textContent) + 1;
      }
    }
    // 타입이 분일 떄
    else if (type === 'minute') {
      timeElement = document.querySelector('.time.minute');
      if (parseInt(timeElement.textContent) === 59) {
        alert('분을 더이상 추가할 수 없습니다.');
      } else {
        timeElement.textContent = parseInt(timeElement.textContent) + 1;
      }
    }
    // 타입이 초일때
    else if (type === 'second') {
      let timeElement = document.querySelector('.time.second');
      if (parseInt(timeElement.textContent) === 59) {
        alert('초를 더이상 추가할 수 없습니다.');
      } else {
        timeElement.textContent = parseInt(timeElement.textContent) + 1;
      }
    }
  });
}
*/
