/**
 * @params {function}
 * @params {any}
 */
const sayWord = function (howSay, whatSay) {
  howSay(whatSay);
};

//sayWord(alert, 456)
//sayWord(console.log, 'hi')

const nums = [1, 5,4, 3];
function checkOdd(item) {
  return item % 2 === 1;
}
const result1 = nums.every(checkOdd);
const result2 = nums.some(checkOdd);
