// Monica Sanchez 4-27-25
// Adapted from https://javasript.com/
// Countdown Timer
/* New/expanded information:
    clearInterval(countdown), Math.round(),
    parseInt(this.dataset.time)
*/
let countdown;
//added code to stop timer
let isPaused = false;
let secondsLeft;
const timerDisplay = document.querySelector('.display__time-left');
const endTime = document.querySelector('.display__end-time');
const buttons = document.querySelectorAll('[data-time]');

function timer(seconds) {
  // clear any existing timers
  clearInterval(countdown);

  const now = Date.now();
  const then = now + seconds * 1000;
  displayTimeLeft(seconds);
  displayEndTime(then);

//added code to save seconds
  secondsLeft = seconds;
  countdown = setInterval(() => {
    if (!isPaused) {
      secondsLeft--; // Decrease only when not paused
      if (secondsLeft < 0) {
        clearInterval(countdown);
        return;
      }
      displayTimeLeft(secondsLeft);
    }
  }, 1000);
}  
  /*countdown = setInterval(() => {
    const secondsLeft = Math.round((then - Date.now()) / 1000);
    // check if we should stop it!
    if(secondsLeft < 0) {
      clearInterval(countdown);
      return;
    }
    // display it
    displayTimeLeft(secondsLeft);
  }, 1000);
}*/

//added new function to handle pause/resume
function togglePauseResume() {
  if (!countdown) return; // No active timer

  isPaused = !isPaused;
  const button = document.getElementById('pause-resume');
  button.textContent = isPaused ? 'Resume' : 'Pause';
}

function displayTimeLeft(seconds) {
  const minutes = Math.floor(seconds / 60);
  const remainderSeconds = seconds % 60;
  const display = `${minutes}:${remainderSeconds < 10 ? '0' : '' }${remainderSeconds}`;
  document.title = display;
  timerDisplay.textContent = display;
}

function displayEndTime(timestamp) {
  const end = new Date(timestamp);
  const hour = end.getHours();
  const adjustedHour = hour > 12 ? hour - 12 : hour;
  const minutes = end.getMinutes();
  endTime.textContent = `Be Back At ${adjustedHour}:${minutes < 10 ? '0' : ''}${minutes}`;
}

function startTimer() {
  const seconds = parseInt(this.dataset.time);
  timer(seconds);
}

//added event listener for pause/resume button
document.getElementById('pause-resume').addEventListener('click', togglePauseResume);

buttons.forEach(button => button.addEventListener('click', startTimer));
document.customForm.addEventListener('submit', function(e) {
  e.preventDefault();
  const mins = this.minutes.value;
  console.log(mins);
  timer(mins * 60);
  this.reset();
});
