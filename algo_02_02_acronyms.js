/*
  Acronyms
  Create a function that, given a string, returns the string’s acronym
  (first letter of each word capitalized).
  Do it with .split first if you need to, then try to do it without
*/

const two_str1 = "object oriented programming";
const two_expected1 = "OOP";

// The 4 pillars of OOP
const two_str2 = "abstraction polymorphism inheritance encapsulation";
const two_expected2 = "APIE";

const two_str3 = "software development life cycle";
const two_expected3 = "SDLC";

// Bonus: ignore extra spaces
const two_str4 = "  global   information tracker    ";
const two_expected4 = "GIT";

function acronymize (str) {
  let newStr = str.trim().replace(/ +/g, " ");
  let newArr = newStr.split(" ");
  let resultStr = "";

  for (let i = 0; i < newArr.length; i++) {
    resultStr += newArr[i].charAt(0).toUpperCase();
  }
  return resultStr;

  // Alternative:
  // let newArr = str.split(" ");
  // let resultStr = "";

  // for (let i = 0; i < newArr.length; i++) {
  //   if (newArr[i] === " ") {
  //     // pass
  //   }
  //   else {
  //     resultStr += newArr[i].charAt(0).toUpperCase();
  //   }
  // }
  // return resultStr;
}

console.log(acronymize(two_str1));
console.log(acronymize(two_str2));
console.log(acronymize(two_str3));
console.log(acronymize(two_str4));
