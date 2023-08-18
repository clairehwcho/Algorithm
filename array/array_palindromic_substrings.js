/*
Palindromic Substrings (Difficulty: Medium)

Given a string s, return the number of palindromic substrings in it.
A string is a palindrome when it reads the same backward as forward.
A substring is a contiguous sequence of characters within the string.

Constraints:
1 <= s.length <= 1000
s consists of lowercase English letters.
*/

const s1 = "abc";
const expected1 = 3;

const s2 = "aaa";
const expected2 = 6;

/**
 * @param {string} s
 * @return {number}
 */
const countSubstrings = function (s) {
    let count = 0;

    const isPalindrome = (string, startIdx, endIdx) => {
        while (startIdx < endIdx) {
            if (string[startIdx] !== string[endIdx]) {
                return false;
            }
            startIdx++;
            endIdx--;
        }
        return true;
    }

    for (let i = 0; i < s.length; i++) {
        for (let j = i; j < s.length; j++) {
            count += isPalindrome(s, i, j) ? 1 : 0;
        }
    }
    return count;
};

console.log(countSubstrings(s1));
console.log(countSubstrings(s2));