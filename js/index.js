"use strict";

// инкапсуляція (абстракція)
// + наслідування
// поліморфізм

class Figure {
  constructor(name) {
    if (this.constructor === Figure) {
      throw new Error("You cannot create instance in abstract class");
    }
    this.name = name;
  }
  getSquare() {
    throw new Error("you call method abstract class");
  }
  getPerimetr() {
    throw new Error("you call method abstract class");
  }
}

class Circle extends Figure {
  /**
   *
   * @param {number} diametr
   */
  constructor(diametr) {
    super("circle");
    this.diametr = diametr; //виклик setter
  }
  //инкапсуляція
  set diametr(diametr) {
    //перевірка діаметра
    if (typeof diametr !== "number") {
      throw new TypeError("Diametr must be number!");
    }
    if (diametr <= 0) {
      throw new RangeError("Diametr cannot be 0 or less");
    }
    this._diametr = diametr;
    this._radius = diametr / 2;
    this._length = 2 * Math.PI * (diametr / 2);
  }
  //поліморфізм
  getSquare() {
    return 2 * Math.PI * this._radius * this._radius;
  }
  getPerimetr() {
    return 2 * Math.PI * this._radius;
  }
}

class Square extends Figure {
  constructor(side) {
    super("square");
    this.side = side;
  }
  set side(side) {
    if (typeof side !== "number") {
      throw new TypeError("Diametr must be number!");
    }
    if (side <= 0) {
      throw new RangeError("Diametr cannot be 0 or less");
    }
    this._side = side;
    this._diagonal = Math.sqrt(
      this._side * this._side + this._side * this._side
    );
  }
  getSquare() {
    return this._side * this._side;
  }
  getPerimetr() {
    return 4 * this._side;
  }
}

try {
  const figure1 = new Circle(10);
  const figure2 = new Square(10);
  // console.log(getSquareFigure(figure1));
  // console.log(getSquareFigure(figure2));
  // console.log(getSquareFigure({}));
} catch (error) {
  console.log(error);
}

function getSquareFigure(obj) {
  if (obj instanceof Figure) {
    return obj.getSquare();
  }
  throw new TypeError('Object must be figure!')
}
