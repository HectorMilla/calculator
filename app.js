const calculator = document.querySelector(".container");
const numberButtons = document.querySelectorAll(".number"); // changed from input to number rember
const display = document.querySelector(".display");
const equalsButton = document.querySelector(".equals");
const clear = document.querySelector(".clear");
const container = document.querySelector(".container");
let firstNumber = "";
let operator = "";
let secondNumber = "";
//number that will appear on display
let displaynumber = "";
//counter to see if it is first operation or not (ANS function in reg calculator)
let counter = 0;
//Math Functions
let add = (firstNumber, secondNumber) => {
  let answer = firstNumber + secondNumber;
  return answer;
};
let subtract = (firstNumber, secondNumber) => {
  let answer = firstNumber - secondNumber;
  return answer;
};
let multiply = (firstNumber, secondNumber) => {
  let answer = firstNumber * secondNumber;
  return answer;
};
let divide = (firstNumber, secondNumber) => {
  let answer = firstNumber / secondNumber;
  return answer;
};
// Will run one of the math functions based on operator
let operate = (firstNumber, operator, secondNumber) => {
  let answer;
  console.log("test | " + firstNumber, operator, secondNumber);
  switch (operator) {
    case "+":
      answer = add(parseInt(firstNumber), parseInt(secondNumber));
      break;
    case "-":
      answer = subtract(parseInt(firstNumber), parseInt(secondNumber));
      break;
    case "*":
      answer = multiply(parseInt(firstNumber), parseInt(secondNumber));
      break;
    case "/":
      answer = divide(parseInt(firstNumber), parseInt(secondNumber));
      break;
  }
  return answer;
};
//event listener on calculator
container.addEventListener("click", (e) => {
  const eventClassName = e.target.className;
  if (eventClassName == "number") {
    displaynumber += e.target.textContent;
  } else {
    // added a space next to operator to make it easier to split later on
    displaynumber += ` ${e.target.textContent} `;
    counter++;
    if (counter == 2) {
      //taking string from $DisplayNumber and splitting it so i can get individual values
      let inputArr = displaynumber.split(" ");
      firstNumber = inputArr[0];
      secondNumber = inputArr[2];
      operator = inputArr[1];
      // Dont want = sign to appear on display
      e.target.className != "equals"
        ? (displaynumber =
            operate(firstNumber, operator, secondNumber) + e.target.textContent)
        : (displaynumber = operate(firstNumber, operator, secondNumber));
      counter = 0;
    }
  }
  display.innerHTML = displaynumber;
});
