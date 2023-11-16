/*
Longest Palindromic Substring (Difficulty: Medium)

Given a string s, return the longest palindromic substring in s.

Constraints:

1 <= s.length <= 1000
s consist of only digits and English letters.
*/

const s1 = "babad";
const expected1 = "bab"; //"aba" is also a valid answer.

const s2 = "cbbd";
const expected2 = "bb";

/**
 * @param {string} s
 * @return {string}
 */
const longestPalindrome = function (s) {
    let longest = "";

    const expandFromCenter = function (str, left, right) {
        while (left >= 0 && right < str.length && str[left] === str[right]) {
            left--;
            right++;
        }
        return str.slice(left + 1, right);
    }

    for (let i = 0; i < s.length; i++) {
        let oddLenPal = expandFromCenter(s, i, i);
        let evenLenPal = expandFromCenter(s, i, i + 1);
        let currLongest = oddLenPal.length > evenLenPal.length ? oddLenPal : evenLenPal;
        if (currLongest.length > longest.length) {
            longest = currLongest;
        }
    }
    return longest;
};

console.log(longestPalindrome(s1));
console.log(longestPalindrome(s2));