import java.util.*;

// Define ListNode.
class ListNode {
    // A single node in a linked list has two fields.
    int val; // The value of the node.
    ListNode next; // The reference to the next node.

    // Constructor to initialize a node
    // without a specific value or a reference to the next node.
    ListNode() {
    };

    // Constructor to initialize a node
    // with a specific value but no reference to the next node.
    ListNode(int val) {
        this.val = val;
    };

    // Constructor to initialize a node
    // with both a specific value and a reference to the next node.
    ListNode(int val, ListNode next) {
        this.val = val;
        this.next = next;
    };
};

// Define SinglyLinkedList.
class SinglyLinkedList {
    // A SinglyLinkedList has one field.
    ListNode head; // The reference to the first node in the list.

    // Constructor to initialize an empty list.
    SinglyLinkedList() {
        head = null;
    }

    // Method to insert a new node at the end of the list.
    public void insertAtBack(int val) {
        // Create a new node with the given value.
        ListNode newNode = new ListNode(val);

        // If the list is empty
        if (head == null) {
            // Set the head to the newly created node.
            head = newNode;
        }
        // If the list is not empty
        else {
            // Create a current node pointer and set it to the head.
            ListNode curr = head;
            // Iterate through each node until it reaches the last node.
            while (curr.next != null) {
                // Update the current node to the next node.
                curr = curr.next;
            }
            // After the loop, the current node refers to the last node in the list.
            // Set the next of the current node to point to the newly created node.
            curr.next = newNode;
        }
        System.out.println(val + " inserted");
    }

    // Method to insert multiple nodes at the end of the list.
    public void insertAtBackMany(int[] vals) {
        // Loop through the array of values.
        for (int val : vals) {
            // Call the function to insert each node.
            insertAtBack(val);
        }
    }

    // Method to get a node at a specific index in the list.
    public ListNode getNodeAt(int index) {
        // If the index is smaller than 0 or the list is empty
        if (index < 0 || head == null) {
            // Return null.
            return null;
        }

        // Set a current node pointer to the head.
        ListNode curr = head;
        // Set a current index.
        int currIdx = 0;
        // Iterate through each node until it reaches the last node.
        while (curr != null) {
            // When it reaches the target index
            if (currIdx == index) {
                // Return the current node.
                return curr;
            }
            // Increment the current index.
            currIdx++;
            // Move the current node to the next node.
            curr = curr.next;
        }
        // Otherwise, return null.
        return null;
    }

    // Method to get the size of a linked list.
    public int size() {
        // If the list is empty
        if (head == null) {
            // Return 0.
            return 0;
        }

        // Set a count variable.
        int count = 0;
        // Set the current node pointer to the head.
        ListNode curr = head;
        // Iterate through each node until it reaches the last node.
        while (curr != null) {
            // Increment the count;
            count++;
            // Move the current node pointer to the next node.
            curr = curr.next;
        }
        // Return the count.
        return count;
    }

    // Method to print the values of all nodes in the list.
    public void printList() {
        // If the list is empty
        if (head == null) {
            // Print an empty list.
            System.out.print("null");
        }
        // If the list is not empty
        else {
            // Create a current node pointer and set it to the head.
            ListNode curr = head;
            // Iterate through each node until it reaches the last node.
            while (curr != null) {
                // Print the value of the current node.
                System.out.print(curr.val);
                // If the next node exists
                if (curr.next != null) {
                    // Add comma between the nodes.
                    System.out.print(", ");
                }
                // Update the current node to the next node.
                curr = curr.next;
            }
        }
        // Print a new line at the end.
        System.out.println();
    }
}

public class LinkedListCycle {
    /**
     * Given head, the head of a linked list,
     * determine if the linked list has a cycle in it.
     * There is a cycle in a linked list
     * if there is some node in the list that can be reached again
     * by continuously following the `next` pointer.
     * Internally, `pos` is used to denote the index of the node
     * that tail's `next` pointer is connected to.
     * Note that `pos` is not passed as a parameter.
     * `pos` is -1 or a valid index in the linked-list.
     * Return true if there is a cycle in the linked list.
     * Otherwise, return false.
     */

    /**
     * Approach 1: HashSet
     * Time Complexity: O(n), where n is the number of nodes in the linked list.
     * - Each node is visited once.
     * - Check whether a node is present in the HashSet takes constant time.
     * - Therefore, the overall time complexity is O(n).
     * Space Complexity: O(n).
     * - It requires additional O(n) space at most to store the HashSet.
     *
     * @param head The input head of a singly-linked list.
     * @return True if there is a cycle in the list, false otherwise.
     */

    public static boolean solutionOne(ListNode head) {
        // Base case: If the list is empty or has only one node
        if (head == null || head.next == null) {
            // Return false because there is no cycle.
            return false;
        }

        // Initialize a HashSet to track visited nodes during traversal.
        Set<ListNode> set = new HashSet<>();
        // Set a current node pointer to the head of the linked list.
        ListNode curr = head;
        // Traverse the linked list until the end is reached.
        while (curr != null) {
            // If the set contains the current node, it indicates a cycle.
            if (set.contains(curr)) {
                // Return true to indicate the presence of a cycle.
                return true;
            }
            // Else, add the current node to the set to mark it as visited.
            set.add(curr);
            // Move to the next node in the linked list.
            curr = curr.next;
        }
        // If traversal completes without finding a cycle, return false.
        return false;
    }

    /**
     * Approach 2: Floyd's Cycle Detection (The Fast and Slow Pointers)
     * Time Complexity: O(n), where n is the number of nodes in the linked list.
     * - The slow pointer traverses the list once.
     * - The fast pointer can traverse the list at most twice, taking O(2n) time, before either detecting a cycle or reaching the end of the list.
     * - Therefore, O(2n) simplifies to O(n).
     * Space Complexity: O(1).
     * - It only needs a constant amount of extra space to store pointers.
     *
     * @param head The input head of a singly-linked list.
     * @return True if there is a cycle in the list, false otherwise.
     */

    public static boolean solutionTwo(ListNode head) {
        // Base case: If the list is empty or has only one node
        if (head == null || head.next == null) {
            // Return false because there is no cycle.
            return false;
        }

        // Set slow and fast node pointers starting at the head.
        ListNode slow = head;
        ListNode fast = head;

        // Traverse the linked list until the two pointers meet
        // or the fast pointer reaches the end.
        while (fast != null && fast.next != null) {
            // Move the slow pointer by one step.
            slow = slow.next;
            // Move the fast pointer by two steps.
            fast = fast.next.next;

            // If the two pointers meet, it indicates a cycle exists.
            if (slow == fast) {
                // So, return true.
                return true;
            }
        }
        // If fast pointer reaches the end, there is no cycle. So, return false.
        return false;
    }

    public static void main(String[] args) {
        // Test case 1
        SinglyLinkedList list1 = new SinglyLinkedList();
        list1.insertAtBackMany(new int[] { 3, 2, 0, -4 });
        int pos1 = 1;
        ListNode posNode1 = list1.getNodeAt(pos1);
        ListNode lastNode1 = list1.getNodeAt(list1.size() - 1);
        lastNode1.next = posNode1;
        boolean expectedOutput1 = true;

        // // Test case 2
        SinglyLinkedList list2 = new SinglyLinkedList();
        list2.insertAtBackMany(new int[] { 1, 2 });
        int pos2 = 0;
        ListNode posNode2 = list2.getNodeAt(pos2);
        ListNode lastNode2 = list2.getNodeAt(list2.size() - 1);
        lastNode2.next = posNode2;
        boolean expectedOutput2 = true;

        // // Test case 3
        SinglyLinkedList list3 = new SinglyLinkedList();
        list3.insertAtBackMany(new int[] { 1 });
        int pos3 = -1;
        boolean expectedOutput3 = false;

        // Test solutionOne
        System.out.println("*****Testing solutionOne*****");
        System.out.println("Test Case 1:");
        System.out.println("Input List: [ 3, 2, 0, -4 ]");
        System.out.println("Input pos: " + pos1);
        System.out.println("Expected Output: " + expectedOutput1);
        System.out.println("Actual Output: " + solutionOne(list1.head));

        System.out.println("Test Case 2:");
        System.out.println("Input List: [ 1, 2 ]");
        System.out.println("Input pos: " + pos2);
        System.out.println("Expected Output: " + expectedOutput2);
        System.out.println("Actual Output: " + solutionOne(list2.head));

        System.out.println("Test Case 3:");
        System.out.println("Input List: [ 1 ]");
        System.out.println("Input pos: " + pos3);
        System.out.println("Expected Output: " + expectedOutput3);
        System.out.println("Actual Output: " + solutionOne(list3.head));

        // Test solutionTwo
        System.out.println("*****Testing solutionTwo*****");
        System.out.println("Test Case 1:");
        System.out.println("Input List: [ 3, 2, 0, -4 ]");
        System.out.println("Input pos: " + pos1);
        System.out.println("Expected Output: " + expectedOutput1);
        System.out.println("Actual Output: " + solutionTwo(list1.head));

        System.out.println("Test Case 2:");
        System.out.println("Input List: [ 1, 2 ]");
        System.out.println("Input pos: " + pos2);
        System.out.println("Expected Output: " + expectedOutput2);
        System.out.println("Actual Output: " + solutionTwo(list2.head));

        System.out.println("Test Case 3:");
        System.out.println("Input List: [ 1 ]");
        System.out.println("Input pos: " + pos3);
        System.out.println("Expected Output: " + expectedOutput3);
        System.out.println("Actual Output: " + solutionTwo(list3.head));
    }
}
