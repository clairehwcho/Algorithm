/*
  Acronyms (Difficulty: Easy)

  Create a function that, given a string, returns the string’s acronym
  (first letter of each word capitalized).
  Do it with .split first if you need to, then try to do it without
*/

const str1 = "object oriented programming";
const expected1 = "OOP";

const str2 = "abstraction polymorphism inheritance encapsulation";
const expected2 = "APIE";

const str3 = "software development life cycle";
const expected3 = "SDLC";

const str4 = "  global   information tracker    ";
const expected4 = "GIT";

// Solution 1: Using split()
// const acronymize = (str) => {
//   let newStr = str.trim().replace(/ +/g, " ");
//   let newArr = newStr.split(" ");
//   let resultStr = "";

//   for (let i = 0; i < newArr.length; i++) {
//     resultStr += newArr[i].charAt(0).toUpperCase();
//   }
//   return resultStr;

//   // Alternative:
//   // let newArr = str.split(" ");
//   // let resultStr = "";

//   // for (let i = 0; i < newArr.length; i++) {
//   //   if (newArr[i] === " ") {
//   //     // pass
//   //   }
//   //   else {
//   //     resultStr += newArr[i].charAt(0).toUpperCase();
//   //   }
//   // }
//   // return resultStr;
// }

// Solution 2: Without using split()
const acronymize = (str) => {
  str = str.trim();
  let result = "";
  let substring = "";

  for (let i = 0; i < str.length; i++) {
    if (str[i] !== " ") {
      substring += str[i];
    }

    if ((str[i] === " " && substring.length > 0) || i === str.length - 1) {
      result += substring[0].toUpperCase();
      substring = "";
    }
  }
  return result;
}

console.log(acronymize(str1));
console.log(acronymize(str2));
console.log(acronymize(str3));
console.log(acronymize(str4));
