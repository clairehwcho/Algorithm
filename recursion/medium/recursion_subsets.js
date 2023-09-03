/*
Subsets (Difficulty: Medium)

Given an integer array nums of unique elements, return all possible
subsets (the power set).

The solution set must not contain duplicate subsets. Return the solution in any order.

Constraints:

1 <= nums.length <= 10
-10 <= nums[i] <= 10
All the numbers of nums are unique.
*/

const nums1 = [1, 2, 3];
const expected1 = [[], [1], [2], [1, 2], [3], [1, 3], [2, 3], [1, 2, 3]];

const nums2 = [0];
const expected2 = [[], [0]];

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
    let result = [];
    let subset = [];

    const backtrack = (startIdx, currSubset) => {
        result.push([...subset]);

        for (let i = startIdx; i < nums.length; i++) {
            currSubset.push(nums[i]);
            backtrack(i + 1, currSubset);
            currSubset.pop();
        }
    }
    backtrack(0, subset);
    return result;
};

console.log(subsets(nums1));
console.log(subsets(nums2));
