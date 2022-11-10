//написати функцію, яка обчислює периметр квадрату
const userInput = '2'; //prompt("enter side square:"); //string | null
const leadToNumber = function (value) {
  if (isNaN(Number(value)) || value === null || value === "" || value === " ") {
    return NaN;
  }
  return Number(value);
};
/**
 * calculate and return perimetr
 * @param {number} side default value = 1
 * @returns {number | null}
 */
const qetPerimetrSquare = function (side=1) {
  if(isNaN(side) || side<=0){
    return null;
  }
  return side + side + side + side;
};
const userInputNumber = leadToNumber(userInput);
console.log('perimetr', qetPerimetrSquare(userInputNumber));
console.log('perimetr', qetPerimetrSquare(78));
console.log('perimetr', qetPerimetrSquare());
//console.log(qetPerimetrSquare(leadToNumber(userInput)));
