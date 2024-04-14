package interval;

import java.util.*;

public class MeetingRooms {
    /**
     * Given an array of meeting time intervals
     * where intervals[i] = [starti, endi],
     * determine if a person could attend all meetings.
     * intervals[i].length == 2
     */

    /**
     * Approach 1: Brute Force (Nested Loops)
     * Time Complexity: O(n^2), where n is the number of intervals.
     * - For each iteration of the outer loop, the inner loop iterates through
     * all intervals after the current interval, taking O(n - i - 1) time.
     * - The total number of iterations for the nested loops is
     * the sum of the first n - 1 integers,
     * which is approximately equal to n*(n-1)/2.
     * - Using overlap method takes constant time of O(1).
     * - Therefore, the overall time complexity is O(n^2).
     * Space Complexity: O(1)
     * - It only requires a constant amount of extra space
     * to store variables and parameters.
     *
     * @param intervals The input array of meeting time intervals.
     * @return True if a person can attend all meetings, false otherwise.
     */

    // Helper method to check if two intervals overlap.
    private static boolean overlap(int[] interval1, int[] interval2) {
        // The first condition checks if the start time of the first interval
        // is within the range of the second interval.
        // The second condition checks if the start time of the second interval
        // is within the range of the first interval.
        // If either of these conditions is true,
        // it means that the two intervals overlap.
        return (interval1[0] >= interval2[0] && interval1[0] < interval2[1])
                || (interval2[0] >= interval1[0] && interval2[0] < interval1[1]);
    }

    // Optimized version of helper method to check if two intervals overlap.
    private static boolean overlapOptimized(int[] interval1, int[] interval2) {
        // If the smaller end time is greater than the larger start time,
        // return true because the intervals overlap.
        return (Math.min(interval1[1], interval2[1]) > (Math.max(interval1[0], interval2[0])));
    }

    public static boolean solutionOne(int[][] intervals) {
        // Iterate through each interval in the array except for the last one
        // to compare with the subsequent intervals.
        for (int i = 0; i < intervals.length - 1; i++) {
            // Iterate through the intervals that come after the current interval
            // to check for overlaps.
            for (int j = i + 1; j < intervals.length; j++) {
                // If the intervals overlap, it means a person cannot attend all meetings.
                if (overlap(intervals[i], intervals[j])) {
                    // Return false.
                    return false;
                }
            }
        }
        // Otherwise, return true meaning a person can attend all meetings.
        return true;
    }

    /**
     * Approach 2: Sorting
     * Time Complexity: O(nlogn), where n is the number of intervals.
     * - Sorting takes O(nlogn) time, dominating the overall time complexity.
     * - Iterating through the intervals takes O(n - 1) time.
     * - Therefore, the overall time complexity is O(nlogn).
     * Space Complexity: O(1)
     * - It only requires a constant amount of extra space
     * for sorting and iterating.
     *
     * @param intervals The input array of meeting time intervals.
     * @return True if a person can attend all meetings, false otherwise.
     */

    public static boolean solutionTwo(int[][] intervals) {
        // Sort the intervals based on the start times.
        // The sort function takes two arguments:
        // the array to be sorted and a comparator that determines the sorting order.
        Arrays.sort(intervals, (a, b) -> Integer.compare(a[0], b[0]));

        // Iterate through the intervals to check for overlaps.
        for (int i = 0; i < intervals.length - 1; i++) {
            // If the end time of the current interval is greater than
            // the start time of the next interval, there is an overlap.
            if (intervals[i][1] > intervals[i + 1][0]) {
                // Return false because a person cannot attend all meetings.
                return false;
            }
        }

        // Otherwise, return true meaning a person can attend all meetings.
        return true;
    }

    public static void main(String[] args) {
        // Test case 1
        int[][] intervals1 = { { 0, 30 }, { 5, 10 }, { 15, 20 } };
        boolean expectedOutput1 = false;

        // Test case 2
        int[][] intervals2 = { { 7, 10 }, { 2, 4 } };
        boolean expectedOutput2 = true;

        // Test solutionOne
        System.out.println("*****Testing solutionOne*****");
        System.out.println("Test Case 1:");
        System.out.println("Input: " + Arrays.deepToString(intervals1));
        System.out.println("Expected Output: " + expectedOutput1);
        System.out.println("Actual Output: " + solutionOne(intervals1));
        System.out.println();
        System.out.println("Test Case 2:");
        System.out.println("Input: " + Arrays.deepToString(intervals2));
        System.out.println("Expected Output: " + expectedOutput2);
        System.out.println("Actual Output: " + solutionOne(intervals2));
        System.out.println();

        // Test solutionTwo
        System.out.println("*****Testing solutionTwo*****");
        System.out.println("Test Case 1:");
        System.out.println("Input: " + Arrays.deepToString(intervals1));
        System.out.println("Expected Output: " + expectedOutput1);
        System.out.println("Actual Output: " + solutionTwo(intervals1));
        System.out.println();
        System.out.println("Test Case 2:");
        System.out.println("Input: " + Arrays.deepToString(intervals2));
        System.out.println("Expected Output: " + expectedOutput2);
        System.out.println("Actual Output: " + solutionTwo(intervals2));
        System.out.println();
    }
}
