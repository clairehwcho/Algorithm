/*
Best Time to Buy and Sell Stock (Difficulty: Easy)

You are given an array prices where prices[i] is the price of a given stock on the ith day.
You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.
Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

Constraints:
1 <= prices.length <= 105
0 <= prices[i] <= 104
*/

const prices1 = [7, 1, 5, 3, 6, 4];
const expected1 = 5;

const prices2 = [7, 6, 4, 3, 1];
const expected2 = 0;

/**
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit = function (prices) {
    let maxProfit = 0;
    let buyDay = 0;
    let sellDay = 1;

    while (sellDay < prices.length) {
        if (prices[buyDay] < prices[sellDay]) {
            maxProfit = Math.max(maxProfit, prices[sellDay] - prices[buyDay]);
        }
        else {
            buyDay = sellDay;
        }
        sellDay++;
    }
    return maxProfit;
};

console.log(maxProfit(prices1));
console.log(maxProfit(prices2));