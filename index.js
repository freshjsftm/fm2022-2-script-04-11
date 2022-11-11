// const getTextOddOrEven = function (value) {
//   if (value % 2 === 0) {
//     return "even";
//   }
//   return "odd";
// };
// console.log(getTextOddOrEven(5))

// /*
//    condition ? true : false
//    (value % 2 === 0) ? "even" : "odd"
// */

// const getTextOddOrEven2 = function (value) {
//   // const result = (value % 2 === 0) ? "even" : "odd";
//   // return result;
//   return (value % 2 === 0) ? "even" : "odd";
// };
// console.log(getTextOddOrEven2(5))

// // написати функцію яка повертає текст 'adult' || 'no adult' 
// //в залежності від прийнятого аргументу (число)

// const getAge = function (val, AGE_ADULT = 18) {
//   return val >= AGE_ADULT  ? "adult" : "no adult";
// };



// функція всередині себе запитує у користувача ввод будь-чого
// і повертає текст  'thanks' або 'try again'

// const getTextFromUser = function () {
//   const inputUser = prompt('Enter something');
//   return inputUser ===null || inputUser==='' ? 'try again' : 'thanks' ;
// }
// console.log(getTextFromUser())

function answerToUser() {
  const userInput = prompt("Enter something");
  return userInput === null || userInput === '' ? "Try again" : "Thank you";
}
console.log(answerToUser());


const userComplete = function(){
  return prompt('Answer a guestion') ? 'thanks' : 'try again'
}
console.log(userComplete());



// const f1 = function(){}
// const f2 = function(){}

// const resF = 5>2 ? f1 : f2;


// const summa = 16678;
// const sale = summa>10000 ? 20 : 
//              summa>5000 ? 10 : 5;

