/*
Kth Smallest Element in a Sorted Matrix (Difficulty: Medium)

Given an n x n matrix where each of the rows and columns is sorted in ascending order, return the kth smallest element in the matrix.

Note that it is the kth smallest element in the sorted order, not the kth distinct element.

You must find a solution with a memory complexity better than O(n^2).

Constraints:

n == matrix.length == matrix[i].length
1 <= n <= 300
-109 <= matrix[i][j] <= 109
All the rows and columns of matrix are guaranteed to be sorted in non-decreasing order.
1 <= k <= n2
*/

const matrix1 = [[1, 5, 9], [10, 11, 13], [12, 13, 15]], k1 = 8;
const expected1 = 13;
// The elements in the matrix are [1,5,9,10,11,12,13,13,15], and the 8th smallest number is 13

const matrix2 = [[-5]], k2 = 1;
const expected2 = -5;

