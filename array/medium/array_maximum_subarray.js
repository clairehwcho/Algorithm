/*
Maximum Subarray (Difficulty: Medium)

Given an integer array nums, find the subarray with the largest sum, and return its sum.

Constraints:
1 <= nums.length <= 105
-104 <= nums[i] <= 104
*/

const nums1 = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
const expected1 = 6;

const nums2 = [1];
const expected2 = 1;

const nums3 = [5, 4, -1, 7, 8];
const expected3 = 23;

/**
 * @param {number[]} nums
 * @return {number}
 */
const maxSubArray = function (nums) {
    let maxSum = nums[0];
    let currSum = nums[0];

    for (let i = 1; i < nums.length; i++) {
        currSum = Math.max(currSum + nums[i], nums[i]);
        maxSum = Math.max(maxSum, currSum);
    }
    return maxSum;
};

console.log(maxSubArray(nums1));
console.log(maxSubArray(nums2));
console.log(maxSubArray(nums3));