package array;

import java.util.*;

public class MergeSortedArray {
    /**
     * You are given two integer arrays nums1 and nums2,sorted in non-decreasing
     * order, and two integers m and n, representing the number of elements in nums1
     * and nums2 respectively.
     * Merge nums1 and nums2 into a single array sorted in non-decreasing order.
     *
     * The final sorted array should not be returned by the function, but instead be
     * stored inside the array nums1. To accommodate this, nums1 has a length of m +
     * n, where the first m elements denote the elements that should be merged, and
     * the last n elements are set to 0 and should be ignored. nums2 has a length of
     * n.
     */

    /**
     * Approach 1: Brute Force (Merge and Sort)
     * Time Complexity: O((m+n)log(m+n)), where m + n is the length of the nums1 and
     * n is the length of the nums2.
     * - It takes O(n) time to iterate over the nums2.
     * - Sorting typically uses quicksort, which has time complexity of O(nlogn).
     * - O(n) is smaller than O((m+n)log(m+n)) because n is smaller than (m + n).
     * - Therefore, O(n) + O((m+n)log(m+n)) simplifies to O((m+n)log(m+n)).
     * Space Complexity:O(1)
     * - It does not use any extra space.
     *
     * @param nums1 The input array of integers with the length of m + n, sorted in
     *              non-decreasing order.
     * @param nums2 The input array of integers with the length of n, sorted in
     *              non-decreasing order.
     * @param m     The number of elements to be merged in nums1.
     * @param n     The number of elements to be merged in nums2.
     * @return None. The final sorted array should be stored inside the array nums1.
     */

    public static void solutionOne(int[] nums1, int m, int[] nums2, int n) {
        // Loop through nums2.
        for (int i = 0; i < n; i++) {
            // Write the values from nums2 into the end of nums1.
            nums1[m + i] = nums2[i];
        }
        // Sort nums1 using the built-in sort() method.
        Arrays.sort(nums1);
    }

    /**
     * Approach 2: Two-Pointers Starting from the Beginning
     * Time Complexity: O(m + n), where m + n is the length of the nums1 and
     * n is the length of the nums2.
     * - It takes O(m) time to make a copy of nums1.
     * - It takes O(m + n) time to iterate through nums1.
     * - Therefore, O(m) + O(m + n) simplifies to O(m + n).
     * Space Complexity:O(m)
     * - It needs additional space to store the copy array with the length of m and
     * variables.
     *
     * @param nums1 The input array of integers with the length of m + n, sorted in
     *              non-decreasing order.
     * @param nums2 The input array of integers with the length of n, sorted in
     *              non-decreasing order.
     * @param m     The number of elements to be merged in nums1.
     * @param n     The number of elements to be merged in nums2.
     * @return None. The final sorted array should be stored inside the array nums1.
     */

    public static void solutionTwo(int[] nums1, int m, int[] nums2, int n) {
        // Make a copy of the first m elements of nums1.
        int[] nums1Copy = new int[m];

        for (int i = 0; i < m; i++) {
            nums1Copy[i] = nums1[i];
        }

        // Set two pointers to read nums1Copy and nums2 respectively.
        int p1 = 0;
        int p2 = 0;

        // Loop through nums1.
        for (int i = 0; i < m + n; i++) {
            // If p2 is out of bounds
            // or p1 is within bounds AND the value at p1 is smaller than the value at p2
            if ((p2 >= n) || (p1 < m && nums1Copy[p1] < nums2[p2])) {
                // Update the value in nums1 with the smaller value and increment the pointer.
                nums1[i] = nums1Copy[p1++];
            } else {
                nums1[i] = nums2[p2++];
            }
        }
    }

    /**
     * Approach 3: Two-Pointers Starting from the End
     * Time Complexity: O(m + n), where m + n is the length of the nums1 and
     * n is the length of the nums2.
     * - It takes O(m + n) time to iterate through nums1.
     * Space Complexity:O(1)
     * - It doesn't need extra space.
     *
     * @param nums1 The input array of integers with the length of m + n, sorted in
     *              non-decreasing order.
     * @param nums2 The input array of integers with the length of n, sorted in
     *              non-decreasing order.
     * @param m     The number of elements to be merged in nums1.
     * @param n     The number of elements to be merged in nums2.
     * @return None. The final sorted array should be stored inside the array nums1.
     */

    public static void solutionThree(int[] nums1, int m, int[] nums2, int n) {
        // Set two pointers to read nums1 and nums2 backwards respectively.
        int p1 = m - 1;
        int p2 = n - 1;

        // Loop through nums1 backwards.
        for (int i = m + n - 1; i >= 0; i--) {
            // If p2 is out of bounds
            // or p1 is within bounds AND the value at p1 is greater than the value at p2
            if ((p2 < 0) || (p1 >= 0 && nums1[p1] > nums2[p2])) {
                // Update the value at i with the smaller value and decrement the pointer.
                nums1[i] = nums1[p1--];
            } else {
                nums1[i] = nums2[p2--];
            }
        }
    }

    public static void main(String[] args) {
        int[] originalNums1A = { 1, 2, 3, 0, 0, 0 };
        int[] nums1A = Arrays.copyOf(originalNums1A, originalNums1A.length);
        int[] nums1B = { 2, 5, 6 };
        int m1 = 3, n1 = 3;
        int[] expectedOutput1 = { 1, 2, 2, 3, 5, 6 };

        int[] originalNums2A = { 1 };
        int[] nums2A = Arrays.copyOf(originalNums2A, originalNums2A.length);
        int[] nums2B = {};
        int m2 = 1, n2 = 0;
        int[] expectedOutput2 = { 1 };

        int[] originalNums3A = { 0 };
        int[] nums3A = Arrays.copyOf(originalNums3A, originalNums3A.length);
        int[] nums3B = { 1 };
        int m3 = 0, n3 = 1;
        int[] expectedOutput3 = { 1 };

        // Test solutionOne
        System.out.println("***** Testing solutionOne *****");
        solutionOne(nums1A, m1, nums1B, n1);
        System.out.println(Arrays.equals(nums1A, expectedOutput1) ? "Correct answer" : "Wrong answer");
        nums1A = Arrays.copyOf(originalNums1A, originalNums1A.length);

        solutionOne(nums2A, m2, nums2B, n2);
        System.out.println(Arrays.equals(nums2A, expectedOutput2) ? "Correct answer" : "Wrong answer");
        nums2A = Arrays.copyOf(originalNums2A, originalNums2A.length);

        solutionOne(nums3A, m3, nums3B, n3);
        System.out.println(Arrays.equals(nums3A, expectedOutput3) ? "Correct answer" : "Wrong answer");
        nums3A = Arrays.copyOf(originalNums3A, originalNums3A.length);

        // Test solutionTwo
        System.out.println("***** Testing solutionTwo *****");
        solutionTwo(nums1A, m1, nums1B, n1);
        System.out.println(Arrays.equals(nums1A, expectedOutput1) ? "Correct answer" : "Wrong answer");
        nums1A = Arrays.copyOf(originalNums1A, originalNums1A.length);

        solutionTwo(nums2A, m2, nums2B, n2);
        System.out.println(Arrays.equals(nums2A, expectedOutput2) ? "Correct answer" : "Wrong answer");
        nums2A = Arrays.copyOf(originalNums2A, originalNums2A.length);

        solutionTwo(nums3A, m3, nums3B, n3);
        System.out.println(Arrays.equals(nums3A, expectedOutput3) ? "Correct answer" : "Wrong answer");
        nums3A = Arrays.copyOf(originalNums3A, originalNums3A.length);

        // Test solutionThree
        System.out.println("***** Testing solutionThree *****");
        solutionThree(nums1A, m1, nums1B, n1);
        System.out.println(Arrays.equals(nums1A, expectedOutput1) ? "Correct answer" : "Wrong answer");
        nums1A = Arrays.copyOf(originalNums1A, originalNums1A.length);

        solutionThree(nums2A, m2, nums2B, n2);
        System.out.println(Arrays.equals(nums2A, expectedOutput2) ? "Correct answer" : "Wrong answer");
        nums2A = Arrays.copyOf(originalNums2A, originalNums2A.length);

        solutionThree(nums3A, m3, nums3B, n3);
        System.out.println(Arrays.equals(nums3A, expectedOutput3) ? "Correct answer" : "Wrong answer");
        nums3A = Arrays.copyOf(originalNums3A, originalNums3A.length);
    }
}
