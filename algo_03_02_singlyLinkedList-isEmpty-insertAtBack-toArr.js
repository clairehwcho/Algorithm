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

    /**
     * Determine if this list is empty.
     * - Time: O(?).
     * - Space: O(?).
     * @returns { boolean }
     */

    isEmpty () {
        return this.head === null;
    }

    /**
     * Creates a new node with the given data and inserts it at the back of this list.
     * - Time: O(?).
     * - Space: O(?).
     * @param {any} data The data to be added to the new node.
     * @returns {SinglyLinkedList} This list.
     */

    insertAtBack (data) {
        let newTail = new ListNode(data);

        if (this.head === null) { // or if (this.isEmpty()) {
            this.head = newTail;
        }
        else {
            let runner = this.head;
            while (runner.next !== null) {
                runner = runner.next;
            };
            runner.next = newTail;
        }
        return this;
    }

    /**
     * Create a new node with the given data and inserts it at the back of this list.
     * - Time: O(?).
     * - Space: O(?).
     * @param {any} data The data to be added to the new node.
     * @param {?ListNode} runner The current node during the traversal of this list
     *    or null when the end of the list has been reached.
     * @returns {SinglyLinkedList} This list.
     */

    insertAtBackRecursive (data, runner = this.head) {
        if (this.head === null) { // or if (this.isEmpty()) {
            this.head = new ListNode(data);
            return this;
        };

        if (runner.next === null) {
            runner.next = new ListNode(data);
            return this;
        };
        return this.insertAtBackRecursive(data, runner.next);
    }

    /**
     * Insert an array at the back of this list.
     * - Time: O(n * m) n = list length, m = arr.length.
     * - Space: O(1) constant.
     * @param {Array<any>} vals The data for each new node.
     * @returns {SinglyLinkedList} This list.
     */
    insertAtBackMany (vals) {
        for (const item of vals) {
            let newTail = new ListNode(item);

            if (this.head === null) {
                this.head = newTail;
            }
            else {
                let runner = this.head;
                while (runner.next !== null) {
                    runner = runner.next;
                }
                runner.next = newTail;
            };
            // or this.insertAtBack(item);
        }
        return this;
    }

    /**
     * Convert this list into an array containing the data of each node.
     * - Time: O(n) linear.
     * - Space: O(n).
     * @returns {Array<any>} An array of each node's data.
     */
    toArr () {
        const arr = [];
        let runner = this.head;

        while (runner) {
            arr.push(runner.data);
            runner = runner.next;
        }
        return arr;
    };
}

/* ****************************************************** */
const emptyList = new SinglyLinkedList();
const isEmpty = emptyList.isEmpty();
const singleNodeList = new SinglyLinkedList().insertAtBack([1]);
const recursiveSingleNodeList = new SinglyLinkedList().insertAtBackRecursive([1]);
const biNodeList = new SinglyLinkedList().insertAtBackMany([1, 2]);
const firstThreeNodeList = new SinglyLinkedList().insertAtBackMany([1, 2, 3]);
const secondThreeNodeList = new SinglyLinkedList().insertAtBackMany([4, 5, 6]);
const unorderedNodeList = new SinglyLinkedList().insertAtBackMany([
    -5, -10, 4, -3, 6, 1, -7, -2,
]);

console.log(emptyList);
console.log(emptyList.toArr());
console.log(isEmpty);
console.log(singleNodeList);
console.log(singleNodeList.toArr());
console.log(recursiveSingleNodeList);
console.log(recursiveSingleNodeList.toArr());
console.log(biNodeList);
console.log(biNodeList.toArr());
console.log(firstThreeNodeList);
console.log(firstThreeNodeList.toArr());
console.log(secondThreeNodeList);
console.log(secondThreeNodeList.toArr());
console.log(unorderedNodeList);
console.log(unorderedNodeList.toArr());

// Connect node 4 to node 1, back to head
const perfectLoopList = new SinglyLinkedList().insertAtBackMany([1, 2, 3, 4]);
perfectLoopList.head.next.next.next = perfectLoopList.head;

console.log(perfectLoopList);

// Connect noe 4 to node 2
const loopList = new SinglyLinkedList().insertAtBackMany([1, 2, 3, 4]);
loopList.head.next.next.next = loopList.head.next;

console.log(loopList);