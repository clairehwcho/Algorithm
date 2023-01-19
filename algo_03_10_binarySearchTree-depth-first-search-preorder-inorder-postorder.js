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

    // ****************************************************************************

    /**
     * Depth First Search Preorder:
     * Visit root -> traverse the left subtree -> traverse the right subtree
     * Converts this BST into an array following Depth First Search preorder.
     * Example on the fullTree var:
     * [25, 15, 10, 4, 12, 22, 18, 24, 50, 35, 31, 44, 70, 66, 90]
     * @param {Node} node The current node during the traversal of this tree.
     * @param {Array<number>} vals The data that has been visited so far.
     * @returns {Array<number>} The vals in DFS Preorder once all nodes visited.
     */
    toArrPreorder (node = this.root, vals = []) {
        if (node) {
            vals.push(node.data);
            this.toArrPreorder(node.left, vals);
            this.toArrPreorder(node.right, vals);
        }
        return vals;
    }

    /**
     * Depth First Search Inorder:
     * Traverse the left subtree -> visit root -> traverse the right subtree
     * Converts this BST into an array following Depth First Search inorder.
     * Example on the fullTree var:
     * [4, 10, 12, 15, 18, 22, 24, 25, 31, 35, 44, 50, 66, 70, 90]
     * @param {Node} node The current node during the traversal of this tree.
     * @param {Array<number>} vals The data that has been visited so far.
     * @returns {Array<number>} The vals in DFS Preorder once all nodes visited.
     */
    toArrInorder (node = this.root, vals = []) {
        if (node) {
            this.toArrPreorder(node.left, vals);
            vals.push(node.data);
            this.toArrPreorder(node.right, vals);
        }
        return vals;
    }

    /**
     * Depth First Search Postorder:
     * Traverse the left subtree -> traverse the right subtree -> visit root
     * Converts this BST into an array following Depth First Search postorder.
     * Example on the fullTree var:
     * [4, 12, 10, 18, 24, 22, 15, 31, 44, 35, 66, 90, 70, 50, 25]
     * @param {Node} node The current node during the traversal of this tree.
     * @param {Array<number>} vals The data that has been visited so far.
     * @returns {Array<number>} The vals in DFS Preorder once all nodes visited.
     */
    toArrPostorder (node = this.root, vals = []) {
        if (node) {
            this.toArrPreorder(node.left, vals)
            this.toArrPreorder(node.right, vals)
            vals.push(node.data);
        }
        return vals;
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
// .insertRecursive(25)
// .insertRecursive(15)
// .insertRecursive(10)
// .insertRecursive(22)
// .insertRecursive(4)
// .insertRecursive(12)
// .insertRecursive(18)
// .insertRecursive(24)
// .insertRecursive(50)
// .insertRecursive(35)
// .insertRecursive(70)
// .insertRecursive(31)
// .insertRecursive(44)
// .insertRecursive(66)
// .insertRecursive(90);

// console.log(emptyTree.toArrPreorder());
// // []
// console.log(oneNodeTree.toArrPreorder());
// // [ 10 ]
// console.log(twoLevelTree.toArrPreorder());
// // [ 10, 5, 15 ]
// console.log(threeLevelTree.toArrPreorder());
// // [ 10, 5, 2, 6, 15, 13 ]
// console.log(fullTree.toArrPreorder());
// // [ 25, 15, 10,  4, 12, 22, 18, 24, 50, 35, 31, 44, 70, 66, 90 ]


// console.log(emptyTree.toArrInorder());
// // []
// console.log(oneNodeTree.toArrInorder());
// // [ 10 ]
// console.log(twoLevelTree.toArrInorder());
// // [ 5, 10, 15 ]
// console.log(threeLevelTree.toArrInorder());
// // [ 5, 2, 6, 10, 15, 13 ]
// console.log(fullTree.toArrInorder());
// // [ 4, 10, 12, 15, 18, 22, 24, 25, 31, 35, 44, 50, 66, 70, 90 ]

console.log(emptyTree.toArrPostorder());
// []
console.log(oneNodeTree.toArrPostorder());
// [10]
console.log(twoLevelTree.toArrPostorder());
// [ 5, 15, 10 ]
console.log(threeLevelTree.toArrPostorder());
// [ 5, 2, 6, 15, 13, 10 ]
console.log(fullTree.toArrPostorder());
// [ 15, 10,  4, 12, 22, 18, 24, 50, 35, 31, 44, 70, 66, 90, 25 ]
