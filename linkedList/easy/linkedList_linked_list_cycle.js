/*
Linked List Cycle (Difficulty: Easy)

Given head, the head of a linked list, determine if the linked list has a cycle in it.

There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer. Internally, pos is used to denote the index of the node that tail's next pointer is connected to. Note that pos is not passed as a parameter.

Return true if there is a cycle in the linked list. Otherwise, return false.

Constraints:

The number of the nodes in the list is in the range [0, 104].
-105 <= Node.val <= 105
pos is -1 or a valid index in the linked-list.
*/

const head1 = [3, 2, 0, -4];
const pos1 = 1;
const expected1 = true;
// There is a cycle in the linked list, where the tail connects to the 1st node (0-indexed).

const head2 = [1, 2];
const pos2 = 0;
const expected2 = true;
// There is a cycle in the linked list, where the tail connects to the 0th node.

const head3 = [1];
const pos3 = -1;
const expected3 = false;
// There is no cycle in the linked list.

class ListNode {
    constructor (data) {
        this.data = data;
        this.next = null;
    }
};

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
     * @return {boolean}
     */

    /**
     * Solution #1: Hash Table
     * Time complexity: O(n)
     * - Each node is visited once.
     * Space complexity: O(n).
     * - The space depends on the number of elements added to the hash table, which contains at most n elements.
     */
    hasCycleHashTable () {
        let curr = this.head;
        let hashTable = new Set();

        while (curr !== null) {
            if (hashTable.has(curr)) {
                return true;
            }
            hashTable.add(curr);
            curr = curr.next;
        }
        return false;
    };

    /**
     * Solution #2: Two Pointers
     * Time complexity: O(n)
     * - If list has no cycle: the fast pointer reaches the end first and the run time depends on the list's length.
     * - If list has a cycle: The distance between the fast and flow pointers is at most cyclic length K. Therefore, the worst case time complexity is O(N+K), which is O(n)
     * Space complexity: O(1).
     * - We only use two nodes (slow and fast).
     */

    hasCycleTwoPointers (head) {
        // Corner case
        if (head === null) {
            return false;
        }

        let slow = head;
        let fast = head;

        while (fast !== null && fast.next !== null) {
            // The slow pointer moves one step at a time.
            slow = slow.next;
            // The fast pointer moves two steps at a time.
            fast = fast.next.next;
            // If the two pointers meet, there is a cycle.
            if (slow === fast) {
                return true;
            }
        }
        return false;
    }
}


let singlyLinkedList1 = new SinglyLinkedList().insertAtBackMany(head1);
let singlyLinkedList2 = new SinglyLinkedList().insertAtBackMany(head2);
let singlyLinkedList3 = new SinglyLinkedList().insertAtBackMany(head3);
console.log(singlyLinkedList1.hasCycleHashTable());
console.log(singlyLinkedList2.hasCycleHashTable());
console.log(singlyLinkedList3.hasCycleHashTable());