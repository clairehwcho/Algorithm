/*
1. Create ListNode object by instantiating a class called ListNode.
- class ListNode is a node for a singly-linked list that can be linked to other Node instances to form a list of linked nodes.
- 'new' keyword is used to construct a new Node instance of an empty linked list.
- A new node instance is returned automatically without having to be explicitly written (implicit return).

2. A listNode consists of two data members:
- data: The data we are keeping track of at this node (Object), which can be anything just like an array can contain strings, numbers, objects, etc.
- next: The next ListNode in the chain.
*/

class ListNode {
    constructor (data) {
        this.data = data;
        this.next = null;
    }
}

/*
3. Create SinglyLinkedList object that keeps track of the start (head) of the list and stores all the functionality (methods) that each list should have.
*/

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
     * Create a new node with the given data and insert it at the back of this list.
     * - Time: O(?).
     * - Space: O(?).
     * @param {any} data The data to be added to the new node.
     * @returns {SinglyLinkedList} This list.
     */

    insertAtBack (data) {
        let newNode = new ListNode(data);

        if (this.head === null) {
            this.head = newNode;
        }
        else {
            let currNode = this.head;

            while (currNode.next !== null) {
                currNode = currNode.next;
            };
            currNode.next = newNode;
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
        if (this.head === null) {
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
        for (const val of vals) {
            let newNode = new NodeList(val);

            if (this.head === null) {
                this.head === newNode;
            }
            else {
                let currNode = this.head;

                while (currNode.next !== null) {
                    currNode = currNode.next;
                };
                currNode.next = newNode;
            };
        };
        return this;
    }

    /**
     * Convert this list into an array containing the data of each node.
     * - Time: O(n) linear.
     * - Space: O(n).
     * @returns {Array<any>} An array of each node's data.
     */

    toArr () {
        let result = [];
        let currNode = this.head;

        while (currNode !== null) {
            result.push(currNode.data);
            currNode = currNode.next;
        }
        return result;
    }

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
    };

    /**
     * Remove the first node of this list.
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
     * Calculate the average of this list.
     * - Time: (?).
     * - Space: (?).
     * @returns {number|NaN} The average of the node's data.
     */
    average () {
        if (this.head === null) {
            return NaN;
        }
        else {
            let sum = 0;
            let count = 0;
            let currNode = this.head;

            while (currNode !== null) {
                sum += currNode.data;
                count++;
                currNode = currNode.next;
            }

            let average = sum / count;

            return average;
        }
    }

    /**
     * Remove the last node of this list.
     * - Time: O(?).
     * - Space: O(?).
     * @returns {any} The data from the node that was removed.
     */
    removeBack () {
        let currNode = this.head;
        let prevNode = null;

        if (currNode === null) {
            return null;
        }

        if (currNode.next === null) {
            this.head = null;
        }
        else {
            while (currNode.next !== null) {
                prevNode = currNode;
                currNode = currNode.next;
            }
            prevNode.next = null;
        }
        let removedData = currNode.data;
        return removedData;
    }

    /**
     * Determine whether or not the given search value exists in this list.
     * - Time: O(?).
     * - Space: O(?).
     * @param {any} val The data to search for in the nodes of this list.
     * @returns {boolean}
     */
    contains (val) {
        let currNode = this.head;

        while (currNode !== null) {
            if (currNode.data === val) {
                return true;
            }
            else {
                currNode = currNode.next;
            }
        }
        return false;
    }

    /**
     * Determine whether or not the given search value exists in this list.
     * - Time: O(?).
     * - Space: O(?).
     * @param {any} val The data to search for in the nodes of this list.
     * @param {?ListNode} current The current node during the traversal of this list
     *                            or null when the end of the list has been reached.
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
     * Recursively find the maximum integer data of the nodes in this list.
     * - Time: O(?).
     * - Space: O(?).
     * @param {ListNode} currentNode The start or current node during traversal,
     *                               or null when the end of the list is reached.
     * @param {ListNode} maxNode Keeps track of the node that contains the current max integer as it's data.
     * @returns {?number} The max int or null if none.
     */
    recursiveMax (currentNode = this.head, maxNode = this.head) {
        if (currentNode === null) {
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

    /**
     * Retrieve the data of the second to last node in this list.
     * - Time: O(?).
     * - Space: O(?).
     * @returns {any} The data of the second to last node
     *                or null if there is no second to last node.
     */
    secondToLast () {
        let currNode = this.head;

        if (currNode === null || currNode.next === null) {
            return null;
        }

        while (currNode.next.next !== null) {
            currNode = currNode.next;
        }
        let secondToLastNodeData = currNode.data;
        return secondToLastNodeData;
    }

    /**
     * Remove the node that has the matching given val as it's data.
     * - Time: O(?).
     * - Space: O(?).
     * @param {any} val The value to compare to the node's data to find the
     *                  node to be removed.
     * @returns {boolean} Indicates if a node was removed or not.
     */
    removeVal (val) {
        let currNode = this.head;
        let prevNode = null;
        let isRemoved = false;

        while (currNode !== null) {
            if (currNode.data === val && prevNode === null) {
                this.head = currNode.next;
                isRemoved = true;
            }
            else if (currNode.data === val) {
                prevNode.next = currNode.next;
                isRemoved = true;
            }
            prevNode = currNode;
            currNode = currNode.next;
        }
        return isRemoved;
    }

    /**
     * Insert a new node before a node that has the given value as its data.
     * - Time: O(?).
     * - Space: O(?).
     * @param {any} newVal The value to use for the new node that is being added.
     * @param {any} targetVal The value to use to find the node that the newVal should be inserted in front of.
     * @returns {boolean} To indicate whether the node was pre-pended or not.
     */
    prepend (newVal, targetVal) {
        let prevNode = null;
        let currNode = this.head;
        let newNode = new ListNode(newVal);
        let isPrepended = false;

        while (currNode !== null) {
            if (currNode.data === targetVal && prevNode === null) {
                newNode.next = currNode;
                this.head = newNode;
                isPrepended = true;
            }
            else if (currNode.data === targetVal) {
                newNode.next = currNode;
                prevNode.next = newNode;
                isPrepended = true;
            }
            prevNode = currNode;
            currNode = currNode.next;
        }
        return isPrepended;
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