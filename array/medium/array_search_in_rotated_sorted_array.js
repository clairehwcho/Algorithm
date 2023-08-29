/*
Search in Rotated Sorted Array (Difficulty: Medium)

There is an integer array nums sorted in ascending order (with distinct values).

Prior to being passed to your function, nums is possibly rotated at an unknown pivot index k (1 <= k < nums.length) such that the resulting array is [nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]] (0-indexed). For example, [0,1,2,4,5,6,7] might be rotated at pivot index 3 and become [4,5,6,7,0,1,2].

Given the array nums after the possible rotation and an integer target, return the index of target if it is in nums, or -1 if it is not in nums.

You must write an algorithm with O(log n) runtime complexity.

Constraints:

1 <= nums.length <= 5000
-104 <= nums[i] <= 104
All values of nums are unique.
nums is an ascending array that is possibly rotated.
-104 <= target <= 104
*/

const nums1 = [4, 5, 6, 7, 0, 1, 2];
const target1 = 0;
const expected1 = 4;

const nums2 = [4, 5, 6, 7, 0, 1, 2];
const target2 = 3;
const expected2 = -1;

const nums3 = [1];
const target3 = 0;
const expected3 = -1;

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

const search = function (nums, target) {
    let leftIdx = 0;
    let rightIdx = nums.length - 1;

    while (leftIdx <= rightIdx) {
        let midIdx = Math.floor((leftIdx + rightIdx) / 2);

        // Case 1: find target.
        if (nums[midIdx] === target) {
            return midIdx;
        }

        // Case 2: subarray on midIdx's left is sorted.
        else if (nums[leftIdx] <= nums[midIdx]) {
            if (nums[leftIdx] <= target && target < nums[midIdx]) {
                rightIdx = midIdx - 1;
            }
            else {
                leftIdx = midIdx + 1;
            }
        }

        // Case 3: subarray on midIdx's right is sorted.
        else {
            if (nums[midIdx] < target && target <= nums[rightIdx]) {
                leftIdx = midIdx + 1;
            }
            else {
                rightIdx = midIdx - 1;
            }
        }
    }
    return -1;
}

console.log(search(nums1, target1));
console.log(search(nums2, target2));
console.log(search(nums3, target3));