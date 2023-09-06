/*
Remove Nth Node From End of List (Difficulty: Medium)

Given the head of a linked list, remove the nth node from the end of the list and return its head.

Constraints:

The number of nodes in the list is sz.
1 <= sz <= 30
0 <= Node.val <= 100
1 <= n <= sz
*/

const head1 = [1, 2, 3, 4, 5], n1 = 2;
const expected1 = [1, 2, 3, 5];

const head2 = [1], n2 = 1;
const expected2 = [];

const head3 = [1, 2], n3 = 1;
const expected3 = [1];

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */

/**
 * Solution #1: One Pass Two Pointers
 * Time complexity: O(L)
 * - One traversal of the lsit of L nodes.
 * Space complexity: O(1)
 */

var removeNthFromEnd = function (head, n) {
    // corner cases
    if (head === null || head.next === null) {
        return null;
    }

    let slow = head;
    let fast = head;
    // Advance the fast pointer by n nodes from the slow pointer.
    for (let i = 0; i < n; i++) {
        fast = fast.next;
    };

    // If n is the same as the length of list, just remove the first node of the list.
    if (fast === null) {
        return head.next;
    };

    // Move the fast pointer to the end, maintaining the gap.
    while (fast !== null && fast.next !== null) {
        slow = slow.next;
        fast = fast.next;
    }
    // Delete the appropriate node.
    slow.next = slow.next.next;
    return head;
};