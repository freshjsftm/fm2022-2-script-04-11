class Queue{
  constructor(...args){
    this._head = 0;
    this._tail = 0;
    for (const item of args) {
      this.enqueue(item);
    }
  }
  get size(){
    return this._tail-this._head;
  }
  enqueue(value){
    this[this._tail] = value;
    this._tail++;
    return this.size;
  }
  dequeue(){
    if(this.size>0){
      const deleteItem = this[this._head];
      delete this[this._head];
      this._head++;
      return deleteItem;
    }
  }
}

const queue = new Queue(1,5,2,3,8);
console.log(queue)