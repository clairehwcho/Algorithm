/*
Group Anagrams (Difficulty: Medium)

Given an array of strings strs, group the anagrams together. You can return the answer in any order.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

Constraints:

1 <= strs.length <= 104
0 <= strs[i].length <= 100
strs[i] consists of lowercase English letters.
*/

const strs1 = ["eat", "tea", "tan", "ate", "nat", "bat"];
const expected1 = [["bat"], ["nat", "tan"], ["ate", "eat", "tea"]];

const strs2 = [""];
const expected2 = [[""]];

const strs3 = ["a"];
const expected3 = [["a"]];

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
const groupAnagrams = function (strs) {
    let result = [];
    let hashmap = new Map();

    for (let str of strs) {
        const sortedStr = str.split("").sort().join("");
        let subarray = hashmap.get(sortedStr) || [];
        subarray.push(str);
        hashmap.set(sortedStr, subarray);
        if (!result.includes(subarray)) {
            result.push(subarray);
        }
    }
    return result;
};

console.log(groupAnagrams(strs1));
console.log(groupAnagrams(strs2));
console.log(groupAnagrams(strs3));