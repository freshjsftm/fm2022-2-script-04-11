"use strict";
/**
 * 
 * @param {string} str 
 * @return {boolean}
 */
const checkSequences = (str) => {
  const stack = new Stack(str.length);
  for (const symbol of str) {
    //якщо відкриваюча дужка - пушимо у стек
    if(symbol === '(' ){
      stack.push(symbol);
      continue;
    }
    //після першого символу перевірямо чи пустий стек
    //якщо пустий - то рядок починається з закриваючої дужки
    if(stack.isEmpty){
      return false;
    }
    //якщо поточний символ закриваюча дужка
    //дивимось на символ зверху стека
    //і якщо він парна відкриваюча дужка - 
    //видаляємо його зі стеку
    if(symbol === ')' && stack.pick()==='('){
      stack.pop();
    }
  }
  return stack.isEmpty;
}
console.log(checkSequences('(())'))
console.log(checkSequences('()()'))
console.log(checkSequences('())'))
console.log(checkSequences('))))())'))