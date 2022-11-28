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

function power(num, exp){
  //debugger
  if(exp===0){
    return 1n;
  }
  return num * power(num, exp-1);
}

//console.log(power(2n,42000));



