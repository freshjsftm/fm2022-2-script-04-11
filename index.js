const userInput = Number("9"); //Number(prompt('Enter number'))
//debugger
if (userInput % 7 === 0) {
  console.log("7");
} else if (userInput % 5 === 0) {
  console.log("5");
} else if (userInput % 3 === 0) {
  console.log("3");
} else if (userInput % 2 === 0) {
  console.log("2");
} else {
  console.log("1");
}

if (userInput % 7 === 0) {
  console.log("7");
} else {
  if (userInput % 5 === 0) {
    console.log("5");
  } else {
    if (userInput % 3 === 0) {
      console.log("3");
    } else {
      if (userInput % 2 === 0) {
        console.log("2");
      } else {
        if (userInput % 1 === 0) {
          console.log("1");
        }
      }
    }
  }
}

const lang = prompt("Choose lang:\n1 - ua\n2 - en\n3 - fr\n4 - ro");
//debugger
switch (lang) {
  case "1":
  case "ua":
  case "UA":
    console.log("привіт");
    break;
  case "2":
  case "en":
    console.log("hi");
    break;
  case 3:
  case "fr":
    console.log("Hé");
    break;
  case "4":
  case "ro":
    console.log("O zi buna!");
    break;
  default:
    console.log("404 try again");
    break;
}
console.log("switch end");

// if (lang === "1" || lang === "ua") {
//   console.log("привіт");
// } else if (lang === "2" || lang === "en") {
//   console.log("hi");
// } else if (lang === "3" || lang === "fr") {
//   console.log("Hé");
// } else if (lang === "4" || lang === "ro") {
//   console.log("O zi buna!");
// } else {
//   console.log("404 try again");
// }
