/*
Subsets II (Difficulty: Medium)

Given an integer array nums that may contain duplicates, return all possible
subsets (the power set).

The solution set must not contain duplicate subsets. Return the solution in any order.

Constraints:

1 <= nums.length <= 10
-10 <= nums[i] <= 10
*/

const nums1 = [1, 2, 2];
const expected1 = [[], [1], [1, 2], [1, 2, 2], [2], [2, 2]];

const nums2 = [0];
const expected2 = [[], [0]];

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function (nums) {
    nums = nums.sort((a, b) => a - b);
    let result = [];

    const backtrack = (idx, currSubset) => {
        result.push([...currSubset]);

        for (let i = idx; i < nums.length; i++) {
            if (i > idx && nums[i] === nums[i - 1]) {
                continue;
            }
            currSubset.push(nums[i]);
            backtrack(i + 1, currSubset);
            currSubset.pop();
        }
    }
    backtrack(0, []);
    return result;
};

console.log(subsetsWithDup(nums1));
console.log(subsetsWithDup(nums2));