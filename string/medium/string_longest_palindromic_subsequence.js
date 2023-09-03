/*
Longest Palindromic Subsequence (Difficulty: Medium)

Given a string s, find the longest palindromic subsequence's length in s.

A subsequence is a sequence that can be derived from another sequence by deleting some or no elements without changing the order of the remaining elements.

Constraints:

1 <= s.length <= 1000
s consists only of lowercase English letters.
*/

const s1 = "bbbab";
const expected1 = 4; // One possible longest palindromic subsequence is "bbbb".

const s2 = "cbbd";
const expected2 = 2; // One possible longest palindromic subsequence is "bb".

/**
 * @param {string} s
 * @return {number}
 */
const longestPalindromeSubseq = function (s) {
    const dp = Array.from(Array(s.length), () => Array(s.length).fill(0));

    for (let start = s.length - 1; start >= 0; start--) {
        dp[start][start] = 1;
        for (let end = start + 1; end < s.length; end++) {
            if (s[start] === s[end]) {
                dp[start][end] = 2 + dp[start + 1][end - 1];
            } else {
                dp[start][end] = Math.max(dp[start + 1][end], dp[start][end - 1]);
            }
        }
    }
    return dp[0][s.length - 1];
};

console.log(longestPalindromeSubseq(s1));
console.log(longestPalindromeSubseq(s2));