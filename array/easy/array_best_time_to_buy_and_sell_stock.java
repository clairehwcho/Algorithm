/*
Best Time to Buy and Sell Stock (Difficulty: Easy)

You are given an array prices where prices[i] is the price of a given stock on the ith day.
You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.
Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

Example 1:
Input: prices = [7,1,5,3,6,4]
Output: 5
Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.

Example 2:
Input: prices = [7,6,4,3,1]
Output: 0
Explanation: In this case, no transactions are done and the max profit = 0.

Constraints:
1 <= prices.length <= 105
0 <= prices[i] <= 104
*/

/*
 * Approach 1: Brute Force
 * Time complexity: O(n^2)
 * Space complexity: O(1)
 */

// class Solution {
//     public int maxProfit(int[] prices){
//         // Create a maxProfit variable assigned with the value 0.
//         int maxProfit = 0;

//         // Loop through the prices array with index buyDay.
//         for (int buyDay = 0; buyDay < prices.length - 1; buyDay++){
//             // Loop through the prices array with index sellDay, which is buyDay + 1.
//             for (int sellDay = buyDay + 1; sellDay < prices.length; sellDay++){
//                 // Find a current profit by subtracting buy price from sell price.
//                 int currProfit = prices[sellDay] - prices[buyDay];
//                 // Update maxProfit with a bigger value between the max profit and current profit.
//                 maxProfit = Math.max(maxProfit, currProfit);
//             }
//         }
//         // Return the max profit.
//         return maxProfit;
//     }
// }


/*
 * Approach 2: One Pass
 * Time complexity: O(n)
 * - We traverse the array containing n elements only once.
 * Space complexity: O(1)
 */

class Solution {
    public int maxProfit(int[] prices){
        // Create a max profit variable with the value 0.
        int maxProfit = 0;
        // Create a min price variable with MAX_VALUE.
        int minPrice = Integer.MAX_VALUE;

        // Loop through the prices array.
        for (int i = 0; i < prices.length; i++){
            // Find current profit by subtracting prices[i] from minPrice
            int currProfit = prices[i] - minPrice;
            // If prices[i] is smaller than minPrice, update minPrice.
            if (prices[i] < minPrice){
                minPrice = prices[i];
            }
            // Update maxProfit with a bigger value between the max profit and the current profit.
            maxProfit = Math.max(maxProfit, currProfit);
        }
        // Return maxProfit.
        return maxProfit;
    }
}