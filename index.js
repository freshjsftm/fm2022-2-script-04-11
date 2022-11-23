const nums = [1, 25,25,405, 6, 54, 9, 4, 8];

nums.sort(function (current, next) {
  if(current === next){
    return 0;
  }
  return (current < next) ? -1 : 1;
});
// nums.sort(); //Unicode
console.log(nums);


const languages = ['ua','fr', 'en', 'pl', 'es'];
languages.sort().reverse();
console.log(languages);