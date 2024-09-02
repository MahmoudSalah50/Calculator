let display = document.getElementById("display");
let currentInput = "";
let operator = "";
let previousInput = "";

function clearDisplay() {
  display.textContent = "0";
  currentInput = "";
  operator = "";
  previousInput = "";
}

function appendNumber(number) {
  if (currentInput.length < 12) {
    currentInput += number;
    display.textContent = currentInput;
  }
}

function appendOperator(op) {
  if (currentInput !== "") {
    if (previousInput !== "") {
      calculateResult();
    }
    operator = op;
    previousInput = currentInput;
    currentInput = "";
  }
}

function appendDecimal() {
  if (!currentInput.includes(".")) {
    currentInput += ".";
    display.textContent = currentInput;
  }
}

function calculateResult() {
  if (previousInput !== "" && currentInput !== "" && operator !== "") {
    try {
      let result = eval(`${previousInput}${operator}${currentInput}`);
      display.textContent = result;
      currentInput = result;
      previousInput = "";
      operator = "";
    } catch {
      display.textContent = "Error";
      currentInput = "";
      previousInput = "";
      operator = "";
    }
  }
}

function calculateSquareRoot() {
  if (currentInput !== "") {
    let result = Math.sqrt(parseFloat(currentInput));
    display.textContent = result;
    currentInput = result;
  }
}

function calculatePercentage() {
  if (previousInput !== "" && currentInput !== "" && operator !== "") {
    let result = eval(`${previousInput}${operator}${currentInput}`) / 100;
    display.textContent = result;
    currentInput = result;
    previousInput = "";
    operator = "";
  }
}
