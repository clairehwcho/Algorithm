/*
Sort Colors (Difficulty: Medium)

Given an array nums with n objects colored red, white, or blue, sort them in-place so that objects of the same color are adjacent, with the colors in the order red, white, and blue.
We will use the integers 0, 1, and 2 to represent the color red, white, and blue, respectively.
You must solve this problem without using the library's sort function.

Constraints:
n == nums.length
1 <= n <= 300
nums[i] is either 0, 1, or 2.
*/

const nums1 = [2,0,2,1,1,0];
const expected1 = [0,0,1,1,2,2];

const nums2 = [2,0,1];
const expected2 = [0,1,2];

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

const sortColors = function(nums) {
    let startIdx = 0;
    let endIdx = nums.length-1;
    let currentIdx = 0;

    while (currentIdx <= endIdx){
        if (nums[currentIdx] === 0){
            [nums[startIdx++], nums[currentIdx++]] = [nums[currentIdx], nums[startIdx]];
        }
        else if (nums[currentIdx] === 2){
            [nums[currentIdx], nums[endIdx--]] = [nums[endIdx], nums[currentIdx]];
        }
        else {
            currentIdx++;
        }
    }
    // return nums;
};

console.log(sortColors(nums1));
console.log(sortColors(nums2));