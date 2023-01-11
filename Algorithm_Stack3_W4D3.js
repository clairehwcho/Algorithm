/**
 * Class to represent a stack using an array to store the stacked items.
 * Follows a LIFO (Last In First Out) order where new items are stacked on
 * top (back of array) and removed items are removed from the top / back.
 */
 class Stack {
    /**
     * The constructor is executed when instantiating a new Stack() to construct
     * a new instance.
     * @returns {Stack} This new Stack instance is returned without having to
     *    explicitly write 'return' (implicit return).
     */
    constructor (items = []) {
        this.items = items;
    }

    /**
     * Adds a new given item to the top / back of this stack.
     * - Time: O(1) constant.
     * - Space: O(1) constant.
     * @param {any} item The new item to be added to the top / back.
     * @returns {number} The new length of this stack.
     */
    push (item) {
        this.items.push(item);
        return this.size();
    }

    /**
     * Removes the top / last item from this stack.
     * - Time: O(1) constant.
     * - Space: O(1) constant.
     * @returns {any} The removed item or undefined if this stack was empty.
     */
    pop () {
        return this.items.pop();
    }

    /**
     * Retrieves the top / last item from this stack without removing it.
     * - Time: O(1) constant.
     * - Space: O(1) constant.
     * @returns {any} The top / last item of this stack.
     */
    peek () {
        return this.items[this.items.length - 1];
    }

    /**
     * Returns whether or not this stack is empty.
     * - Time: O(1) constant.
     * - Space: O(1) constant.
     * @returns {boolean}
     */
    isEmpty () {
        return this.items.length === 0;
    }

    /**
     * Returns the size of this stack.
     * - Time: O(1) constant.
     * - Space: O(1) constant.
     * @returns {number} The length.
     */
    size () {
        return this.items.length;
    }

    /**
     * Logs the items as a space separated string.
     * - Time: O(n) linear.
     * - Space: O(n) linear.
     * @returns {string} The same string that is logged.
     */
    print () {
        const str = this.items.join(" ");
        console.log(str);
        return str;
    }
}

/**
 * Class to represent a queue using an array to store the queued items.
 * Follows a FIFO (First In First Out) order where new items are added to the
 * back and items are removed from the front.
 */
class Queue {
    constructor () {
        this.items = [];
    }

    /**
     * Adds a new given item to the back of this queue.
     * - Time: O(1) constant.
     * - Space: O(1) constant.
     * @param {any} item The new item to add to the back.
     * @returns {number} The new size of this queue.
     */
    enqueue (item) {
        this.items.push(item);
        return this.size();
    }

    /**
     * Removes and returns the first item of this queue.
     * - Time: O(n) linear, due to having to shift all the remaining items to
     *    the left after removing first elem.
     * - Space: O(1) constant.
     * @returns {any} The first item or undefined if empty.
     */
    dequeue () {
        return this.items.shift();
    }

    /**
     * Retrieves the first item without removing it.
     * - Time: O(1) constant.
     * - Space: O(1) constant.
     * @returns {any} The first item or undefined if empty.
     */
    front () {
        return this.items[0];
    }

    /**
     * Returns whether or not this queue is empty.
     * - Time: O(1) constant.
     * - Space: O(1) constant.
     * @returns {boolean}
     */
    isEmpty () {
        return this.items.length === 0;
    }

    /**
     * Retrieves the size of this queue.
     * - Time: O(1) constant.
     * - Space: O(1) constant.
     * @returns {number} The length.
     */
    size () {
        return this.items.length;
    }

    /**
     * TODO: implement this method
     * Compares this queue to another given queue to see if they are equal.
     * Avoid indexing the queue items directly via bracket notation, use the
     * queue methods instead for practice.
     * Use no extra array or objects.
     * The queues should be returned to their original order when done.
     * - Time: O(?).
     * - Space: O(?).
     * @param {Queue} q2 The queue to be compared against this queue.
     * @returns {boolean} Whether all the items of the two queues are equal and
     *    in the same order.
     */
    compareQueues (q2) {
    }
    // compareQueues (q2) {
    //     if (this.size() != q2.size()) {
    //         return false;
    //     }
    //     let tempThis = new Queue();
    //     tempThis = this;
    //     let tempQ2 = new Queue();
    //     tempQ2 = q2;

    //     for (let i = 0; i < this.size(); i++) {
    //         if (tempThis.dequeue() != tempQ2.dequeue()) {
    //             return false;
    //         }
    //     }
    //     return true;
    // }

    /**
     * TODO: implement this method
     * Determines if the queue is a palindrome (same items forward and backwards).
     * Avoid indexing queue items directly via bracket notation, instead use the
     * queue methods for practice.
     * Use only 1 stack as additional storage, no other arrays or objects.
     * The queue should be returned to its original order when done.
     * - Time: O(?).
     * - Space: O(?).
     * @returns {boolean}
     */
    isPalindrome () {
        if (this.isEmpty()) return true;

        let tempThis = new Queue();
        tempThis = this;
        let stackThis = new Stack();
        for (let i = 0; i < this.size(); i++) {
            stackThis.push(tempThis.dequeue());
        }
        tempThis = this;
        console.log(stackThis);
        console.log(tempThis);
        // let count = 0;
        let sizeQ = this.size();
        for (let i = 0; i < sizeQ; i++) {
            if (tempThis.dequeue() != stackThis.pop()) {
                // count++;
                // console.log(count);
                return false;
            }
        }
        // console.log(count);
        return true;
    }
}


let firstQueue = new Queue();
let secondQueue = new Queue();
firstQueue.enqueue(1);
secondQueue.enqueue(1);
secondQueue.enqueue(3);
secondQueue.enqueue(3);
secondQueue.enqueue(2);

console.log(secondQueue.isPalindrome());
  //   console.log(firstQueue.compareQueues(secondQueue));


    compareQueues(q2) {
        var currSize = this.size()
        var isEqual = true
        if(q2.size() != this.size()) return false
        for(var i = 0; i < currSize; i++){
            if(this.front() != q2.front()){
                isEqual = false
            }
            this.enqueue(this.dequeue())
            q2.enqueue(q2.dequeue())
        }
        return isEqual
    }