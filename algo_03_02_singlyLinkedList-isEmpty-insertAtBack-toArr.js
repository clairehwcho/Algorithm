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
        let newNode = new ListNode(data);

        if (this.head === null) { // or if (this.isEmpty()) {
            this.head = newNode;
        }
        else {
            let currentNode = this.head;
            while (currentNode.next !== null) {
                currentNode = currentNode.next;
            };
            currentNode.next = newNode;
        }
        return this;
    }

    /**
     * Create a new node with the given data and inserts it at the back of this list.
     * - Time: O(?).
     * - Space: O(?).
     * @param {any} data The data to be added to the new node.
     * @param {?ListNode} currentNode The current node during the traversal of this list
     *    or null when the end of the list has been reached.
     * @returns {SinglyLinkedList} This list.
     */

    insertAtBackRecursive (data, currentNode = this.head) {
        if (this.head === null) { // or if (this.isEmpty()) {
            this.head = new ListNode(data);
            return this;
        };

        if (currentNode.next === null) {
            currentNode.next = new ListNode(data);
            return this;
        };
        return this.insertAtBackRecursive(data, currentNode.next);
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
            let newNode = new ListNode(item);

            if (this.head === null) {
                this.head = newNode;
            }
            else {
                let currentNode = this.head;
                while (currentNode.next !== null) {
                    currentNode = currentNode.next;
                }
                currentNode.next = newNode;
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
        let currentNode = this.head;

        while (currentNode) {
            arr.push(currentNode.data);
            currentNode = currentNode.next;
        }
        return arr;
    };
}

/* ****************************************************** */
const emptyList = new SinglyLinkedList();
const isEmpty = emptyList.isEmpty();
const singleNodeList = new SinglyLinkedList().insertAtBack(1);
const recursiveSingleNodeList = new SinglyLinkedList().insertAtBackRecursive(1);
const biNodeList = new SinglyLinkedList().insertAtBackMany([1, 2]);
const firstThreeNodeList = new SinglyLinkedList().insertAtBackMany([1, 2, 3]);
const secondThreeNodeList = new SinglyLinkedList().insertAtBackMany([4, 5, 6]);
const unorderedNodeList = new SinglyLinkedList().insertAtBackMany([
    -5, -10, 4, -3, 6, 1, -7, -2,
]);

console.log(emptyList);
// SinglyLinkedList { head: null }
console.log(emptyList.toArr());
// []
console.log(isEmpty);
// true
console.log(singleNodeList);
// SinglyLinkedList { head: ListNode { data: [ 1 ], next: null } }
console.log(singleNodeList.toArr());
// [ 1 ]
console.log(recursiveSingleNodeList);
// SinglyLinkedList { head: ListNode { data: 1, next: null } }
console.log(recursiveSingleNodeList.toArr());
// [ 1 ]
console.log(biNodeList);
// SinglyLinkedList { head: ListNode { data: 1, next: ListNode { data: 2, next: null } }}
console.log(biNodeList.toArr());
// [ 1, 2 ]
console.log(firstThreeNodeList.toArr());
// [ 1, 2, 3 ]
console.log(secondThreeNodeList.toArr());
// [ 4, 5, 6 ]
console.log(unorderedNodeList.toArr());
// [ -5, -10,  4, -3, 6, 1, -7, -2 ]


// Connect node 4 to node 1, back to head
const perfectLoopList = new SinglyLinkedList().insertAtBackMany([1, 2, 3, 4]);
perfectLoopList.head.next.next.next = perfectLoopList.head;

console.log(perfectLoopList);

// Connect noe 4 to node 2
const loopList = new SinglyLinkedList().insertAtBackMany([1, 2, 3, 4]);
loopList.head.next.next.next = loopList.head.next;

console.log(loopList);