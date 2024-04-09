import java.util.*;

public class TwoSum {
    /**
     * Given an array of integers `nums` and an integer `target`,
     * return indices of the two numbers such that they add up to target.
     * You may assume that each input would have exactly one solution,
     * and you may not use the same element twice.
     * You can return the answer in any order.
     */

    /**
     * Approach 1: Brute Force (Nested Loop)
     * Time Complexity: O(n^2), where n is the length of the array nums.
     * - The inner loop is executed n times for each element of the outer loop,
     * which is also executed n times.
     * Space Complexity: O(1)
     * - It needs a constant amount of extra space to store indices.
     *
     * @param nums   The input array of integers in which the target is searched.
     * @param target The input integer which is the sum of two numbers in the nums.
     * @return The indices of the two numbers that add up to target.
     */

    public static int[] solutionOne(int[] nums, int target) {
        // Traverse the outer loop.
        for (int i = 0; i < nums.length - 1; i++) {
            // Traverse the inner loop.
            for (int j = i + 1; j < nums.length; j++) {
                // If the sume of two elements at indices i and j equals target
                if (nums[i] + nums[j] == target) {
                    // Return the array of indices.
                    return new int[] { i, j };
                }
            }
        }
        // Return an empty array in case there is no solution.
        return new int[] {};
    }

    /**
     * Approach 2: Two-pass HashMap
     * Time Complexity: O(n), where n is the length of the array nums.
     * - It takes O(2n) to traverse the array twice.
     * - The lookup time in the HashMap takes a constant time of O(1).
     * - Therefore, the overall time complexity is O(n).
     * Space Complexity: O(n)
     * - It needs an additional O(n) space to store the HashMap.
     *
     * @param nums   The input array of integers in which the target is searched.
     * @param target The input integer which is the sum of two numbers in the nums.
     * @return The indices of the two numbers that add up to target.
     */

    public static int[] solutionTwo(int[] nums, int target) {
        // Initialize an empty HashMap.
        Map<Integer, Integer> map = new HashMap<>();

        // Loop through the nums to build the HashMap.
        for (int i = 0; i < nums.length; i++) {
            // Add each num's value as a key and its index as a value.
            map.put(nums[i], i);
        }

        // Loop through the nums again.
        for (int i = 0; i < nums.length; i++) {
            int complement = target - nums[i];
            // If each num's complement exists in the HashMap
            if (map.containsKey(complement)) {
                // Return indices.
                return new int[] { map.get(complement), i };
            }
        }
        // Return an empty array in case there is no solution.
        return new int[] {};
    }

    /**
     * Approach 3: One-pass HashMap
     * Time Complexity: O(n), where n is the length of the array nums.
     * - It takes O(2n) to traverse the array twice.
     * - The lookup time in the HashMap takes a constant time of O(1).
     * - Therefore, the overall time complexity is O(n).
     * Space Complexity: O(n)
     * - It needs an additional O(n) space to store the HashMap.
     *
     * @param nums   The input array of integers in which the target is searched.
     * @param target The input integer which is the sum of two numbers in the nums.
     * @return The indices of the two numbers that add up to target.
     */

    public static int[] solutionThree(int[] nums, int target) {
        // Initialize an empty HashMap.
        Map<Integer, Integer> map = new HashMap<>();

        // Loop through the nums.
        for (int i = 0; i < nums.length; i++) {
            int complement = target - nums[i];

            // If each num's complement exists in the HashMap
            if (map.containsKey(complement)) {
                // Return indices.
                return new int[] { map.get(complement), i };
            }
            // Else, add each num's value as a key and its index as a value.
            map.put(nums[i], i);
        }
        // Return an empty array in case there is no solution.
        return new int[] {};
    }

    public static void main(String[] args) {
        // Test case 1
        int[] nums1 = new int[] { 2, 7, 11, 15 };
        int target1 = 9;
        int[] expectedOutput1 = new int[] { 0, 1 };

        // Test case 2
        int[] nums2 = new int[] { 3, 2, 4 };
        int target2 = 6;
        int[] expectedOutput2 = new int[] { 1, 2 };

        // Test case 3
        int[] nums3 = new int[] { 3, 3 };
        int target3 = 6;
        int[] expectedOutput3 = new int[] { 0, 1 };

        // Test solutionOne
        System.out.println("*****Testing solutionOne*****");
        System.out.println("Test Case 1:");
        System.out.println("Input array: " + Arrays.toString(nums1));
        System.out.println("Input target: " + target1);
        System.out.println("Expected Output: " + Arrays.toString(expectedOutput1));
        System.out.println("Actual Output: " + Arrays.toString(solutionOne(nums1, target1)));
        System.out.println();
        System.out.println("Test Case 2:");
        System.out.println("Input array: " + Arrays.toString(nums2));
        System.out.println("Input target: " + target2);
        System.out.println("Expected Output: " + Arrays.toString(expectedOutput2));
        System.out.println("Actual Output: " + Arrays.toString(solutionOne(nums2, target2)));
        System.out.println();
        System.out.println("Test Case 3:");
        System.out.println("Input array: " + Arrays.toString(nums3));
        System.out.println("Input target: " + target3);
        System.out.println("Expected Output: " + Arrays.toString(expectedOutput3));
        System.out.println("Actual Output: " + Arrays.toString(solutionOne(nums3, target3)));
        System.out.println();
        // Test solutionTwo
        System.out.println("*****Testing solutionTwo*****");
        System.out.println("Test Case 1:");
        System.out.println("Input array: " + Arrays.toString(nums1));
        System.out.println("Input target: " + target1);
        System.out.println("Expected Output: " + Arrays.toString(expectedOutput1));
        System.out.println("Actual Output: " + Arrays.toString(solutionTwo(nums1, target1)));
        System.out.println();
        System.out.println("Test Case 2:");
        System.out.println("Input array: " + Arrays.toString(nums2));
        System.out.println("Input target: " + target2);
        System.out.println("Expected Output: " + Arrays.toString(expectedOutput2));
        System.out.println("Actual Output: " + Arrays.toString(solutionTwo(nums2, target2)));
        System.out.println();
        System.out.println("Test Case 3:");
        System.out.println("Input array: " + Arrays.toString(nums3));
        System.out.println("Input target: " + target3);
        System.out.println("Expected Output: " + Arrays.toString(expectedOutput3));
        System.out.println("Actual Output: " + Arrays.toString(solutionTwo(nums3, target3)));
        System.out.println();
        // Test solutionThree
        System.out.println("*****Testing solutionThree*****");
        System.out.println("Test Case 1:");
        System.out.println("Input array: " + Arrays.toString(nums1));
        System.out.println("Input target: " + target1);
        System.out.println("Expected Output: " + Arrays.toString(expectedOutput1));
        System.out.println("Actual Output: " + Arrays.toString(solutionThree(nums1, target1)));
        System.out.println();
        System.out.println("Test Case 2:");
        System.out.println("Input array: " + Arrays.toString(nums2));
        System.out.println("Input target: " + target2);
        System.out.println("Expected Output: " + Arrays.toString(expectedOutput2));
        System.out.println("Actual Output: " + Arrays.toString(solutionThree(nums2, target2)));
        System.out.println();
        System.out.println("Test Case 3:");
        System.out.println("Input array: " + Arrays.toString(nums3));
        System.out.println("Input target: " + target3);
        System.out.println("Expected Output: " + Arrays.toString(expectedOutput3));
        System.out.println("Actual Output: " + Arrays.toString(solutionThree(nums3, target3)));
        System.out.println();
    }
}
