// Define ListNode
class ListNode {
    // A single node in a linked list has two fields.
    int val; // The value of the node.
    ListNode next; // The reference to the next node.

    // Contructor to initialize a node
    // without a specific value or a reference to the next node.
    ListNode() {
    }

    // Constructor to initialize a node
    // with a specific value but no reference to the next node.
    ListNode(int val) {
        this.val = val;
    }

    // Constructor to initialize a node
    // with both a specific value and a reference to the next node.
    ListNode(int val, ListNode next) {
        this.val = val;
        this.next = next;
    }
}

// Define SinglyLinkedList.
class SinglyLinkedList {
    // A SinglyLinkedList has one field.
    ListNode head; // The reference to the first node in the list.

    // Constructor to initialize an empty list.
    SinglyLinkedList() {
        head = null;
    }

    // Constructor to initialize a list with a specific head node.
    SinglyLinkedList(ListNode head) {
        this.head = head;
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
            // Traverse the list until the end is reached.
            while (curr.next != null) {
                // Move to the next node.
                curr = curr.next;
            }
            // After the loop, the current node refers to the last node.
            // Set the next of the current node to point to the newly created node.
            curr.next = newNode;
        }
        System.out.println(val + " inserted");
    }

    // Method to insert an array of nodes at the end of the list.
    public void insertAtBackMany(int[] vals) {
        // Loop through the array of values.
        for (int val : vals) {
            // Call the function to insert each node.
            insertAtBack(val);
        }
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

public class MergeTwoSortedLists {
    /**
     * You are given the heads of two sorted linked lists list1 and list2.
     * Merge the two lists into one sorted list.
     * The list should be made by splicing together the nodes of the first two
     * lists.
     * Return the head of the merged linked list.
     */

    /**
     * Approach 1: Recursion
     * Time Complexity: O(n + m), where n is the number of nodes in the first
     * list and m is the number of the nodes in the second list.
     * - The number of recursive calls is proportional tot he total number of nodes
     * in both lists.
     * Space Complexity: O(n + m)
     * - Each recursive call requires additional memory space on the stack to store
     * local variables (such as list1 and list2) defined within the function.
     * - The maximum depth of recursion is determined by the length of the linked
     * list. The recursion could go up to n levels deep before reaching the base
     * case.
     * - At each level of recursion, the space required for storing local variables
     * and parameters is constant, independent of the input size.
     * - However, because the recursive calls are nested, the total space required
     * is proportional to the recursion depth.
     * - Therefore, the space complexity is linear with respect to the total size of
     * the input linked lists.
     *
     * @param list1 The input head of the first linked list sorted in non-decreasing
     *              order.
     * @param list2 The input head of the second linked list sorted in
     *              non-decreasing order.
     * @return The head of the merged sorted linked list.
     */

    public static ListNode solutionOne(ListNode list1, ListNode list2) {
        // Base cases: If list1 or list2 is null, return the other node.
        if (list1 == null) {
            return list2;
        } else if (list2 == null) {
            return list1;
        }
        // Recursive step: Determine which has a smaller head
        // and recursively set the next value for that head to the next merge result.
        else if (list1.val < list2.val) {
            list1.next = solutionOne(list1.next, list2);
            return list1;
        } else {
            list2.next = solutionOne(list1, list2.next);
            return list2;
        }
    }

    /**
     * Approach 2: Iteration with Two Pointers
     * Time Complexity: O(max(n,m)), where n is the number of nodes in the first
     * list and m is the number of the nodes in the second list.
     * - You traverse both input lists simultaneously until you reach the end of
     * either list.
     * Space Complexity: O(1)
     * - You need a constant amount of extra space to store a dummy node and
     * pointers.
     *
     * @param list1 The input head of the first linked list sorted in non-decreasing
     *              order.
     * @param list2 The input head of the second linked list sorted in
     *              non-decreasing order.
     * @return The head of the merged sorted linked list.
     */

    public static ListNode solutionTwo(ListNode list1, ListNode list2) {
        // Base case: If list1 or list2 is null, return the other node.
        if (list1 == null) {
            return list2;
        } else if (list2 == null) {
            return list1;
        }

        // Create a dummy head as an unchanging reference to a previous node of the
        // return node.
        ListNode dummyHead = new ListNode(-1);
        // Initialize pointers.
        // Both currMerged and dummyHead are pointing to the exact same object in memory
        // instead of getting cloned as two separate variables (pass-by-value).
        ListNode currMerged = dummyHead;
        ListNode curr1 = list1;
        ListNode curr2 = list2;

        // Traverse both lists while there are still nodes in both lists to be merged.
        while (curr1 != null && curr2 != null) {
            // Compare values, link nodes, move the corresponding pointer to its next node.
            if (curr1.val <= curr2.val) {
                // In the first pass of the loop, this actually sets dummyHead.next to curr1.
                currMerged.next = curr1;
                curr1 = curr1.next;
            } else {
                // In the first pass of the loop, this actually sets dummyHead.next to curr2.
                currMerged.next = curr2;
                curr2 = curr2.next;
            }
            // Move the current node pointer to the next node.
            currMerged = currMerged.next;
        }

        // Attach the remaining nodes from list1 or list2.
        if (curr1 != null) {
            currMerged.next = curr1;
        } else {
            currMerged.next = curr2;
        }

        // Return the head of the merged list (excluding the null dummy head).
        return dummyHead.next;
    }

    public static void main(String[] args) {
        // Test case 1
        SinglyLinkedList case1List1 = new SinglyLinkedList();
        case1List1.insertAtBackMany(new int[] { 1, 2, 4 });
        SinglyLinkedList case1List2 = new SinglyLinkedList();
        case1List2.insertAtBackMany(new int[] { 1, 3, 4 });
        SinglyLinkedList expectedOutput1 = new SinglyLinkedList();
        expectedOutput1.insertAtBackMany(new int[] { 1, 1, 2, 3, 4, 4 });

        // Test case 2
        SinglyLinkedList case2List1 = new SinglyLinkedList();
        SinglyLinkedList case2List2 = new SinglyLinkedList();
        SinglyLinkedList expectedOutput2 = new SinglyLinkedList();

        // Test case 3
        SinglyLinkedList case3List1 = new SinglyLinkedList();
        SinglyLinkedList case3List2 = new SinglyLinkedList();
        case3List2.insertAtBack(0);
        SinglyLinkedList expectedOutput3 = new SinglyLinkedList();
        expectedOutput3.insertAtBack(0);

        // Test solutionOne
        System.out.println("*****Testing solutionOne*****");
        System.out.println("Test Case 1:");
        System.out.print("Input List1: ");
        case1List1.printList();
        System.out.print("Input List2: ");
        case1List2.printList();
        System.out.print("Expected Output: ");
        expectedOutput1.printList();
        ListNode solutionOneOutputHead1 = solutionOne(case1List1.head, case1List2.head);
        SinglyLinkedList solutionOneActualOutput1 = new SinglyLinkedList(solutionOneOutputHead1);
        System.out.print("Actual Output: ");
        solutionOneActualOutput1.printList();
        System.out.println();

        System.out.println("Test Case 2:");
        System.out.print("Input List1: ");
        case2List1.printList();
        System.out.print("Input List2: ");
        case2List2.printList();
        System.out.print("Expected Output: ");
        expectedOutput2.printList();
        ListNode solutionOneOutputHead2 = solutionOne(case2List1.head, case2List2.head);
        SinglyLinkedList solutionOneActualOutput2 = new SinglyLinkedList(solutionOneOutputHead2);
        System.out.print("Actual Output: ");
        solutionOneActualOutput2.printList();
        System.out.println();

        System.out.println("Test Case 3:");
        System.out.print("Input List1: ");
        case3List1.printList();
        System.out.print("Input List2: ");
        case3List2.printList();
        System.out.print("Expected Output: ");
        expectedOutput3.printList();
        ListNode solutionOneOutputHead3 = solutionOne(case3List1.head, case3List2.head);
        SinglyLinkedList solutionOneActualOutput3 = new SinglyLinkedList(solutionOneOutputHead3);
        System.out.print("Actual Output: ");
        solutionOneActualOutput3.printList();
        System.out.println();

        // Test solutionTwo
        System.out.println("*****Testing solutionTwo*****");
        System.out.println("Test Case 1:");
        System.out.print("Input List1: ");
        case1List1.printList();
        System.out.print("Input List2: ");
        case1List2.printList();
        System.out.print("Expected Output: ");
        expectedOutput1.printList();
        ListNode solutionTwoOutputHead1 = solutionTwo(case1List1.head, case1List2.head);
        SinglyLinkedList solutionTwoActualOutput1 = new SinglyLinkedList(solutionTwoOutputHead1);
        System.out.print("Actual Output: ");
        solutionTwoActualOutput1.printList();
        System.out.println();

        System.out.println("Test Case 2:");
        System.out.print("Input List1: ");
        case2List1.printList();
        System.out.print("Input List2: ");
        case2List2.printList();
        System.out.print("Expected Output: ");
        expectedOutput2.printList();
        ListNode solutionTwoOutputHead2 = solutionTwo(case2List1.head, case2List2.head);
        SinglyLinkedList solutionTwoActualOutput2 = new SinglyLinkedList(solutionTwoOutputHead2);
        System.out.print("Actual Output: ");
        solutionTwoActualOutput2.printList();
        System.out.println();

        System.out.println("Test Case 3:");
        System.out.print("Input List1: ");
        case3List1.printList();
        System.out.print("Input List2: ");
        case3List2.printList();
        System.out.print("Expected Output: ");
        expectedOutput3.printList();
        ListNode solutionTwoOutputHead3 = solutionTwo(case3List1.head, case3List2.head);
        SinglyLinkedList solutionTwoActualOutput3 = new SinglyLinkedList(solutionTwoOutputHead3);
        System.out.print("Actual Output: ");
        solutionTwoActualOutput3.printList();
    }
}
