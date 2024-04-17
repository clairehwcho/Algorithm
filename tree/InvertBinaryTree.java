package tree;

import java.util.*;

// Define TreeNode
class TreeNode {
    // A single tree node has one three fields.
    int val; // The value of the node.
    TreeNode left; // The reference to the left child node.
    TreeNode right; // The reference to the right child node.

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

// Define BinaryTree
class BinaryTree {
    // A binary tree has one field.
    TreeNode root; // The reference to the topmost node of the tree.

    // Default constructor to initialize an empty binary tree.
    BinaryTree() {
        root = null;
    }

    // Method to build a binary tree from an array of values
    // using level-order traversal (Breadth-First Search).
    public void buildTreeLevelOrder(int[] vals) {
        // Early exit check: If the input array is empty, there's nothing to build.
        if (vals == null || vals.length == 0) {
            return;
        }

        // Create a queue for level-order traversal and add the root node.
        Queue<TreeNode> queue = new LinkedList<>();
        root = new TreeNode(vals[0]);
        queue.add(root);

        // Initialize an index to traverse the array from the second element.
        int i = 1;

        // Build the binary tree using level-order traversal.
        while (!queue.isEmpty() && i < vals.length) {
            // Get the front node from the queue.
            TreeNode curr = queue.remove();

            // Add left child if there are more values.
            if (i < vals.length) {
                // If value is not null (-1)
                if (vals[i] != -1) {
                    curr.left = new TreeNode(vals[i]);
                    queue.add(curr.left);
                }
                // Move to the next value in the array.
                i++;
            }
            // If there are more values in the array.
            if (i < vals.length) {
                // And if the current value is not null (-1)
                if (vals[i] != -1) {
                    // Set the current value to the right child.
                    curr.right = new TreeNode(vals[i]);
                    // Add the right child to the queue.
                    queue.add(curr.right);
                }
                // Move to the next value in the array.
                i++;
            }
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
        // Start traversal from the root node.
        queue.add(root);

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

                // Append "null" if the node is null.
                if (curr == null) {
                    result.append("null, ");
                } else {
                    // Else, append the node's value.
                    result.append(curr.val).append(", ");
                    // Add the left and right children to the queue for the next level.
                    queue.add(curr.left);
                    queue.add(curr.right);
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

public class InvertBinaryTree {
    /**
     * Given the root of a binary tree,
     * invert the tree, and return its root.
     */

    /**
     * Approach 1: Recursion
     * Time Complexity: O(n), where n is the number of nodes in the tree.
     * - Each node is visited only once.
     * - Swapping is a constant-time operation.
     * Space Complexity: O(n)
     * - The maximum stack depth can vary from O(logn) to O(n),
     * depending on the height of the ree.
     *
     * @param root The input root node of the tree to be inverted.
     * @return The root of the inverted tree.
     */
    public static TreeNode solutionOne(TreeNode root) {
        // Base case: If the current node is null, return null.
        if (root == null) {
            return null;
        }
        // Recursive case:
        else {
            // Swap the left and right nodes.
            TreeNode temp = root.left;
            root.left = root.right;
            root.right = temp;

            // Recursively apply the function to the left and right nodes.
            solutionOne(root.left);
            solutionOne(root.right);

            // Return the root of the inverted tree.
            return root;
        }
    }

    /**
     * Approach 2: Iteration
     * Time Complexity: O(n), where n is the number of nodes in the tree.
     * - Each node is visited only once.
     * - Swapping is a constant-time operation.
     * Space Complexity: O(n)
     * - The maximum stack depth can vary from O(logn) to O(n),
     * depending on the height of the ree.
     *
     * @param root The input root node of the tree to be inverted.
     * @return The root of the inverted tree.
     */
    public static TreeNode solutionTwo(TreeNode root) {
        // Early exit check: If the tree is empty, return null.
        if (root == null) {
            return root;
        }

        // Create a queue for level-order traversal.
        Queue<TreeNode> queue = new LinkedList<>();
        // Start traversal from the root node.
        queue.add(root);

        // Perform level-order traversal to invert the tree.
        while (!queue.isEmpty()) {
            // Get the number of nodes at the current level.
            int levelSize = queue.size();

            // Iterate through all nodes at the current level.
            for (int i = 0; i < levelSize; i++) {
                // Remove the front node from the queue.
                TreeNode curr = queue.poll();
                // Swap the left and right nodes.
                TreeNode temp = curr.left;
                curr.left = curr.right;
                curr.right = temp;

                // Add the left child to the queue if it exists.
                if (curr.left != null) {
                    queue.add(curr.left);
                }
                // Add the right child to the queue if it exists.
                if (curr.right != null) {
                    queue.add(curr.right);
                }
            }
        }
        // Return the root of the inverted tree.
        return root;
    }

    public static void main(String[] args) {
        // Test case 1: A three-level tree
        int[] inputVals1 = new int[] { 4, 2, 7, 1, 3, 6, 9 };
        BinaryTree tree1 = new BinaryTree();
        tree1.buildTreeLevelOrder(inputVals1);
        int[] outputVals1 = new int[] { 4, 7, 2, 9, 6, 3, 1 };
        BinaryTree expectedOutput1 = new BinaryTree();
        expectedOutput1.buildTreeLevelOrder(outputVals1);

        // Test case 2: A two-level tree
        int[] inputVals2 = new int[] { 2, 1, 3 };
        BinaryTree tree2 = new BinaryTree();
        tree2.buildTreeLevelOrder(inputVals2);
        int[] outputVals2 = new int[] { 2, 3, 1 };
        BinaryTree expectedOutput2 = new BinaryTree();
        expectedOutput2.buildTreeLevelOrder(outputVals2);

        // Test case 3: An empty tree
        BinaryTree tree3 = new BinaryTree();
        BinaryTree expectedOutput3 = new BinaryTree();

        // Test solutionOne
        System.out.println("*****Testing solutionOne*****");
        System.out.println("Test Case 1:");
        System.out.print("Input Tree: ");
        tree1.printLevelOrder(3);
        System.out.print("Expected Output: ");
        expectedOutput1.printLevelOrder(3);
        System.out.print("Actual Output: ");
        BinaryTree solutionOneInputTree1 = new BinaryTree();
        solutionOneInputTree1.buildTreeLevelOrder(inputVals1);
        TreeNode solutionOneInputRoot1 = solutionOneInputTree1.root;
        TreeNode solutionOneOutputRoot1 = InvertBinaryTree.solutionOne(solutionOneInputRoot1);
        BinaryTree solutionOneOutputTree1 = new BinaryTree();
        solutionOneOutputTree1.root = solutionOneOutputRoot1;
        solutionOneOutputTree1.printLevelOrder(3);
        System.out.println();

        System.out.println("Test Case 2:");
        System.out.print("Input Tree: ");
        tree2.printLevelOrder(2);
        System.out.print("Expected Output: ");
        expectedOutput2.printLevelOrder(2);
        System.out.print("Actual Output: ");
        BinaryTree solutionOneInputTree2 = new BinaryTree();
        solutionOneInputTree2.buildTreeLevelOrder(inputVals2);
        TreeNode solutionOneInputRoot2 = solutionOneInputTree2.root;
        TreeNode solutionOneOutputRoot2 = InvertBinaryTree.solutionOne(solutionOneInputRoot2);
        BinaryTree solutionOneOutputTree2 = new BinaryTree();
        solutionOneOutputTree2.root = solutionOneOutputRoot2;
        solutionOneOutputTree2.printLevelOrder(2);
        System.out.println();

        System.out.println("Test Case 3:");
        System.out.print("Input Tree: ");
        tree3.printLevelOrder(0);
        System.out.print("Expected Output: ");
        expectedOutput3.printLevelOrder(0);
        System.out.print("Actual Output: ");
        BinaryTree solutionOneInputTree3 = new BinaryTree();
        TreeNode solutionOneInputRoot3 = solutionOneInputTree3.root;
        TreeNode solutionOneOutputRoot3 = InvertBinaryTree.solutionOne(solutionOneInputRoot3);
        BinaryTree solutionOneOutputTree3 = new BinaryTree();
        solutionOneOutputTree3.root = solutionOneOutputRoot3;
        solutionOneOutputTree3.printLevelOrder(0);
        System.out.println();

        // Test solutionTwo
        System.out.println("*****Testing solutionTwo*****");
        System.out.println("Test Case 1:");
        System.out.print("Input Tree: ");
        tree1.printLevelOrder(3);
        System.out.print("Expected Output: ");
        expectedOutput1.printLevelOrder(3);
        System.out.print("Actual Output: ");
        BinaryTree solutionTwoInputTree1 = new BinaryTree();
        solutionTwoInputTree1.buildTreeLevelOrder(inputVals1);
        TreeNode solutionTwoInputRoot1 = solutionTwoInputTree1.root;
        TreeNode solutionTwoOutputRoot1 = InvertBinaryTree.solutionTwo(solutionTwoInputRoot1);
        BinaryTree solutionTwoOutputTree1 = new BinaryTree();
        solutionTwoOutputTree1.root = solutionTwoOutputRoot1;
        solutionTwoOutputTree1.printLevelOrder(3);
        System.out.println();

        System.out.println("Test Case 2:");
        System.out.print("Input Tree: ");
        tree2.printLevelOrder(2);
        System.out.print("Expected Output: ");
        expectedOutput2.printLevelOrder(2);
        System.out.print("Actual Output: ");
        BinaryTree solutionTwoInputTree2 = new BinaryTree();
        solutionTwoInputTree2.buildTreeLevelOrder(inputVals2);
        TreeNode solutionTwoInputRoot2 = solutionTwoInputTree2.root;
        TreeNode solutionTwoOutputRoot2 = InvertBinaryTree.solutionTwo(solutionTwoInputRoot2);
        BinaryTree solutionTwoOutputTree2 = new BinaryTree();
        solutionTwoOutputTree2.root = solutionTwoOutputRoot2;
        solutionTwoOutputTree2.printLevelOrder(2);
        System.out.println();

        System.out.println("Test Case 3:");
        System.out.print("Input Tree: ");
        tree3.printLevelOrder(0);
        System.out.print("Expected Output: ");
        expectedOutput3.printLevelOrder(0);
        System.out.print("Actual Output: ");
        BinaryTree solutionTwoInputTree3 = new BinaryTree();
        TreeNode solutionTwoInputRoot3 = solutionTwoInputTree3.root;
        TreeNode solutionTwoOutputRoot3 = InvertBinaryTree.solutionTwo(solutionTwoInputRoot3);
        BinaryTree solutionTwoOutputTree3 = new BinaryTree();
        solutionTwoOutputTree3.root = solutionTwoOutputRoot3;
        solutionTwoOutputTree3.printLevelOrder(0);
        System.out.println();
    }
}
