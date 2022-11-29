"use strict";

const boolean = new Boolean(1);
console.log(typeof boolean);
console.log(boolean);
console.dir(boolean);

const obj = {};

//0 '' undefined null false NaN

if (boolean) {
  console.log("object", boolean);
  if(boolean.valueOf()){
    console.log("true", boolean.valueOf());
  }else{
    console.log("false", boolean.valueOf());
  }
}else{
  console.log("error");
}


const str = '';

if(Boolean(str)){
  console.log(str, Boolean(str))
}else{
  console.log(str, Boolean(str))
}