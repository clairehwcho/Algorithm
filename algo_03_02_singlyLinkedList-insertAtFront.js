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
            return this;
        };

        let runner = this.head;
        while (runner.next !== null) {
            runner = runner.next;
        };

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
            let newNode = new ListNode(item);

            if (this.head === null) {
                this.head = newNode;
            }
            else {
                let runner = this.head;
                while (runner.next !== null) {
                    runner = runner.next;
                }
                runner.next = newNode;
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
    /* ****************************************************** */

    /**
     * Create a new node with the given data and insert that node at the front of this list.
     * - Time: (?).
     * - Space: (?).
     * @param {any} data The data for the new node.
     * @returns {SinglyLinkedList} This list.
     */
    insertAtFront (data) {
        let newNode = new ListNode(data);

        if (this.head === null) {
            this.head = newNode;
        }
        else {
            newNode.next = this.head;
            this.head = newNode;
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
            this.head = this.head.next;
            return this;
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
            return 0;
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

console.log(emptyList.insertAtFront(3).toArr());
console.log(biNodeList.insertAtFront(3).toArr());
console.log(singleNodeList.removeHead().toArr());
console.log(firstThreeNodeList.removeHead().toArr());
console.log(secondThreeNodeList.average());