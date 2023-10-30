let seconds = 0;
let minutes = 0;
let timerID;
let isRunning = false; // Variable to track whether the timer is running

function updateDisplay() {
  const formattedSeconds = seconds < 10 ? `0${seconds}` : seconds;
  const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;

  document.querySelector('.js-seconds').innerHTML = formattedSeconds;
  document.querySelector('.js-minutes').innerHTML = formattedMinutes;
}

document.querySelector('.start').addEventListener('click', function () {
  if (!isRunning) { // Check if the timer is not already running
    timerID = setInterval(function () {
      if (seconds === 60) {
        seconds = 0;
        minutes++;
      } else {
        seconds++;
      }
      updateDisplay();
    }, 1000);
    
    isRunning = true; // Set the timer state to running
  }
});

document.querySelector('.stop').addEventListener('click', function () {
  clearInterval(timerID);
  isRunning = false; // Set the timer state to not running
});

document.querySelector('.reset').addEventListener('click', function () {
  clearInterval(timerID);
  minutes = 0;
  seconds = 0;
  updateDisplay();
  isRunning = false; // Set the timer state to not running
});

updateDisplay();

