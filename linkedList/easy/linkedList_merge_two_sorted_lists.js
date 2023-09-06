/*
Merge Two Sorted Lists (Difficulty: Easy)

You are given the heads of two sorted linked lists list1 and list2.

Merge the two lists into one sorted list. The list should be made by splicing together the nodes of the first two lists.

Return the head of the merged linked list.

Constraints:

The number of nodes in both lists is in the range [0, 50].
-100 <= Node.val <= 100
Both list1 and list2 are sorted in non-decreasing order.
*/

const list1A = [1, 2, 4], list1B = [1, 3, 4];
const expected1 = [1, 1, 2, 3, 4, 4];

const list2A = [], list2B = [];
const expected2 = []

const list3A = [], list3B = [0];
const expected3 = [0];

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */


/**
 * Approach 1: Recursion
 * Time complexity : O(n+m)
 * - Because each recursive call increments the pointer to l1 or l2 by one (approaching the dangling null at the end of each list), there will be exactly one call to mergeTwoLists per element in each list. Therefore, the time complexity is linear in the combined size of the lists.
 * Space complexity : O(n+m)
 * - The first call to mergeTwoLists does not return until the ends of both l1 and l2 have been reached, so n+m stack frames consume O(n+m) space.
 */
var mergeTwoLists = function (list1, list2) {
    // Corner cases
    if (list1 === null) {
        return list2;
    }
    else if (list2 === null) {
        return list1;
    }
    // Determine which has a smaller head and recursively set the next value for that head to the next merge result.
    else if (list1.val < list2.val) {
        list1.next = mergeTwoLists(list1.next, list2)
        return list1;
    }
    else {
        list2.next = mergeTwoLists(list1, list2.next);
        return list2;
    }
};