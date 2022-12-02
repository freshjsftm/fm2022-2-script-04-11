"use strict";

class UserClasses {
  #privateField;
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
    this.age = age; // setter
    this.isBan = isBan;
    this.#privateField = "privateField";
  }
  //getters & setters
  get age() {
    return this._age; // get private
  }
  set age(age) {
    if (typeof age !== "number") {
      throw new TypeError("age must be number");
    }
    if (age < MIN_AGE || age > MAX_AGE) {
      throw new RangeError("age must 0..150");
    }
    this._age = age; //set private
  }
  //constructor logic
  logInfo() {
    console.log("fname = ", this.fname);
    console.log("_lname = ", this._lname);
    console.log("age = ", this.age);
    console.log("isBan = ", this.isBan);
  }

  getFullName() {
    return `${this.fname} ${this._lname}`;
  }
  isAdult() {
    return this._age >= ADULT_AGE;
  }
  //static
  static isUserClasses(value) {
    return value instanceof UserClasses;
  }
  static getInstance() {
    return new UserClasses("Test", "Testik", 44);
  }
}

try {
  const persone2 = new UserClasses("Tom", "Rot", 58);
  console.group();
  persone2.logInfo();
  console.groupEnd();
} catch (error) {
  console.log(error);
}

console.log("***********");
