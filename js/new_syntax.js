"use strict";

class UserClasses {
  #fname;
  #lname;
  #age;
  //constructor object
  /**
   *
   * @param {string} fname
   * @param {string} lname
   * @param {number} age
   */
  constructor(fname, lname, age) {
    if (typeof fname !== "string") {
      throw new TypeError("fname must be string");
    }
    if (typeof lname !== "string") {
      throw new TypeError("lname must be string");
    }
    if (typeof age !== "number") {
      throw new TypeError("age must be number");
    }
    if (age < 0 || age > 150) {
      throw new RangeError("age must 0..150");
    }
    this.#fname = fname;
    this.#lname = lname;
    this.#age = age;
  }
  //constructor logic
  getFullName() {
    return `${this.#fname} ${this.#lname}`;
  }
  isAdult() {
    return this.#age >= 18;
  }
  //static
}

try {
  const persone2 = new UserClasses('Tom', 'Rot', 58);
  //persone2.#age = 45;
  //console.log(persone2.age);
  console.log(persone2.getFullName());
  console.log(persone2.isAdult());
  console.log(persone2);
} catch (error) {
  console.log(error);
}

console.log("***********");
