function User(fname, lname, age){
  this.fname = fname;
  this.lname = lname;
  this.age = age; 
}
//static
User.isUser = function(value){
  return (value instanceof User);
}

function UserPrototype(){
  this.fullName = function(){
    return `${this.fname} ${this.lname}`;
  }
}

User.prototype = new UserPrototype();

const obj = {};
const persone1 = new User('Brad', 'Pitt', 58);
console.log(persone1.fullName())
console.log(User.isUser(persone1))
console.log(User.isUser(obj))
