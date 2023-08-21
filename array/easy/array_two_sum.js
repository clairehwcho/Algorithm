/*
Two Sum (Difficulty: Easy)
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
You may assume that each input would have exactly one solution, and you may not use the same element twice.
You can return the answer in any order.

Constraints:
2 <= nums.length <= 104
-109 <= nums[i] <= 109
-109 <= target <= 109
Only one valid answer exists.
*/

const nums1 = [2,7,11,15];
const target1 = 9;
const expected1 = [0,1];

const nums2 = [3,2,4];
const target2 = 6;
const expected2 = [1,2];

const nums3 = [3,3];
const target3 = 6;
const expected3 = [0,1];

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function(nums, target) {
    for (let i=0; i<nums.length; i++){
        for (let j =i+1; j<nums.length; j++){
            if(nums[i] + nums[j] === target){
                return [i, j];
            }
        }
    }
};

console.log(twoSum(nums1, target1));
console.log(twoSum(nums2, target2));
console.log(twoSum(nums3, target3));