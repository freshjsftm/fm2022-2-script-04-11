"use strict";

const arr = [1, 2, 5, 6, 8, 9, 11, 15, 16, 20];

//константна  O(1)
//console.log(arr[3]);

//лінійна O(n)  indexOf()
const linearSearch = (arr, key) => {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === key) {
      return i;
    }
  }
  return -1;
};
//console.log(linearSearch(arr, 7));

//квадратична O(n^2)
const createTableMult = (limit) => {
  const tableMult = [];
  for (let i = 1; i <= limit; i++) {
    //const subTable = [];
    for (let j = 1; j <= limit; j++) {
      tableMult.push(`${i}*${j}=${i * j}`);
    }
    //tableMult.push(subTable)
  }
  return tableMult;
};
//console.log(createTableMult(200));

//логаріфмічна O(log(n))
const binarySearch = (arr, key)=>{
  let start = 0;
  let end = arr.length-1;
  let middle;
  while(start<=end){
    middle = Math.round((start+end)/2); 
    if(arr[middle]===key){
      return middle;
    }
    if(arr[middle]<key){
      start = middle + 1;
    }else{ //arr[middle]>key
      end = middle - 1;
    }
  }
  return -1;
}
//console.log(binarySearch(arr, 2));