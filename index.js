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

site.showHeaders();
