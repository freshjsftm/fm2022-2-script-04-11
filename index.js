//об'єкт з логікою
function FuncForUser() {
  this.fullName = function () {
    return `${this.fname} ${this.lname}`;
  };
}

//об'єкт з данними
function User(fname, lname) {
  this.fname = fname;
  this.lname = lname;
}

//пов'язуємо
User.prototype = new FuncForUser();

const user = new User("Brad", "Pitt");
const user2 = new User("Tom", "Rot");

//створитий об'єкт чайник
// властивості: колір, об'єм, мощність
// методи: додати води, відлити води, працює

function MethodForKattle() {
  this.work = function () {
    if (this.curentWater > 0) {
      return "work with water " + this.curentWater;
    }
    return "alert! add water";
  };
  this.addWater = function (value) {
    if (this.curentWater + value <= this.volume) {
      this.curentWater += value;
    }
    return this.curentWater;
  };
  this.subWater = function (value) {
    if (this.curentWater >= value) {
      this.curentWater -= value;
    }
    return this.curentWater;
  };
  this.subWaterStas = function (value) {
    if (this.currentWater - value >= 0) {
      this.currentWater -= value;
    }
    return this.currentWater;
  };
}
function Kattle(color, volume, power) {
  this.color = color;
  this.volume = volume;
  this.power = power;
  this.curentWater = 0;
}
Kattle.prototype = new MethodForKattle();

const kattle = new Kattle("pink", 0.5, 800);
console.log(kattle.work());
kattle.addWater(123);
console.log(kattle.work());



