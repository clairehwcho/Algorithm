/*
Generate Parentheses (Difficulty: Medium)

Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

Constraints:

1 <= n <= 8
*/

const n1 = 3;
const expected1 = ["((()))", "(()())", "(())()", "()(())", "()()()"];

const n2 = 1;
const expected2 = ["()"];

/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
    let result = [];

    const generator = function (str, open, close) {
        if (open > n || close > n || close > open) {
            return;
        }

        if (str.length === n * 2 && open === close) {
            result.push(str);
            return;
        }
        generator(str + "(", open + 1, close);
        generator(str + ")", open, close + 1);
    }
    generator("", 0, 0);
    return result;
};

console.log(generateParenthesis(n1));
console.log(generateParenthesis(n2));
