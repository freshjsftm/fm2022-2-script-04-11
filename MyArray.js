function MyArrayPrototype() {
  this.push = function (value) {
    this[this.length++] = value;
    return this.length;
  };
}

function MyArray() {
  this.length = 0;
}

MyArray.prototype = new MyArrayPrototype();


const myArr = new MyArray();
myArr.push(12);


