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

/*
 * Solution #1: Merge and sort
 * Time complexity: O((m+n)log(m+n))
 * - The cost of sorting a list of length x (m+n in this case) using a built-in sorting algorithm is O(xlog⁡x).
 * Space complexity: O(1)
 * - We are not using any extra space.
 */
// const merge = function (nums1, m, nums2, n) {
//     // Merge nums2 into nums1.
//     for (let i = 0; i < n; i++) {
//         nums1[m + i] = nums2[i];
//     }
//     nums1.sort();
// };

/*
 * Solution #2: Three pointers (start from the end)
 * Time complexity: O(m+n)
 * - We are iterating through both arrays once.
 * Space complexity: O(1)
 * - We are not using any extra space.
 */
// const merge = function (nums1, m, nums2, n) {
//     // Set two pointers to the end of their respective arrays.
//     let pointer1 = m - 1;
//     let pointer2 = n - 1;

//     // Move index i backwards through the array
//     for (let i = m + n - 1; i >= 0; i--) {
//         if (pointer2 < 0) {
//             break;
//         }

//         if (pointer1 >= 0 && nums1[pointer1] > nums2[pointer2]) {
//             nums1[i] = nums1[pointer1--];
//         } else {
//             nums1[i] = nums2[pointer2--];
//         }
//     }
// }

/*
 * Solution #3: Three pointers (start from the beginning)
 * Time complexity: O(m+n)
 * - We are performing n+2⋅m reads and n+2⋅m writes. Because constants are ignored in Big O notation, this gives us a time complexity of O(n+m).
 * Space complexity: O(m)
 * - We are allocating an additional array of length m.
 */
const merge = function (nums1, m, nums2, n) {
    // Make a copy of the first m elements of nums1
    let nums1M = [];
    for (let i = 0; i < m; i++) {
        nums1M.push(nums1[i]);
    };

    // Set two pointers for nums1M and nums2 respectively
    let pointer1 = 0;
    let pointer2 = 0;

    // Compare elements from nums1M and nums2 and insert the smallest num to nums1
    for (let i = 0; i < m + n; i++) {
        // Make sure that two pointers are not out of bounds
        if (pointer2 >= n || (pointer1 < m && nums1M[pointer1] < nums2[pointer2])) {
            nums1[i] = nums1M[pointer1++];
        } else {
            nums1[i] = nums2[pointer2++];
        }
    }
}