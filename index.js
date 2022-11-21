const languages = ["en", "ua", "fr", "fr", "pl", "ua"];

//join
const string = languages.join('');

//написати функцію, яка приймає масив, і повертає true, якщо в масиві є два однакових значення, які ідуть поспіль, інакше - повертає false

function checkKeysInRow(array) {
  //для кожного елементу треба зробити наступну перевірку
  for (let index = 0; index < array.length; index++) {
    // поточний === наступний
    if (array[index] === array[index + 1]) {
      //якщо правда то завершити роботу і повернути true
      return true;
    }
  }
  //якщо дійшли до кінця масиву і не знайшли поспіль однакових, то повертаємо false  
  return false;
}
