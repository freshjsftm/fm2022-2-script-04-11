function sum(){
  console.log(arguments)// властивість функції
  let resultSumma = 0;
  for (let i = 0; i < arguments.length; i++) {
    resultSumma += arguments[i]
  }
  return resultSumma
}
//console.dir(sum)
//console.log(sum(1,2,3,4,5));


// функція приймає безліч приймає безліч аргументів і повертає масив, в якому будуть тільки парні значення з переданих аргументів, якщо таких не має - то пустий масив
// getEvenArray(1,2,3,4) => [2,4]
// getEvenArray(1,5) => []
// getEvenArray(6,2,13,4,5,8) => [6,2,4,8]

