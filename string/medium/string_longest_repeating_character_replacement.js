/*
Longest Repeating Character Replacement (Difficulty: Medium)

You are given a string s and an integer k. You can choose any character of the string and change it to any other uppercase English character. You can perform this operation at most k times.

Return the length of the longest substring containing the same letter you can get after performing the above operations.

Constraints:

1 <= s.length <= 105
s consists of only uppercase English letters.
0 <= k <= s.length
*/

const s1 = "ABAB";
const k1 = 2;
const expected1 = 4; // Replace the two 'A's with two 'B's or vice versa.

const s2 = "AABABBA";
const k2 = 1;
const expected2 = 4; // Replace the one 'A' in the middle with 'B' and form "AABBBBA".The substring "BBBB" has the longest repeating letters, which is 4. There may exists other ways to achieve this answer too.

/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
const characterReplacement = function (s, k) {
    const hashmap = {};
    let left = 0;
    let right = 0;
    let maxCharFreq = 0;
    let maxLen = 0;

    while (right < s.length) {
        const rightChar = s[right];
        hashmap[rightChar] = hashmap[rightChar] + 1 || 1;
        maxCharFreq = Math.max(maxCharFreq, hashmap[rightChar]);

        let currLen = right - left + 1;
        if (currLen - maxCharFreq > k) {
            const leftChar = s[left];
            hashmap[leftChar]--;
            left++;
        }
        right++;
    }
    maxLen = right - left;
    return maxLen;
};

console.log(characterReplacement(s1, k1));
console.log(characterReplacement(s2, k2));