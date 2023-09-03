/*
Letter Combinations of a Phone Number (Difficulty: Medium)

Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent. Return the answer in any order.

A mapping of digits to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.

Constraints:

0 <= digits.length <= 4
digits[i] is a digit in the range ['2', '9'].
*/

const digits1 = "23";
const expected1 = ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"];

const digits2 = "";
const expected2 = [];

const digits3 = "2";
const expected3 = ["a", "b", "c"];

/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
    let letterMap = {
        '2': 'abc',
        '3': 'def',
        '4': 'ghi',
        '5': 'jkl',
        '6': 'mno',
        '7': 'pqrs',
        '8': 'tuv',
        '9': 'wxyz'
    }

    let result = [];

    if (digits.length === 0) {
        return result;
    }

    const backtrack = (idx, currStr) => {
        if (currStr.length === digits.length) {
            result.push(currStr);
            return;
        }

        let digit = digits[idx];
        let letters = letterMap[digit];

        for (const letter of letters) {
            currStr += letter;
            backtrack(idx + 1, currStr);
            currStr = currStr.substring(0, currStr.length - 1);
        }
    }
    backtrack(0, "");
    return result;
};

console.log(letterCombinations(digits1));
console.log(letterCombinations(digits2));
console.log(letterCombinations(digits3));