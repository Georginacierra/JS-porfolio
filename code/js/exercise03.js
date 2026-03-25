const counter = document.getElementById("counter");
const plusButton = document.getElementById("plus");
const minusButton = document.getElementById("minus");

let counterValue = Number(counter.textContent);

console.log(typeof counterValue);

plusButton.addEventListener("click", () => {
  addition();
});

minusButton.addEventListener("click", () => {
  substraction();
});

const addition = () => {
  counterValue += 1;
  counter.textContent = counterValue;
};

const substraction = () => {
  counterValue -= 1;
  counter.textContent = counterValue;
};
