const calculatorTable = document.getElementById("table");

const inputButtons = calculatorTable.querySelectorAll("input");

const calculatorOutput = document.getElementById("output");

let outputValues = "";

const print = () => {
  calculatorOutput.textContent = outputValues;
};

inputButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    const keyValue = e.target.value;
    switch (keyValue) {
      case "=":
        outputValues = eval(outputValues);
        print();
        return;
      case "CE":
        outputValues = "";
        print();
        return;
      case "←":
        const newOutputValues = outputValues.slice(0, -1);
        outputValues = newOutputValues;
        print();
        return;
      case "x":
        outputValues += "*";
        print();
        return;
      case "÷":
        outputValues += "/";
        print();
        return;
    }
    outputValues += keyValue;
    print();
  });
});
