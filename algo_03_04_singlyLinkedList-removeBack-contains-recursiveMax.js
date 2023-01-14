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

    insertAtBackRecursive (data, runner = this.head) {
        if (this.head === null) { // or if (this.isEmpty()) {
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

    toArr () {
        const arr = [];
        let runner = this.head;

        while (runner) {
            arr.push(runner.data);
            runner = runner.next;
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
        let runner = this.head;
        while (runner !== null) {
            sum += runner.data;
            count++;
            runner = runner.next;
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
        if (this.head === null) {
            return null;
        }
        else {
            let runner = this.head;
            while (runner.next !== null) {
                runner = runner.next
            }
            let removedData = runner.data;
            runner = null;
            return removedData;
        }
    }

    /**
     * Determines whether or not the given search value exists in this list.
     * - Time: O(?).
     * - Space: O(?).
     * @param {any} val The data to search for in the nodes of this list.
     * @returns {boolean}
     */
    contains (val) {
        let runner = this.head;

        while (runner !== null) {
            if (runner.data === val) {
                return true;
            }
            runner = runner.next;
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
     * @param {ListNode} runner The start or current node during traversal,
     *    or null when the end of the list is reached.
     * @param {ListNode} maxNode Keeps track of the node that contains the current max integer as it's data.
     * @returns {?number} The max int or null if none.
     */
    recursiveMax (runner = this.head, maxNode = this.head) {
        if (this.head === null) {
            return null;
        }

        if (runner.next === null) {
            return maxNode.data;
        }

        if (runner.data > maxNode.data) {
            maxNode = runner;
        }
        return this.recursiveMax(runner.next, maxNode);
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

console.log(firstThreeNodeList.removeBack());
console.log(firstThreeNodeList.contains(3));
console.log(firstThreeNodeList.contains(4));
console.log(firstThreeNodeList.containsRecursive(2));
console.log(unorderedNodeList.recursiveMax());
