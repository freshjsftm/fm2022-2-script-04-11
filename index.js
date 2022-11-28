
const obj1 = {};

const obj2 = new Object();
const obj3 = Object();


function User(name){
  if(!new.target){
    return new User(name);
  }
  this.name = name;
}

const user = new User('Pit');
const user2 = User('Bob');