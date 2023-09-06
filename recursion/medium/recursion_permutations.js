/*
Permutations (Difficulty: Medium)

Given an array nums of distinct integers, return all the possible permutations. You can return the answer in any order.

Constraints:

1 <= nums.length <= 6
-10 <= nums[i] <= 10
All the integers of nums are unique.
*/

const nums1 = [1, 2, 3];
const expected1 = [[1, 2, 3], [1, 3, 2], [2, 1, 3], [2, 3, 1], [3, 1, 2], [3, 2, 1]];

const nums2 = [0, 1];
const expected2 = [[0, 1], [1, 0]];

const nums3 = [1];
const expected3 = [[1]];

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
    let result = [];

    const backtrack = (startIdx, currPerm) => {
        if (startIdx === nums.length - 1) {
            result.push([...currPerm]);
            return;
        }
        for (let i = startIdx; i < nums.length; i++) {
            [nums[startIdx], nums[i]] = [nums[i], nums[startIdx]];
            backtrack(startIdx + 1, currPerm);
            [nums[startIdx], nums[i]] = [nums[i], nums[startIdx]];
        }
    }
    backtrack(0, nums);
    return result;
};

console.log(permute(nums1));
console.log(permute(nums2));
console.log(permute(nums3));