const num1 = 12;
const num2 = 45;

// while(true){
//   //const userInput = prompt(num1 +' + ' + num2 + ' = ');
//   const userInput = prompt(`enter answer:
//   ${num1} + ${num2} = `);
//   if(Number(userInput) === num1+num2){
//     console.log('Good!')
//     break;
//   }
// }

const product = {
  name: "dress",
  price: 123.44,
  currency: "uah",
  showInfo: function () {
    return `product name: ${this.name}
price: ${this.currency} ${this.price}`;
  },
  "favorit color": "red",
  45:40005,
  100:001
};

for (const key in product) {
  console.log(`product.${key} = ${product[key]}`);
}
console.log('key' in product)
console.log('100' in product)
console.log('getInfo' in product)



// console.log("product color: ", product["favorit color"]);
// console.log("product 45: ", product["45"]);
// console.log("product 45: ", product[45]);
// console.log("product name: ", product['name']);

// const key = 'name'
// console.log(`product.${key} = ${product[key]}`);


// const selectProduct = product; //copy address
// selectProduct.currency = "$";
// console.log("selectProduct: ", selectProduct);
// console.log("product: ", product);
// selectProduct.amount = 100;
