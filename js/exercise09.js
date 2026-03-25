// p mostrando el 10
// button escuchar evento
// descontar 1 al 10
// condicion : cuando llegue a cero affihcez message

const numberCountdown = document.getElementById("number-countdown");

const buttonGo = document.getElementById("button-go");

let countdownValue = Number(numberCountdown.textContent);

let finalMessage = document.getElementById("final-message");

let intervalId;

buttonGo.addEventListener("click", () => {
  intervalId = setInterval(() => {
    countdownValue--;
    numberCountdown.textContent = countdownValue;
    if (countdownValue === 0) {
      finalMessage.textContent = "Terminé !";
      countdownValue = 11;
      stopInterval();
    }
  }, 1000);
  console.log("count", countdownValue);
});

const stopInterval = () => {
  clearInterval(intervalId);
};
