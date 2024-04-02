package sorting_and_searching;

import java.util.*;

public class BinarySearch {
    /**
     * Given an array of integers nums which is sorted in ascending order,
     * and an integer target,
     * write a function to search target in nums.
     * If target exists, then return its index. Otherwise, return -1.
     * You must write an algorithm with O(log n) runtime complexity.
     */

    /**
     * Approach 1: Brute Force
     * Time Complexity: O(n), where n is the length of the array nums.
     * - It takes O(n) at most to traverse the entire array.
     * Space Complexity: O(1)
     * - It does not need additional space.
     *
     * @param nums   The input array of integers sorted in ascending order.
     * @param target The input integer to search in the nums.
     * @return The index of target if it is found, -1 otherwise.
     */

    public static int solutionOne(int[] nums, int target) {
        // Loop through the array.
        for (int i = 0; i < nums.length; i++) {
            // If the target is found
            if (nums[i] == target) {
                // Return its index.
                return i;
            }
        }
        // Otherwise, return -1.
        return -1;
    }

    /**
     * Approach 2: Binary Search(Divide and Conquer)
     * Time Complexity: O(logn), where n is the length of the array nums.
     * - By repeatedly dividing the search space in half,
     * binary search eliminates half of the remaining elements in each iteration.
     * - So, the number of iterations required to find the target value
     * is proportional to the logarithm of the size of the input array.
     * - After k comparisons, where k is teh number of iterations required to find
     * the target,
     * the search space is halved k times to approximately n/2^k elements.
     * - Solving for k in the equation n/2^k = 1 gives k = log base 2 of n.
     * Space Complexity: O(1)
     * - It only needs a constant amount of additional space for integer variables.
     *
     * @param nums   The input array of integers sorted in ascending order.
     * @param target The input integer to search in the nums.
     * @return The index of target if it is found, -1 otherwise.
     */

    public static int solutionTwo(int[] nums, int target) {
        // Set two pointers.
        int leftIdx = 0;
        int rightIdx = nums.length - 1;

        // Loop through the array until the left pointer meets the right pointer.
        while (leftIdx <= rightIdx) {
            // Set mid pointer
            // Math.floor() returns a double value.
            // So, explicit casting needed to convert it to an integer).
            int midIdx = (int) Math.floor((leftIdx + rightIdx) / 2);

            // If the target is equal to the num at mid pointer
            if (target == nums[midIdx]) {
                // return the mid index.
                return midIdx;
                // If the target is less than the num at the mid pointer
            } else if (target < nums[midIdx]) {
                // Move the right pointer to the left of the mid pointer.
                rightIdx = midIdx - 1;
                // If the target is greater than the num at the mid pointer
            } else {
                // Move the left pointer to the right of the mid pointer.
                leftIdx = midIdx + 1;
            }
        }
        // Otherwise, return -1.
        return -1;
    }

    public static void main(String[] args) {
        int[] nums1 = { -1, 0, 3, 5, 9, 12 };
        int target1 = 9;
        int expectedOutput1 = 4;

        int[] nums2 = { -1, 0, 3, 5, 9, 12 };
        int target2 = 2;
        int expectedOutput2 = -1;

        // Test solutionOne
        System.out.println("*****Testing solutionOne*****");
        int solutionOneOutput1 = solutionOne(nums1, target1);
        if (solutionOneOutput1 == expectedOutput1) {
            System.out.println(
                    "Input: " + Arrays.toString(nums1) + ", " + target1 + "\nOutput: " + solutionOneOutput1
                            + "\nExpected Output: "
                            + expectedOutput1
                            + "\nResult: Correct answer");
        } else {
            System.out.println("Wrong Answer");
        }
        int solutionOneOutput2 = solutionOne(nums2, target2);
        if (solutionOneOutput2 == expectedOutput2) {
            System.out.println(
                    "\nInput: " + Arrays.toString(nums2) + ", " + target2 + "\nOutput: " + solutionOneOutput2
                            + "\nExpected Output: "
                            + expectedOutput2
                            + "\nResult: Correct answer");
        } else {
            System.out.println("Wrong Answer");
        }

        // Test solutionTwo
        System.out.println("\n***** Testing solutionTwo *****");
        int solutionTwoOutput1 = solutionTwo(nums1, target1);
        if (solutionTwoOutput1 == expectedOutput1) {
            System.out.println(
                    "Input: " + Arrays.toString(nums1) + ", " + target1 + "\nOutput: " + solutionTwoOutput1
                            + "\nExpected Output: "
                            + expectedOutput1
                            + "\nResult: Correct answer");
        } else {
            System.out.println("Wrong Answer");
        }
        int solutionTwoOutput2 = solutionTwo(nums2, target2);
        if (solutionTwoOutput2 == expectedOutput2) {
            System.out.println(
                    "\nInput: " + Arrays.toString(nums2) + ", " + target2 + "\nOutput: " + solutionTwoOutput2
                            + "\nExpected Output: "
                            + expectedOutput2
                            + "\nResult: Correct answer");
        } else {
            System.out.println("Wrong Answer");
        }
    }

}
