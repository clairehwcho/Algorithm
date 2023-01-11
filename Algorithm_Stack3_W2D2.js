/**
 * Class to represent a Node in a Binary Search Tree (BST).
 */
 class BSTNode {
    /**
     * Constructs a new instance of a BST node.
     * @param {number} data The integer to store in the node.
     */
    constructor (data) {
        this.data = data;
        /**
         * These properties are how this node is connected to other nodes to form
         * the tree. Similar to .next in a SinglyLinkedList except a BST node can
         * be connected to two other nodes. To start, new nodes will not be
         * connected to any other nodes, these properties will be set after
         * the new node is instantiated.
         *
         * @type {BSTNode|null}
         */
        this.left = null;
        /** @type {BSTNode|null} */
        this.right = null;
    }
}

/**
 * Represents an ordered tree of nodes where the data of left nodes are <= to
 * their parent and the data of nodes to the right are > their parent's data.
 */
class BinarySearchTree {
    constructor () {
        /**
         * Just like the head of a linked list, this is the start of our tree which
         * branches downward from here.
         *
         * @type {BSTNode|null}
         */
        this.root = null;
    }

    /**
     * Determines if this tree is empty.
     * - Time: O(1) constant.
     * - Space: O(1) constant.
     * @returns {boolean} Indicates if this tree is empty.
     */
    isEmpty () {
        return this.root === null;
    }

    /**
     * Retrieves the smallest integer data from this tree.
     * - Time: O(h) linear, h = height of left sub tree starting from current node.
     * - Space: O(1) constant.
     * @param {BSTNode} current The node that is currently accessed from the tree as
     *    the tree is being traversed.
     * @returns {number} The smallest integer from this tree.
     */
    min (current = this.root) {
        if (current === null) {
            return null;
        }

        while (current.left) {
            current = current.left;
        }
        return current.data;
    }

    /**
     * Retrieves the smallest integer data from this tree.
     * - Time: O(h) linear, h = height of left sub tree starting from current node.
     * - Space: O(h) linear due to the call stack.
     * @param {BSTNode} current The node that is currently accessed from the tree as
     *    the tree is being traversed.
     * @returns {number} The smallest integer from this tree.
     */
    minRecursive (current = this.root) {
        if (current === null) {
            return null;
        }

        if (current.left === null) {
            return current.data;
        }
        return this.minRecursive(current.left);
    }

    /**
     * Retrieves the largest integer data from this tree.
     * - Time: O(h) linear, h = height of right sub tree starting from current node.
     * - Space: O(1) constant.
     * @param {BSTNode} current The node that is currently accessed from the tree as
     *    the tree is being traversed.
     * @returns {number} The largest integer from this tree.
     */
    max (current = this.root) {
        if (current === null) {
            return null;
        }

        while (current.right) {
            current = current.right;
        }
        return current.data;
    }

    /**
     * Retrieves the largest integer data from this tree.
     * - Time: O(h) linear, h = height of right sub tree starting from current node.
     * - Space: O(h) linear due to the call stack.
     * @param {BSTNode} current The node that is currently accessed from the tree as
     *    the tree is being traversed.
     * @returns {number} The largest integer from this tree.
     */
    maxRecursive (current = this.root) {
        if (current === null) {
            return null;
        }

        if (current.right === null) {
            return current.data;
        }
        return this.maxRecursive(current.right);
    }

    // Logs this tree horizontally with the root on the left.
    print (node = this.root, spaceCnt = 0, spaceIncr = 10) {
        if (!node) {
            return;
        }

        spaceCnt += spaceIncr;
        this.print(node.right, spaceCnt);

        console.log(
            " ".repeat(spaceCnt < spaceIncr ? 0 : spaceCnt - spaceIncr) +
            `${node.data}`
        );

        this.print(node.left, spaceCnt);
    }

    // ****************************************************************************
    // DAY 2
    // ****************************************************************************

    /**
     * Determines if this tree contains the given searchVal.
     * - Time: O(?).
     * - Space: O(?).
     * @param {number} searchVal The number to search for in the node's data.
     * @returns {boolean} Indicates if the searchVal was found.
     */
    contains (searchVal) {
        if (this.isEmpty()) {
            return false;
        }
        let current = this.root;
        while (current.left != null && current.right != null) {
            if (current.data == searchVal) {
                return true;
            }
            else if (current.data > searchVal) {
                current = current.left;
            }
            else {
                current = current.right;
            }
        }
        if (current.data == searchVal) {
            return true;
        }
        else {
            return false;
        }
    }


    /**
     * Determines if this tree contains the given searchVal.
     * - Time: O(?).
     * - Space: O(?).
     * @param {number} searchVal The number to search for in the node's data.
     * @returns {boolean} Indicates if the searchVal was found.
     */
    containsRecursive (searchVal, current = this.root) {
        if (this.isEmpty()) return false;
        if (current.data == searchVal) return true;
        else if (searchVal > current.data) {
            return this.containsRecursive(searchVal, current.right);
        }
        else if (searchVal < current.data) {
            return this.containsRecursive(searchVal, current.left);
        }
    }


    /**
     * Calculates the range (max - min) from the given startNode.
     * - Time: O(?).
     * - Space: O(?).
     * @param {Node} startNode The node to start from to calculate the range.
     * @returns {number|null} The range of this tree or a sub tree depending on if the
     *    startNode is the root or not.
     */
    range (startNode = this.root) {
        if (startNode.left == null && startNode.right == null) return null;
        return (this.max(startNode) - this.min(startNode));
    }
}

const emptyTree = new BinarySearchTree();
const oneNodeTree = new BinarySearchTree();
oneNodeTree.root = new BSTNode(10);

/* twoLevelTree
        root
        10
      /   \
    5     15
*/
const twoLevelTree = new BinarySearchTree();
twoLevelTree.root = new BSTNode(10);
twoLevelTree.root.left = new BSTNode(5);
twoLevelTree.root.right = new BSTNode(15);

/* threeLevelTree
        root
        10
      /   \
    5     15
  / \    / \
2   6  13
*/
const threeLevelTree = new BinarySearchTree();
threeLevelTree.root = new BSTNode(10);
threeLevelTree.root.left = new BSTNode(5);
threeLevelTree.root.left.left = new BSTNode(2);
threeLevelTree.root.left.right = new BSTNode(6);
threeLevelTree.root.right = new BSTNode(15);
threeLevelTree.root.right.left = new BSTNode(13);

/* fullTree
                    root
                <-- 25 -->
              /            \
            15             50
          /    \         /    \
        10     22      35     70
      /   \   /  \    /  \   /  \
    4    12  18  24  31  44 66  90
*/
console.log("-------check contains-------")
console.log(emptyTree.contains(5));
console.log(oneNodeTree.contains(10));
console.log(twoLevelTree.contains(5));
console.log(threeLevelTree.contains(50));
console.log("-------check containsRecursive-------")
console.log(emptyTree.containsRecursive(5));
console.log(oneNodeTree.containsRecursive(10));
console.log(twoLevelTree.containsRecursive(5));
// console.log(threeLevelTree.containsRecursive(50));
console.log("-------check range-------")
console.log(emptyTree.range(5));
console.log(oneNodeTree.range(10));
console.log(twoLevelTree.range(5));
console.log(threeLevelTree.range(25));

console.log("---------check insert---------")
