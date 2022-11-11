const getTextOddOrEven = function (value) {
  if (value % 2 === 0) {
    return "even";
  }
  return "odd";
};
console.log(getTextOddOrEven(5))

/*
   condition ? true : false
   (value % 2 === 0) ? "even" : "odd"
*/

const getTextOddOrEven2 = function (value) {
  // const result = (value % 2 === 0) ? "even" : "odd";
  // return result;
  return (value % 2 === 0) ? "even" : "odd";
};
console.log(getTextOddOrEven2(5))

// написати функцію яка повертає текст 'adult' || 'no adult' 
//в залежності від прийнятого аргументу (число)