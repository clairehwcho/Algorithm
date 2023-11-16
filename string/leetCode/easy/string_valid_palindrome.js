/*
Valid Palindrome (Difficulty: Easy)

A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

Given a string s, return true if it is a palindrome, or false otherwise.

Constraints:

1 <= s.length <= 2 * 105
s consists only of printable ASCII characters.
*/

const s1 = "A man, a plan, a canal: Panama";
const expected1 = true;

const s2 = "race a car";
const expected2 = false;

const s3 = " ";
const expected3 = true;

/**
 * @param {string} s
 * @return {boolean}
 */
const isPalindrome = function (s) {
    let newS = s.replace(/[^a-z0-9]/gi, "").toLowerCase();
    let left = 0;
    let right = newS.length - 1;

    while (left < right) {
        if (newS[left] !== newS[right]) {
            return false;
        }
        left++;
        right--;
    }
    return true;
};

console.log(isPalindrome(s1));
console.log(isPalindrome(s2));
console.log(isPalindrome(s3));