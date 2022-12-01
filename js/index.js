"use strict";

// инкапсуляція (абстракція)
// наслідування
// поліморфізм



// class Worker {
//   constructor(fname, lname, rate = 10, day = 17) {
//     this.fname = fname;
//     this.lname = lname;
//     this.day = day;
//     this.rate = rate;
//   }

//   workRate() {
//     return this.rate * this.day;
//   }
// }

// const worker1 = new Worker("John", "Mat");
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

class Worker {
  constructor(fname, Iname, rate, workday) {
    this.fname = fname;
    this.Iname = Iname;
    this.rate = rate;
    this.workday = workday;
  }
  get workday() {
    return this._workday;
  }
  set workday(workday) {
    if (typeof workday !== "number") {
      throw new TypeError("workday must be number");
    }

    if (workday > MAX_DAYS || workday < MIN_DAY) {
      throw new RangeError("days must be 0...365");
    }
    this._workday = workday;
  }
}

// try {
//   //console.log((Worker.workday = 8));
//   const worker = new Worker("Tom", "tom", 56, 13);
//   worker.workday = 8;
//   console.log(worker.workday);
// } catch (error) {
//   if (error instanceof TypeError) {
//     console.log("Wrong type");
//   }
//   if (error instanceof RangeError) {
//     console.log("Wrong value");
//   }
//   console.log(error);
// }

