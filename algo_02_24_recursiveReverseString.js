/**
 * Recursively reverses a string.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} str
 * @returns {string} The given str reversed.
 */

const str1 = "abc";
const expected1 = "cba";

const str2 = "";
const expected2 = "";

const str3 = "Hello World";
const expected3 = "dlroW olleH";

function recursiveReverseStr (str) {
    if (str.length === 0) {
        return str;
    }
    return str.charAt(str.length - 1) + recursiveReverseStr(str.slice(0, str.length - 1));
}

console.log(recursiveReverseStr(str1));
console.log(recursiveReverseStr(str2));
console.log(recursiveReverseStr(str3));
