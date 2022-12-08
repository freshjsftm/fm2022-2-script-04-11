"use strict";

const dictionary = new Map();
dictionary.set("йти", "go");
dictionary.set("їсти", "eat");
dictionary.set("спати", "sleep");
dictionary.set("кіт", "cat");
dictionary.set("пес", "dog");
dictionary.set("білка", "squirrel");
dictionary.set("розумний", "clever");
dictionary.set("веселий", "happy");
dictionary.set("гарний", "nice");
dictionary.set("багатий", "rich");
dictionary.set("ліс", "forest");
dictionary.set("у", "in");
dictionary.set("з", "with");
dictionary.set("день", "day");

if (dictionary.has("qwe")) {
  dictionary.delete("qwe");
} else {
  console.log('not found')
}

const arrays = [...dictionary.entries()]   //dictionary.keys();

// const keys = dictionary.keys();
// console.log(keys)
for (const key of dictionary.keys()) {
  console.log(key)
}
// for (const val of dictionary.values()) {
//   console.log(val)
// }
// for (const [key, value] of dictionary.entries()) {
//   console.log(key, value);
// }

const str =
  "Розумний Пес з веселий кіт Йти вечір швидко у ліс їсти Гарний білка .";

// const translate = (str, dict = dictionary)=>{
//   const words = str.toLowerCase().split(' ');
//   const translateWords = words.map((word)=>{
//     return dict.has(word)?dict.get(word):word
//   })
//   return translateWords.join(' ')
// }

const translate = (str, dict = dictionary, separator = " ") =>
  str
    .toLowerCase()
    .split(separator)
    .map((word) => (dict.has(word) ? dict.get(word) : word))
    .join(separator);

//console.log(translate(str));
