// const array = []; //instance
// console.log(array);

// const myArray = new MyArray();
// console.log(myArray);

const funcForMan = {
  sleep: function(){
    console.log(this.name, 'sleeping')
  },
  eat: function(){
    console.log(this.name, 'eating')
  },
  buy: function(){
    console.log(this.name, 'buy')
  }
}

const man = {
  name: 'Bred',
  sname: 'Pitt',
  gender: 'male',
  age: 58
}

man.__proto__ = funcForMan;

const user = {
  name:'Alan',
  role:'client'
}
user.__proto__ = funcForMan;