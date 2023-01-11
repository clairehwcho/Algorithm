/*
Binary String Expansion
You are given a STRING containing chars "0", "1", and "?"
For every "?" character, either "0" or "1" can be substituted.
Write a recursive function to return array of all valid strings with "?" chars expanded to "0" or "1".
*/

const str1 = "1?0?";
const expected1 = ["1000", "1001", "1100", "1101"];

const str2 = "10?";
const expected2 = ["100", "101"];

const str3 = "1???0";
const expected3 = [
    '10000', '10010',
    '10100', '10110',
    '11000', '11010',
    '11100', '11110'
]

// output list order does not matter

/**
* Add params if needed for recursion
* Expands a string such that each "?" in the given string will be replaced
* with a "0" and a "1".
* - Time: O(?).
* - Space: O(?).
* @param {string} str The string containing to expand.
* @returns {Array<string>} The expanded versions of the given string.
*/
function recursiveBinaryStringExpansion (str, resultArr = []) {
    let newStr = str;

    for (let i = 0; i < str.length; i++) {
        let currentChar = str[i];
        if (currentChar === "?") {
            newStr = str.replace(currentChar, "0")
            recursiveBinaryStringExpansion(newStr, resultArr);
            newStr = str.replace(currentChar, "1")
            recursiveBinaryStringExpansion(newStr, resultArr);
        }
    }
    if (!resultArr.includes(newStr)) {
        resultArr.push(newStr);
    };
    return resultArr;
};

console.log(recursiveBinaryStringExpansion(str1));
console.log(recursiveBinaryStringExpansion(str2));
console.log(recursiveBinaryStringExpansion(str3));