/*
Rotate Image (Difficulty: Medium)

You are given an n x n 2D matrix representing an image, rotate the image by 90 degrees (clockwise).

You have to rotate the image in-place, which means you have to modify the input 2D matrix directly. DO NOT allocate another 2D matrix and do the rotation.

Constraints:

n == matrix.length == matrix[i].length
1 <= n <= 20
-1000 <= matrix[i][j] <= 1000
*/

const matrix1 = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
const expected1 = [[7, 4, 1], [8, 5, 2], [9, 6, 3]];

const matrix2 = [[5, 1, 9, 11], [2, 4, 8, 10], [13, 3, 6, 7], [15, 14, 12, 16]];
const expected2 = [[15, 13, 2, 5], [14, 3, 4, 1], [12, 6, 8, 9], [16, 7, 10, 11]];

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
/*
 * Solution #1: Transpose and reflect
 * Time complexity: O(M)
 * Space complexity: O(1)
 */
var rotate = function (matrix) {
    let n = matrix.length;

    // Reverse the matrix around the main diagonal (transpose)
    for (let row = 0; row < n; row++) {
        for (let col = row + 1; col < n; col++) {
            let temp = matrix[row][col];
            matrix[row][col] = matrix[col][row];
            matrix[col][row] = temp;
        }
    }

    // Reverse it from left to right (reflect)
    for (let row = 0; row < n; row++) {
        for (let col = 0; col < n / 2; col++) {
            let temp = matrix[row][col];
            matrix[row][col] = matrix[row][n - col - 1];
            matrix[row][n - col - 1] = temp;
        }
    }
    return matrix;
};

console.log(rotate(matrix1));
console.log(rotate(matrix2));