let userInput1 = prompt("Enter first number: ", 2);
let userInput2 = prompt("Enter second number: ", 6);
//debugger
if (checkUserInputNumber(userInput1) && checkUserInputNumber(userInput2)) {
  const summa = getSumTwoNumbers(Number(userInput1), Number(userInput2));
  console.log(summa);
} else {
  console.log("error");
}
/**
 * 
 * @param {number} val1 
 * @param {number} val2 
 * @returns {number}
 */
function getSumTwoNumbers(val1, val2) {
  return val1 + val2;
}
/**
 * 
 * @param {string} value 
 * @returns {boolean}
 */
function checkUserInputNumber(value) {
  if (value === "" || isNaN(value) || value === null) {
    return false;
  }
  return true;
}

/*
declaration
function func1(argument1, argument2){
  body function
}

expression
const func2 = function(argument1, argument2){
  body function
}

arrow
const func3 = (argument1, argument2)=>{
  body function
}

logStr1();
function logStr1() {
  console.log("!myFirstFunction!");
}
logStr1();

const logStr2 = function(){
  console.log("!mySecondFunction!");
}
logStr2()
*/
