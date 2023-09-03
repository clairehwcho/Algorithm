/*
Combinations (Difficulty: Medium)

Given two integers n and k, return all possible combinations of k numbers chosen from the range [1, n].

You may return the answer in any order.

Constraints:

1 <= n <= 20
1 <= k <= n
*/

const n1 = 4;
const k1 = 2;
const expected1 = [[1, 2], [1, 3], [1, 4], [2, 3], [2, 4], [3, 4]];
// There are 4 choose 2 = 6 total combinations. Note that combinations are unordered, i.e., [1,2] and [2,1] are considered to be the same combination.

const n2 = 1;
const k2 = 1;
const expected2 = [[1]];
// There is 1 choose 1 = 1 total combination.

/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function (n, k) {
    const result = [];

    const backtrack = function (start, end, maxLen, currComb) {
        if (currComb.length === maxLen) {
            result.push([...currComb]);
            return;
        }
        for (let i = start; i <= end; i++) {
            currComb.push(i);
            backtrack(i + 1, end, maxLen, currComb);
            currComb.pop();
        }
    }
    backtrack(1, n, k, []);
    return result;
};

console.log(combine(n1, k1));
console.log(combine(n2, k2));