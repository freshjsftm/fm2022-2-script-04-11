"use strict";

const symbol = Symbol("propperty name for object");
const object = {
  name: "name",
  12: 12,
  [symbol]: "propperty name for object",
};
for (const key in object) {
  console.log(object[key])
}
const array = ['1'];
const sum = ()=>{}
const myMap = new Map();
console.log(myMap);
myMap.set(object, "object");
myMap.set(1, "one");
myMap.set('1', "oneone");
myMap.set(array, 'array')
myMap.set(symbol, true);
myMap.set('symbol', false);
myMap.set(sum, sum);
// for (const iterator of myMap) {
//   console.log(iterator) 
// }
console.log(myMap.get(sum));
console.log(myMap.get('symbol'));
console.log(myMap.get(1));
console.log(myMap.get('1'));
console.log(myMap.get(array));
