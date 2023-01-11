/*
  String Anagrams
  Given a string,
  return array where each element is a string representing a different anagram (a different sequence of the letters in that string).
  Ok to use built in methods
*/

const str1 = "lim";
const expected1 = ["ilm", "iml", "lim", "lmi", "mil", "mli"];

const str2 = "a";
const expected2 = ["a"];

const str3 = "abcd";
const expected3 = [
  'abcd', 'abdc', 'acdb',
  'acbd', 'adbc', 'adcb',
  'bcda', 'bcad', 'bdac',
  'bdca', 'bacd', 'badc',
  'cdab', 'cdba', 'cabd',
  'cadb', 'cbda', 'cbad',
  'dabc', 'dacb', 'dbca',
  'dbac', 'dcab', 'dcba'
];

// Order of the output array does not matter

/**
 * Add params if needed for recursion.
 * Generates all anagrams of the given str.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} str
 * @returns {Array<string>} All anagrams of the given str.
 */
// function recursiveGenerateAnagrams (str) {
//   let resultArr = [];
//   let newStr = "";

//   if (str.length === 1) {
//     resultArr.push(str);
//     return resultArr;
//   };

//   for (let i = 0; i < str.length; i++) {
//     let currentChar = str[0];
//     newStr = recursiveGenerateAnagrams(str.slice(1));
//     for (let j = 0; j < newStr.length; j++) {
//       resultArr.push(currentChar + newStr[j]);
//     }
//     str = str.slice(1) + currentChar;
//   }
//   return resultArr;
// };

function recursiveGenerateAnagrams (str, resultArr = [], partialStr = "") {
  if (!str) {
    resultArr.push(partialStr);
  };

  for (let i = 0; i < str.length; i++) {
    let leftString = str.slice(0, i);
    let rightString = str.slice(i + 1);
    recursiveGenerateAnagrams(leftString + rightString, resultArr, partialStr + str[i]);
  }
  return resultArr;
}

console.log(recursiveGenerateAnagrams(str1));
console.log(recursiveGenerateAnagrams(str2));
console.log(recursiveGenerateAnagrams(str3));