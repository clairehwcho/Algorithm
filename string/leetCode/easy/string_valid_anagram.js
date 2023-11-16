/*
Valid Anagram (Difficulty: Easy)

Given two strings s and t, return true if t is an anagram of s, and false otherwise.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

Constraints:

1 <= s.length, t.length <= 5 * 104
s and t consist of lowercase English letters.
*/

const s1 = "anagram";
const t1 = "nagaram";
const expected1 = true;

const s2 = "rat";
const t2 = "car";
const expected2 = false;

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

// Solution #1: Sorting
// const isAnagram = function (s, t) {
//     if (s.length !== t.length) return false;

//     newS = s.split("").sort().toString();
//     newT = t.split("").sort().toString();

//     return newS === newT;
// };

// Solution #2: Frequency Counter
const isAnagram = function (s, t) {
    if (s.length !== t.length) return false;

    let hashmap = new Map();

    for (let i = 0; i < s.length; i++) {
        if (hashmap.has(s[i])) {
            hashmap.set(s[i], hashmap.get(s[i]) + 1);
        }
        else {
            hashmap.set(s[i], 1);
        }
    };

    for (let i = 0; i < t.length; i++) {
        if (hashmap.has(t[i]) && hashmap.get(t[i]) !== 0) {
            hashmap.set(t[i], hashmap.get(t[i]) - 1);
        }
        else {
            return false;
        }
    }
    return true;
};

console.log(isAnagram(s1, t1));
console.log(isAnagram(s2, t2));