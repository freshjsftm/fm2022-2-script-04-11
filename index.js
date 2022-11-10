//написати функцію, яка обчислює периметр квадрату
// const userInput = prompt("enter side square:"); //string | null
// const leadToNumber = function (value) {
//   if (isNaN(Number(value)) || value === null || value === "" || value === " ") {
//     return NaN;
//   }
//   return Number(value);
// };
// /**
//  * calculate and return perimetr
//  * @param {number} side default value = 1
//  * @returns {number | null}
//  */
// const qetPerimetrSquare = function (side=1) {
//   if(isNaN(side) || side<=0){
//     return null;
//   }
//   return side + side + side + side;
// };
// console.log('perimetr', qetPerimetrSquare());
// console.log('perimetr', qetPerimetrSquare(leadToNumber(userInput)));
//написати функцію, яка перевіряє вік користувача на повноліття (18)
//вік приходить в якості аргументу в правильному числовому виді
//isAdult(20) -> true
//isAdult(8) -> false

// const AGE_ADULT = 21;

const isAdult = function (age, AGE_ADULT = 18) {
  // if(age>=AGE_ADULT){
  //   return true;
  // }
  // return false;
  return age >= AGE_ADULT;
};
// debugger
// console.log(isAdult(19))
// console.log(isAdult(19, AGE_ADULT))

//функція приймає два параметри і перевіряє кратность першого другим
//checkMultiplicity(20,4) -> true
//checkMultiplicity(20,3) -> false

// const cheskMultiplicity = function (val1, val2) {
//   return (val1 % val2 === 0);
// };
// console.log(cheskMultiplicity(28, 5));


// написати функцію, яка приймає три числа, і перевіряє чи можуть бути ці числа довжинами сторон одного трикутника
//трикутник існує тоді і тільки тоді, коли сума будь-яких двох його сторін більше третьою сторони (і так для кожної сторони!!!)
//checkTriangle(3,4,5); //true
//checkTriangle(3,44,5); //false
/*
||  АБО
&&   I
*/