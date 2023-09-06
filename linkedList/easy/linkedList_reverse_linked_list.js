/*
Reverse Linked List (Difficulty: Easy)

Given the head of a singly linked list, reverse the list, and return the reversed list.

Constraints:

The number of nodes in the list is the range [0, 5000].
-5000 <= Node.val <= 5000
*/

const head1 = [1, 2, 3, 4, 5];
const expected1 = [5, 4, 3, 2, 1];

const head2 = [1, 2];
const expected2 = [2, 1];

const head3 = [];
const expected3 = [];

class ListNode {
    constructor (data) {
        this.data = data;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor () {
        this.head = null;
    }

    insertAtBackMany (vals) {
        for (const val of vals) {
            let newNode = new ListNode(val);

            if (this.head === null) {
                this.head = newNode;
            }
            else {
                let curr = this.head;

                while (curr.next !== null) {
                    curr = curr.next;
                }
                curr.next = newNode;
            }
        }
        return this;
    }

    /**
     * @param {ListNode} head
     * @return {ListNode}
     */

    /**
     * Solution #1: Iterative
     * Time complexity : O(n)
     * - Linear to the list's length. We traverse linked list only once.
     * Space complexity : O(1)
     * - Constant. We only have two pointers regardless of input size.
     */
    reverseList () {
        let prev = null;
        let curr = this.head;

        // Traverse through the given linked list.
        while (curr !== null) {
            // Save the next Node.
            let temp = curr.next;
            // Reverse the order by making the current Node point to previous Node instead of the next Node.
            curr.next = prev;
            // Move the previous Node pointer to current Node.
            prev = curr;
            // Move the current Node pointer to next Node.
            curr = temp;
        }
        return prev;
    }

    /**
     * Solution #2: Recursive
     * Time complexity : O(n)
     * - Assume that n is the list's length.
     * Space complexity : O(n)
     * - The extra space comes from implicit stack space due to recursion.
     * - The recursion could go up to n levels deep.
     */
    reverseListRecursive (curr = this.head) {
        // Base case
        if (curr === null || curr.next === null) {
            return curr;
        };

        // Move all the way to the end of the original list.
        let tail = this.reverseListRecursive(curr.next);
        // Reverse pointers.
        curr.next.next = curr;
        // Head becomes the last node, which should point to null. Avoid circular loop.
        curr.next = null;
        return tail;
    }
}

let singlyLinkedList1 = new SinglyLinkedList().insertAtBackMany(head1);
let singlyLinkedList2 = new SinglyLinkedList().insertAtBackMany(head2);
let singlyLinkedList3 = new SinglyLinkedList().insertAtBackMany(head3);
console.log(singlyLinkedList1.reverseList());
console.log(singlyLinkedList2.reverseList());
console.log(singlyLinkedList3.reverseList());

let singlyLinkedList4 = new SinglyLinkedList().insertAtBackMany(head1);
let singlyLinkedList5 = new SinglyLinkedList().insertAtBackMany(head2);
let singlyLinkedList6 = new SinglyLinkedList().insertAtBackMany(head3);
console.log(singlyLinkedList4.reverseListRecursive());
console.log(singlyLinkedList5.reverseListRecursive());
console.log(singlyLinkedList6.reverseListRecursive());