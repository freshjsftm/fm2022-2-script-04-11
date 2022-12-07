"use strict";

class Stack {
  constructor(maxSize, ...args) {
    this._size = 0;
    this.maxSize = maxSize;
    for (const item of args) {
      this.push(item);
    }
  }
  set maxSize(maxSize) {
    if (typeof maxSize !== "number") {
      throw new TypeError();
    }
    if (maxSize <= 0 || maxSize > MAX_SIZE_STACK) {
      throw new RangeError();
    }
    this._maxSize = maxSize;
  }
  get maxSize(){
    return this._maxSize;
  }
  get size() {
    return this._size;
  }
  get isEmpty() {
    return this._size === 0;
  }
  pick() {
    return this[`_${this.size-1}`];
  }
  push(value) {
    if(this.size>=this.maxSize){
      throw new RangeError('stack overflow!')
    }
    //this['_0'] = value;
    this[`_${this.size}`] = value;
    this._size++;
    return this.size;
  }
  pop() {
    if(this.isEmpty){
      //throw new RangeError('stack is empty!');
      return;
    }
    const lastItem = this[`_${this.size-1}`];
    delete this[`_${this.size-1}`];
    this._size--;
    return lastItem;
  }
}

//
const stack = new Stack(5,1,2);
//stack['_0'] - так не можна!!!
// console.log(stack)
// console.log(stack.pick())
