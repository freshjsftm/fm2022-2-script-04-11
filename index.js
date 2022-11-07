let number1 = 12;
let number2 = "12";

console.log(number1 + number2); //неявне приведення number1 до строки
console.log(number1 + Number(number2)); //явне приведення number2 до числа

number1 = 5;
number2 = ""; //

console.log(number1 * number2);

//false
//0 -0
//NaN
//''
//undefined
//null