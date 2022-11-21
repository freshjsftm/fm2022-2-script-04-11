const languages = [ 'en', 'ua', 'fr', 'pl','ua' ];
//includes
const checkLang = languages.includes('pl');// true false
if(checkLang){
  console.log('dzen\' dobruy')
}else{
  console.log('error')
}

//reverse
const reverseLanguages = languages.reverse(); //address
languages.unshift('fr');

//indexOf
const findIndex1 = languages.indexOf('ua');
console.log(findIndex1)
//lastIndexOf
const findIndex2 = languages.lastIndexOf('ua');
console.log(findIndex2)

//написати функцію checkKeyAtArray, яка отримує в якості аргументів массив і ключ(елемент, який треба знайти) і повертає true,якщо ключ є в масиві, і false, якщо ключа не має в масиві
//checkKeyAtArray(languages, 'en') => true

const checkKey = function(arr,key){
 return arr.includes(key);
}


