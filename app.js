let firstNumber = 0;
let answer = 0;
let operator = "";
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
  switch (operator) {
    case "+":
      add(firstNumber, secondNumber);
      break;
    case "-":
      subtract(firstNumber, secondNumber);
      break;
    case "*":
      multiply(firstNumber, secondNumber);
      break;
    case "/":
      divide(firstNumber, secondNumber);
      break;
  }
};
