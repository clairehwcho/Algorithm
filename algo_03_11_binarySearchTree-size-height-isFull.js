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

    contains (searchVal) {
        let current = this.root;

        while (current) {
            if (current.data === searchVal) {
                return true;
            }

            if (current.data > searchVal) {
                current = current.left;
            }
            else if (current.data < searchVal) {
                current = current.right;
            }
        }
        return false;
    }

    containsRecursive (searchVal, current = this.root) {
        if (current === null) {
            return false;
        }

        if (current.data === searchVal) {
            return true;
        }

        if (current.data > searchVal) {
            return this.containsRecursive(searchVal, current.left);
        }

        if (current.data < searchVal) {
            return this.containsRecursive(searchVal, current.right);
        }
    }

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

    insert (newVal) {
        let newNode = new BSTNode(newVal);

        if (this.root === null) {
            this.root = newNode;
            return this;
        }

        let current = this.root;

        while (current) {
            if (current.data >= newVal) {
                if (current.left === null) {
                    current.left = newNode;
                    return this;
                }
                current = current.left;
            }
            else {
                if (current.right === null) {
                    current.right = newNode;
                    return this;
                }
                current = current.right;
            }
        }
    }

    insertRecursive (newVal, current = this.root) {
        let newNode = new BSTNode(newVal);
        if (this.root === null) {
            this.root = newNode;
            return this;
        }
        if (current.data >= newVal) {
            if (current.left === null) {
                current.left = newNode;
                return this;
            }
            return this.insertRecursive(newVal, current.left);
        }
        else {
            if (current.right === null) {
                current.right = newNode;
                return this;
            }
            return this.insertRecursive(newVal, current.right);
        }
    }

    toArrPreorder (node = this.root, vals = []) {
        if (node) {
            vals.push(node.data);
            this.toArrPreorder(node.left, vals);
            this.toArrPreorder(node.right, vals);
        }
        return vals;
    }

    toArrInorder (node = this.root, vals = []) {
        if (node) {
            this.toArrInorder(node.left, vals);
            vals.push(node.data);
            this.toArrInorder(node.right, vals);
        }
        return vals;
    }

    toArrPostorder (node = this.root, vals = []) {
        if (node) {
            this.toArrPostorder(node.left, vals)
            this.toArrPostorder(node.right, vals)
            vals.push(node.data);
        }
        return vals;
    }
    // ****************************************************************************

    /**
     * Recursively counts the total number of nodes in this tree.
     * - Time: O(?).
     * - Space: O(?).
     * @param {Node} node The current node during the traversal of this tree.
     * @returns {number} The total number of nodes.
     */

    size (node = this.root) {
        if (!node) {
            return 0;
        }
        return 1 + this.size(node.left) + this.size(node.right);
    }

    /**
     * Calculates the height of the tree which is based on how many nodes from
     * top to bottom (whichever side is taller).
     * - Time: O(?).
     * - Space: O(?).
     * @param {Node} node The current node during traversal of this tree.
     * @returns {number} The height of the tree.
     */
    height (node = this.root) {
        if (!node) {
            return 0;
        }

        let leftHeight = this.height(node.left);
        let rightHeight = this.height(node.right);

        if (leftHeight > rightHeight) {
            return leftHeight + 1;
        }
        else {
            return rightHeight + 1;
        }
    }

    /**
     * Determines if this tree is a full tree. A full tree is a tree where every
     * node has both a left and a right except for the leaf nodes (last nodes)
     * - Time: O(?).
     * - Space: O(?).
     * @param {Node} node The current node during traversal of this tree.
     * @returns {boolean} Indicates if this tree is full.
     */
    isFull (node = this.root) {
        if (!node) {
            return false;
        }

        if (!node.left && !node.right) {
            return true;
        }

        if (node.left && node.right) {
            return this.isFull(node.left) && this.isFull(node.right);
        }
        return false;
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
/***************** Uncomment after insert method is created. ****************/
const fullTree = new BinarySearchTree();
fullTree
    .insert(25)
    .insert(15)
    .insert(10)
    .insert(22)
    .insert(4)
    .insert(12)
    .insert(18)
    .insert(24)
    .insert(50)
    .insert(35)
    .insert(70)
    .insert(31)
    .insert(44)
    .insert(66)
    .insert(90);

console.log("----check size----");
console.log(emptyTree.size());
// 0
console.log(oneNodeTree.size());
// 1
console.log(twoLevelTree.size());
// 3
console.log(threeLevelTree.size());
// 6
console.log(fullTree.size());
// 15

console.log("----check height----");
console.log(emptyTree.height());
// 0
console.log(oneNodeTree.height());
// 1
console.log(twoLevelTree.height());
// 2
console.log(threeLevelTree.height());
// 3
console.log(fullTree.height());
// 4

console.log("----check isFull----");
console.log(emptyTree.isFull());
// false
console.log(oneNodeTree.isFull());
// true
console.log(twoLevelTree.isFull());
// true
console.log(threeLevelTree.isFull());
// false
console.log(fullTree.isFull());
// true