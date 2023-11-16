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
//         int maxProfit = 0;

//         for (int i = 0; i < prices.length; i++) {
//             for (int j = i+1; j < prices.length; j++){
//                 int currProfit = prices[j] - prices[i];
//                 if (currProfit > maxProfit){
//                     maxProfit = currProfit;
//                 }
//             }
//         }
//         return maxProfit;
//     }
// }

/*
 * Approach 2: Two Pointers with One Pass
 * Time complexity: O(n)
 * Space complexity: O(1)
 */

// class Solution {
//     public int maxProfit(int[] prices){
//         int maxProfit = 0;
//         int buyDay = 0;
//         int sellDay = 1;

//         while (sellDay < prices.length){
//             int currProfit = prices[sellDay] - prices[buyDay];

//             if (prices[buyDay] < prices[sellDay]){
//                 maxProfit = Math.max(maxProfit, currProfit);
//             }
//             else {
//                 buyDay = sellDay;
//             }
//             sellDay++;
//         }
//         return maxProfit;
//     }
// }

/*
 * Approach 3: One Pass
 * Time complexity: O(n)
 * Space complexity: O(1)
 */

class Solution {
    public int maxProfit(int[] prices) {
        int maxProfit = 0;
        int minPrice = Integer.MAX_VALUE;

        for (int i = 0; i < prices.length; i++) {
            int currProfit = prices[i] - minPrice;
            // If today' price is less than minPrice, update the minPrice.
            if (prices[i] < minPrice) {
                minPrice = prices[i];
            }
            // If the current profit is greater than maxProfit, update the maxProfit.
            else if (currProfit > maxProfit) {
                maxProfit = currProfit;
            }
        }
        return maxProfit;
    }
}