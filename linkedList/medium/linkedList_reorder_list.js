/*
Reorder List (Difficulty: Medium)

You are given the head of a singly linked-list. The list can be represented as:

L0 → L1 → … → Ln - 1 → Ln
Reorder the list to be on the following form:

L0 → Ln → L1 → Ln - 1 → L2 → Ln - 2 → …
You may not modify the values in the list's nodes. Only nodes themselves may be changed.

Constraints:

The number of nodes in the list is in the range [1, 5 * 104].
1 <= Node.val <= 1000
*/

const head1 = [1, 2, 3, 4];
const expected1 = [1, 4, 2, 3];

const head = [1, 2, 3, 4, 5];
const expected2 = [1, 5, 2, 4, 3];

/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */

/**
 * Solution #1: Reverse the second part of the list and merge two sorted lists
 * Time complexity: O(L)
 * - To identify the middle node takes O(L) time.
 * - To reverse the second part of the list takes L/2 operations.
 * - To merge two lists takes L/2 operations.
 * Space complexity: O(1)
 * - We do not allocate any additional data structures.
 */

var reorderList = function (head) {
    // Corner case
    if (head === null || head.next === null) {
        return;
    }

    // Find the middle of the list.
    let slow = head;
    let fast = head;

    // The fast pointer increments twice as much as the other. Slow will be the middle node.
    while (fast !== null && fast.next !== null) {
        slow = slow.next;
        fast = fast.next.next;
    };

    // Reverse the second part of the list.
    let prev = null;
    let curr = slow;

    while (curr !== null) {
        let temp = curr.next;
        curr.next = prev;
        prev = curr;
        curr = temp;
    };

    // Merge two sorted linked lists.
    let first = head;
    let second = prev;

    while (second.next !== null) {
        let temp = first.next;
        first.next = second;
        first = temp;

        temp = second.next;
        second.next = first;
        second = temp;
    }
};