/*
Merge Sorted Array (Difficulty: Easy)

You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively.
Merge nums1 and nums2 into a single array sorted in non-decreasing order.
The final sorted array should not be returned by the function, but instead be stored inside the array nums1. To accommodate this, nums1 has a length of m + n, where the first m elements denote the elements that should be merged, and the last n elements are set to 0 and should be ignored. nums2 has a length of n.

Example 1:
Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
Output: [1,2,2,3,5,6]
Explanation: The arrays we are merging are [1,2,3] and [2,5,6].
The result of the merge is [1,2,2,3,5,6] with the underlined elements coming from nums1.

Example 2:
Input: nums1 = [1], m = 1, nums2 = [], n = 0
Output: [1]
Explanation: The arrays we are merging are [1] and [].
The result of the merge is [1].

Example 3:
Input: nums1 = [0], m = 0, nums2 = [1], n = 1
Output: [1]
Explanation: The arrays we are merging are [] and [1].
The result of the merge is [1].
Note that because m = 0, there are no elements in nums1. The 0 is only there to ensure the merge result can fit in nums1.

Constraints:
nums1.length == m + n
nums2.length == n
0 <= m, n <= 200
1 <= m + n <= 200
-109 <= nums1[i], nums2[j] <= 109
*/

/*
 * Approach 1: Merge and Sort
 * Time complexity: O((n+m)log(n+m))
 * - The cost of sorting a list of length x using a built-in sorting algorithm is O(xlogx).
 * Space complexity: O(n)
 * - But it can vary
 */

// class Solution {
//     public void merge(int[] nums1, int m, int[] nums2, int n){
//         // Loop through nums2.
//         for (int i = 0; i<n; i++){
//             // Write the values from nums2 into the end of nums1.
//             nums1[i+m] = nums2[i];
//         }
//         // Sort nums1.
//         Arrays.sort(nums1);
//     }
// }

/*
 * Approach 2: Two Pointers (Start from the beginning)
 * Time complexity: O(n+m)
 * - We are performing n + 2m reads and n + 2m writes. Because constants are ignored in Big O, this gives us O(n+m)
 * Space complexity: O(m)
 * - We are allocating an additional array of length m.
 */

// class Solution {
//     public void merge(int[] nums1, int m, int[]nums2, int n){
//         // Make a copy of the first m elements of nums1.
//         int[] nums1Copy = new int[m];
//         for (int i = 0; i<m; i++){
//             nums1Copy[i] = nums1[i];
//         }

//         // Set two read pointers for nums1Copy and nums2 respectively.
//         int p1 = 0;
//         int p2 = 0;

//         // Loop through nums1 with a write pointer p while comparing elements from nums1Copy and nums2 and write the smallest to nums1.
//         for (int p = 0; p<m+n; p++){
//             // Make sure that two pointers are not out of bounds.
//             // If p2 is out of bounds
//             // or if p1 is within bounds and the value at p1 is smaller than the value at p2
//             if (p2 >= n || (p1 < m && nums1Copy[p1] < nums2[p2])){
//                 // Write nums1Copy[p1] into nums1[p] and increment p1 by 1.
//                 nums1[p] = nums1Copy[p1++];
//             }
//             else {
//                 // Else, write nums2[p2] into nums1[p] and increment p2 by 1.
//                 nums1[p] = nums2[p2++];
//             }
//         }
//     }
// }

/*
 * Approach 3: Two Pointers (Start from the end)
 * Time complexity: O(n+m)
 * - We are performing n + 2*m reads and n + 2*m writes. Because constants are ignored in Big O, this gives us O(n+m)
 * Space complexity: O(1)
 * - We are not using an extra array.
 */

class Solution {
    public void merge(int[] nums1, int m, int[] nums2, int n) {
        // Set three pointers to the end of their respective arrays.
        int pointer1 = m - 1;
        int pointer2 = n - 1;
        int pointer = nums1.length - 1;

        // Loop through nums1 backwards.
        while (pointer >= 0) {
            // If each pointer is within bounds, assign the value at the pointer.
            // Otherwise, assign minimum constant value (-2147483648).
            int cand1 = pointer1 >= 0 ? nums1[pointer1] : Integer.MIN_VALUE;
            int cand2 = pointer2 >= 0 ? nums2[pointer2] : Integer.MIN_VALUE;

            // Write the greater value into nums1[pointer] and decrement the corresponding pointer by 1.
            if (cand1 > cand2) {
                nums1[pointer] = cand1;
                pointer1--;
            } else {
                nums1[pointer] = cand2;
                pointer2--;
            }
            // Decrement the pointer.
            pointer--;
        }

        // // Loop through nums1 backwards.
        // for (int i = m + n - 1; i >= 0; i--){
        // // If the pointer2 is out of bounds, break out of the loop.
        // if (pointer2 < 0){
        // break;
        // }

        // // If the pointer1 is within bounds
        // // and the value at the pointer1 is greater than the value at the pointer2
        // if (pointer1 >= 0 && nums1[pointer1]> nums2[pointer2]){
        // // Write nums1[pointer1] into nums1[i] and decrement pointer1 by 1.
        // nums1[i] = nums1[pointer1--];
        // }
        // else {
        // // Else, write nums2[pointer2] into nums1[i] and decrement pointer2 by 1.
        // nums1[i] = nums2[pointer2--];
        // }
        // }
    }
}

