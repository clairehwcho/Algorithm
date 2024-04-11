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
    private Stack<Integer> stack;
    private Stack<Integer> stackTemp;

    // Constructor to initialize MyQueue class.
    MyQueue() {
        stack = new Stack<>();
        stackTemp = new Stack<>();
    }

    // Method to push element to the back of the queue using two stacks.
    public void pushUsingTwoStacks(int x) {
        // Move all elements from stack to stackTemp.
        while (!stack.isEmpty()) {
            // Each element is removed from the top of stack.
            int top = stack.pop();
            // Add the removed element to the top of stackTemp.
            stackTemp.push(top);
        }
        // Now, the elements are in the reversed order in stackTemp.
        // Push the new element to the top of the stackTemp.
        stackTemp.push(x);
        // Move all elements from stackTemp back to stack.
        while (!stackTemp.isEmpty()) {
            // Each element is removed from the top of stackTemp.
            int top = stackTemp.pop();
            // Add the removed element to the top of stack.
            stack.push(top);
        }
    }

    // Method to remove and return the front element of the queue.
    public int pop() {
        // Return the 
        return stack.pop();
    }

}

public class ImplementQueueUsingStacks {

}
