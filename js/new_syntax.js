"use strict";

class UserClasses {

  /**
   *
   * @param {string} fname
   * @param {string} lname
   * @param {number} age
   */
  constructor(fname, lname, age, isBan = false) {
    if (typeof fname !== "string") {
      throw new TypeError("fname must be string");
    }
    if (typeof lname !== "string") {
      throw new TypeError("lname must be string");
    }
    this.fname = fname;
    this._lname = lname;
    this.age = age;  // setter
    this.isBan = isBan;
  }
  //getters & setters
  get age(){
    return this._age; // get private
  }
  set age(age){
    if (typeof age !== "number") {
      throw new TypeError("age must be number");
    }
    if (age < MIN_AGE || age > MAX_AGE) {
      throw new RangeError("age must 0..150");
    }
    this._age = age; //set private
  }
  //constructor logic
  getFullName() {
    return `${this.fname} ${this._lname}`;
  }
  isAdult() {
    return this._age >= ADULT_AGE;
  }
  //static
  static isUserClasses(value){
    return value instanceof UserClasses;
  }
  static getInstance(){
    return new UserClasses('Test','Testik',44);
  }
}

// try {
//   //debugger
//   const test = UserClasses.getInstance();
//   console.log(test)
//   const persone2 = new UserClasses('Tom', 'Rot', 58);
//   console.log(UserClasses.isUserClasses(persone2));
//   console.log(UserClasses.isUserClasses({}));
//   //persone2.#age = 45;
//   //так як нижче робити не можна!!!!
//   //console.log(persone2._age);
//   console.log(persone2.getFullName());
//   console.log(persone2.isAdult());
//   console.log(persone2.fname);
//   persone2.age = 56; //setter 
//   console.log(persone2.age); //getter
//   console.log(persone2);
//   //так як нижче робити не можна!!!!
//   // console.log(persone2._lname);
//   // console.log(persone2._age);
// } catch (error) {
//   console.log(error);
// }

console.log("***********");


