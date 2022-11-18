//об'єкт з логікою
function FuncForUser(){
  this.fullName = function(){
    return `${this.fname} ${this.lname}`;
  }
}

//об'єкт з данними
function User(fname, lname){
  this.fname = fname;
  this.lname = lname;
}

//пов'язуємо
User.prototype = new FuncForUser();

const user = new User('Brad', 'Pitt');
const user2 = new User('Tom', 'Rot');