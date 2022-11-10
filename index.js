//написати функцію, яка обчислює периметр квадрату

const userInput = prompt("enter side square:"); //string | null
console.log(userInput);

//перетворити те, що вводить користувач на числовий тип number
//console.log(Number(userInputSide))//NaN
//функція повинна повертати лише тип number
const leadToNumber = function (value) {
  if (isNaN(Number(value)) || value === null || value === "" || value === " ") {
    return NaN;
  }
  return Number(value);
};

console.log(leadToNumber(userInput));
console.log(leadToNumber(777));
