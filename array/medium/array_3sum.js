/*
3Sum (Difficulty: Medium)
Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

Notice that the solution set must not contain duplicate triplets.

Constraints:

3 <= nums.length <= 3000
-105 <= nums[i] <= 105
*/

const nums1 = [-1, 0, 1, 2, -1, -4];
const expected1 = [[-1, -1, 2], [-1, 0, 1]];

const nums2 = [0, 1, 1];
const expected2 = [];

const nums3 = [0, 0, 0];
const expected3 = [[0, 0, 0]];

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const threeSum = function (nums) {
    let result = [];
    nums.sort((a, b) => a - b);

    for (let i = 0; i < nums.length; i++) {
        let j = i + 1;
        let k = nums.length - 1;
        let sum = 0;

        while (j < k) {
            sum = nums[i] + nums[j] + nums[k];

            if (sum === 0) {
                result.push([nums[i], nums[j], nums[k]]);
                while (nums[j + 1] === nums[j]) j++;
                while (nums[k - 1] === nums[k]) k--;
                j++;
                k--;
            } else if (sum < 0) j++;
            else k--;
        }
        while (nums[i + 1] === nums[i]) i++;
    }
    return result;
};

console.log(threeSum(nums1));
console.log(threeSum(nums2));
console.log(threeSum(nums3));