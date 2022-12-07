"use strict";
const opt = {
  secuences: { "(": ")", "[": "]" },
  otherProp: true,
};
/**
 *
 * @param {string} str
 * @param {object} options.secuences => {secuences:{'(':')', '[':']'}}
 * @return {boolean}
 */
const checkSequences = (str, options) => {
  //з опцій дістаю об'єкт з дужками
  const secuences = options.secuences; //{'(':')', '[':']'}
  //збираю в масив усі значення об'єкту
  const arrClosedSecuences = Object.values(secuences);
  //створюю порожній стек
  const stack = new Stack(str.length);
  for (const symbol of str) {
    //якщо відкриваюча дужка - пушимо у стек
    //якщо в об'єкті з дужками є ключ, який дорівнює поточному символу
    //то мені повернеться значення і воно буде превда
    //в іншому випадку значення буде undefined і дасть мені false
    if (secuences[symbol]) {
      stack.push(symbol);
      continue;
    }
    //після першого символу перевірямо чи пустий стек
    //якщо пустий - то рядок починається з закриваючої дужки
    if (stack.isEmpty && arrClosedSecuences.includes(symbol)) {
      return false;
    }
    //якщо поточний символ закриваюча дужка //')'
    //symbol
    //дивимось на символ зверху стека
    const lastStackItem = stack.pick(); //'(' -> ')'
    //і якщо він парна відкриваюча дужка -
    //видаляємо його зі стеку
    if (symbol === secuences[lastStackItem]) {
      stack.pop();
    } else if (secuences[symbol] || arrClosedSecuences.includes(symbol)) {
      //тут відбираю усі дужки
      return false;
    }
  }
  return stack.isEmpty;
};
console.log(checkSequences("([()])", opt));
console.log(checkSequences("([)()]", opt));
console.log(checkSequences("8*(2 + (5-3)/arr[0])", opt));
console.log(checkSequences("))))())", opt));
