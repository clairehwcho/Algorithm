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
const expected3 = ["abcd", "bcda", "cdab", "dabc", "acdb"];

// Order of the output array does not matter

/**
 * Add params if needed for recursion.
 * Generates all anagrams of the given str.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} str
 * @returns {Array<string>} All anagrams of the given str.
 */
function recursiveGenerateAnagrams (str) {
  let resultArr = [];
  let newStr = "";

  if (str.length === 1) {
    return resultArr.Arr.push(str);
  };

  for (let i = 0; i < str.length; i++) {
    let currentChar = str[i];
    newStr = currentChar + str.slice()


  }













  // str = str.split("").sort();
  // newstr = ''
  // result = []
  // if (str.length < 2) return str
  // for (var i = 0; i < str.length; i++) {
  //     newstr += recursiveGenerateAnagrams(str[i])
  // }
  // result.push(newstr)
  // return result
}

console.log(recursiveGenerateAnagrams(str1));