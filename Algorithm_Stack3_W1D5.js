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

    containsRecursive (val, current = this.head) {
        if (current === null) {
            return false;
        }
        if (current.data === val) {
            return true;
        }
        return this.containsRecursive(val, current.next);
    }

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


    /* ****************************************************** */

    /**
     * Retrieves the data of the second to last node in this list.
     * - Time: O(?).
     * - Space: O(?).
     * @returns {any} The data of the second to last node or null if there is no
     *    second to last node.
     */
    secondToLast () {
        let runner = this.head;

        if (runner === null || runner.next === null) {
            return null;
        }

        while (runner.next.next !== null) {
            runner = runner.next;
        }
        let secondToLastNodeData = runner.data;
        return secondToLastNodeData;
    };

    /**
     * Removes the node that has the matching given val as it's data.
     * - Time: O(?).
     * - Space: O(?).
     * @param {any} val The value to compare to the node's data to find the
     *    node to be removed.
     * @returns {boolean} Indicates if a node was removed or not.
     */
    removeVal (val) {
        let runner = this.head;
        let isRemoved = false;

        if (this.head === null) {
            return false;
        }

        if (this.head.data === val) {
            this.head = this.head.next;
            isRemoved = true;
        }
        else {
            while (runner !== null) {
                if (runner.data === val) {
                    let newNextNode = runner.next;
                    runner = newNextNode;
                    isRemoved = true;
                }
                else {
                    runner = runner.next;
                }
            }
        }

        if (isRemoved === true) {
            console.log(this.toArr());
            return true;
        }
        return false;
    }

    /**
     * Inserts a new node before a node that has the given value as its data.
     * - Time: O(?).
     * - Space: O(?).
     * @param {any} newVal The value to use for the new node that is being added.
     * @param {any} targetVal The value to use to find the node that the newVal should be inserted in front of.
     * @returns {boolean} To indicate whether the node was pre-pended or not.
     */
    prepend (newVal, targetVal) {
        let runner = this.head;
        let isPrepended = false;
        let newNode = new ListNode(newVal);

        while (runner !== null) {
            if (runner.data === targetVal) {
                newNode.next = runner;
                runner = newNode.next.next;
                isPrepended = true;
            }
            else {
                runner = runner.next;
            }
        }

        if (isPrepended === true) {
            console.log(this.toArr());
            return true;
        }
        return false;
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

// console.log(emptyList.secondToLast());
// console.log(singleNodeList.secondToLast());
// console.log(firstThreeNodeList.secondToLast());
console.log(emptyList.removeVal(1));
console.log(firstThreeNodeList.removeVal(2));
console.log(firstThreeNodeList.removeVal(4));
// console.log(emptyList.prepend(100, 5));
// console.log(secondThreeNodeList.prepend(100, 5));