/*
Minimum Size Subarray Sum (Difficulty: Medium)
Given an array of positive integers nums and a positive integer target, return the minimal length of a subarray whose sum is greater than or equal to target. If there is no such subarray, return 0 instead.

Constraints:
1 <= target <= 109
1 <= nums.length <= 105
1 <= nums[i] <= 104
 */

const target1 = 7;
const nums1 = [2,3,1,2,4,3];
const expected1 = 2;

const target2 = 4;
const nums2 = [1,4,4];
const expected2 = 1;

const target3 = 11;
const nums3 = [1,1,1,1,1,1,1,1];
const expected3 = 0;

// Use sliding window technique.
/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
const minSubArrayLen = function(target, nums) {
    let minLen = Infinity;
    let startIdx = 0;
    let endIdx = 0;
    let subarraySum = nums[0];

    while (startIdx <= endIdx && endIdx<nums.length){
        if (subarraySum >= target){
            minLen = Math.min(minLen, endIdx-startIdx+1);
            subarraySum -= nums[startIdx];
            startIdx++;
        }
        else {
            endIdx++;
            subarraySum += nums[endIdx];
        }
    }
    return minLen === Infinity ? 0 : minLen;
};

console.log(minSubArrayLen(target1, nums1));
console.log(minSubArrayLen(target2, nums2));
console.log(minSubArrayLen(target3, nums3));