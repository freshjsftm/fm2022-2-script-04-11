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
 * calcute power of number
 * @param {number} num
 * @param {number} exp
 * @returns {number}
 * @throws {TypeError} type must be a number or bigint for num, type must be a number for exp
 * @throws {RangeError} type must be a positive exp or zero
 */
function power(num, exp) {
  //debugger
  if (
    (typeof num !== "number" && typeof num !== "bigint") ||
    typeof exp !== "number"
  ) {
    throw new TypeError("Type not right!");
  }
  if (exp < 0) {
    throw new RangeError("Exp must be positive!");
  }
  if (exp === 0) {
    return typeof num === "bigint" ? 1n : 1;
  }
  return num * power(num, exp - 1);
}

try {
  console.log("try");
  // console.log(power(2n,4));
  // console.log(power(2,-4));
  power("two", "four");
} catch (error) {
  console.log("catch");
  if(error instanceof TypeError){
    console.log('wrong type');
  }
  if(error instanceof RangeError){
    console.log('wrong value');
  }
  console.log(error);
} finally {
  console.log("finally");
}
// //power('two', 'four');

// //console.log(power(2n,42000));

// console.log("other script");
// console.log("other script");
// console.log("other script");

/*
try{}catch{}
try{}finally{}
try{}catch{}finally{}
*/

const inputUser = function () {
  const input = prompt("Enter anything");
  if (input === "" || input === null) {
    throw new RangeError("put something");
  }
};

try {
  inputUser();
} catch (error) {
  console.log(error);
}

console.log("Important script!");
