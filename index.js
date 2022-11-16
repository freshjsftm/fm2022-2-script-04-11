// '4 * 5 = ':20

// function getMultipleTable(num = 4) {
//   const table = {};
//   for (let mult = 1; mult < 10; mult++) {
//     table[`${num} * ${mult} = `] = num * mult;
//   }
//   return table;
// }
function getMultipleTable(min = 1, max = 10) {
  const table = {};
  for (let num = min; num < max; num++) {
    for (let mult = 1; mult < 10; mult++) {
      table[`${num} * ${mult} = `] = num * mult;
    }
  }
  return table;
}
const resultTable = getMultipleTable();

// for (const key in resultTable) {
//   console.log(key, resultTable[key]);
// }

const example = prompt("4 * 5 = ", "4 * 5 = ");
console.log(resultTable[example]);
