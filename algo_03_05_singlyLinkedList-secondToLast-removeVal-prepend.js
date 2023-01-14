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
        } newTail
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

    containsRecursive (val, current = this.head) {
        if (current === null) {
            return false;
        }
        if (current.data === val) {
            return true;
        }
        return this.containsRecursive(val, current.next);
    }

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


    /* ****************************************************** */

    /**
     * Retrieves the data of the second to last node in this list.
     * - Time: O(?).
     * - Space: O(?).
     * @returns {any} The data of the second to last node or null if there is no
     *    second to last node.
     */
    secondToLast () {
        let currentNode = this.head;

        if (currentNode === null || currentNode.next === null) {
            return null;
        }

        while (currentNode.next.next !== null) {
            currentNode = currentNode.next;
        }
        let secondToLastNodeData = currentNode.data;
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
        let currentNode = this.head;
        let prevNode = null;
        let isRemoved = false;

        while (currentNode !== null) {
            if (currentNode.data === val && prevNode === null) {
                this.head = currentNode.next
                isRemoved = true;
            }
            else if (currentNode.data === val) {
                prevNode.next = currentNode.next;
                isRemoved = true;
            }
            prevNode = currentNode;
            currentNode = currentNode.next;
        }

        if (isRemoved === true) {
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
        let currentNode = this.head;
        let prevNode = null;
        let newNode = new ListNode(newVal);
        let isPrepended = false;

        while (currentNode !== null) {
            if (currentNode.data === targetVal && prevNode === null) {
                newNode.next = currentNode;
                this.head = newNode;
                isPrepended = true;
            }
            else if (currentNode.data === targetVal) {
                newNode.next = currentNode;
                prevNode.next = newNode;
                isPrepended = true;
            }
            prevNode = currentNode;
            currentNode = currentNode.next;
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

console.log(emptyList.secondToLast());
// null
console.log(singleNodeList.secondToLast());
// null
console.log(firstThreeNodeList.secondToLast());
// 2
console.log(emptyList.removeVal(1));
// false
console.log(firstThreeNodeList.removeVal(2));
// true
console.log(firstThreeNodeList.removeVal(4));
// false
console.log(emptyList.prepend(100, 5));
// false
console.log(singleNodeList.prepend(100, 1));
// true
console.log(secondThreeNodeList.prepend(100, 5));
// true