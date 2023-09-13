/*
Set Matrix Zeroes (Difficulty: Medium)

Given an m x n integer matrix matrix, if an element is 0, set its entire row and column to 0's.

You must do it in place.

Constraints:

m == matrix.length
n == matrix[0].length
1 <= m, n <= 200
-231 <= matrix[i][j] <= 231 - 1


Follow up:

A straightforward solution using O(mn) space is probably a bad idea.
A simple improvement uses O(m + n) space, but still not the best solution.
Could you devise a constant space solution?
*/

const matrix1 = [[1, 1, 1], [1, 0, 1], [1, 1, 1]];
const expected1 = [[1, 0, 1], [0, 0, 0], [1, 0, 1]];


const matrix2 = [[0, 1, 2, 0], [3, 4, 5, 2], [1, 3, 1, 5]];
const expected2 = [[0, 0, 0, 0], [0, 4, 5, 0], [0, 3, 1, 0]];

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
/*
 * Solution #1: Additional Memory Approach
 * Time complexity: O(M * N), where M and N are the number of rows and columns respectively
 * Space complexity: O(M + N)
 */
var setZeroes1 = function (matrix) {
    let m = matrix.length;
    let n = matrix[0].length;
    let zeroRows = new Set();
    let zeroCols = new Set();
    let row = 0;
    let column = 0;

    // Record row and column when the value is zero
    while (row < m && column < n) {
        if (matrix[row][column] === 0) {
            zeroRows.add(row);
            zeroCols.add(column);
        };

        if (column < n - 1) {
            column++;
        }
        else {
            row++;
            column = 0;
        }
    }

    // Iterate over the matrix once again and update the elements using the sets.
    row = 0;
    column = 0;

    while (row < m && column < n) {
        if (zeroRows.has(row) || zeroCols.has(column)) {
            matrix[row][column] = 0;
        }

        if (column < n - 1) {
            column++;
        }
        else {
            row++;
            column = 0;
        }
    }
    return matrix;
};

/*
 * Solution #2: Space, efficient solution
 * Time complexity: O(M * N), where M and N are the number of rows and columns respectively
 * Space complexity: O(1)
 */
var setZeroes2 = function (matrix) {
    let m = matrix.length;
    let n = matrix[0].length;

    // We use first row and first column as flags to update the matrix later.
    let isFirstRowZero = false;
    let isFirstColZero = false;

    // Loop over the matrix
    for (let row = 0; row < m; row++) {
        for (let column = 0; column < n; column++) {
            // If an element is zero
            if (matrix[row][column] === 0) {
                // Update the corresponding flags.
                if (row === 0) isFirstRowZero = true;
                if (column === 0) isFirstColZero = true;
                // And set the first element element of the corresponding row and column to 0.
                matrix[0][column] = 0;
                matrix[row][0] = 0;
            }
        }
    }

    // Loop over the matrix once again and update the elements using the first row and first column.
    for (let row = 1; row < m; row++) {
        for (let column = 1; column < n; column++) {
            if (matrix[0][column] === 0 || matrix[row][0] === 0) {
                matrix[row][column] = 0;
            }
        }
    }

    // See if the first row needs to be set to zero as well.
    if (isFirstRowZero) {
        for (let column = 0; column < n; column++) {
            matrix[0][column] = 0;
        }
    }

    // See if the first column needs to be set to zero as well.
    if (isFirstColZero) {
        for (let row = 0; row < m; row++) {
            matrix[row][0] = 0;
        }
    }
    return matrix;
}

// console.log(setZeroes1(matrix1))
// console.log(setZeroes1(matrix2))
console.log(setZeroes2(matrix1))
console.log(setZeroes2(matrix2))