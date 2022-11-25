"use strict";

//const sum = (n1, n2) => {return n1+n2;}
//переписати функцію sum, щоб вона приймала безліч аргументів і повертала значення суми
const sum = (n1, n2) => n1 + n2;

const sumArgs1 = (...numbers) => {
  let resultSumma = 0;
  for (let i = 0; i < numbers.length; i++) {
    resultSumma += numbers[i]
  }
  // numbers.forEach((number) => {
  //   return (resultSumma += number);
  // });
  return resultSumma;
};
const sumArgs2 = (initial=0, ...numbers) =>
  numbers.reduce((result, number) => result + number, initial);

console.log(sumArgs2(undefined, 4,5,6))  


const square = (n) => n * n;

const retHi = () => {
  console.log("hi");
  return "hi";
};
//rest
function test1(...rest) {
  console.log(rest);
  //console.log(arguments);
}
test1(1, 2, 3, 4, 5, 6);
const test2 = (...args) => {
  console.log(args);
};
test2(1, 2, 3);

// console.dir(test1)
// console.dir(test2)
