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

const matrix3 = [[1, 2], [1, 3]], k3 = 2;
const expected3 = 1;

const matrix4 = [[1, 2, 3, 4, 5], [6, 7, 8, 9, 10], [11, 12, 13, 14, 15], [16, 17, 18, 19, 20], [21, 22, 23, 24, 25]], k4 = 25;
const expected4 = 25;

/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */

/*
 * Solution #1: Min heap approach
 * Time complexity:
 * Space complexity:
 */

class HeapNode {
    constructor (val, row, column) {
        this.val = val;
        this.row = row;
        this.column = column;
    }
}

class MinHeap {
    constructor () {
        this.heap = [null];
    }

    peek () {
        if (this.heap[1]) {
            return this.heap[1];
        }
        return null;
    }

    size () {
        return this.heap.length - 1;
    }

    insert (node) {
        this.heap.push(node);
        this.shiftUp();
    }

    shiftUp () {
        let heap = this.heap;
        // Set the index of the last node in the heap.
        let childIdx = heap.length - 1;

        while (childIdx > 1) {
            const child = heap[childIdx];
            const parentIdx = Math.floor(childIdx / 2);
            const parent = heap[parentIdx];

            // Parent is supposed to be smaller than or equal to its child, so ordering is complete.
            if (parent.val <= child.val) {
                break;
            }

            // If the parent is bigger than the child, then swap the parent and the child.
            [child, parent][parent, child];
            // Move the pointer to the parent.
            childIdx = parentIdx;
        }
        return heap;

    }

    extract () {
        let heap = this.heap;
        // Save the current min number
        let min = heap[1];
        // Remove the last element from the heap
        let lastNode = heap.pop();
        // Replace the root with the removed last element
        heap[1] = lastNode;
        this.shiftDown();
        return min;
    }

    shiftDown () {
        let heap = this.heap;
        let n = heap.length;
        let parentIdx = 1;
        let minIdx = parentIdx;

        while (parentIdx < n) {
            const leftIdx = parentIdx * 2;
            const rightIdx = leftIdx + 1;

            // If the left child is in bounds and smaller than the min, make it the min.
            if (leftIdx < n && heap[leftIdx].val < heap[minIdx].val) {
                minIdx = leftIdx;
            }

            // If the right child is in bounds and smaller than th emin, make it the min.
            if (rightIdx < n && heap[leftIdx].val < heap[minIdx].val) {
                minIdx = rightIdx;
            }

            // If the min has not changed, stop the loop.
            if (minIdx === parentIdx) {
                break;
            }

            // Otherwise, swat the parent and min child.
            [heap[parentIdx], heap[minIdx]] = [heap[minIdx], heap[parentIdx]];
            // Move the pointer to the min child.
            parentIdx = minIdx;
        }
        return heap;
    }
}


var kthSmallest = function (matrix, k) {
    const n = matrix.length;
    const heap = new MinHeap();

    // Make a min Heap using the first element of min(n, k) rows of matrix.
    for (let row = 0; row < Math.min(n, k); row++) {
        // Each node contains a triplet of information to move forward: value, row index and column index.
        heap.insert(new HeapNode(matrix[row][0], row, 0));
    };

    let min = heap.peek();

    // Iterate through the heap over k elements
    while (k-- > 1) {
        // Extract the minimum element and reorder the heap
        min = heap.extract();
        // Store the row and column information of the extracted minimum number.
        const row = min.row;
        const column = min.column;

        // If we have any new elements left in the current row, add them to the heap.
        if (column + 1 < n) {
            heap.insert(new HeapNode(matrix[row, column + 1], row, column + 1));
        }

        min = heap.peek();
    }
    return min.val;
};

/*
 * Solution #2: Binary search
 * Time complexity: O(N×log(Max−Min))
 * Space complexity: O(1)
 */

var kthSmallest = function (matrix, k) {
    let n = matrix.length;
    let low = matrix[0][0];
    let high = matrix[n - 1][n - 1];

    while (low < high) {
        let mid = Math.floor((low + high) / 2);
        let count = 0;

        // Count all the numbers smaller than or equal to the mid
        for (let row = 0; row < n; row++) {
            for (let column = 0; column < n; column++) {
                if (matrix[row][column] <= mid) {
                    count++;
                }
                else {
                    break;
                }
            }
        }
        // If the count is less than k, move the low pointer up to mid + 1 to serch in the higher part of the matrix.
        if (count < k) {
            low = mid + 1;
        }
        // If the count is greather than or equal to k, move the high pointer down to mid to serach in the lower part of the matrix.
        else {
            high = mid;
        }
    }
    // If the count is equal to k, the low is the biggest number less than or equal to the mid.
    return low;
}

console.log(kthSmallest(matrix1, k1));
console.log(kthSmallest(matrix2, k2));
console.log(kthSmallest(matrix3, k3));
console.log(kthSmallest(matrix4, k4));