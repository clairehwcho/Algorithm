class ListNode {
    /**
     * Constructs a new Node instance. Executed when the 'new' keyword is used.
     * @param {any} data The data to be added into this new instance of a Node.
     *    The data can be anything, just like an array can contain strings,
     *    numbers, objects, etc.
     * @returns {ListNode} A new Node instance is returned automatically without
     *    having to be explicitly written (implicit return).
     */
    constructor (data) {
        this.data = data;
        /**
         * This property is used to link this node to whichever node is next
         * in the list. By default, this new node is not linked to any other
         * nodes, so the setting / updating of this property will happen sometime
         * after this node is created.
         *
         * @type {ListNode|null}
         */
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    /**
     * Executed when the new keyword is used to construct a new DoublyLInkedList
     * instance that inherits these methods and properties.
     */
    constructor () {
        // TODO: implement the constructor.
        /** @type {ListNode|null} */
        this.head = null;
        this.tail = null;
    }

    /**
     * TODO: Implement this method
     * Creates a new node and adds it at the front of this list.
     * - Time: O(?).
     * - Space: O(?).
     * @param {any} data The data for the new node.
     * @returns {DoublyLinkedList} This list.
     */
    insertAtFront (data) {
        const newNode = new ListNode(data);
        if (this.isEmpty()) {
            this.head = newNode;
            this.tail = newNode;
            return this;
        }
        newNode.next = this.head;
        this.head.prev = newNode;
        this.head = newNode;
        return this;
    }


    /**
     * TODO: Implement this method
     * Creates a new node and adds it at the back of this list.
     * - Time: O(?).
     * - Space: O(?).
     * @param {any} data The data for the new node.
     * @returns {DoublyLinkedList} This list.
     */
    insertAtBack (data) {
        const newNode = new ListNode(data);
        if (this.isEmpty()) {
            this.head = newNode;
            this.tail = newNode;
            return this;
        }
        newNode.prev = this.tail;
        this.tail.next = newNode;
        this.tail = newNode;
        return this;
    }


    // EXTRA
    /**
     * TODO: Implement this method
     * Removes the middle node in this list.
     * NOTE: If length of DLL is even, then there is no middle node. Need to check for this somehow...
     * - Time: O(?).
     * - Space: O(?).
     * @returns {any} The data of the removed node.
     */
    removeMiddleNode () { }

    /**
     * Determines if this list is empty.
     * - Time: O(1) constant.
     * - Space: O(1) constant.
     * @returns {boolean} Indicates if this list is empty.
     */
    isEmpty () {
        return this.head === null;
    }

    /**
     * Converts this list to an array of the node's data.
     * - Time: O(n) linear, n = list length.
     * - Space: O(n) linear, array grows as list length increases.
     * @returns {Array<any>} All the data of the nodes.
     */
    toArray () {
        const vals = [];
        let runner = this.head;

        while (runner) {
            vals.push(runner.data);
            runner = runner.next;
        }
        return vals;
    }

    /**
     * Adds all the given items to the back of this list.
     * @param {Array<any>} items Items to be added to the back of this list.
     * @returns {DoublyLinkedList} This list.
     */
    insertAtBackMany (items = []) {
        items.forEach((item) => this.insertAtBack(item));
        return this;
    }
}


/**************** Uncomment these test lists after insertAtBack is created. ****************/

console.log("--------check insertAtFront---------")
const emptyList = new DoublyLinkedList();
emptyList.insertAtFront(4).insertAtFront(6);
console.log(emptyList.toArray());
console.log("--------check insertAtBack---------")
const singleNodeList = new DoublyLinkedList().insertAtBack(1);
const biNodeList = new DoublyLinkedList().insertAtBack(1).insertAtBack(2);
console.log(singleNodeList.toArray());
console.log(biNodeList.toArray());
console.log("--------check insertAtBackMany---------")
// const firstThreeList = new DoublyLinkedList().insertAtBackMany([1, 2, 3]);
// const secondThreeList = new DoublyLinkedList().insertAtBackMany([4, 5, 6]);
// const unorderedList = new DoublyLinkedList().insertAtBackMany([
//     -5,
//     -10,
//     4,
//     -3,
//     6,
//     1,
//     -7,
//     -2,
// ]);