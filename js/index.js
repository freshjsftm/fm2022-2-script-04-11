"use strict";

const user = {
  profession: "actor",
  privateInfo: {
    fname: "Brad",
    lname: "Pitt",
    gender: "male",
    birthday: {
      day: 18,
      month: 12,
      year: 1963,
    },
  },
  contactInfo: {
    profession: "superactor",
    address: {
      state: "Texas",
      town: "Texas",
      index: 123456,
      street: "Avenu 5",
    },
    mail: "Brad@gmail.com",
    phones: {
      home: "123",
      work: "456",
    },
  },
};

const {
  profession: profUser,
  contactInfo: { profession: subProfUser },
} = user;
console.log(profUser);
console.log(subProfUser);

// const month = user.privateInfo.birthday.month;
// const day = user.privateInfo.birthday.day;
const {
  privateInfo: {
    birthday: { month: monthUser, day },
  },
} = user;
console.log(monthUser, day);

// console.log(user.privateInfo.birthday.month)

//дістаньте пошту і стать

const getFullName = ({ privateInfo: { fname, lname } }) => {
  return `${fname} ${lname}`;
};

console.log(getFullName(user));

const { contactInfo, ...restObject } = user;





const arr = [7,8,9,10,11];

// const [one,,, four] = arr;

const [one,two, ...restArr] = arr;
