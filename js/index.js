"use strict";

const dictionary = new Map()
dictionary.set("йти", 'go')
dictionary.set("їсти", 'eat');
dictionary.set("спати", 'sleep');
dictionary.set("кіт", 'cat');
dictionary.set("пес", 'dog');
dictionary.set("білка", 'squirrel');
dictionary.set("розумний", 'clever');
dictionary.set("веселий", 'happy');
dictionary.set("гарний", 'nice');
dictionary.set("багатий", 'rich');
dictionary.set("ліс", 'forest');
dictionary.set("у", 'in');
dictionary.set("з", 'with');
dictionary.set("день", 'day');

const set1 = new Set(dictionary.keys());
const arr = [1,2,5,6,5,2,1,5,5,6,8,2,6];
const arr2 = [2,9,6,5,4,8,5,3,58,9,5];
// const set2 = new Set([...arr, ...arr2]);
// console.log(set2)
//const uniqueArr = [...set2]
const uniqueArr = [...new Set([...arr, ...arr2])];
console.log(uniqueArr);
//const set1 = new Set("йти","їсти");

set1.add(1);
set1.add('1');
set1.add([1]);
set1.add({1:1});
set1.add('1');
set1.add('1');

console.log(set1)