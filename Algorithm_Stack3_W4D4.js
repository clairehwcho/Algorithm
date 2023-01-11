/**
 * Class to represent a queue using an array which follows a FIFO
 * (First In First Out) order. New items are added to the back and items are
 * removed from the front.
 */
 class Queue {
    /**
     *
     * @param {Array<any>} items The starting items, useful for if you already
     *    have an array of items in the right order and want to convert it to a
     *    queue instance to get access to the queue methods.
     */
    constructor (items = []) {
        this.items = items;
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
     * Logs the items of this queue.
     * - Time: O(n) linear.
     * - Space: O(n) linear.
     * @returns {string} The same string that is logged.
     */
    print () {
        const str = this.items.join(" ");
        console.log(str);
        return str;
    }

    /**
     * Compares this queue to another given queue to see if they are equal.
     * Avoid indexing the queue items directly via bracket notation, use the
     * queue methods instead for practice.
     * Use no extra array or objects.
     * The queues should be returned to their original order when done.
     * - Time: O(n^2) quadratic, n = queue length. Quadratic due to dequeue on an
     *     array queue being O(n).
     * - Space: O(1) constant.
     * @param {Queue} q2 The queue to be compared against this queue.
     * @returns {boolean} Whether all the items of the two queues are equal and
     *    in the same order.
     */
    compareQueues (q2) {
        if (this.size() !== q2.size()) {
            return false;
        }
        let count = 0;
        let isEqual = true;
        const len = this.size();

        while (count < len) {
            const dequeued1 = this.dequeue();
            const dequeued2 = q2.dequeue();

            if (dequeued1 !== dequeued2) {
                isEqual = false;
            }

            this.enqueue(dequeued1);
            q2.enqueue(dequeued2);
            count++;
        }
        return isEqual;
    }

    /**
     * Determines if the queue is a palindrome (same items forward and backwards).
     * Avoid indexing queue items directly via bracket notation, instead use the
     * queue methods for practice.
     * Use only 1 stack as additional storage, no other arrays or objects.
     * The queue should be returned to its original order when done.
     * - Time: O(n^2) quadratic, n = queue length. Quadratic due to dequeue on an
     *     array queue being O(n).
     * - Space: O(n) from the stack being used to store the items again.
     * @returns {boolean}
     */
    isPalindrome () {
        let isPalin = true;
        const stack = new Stack(),
            len = this.size();

        for (let i = 0; i < len; i++) {
            let dequeued = this.dequeue();
            stack.push(dequeued);
            // add it back so the queue items and order is restored at the end
            this.enqueue(dequeued);
        }

        for (let i = 0; i < len; i++) {
            let dequeued = this.dequeue();
            let popped = stack.pop();

            if (popped !== dequeued) {
                isPalin = false;
            }

            // add it back so the queue items and order is restored at the end
            this.enqueue(dequeued);
        }
        return isPalin;
    }

    /**
     * TODO: Implement this method
     * Determines whether the sum of the left half of the queue items is equal to
     * the sum of the right half. Avoid indexing the queue items directly via
     * bracket notation, use the queue methods instead for practice.
     * Use no extra array or objects.
     * The queue should be returned to it's original order when done.
     * - Time: O(n^2) quadratic, n = queue length. Quadratic due to dequeue on an
     *     array queue being O(n).
     * - Space: O(1) constant.
     * @returns {boolean} Whether the sum of the left and right halves is equal.
     */
    isSumOfHalvesEqual () {
        if (this.size() % 2 != 0 || this.isEmpty()) {
            return false;
        }
        let leftSum = 0;
        let rightSum = 0;
        let size = this.size();
        for (let i = 0; i < size / 2; i++) {
            let currentItem = this.dequeue();
            leftSum += currentItem;
            this.enqueue(currentItem);
        }

        for (let j = 0; j < size / 2; j++) {
            let currentItem = this.dequeue();
            rightSum += currentItem;
            this.enqueue(currentItem);
        }

        if (leftSum == rightSum) {
            return true;
        }

        return false;
    }
}


/**
 * Class to represent a Queue but is implemented using two stacks to store the
 * queued items without using any other objects or arrays to store the items.
 * Retains the FIFO (First in First Out) ordering when adding / removing items.
 */
class TwoStackQueue {
    constructor () {
        this.stack1 = new Stack();
        this.stack2 = new Stack();
    }

    /**
     * TODO: implement this method
     * Adds a new item to the back of the queue.
     * - Time: O(?).
     * - Space: O(?).
     * @param {any} item To be added.
     * @returns {number} The new number of items in the queue.
     */
    enqueue (item) {
        this.stack1.push(item);
        return this.stack1.size();
    }


    /**
     * TODO: implement this method
     * Removes the next item in the line / queue.
     * - Time: O(?).
     * - Space: O(?).
     * @returns {any} The removed item.
     */
    dequeue () {
        if (this.stack2.isEmpty()) {
            let poppedItems = [];
            let size = this.stack1.size();
            for (let i = 0; i < size; i++) {
                let poppedItem = this.stack1.pop();
                this.stack2.push(poppedItem);
                poppedItems.push(poppedItem);
            }
            return poppedItems;
        }
    }

}

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


// Test 1
const queue1 = new Queue();
queue1.enqueue(1)
queue1.enqueue(2)
queue1.enqueue(3)
queue1.enqueue(1)
queue1.enqueue(2)
queue1.enqueue(3)
console.log(queue1.isSumOfHalvesEqual());

// Test 2
const twoStackQueue1 = new TwoStackQueue();
twoStackQueue1.enqueue(1);
twoStackQueue1.enqueue(2);
twoStackQueue1.enqueue(3);
twoStackQueue1.enqueue(4);

console.log(twoStackQueue1.dequeue());


isSumOfHalvesEqual() {
    if(this.size()%2 != 0){
        return false;
    }
    const qSize = this.size();
    let countFirst = 0;
    let countSecond = 0;
    for(let i = 0; i < qSize/2; i++){
        let tempVal = this.dequeue();
        countFirst += tempVal;
        this.enqueue(tempVal);
    }
    for(let i = 0; i < qSize/2; i++){
        let tempVal = this.dequeue();
        countSecond += tempVal;
        this.enqueue(tempVal);
    }
    if(countFirst == countSecond){
        return true;
    }
    return false;
}

enqueue(item) {
    this.stack1.push(item);
    return this.stack1.size();
}

/**
 * TODO: implement this method
 * Removes the next item in the line / queue.
 * - Time: O(?).
 * - Space: O(?).
 * @returns {any} The removed item.
 */
dequeue() {
    if(this.stack1.isEmpty()){
        return undefined;
    }
    const qSize = this.stack1.size();
    //Reverses order so that items are in order that they came in (like a queue)
    for(let i = 0; i < qSize; i++){
        this.stack2.push(this.stack1.pop());
    }
    //takes the top off the new stack (which was first item in, first in queue)
    const tempData = this.stack2.pop();
    //returns stack 1 to original state, minus the popped item
    for(let i = 0; i < qSize -1; i++){
        this.stack1.push(this.stack2.pop());
    }
    return tempData;
}