package array;

import java.util.*;

public class BestTimeToBuyAndSellStock {
    /**
     * You are given an array `prices` where prices[i] is the price of a given stock
     * on the ith day.
     * You want to maximize your profit by choosing a single day to buy one stock
     * and choosing a different day in the future to sell that stock.
     * Return the maximum profit you can achieve from this transaction.
     * If you cannot achieve any profit, return 0.
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
     * @param prices The input array of stock prices on each day.
     * @return The maximum profit from buying and selling a stock or 0.
     */

    public static int solutionOne(int[] prices) {
        // Initialize a variable to store maximum profit.
        int maxProfit = 0;

        // Loop through days to buy.
        for (int buy = 0; buy < prices.length - 1; buy++) {
            // Loop through days to sell.
            for (int sell = buy + 1; sell < prices.length; sell++) {
                // Calculate current profit.
                int currProfit = prices[sell] - prices[buy];
                // Update maxProfit if current profit is greater.
                maxProfit = Math.max(maxProfit, currProfit);
            }
        }
        // Return maximum profit.
        return maxProfit;
    }

    /**
     * Approach 2: One-Pass Iteration
     * Time Complexity: O(n), where n is the length of the array.
     * - We traverse the array only once.
     * Space Complexity: O(1)
     * - It only needs a constant amount of extra space to store variables.
     *
     * @param prices The input array of stock prices on each day.
     * @return The maximum profit from buying and selling a stock or 0.
     */

    public static int solutionTwo(int[] prices) {
        // Initialize a variable to store maximum profit.
        int maxProfit = 0;
        // Initialize a variable to store minimum price.
        int minPrice = Integer.MAX_VALUE;

        // Loop through the array.
        for (int i = 0; i < prices.length; i++) {
            int currPrice = prices[i];
            // If the current price is smaller than the minimum price
            if (currPrice < minPrice) {
                // Update the minimum price with the current price.
                minPrice = currPrice;
            }
            // Else, update maxProfit if current profit is greater.
            else {
                int currProfit = currPrice - minPrice;
                maxProfit = Math.max(maxProfit, currProfit);
            }
        }
        // Return maximum profit.
        return maxProfit;
    }

    public static void main(String[] args) {
        // Test case 1
        int[] prices1 = new int[] { 7, 1, 5, 3, 6, 4 };
        int expectedOutput1 = 5;

        // Test case 2
        int[] prices2 = new int[] { 7, 6, 4, 3, 1 };
        int expectedOutput2 = 0;

        // Test solutionOne
        System.out.println("*****Testing solutionOne*****");
        System.out.println("Test Case 1:");
        System.out.println("Input array: " + Arrays.toString(prices1));
        System.out.println("Expected Output: " + expectedOutput1);
        System.out.println("Actual Output: " + solutionOne(prices1));
        System.out.println();
        System.out.println("Test Case 2:");
        System.out.println("Input array: " + Arrays.toString(prices2));
        System.out.println("Expected Output: " + expectedOutput2);
        System.out.println("Actual Output: " + solutionOne(prices2));
        System.out.println();

        // Test solutionTwo
        System.out.println("*****Testing solutionTwo*****");
        System.out.println("Test Case 1:");
        System.out.println("Input array: " + Arrays.toString(prices1));
        System.out.println("Expected Output: " + expectedOutput1);
        System.out.println("Actual Output: " + solutionTwo(prices1));
        System.out.println();
        System.out.println("Test Case 2:");
        System.out.println("Input array: " + Arrays.toString(prices2));
        System.out.println("Expected Output: " + expectedOutput2);
        System.out.println("Actual Output: " + solutionTwo(prices2));
        System.out.println();

    }

}
