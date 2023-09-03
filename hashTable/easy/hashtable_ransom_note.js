/*
Ransom Note (Difficulty: Easy)

Given two strings ransomNote and magazine, return true if ransomNote can be constructed by using the letters from magazine and false otherwise.

Each letter in magazine can only be used once in ransomNote.

Constraints:

1 <= ransomNote.length, magazine.length <= 105
ransomNote and magazine consist of lowercase English letters.
*/

const ransomNote1 = "a";
const magazine1 = "b";
const expected1 = false;

const ransomNote2 = "aa";
const magazine2 = "ab";
const expected2 = false;

const ransomNote3 = "aa";
const magazine3 = "aab";
const expected3 = true;

/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
const canConstruct = function (ransomNote, magazine) {
    let hashmap = {};

    for (const letter of magazine) {
        hashmap[letter] = hashmap[letter] + 1 || 1;
    };

    let i = 0;
    while (i < ransomNote.length) {
        const currLetter = ransomNote[i];

        if (hashmap[currLetter] && hashmap[currLetter] > 0) {
            hashmap[currLetter]--;
            i++;
        }
        else {
            return false;
        }
    }
    return true;
};

console.log(canConstruct(ransomNote1, magazine1));
console.log(canConstruct(ransomNote2, magazine2));
console.log(canConstruct(ransomNote3, magazine3));
