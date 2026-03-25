const minutesCounter = document.getElementById("minutes-counter");
const secondsCounter = document.getElementById("seconds-counter");
const startButton = document.getElementById("start-button");
const restartButton = document.getElementById("restart-button");
let minutes = 0;
let seconds = 0;
let intervalId;

const formatTime = (time) => {
  if (time.toString().length === 1) {
    return `0${time}`;
  } else {
    return String(time);
  }
};

const startCounter = () => {
  intervalId = setInterval(() => {
    seconds++;
    if (seconds === 59) {
      seconds = 0;
      minutes++;
    }

    secondsCounter.textContent = formatTime(minutes);
    minutesCounter.textContent = formatTime(seconds);
    startButton.setAttribute("disabled", true);
    restartButton.removeAttribute("disabled");
  }, 1000);
};

const restartCounter = () => {
  clearInterval(intervalId);
  minutes = 0;
  seconds = 0;
  secondsCounter.textContent = formatTime(minutes);
  minutesCounter.textContent = formatTime(seconds);
  startButton.removeAttribute("disabled");
  restartButton.setAttribute("disabled", true);
};

startButton.addEventListener("click", startCounter);
restartButton.addEventListener("click", restartCounter);
