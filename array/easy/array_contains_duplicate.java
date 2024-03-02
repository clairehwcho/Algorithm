/*
Contains Duplicate (Difficulty: Easy)

Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

Example 1:
Input: nums = [1,2,3,1]
Output: true

Example 2:
Input: nums = [1,2,3,4]
Output: false

Example 3:
Input: nums = [1,1,1,3,3,4,3,2,4,2]
Output: true

Constraints:
1 <= nums.length <= 105
-109 <= nums[i] <= 109
*/

/*
 * Approach 1: Brute Force (Linear Search)
 * Time complexity: O(n^2)
 * Space complexity: O(1)
 */
// class Solution {
//     public boolean containsDuplicate(int[] nums) {
//         // Loop through the nums array with index i.
//         for (int i = 0; i < nums.length - 1; i++){
//             // Loop through the nums array with index j, which is i + 1.
//             for (int j = i + 1; j < nums.length; j++){
//                 // If nums[i] is equal to nums[j], return true.
//                 if (nums[i] == nums[j]) return true;
//             }
//         }
//         // Else, return false.
//         return false;
//     }
// }

/*
 * Approach 2: Sorting
 * - It is not a good practice to modify the input unless it is clear to the caller that the input will be modified. One may make a copy of nums and operate on the copy instead.
 * Time complexity: O(nlogn)
 * - The entire algo is dominated by the sorting step, which is O(nlogn).
 * Space complexity: O(1)
 */
// class Solution {
//     public boolean containsDuplicate(int[] nums){
//         // Sort the array.
//         Arrays.sort(nums);
//         // Loop through the sorted array.
//         for (int i = 0; i < nums.length - 1; i++){
//             // If the nums[i] is equal to nums[i + 1], return true.
//             if (nums[i] == nums[i + 1]) return true;
//         }
//         // Else, return false.
//         return false;
//     }
// }

/*
 * Approach 3: HashSet
 * Time complexity: O(n)
 * - We traverse the array only once.
 * Space complexity: O(n)
 * - The space used by the HashSet is linear with the number of elements in it.
 */
import java.util.HashSet;
import java.util.Set;

class Solution {
    public boolean containsDuplicate(int[] nums) {
        // Initialize an empty HashSet.
        Set<Integer> set = new HashSet<>();

        // Use enhanced for loop to iterate over HashSet.
        for (int num : nums) {
            // If the set contains num, return true
            if (set.contains(num)) {
                return true;
            }
            // Add the num to the set.
            set.add(num);
        }
        // Return false.
        return false;
    }
}