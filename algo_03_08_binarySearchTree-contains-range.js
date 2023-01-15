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

    isEmpty () {
        return this.root === null;
    }

    min (current = this.root) {
        if (current === null) {
            return null;
        }

        while (current.left !== null) {
            current = current.left;
        }
        return current.data;
    }

    minRecursive (current = this.root) {
        if (current === null) {
            return null;
        }
        if (!current.left) {
            return current.data;
        }
        return this.minRecursive(current.left);
    }

    max (current = this.root) {
        if (current === null) {
            return null;
        }

        while (current.right !== null) {
            current = current.right;
        }
        return current.data;
    }

    maxRecursive (current = this.root) {
        if (current === null) {
            return null;
        }

        if (current.right === null) {
            return current.data;
        }
        return this.maxRecursive(current.right);
    }

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

    /**
     * Determines if this tree contains the given searchVal.
     * - Time: O(?).
     * - Space: O(?).
     * @param {number} searchVal The number to search for in the node's data.
     * @returns {boolean} Indicates if the searchVal was found.
     */
    contains (searchVal) {
        let current = this.root;

        while (current !== null) {
            if (current.data === searchVal) {
                return true;
            }
            else if (current.data < searchVal) {
                current = current.right;
            }
            else if (current.data > searchVal) {
                current = current.left;
            }
        }
        return false;
    }


    /**
     * Determines if this tree contains the given searchVal.
     * - Time: O(?).
     * - Space: O(?).
     * @param {number} searchVal The number to search for in the node's data.
     * @returns {boolean} Indicates if the searchVal was found.
     */
    containsRecursive (searchVal, current = this.root) {
        if (current === null) {
            return false;
        }
        if (current.data === searchVal) {
            return true;
        }
        else if (current.data < searchVal) {
            return this.containsRecursive(searchVal, current.right);
        }
        else if (current.data > searchVal) {
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
        if (startNode === null) {
            return null;
        }

        let min = startNode.data;
        let max = startNode.data;

        while (startNode.left !== null) {
            startNode = startNode.left;
        }
        min = startNode.data;
        startNode = this.root;
        while (startNode.right !== null) {
            startNode = startNode.right;
        }
        max = startNode.data;
        let range = max - min;
        return range;
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
console.log(emptyTree.contains(15));
// false
console.log(twoLevelTree.contains(13));
// false
console.log(threeLevelTree.contains(13));
// true
console.log(twoLevelTree.containsRecursive(13));
// false
console.log(threeLevelTree.containsRecursive(13));
// true
console.log(emptyTree.range());
// null
console.log(oneNodeTree.range());
// 0
console.log(threeLevelTree.range());
// 13