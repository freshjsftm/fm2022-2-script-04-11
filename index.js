// let userInput1 = prompt("Enter first number: ", 2);
// let userInput2 = prompt("Enter second number: ", 6);

// let userNumber1 = Number(userInput1);
// let userNumber2 = Number(userInput2);

// if (
//   userInput1 === "" ||
//   isNaN(userNumber1) ||
//   userInput1 === null ||
//   userInput2 === "" ||
//   userInput2 === null ||
//   isNaN(userNumber2)
// ) {
//   console.log("error");
// } else {
//   let summa = userNumber1 + userNumber2; //8
//   console.log(summa);
// }

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
*/
logStr1();
function logStr1() {
  console.log("!myFirstFunction!");
}
logStr1();

const logStr2 = function(){
  console.log("!mySecondFunction!");
}
logStr2()
