const nums = [5, 25, 8];
//реалізація reduce без initialValue
function getSum(array) {
  let summa = array[0];
  for (let index = 1; index < array.length; index++) {
    summa = summa + array[index];
  }
  return summa;
}
console.log(getSum(nums));

//реалізація reduce з initialValue
function getSum2(array, initialValue) {
  let summa = initialValue;
  for (let index = 0; index < array.length; index++) {
    summa = summa + array[index];
  }
  return summa;
}
console.log(getSum2(nums, 1000));

const result1 = nums.reduce(function (summa, currentItem) {
  return summa + currentItem;
});
console.log(result1);

const result2 = nums.reduce(function (summa, currentItem) {
  return summa + currentItem;
}, 1000);
console.log(result2);
