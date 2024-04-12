package queue_and_stack;

import java.util.*;

class MyQueue {
    /**
     * Implement a first in first out (FIFO) queue using only two stacks.
     * The implemented queue should support all the functions of a normal queue
     * (push, peek, pop, and empty).
     * Implement the MyQueue class:
     * - `void push(int x)` Pushes element x to the back of the queue.
     * - `int pop()` Removes the element from the front of the queue and returns it.
     * - `int peek()` Returns the element at the front of the queue.
     * - `boolean empty()` Returns true if the queue is empty, false otherwise.
     * You must use only standard operations of a stack,
     * which means only push to top, peek/pop from top, size,
     * and is empty operations are valid.
     * Depending on your language, the stack may not be supported natively.
     * You may simulate a stack using a list or deque (double-ended queue)
     * as long as you use only a stack's standard operations.
     */

    // Initialize two stacks.
    Deque<Integer> stack;
    Deque<Integer> stackTemp;

    // Constructor to create an object of MyQueue class.
    MyQueue() {
        stack = new ArrayDeque<>();
        stackTemp = new ArrayDeque<>();
    }

    /**
     * Time Complexity: O(1), where n is the size of the stack.
     * - Pushing the new element onto the top of the stack takes O(1) time.
     * Space complexity: O(1).
     * - It does not require any extra space.
     *
     * @param x The input integer to be added to the rear of the queue.
     */

    // Method to push element to the rear of the queue using two stacks.
    public void push(int x) {
        // Move all elements from stack to stackTemp.
        while (!stack.isEmpty()) {
            // Move each element at the top of stack to the top of stackTemp.
            stackTemp.push(stack.pop());
        }
        // Push the new element onto the top of stackTemp.
        stackTemp.push(x);
        // After the first loop, the order of elements are reversed.
        // Move all elements from stackTemp back to stack.
        while (!stackTemp.isEmpty()) {
            // Move each element at the top of stackTemp to the top of stack.
            stack.push(stackTemp.pop());
        }
        // After the second loop, the order of elements are reversed back
        // to the original order, with the new element at the bottom of the stack,
        // achieving Queue's First-In First-Out (FIFO) behavior.
    }

    /**
     * Time Complexity: O(1)
     * - Removing the top element of the stack takes a constant time complexity.
     * Space Complexity: O(1)
     * - It does not require any extra space.
     *
     * @return The integer element that is removed from the front of the queue.
     */

    // Method to remove and return the front element of the queue.
    public int pop() {
        // Remove and return the top element of stack.
        return stack.pop();
    }

    /**
     * Time Complexity: O(1)
     * - Retrieving the top element of the stack takes a constant time complexity.
     * Space Complexity: O(1)
     * - It does not require any extra space.
     *
     * @return The integer element at the front of the queue.
     */

    // Method to return the front element of the queue.
    public int peek() {
        // Return the top element of stack.
        return stack.peek();
    }

    /**
     * Time Complexity: O(1)
     * - Checking the size of stack takes a constant time complexity.
     * Space Complexity: O(1)
     * - It does not require any extra space.
     *
     * @return True is the queue is empty, false otherwise.
     */

    // Method to check if the queue is empty.
    public boolean empty() {
        // Return true if the stack is empty, false otherwise.
        return stack.isEmpty();
    }
}

public class ImplementQueueUsingStacks {
    public static void main(String[] args) {
        MyQueue myQueue = new MyQueue();

        // Test
        myQueue.push(1);
        // Return "After pushing 1, queue is [1]".
        System.out.println("After pushing 1, queue is " + myQueue.stack);
        // Return "Front element is 1".
        System.out.println("Front element is " + myQueue.peek());
        myQueue.push(2);
        // Return "After pushing 2, queue is [1, 2]".
        System.out.println("After pushing 2, queue is " + myQueue.stack);
        // Return "Front element is 1".
        System.out.println("Front element is " + myQueue.peek());
        myQueue.push(3);
        // Return "After pushing 3, queue is [1, 2, 3]".
        System.out.println("After pushing 3, queue is " + myQueue.stack);
        // Return "Front element is 1".
        System.out.println("Front element is " + myQueue.peek());
        myQueue.push(4);
        // Return "After pushing 4, queue is [1, 2, 3, 4]".
        System.out.println("After pushing 4, queue is " + myQueue.stack);
        // Return "Front element is 1".
        System.out.println("Front element is " + myQueue.peek());
        System.out.println();
        // Return "Is queue empty: false".
        System.out.println("Is queue empty: " + myQueue.empty());
        System.out.println();
        // Return "After popping 1, queue is [2, 3, 4]".
        System.out.println("After popping " + myQueue.pop() + ", queue is " + myQueue.stack);
        // Return "After popping 2, queue is [3, 4]".
        System.out.println("After popping " + myQueue.pop() + ", queue is " + myQueue.stack);
        // Return "After popping 3, queue is [4]".
        System.out.println("After popping " + myQueue.pop() + ", queue is " + myQueue.stack);
        // Return "After popping 4, queue is []".
        System.out.println("After popping " + myQueue.pop() + ", queue is " + myQueue.stack);
        System.out.println();
        // Return "Is queue empty: true".
        System.out.println("Is queue empty: " + myQueue.empty());
    }

}
