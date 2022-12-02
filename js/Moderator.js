class Moderator extends UserClasses {
  /**
   * 
   * @param {*} fname 
   * @param {*} lname 
   * @param {*} age 
   * @param {*} rating 
   */
  constructor(fname, lname, age, rating) {
    super(fname, lname, age);
    this.rating = rating;
  }
  // applyMessage() {
  //   return this.#privateField + "apply message";
  // }
  getFullName() {
    return `${this.fname} ${this._lname} ,my rating = ${this.rating}`;
  }
  showAge(){
    return this._age;
  }
}

class Admin extends Moderator {
  constructor(fname, lname, age, rating, propAdmin) {
    super(fname, lname, age, rating);
    this.propAdmin = propAdmin;
  }
  ban(user) {
    if(UserClasses.isUserClasses(user)){
      return user.isBan = true;
    }   
    throw new TypeError('instance must be user')
  }
  unBan(user) {
    if(UserClasses.isUserClasses(user)){
      return user.isBan = false;
    }   
    throw new TypeError('instance must be user')
  }
}

try {
  const moder = new Moderator("Moder", "Moderator", 55, 4.5);
  moder.qwe = 123;
  console.log(moder.getFullName());
  console.log(moder.showAge());
  console.log(moder.applyMessage());
  const admin = new Admin("Ad", "Admin", 22, 5.0, "red");
  console.log(admin.getFullName());
  const obj = {};
  admin.ban(obj);
  console.log(obj);
  console.log(moder.isBan);
} catch (error) {
  console.log(error);
}
