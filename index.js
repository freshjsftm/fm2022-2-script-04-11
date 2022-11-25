"use strict";

const sumArgs1 = (...numbers) => {
  let resultSumma = 0;
  numbers.forEach((number) => {
    return (resultSumma += number);
  });
  return resultSumma;
};
const sumArgs2 = (initial = 0, ...numbers) =>
  numbers.reduce((result, number) => result + number, initial);

//console.log(sumArgs2(undefined, 4, 5, 6));

const arrNumbers1 = [1, 2, 3,2];
const arrNumbers2 = [1, 2];

const arrNumbers3 = [...arrNumbers1, 4, ...arrNumbers2];

console.log(sumArgs2(1000, ...arrNumbers1, 12, ...arrNumbers2));

console.log(Math.max(...arrNumbers1))

//отримати останній індекс максимального значення в масиві
console.log(arrNumbers1.lastIndexOf(Math.max(...arrNumbers1)))

