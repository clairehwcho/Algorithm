/*
String: Reverse
Given a String,
return a new string that is the given string reversed
*/

const str1 = "creature";
const expected1 = "erutaerc";

const str2 = "dog";
const expected2 = "god";

const str3 = "hello";
const expected3 = "olleh";

const str4 = "";
const expected4 = "";

function reverse (arr) {
  let result = "";
  for (let i = arr.length - 1; i >= 0; i--) {
    result += arr[i];
  }
  return result;
}

console.log(reverse(str1));
console.log(reverse(str2));
console.log(reverse(str3));
console.log(reverse(str4));