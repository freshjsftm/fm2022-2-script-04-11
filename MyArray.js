function MyArrayPrototype() {
  this.push = function (value) {
    this[this.length++] = value;
    return this.length;
  };
  this.pop = function(){
    //перевіряємо довжину, щоб вона не стала від'ємною
    if(this.length === 0){
      return; //return undefined; - так не пишуть!!!
    }
    //отримую останній і зберігаю у змінну
    const lastItem = this[this.length-1];
    //видаляю останній
    delete this[this.length-1];
    //змінюю довжину
    this.length--; //this.length = this.length-1;
    //повертаю останній зі змінної
    return lastItem;
  }
}
function MyArray() {
  this.length = 0;
}
MyArray.prototype = new MyArrayPrototype();
const myArr = new MyArray();
myArr.push(12);
myArr.push(56);



