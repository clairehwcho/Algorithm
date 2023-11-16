/*
Two Sum (Difficulty: Easy)
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
You may assume that each input would have exactly one solution, and you may not use the same element twice.
You can return the answer in any order.

Example 1:
Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

Example 2:
Input: nums = [3,2,4], target = 6
Output: [1,2]

Example 3:
Input: nums = [3,3], target = 6
Output: [0,1]

Constraints:
2 <= nums.length <= 104
-109 <= nums[i] <= 109
-109 <= target <= 109
Only one valid answer exists.
*/

/*
 * Approach 1: Brute Force
 * Time complexity: O(n^2)
 * Space complexity: O(1)
 * - The space required does not depend on the size of the input array, so only constant space is used.
 */
// class Solution {
//     public int[] twoSum(int[] nums, int target){
//         for (int i = 0; i<nums.length; i++){
//             for (int j = i+1; j<nums.length; j++){
//                 if (nums[i] + nums[j] == target){
//                     return new int[]{i, j};
//                 }
//             }
//         }
//         return new int[]{}; // In case there is no solution.
//     }
// }

/*
 * Approach 2: Two-pass HashTable (HashTable is used twice)
 * Time complexity: O(n)
 * - We traverse the list containing n elements exactly twice. Since the hash table reduces the lookup time to O(1), the overall time complexity is O(n).
 * Space complexity: O(n)
 * - The extra space required depends on the number of items stored in the hash table, which stores exactly n elements.
 */
// class Solution {
//     public int[] twoSum(int[] nums, int target){
//         // Initialize an empty HashMap.
//         Map<Integer, Integer> map = new HashMap<>();

//         // Build the hash table by adding each element's value as a key and its index as a value.
//         for (int i = 0; i< nums.length; i++){
//             map.put(nums[i], i);
//         }

//         // Loop through nums again.
//         for (int i = 0; i < nums. length; i++){
//             int complement = target - nums[i];
//             // If each element's complement exists in the hash table AND the complement is not nums[i] itself
//             if (map.containsKey(complement) && map.get(complement) != i){
//                 // Return current element's index and its complement's index.
//                 return new int[]{i, map.get(complement)};
//             }
//         }
//         return new int[]{}; // In case there is no solution.
//     }

// }

/*
 * Approach 3: One-pass HashTable (HashTable is used once)
 * Time complexity: O(n)
 * - We traverse the list containing n elements only once. Each lookup in the table costs only O(1) time.
 * Space complexity: O(n)
 * - The extra space required depends on the number of items stored in the hash table, which stores exactly n elements.
 */
class Solution {
    public int[] twoSum(int[] nums, int target) {
        // Initialize an empty HashMap.
        Map<Integer, Integer> map = new HashMap<>();

        // While iterating and inserting elements into the hash table, we can check if
        // current element's complement already exists in the hash table.
        for (int i = 0; i < nums.length; i++) {
            int complement = target - nums[i];
            if (map.containsKey(complement)) {
                return new int[] { map.get(complement), i };
            }
            map.put(nums[i], i);
        }
        return new int[] {}; // In case there is no solution.
    }
}