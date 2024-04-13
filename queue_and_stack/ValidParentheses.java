package queue_and_stack;

import java.util.*;

public class ValidParentheses {
    /**
     * Given a string s containing just the characters
     * '(', ')', '{', '}', '[' and ']',
     * determine if the input string is valid.
     * An input string is valid if:
     * - Open brackets must be closed by the same type of brackets.
     * - Open brackets must be closed in the correct order.
     * - Every close bracket has a corresponding open bracket of the same type.
     */

    /**
     * Approach 1: Switch Statement and Stack
     * Time Complexity: O(n), where n is the length of the string.
     * - It traverses the string only once.
     * - Building a stack takes O(1) time.
     * - Therefore, the overall time complexity is O(n).
     * Space Complexity: O(n)
     * - It needs O(n) extra space at most to store the characters in the string.
     *
     * @param s The input String containing parentheses.
     * @return True if the string is valid, false otherwise.
     */

    public static boolean solutionOne(String s) {
        // Early exit check:
        // If the string has odd length, it is an invalid expression.
        if (s.length() % 2 != 0) {
            return false;
        }

        // Initialize a stack to keep track of opening brackets.
        Deque<Character> stack = new ArrayDeque<>();

        // Loop through the string.
        for (char ch : s.toCharArray()) {
            switch (ch) {
                // If the current character is an opening bracket
                case '(':
                case '{':
                case '[':
                    // Push it onto the stack.
                    stack.push(ch);
                    break;
                // If the current character is a closing bracket
                case ')':
                    // If the stack is empty (meaning there is no opening bracket)
                    // or the top element of the stack is not a matching opening bracket,
                    // it is an invalid expression.
                    if (stack.isEmpty() || stack.pop() != '(') {
                        return false;
                    }
                    break;
                case '}':
                    if (stack.isEmpty() || stack.pop() != '{') {
                        return false;
                    }
                    break;
                case ']':
                    if (stack.isEmpty() || stack.pop() != '[') {
                        return false;
                    }
                    break;
                default:
                    // Ignore unexpected characters.
                    break;
            }
        }
        // If the stack still contains elements, it is an invalid expression.
        return stack.isEmpty();
    }

    /**
     * Approach 2: HashMap and Stack
     * Time Complexity: O(n), where n is the length of the string.
     * - It traverses the string only once.
     * - Building a HashMap and stack takes O(1) time.
     * - Therefore, the overall time complexity is O(n).
     * Space Complexity: O(n)
     * - It needs O(n) extra space at most to store the characters in the string.
     * - It requires a constant amount of extra space
     * to store HashMap with a fixed number of entries.
     * - Therefore, the overall space complexity is O(n).
     *
     * @param s The input String containing parentheses.
     * @return True if the string is valid, false otherwise.
     */

    public static boolean solutionTwo(String s) {
        // Early exit check:
        // If the string has odd length, it is an invalid expression.
        if (s.length() % 2 != 0) {
            return false;
        }

        // Initialize a HashMap to map the same type of brackets.
        Map<Character, Character> map = new HashMap<>();
        map.put(')', '(');
        map.put('}', '{');
        map.put(']', '[');

        // Initialize a stack to keep track of opening brackets.
        Deque<Character> stack = new ArrayDeque<>();

        // Loop through the string.
        for (int i = 0; i < s.length(); i++) {
            char ch = s.charAt(i);
            // If the current character is a closing bracket
            if (map.containsKey(ch)) {
                // If the stack is empty, set a dummy value of `#`
                // or get the top element of the stack.
                char top = stack.isEmpty() ? '#' : stack.pop();
                // If the top element does not match the map
                if (top != map.get(ch)) {
                    // Return false.
                    return false;
                }
            }
            // If the current character is an opening bracket
            else {
                // Push it to the stack.
                stack.push(ch);
            }
        }
        // If the stack still contains elements, it is an invalid expression.
        return stack.isEmpty();
    }

    public static void main(String[] args) {
        // Test case 1
        String s1 = "()";
        boolean expectedOutput1 = true;

        // Test case 2
        String s2 = "()[]{}";
        boolean expectedOutput2 = true;

        // Test case 3
        String s3 = "(]";
        boolean expectedOutput3 = false;

        // Test case 4
        String s4 = "{}}";
        boolean expectedOutput4 = false;

        // Test solutionOne
        System.out.println("*****Testing solutionOne*****");
        System.out.println("Test Case 1:");
        System.out.println("Input: " + s1);
        System.out.println("Expected Output: " + expectedOutput1);
        System.out.println("Actual Output: " + solutionOne(s1));
        System.out.println();
        System.out.println("Test Case 2:");
        System.out.println("Input: " + s2);
        System.out.println("Expected Output: " + expectedOutput2);
        System.out.println("Actual Output: " + solutionOne(s2));
        System.out.println();
        System.out.println("Test Case 3:");
        System.out.println("Input: " + s3);
        System.out.println("Expected Output: " + expectedOutput3);
        System.out.println("Actual Output: " + solutionOne(s3));
        System.out.println();
        System.out.println("Test Case 4:");
        System.out.println("Input: " + s4);
        System.out.println("Expected Output: " + expectedOutput4);
        System.out.println("Actual Output: " + solutionOne(s4));
        System.out.println();

        // Test solutionTwo
        System.out.println("*****Testing solutionTwo*****");
        System.out.println("Test Case 1:");
        System.out.println("Input: " + s1);
        System.out.println("Expected Output: " + expectedOutput1);
        System.out.println("Actual Output: " + solutionTwo(s1));
        System.out.println();
        System.out.println("Test Case 2:");
        System.out.println("Input: " + s2);
        System.out.println("Expected Output: " + expectedOutput2);
        System.out.println("Actual Output: " + solutionTwo(s2));
        System.out.println();
        System.out.println("Test Case 3:");
        System.out.println("Input: " + s3);
        System.out.println("Expected Output: " + expectedOutput3);
        System.out.println("Actual Output: " + solutionTwo(s3));
        System.out.println();
        System.out.println("Test Case 4:");
        System.out.println("Input: " + s4);
        System.out.println("Expected Output: " + expectedOutput4);
        System.out.println("Actual Output: " + solutionTwo(s4));
        System.out.println();
    }
}
