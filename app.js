const calculator = document.querySelector(".container");
const numberButtons = document.querySelectorAll(".input");
const display = document.querySelector(".display");
const equalsButton = document.querySelector(".equals");
const clear = document.querySelector('.clear')
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
  let answer ;
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
 display.innerHTML = answer
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
  operate(firstNumber, operator, secondNumber);
};


equalsButton.addEventListener("click", findOperator);
clear.addEventListener('click', () => {
  display.innerHTML = 0
})
