/*
Search a 2D Matrix (Difficulty: Medium)

You are given an m x n integer matrix matrix with the following two properties:

Each row is sorted in non-decreasing order.
The first integer of each row is greater than the last integer of the previous row.
Given an integer target, return true if target is in matrix or false otherwise.

You must write a solution in O(log(m * n)) time complexity.

Constraints:

m == matrix.length
n == matrix[i].length
1 <= m, n <= 100
-104 <= matrix[i][j], target <= 104
*/

const matrix1 = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target1 = 3;
const expected1 = true;

const matrix2 = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target2 = 13
const expected2 = false;

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */

/*
 * Solution #1: Binary search
 * Time complexity: O(log(m*n))
 * Space complexity: O(1)
 */
var searchMatrix = function (matrix, target) {
    // length of column
    let m = matrix.length;
    // length of row
    let n = matrix[0].length;

    let low = 0;
    let high = m * n - 1;

    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        let midNum = matrix[Math.floor(mid / n)][mid % n];

        if (midNum === target) {
            return true;
        }
        else if (midNum < target) {
            low = mid + 1;
        }
        else {
            high = mid - 1;
        }
    }
    return false;
};

console.log(searchMatrix(matrix1, target1));
console.log(searchMatrix(matrix2, target2));