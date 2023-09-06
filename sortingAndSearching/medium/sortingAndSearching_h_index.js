/*
H-Index (Difficulty: Medium)

Given an array of integers citations where citations[i] is the number of citations a researcher received for their ith paper, return the researcher's h-index.

According to the definition of h-index on Wikipedia: The h-index is defined as the maximum value of h such that the given researcher has published at least h papers that have each been cited at least h times.

Constraints:

n == citations.length
1 <= n <= 5000
0 <= citations[i] <= 1000
*/

const citations1 = [3, 0, 6, 1, 5];
const expected1 = 3;
// [3,0,6,1,5] means the researcher has 5 papers in total and each of them had received 3, 0, 6, 1, 5 citations respectively.
// Since the researcher has 3 papers with at least 3 citations each and the remaining two with no more than 3 citations each, their h-index is 3.

const citations2 = [1, 3, 1];
const expected2 = 1;

/**
 * @param {number[]} citations
 * @return {number}
 */

/*
 * Solution #1: Comparison sorting
 * Time complexity: O(nlog(n))
 * - Comparison sorting dominates the time complexity.
 * Space complexity: O(1)
 * - Most libraries using heap sort which costs O(1) extra space in the worst case.
 */
// var hIndex = function (citations) {
//     // Sort the array in descending order. If we think geometrically, h-index is the length of the largest square in the histogram. For instance, [7, 5, 3, 1, 0]
//     citations.sort((a, b) => b - a);

//     for (let i = 0; i < citations.length; i++) {
//         // If the current paper's citation number is greater than or equal to index,
//         // then papers 0 to i all have at least i + 1 citations.
//         // Note to add 1 to index, which is 0-based.
//         if (citations[i] < i + 1) {
//             return i;
//         }
//     }
// };

/*
 * Solution #2: Binary Search
 * Time complexity: O(log(n))
 * Space complexity: O(1)
 * - We use no extra space to search the element.
 */
var hIndex = function (citations) {
    let low = 0;
    let high = citations.length - 1;
    citations.sort((a, b) => b - a)

    while (low <= high) {
        let mid = Math.floor((low + high) / 2);

        if (citations[mid] > mid) {
            low = mid + 1;
        }
        else {
            high = mid - 1;
        }
    }
    return low;
};

console.log((hIndex(citations1)));
console.log((hIndex(citations2)));