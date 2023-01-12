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
            return this;
        }
        else {
            newNode.next = this.head;
        }














        // var newNode = new ListNode(data);

        // if (this.isEmpty()) {
        //     this.head = newNode;
        //     return this;
        // }

        // else {
        //     newNode.next = this.head;
        //     this.head = newNode;
        // }
        // return this.head
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

        var tempNode = this.head.next;
        this.head = tempNode;
        return this.head;
    }

    // EXTRA
    /**
     * Calculates the average of this list.
     * - Time: (?).
     * - Space: (?).
     * @returns {number|NaN} The average of the node's data.
     */
    average () {
        if (this.isEmpty()) {
            return 0;
        }
        var sum = 0
        var count = 0;
        var runner = this.head
        while (runner != null) {
            count++;
            sum += runner.data;
            runner = runner.next;
        }
        return sum / count;
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
// console.log(firstThreeList.toArr());
// console.log(firstThreeList.insertAtFront(3));
console.log(firstThreeList.removeHead());
// console.log(firstThreeList.average());

