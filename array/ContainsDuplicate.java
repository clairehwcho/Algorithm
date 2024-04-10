package array;

import java.util.*;

public class ContainsDuplicate {
    /**
     * Given an integer array nums,
     * return true if any value appears at least twice in the array,
     * and return false if every element is distinct.
     */

    /**
     * Approach 1: Brute Force (Nested Loops)
     * Time Complexity: O(n^2), where n is the length of the array.
     * - The inner loop iterates n - 1 times for the first iteration
     * of the outer loop, n - 2 times for the second iteration ...
     * and 1 time for the last iteration of the outer loop,
     * summing up to (n - 1) + (n - 2) + ... 1 times.
     * - Therefore, the loop is executed (n-1)*n/2.
     * - As n grows larger, n^2 will dominate and n^2/2 is approximated.
     * - Therefore, the overall time complexity simplifies to O(n^2).
     * Space Complexity: O(1)
     * - It only needs a constant amount of extra space to store variables.
     *
     * @param nums The input array of integers.
     * @return True if duplicate values are found, false otherwise.
     */

    public static boolean solutionOne(int[] nums) {
        // Traverse the outer loop.
        for (int i = 0; i < nums.length - 1; i++) {
            // Traverse the inner loop.
            for (int j = i + 1; j < nums.length; j++) {
                // If duplicates are found
                if (nums[i] == nums[j]) {
                    // Return true.
                    return true;
                }
            }
        }
        // Otherwise, return false.
        return false;
    }

    /**
     * Approach 2: Sorting
     * Time Complexity:O(nlogn), where n is the length of the array.
     * - Sorting algorithm is typically have O(nlogn) time complexity.
     * - After sorting, it takes O(n) to loop through the sorted array.
     * - The dominant factor in the overall time complexity is the sorting step.
     * - Therefore, the overall time complexity is O(nlogn).
     * Space Complexity: O(1)
     * - It only needs a constant amount of extra space to store variables.
     *
     * @param nums The input array of integers.
     * @return True if duplicate values are found, false otherwise.
     */

    public static boolean solutionTwo(int[] nums) {
        // Sort the array.
        Arrays.sort(nums);

        // Loop through the array.
        for (int i = 0; i < nums.length - 1; i++) {
            // If the current element is equal to the next one
            if (nums[i] == nums[i + 1]) {
                // Return true.
                return true;
            }
        }
        // Otherwise, return false.
        return false;
    }

    /**
     * Approach 3: HashSet
     * Time Complexity:O(n), where n is the length of the array.
     * - We traverse the array only once.
     * Space Complexity: O(n)
     * - We need an extra space of O(n) at most to store the HashSet.
     *
     * @param nums The input array of integers.
     * @return True if duplicate values are found, false otherwise.
     */

    public static boolean solutionThree(int[] nums) {
        // Initialize an empty HashSet.
        Set<Integer> set = new HashSet<>();

        // Loop through the array.
        for (int i = 0; i < nums.length; i++) {
            // If the set already contains the element
            if (set.contains(nums[i])) {
                // Return true.
                return true;
            }
            // Else, add the element to the set.
            set.add(nums[i]);
        }
        // Otherwise, return false.
        return false;
    }

    public static void main(String[] args) {
        // Test case 1
        int[] nums1 = new int[] { 1, 2, 3, 1 };
        boolean expectedOutput1 = true;

        // Test case 2
        int[] nums2 = new int[] { 1, 2, 3, 4 };
        boolean expectedOutput2 = false;

        // Test case 3
        int[] nums3 = new int[] { 1, 1, 1, 3, 3, 4, 3, 2, 4, 2 };
        boolean expectedOutput3 = true;

        // Test solutionOne
        System.out.println("*****Testing solutionOne*****");
        System.out.println("Test Case 1:");
        System.out.println("Input array: " + Arrays.toString(nums1));
        System.out.println("Expected Output: " + expectedOutput1);
        System.out.println("Actual Output: " + solutionOne(nums1));
        System.out.println();
        System.out.println("Test Case 2:");
        System.out.println("Input array: " + Arrays.toString(nums2));
        System.out.println("Expected Output: " + expectedOutput2);
        System.out.println("Actual Output: " + solutionOne(nums2));
        System.out.println();
        System.out.println("Test Case 3:");
        System.out.println("Input array: " + Arrays.toString(nums3));
        System.out.println("Expected Output: " + expectedOutput3);
        System.out.println("Actual Output: " + solutionOne(nums3));
        System.out.println();

        // Test solutionTwo
        System.out.println("*****Testing solutionTwo*****");
        System.out.println("Test Case 1:");
        System.out.println("Input array: " + Arrays.toString(nums1));
        System.out.println("Expected Output: " + expectedOutput1);
        System.out.println("Actual Output: " + solutionTwo(nums1));
        System.out.println();
        System.out.println("Test Case 2:");
        System.out.println("Input array: " + Arrays.toString(nums2));
        System.out.println("Expected Output: " + expectedOutput2);
        System.out.println("Actual Output: " + solutionTwo(nums2));
        System.out.println();
        System.out.println("Test Case 3:");
        System.out.println("Input array: " + Arrays.toString(nums3));
        System.out.println("Expected Output: " + expectedOutput3);
        System.out.println("Actual Output: " + solutionTwo(nums3));
        System.out.println();

        // Test solutionThree
        System.out.println("*****Testing solutionThree*****");
        System.out.println("Test Case 1:");
        System.out.println("Input array: " + Arrays.toString(nums1));
        System.out.println("Expected Output: " + expectedOutput1);
        System.out.println("Actual Output: " + solutionThree(nums1));
        System.out.println();
        System.out.println("Test Case 2:");
        System.out.println("Input array: " + Arrays.toString(nums2));
        System.out.println("Expected Output: " + expectedOutput2);
        System.out.println("Actual Output: " + solutionThree(nums2));
        System.out.println();
        System.out.println("Test Case 3:");
        System.out.println("Input array: " + Arrays.toString(nums3));
        System.out.println("Expected Output: " + expectedOutput3);
        System.out.println("Actual Output: " + solutionThree(nums3));
        System.out.println();
    }
}
