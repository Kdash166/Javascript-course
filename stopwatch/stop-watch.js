let miliseconds = 0;
let seconds = 0;
let minutes = 0;
let timerID;
let isRunning = false;

function updateDisplay() {
  const formattedMiliSeconds = miliseconds < 10 ? `0${miliseconds}` : miliseconds;
  const formattedSeconds = seconds < 10 ? `0${seconds}` : seconds;
  const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;

  document.querySelector(".js-seconds").innerHTML = formattedSeconds;
  document.querySelector(".js-minutes").innerHTML = formattedMinutes;
  document.querySelector(".js-miliseconds").innerHTML = formattedMiliSeconds;
}

document.querySelector(".start").addEventListener("click", function () {
  if (!isRunning) {
    timerID = setInterval(function () {
      if (miliseconds === 99) {
        miliseconds = 0;
        seconds++;
      } else {
        miliseconds++;
      }
      if (seconds === 59) {
        seconds = 0;
        minutes++;
      }
      updateDisplay();
    }, 10);

    isRunning = true;
  }
});

document.querySelector(".stop").addEventListener("click", function () {
  clearInterval(timerID);
  isRunning = false;
});

document.querySelector(".reset").addEventListener("click", function () {
  clearInterval(timerID);
  minutes = 0;
  seconds = 0;
  miliseconds = 0;
  updateDisplay();
  isRunning = false;
});

updateDisplay();
