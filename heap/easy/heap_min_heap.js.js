class HeapNode {
    constructor(val, row, column) {
        this.val = val;
        this.row = row;
        this.column = column;
    }
}

class MinHeap {
    constructor () {
        /**
         * When 0th index is not used, null is a placeholder.
         * Not using 0th index makes calculating the left and right children's index cleaner.
         * This also effectively makes our array start at index 1.
         */
        this.heap = [null];
    }

    /**
     * Retrieve the size of the heap, ignoring the null placeholder.
     * - Time: O(1) constant.
     * - Space: O(1) constant.
     * @returns {number}
     */
    size () {
        // - 1 since 0 index is unused
        return this.heap.length - 1;
    }

    /**
     * Retrieve the top (minimum number) in the heap without removing it.
     * - Time: O(1) constant.
     * - Space: O(1) constant.
     * @returns {?number} Null if empty.
     */
    top () {
        if (this.heap[1]) {
            return this.heap[1];
        }
        return null;
    }

    /**
     * Insert a new number into the heap and maintain the heaps order.
     * 1. Push new num to back then.
     * 2. Iteratively swap the new num with it's parent while it is smaller than
     *    it's parent.
     * - Time: O(log n) logarithmic due to shiftUp / iterative swapping.
     * - Space: O(1) constant.
     * @param {number} num The num to add.
     */
    insert (num) {
        this.heap.push(num);

        let childIdx = this.heap.length - 1;
        let parentIdx = Math.floor(childIdx / 2);

        while (this.heap[childIdx] < this.heap[parentIdx]) {
            let temp = this.heap[parentIdx];
            this.heap[parentIdx] = this.heap[childIdx];
            this.heap[childIdx] = temp;
        }
        return this.heap;
    }

    // AKA: siftUp, heapifyUp, bubbleUp to restore order after insert
    shiftUp () {
        let childIdx = this.heap.length - 1;

        while (childIdx > 1) {
            const parentIdx = Math.floor(childIdx / 2);

            const isParentSmallerOrEqual =
                this.heap[parentIdx] <= this.heap[childIdx];

            // Parent is supposed to be smaller so ordering is complete.
            if (isParentSmallerOrEqual) {
                break;
            }

            [this.heap[childIdx], this.heap[parentIdx]] = [this.heap[parentIdx], this.heap[childIdx]];
            // after swapping the node is at parentIdx now.
            childIdx = parentIdx;
        }
    }

    // AKA: siftDown, heapifyDown, bubbleDown, sinkDown to restore order after extracting min
    shiftDown () {
        let parentIdx = 1;
        let leftChildIdx = parentIdx * 2;

        while (leftChildIdx < this.heap.length) {
            let rightChildIdx = parentIdx * 2 + 1;
            let smallestChildIdx = leftChildIdx;

            const isRightChildInBounds = rightChildIdx < this.heap.length;

            const isRightChildSmaller = isRightChildInBounds && this.heap[rightChildIdx] < this.heap[leftChildIdx];

            if (isRightChildSmaller) {
                smallestChildIdx = rightChildIdx;
            }

            const isParentSmallerOrEqual = this.heap[parentIdx] <= this.heap[smallestChildIdx];

            if (isParentSmallerOrEqual) {
                break;
            }

            [this.heap[parentIdx], this.heap[smallestChildIdx]] = [this.heap[smallestChildIdx], this.heap[parentIdx]];

            parentIdx = smallestChildIdx;
            leftChildIdx = parentIdx * 2;
        }
    }

    /**
     * Extract the min num from the heap and then re-orders the heap to maintain order
     * so the next min is ready to be extracted.
     * 1. Save the first node to a temp var.
     * 2. Pop last node off and set idx1 equal to the popped value.
     * 3. Iteratively swap the old last node that is now at idx1
     *    with it's smallest child IF the smallest child is smaller than it.
     * - Time: O(log n) logarithmic due to shiftDown.
     * - Space: O(1) constant.
     * @returns {?number} The min number or null if empty.
     */
    extract () {
        if (this.heap.length === 1) {
            return null;
        }

        let heap = this.heap;
        let minNum = heap[1];
        let lastNode = heap.pop();
        heap[1] = lastNode;

        let parentIdx = 1;
        let leftChildIdx = parentIdx * 2;
        let rightChildIdx = parentIdx * 2 + 1;

        for (let i = 1; i < heap.length - 1; i++) {
            if (heap[leftChildIdx] < heap[rightChildIdx] && heap[leftChildIdx] < heap[1]) {
                minNum = heap[leftChildIdx];
                heap[leftChildIdx] = heap[1];
            }
        }
        return minNum;
    };



    /**
     * Log the tree horizontally with the root on the left and the index in parenthesis using reverse in-order traversal.
     */
    printHorizontalTree (parentIdx = 1, spaceCnt = 0, spaceIncr = 10) {
        if (parentIdx > this.heap.length - 1) {
            return;
        }

        spaceCnt += spaceIncr;
        this.printHorizontalTree(parentIdx * 2 + 1, spaceCnt);

        console.log(
            " ".repeat(spaceCnt < spaceIncr ? 0 : spaceCnt - spaceIncr) +
            `${this.heap[parentIdx]} (${parentIdx})`
        );

        this.printHorizontalTree(parentIdx * 2, spaceCnt);
    }
}

var heap = new MinHeap();
heap.insert(10);
heap.insert(5);
heap.insert(1);
heap.insert(7);
heap.insert(13);
heap.insert(25);
heap.extract();
heap.printHorizontalTree();
console.log(heap);

