/*
Merge Sorted Array (Difficulty: Easy)

You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively.
Merge nums1 and nums2 into a single array sorted in non-decreasing order.
The final sorted array should not be returned by the function, but instead be stored inside the array nums1. To accommodate this, nums1 has a length of m + n, where the first m elements denote the elements that should be merged, and the last n elements are set to 0 and should be ignored. nums2 has a length of n.

Constraints:
nums1.length == m + n
nums2.length == n
0 <= m, n <= 200
1 <= m + n <= 200
-109 <= nums1[i], nums2[j] <= 109

*/

const nums1A = [1, 2, 3, 0, 0, 0];
const m1 = 3;
const nums1B = [2, 5, 6];
const n1 = 3;
const expected1 = [1, 2, 2, 3, 5, 6];

const nums2A = [1];
const m2 = 1;
const nums2B = [];
const n2 = 0;
const expected2 = [1];

const nums3A = [0];
const m3 = 0;
const nums3B = [1];
const n3 = 1;
const expected3 = [1];

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */

// Solution #1: Merge and sort
// const merge = function (nums1, m, nums2, n) {
//     for (let i = 0; i < n; i++) {
//         nums1[i + m] = nums2[i];
//     }
//     nums1.sort();
//     return nums1;
// };

// Solution #2: Three Pointers (start from the beginning)
const merge = function (nums1, m, nums2, n) {
    let pointer1A = m - 1;
    let pointer1B = m + n - 1;
    let pointer2 = n - 1;

    while (pointer2 >= 0) {
        if (pointer1A >= 0 && nums1[pointer1A] > nums2[pointer2]) {
            nums1[pointer1B--] = nums1[pointer1A--];
        }
        else {
            nums1[pointer1B--] = nums2[pointer2--];
        }
    }
    return nums1;
};

console.log(merge(nums1A, m1, nums1B, n1));
console.log(merge(nums2A, m2, nums2B, n2));
console.log(merge(nums3A, m3, nums3B, n3));
