function MyArrayPrototype() {
  this.push = function () {
    for (let i = 0; i < arguments.length; i++) {
      this[this.length++] = arguments[i];
    }
    return this.length;
  };

  this.pop = function () {
    if (this.length === 0) {
      return;
    }
    const lastItem = this[this.length - 1];
    delete this[this.length - 1];
    this.length--;
    return lastItem;
  };

  this.some = function (funcCheck) {
    for (let index = 0; index < this.length; index++) {
      if (funcCheck(this[index]) === true) {
        return true;
      }
    }
    return false;
  };

  this.every = function (funcCheck) {
    for (let index = 0; index < this.length; index++) {
      if (funcCheck(this[index]) === false) {
        return false;
      }
    }
    return true;
  };

  this.forEach = function (funcWork) {
    for (let index = 0; index < this.length; index++) {
      funcWork(this[index]);
    }
  };

  this.filter = function (funcCheck) {
    //func -> true||false
    const newArr = new MyArray(); //створили пустий масив
    for (let index = 0; index < this.length; index++) {
      if (funcCheck(this[index])) {
        //
        //вставити елемент в кінець нового масив
        newArr.push(this[index]);
      }
    }
    return newArr;
  };

  this.map = function (funcWork) {
    const newArr = new MyArray(); //створюємо новий наш масив
    for (let index = 0; index < this.length; index++) {
      //для кожного елементу джерельного масиву
      //виконуємо передану функцію
      //і вставляємо результат виконання в кінець нового масиву
      newArr.push(funcWork(this[index]));
    }
    return newArr; //повертаємо новий масив
  };
}

function MyArray() {
  this.length = 0;
  if (arguments.length === 1) {
    for (let i = 0; i < arguments[0]; i++) {
      this.push(undefined);
    }
    return;
  }
  for (let i = 0; i < arguments.length; i++) {
    this.push(arguments[i]);
  }
}

MyArray.prototype = new MyArrayPrototype();

const myArr = new MyArray();
myArr.push(12, 14, 12);
myArr.push(56);

//myArr.forEach(function(elem){console.log(elem+5)});

function logItem(v) {
  console.log(v);
}
//myArr.forEach(logItem)

// console.log(
//   myArr.every(function (item) {
//     return item < 10;
//   })
// );

const myArr2 = new MyArray();
// console.log(
//   myArr2.every(function (item) {
//     return item < 10;
//   })
// );
