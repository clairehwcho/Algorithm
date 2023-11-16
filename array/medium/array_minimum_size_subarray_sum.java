/*
Minimum Size Subarray Sum (Difficulty: Medium)
Given an array of positive integers nums and a positive integer target, return the minimal length of a subarray whose sum is greater than or equal to target. If there is no such subarray, return 0 instead.

Example 1:
Input: target = 7, nums = [2,3,1,2,4,3]
Output: 2
Explanation: The subarray [4,3] has the minimal length under the problem constraint.

Example 2:
Input: target = 4, nums = [1,4,4]
Output: 1

Example 3:
Input: target = 11, nums = [1,1,1,1,1,1,1,1]
Output: 0

Constraints:
1 <= target <= 109
1 <= nums.length <= 105
1 <= nums[i] <= 104
 */

/*
 * Approach 1: Binary Search
 * Time complexity: O(nlogn)
 * Space complexity: O(1)
 */
// Unfinished solution
// class Solution {
//     public int minSubArrayLen(int target, int[] nums){
//         int n = nums.length;
//         int minLen = Integer.MAX_VALUE;
//         // Create an array of prefix sum.
//         int[] sums = new int[n+1]; // The length is n + 1 for easier calculations of 0-based index.
//         for (int i = 1; i <sums.length; i++){
//             sums[i] = sums[i-1] + nums[i-1];
//             // sums[1] = sums[0] + nums[0]
//             // sums[2] = sums[1] + nums[1]
//         }

//         // Use binary search.
//         for (int start = 0; start < sums.length; start++){
//             int end = binarySearch(start + 1, sums.length - 1, sums[start] + target, sums);
//             if (end === sums.length){
//                 break;
//             }
//             if (end - start < minLen){
//                 minLen = end - start
//             }
//         }
//     }
// }

/*
 * Approach 2: Sliding Window
 * Time complexity: O(n)
 * - The inner loop is not dependent to the outer loop. So it is n+n operation, which is O(n).
 * - If the inner loop is dependent to outer loop value, the inner loop resets itself as soon as the outer loop finishes one iteration.
 * - The start pointer moves no more than nums.length steps because the pointer does not start from 0 for each iteration but instead starts from its position from the last iteration.
 * Space complexity: O(1)
 */
class Solution {
    public int minSubArrayLen(int target, int[] nums) {
        int minLen = Integer.MAX_VALUE;
        boolean hasSubarray = false;
        int start = 0;
        int end = 0;
        int sum = 0;

        while (end < nums.length) {
            sum += nums[end];

            while (sum >= target) {
                hasSubarray = true;
                int currLen = end - start + 1;
                minLen = Math.min(minLen, currLen);
                sum -= nums[start];
                start++;
            }
            end++;
        }
        return hasSubarray ? minLen : 0;
    }
}