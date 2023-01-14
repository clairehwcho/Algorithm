/**
 * class BSTNode is a node for a Binary Search Tree (BST).
 * @param {number} data The integer to store in the node.
 * The properties are how this node is connected to other nodes to form the tree.
 * Similar to .next in a SinglyLinkedList
 * except a BST node can be connected to two other nodes.
 * To start, new nodes will not be connected to any other nodes,
 * these properties will be set after the new node is instantiated.
 */
class BSTNode {
    constructor (data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

/**
 * class BinarySearchTree is an ordered tree of nodes where the data of left nodes are smaller than or equal to their parent
 * and the data of nodes to the right are greater than their parent's data.
 * Just like the head of a linked list, this.root is the start of our tree which branches downward from here.
 */
class BinarySearchTree {
    constructor () {
        this.root = null;
    }
}

/* fullTree example
                    root
                <-- 25 -->
              /            \
            15             50
          /    \         /    \
        10     22      35     70
      /   \   /  \    /  \   /  \
    4    12  18  24  31  44 66  90
*/