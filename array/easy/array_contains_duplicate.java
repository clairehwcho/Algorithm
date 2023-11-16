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
 * Approach 1: Linear Search
 * Time complexity: O(n^2)
 * Space complexity: O(1)
 */
// class Solution {
//     public boolean containsDuplicate(int[] nums){
//         for (int i = 0; i < nums.length; i++){
//             for (int j = i+1; j < nums.length; j++){
//                 if (nums[i] == nums[j]){
//                     return true;
//                 }
//             }
//         }
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
//         Arrays.sort(nums);
//         for (int i = 0; i<nums.length - 1; i++){
//             if (nums[i] == nums[i+1]){
//                 return true;
//             }
//         }
//         return false;
//     }
// }

/*
 * Approach 3: HashTable
 * Time complexity: O(n)
 * - We do search() and insert() for n times and each operation takes constant time.
 * Space complexity: O(n)
 * - The space used by a hash table is linear with the number of elements in it.
 */

class Solution {
    public boolean containsDuplicate(int[] nums) {
        // Initialize a HashSet.
        Set<Integer> set = new HashSet<>();

        // Use enhanced for loop to iterate over HashSet.
        for (int num : nums) {
            if (set.contains(num)) {
                return true;
            }
            set.add(num);
        }
        return false;
    }
}