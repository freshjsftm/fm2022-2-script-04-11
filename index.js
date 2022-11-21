const arrNums1 = [1, 2, 3];
const arrNums2 = [9, 8, 7];
const arrNums3 = [4, 5, 6];
//concat
const resultArrConcat = arrNums1.concat(arrNums2, 12, arrNums3);

//fill
const newArray = new Array(5)
                    .fill(0);
//newArray.fill(0);

//pop
const deletedElementLast = arrNums1.pop();
//shift
const deletedElementFirst = arrNums2.shift();
//unshift
arrNums1.unshift(15,45,78);



const languages = ['ua', 'fr', 'pl', 'en'];
//мову з першого місця переставити на останнє
//витягнути перше значення масива
//це значення помістити в кінець
const firstLang = languages.shift();
languages.push(firstLang); //languages.push('ua');
