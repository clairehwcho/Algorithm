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
function recursiveBinaryStringExpansion (str, resultArr = [], i = 0) {
    // for (let i = 0; i < str.length; i++) {
    //     let currentChar = str[i];
    //     if (currentChar === "?") {
    //         newStr = str.replace(currentChar, "0")
    //         recursiveBinaryStringExpansion(newStr, resultArr);
    //         newStr = str.replace(currentChar, "1")
    //         recursiveBinaryStringExpansion(newStr, resultArr);
    //     }
    // }
    // console.log(newStr);
    // resultArr.push(newStr);
    // return resultArr;
    console.log(str);
    let currentChar = str[i];
    if (i === str.length) {
        resultArr.push(str);
        return resultArr;
    }

    if (currentChar === "?") {
        currentChar = "0";
        recursiveBinaryStringExpansion(str, resultArr, i + 1);
        currentChar = "1";
        recursiveBinaryStringExpansion(str, resultArr, i + 1);
        // currentChar = "?";
    }
    else {
        recursiveBinaryStringExpansion(str, resultArr, i + 1);
    }
};

console.log(recursiveBinaryStringExpansion(str1));
console.log(recursiveBinaryStringExpansion(str2));