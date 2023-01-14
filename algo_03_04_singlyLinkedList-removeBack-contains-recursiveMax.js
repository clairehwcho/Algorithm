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

    /* ****************************************************** */

    /**
     * Removes the last node of this list.
     * - Time: O(?).
     * - Space: O(?).
     * @returns {any} The data from the node that was removed.
     */
    removeBack () {
        let currentNode = this.head;
        let prevNode = null;

        if (currentNode === null) {
            return null;
        }

        if (currentNode.next === null) {
            this.head = null;
        }
        else {
            while (currentNode.next !== null) {
                prevNode = currentNode;
                currentNode = currentNode.next
            }
            prevNode.next = null;
        }
        let removedData = currentNode.data;
        return removedData;
    }

    /**
     * Determines whether or not the given search value exists in this list.
     * - Time: O(?).
     * - Space: O(?).
     * @param {any} val The data to search for in the nodes of this list.
     * @returns {boolean}
     */
    contains (val) {
        let currentNode = this.head;

        while (currentNode !== null) {
            if (currentNode.data === val) {
                return true;
            }
            currentNode = currentNode.next;
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
        if (current === null) {
            return false;
        }
        if (current.data === val) {
            return true;
        }
        return this.containsRecursive(val, current.next);
    }

    /**
     * Recursively finds the maximum integer data of the nodes in this list.
     * - Time: O(?).
     * - Space: O(?).
     * @param {ListNode} currentNode The start or current node during traversal,
     *    or null when the end of the list is reached.
     * @param {ListNode} maxNode Keeps track of the node that contains the current max integer as it's data.
     * @returns {?number} The max int or null if none.
     */
    recursiveMax (currentNode = this.head, maxNode = this.head) {
        if (this.head === null) {
            return null;
        }

        if (currentNode.next === null) {
            return maxNode.data;
        }

        if (currentNode.data > maxNode.data) {
            maxNode = currentNode;
        }
        return this.recursiveMax(currentNode.next, maxNode);
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

console.log(emptyList.removeBack());
// null
console.log(singleNodeList.removeBack());
// 1
console.log(firstThreeNodeList.removeBack());
// 3
console.log(secondThreeNodeList.contains(3));
// false
console.log(secondThreeNodeList.contains(4));
// true
console.log(secondThreeNodeList.containsRecursive(4));
// true
console.log(unorderedNodeList.recursiveMax());
// 6