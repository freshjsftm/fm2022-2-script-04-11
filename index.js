const nums = [1, 25, 6, 5, 9, 4, 8];

function getSquareNumber(n) {
  console.log(n * n);
  return n * n;
}

for (let index = 0; index < nums.length; index++) {
  //getSquareNumber(nums[index]);
}

//nums.forEach(getSquareNumber);

//nums.forEach(function(n){console.log(n*n*n)})

const evenNums = nums.filter(function(item){return item%2===0;})
// console.log(evenNums)
// console.log(nums)

const newArrNums = nums.map(getSquareNumber)