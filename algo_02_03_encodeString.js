/**
 * Encodes the given string such that duplicate characters appear once followed
 * by a number representing how many times the char occurs. Only encode strings
 * when the result yields a shorter length.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} str The string to encode.
 * @returns {string} The given string encoded.
 */

/*
  Given in an alumni interview in 2021.
  String Encode
  You are given a string that may contain sequences of consecutive characters.
  Create a function to shorten a string by including the character,
  then the number of times it appears.


  If final result is not shorter (such as "bb" => "b2" ),
  return the original string.
  */

const str1 = "aaaabbcdddaa";
const expected1 = "a4b2c1d3a2";

const str2 = "";
const expected2 = "";

const str3 = "a";
const expected3 = "a";

const str4 = "bbcc";
const expected4 = "bbcc";

function encodeStr (str) {
    let resultStr = "";
    let count = 1

    for (let i = 0; i < str.length; i++) {
        let currentLetter = str[i];
        let nextLetter = str[i + 1];

        if (currentLetter === nextLetter) {
            count++
        }
        else {
            resultStr += currentLetter + count;
            count = 1;
        }
    }
    if (resultStr.length >= str.length) {
        return str;
    }
    return resultStr;

    // Alternative:
    // let resultStr = "";
    // for (let i = 0; i < str.length; i++) {
    //     let count = 1;
    //     while (str[i] === str[i + 1]) {
    //         count++;
    //         i++;
    //     }
    //     resultStr = resultStr + str[i] + count;
    // }
    // return resultStr.length < str.length ? resultStr : str;
}

console.log(encodeStr(str1));
console.log(encodeStr(str2));
console.log(encodeStr(str3));
console.log(encodeStr(str4));
