package queue_and_stack;

import java.util.*;

class MyStack {
    // Initialize two queues.
    private Queue<Integer> queue;
    private Queue<Integer> queueTemp;

    // Constructor to initialize a stack.
    MyStack() {
        queue = new LinkedList<>();
        queueTemp = new LinkedList<>();
    }

    // Method to push element to the top of the stack using two queues.
    public void pushUsingTwoQueues(int x) {
        // Add the new element to the rear of queueTemp.
        queueTemp.add(x);
        // Move all elements from queue to queueTemp.
        while (!queue.isEmpty()) {
            // Each element is removed from the front of queue.
            int removedTop = queue.remove();
            // Add the removed element to the rear of queueTemp.
            queueTemp.add(removedTop);
        }
        // Swap queue and queueTemp.
        Queue<Integer> temp = queue;
        queue = queueTemp;
        queueTemp = temp;
    }

    // Method to push element to the top of the stack using one queue.
    public void pushUsingOneQueue(int x) {
        // Add the new element to the rear of queue.
        queue.add(x);
        // Initialize a count variable with the length of queue.
        int count = queue.size();

        // Loop through the queue until the newly added element is reached.
        while (count > 1) {
            // Each element is removed from the front of queue.
            int removedTop = queue.remove();
            // Add the removed element back to the rear of queue.
            queue.add(removedTop);
            // Decrement the count.
            count--;
        }
    }

    // Method to remove and return the top element of the stack.
    public int pop() {
        // Remove and return the front element from queue.
        return queue.remove();
    }

    // Method to return the top element of the stack.
    public int top() {
        // Return the head of the list.
        return queue.peek();
    }

    // Method to check if the stack is empty.
    public boolean empty() {
        // Return true if the list is empty, false otherwise.
        return queue.isEmpty();
    }
}

public class ImplementStackUsingQueues {
    /**
     * Implement a last-in-first-out (LIFO) stack using only two queues.
     * The implemented stack should support all the functions of a normal stack
     * (push, top, pop, and empty).
     * Implement the stack class:
     * - `void push(int x)` Pushes element x to the top of the stack.
     * - `int pop()` Removes the element on the top of the stack and returns it.
     * - `int top()` Returns the element on the top of the stack.
     * - `boolean empty()` Returns true if the stack is empty, false otherwise.
     * You must use only standard operations of a queue,
     * which means that only `push to back`, `peek/pop from front`, `size`
     * and `is empty` operations are valid.
     * Depending on your language, the queue may not be supported natively.
     * You may simulate a queue using a list or deque (double-ended queue)
     * as long as you use only a queue's standard operations.
     */

    public static void main(String[] args) {
        MyStack myStack = new MyStack();

        // Test using two queues
        System.out.println("*****Testing Using Two Queues*****");
        myStack.pushUsingTwoQueues(1);
        myStack.pushUsingTwoQueues(2);
        System.out.println("Top element (using two queues): " + myStack.top()); // Should return 2
        System.out.println("Popped element (using two queues): " + myStack.pop()); // Should return 2
        System.out.println("Is stack empty (using two queues): " + myStack.empty()); // Should return false

        // Test using one queue
        System.out.println("*****Testing Using One Queue*****");
        myStack.pushUsingOneQueue(3);
        myStack.pushUsingOneQueue(4);
        System.out.println("\nTop element (using one queue): " + myStack.top()); // Should return 4
        System.out.println("Popped element (using one queue): " + myStack.pop()); // Should return 4
        System.out.println("Is stack empty (using one queue): " + myStack.empty()); // Should return false
    }
}
