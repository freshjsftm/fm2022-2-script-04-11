//recursion

function recursion(number) {
  //debugger
  if (number === 0) {
    return;
  }
  console.log(number);
  recursion(number - 1);
}
//recursion(3);

/*
2^4 = 2 * 2^3
2^3 = 2 * 2^2
2^2 = 2 * 2^1
2^1 = 2 * 2^0 
2^0 = 1       - basic
*/

/**
 *
 * @param {number} num
 * @param {number} exp
 * @returns {number}
 */
function power(num, exp) {
  //debugger
  if (
    (typeof num !== "number" && typeof num !== "bigint") ||
    typeof exp !== "number"
  ) {
    throw new TypeError("Type not right!");
  }
  if(exp<0){
    throw new Error("Exp must be positive!");
  }
  if (exp === 0) {
    return typeof num === "bigint" ? 1n : 1 ;
  }
  return num * power(num, exp - 1);
}

try {
  console.log("try");
  console.log(power(2n,4));
  console.log(power(2,-4));
  power("two", "four");
} catch (error) {
  console.log("catch");
  console.log(error);
} finally {
  console.log("finally");
}
//power('two', 'four');

//console.log(power(2n,42000));

console.log("other script");
console.log("other script");
console.log("other script");

/*
try{}catch{}
try{}finally{}
try{}catch{}finally{}
*/
