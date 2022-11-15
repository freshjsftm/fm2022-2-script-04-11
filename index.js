//const nameProduct = 't-short';
// // const priceProduct = 456;

// // const product1 = new Object();
// // const product2 = Object();

// const product = {
//   //key:value,
//   name: "t-short",
//   price: 45.6,
//   currency: "$",
//   isHas: true,
//   amount: 12,
//   size: undefined,
//   pocket: null,
//   logProduct: function () {
//     console.log("name:", this.name);
//   },
// };
// console.log(product.color);
// product.color = "red";
// delete product.size;
// product.logProduct();

// //об'єкт країна Україна: назва, площа, населення
// //метод логує густина населення (населення/площа)

// const countryUkraine = {
//   name: "Ukraine",
//   population: 43815000,
//   area: 603700,
//   getDencity: function () {
//     console.log("howmany", this.population / this.area);
//   },
// };
// console.log(countryUkraine);
// countryUkraine.area++
// countryUkraine.getDencity()

// const countryPoland = {
//   name: "Poland",
//   population: 53815000,
//   area: 503700,
//   getDencity: function () {
//     console.log("howmany", this.population / this.area);
//   },
// };
// console.log(countryPoland);
// countryPoland.area++
// countryPoland.getDencity();

function Country(name, area, population) {
  this.name = name;
  this.area = area;
  this.population = population;
  this.getDencity = function () {
    console.log("howmany", this.population / this.area);
  };
}

const countryUkraine = new Country("Ukraine", 603700, 43815000);
console.log(countryUkraine);
countryUkraine.getDencity();

const countryPoland = new Country("Poland", 503700, 53815000);
console.log(countryPoland);
countryPoland.getDencity();



