//маємо два масиви однакової довжини, з яких треба створити один
//умова записати елементи у шаховому порядку
// [1,2,3] [4,5,6] => [1,4,2,5,3,6]
//якщо довжина різна, то елементи довшого масиву записуємо в кінець

const arr1 = [1, 3, 4, 9, 6, 3];
const arr2 = [1, 6, 7, 4, 9, 6, 3,77,77];

const arr3 = [];
for (let i = 0; i < arr1.length && i < arr2.length; i++) {
  arr3.push(arr1[i], arr2[i]);
}
if(arr1.length>arr2.length){
  for (let i = arr2.length; i < arr1.length ; i++) {
    arr3.push(arr1[i]);
  }
}else if(arr1.length<arr2.length){
  for (let i = arr1.length; i < arr2.length ; i++) {
    arr3.push(arr2[i]);
  }
}

console.log(arr3);
