/*
Spiral Matrix (Difficulty: Medium)

Given an m x n matrix, return all elements of the matrix in spiral order.

Constraints:

m == matrix.length
n == matrix[i].length
1 <= m, n <= 10
-100 <= matrix[i][j] <= 100
*/

const matrix1 = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
const expected1 = [1, 2, 3, 6, 9, 8, 7, 4, 5];

const matrix2 = [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12]];
const expected2 = [1, 2, 3, 4, 8, 12, 11, 10, 9, 5, 6, 7];

/**
 * @param {number[][]} matrix
 * @return {number[]}
 */

/*
 * Solution #1: Set up boundaries
 * Time complexity: O(M*N)
 * - We visit each element once.
 * Space complexity: O(1)
 * - We don't use other data structure.
 */
var spiralOrder = function (matrix) {
    let result = [];
    let m = matrix.length;
    let n = matrix[0].length;

    // Initialize boundaries.
    let top = 0;
    let bottom = m - 1;
    let left = 0;
    let right = n - 1;

    while (left <= right && top <= bottom) {
        // Traverse from left to right.
        for (let col = left; col <= right; col++) {
            result.push(matrix[top][col]);
        }
        top++;

        // Traerse downwards.
        for (let row = top; row <= bottom; row++) {
            result.push(matrix[row][right]);
        }
        right--;

        // Make sure we are now on a different row.
        if (left <= right && top <= bottom) {
            // Traverse from right to left.
            for (let col = right; col >= left; col--) {
                result.push(matrix[bottom][col]);
            }
            bottom--;
        }

        // Make sure we are now on a different column.
        if (left <= right && top <= bottom) {
            // Traverse upwards.
            for (let row = bottom; row >= top; row--) {
                result.push(matrix[row][left]);
            }
            left++;
        }
    }
    return result;
}

console.log(spiralOrder(matrix1));
console.log(spiralOrder(matrix2));