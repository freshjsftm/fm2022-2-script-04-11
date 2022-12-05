"use strict";

const symbol = Symbol("create new symbol"); //uniqueValue
const symbol1 = Symbol("create new symbol"); //uniqueValue
// console.log(symbol);
// console.log(symbol1);

const obj1 = {
  login: "qwerty",
  symbol: 777,
  [symbol]: "value with key symbol",
};
// console.log(obj1);
// console.log(obj1.symbol);
// console.log(obj1[symbol]);

// delete obj1[symbol];

const arr = [1,2,3,4,5];
// console.log(...arr)
// for (const iterator of arr) {
//   console.log(iterator)
// }

