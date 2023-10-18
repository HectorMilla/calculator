let firstNumber = 0;
let answer = 0;
let operator = "";
const calculator = document.querySelector(".container");
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

let operate = (firstNumber, operator, secondNumber, e) => {
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

let numberButtons = document.querySelectorAll(".input");
numberButtons.forEach((number) => {
  let display = document.getElementsByClassName("display");
  number.addEventListener("click", (e) => {
    display[0].innerHTML = e.target.textContent;
    console.log(display);
  });
});
console.log(numberButtons);
