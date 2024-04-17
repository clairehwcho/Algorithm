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
                    result.append("null, ");
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

public class SubtreeOfAnotherTree {
    /**
     * Given the roots of two binary trees root and subRoot,
     * return true if there is a subtree of root
     * with the same structure and node values of subRoot
     * and false otherwise.
     * A subtree of a binary tree is a tree that consists of a node in tree
     * and all of this node's descendants.
     * The tree tree could also be considered as a subtree of itself.
     * The number of nodes in the root tree is in the range [1, 2000].
     * The number of nodes in the subRoot tree is in the range [1, 1000].
     */

    /**
     * Approach 1: Recursion
     * Time Complexity: O(n*m), where n is the number of nodes in root
     * and m is the number of nodes in subroot.
     * - It traverses all nodes in the main tree in the worst case.
     * - At each node of root, isIdentical method is called,
     * comparing O(m) nodes at ost.
     * Space Complexity: O(n)
     * - The maximum recursion stack depth can vary from O(logn) to O(n),
     * depending on the height of the tree.
     *
     * @param root    The root node of a binary tree.
     * @param subRoot The root node of a subtree.
     * @return True if the binary tree contains the subtree, false otherwise.
     */

    // Helper method to check if two nodes are identical.
    private static boolean isIdentical(TreeNode node1, TreeNode node2) {
        // Base case 1: If either node is null, both nodes must be null.
        if (node1 == null || node2 == null) {
            return node1 == node2;
        }

        // Base case 2: If the two nodes have different values, return false.
        if (node1.val != node2.val) {
            return false;
        }

        // Recursive case: Recursively compare their left and right children.
        return isIdentical(node1.left, node2.left) && isIdentical(node1.right, node2.right);
    }

    public static boolean solutionOne(TreeNode root, TreeNode subRoot) {
        // If root is null, there is no main tree to search within.
        if (root == null) {
            return false;
        }

        // If the trees rooted at root and subroot are identical, return true.
        if (isIdentical(root, subRoot)) {
            return true;
        }

        // Recursively check if subroot is a subtree of either the left or right
        // subtrees of root.
        return solutionOne(root.left, subRoot) || solutionOne(root.right, subRoot);
    }

    /**
     * Approach 2: String Matching
     * Time Complexity: O(n + m), where n is the number of nodes in root
     * and m is the number of nodes in subroot.
     * - Serializing the root and subRoot trees takes O(n) and O(m) times
     * respectively.
     * - Building the LPS array takes O(m) time.
     * - Searching for the pattern in the text takes O(n) time.
     * - Therefore, the overall time complexity is O(n + m).
     * Space Complexity: O(n + m)
     * - It requires O(n + m) extra space to store the serialized trees
     * and O(m) extra space to store the LPS array.
     * - Therefore, the overall space complexity is O(n + m).
     *
     * @param root    The root node of a binary tree.
     * @param subRoot The root node of a subtree.
     * @return True if the binary tree contains the subtree, false otherwise.
     */

    // Helper method to serialize a tree into a string representation.
    private static void serialize(TreeNode node, StringBuilder sb) {
        // Base case: If node is null append a hash to denote a null node and return.
        if (node == null) {
            sb.append("#");
            return;
        }

        // Else, append a caret followed by the node's value to distinguish each node.
        sb.append("^").append(node.val);

        // Recursively serialize the left and right children of the node.
        serialize(node.left, sb);
        serialize(node.right, sb);
    }

    // Helper method to check if a pattern is found within a text
    // using the Knuth-Morris-Pratt (KMP) algorithm.
    private static boolean kmp(String pattern, String text) {
        // Get lengths of pattern and text.
        int patternLength = pattern.length();
        int textLength = text.length();

        // Early exit check: If the pattern is longer than the text, return false.
        if (patternLength > textLength) {
            return false;
        }

        // Create the Longest Prefix Suffix (LPS) array of the same length as teh
        // pattern.
        int[] lps = new int[patternLength];
        // Set a variable to track the length of previous LPS.
        int prevLength = 0;
        // Set an index to traverse the pattern. lps[0] is always 0.
        int i = 1;

        // Construct the LPS array based on the pattern.
        while (i < patternLength) {
            // If the current character matches the character at index prevLength,
            // indicating an overlap between the beginning of the pattern
            // and the end up to index i
            if (pattern.charAt(i) == pattern.charAt(prevLength)) {
                // Increment prevLength.
                prevLength++;
                // Update the current element in the LPS array with the current prevLength.
                // meaning the length of the lps ending at index i is stored in lps[i].
                lps[i] = prevLength;
                // Move to the next character in the pattern.
                i++;
            }
            // If the characters do not match
            else {
                // And if prevLength is zero
                if (prevLength == 0) {
                    // Set the LPS array at index i to zero
                    // as there is no other prefix suffix to consider.
                    lps[i] = 0;
                    // Move to the next character in the pattern.
                    i++;
                }
                // Or if prevLength is not zero, there maybe another
                // prefix suffix that could still be matched.
                else {
                    // Adjust the length of lps to the previous lps for the next comparison.
                    prevLength = lps[prevLength - 1];
                }
            }
        }

        // Initialize indices to traverse the text and the pattern.
        int textIdx = 0;
        int patternIdx = 0;

        // Loop through the text while searching for the pattern.
        while (textIdx < textLength) {
            // If the current characters in the text and the pattern match
            if (text.charAt(textIdx) == pattern.charAt(patternIdx)) {
                // Move to the next characters in both strings.
                patternIdx++;
                textIdx++;

                // If the end of pattern is reached, the entire pattern is found in the text.
                if (patternIdx == patternLength) {
                    return true;
                }
            }
            // If the current characters in the text and the pattern do not match
            else {
                // And if the pattern index is 0,
                // indicating there is no earlier matching prefix in the pattern
                if (patternIdx == 0) {
                    // Increment the text index only to check the next character in the text.
                    textIdx++;
                }
                // Or if the pattern index is not zero, indicating that there might be
                // an earlier matching prefix in the pattern that can be used
                else {
                    // Shift the pattern index to the left, using the LPS array.
                    patternIdx = lps[patternIdx - 1];
                }
            }
        }
        // Pattern is not found in the text.
        return false;
    }

    public static boolean solutionTwo(TreeNode root, TreeNode subRoot) {
        // Serialize given nodes.
        StringBuilder rootSb = new StringBuilder();
        serialize(root, rootSb);
        String rootStr = rootSb.toString();

        StringBuilder subRootSb = new StringBuilder();
        serialize(subRoot, subRootSb);
        String subRootStr = subRootSb.toString();

        // Search for the pattern `subRootStr` within the text `rootStr`.
        return kmp(subRootStr, rootStr);
    }

    public static void main(String[] args) {
        // Test case 1
        int[] rootVals1 = new int[] { 3, 4, 5, 1, 2 };
        int[] subRootVals1 = new int[] { 4, 1, 2 };
        BinaryTree tree1 = new BinaryTree();
        BinaryTree subTree1 = new BinaryTree();
        tree1.buildTreeLevelOrder(rootVals1);
        subTree1.buildTreeLevelOrder(subRootVals1);
        boolean expectedOutput1 = true;

        // Test case 2
        int[] rootVals2 = new int[] { 3, 4, 5, 1, 2, -1, -1, -1, -1, 0 };
        int[] subRootVals2 = new int[] { 4, 1, 2 };
        BinaryTree tree2 = new BinaryTree();
        BinaryTree subTree2 = new BinaryTree();
        tree2.buildTreeLevelOrder(rootVals2);
        subTree2.buildTreeLevelOrder(subRootVals2);
        boolean expectedOutput2 = false;

        // Test solutionOne
        System.out.println("*****Testing solutionOne*****");
        System.out.println("Test Case 1:");
        System.out.print("Input Main Tree: ");
        tree1.printLevelOrder(3);
        System.out.print("Input Sub Tree: ");
        subTree1.printLevelOrder(2);
        System.out.println("Expected Output: " + expectedOutput1);
        System.out.println("Actual Output: " + SubtreeOfAnotherTree.solutionOne(tree1.root, subTree1.root));
        System.out.println();

        System.out.println("Test Case 2:");
        System.out.print("Input Main Tree: ");
        tree2.printLevelOrder(4);
        System.out.print("Input Sub Tree: ");
        subTree2.printLevelOrder(2);
        System.out.println("Expected Output: " + expectedOutput2);
        System.out.println("Actual Output: " + SubtreeOfAnotherTree.solutionOne(tree2.root, subTree2.root));
        System.out.println();

        // Test solutionTwo
        System.out.println("*****Testing solutionTwo*****");
        System.out.println("Test Case 1:");
        System.out.print("Input Main Tree: ");
        tree1.printLevelOrder(3);
        System.out.print("Input Sub Tree: ");
        subTree1.printLevelOrder(2);
        System.out.println("Expected Output: " + expectedOutput1);
        System.out.println("Actual Output: " + SubtreeOfAnotherTree.solutionTwo(tree1.root, subTree1.root));
        System.out.println();

        System.out.println("Test Case 2:");
        System.out.print("Input Main Tree: ");
        tree2.printLevelOrder(4);
        System.out.print("Input Sub Tree: ");
        subTree2.printLevelOrder(2);
        System.out.println("Expected Output: " + expectedOutput2);
        System.out.println("Actual Output: " + SubtreeOfAnotherTree.solutionTwo(tree2.root, subTree2.root));
        System.out.println();
    }
}
