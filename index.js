//1950-2030
// Високосный год кратен 4, но при этом не кратен 100, либо кратен 400. Иными словами, если год делится на 4 без остатка, но делится на 100 только с остатком, то он високосный, иначе — невисокосный, кроме случая, если он делится без остатка на 400 — тогда он всё равно високосный.

const START_DIAPAZON = 2190;
const END_DIAPAZON = 2210;

for (let year = START_DIAPAZON; year <= END_DIAPAZON; year++) {
  if(year%4===0 && year%100 !==0 || year%400===0){
    console.log(year)
  }
}
в зворотньому порядку вивести
for (let year = END_DIAPAZON; year >= START_DIAPAZON; year--) {
  if(year%4===0 && year%100 !==0 || year%400===0){
    console.log(year)
  }
}

//написати функцію, яка запитує в користувача число до тих пір, доки він його не введе
//функція брудна, нічого не приймає, а повертає виключно коректне число числового типу!!!!!!
// continue
//в циклі
//1 - запитую в користувача
//2 - перевіряємо:
//  а)  якщо введене є числом - виходимо і повертаємо число
//  б)  якщо введене є помилкою - переходимо до наступної     ітерації, в іншому випадку повертаємо число

const enterYourNumber = function () {
  while (true) {
    const num = prompt("enter your number");
    if (isNaN(Number(num)) || num === null || num === "" || num === " ") {
      continue;
    }
    return Number(num);
  }
};
console.log(enterYourNumber());


const enterYourNumber2 = function () {
  while (true) {
    const num = prompt("enter your number");
    if (isNaN(Number(num))===false && num !== null && num !== "" && num !== " ") {
      return Number(num);
    } 
  }
};
console.log(enterYourNumber2());