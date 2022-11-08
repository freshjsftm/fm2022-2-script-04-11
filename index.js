// let condition = true;
// console.log(condition);

// let number1 = 12;
// let number2 = 12;

// console.log(number1, ' > ', number2, ' = ', number1 > number2);//false
// console.log(number1, ' >= ', number2, ' = ', number1 >= number2);//true
// console.log(number1, ' < ', number2, ' = ', number1 < number2);//false
// console.log(number1, ' <= ', number2, ' = ', number1 <= number2);//true

// let string1 = 'talse';
// let string2 = 'false';
// console.log(string1, ' > ', string2, ' = ', string1 > string2);

//false undefined NaN '' null  0/-0

// //логічне множення  І  &&
// //повертає останню правду або першу брехню
// console.log(true, ' && ', true, ' = ', true && true);//true
// console.log(true, ' && ', false, ' = ', true && false);//false
// console.log(false, ' && ', true, ' = ', false && true);//false
// console.log(false, ' && ', false, ' = ', false && false);//false

// //логічне додавання  АБО  ||
// //повертає першу правду або останню брехню
// console.log(true, ' || ', true, ' = ', true || true);//true
// console.log(true, ' || ', false, ' = ', true || false);//true
// console.log(false, ' || ', true, ' = ', false || true);//true
// console.log(false, ' || ', false, ' = ', false || false);//false

// && повертає останню правду або першу брехню
// || повертає першу правду або останню брехню
let string = "";
let number = 77;
let userName = "Brad";
let bool = false;
let object = null;
let resultRemainder = number % 5; //2

let result = number || (userName && object);
console.log(result); 
