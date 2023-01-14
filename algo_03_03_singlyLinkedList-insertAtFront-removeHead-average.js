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

    insertAtBackRecursive (data, currentNode = this.head) {
        if (this.head === null) { // or if (this.isEmpty()) {
            this.head = new ListNode(data);
            return this;
        }

        if (currentNode.next === null) {
            currentNode.next = new ListNode(data);
            return this;
        }
        return this.insertAtBackRecursive(data, currentNode.next);
    }

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

    toArr () {
        const arr = [];
        let currentNode = this.head;

        while (currentNode) {
            arr.push(currentNode.data);
            currentNode = currentNode.next;
        }
        return arr;
    }
    /* ****************************************************** */

    /**
     * Create a new node with the given data and insert that node at the front of this list.
     * - Time: (?).
     * - Space: (?).
     * @param {any} data The data for the new node.
     * @returns {SinglyLinkedList} This list.
     */
    insertAtFront (data) {
        let newHead = new ListNode(data);

        if (this.head === null) {
            this.head = newHead;
        }
        else {
            newHead.next = this.head;
            this.head = newHead;
        }
        return this;
    }

    /**
     * Removes the first node of this list.
     * - Time: (?).
     * - Space: (?).
     * @returns {any} The data from the removed node.
     */
    removeHead () {
        if (this.head === null) {
            return null;
        }
        else {
            let oldHead = this.head;
            this.head = this.head.next;
            return oldHead.data;
        }
    }

    /**
     * Calculates the average of this list.
     * - Time: (?).
     * - Space: (?).
     * @returns {number|NaN} The average of the node's data.
     */
    average () {
        if (this.head === null) {
            return NaN;
        }

        let sum = 0;
        let count = 0;
        let currentNode = this.head;
        while (currentNode !== null) {
            sum += currentNode.data;
            count++;
            currentNode = currentNode.next;
        }

        let average = sum / count

        return average;
    }
}

/* ****************************************************** */
const emptyList = new SinglyLinkedList();
const isEmpty = emptyList.isEmpty();
const singleNodeList = new SinglyLinkedList().insertAtBack(1);
const recursiveSingleNodeList = new SinglyLinkedList().insertAtBackRecursive([1]);
const biNodeList = new SinglyLinkedList().insertAtBackMany([1, 2]);
const firstThreeNodeList = new SinglyLinkedList().insertAtBackMany([1, 2, 3]);
const secondThreeNodeList = new SinglyLinkedList().insertAtBackMany([4, 5, 6]);
const unorderedNodeList = new SinglyLinkedList().insertAtBackMany([
    -5, -10, 4, -3, 6, 1, -7, -2,
]);

console.log(emptyList.insertAtFront(3).toArr());
// [ 3 ]
console.log(biNodeList.insertAtFront(3).toArr());
// [ 3, 1, 2 ]
console.log(singleNodeList.removeHead());
// 1
console.log(firstThreeNodeList.removeHead());
// 1
console.log(secondThreeNodeList.average());
// 5