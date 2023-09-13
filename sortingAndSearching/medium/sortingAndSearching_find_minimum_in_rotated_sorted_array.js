/*
Find Minimum in Rotated Sorted Array (Difficulty: Medium)

Suppose an array of length n sorted in ascending order is rotated between 1 and n times. For example, the array nums = [0,1,2,4,5,6,7] might become:

[4,5,6,7,0,1,2] if it was rotated 4 times.
[0,1,2,4,5,6,7] if it was rotated 7 times.
Notice that rotating an array [a[0], a[1], a[2], ..., a[n-1]] 1 time results in the array [a[n-1], a[0], a[1], a[2], ..., a[n-2]].

Given the sorted rotated array nums of unique elements, return the minimum element of this array.

You must write an algorithm that runs in O(log n) time.

Constraints:

n == nums.length
1 <= n <= 5000
-5000 <= nums[i] <= 5000
All the integers of nums are unique.
nums is sorted and rotated between 1 and n times.
 */

const nums1 = [3,4,5,1,2];
const expected1 = 1;
// The original array was [1,2,3,4,5] rotated 3 times.

const nums2 = [4,5,6,7,0,1,2];
const expected2 = 0;
// The original array was [0,1,2,4,5,6,7] and it was rotated 4 times.

const nums3 = [11,13,15,17];
const expected3 = 11;
// The original array was [11,13,15,17] and it was rotated 4 times.

/**
 * @param {number[]} nums
 * @return {number}
 */
 /*
 * Solution #1: Binary search
 * Time complexity: O(logn)
 * - At every stage of binary search, we are splitting the array into half.
 * Space complexity: O(1)
 */
 var findMin = function (nums) {
    // Corner case
    if (nums.length === 1) {
        return nums[0];
    }

    let low = 0;
    let high = nums.length - 1;

    // If the last element is greater than the first element, there is no rotation.
    if (nums[low] < nums[high]) {
        return nums[0]
    }

    // Binary search way
    while (low < high) {
        let mid = Math.floor((low + high) / 2);

        if (nums[mid] > nums[high]) {
            low = mid + 1;
        }
        else {
            high = mid
        }
    }
    return nums[low];
};

console.log(findMin(nums1))
console.log(findMin(nums2))
console.log(findMin(nums3))