const screenResult = document
  .getElementById("screen-result")
  .getElementsByTagName("input")[0];

const message = document.getElementById("message");

const keyPadNumbers = document
  .getElementById("keypad")
  .querySelectorAll("input");

const validateButton = document.getElementById("validate-button");

let inputPassword = "";
const PASSWORD = "1234";
const MAX_TENTATIVES = 3;
let tentatives = 0;

console.log(keyPadNumbers);

keyPadNumbers.forEach((number) => {
  number.addEventListener("click", (e) => {
    if (message.textContent) {
      message.textContent = "";
    }
    inputPassword += e.target.value;
    screenResult.setAttribute("value", inputPassword);
  });
});

validateButton.addEventListener("click", () => {
  if (tentatives === MAX_TENTATIVES) {
    message.textContent = "tenatives maximales atteins";
  } else if (inputPassword === PASSWORD) {
    message.textContent = "Accès autorisé";
  } else {
    message.textContent = "Accès refusé";
    tentatives++;
    console.log(tentatives);
  }
  inputPassword = "";
  screenResult.setAttribute("value", inputPassword);
});

// recuperar
// const global
// evento a escuchar
// concatenacion
// if conditional
