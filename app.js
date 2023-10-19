const calculator = document.querySelector(".container");
const numberButtons = document.querySelectorAll(".input");
const display = document.querySelector(".display");
const equalsButton = document.querySelector(".equals");
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

let operate = (firstNumber, operator, secondNumber) => {
  let poo = "";
  switch (operator) {
    case "+":
      poo = add(parseInt(firstNumber), parseInt(secondNumber));
      break;
    case "-":
      poo = subtract(parseInt(firstNumber), parseInt(secondNumber));
      break;
    case "*":
      poo = multiply(parseInt(firstNumber), parseInt(secondNumber));
      break;
    case "/":
      poo = divide(parseInt(firstNumber), parseInt(secondNumber));
      break;
  }
  return poo;
};
let inputArr = [];

numberButtons.forEach((number, index) => {
  number.addEventListener("click", (e) => {
    inputArr.push(e.target.textContent);
    display.innerHTML = e.target.textContent;
  });
});

//takes string of first and 2nd numbers and turns them into a real number
let findOperator = () => {
  let operatorList = ["+", "-", "*", "/"];
  let firstNumber = "";
  let operator = "";
  let secondNumber = "";
  let operatorIndex;
  for (let i = 0; i < inputArr.length; i++) {
    if (operatorList.includes(inputArr[i])) {
      operatorIndex = i;
      operator = inputArr[i];
    }
  }
  for (let i = 0; i < operatorIndex; i++) {
    firstNumber += inputArr[i];
  }
  for (let i = operatorIndex + 1; i < inputArr.length; i++) {
    secondNumber += inputArr[i];
  }
  console.log(inputArr);
  //operate(firstNumber, operator, secondNumber);
};

// take numbers that were clicked on and separate them into first number operator and 2nd
equalsButton.addEventListener("click", findOperator);
// let x = operate(1, "+", 2);
// console.log(x);
