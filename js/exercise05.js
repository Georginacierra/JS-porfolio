// recuperar los nodes
// crear un evento
// add 10% to my value
// regla de gestion, cuando llegue al 100 reiniciar valor a 0

const progressBar = document.getElementById("file");

const buttonPlus = document.getElementById("button-plus");

buttonPlus.addEventListener("click", () => {
  const progressValue = Number(progressBar.getAttribute("value"));

  console.log(typeof progressValue);
  const newValue = progressValue + 10;
  if (progressValue == 100) {
    progressBar.setAttribute("value", 0);
  } else {
    progressBar.setAttribute("value", newValue);
  }
});
