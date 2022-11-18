const myArrayPrototype = {
  push : function(value){
    this[this.length] = value;
    this.length++;
    return this.length;
  }
}

function MyArray() {
  this.length = 0; 
}

MyArray.prototype = myArrayPrototype;

const array = [2]; //instance
const array2 = [2];
console.log(typeof array.push)
//console.dir(array.push)
console.log(array.push === array2.push);

const myArray = new MyArray();
const myArray2 = new MyArray();
myArray.push(404);
myArray.push(456);
// console.log(myArray);
console.log(myArray.push === myArray2.push);
