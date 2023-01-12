/*
class Listnode is a node for a singly-linked list
that can be linked to other Node instances to form a list of linked nodes.

'new' keyword is used to construct a new Node instance of an empty linked list.

When we instantiate a class, we create an object.
A new node instance is returned automatically without having to be explicitly written (implicit return).

A listNode consists of two data members:
- The data we are keeping track of at this node (Object), which can be anything just like an array can contain strings, numbers, objects, etc.
- The next ListNode in the chain
*/

class ListNode {
    constructor (data) {
        this.data = data;
        this.next = null;
    }
}

/*
class SinglyLinkedList keeps track of the start (head) of the list and stores all the functionality (methods) that each list should have.

The head member variable is the beginning of the list.

*/

class SinglyLinkedList {
    constructor () {
        this.head = null;
    }
}