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

/*
 * Approach: Check All Substrings
 * Time Complexity: O(N^3) for input string of length N.
    - Since we just need to traverse every substring once, the total time taken is sum of the length of all substrings.
    - In a string of length N, then there are:
        N substrings of size 1.
        N−1 substrings of size 2.
        N−2 substrings of size 3.
        ...
        1 substring of size N (which is the entire string).
    - Total time taken to traverse all of these strings is approximately N^3.
 * Space Complexity: O(1)
    -  We don't need to allocate any extra space since we are repeatedly iterating on the input string itself.
 */

const countSubstrings = function (s) {
    let count = 0;

    const isPalindrome = (str, start, end) => {
        while (start < end) {
            if (str[start] !== str[end]) {
                return false;
            }
            start++;
            end--;
        }
        return true;
    }

    for (let i = 0; i < s.length; i++) {
        for (let j = i; j < s.length; j++) {
            if (isPalindrome(s, i, j)) {
                count++;
            }
        }
    }
    return count;
};

console.log(countSubstrings(s1));
console.log(countSubstrings(s2));