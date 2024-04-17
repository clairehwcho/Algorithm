package tree;

import java.util.*;

// Define TreeNode
class TreeNode {
    // A single tree node has three fields.
    int val; // The value of the node.
    TreeNode left; // The reference to the left child node.
    TreeNode right; /// The referecne to the right child node.

    // Default constructor to initialize an empty node.
    TreeNode() {
    }

    // Constructor to initialize a node with a specific value.
    TreeNode(int val) {
        this.val = val;
    }

    // Constructor to initialize a node
    // with a specific value and references to the left and right child nodes.
    TreeNode(int val, TreeNode left, TreeNode right) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

// Define BinaryTree.
class BinaryTree {
    // A binary tree has one field.
    TreeNode root; // The reference to the topmost node of the tree.

    // Default constructor to initialize an empty binary tree.
    BinaryTree() {
        root = null;
    }

    // Method to build a binary tree from an array of values
    // using level-order traversal (Breadth-First Search)
    public void buildTreeLevelOrder(int[] vals) {
        // Early exit check: If the input array is empty, there's nothing to build.
        if (vals == null || vals.length == 0) {
            return;
        }

        // Create a queue for level-order traversal.
        Queue<TreeNode> queue = new LinkedList<>();
        // Set the first value of the array to the root node's value.
        root = new TreeNode(vals[0]);
        // Add the root node to the queue.
        queue.offer(root);

        // Initialize an index to traverse the array from the second value.
        int i = 1;

        // Loop through the array to build the binary tree using level-order traversal.
        while (!queue.isEmpty() && i < vals.length) {
            // Get the front node from the queue.
            TreeNode curr = queue.poll();

            // If there are more values in the array
            // and the current value is not null (-1)
            if (i < vals.length && vals[i] != -1) {
                // Set the current value to the left child.
                curr.left = new TreeNode(vals[i]);
                // Add the left child to the queue.
                queue.offer(curr.left);
            }
            // Move to the next value in the array.
            i++;

            // If there are more values in the array
            // and the current value is not null (-1)
            if (i < vals.length && vals[i] != -1) {
                // Set the current value to the right child.
                curr.right = new TreeNode(vals[i]);
                // Add the right child to the queue.
                queue.offer(curr.right);
            }
            // Move to the next value in the array.
            i++;
        }
    }

    // Method to print the binary tree up to a specific level
    // using level-order traversal (Breadth-First Search).
    public void printLevelOrder(int level) {
        // If the root is null, print an empty array and exit.
        if (root == null) {
            System.out.println("[]");
            return;
        }

        // Create a queue for level-order traversal.
        Queue<TreeNode> queue = new LinkedList<>();
        // Add the root node to the queue.
        queue.offer(root);

        // Create a StringBuilder to construct the result string.
        StringBuilder result = new StringBuilder();
        result.append("[");

        // Set a variable to track the current level of the tree traversal.
        int currentLevel = 0;

        // Continue traversal while there are nodes in the queue
        // and the current level does not exceed the specified level.
        while (!queue.isEmpty() && currentLevel < level) {
            // Get the number of nodes at the current level.
            int levelSize = queue.size();

            // Iterate through all nodes at the current level.
            for (int i = 0; i < levelSize; i++) {
                // Remove the front node from the queue.
                TreeNode curr = queue.poll();

                // Append "null" if the node is null
                if (curr == null) {
                    result.append("null");
                } else {
                    // Else, append the node's value.
                    result.append(curr.val).append(", ");
                    // Add the left and right children to the queue.
                    queue.offer(curr.left);
                    queue.offer(curr.right);
                }
            }
            // Increment the current level counter.
            currentLevel++;
        }

        // Remove trailing comma and space.
        if (result.length() > 1) {
            result.setLength(result.length() - 2);
        }

        result.append("]");
        System.out.println(result.toString());
    }
}

public class SameTree {
    /**
     * Given the roots of two binary trees p and q,
     * write a function to check if they are the same or not.
     * Two binary trees are considered the same
     * if they are structurally identical, and the nodes have the same value.
     */

    /**
     * Approach 1: Recursion
     * Time Complexity: O(n), where n is the number of nodes in the trees.
     * - Each node in both trees exactly once for comparison.
     * Space Complexity: O(n)
     * - The maximum stack depth can vary from O(logn) to O(n),
     * depending on the height of the tree.
     *
     * @param p The root node of the first binary tree.
     * @param q The root node of the second binary tree.
     * @return True if the two trees are the same, false otherwise.
     */

    public static boolean solutionOne(TreeNode p, TreeNode q) {
        // Base case 1: If both nodes are null, return true.
        if (p == null && q == null) {
            return true;
        }
        // Base case 2: If either nodes is null
        // or the nodes have different values, return false.
        if (p == null || q == null || p.val != q.val) {
            return false;
        }
        // Recursive case: Check left and right subtrees.
        return solutionOne(p.left, q.left) && solutionOne(p.right, q.right);
    }

    /**
     * Approach 2: Iteration
     * Time Complexity: O(n), where n is the number of nodes in the trees.
     * - Each node in both trees exactly once for comparison.
     * Space Complexity: O(n)
     * - The maximum size of queue holding nodes at each level during
     * level-order traversal could amount to all nodes in the tree at most.
     *
     * @param p The root node of the first binary tree.
     * @param q The root node of the second binary tree.
     * @return True if the two trees are the same, false otherwise.
     */

    public static boolean solutionTwo(TreeNode p, TreeNode q) {
        // Early exit check: If both nodes are null, return true.
        if (p == null && q == null) {
            return true;
        }
        // Early exit check: If only one of the two nodes is null, return false.
        if (p == null || q == null) {
            return false;
        }

        // Create two queues to hold nodes of the two trees for level-order traversal.
        Queue<TreeNode> queueP = new LinkedList<>();
        Queue<TreeNode> queueQ = new LinkedList<>();

        // Enqueue the root nodes of two trees.
        queueP.offer(p);
        queueQ.offer(q);

        // Continue checking while both queues have nodes to compare.
        while (!queueP.isEmpty() && !queueQ.isEmpty()) {
            // Get the number of nodes at the current level in both queues.
            int levelSizeP = queueP.size();
            int levelSizeQ = queueQ.size();

            // If the number of nodes at the current level is different,
            // the trees are not identical, so return false.
            if (levelSizeP != levelSizeQ) {
                return false;
            }

            // Iterate through all nodes at the current level.
            for (int i = 0; i < levelSizeP; i++) {
                // Dequeue the front nodes from each queue.
                TreeNode currP = queueP.poll();
                TreeNode currQ = queueQ.poll();

                // If one of the nodes is null or the values of the nodes are different,
                // the trees are not identical, so return false.
                if ((currP == null && currQ != null)
                        || (currP != null && currQ == null)
                        || (currP.val != currQ.val)) {
                    return false;
                }

                // Add the left child of currP to the queue if it exists.
                if (currP.left != null) {
                    queueP.offer(currP.left);
                }
                // If currP.left is null but currQ.left is not null,
                // the trees are not identical, so return false.
                else if (currQ.left != null) {
                    return false;
                }

                // Add the right child of currP to the queue if it exists.
                if (currP.right != null) {
                    queueP.offer(currP.right);
                }
                // If currP.right is null but currQ.right is not null,
                // the trees are not identical, so return false.
                else if (currQ.right != null) {
                    return false;
                }

                // Add the left and right children of currQ to the queue.
                if (currQ.left != null) {
                    queueQ.offer(currQ.left);
                }

                if (currQ.right != null) {
                    queueQ.offer(currQ.right);
                }
            }
        }
        // Return true if and only if both queues are empty,
        // indicating that all levels of both trees have been compared and matched.
        return queueP.isEmpty() && queueQ.isEmpty();
    }

    public static void main(String[] args) {
        // Test case 1
        int[] valsP1 = new int[] { 1, 2, 3 };
        int[] valsQ1 = new int[] { 1, 2, 3 };
        BinaryTree treeP1 = new BinaryTree();
        BinaryTree treeQ1 = new BinaryTree();
        treeP1.buildTreeLevelOrder(valsP1);
        treeQ1.buildTreeLevelOrder(valsQ1);
        boolean expectedOutput1 = true;

        // Test case 2
        int[] valsP2 = new int[] { 1, 2 };
        int[] valsQ2 = new int[] { 1, -1, 2 };
        BinaryTree treeP2 = new BinaryTree();
        BinaryTree treeQ2 = new BinaryTree();
        treeP2.buildTreeLevelOrder(valsP2);
        treeQ2.buildTreeLevelOrder(valsQ2);
        boolean expectedOutput2 = false;

        // Test case 3
        int[] valsP3 = new int[] { 1, 2, 1 };
        int[] valsQ3 = new int[] { 1, 1, 2 };
        BinaryTree treeP3 = new BinaryTree();
        BinaryTree treeQ3 = new BinaryTree();
        treeP3.buildTreeLevelOrder(valsP3);
        treeQ3.buildTreeLevelOrder(valsQ3);
        boolean expectedOutput3 = false;

        // Test solutionOne
        System.out.println("*****Testing solutionOne*****");
        System.out.println("Test Case 1:");
        System.out.print("Input p: ");
        treeP1.printLevelOrder(2);
        System.out.print("Input q: ");
        treeQ1.printLevelOrder(2);
        System.out.println("Expected Output: " + expectedOutput1);
        System.out.println("Actual Output: " + SameTree.solutionOne(treeP1.root, treeQ1.root));
        System.out.println();

        System.out.println("Test Case 2:");
        System.out.print("Input p: ");
        treeP2.printLevelOrder(2);
        System.out.print("Input q: ");
        treeQ2.printLevelOrder(2);
        System.out.println("Expected Output: " + expectedOutput2);
        System.out.println("Actual Output: " + SameTree.solutionOne(treeP2.root, treeQ2.root));
        System.out.println();

        System.out.println("Test Case 3:");
        System.out.print("Input p: ");
        treeP3.printLevelOrder(2);
        System.out.print("Input q: ");
        treeQ3.printLevelOrder(2);
        System.out.println("Expected Output: " + expectedOutput3);
        System.out.println("Actual Output: " + SameTree.solutionOne(treeP3.root, treeQ3.root));
        System.out.println();

        // Test solutionTwo
        System.out.println("*****Testing solutionTwo*****");
        System.out.println("Test Case 1:");
        System.out.print("Input p: ");
        treeP1.printLevelOrder(2);
        System.out.print("Input q: ");
        treeQ1.printLevelOrder(2);
        System.out.println("Expected Output: " + expectedOutput1);
        System.out.println("Actual Output: " + SameTree.solutionTwo(treeP1.root, treeQ1.root));
        System.out.println();

        System.out.println("Test Case 2:");
        System.out.print("Input p: ");
        treeP2.printLevelOrder(2);
        System.out.print("Input q: ");
        treeQ2.printLevelOrder(2);
        System.out.println("Expected Output: " + expectedOutput2);
        System.out.println("Actual Output: " + SameTree.solutionTwo(treeP2.root, treeQ2.root));
        System.out.println();

        System.out.println("Test Case 3:");
        System.out.print("Input p: ");
        treeP3.printLevelOrder(2);
        System.out.print("Input q: ");
        treeQ3.printLevelOrder(2);
        System.out.println("Expected Output: " + expectedOutput3);
        System.out.println("Actual Output: " + SameTree.solutionTwo(treeP3.root, treeQ3.root));
        System.out.println();
    }
}
