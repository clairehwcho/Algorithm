class ListNode {
    constructor (data) {
        this.data = data;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor () {
        this.head = null;
    }
    isEmpty () {
        return this.head === null;
    }

    insertAtBack (data) {
        var newNode = new ListNode(data);

        if (this.isEmpty()) {
            this.head = newNode;
            return this;
        }

        var runner = this.head;
        while (runner.next !== null) {
            runner = runner.next;
        }

        runner.next = newNode;

        return this;
    }

    insertAtBackRecursive (data, runner = this.head) {
        if (this.isEmpty()) {
            this.head = new ListNode(data);
            return this;
        }

        if (runner.next === null) {
            runner.next = new ListNode(data);
            return this;
        }
        return this.insertAtBackRecursive(data, runner.next);
    }

    insertAtBackMany (vals) {
        for (const item of vals) {
            this.insertAtBack(item);
        }
        return this;
    }

    toArr () {
        const arr = [];
        let runner = this.head;

        while (runner) {
            arr.push(runner.data);
            runner = runner.next;
        }
        return arr;
    }


    // ==============================================================
    // DAY 2
    // ==============================================================

    /**
     * Creates a new node with the given data and inserts that node at the front
     * of this list.
     * - Time: (?).
     * - Space: (?).
     * @param {any} data The data for the new node.
     * @returns {SinglyLinkedList} This list.
     */
    insertAtFront (data) {
        const newHead = new ListNode(data);
        newHead.next = this.head;
        this.head = newHead;
        return this;
    }

    /**
     * Removes the first node of this list.
     * - Time: (?).
     * - Space: (?).
     * @returns {any} The data from the removed node.
     */
    removeHead () {
        if (this.isEmpty()) {
            return null;
        }

        const oldHead = this.head;
        this.head = oldHead.next;
        return oldHead.data;
    }

    // EXTRA
    /**
     * Calculates the average of this list.
     * - Time: (?).
     * - Space: (?).
     * @returns {number|NaN} The average of the node's data.
     */
    average () {
        let runner = this.head;
        let sum = 0;
        let cnt = 0;

        while (runner) {
            cnt++;
            sum += runner.data;
            runner = runner.next;
        }

        /**
         * Dividing by 0 will give you NaN (Not a Number), so an empty list
         * will return NaN in this case, it may make sense to allow NaN to be
         * returned, because the average of an empty list doesn't make sense and
         * it could be misleading to return 0 since 0 is the average of any
         * list with a sum of 0 (due to negatives or all zeros).
         */
        return sum / cnt;
    }

    // ==============================================================
    // DAY 4
    // ==============================================================

    /**
     * Removes the last node of this list.
     * - Time: O(?).
     * - Space: O(?).
     * @returns {any} The data from the node that was removed.
     */
    removeBack () {
        if (this.isEmpty()) {
            return null;
        }

        var runner = this.head;
        var forwardRunner = runner.next
        while (forwardRunner.next != null) {
            forwardRunner = forwardRunner.next
            runner = runner.next
        }
        runner.next = null
        return runner
    }

    /**
     * Determines whether or not the given search value exists in this list.
     * - Time: O(?).
     * - Space: O(?).
     * @param {any} val The data to search for in the nodes of this list.
     * @returns {boolean}
     */
    contains (val) {
        if (this.isEmpty()) {
            return false;
        }

        var runner = this.head
        while (runner != null) {
            if (runner.data == val) {
                return true;
            }
            runner = runner.next
        }
        return false;
    }

    /**
     * Determines whether or not the given search value exists in this list.
     * - Time: O(?).
     * - Space: O(?).
     * @param {any} val The data to search for in the nodes of this list.
     * @param {?ListNode} current The current node during the traversal of this list
     *    or null when the end of the list has been reached.
     * @returns {boolean}
     */
    containsRecursive (val, current = this.head) {
        if (this.isEmpty()) return false;

        if (current.data == val) {
            return true;
        }

        if (current.next != null) {
            return this.containsRecursive(val, current.next);
        }
        return false;
    }

    // EXTRA
    /**
     * Recursively finds the maximum integer data of the nodes in this list.
     * - Time: O(?).
     * - Space: O(?).
     * @param {ListNode} runner The start or current node during traversal, or null
     *    when the end of the list is reached.
     * @param {ListNode} maxNode Keeps track of the node that contains the current
     *    max integer as it's data.
     * @returns {?number} The max int or null if none.
     */
    recursiveMax (runner = this.head, maxNode = this.head) {
        if (this.isEmpty()) return false;

        if (runner.data > maxNode.data) {
            maxNode = runner
        }

        if (runner.next != null) {
            return this.recursiveMax(runner.next, maxNode)
        }
        return maxNode;
    }
}

/*******************************************************************
Multiple test lists already constructed to test your methods on.
Below commented code depends on insertAtBack method to be completed,
after completing it, uncomment the code.
*/
const emptyList = new SinglyLinkedList();

const singleNodeList = new SinglyLinkedList().insertAtBackMany([1]);
const biNodeList = new SinglyLinkedList().insertAtBackMany([1, 2]);
const firstThreeList = new SinglyLinkedList().insertAtBackMany([1, 2, 3]);
const secondThreeList = new SinglyLinkedList().insertAtBackMany([4, 5, 6]);
const unorderedList = new SinglyLinkedList().insertAtBackMany([
    -5, -10, 4, -3, 6, 1, -7, -2,
]);

// Print your list like so:
console.log(firstThreeList.toArr());
console.log(firstThreeList.removeBack());
console.log(firstThreeList.contains(3));
console.log(firstThreeList.containsRecursive(2));
console.log(unorderedList.recursiveMax());
