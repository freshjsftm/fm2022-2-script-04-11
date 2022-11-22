const nums = [1, 2, 5, 8, 5, 9, 6, 3, 2, 5];

//slice
const newArr = nums.slice(1, 2);
console.log(newArr);
console.log(nums);

//splice
//nums.splice(0) //0 - починаючи з цього індексу видали усе до кінця
//nums.splice(0, 2) //2 - кількість видаляємих елементів
nums.splice(3, 0, 111, 112, 113, 114); // 111, 112, 113, 114 - ці елементи будуть додані, почина.чи з вказаного індекса(3), видалено нічого не буде
console.log(nums);

//на місце мінімального вставити передане значення

const nums2 = [2, 2, 5, 8, 5, 9, 6, 3, 2, 5];

function getMin(array) {
  let minElem = array[0]; //роблю припущення що перший елемент і є найменшим
  for (let i = 0; i < array.length; i++) {
    if (array[i] < minElem) {
      //порівнюю найменший з кожним елементом
      minElem = array[i]; //якщо поточний буде менше мінімального, то переписую значення мінімального
    }
  }
  return minElem;
}

function changeMinElem(array, value) {
  let minElem = getMin(array);
  let startIndex = 0;
  while (true) {
    let startIndexMin = array.indexOf(minElem, startIndex++);
    if (startIndexMin === -1) {
      return;
    }
    array.splice(startIndexMin, 1, value);
  }
}
console.log(nums2);
changeMinElem(nums2, 888);
console.log(nums2);
