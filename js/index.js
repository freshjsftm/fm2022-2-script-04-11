"use strict";

/*
compare('eat', 'tea'); //true
compare('qwe', 'ewq'); //true
compare('qwe', 'qweqwe'); //false
compare('qwe', 'qwerty'); //false
*/

//створюємо словник - Map
//  ключ - символ
//  значення - кількість
//такий словник створюємо для кожного слова
//порівняти словники

const createMap = (str)=>{
  const mapStr = new Map();
  for (const symbol of str) {
    if (mapStr.has(symbol)) {
      const countSymbol = mapStr.get(symbol);
      mapStr.set(symbol, countSymbol + 1);
      continue;
    }
    mapStr.set(symbol, 1);
  }
  return mapStr;
}

const compare = (str1, str2) => {
  const mapStr1 = createMap(str1);
  const mapStr2 = createMap(str2);
  if(mapStr1.size !== mapStr2.size){
    return false;
  }
  for (const key of mapStr1.keys()) {
    if(mapStr1.get(key) !== mapStr2.get(key)){
      return false;
    }
  }
  return true;
};
