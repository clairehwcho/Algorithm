/*
Kth Largest Element in an Array (Difficulty: Medium)

Given an integer array nums and an integer k, return the kth largest element in the array.

Note that it is the kth largest element in the sorted order, not the kth distinct element.

Can you solve it without sorting?

Constraints:

1 <= k <= nums.length <= 105
-104 <= nums[i] <= 104
*/

const nums1 = [3,2,1,5,6,4], k1 = 2;
const expected1 = 5;

const nums2 = [3,2,3,1,2,4,5,5,6], k2 = 4;
const expected2 = 4;

/*
 * Solution #1: Max heap approach
 * Time complexity: O(nlogn)
 * Space complexity: O(n)
 */
class MaxHeap {
    constructor() {
        this.heap = [null];
    }

    peek() {
        if (this.heap[1]) {
            return this.heap[1];
        }
        return null;
    }

    insert(num) {
        this.heap.push(num);
        this.shiftUp();

        return this.heap;
    }

    shiftUp() {
        const heap = this.heap;
        const n = heap.length;

        let childIdx = n - 1;

        while (childIdx > 1) {
            let parentIdx = Math.floor(childIdx / 2);

            if (heap[childIdx] === heap[parentIdx]) {
                break;
            }

            if (heap[childIdx] > heap[parentIdx]) {
                [heap[childIdx], heap[parentIdx]] = [heap[parentIdx], heap[childIdx]];
            }
            childIdx = parentIdx;
        }
        return heap;
    }

    extract() {
        const heap = this.heap;
        const maxNum = heap[1];
        const lastNum = heap.pop();

        heap[1] = lastNum;
        this.shiftDown();

        return maxNum;
    }

    shiftDown() {
        const heap = this.heap;
        const n = heap.length;

        let parentIdx = 1;
        let maxNumIdx = parentIdx;

        while (parentIdx < n) {
            let leftChildIdx = parentIdx * 2;
            let rightChildIdx = leftChildIdx + 1;

            if (leftChildIdx < n && heap[leftChildIdx] > heap[maxNumIdx]) {
                maxNumIdx = leftChildIdx;
            }

            if (rightChildIdx < n && heap[rightChildIdx] > heap[maxNumIdx]) {
                maxNumIdx = rightChildIdx;
            }

            if (maxNumIdx === parentIdx) {
                break;
            }

            [heap[parentIdx], heap[maxNumIdx]] = [heap[maxNumIdx], heap[parentIdx]];
            parentIdx = maxNumIdx;
        }
        return heap;
    }
}

var findKthLargestMaxHeap = function (nums, k) {
    let heap = new MaxHeap();

    for (let i = 0; i < nums.length; i++) {
        heap.insert(nums[i]);
    };

    while (k-- > 1) {
        heap.extract();
    }

    let maxNum = heap.peek();

    return maxNum;
};

/*
 * Solution #2: Counting sort
 * Time complexity: O(n + m), where n as the length of nums and m as maxValue - minValue
 * Space complexity: O(m)
 */

var findKthLargestCountingSort = function (nums, k) {
    let maxValue = nums[0];
    let minValue = nums[0];

    // Find the max and the min value in the array to account for both positive and negative numbers.
    for (let num of nums) {
        maxValue = Math.max(maxValue, num);
        minValue = Math.min(minValue, num);
    }

    // Create an array that has a size of maxValue - minValue + 1;
    let count = Array(maxValue - minValue + 1).fill(0);

    // Iterate over the array and find the frequency of each num.
    for (let num of nums) {
        // Each index of count represents a number.
        count[num - minValue]++;
    }

    // Iterate over the indices of count backward.
    let remain = k;
    let num = count.length - 1;

    while (num >= 0) {
        remain -= count[num];
        // Stop the loop when the remain hits 0.
        if (remain <= 0) {
            return num + minValue;
        }
        num--;
    }
}

console.log(findKthLargestMaxHeap(nums1, k1));
console.log(findKthLargestMaxHeap(nums2, k2));
console.log(findKthLargestCountingSort(nums1, k1));
console.log(findKthLargestCountingSort(nums2, k2));