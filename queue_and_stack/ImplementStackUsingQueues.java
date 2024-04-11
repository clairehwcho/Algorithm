package queue_and_stack;

import java.util.*;

class MyStack {
    /**
     * Implement a last-in-first-out (LIFO) stack using only two queues.
     * The implemented stack should support all the functions of a normal stack
     * (push, top, pop, and empty).
     * Implement the MyStack class:
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

    // Initialize two queues.
    private Queue<Integer> queue;
    private Queue<Integer> queueTemp;

    // Constructor to initialize MyStack class.
    public MyStack() {
        queue = new ArrayDeque<>();
        queueTemp = new ArrayDeque<>();
    }

    // Method to push element to the top of the stack.
    public void push(int x) {
        // Add the new element to the rear of queue.
        queue.add(x);
    }

    // Method to remove and return the top element of the stack using two queues.
    public int popUsingTwoQueues() {
        // Move all elements except the last one from queue to queueTemp.
        while (queue.size() > 1) {
            // Remove the front element from queue.
            int front = queue.remove();
            // Add the front element from queue to the rear of queueTemp.
            queueTemp.add(front);
        }
        // Remove the last element in queue, which is the top element of the stack.
        int top = queue.remove();
        // Swap the references of the queues.
        Queue<Integer> temp = queue;
        queue = queueTemp;
        queueTemp = temp;
        // Return the top element.
        return top;
    }

    // Method to remove and return the top element of the stack using one queue.
    public int popUsingOneQueue() {
        // Rotate all elements except the last one from front to the rear of queue.
        while (queue.size() > 1) {
            // Remove the front element from queue.
            int front = queue.remove();
            // Add the front element back to the rear of queue.
            queue.add(front);
        }
        // Remove the last element in queue, which is the top element of the stack.
        int top = queue.remove();
        // Return the top element.
        return top;
    }

    // Method to return the top element of the stack using two queues.
    public int topUsingTwoQueues() {
        // Move all elements except the last one from queue to queueTemp.
        while (queue.size() > 1) {
            // Remove the front element from queue.
            int front = queue.remove();
            // Add the front element from queue to the rear of queueTemp.
            queueTemp.add(front);
        }
        // Retrieve the last element in queue, which is the original top element of the
        // stack.
        int top = queue.peek();
        // Move the last element in queue to the rear of queueTemp.
        queueTemp.add(top);
        // Swap the references of the queues.
        Queue<Integer> temp = queue;
        queue = queueTemp;
        queueTemp = temp;
        // Return the top element.
        return top;
    }

    // Method to return the top element of the stack using one queue.
    public int topUsingOneQueue() {
        // Rotate all elements except the last one from front to the rear of queue.
        while (queue.size() > 1) {
            // Remove the front element from queue.
            int front = queue.remove();
            // Add the front element back to the rear of queue.
            queue.add(front);
        }
        // Retrieve the front element in queue, which is the original top element of the
        // stack.
        int top = queue.peek();
        // Move the element back to the rear of queue.
        queue.add(top);
        // Return the top element.
        return top;
    }

    // Method to check if the stack is empty.
    public boolean empty() {
        // Return true if the list is empty, false otherwise.
        return queue.isEmpty();
    }
}

public class ImplementStackUsingQueues {
    public static void main(String[] args) {
        MyStack myStack = new MyStack();

        // Test
        myStack.push(1);
        System.out.println("Top element after pushing 1: " + myStack.topUsingOneQueue()); // Return 1.
        myStack.push(2);
        System.out.println("Top element after pushing 2: " + myStack.topUsingOneQueue()); // Return 2.
        myStack.push(3);
        System.out.println("Top element after pushing 3: " + myStack.topUsingTwoQueues()); // Return 3.
        myStack.push(4);
        System.out.println("Top element after pushing 4: " + myStack.topUsingTwoQueues()); // Return 4.
        System.out.println("Popped element: " + myStack.popUsingOneQueue()); // Return 4.
        System.out.println("Popped element: " + myStack.popUsingOneQueue()); // Return 3.
        System.out.println("Popped element: " + myStack.popUsingTwoQueues()); // Return 2.
        System.out.println("Popped element: " + myStack.popUsingTwoQueues()); // Return 1.
        System.out.println("Is stack empty: " + myStack.empty()); // Return true.
    }
}
