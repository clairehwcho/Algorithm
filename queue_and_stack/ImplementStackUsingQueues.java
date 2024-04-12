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
    Queue<Integer> queue;
    Queue<Integer> queueTemp;

    // Constructor to create an object MyStack class.
    MyStack() {
        queue = new ArrayDeque<>();
        queueTemp = new ArrayDeque<>();
    }

    /**
     * Time Complexity: O(n), where n is the size of the queue.
     * - Adding the new element to the back of the queue takes O(1) time.
     * - Rotating the queue takes O(n - 1) time.
     * - Therefore, the overall time complexity is O(n).
     * Space Complexity: O(1)
     * - It does not require any extra space.
     *
     * @param x The input integer to be pushed onto the top of the stack.
     */
    // Method to push element to the top of the stack using one queue.
    public void pushUsingOneQueue(int x) {
        // Add the new element to the rear of queue.
        queue.add(x);

        // Rotate each element in the queue except the last added element
        // to achieve Stack's Last-In First-Out behavior.
        int n = queue.size();
        while (n-- > 1) {
            // Move each element from the front to the rear of the queue.
            queue.add(queue.remove());
        }
        // After the rotation, the new element becomes the front element
        // in the correct position to be removed first
        // on a subsequent pop() operation (LIFO).
    }

    /**
     * Time Complexity: O(n), where n is the size of the queue.
     * - Adding the new element to the back of the queue takes O(1) time.
     * - Moving all the elements from queue to queueTemp takes O(n) time.
     * - Swapping the queues takes O(1) time.
     * - Therefore, the overall time complexity is O(n).
     * Space Complexity: O(1)
     * - It does not require any additional space.
     * - We are just redistributing the elements between the two queues.
     * - Assigning `queue` to `temp` for swapping is simply creating a reference
     * `temp` that points to the same queue as `queue`
     * and does not require any additional memory.
     *
     * @param x The input integer to be added to the top of the stack.
     */

    // Method to push element to the top of the stack using two queues.
    public void pushUsingTwoQueues(int x) {
        // Add the new element to the rear of queueTemp.
        queueTemp.add(x);

        // Move all elements from queue to queueTemp.
        while (!queue.isEmpty()) {
            // Move each element from the front of queue to the rear of the queueTemp.
            queueTemp.add(queue.remove());
        }
        // Swap the references of the queues.
        Queue<Integer> temp = queue;
        queue = queueTemp;
        queueTemp = temp;
    }

    /**
     * Time Complexity: O(1)
     * - Removing the front element of the queue takes a constant time complexity.
     * Space Complexity: O(1)
     * - It does not require any extra space.
     *
     * @return The integer element that is removed from the top of the stack.
     */

    // Method to remove and return the top element of the stack.
    public int pop() {
        // Remove and return the front element of queue.
        return queue.remove();
    }

    /**
     * Time Complexity: O(1)
     * - Retrieving the front element of the queue takes a constant time complexity.
     * Space Complexity: O(1)
     * - It does not require any extra space.
     *
     * @return The integer element at the top of the stack.
     */

    // Method to return the top element of the stack.
    public int top() {
        // Return the front element of queue.
        return queue.peek();
    }

    /**
     * Time Complexity: O(1)
     * - Checking the size of queue takes a constant time complexity.
     * Space Complexity: O(1)
     * - It does not require any extra space.
     *
     * @return True is the stack is empty, false otherwise.
     */

    // Method to check if the stack is empty.
    public boolean empty() {
        // Return true if the queue is empty, false otherwise.
        return queue.isEmpty();
    }
}

public class ImplementStackUsingQueues {
    public static void main(String[] args) {
        MyStack myStack = new MyStack();

        // Test
        myStack.pushUsingOneQueue(1);
        System.out.println("After pushing 1, stack is " + myStack.queue); // Return "After pushing 1, stack is [1]".
        System.out.println("Top element is " + myStack.top()); // Return "Top element is 1".
        myStack.pushUsingOneQueue(2);
        System.out.println("After pushing 2, stack is " + myStack.queue); // Return "After pushing 2, stack is [2, 1]".
        System.out.println("Top element is " + myStack.top()); // Return "Top element is 2".
        myStack.pushUsingTwoQueues(3);
        System.out.println("After pushing 3, stack is " + myStack.queue); // Return "After pushing 3, stack is [3, 2,
                                                                          // 1]".
        System.out.println("Top element is " + myStack.top()); // Return "Top element is 3".
        myStack.pushUsingTwoQueues(4);
        System.out.println("After pushing 4, stack is " + myStack.queue); // Return "After pushing 4, stack is [4, 3, 2,
                                                                          // 1]".
        System.out.println("Top element is " + myStack.top()); // Return "Top element is 4".
        System.out.println();
        System.out.println("Is stack empty: " + myStack.empty()); // Return "Is queue empty: false".
        System.out.println();
        System.out.println("After popping " + myStack.pop() + ", stack is " + myStack.queue); // Return "After popping
                                                                                              // 4, stack is [3, 2, 1]".
        System.out.println("After popping " + myStack.pop() + ", stack is " + myStack.queue); // Return "After popping
                                                                                              // 4, stack is [2, 1]".
        System.out.println("After popping " + myStack.pop() + ", stack is " + myStack.queue); // Return "After popping
                                                                                              // 4, stack is [1]".
        System.out.println("After popping " + myStack.pop() + ", stack is " + myStack.queue); // Return "After popping
                                                                                              // 4, stack is []".
        System.out.println();
        System.out.println("Is stack empty: " + myStack.empty()); // Return "Is stack empty: true".
    }
}
