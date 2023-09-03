/*
Find All Anagrams in a String (Difficulty: Medium)

Given two strings s and p, return an array of all the start indices of p's anagrams in s. You may return the answer in any order.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

Constraints:

1 <= s.length, p.length <= 3 * 104
s and p consist of lowercase English letters.
*/

const s1 = "cbaebabacd";
const p1 = "abc";
const expected1 = [0, 6];

const s2 = "abab";
const p2 = "ab";
const expected2 = [0, 1, 2];

/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
const findAnagrams = function (s, p) {
    let result = [];
    let hashmap = {};

    for (let i = 0; i < p.length; i++) {
        hashmap[p[i]] = hashmap[p[i]] + 1 || 1;
    };

    let left = 0;
    let right = 0;
    let count = p.length;

    while (right < s.length) {
        const leftChar = s[left];
        const rightChar = s[right];
        if (hashmap[rightChar] > 0) {
            count--;
        }
        hashmap[rightChar]--;
        right++;

        if (count === 0) {
            result.push(left);
        }

        if (right - left === p.length) {
            if (hashmap[leftChar] >= 0) {
                count++;
            }
            hashmap[leftChar]++;
            left++;
        }
    }
    return result;
};

console.log(findAnagrams(s1, p1));
console.log(findAnagrams(s2, p2));