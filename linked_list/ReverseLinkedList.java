package linked_list;

// Define ListNode
class ListNode {
    // A single node in a linked list has two fields.
    int val; // The value of the node.
    ListNode next; // The reference to the next node.

    // Constructors
    ListNode() {
    };

    ListNode(int val) {
        this.val = val;
    };

    ListNode(int val, ListNode next) {
        this.val = val;
        this.next = next;
    };
}

// Define SinglyLinkedList
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
            // If the list is not empty
        } else {
            // Create a current node and set it to the head.
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
            // Create a new node with each given value in the array.
            ListNode newNode = new ListNode(val);

            // If the list is empty
            if (head == null) {
                // Set the head to the newly created node.
                head = newNode;
                // If the list is not empty
            } else {
                // Create a current node and set it to the head.
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
    }

    // Method to print the values of all nodes in the list.
    public void display() {
        // If the list is empty
        if (head == null) {
            // Print an empty list.
            System.out.print("null");
            // If the list is not empty
        } else {
            // Create a current node and set it to the head.
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
        // Print a newline at the end.
        System.out.println();
    }
}

public class ReverseLinkedList {
    /**
     * Given the head of a singly linked list,
     * reverse the list,
     * and return the reversed list.
     */

    /**
     * Approach 1: Iterative
     * Time Complexity: O(n), where n is the number of nodes in the linked list.
     * - It iterates through each node of the list exactly once.
     * Space Complexity: O(1)
     * - It only uses a constant amount of additional space for the prev, curr, and
     * nextTemp pointers, regardless of the size of the input linked list.
     *
     * @param head The input head of a singly linked list.
     * @return The reversed singly linked list.
     */

    public static ListNode solutionOne(ListNode head) {
        // Set two pointers to track previous and current nodes.
        ListNode prev = null;
        ListNode curr = head;

        // Iterate through each node until it reaches the last node.
        while (curr != null) {
            // Store the next node.
            ListNode nextTemp = curr.next;
            // Reverse the direction by making the current pointer point to the previous
            // node.
            curr.next = prev;
            // Move the previous pointer to the current node.
            prev = curr;
            // Move the current pointer to the stored next node.
            curr = nextTemp;
        }
        // Return the new head of the reversed list.
        return prev;
    }

    /**
     * Approach 2: Recursive
     * Time Complexity: O(n), where n is the number of nodes in the linked list.
     * - It needs to traverse the entire list once to reverse it.
     * - In each recursive call, it processes one node, and there are n nodes in
     * total.
     * Space Complexity: O(n)
     * - Each recursive call requires additional memory space on the stack to store
     * local variables (such as head) defined within the function.
     * - The maximum depth of recursion is determined by the length of the linked
     * list. The recursion could go up to n levels deep before reaching the base
     * case.
     * - At each level of recursion, the space required for storing local variables
     * and parameters is constant, independent of the input size.
     * - However, because the recursive calls are nested, the total space required
     * is proportional to the recursion depth.
     * - Therefore, the space complexity is linear with respect to the size of the
     * input linked list.
     *
     * @param head The input head of a singly linked list.
     * @return The reversed singly linked list.
     */

    public static ListNode solutionTwo(ListNode head) {
        // Base case: if the list is empty or has only one node, return the head.
        if (head == null || head.next == null) {
            return head;
        }

        // Recursively move all the way to the end of the original list.
        ListNode reversedList = solutionTwo(head.next);
        // Reverse the pointers: make the next node point to the current node.
        head.next.next = head;
        // Head becomes the last node. Avoid circular loop.
        head.next = null;
        // Return the head of the reversed list (previously the last node).
        return reversedList;
    }

    public static void main(String[] args) {
        // Test case 1
        SinglyLinkedList list1 = new SinglyLinkedList();
        list1.insertAtBackMany(new int[] { 1, 2, 3, 4, 5 });
        SinglyLinkedList expectedOutput1 = new SinglyLinkedList();
        expectedOutput1.insertAtBackMany(new int[] { 5, 4, 3, 2, 1 });

        // Test case 2
        SinglyLinkedList list2 = new SinglyLinkedList();
        list2.insertAtBackMany(new int[] { 1, 2 });
        SinglyLinkedList expectedOutput2 = new SinglyLinkedList();
        expectedOutput2.insertAtBackMany(new int[] { 2, 1 });

        // Test case 3: Edge case with an empty list
        SinglyLinkedList list3 = new SinglyLinkedList();
        SinglyLinkedList expectedOutput3 = new SinglyLinkedList();

        // Test solutionOne
        System.out.println("*****Testing solutionOne*****");
        System.out.println("Test Case 1:");
        System.out.print("Input List: ");
        list1.display();
        System.out.print("Expected Output: ");
        expectedOutput1.display();
        // Reverse the list and update the head reference of the original list.
        list1.head = ReverseLinkedList.solutionOne(list1.head);
        System.out.print("Actual Output: ");
        list1.display();
        // Reverse the list again back to the original test case.
        list1.head = ReverseLinkedList.solutionOne(list1.head);

        System.out.println("\nTest Case 2:");
        System.out.print("Input List: ");
        list2.display();
        System.out.print("Expected Output: ");
        expectedOutput2.display();
        // Reverse the list and update the head reference of the original list.
        list2.head = ReverseLinkedList.solutionOne(list2.head);
        System.out.print("Actual Output: ");
        list2.display();
        // Reverse the list again back to the original test case.
        list2.head = ReverseLinkedList.solutionOne(list2.head);

        System.out.println("\nTest Case 3:");
        System.out.print("Input List: ");
        list3.display();
        System.out.print("Expected Output: ");
        expectedOutput3.display();
        // Reverse the list and update the head reference of the original list.
        list3.head = ReverseLinkedList.solutionOne(list3.head);
        System.out.print("Actual Output: ");
        list3.display();
        // Reverse the list again back to the original test case.
        list3.head = ReverseLinkedList.solutionOne(list3.head);

        // Test solutionTwo
        System.out.println("\n*****Testing solutionTwo*****");
        System.out.println("Test Case 1:");
        System.out.print("Input List: ");
        list1.display();
        System.out.print("Expected Output: ");
        expectedOutput1.display();
        // Reverse the list and update the head reference of the original list.
        list1.head = ReverseLinkedList.solutionTwo(list1.head);
        System.out.print("Actual Output: ");
        list1.display();
        // Reverse the list again back to the original test case.
        list1.head = ReverseLinkedList.solutionTwo(list1.head);

        System.out.println("\nTest Case 2:");
        System.out.print("Input List: ");
        list2.display();
        System.out.print("Expected Output: ");
        expectedOutput2.display();
        // Reverse the list and update the head reference of the original list.
        list2.head = ReverseLinkedList.solutionTwo(list2.head);
        System.out.print("Actual Output: ");
        list2.display();
        // Reverse the list again back to the original test case.
        list2.head = ReverseLinkedList.solutionTwo(list2.head);

        System.out.println("\nTest Case 3:");
        System.out.print("Input List: ");
        list3.display();
        System.out.print("Expected Output: ");
        expectedOutput3.display();
        // Reverse the list and update the head reference of the original list.
        list3.head = ReverseLinkedList.solutionTwo(list3.head);
        System.out.print("Actual Output: ");
        list3.display();
        // Reverse the list again back to the original test case.
        list3.head = ReverseLinkedList.solutionTwo(list3.head);
    }
}
