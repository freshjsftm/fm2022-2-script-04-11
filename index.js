"use strict";

const sentence = "   to     BE     oR     nOt    To bE   ";

/*
Jaden Case
To Be Or Not To Be
повертає нову строку

function toJadenCase(str) {
  // 1 - прибрати пробіли спереду і позаду і повернути нову строку
  let str1 = str.trim();
  // 2 - привести все до нижнього регистру і повернути нову строку
  let str2 = str1.toLowerCase();
  // 3 - отримати кожне слово окремо - масив слів
  let arrWords1 = str2.split(" ");
  console.log('arrWords1', arrWords1)
  // 4 - для кожного слова: //words.map()
  let arrWords2 = arrWords1.map((word) => {
    //     qwerty=>Q+werty=>Qwerty
    //     а - створювати нове слово, де кожна перша буква велика (word[0]),
    //     інші маленькі(word.slice(1))
    return word[0].toUpperCase() + word.substring(1);
  });
  console.log('arrWords2', arrWords2)
  // 5 - зі створених нових слів отримати строку
  let str3 = arrWords2.join(" ");
  return str3;
}
console.log(toJadenCase(sentence));
*/

function toJadenCase(str) {
  return str
    .trim()
    .toLowerCase()
    .split(" ")
    .map((word) => word[0].toUpperCase() + word.substring(1))
    .join(" ");
}
console.log(toJadenCase(sentence));
