/*
Longest Substring Without Repeating Characters (Difficulty: Medium)
Given a string s, find the length of the longest substring without repeating characters.

Constraints:
0 <= s.length <= 5 * 104
s consists of English letters, digits, symbols and spaces.
*/

const s1 = "abcabcbb";
const expected1 = 3;

const s2 = "bbbbb";
const expected2 = 1;

const s3 = "pwwkew";
const expected3 = 3;

/**
 * @param {string} s
 * @return {number}
 */

// Use sliding window technique.
const lengthOfLongestSubstring = function (s) {
    let set = new Set();
    let startIdx = 0;
    let endIdx = 0;
    let maxLen = 0;

    while (startIdx <= endIdx && endIdx < s.length) {
        if (!set.has(s.charAt(endIdx))) {
            set.add(s.charAt(endIdx));
            maxLen = Math.max(set.size, maxLen);
            endIdx++;
        }
        else {
            set.delete(s.charAt(startIdx));
            startIdx++;
        }
    }
    return maxLen;
};

console.log(lengthOfLongestSubstring(s1));
console.log(lengthOfLongestSubstring(s2));
console.log(lengthOfLongestSubstring(s3));