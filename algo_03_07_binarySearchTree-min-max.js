class BSTNode {
    constructor (data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor () {
        this.root = null;
    }

    /**
     * Determines if this tree is empty.
     * - Time: O(?).
     * - Space: O(?).
     * @returns {boolean} Indicates if this tree is empty.
     */
    isEmpty () {
        return this.root === null;
    }

    /**
     * Retrieves the smallest integer data from this tree.
     * - Time: O(?).
     * - Space: O(?).
     * @param {Node} current The node that is currently accessed from the tree
     *    as the tree is being traversed.
     * @returns {number} The smallest integer from this tree.
     */
    min (current = this.root) {
        if (current === null) {
            return null;
        }

        while (current.left !== null) {
            current = current.left;
        }
        return current.data;
    }

    /**
     * Retrieves the smallest integer data from this tree.
     * - Time: O(?).
     * - Space: O(?).
     * @param {Node} current The node that is currently accessed from the tree
     *    as the tree is being traversed.
     * @returns {number} The smallest integer from this tree.
     */
    minRecursive (current = this.root) {
        if (current === null) {
            return null;
        }
        if (!current.left) {
            return current.data;
        }
        return this.minRecursive(current.left);
    }

    /**
     * Retrieves the largest integer data from this tree.
     * - Time: O(?).
     * - Space: O(?).
     * @param {Node} current The node that is currently accessed from the tree
     *    as the tree is being traversed.
     * @returns {number} The largest integer from this tree.
     */
    max (current = this.root) {
        if (current === null) {
            return null;
        }

        while (current.right !== null) {
            current = current.right;
        }
        return current.data;
    }

    /**
     * Retrieves the largest integer data from this tree.
     * - Time: O(?).
     * - Space: O(?).
     * @param {Node} current The node that is currently accessed from the tree
     *    as the tree is being traversed.
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

console.log(emptyTree);
// BinarySearchTree { root: null }
console.log(oneNodeTree);
// BinarySearchTree { root: BSTNode { data: 10, left: null, right: null }}
console.log(twoLevelTree);
/*
BinarySearchTree {
  root: BSTNode {
    data: 10,
    left: BSTNode { data: 5, left: null, right: null },
    right: BSTNode { data: 15, left: null, right: null }
  }
}
*/
console.log(threeLevelTree.isEmpty());
// false
console.log(threeLevelTree.min());
// 2
console.log(threeLevelTree.minRecursive());
// 2
console.log(threeLevelTree.max());
// 15
console.log(threeLevelTree.maxRecursive());
// 15