// generar el numero
// recuperar los elemntos
// evento click
// condicion numero = my guess / mensaje

const formGuess = document.getElementById("guess-form");
const resultMessage = document.getElementById("message");
const resetButton = document.getElementById("reset-button");

const getRandomIntInclusive = (min, max) => {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
};

const randomNumber = getRandomIntInclusive(1, 10);
console.log(randomNumber);

formGuess.addEventListener("submit", (event) => {
  event.preventDefault();
  const data = new FormData(formGuess);
  const myNumber = data.get("guessInput");

  if (myNumber == randomNumber) {
    resultMessage.textContent = `Bravo ! Le nombre était ${randomNumber}`;
  } else if (myNumber < randomNumber) {
    resultMessage.textContent = "trop bas";
  } else {
    resultMessage.textContent = "trop haut";
  }
});

resetButton.addEventListener("click", () => {
  location.reload();
});
