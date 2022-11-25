"use strict";

//window.alert(12)

const cat = {
  name: "Mucha",
  sleeping: function () {
    console.log("sleeping", this);
    return `${this.name} sleeping`;
  },
};
//console.log(cat.sleeping())
//f1()
function f1() {
  console.log("f1", this);
}
// f1()
// console.dir(f1)

const f2 = function () {
  console.log("f2", this);
};
// f2()
// console.dir(f2)

const f3 = () => {
  console.log("f3", this);
};
// f3()
// console.dir(f3)

//arrow
const site = {
  title: "My site",
  headers: ["Home", "About", "Contacts"],
  showHeaders: function () {
    this.headers.forEach((header) => {
      console.log(this.title);
      console.log(header);
    });
  },
};
//site.showHeaders();

//зберігаємо this у змінну - копія за посиланням
const site2 = {
  title: "My site 2",
  headers: ["Home2", "About2", "Contacts2"],
  showHeaders: function () {
    //this
    const that = this; //const self = this;
    this.headers.forEach(function (header) {
      console.log(that.title);
      console.log(header);
    });
  },
};
//site2.showHeaders();

// через передачу контексту методу масиву
const site3 = {
  title: "My site 3",
  headers: ["Home", "About", "Contacts"],
  showHeaders: function () {
    this.headers.forEach(function (header) {
      console.log(this.title);
      console.log(header);
    }, this);
  },
};
//site3.showHeaders();

//bind
function showHeaders(header) {
  console.log(this.title);
  console.log(header);
}
const site4 = {
  title: "My site 4",
  headers: ["Home", "About", "Contacts"],
  showHeaders: function () {
    this.headers.forEach(showHeaders.bind(this));
  },
};
site4.showHeaders();
