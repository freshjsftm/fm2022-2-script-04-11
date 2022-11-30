"use strict";

class Worker {
  constructor(fname, lname, rate = 10, day = 17) {
    this.fname = fname;
    this.lname = lname;
    this.day = day;
    this.rate = rate;
  }

  workRate() {
    return this.rate * this.day;
  }
}

const worker1 = new Worker("John", "Mat");
//console.log(worker1.workRate());



// const test = {
//   _prop : 12,
//   set prop(value){
//     this._prop = value;
//   },
//   get prop(){
//     return this._prop;
//   },
// }
