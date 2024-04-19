import java.util.HashMap;
import java.util.HashSet;
import java.util.Map;
import java.util.Set;

public class LongestSubstringWithoutRepeatingCharacters {
    /**
     * Given a string s, find the length of the longest substring
     * without repeating characters.
     */

    /**
     * Approach 1: Brute Force (Nested Loops with HashSet)
     * Time Complexity: O(n^3), where n is the length of the string.
     * - The inner loop iterates n times for each iteration of the outer loop.
     * - For each iteration of the inner loop, the help method could iterate through
     * the entire string in the worst case.
     * - Therefore, the overall time complexity is O(n^3).
     * Space Complexity: O(n)
     * - The hash set of unique characters can contain up to n characters.
     *
     * @param s The input string.
     * @return The length of the longest substring without repeating characters.
     *
     */
    public static int solutionOne(String s) {
        // Initialize variables.
        int n = s.length();
        int maxLen = 0;

        // Early exit check: If the string is empty, return 0.
        if (n == 0) {
            return maxLen;
        }

        // The outer loop keeps track of the starting point of the substring.
        for (int i = 0; i < n; i++) {
            // The inner loop expands the substring from i to the end of the string.
            for (int j = i; j < n; j++) {
                // If the substring does not contain duplicate characters
                if (!containsDuplicate(s, i, j)) {
                    // Calculate the length of the current substring.
                    int currLen = j - i + 1;
                    // Update the maximum length if the current length is grater.
                    maxLen = Math.max(maxLen, currLen);
                }
                // If a duplicate character is found
                else {
                    // Terminate the current substring and move to the next starting point.
                    break;
                }
            }
        }
        // Return the maximum length of the substring.
        return maxLen;
    }

    // Helper method to check if a substring contains duplicate characters.
    private static boolean containsDuplicate(String s, int start, int end) {
        // Create a HashSet to keep track of characters seen in the substring.
        Set<Character> set = new HashSet<>();

        // Iterate through the substring.
        for (int i = start; i <= end; i++) {
            char c = s.charAt(i);
            // If the set already contains the current character
            if (set.contains(c)) {
                // A duplicate character is found.
                return true;
            } else {
                // Else, add the current character to the set.
                set.add(c);
            }
        }
        // No duplicates are found in the substring.
        return false;
    }

    /**
     * Approach 2:Sliding Window using HashSet
     * Time Complexity: O(n), where n is the length of the string.
     * - The string is traversed only once.
     * Space Complexity: O(n)
     * - The hash set of unique characters can contain up to n characters.
     *
     * @param s The input string.
     * @return The length of the longest substring without repeating characters.
     *
     */
    public static int solutionTwo(String s) {
        // Initialize variables including start and end pointers.
        int n = s.length();
        int maxLen = 0;
        int start = 0;
        int end = 0;

        // Initialize an empty HashSet to keep track of unique characters
        // in the current window.
        Set<Character> set = new HashSet<>();

        // Loop through the string while pointers are within bounds.
        while (start <= end && end < n) {
            char c = s.charAt(end);

            // If the HashSet does not contain the current character
            if (!set.contains(c)) {
                // Add the character to the set.
                set.add(c);
                // Calculate the length of current substring.
                int currLen = end - start + 1;
                // Update the max Length if the current length is greater.
                maxLen = Math.max(maxLen, currLen);
                // Move the end pointer forward because a unique character is found.
                end++;
            }
            // If the HashSet already contains the current character
            else {
                // Remove the character from the set.
                set.remove(s.charAt(start));
                // Move the start pointer forward because a duplicate character is found.
                start++;
            }
        }
        // Return the maximum length.
        return maxLen;
    }

    /**
     * Approach 3:Sliding Window using HashMap
     * Time Complexity: O(n), where n is the length of the string.
     * - The string is traversed only once.
     * Space Complexity: O(n)
     * - The hash map of unique characters can contain up to n characters.
     *
     * @param s The input string.
     * @return The length of the longest substring without repeating characters.
     *
     */
    public static int solutionThree(String s) {
        // Initialize variables including start and end pointers.
        int n = s.length();
        int maxLen = 0;
        int start = 0;
        int end = 0;

        // Initialize an empty HashMap to keep track of characters
        // and their latest index of occurrence within the current window.
        Map<Character, Integer> map = new HashMap<>();

        // Loop through the string while the pointers are within bounds.
        while (start <= end && end < n) {
            char c = s.charAt(end);

            // If the map already contains the current character
            if (map.containsKey(c)) {
                // Update the start pointer to the index immediately following
                // the previous occurrence of the current character.
                start = Math.max(start, map.get(c) + 1);
            }
            // Update the map with the latest index of the current character.
            map.put(c, end);

            // Calculate the current length and update the max length.
            int currLen = end - start + 1;
            maxLen = Math.max(maxLen, currLen);

            // Move the end pointer forward.
            end++;
        }
        // Return the maximum length.
        return maxLen;
    }

    public static void main(String[] args) {
        // Test case 1
        String s1 = "abcabcbb";
        int expectedOutput1 = 3;

        // Test case 2
        String s2 = "bbbbb";
        int expectedOutput2 = 1;

        // Test case 3
        String s3 = "pwwkew";
        int expectedOutput3 = 3;

        // Test solutionOne
        System.out.println("*****Testing solutionOne*****");
        System.out.println("Test Case 1:");
        System.out.println("Input string: " + s1);
        System.out.println("Expected Output: " + expectedOutput1);
        int solutionOneResult1 = LongestSubstringWithoutRepeatingCharacters.solutionOne(s1);
        System.out.println("Actual Output: " + solutionOneResult1);
        System.out.println(expectedOutput1 == solutionOneResult1 ? "Test passed" : "Test failed");
        System.out.println();

        System.out.println("Test Case 2:");
        System.out.println("Input string: " + s2);
        System.out.println("Expected Output: " + expectedOutput2);
        int solutionOneResult2 = LongestSubstringWithoutRepeatingCharacters.solutionOne(s2);
        System.out.println("Actual Output: " + solutionOneResult2);
        System.out.println(expectedOutput2 == solutionOneResult2 ? "Test passed" : "Test failed");
        System.out.println();

        System.out.println("Test Case 3:");
        System.out.println("Input string: " + s3);
        System.out.println("Expected Output: " + expectedOutput3);
        int solutionOneResult3 = LongestSubstringWithoutRepeatingCharacters.solutionOne(s3);
        System.out.println("Actual Output: " + solutionOneResult3);
        System.out.println(expectedOutput3 == solutionOneResult3 ? "Test passed" : "Test failed");
        System.out.println();

        // Test solutionTwo
        System.out.println("*****Testing solutionTwo*****");
        System.out.println("Test Case 1:");
        System.out.println("Input string: " + s1);
        System.out.println("Expected Output: " + expectedOutput1);
        int solutionTwoResult1 = LongestSubstringWithoutRepeatingCharacters.solutionTwo(s1);
        System.out.println("Actual Output: " + solutionTwoResult1);
        System.out.println(expectedOutput1 == solutionTwoResult1 ? "Test passed" : "Test failed");
        System.out.println();

        System.out.println("Test Case 2:");
        System.out.println("Input string: " + s2);
        System.out.println("Expected Output: " + expectedOutput2);
        int solutionTwoResult2 = LongestSubstringWithoutRepeatingCharacters.solutionTwo(s2);
        System.out.println("Actual Output: " + solutionTwoResult2);
        System.out.println(expectedOutput2 == solutionTwoResult2 ? "Test passed" : "Test failed");
        System.out.println();

        System.out.println("Test Case 3:");
        System.out.println("Input string: " + s3);
        System.out.println("Expected Output: " + expectedOutput3);
        int solutionTwoResult3 = LongestSubstringWithoutRepeatingCharacters.solutionTwo(s3);
        System.out.println("Actual Output: " + solutionTwoResult3);
        System.out.println(expectedOutput3 == solutionTwoResult3 ? "Test passed" : "Test failed");
        System.out.println();

        // Test solutionThree
        System.out.println("*****Testing solutionThree*****");
        System.out.println("Test Case 1:");
        System.out.println("Input string: " + s1);
        System.out.println("Expected Output: " + expectedOutput1);
        int solutionThreeResult1 = LongestSubstringWithoutRepeatingCharacters.solutionThree(s1);
        System.out.println("Actual Output: " + solutionThreeResult1);
        System.out.println(expectedOutput1 == solutionThreeResult1 ? "Test passed" : "Test failed");
        System.out.println();

        System.out.println("Test Case 2:");
        System.out.println("Input string: " + s2);
        System.out.println("Expected Output: " + expectedOutput2);
        int solutionThreeResult2 = LongestSubstringWithoutRepeatingCharacters.solutionThree(s2);
        System.out.println("Actual Output: " + solutionThreeResult2);
        System.out.println(expectedOutput2 == solutionThreeResult2 ? "Test passed" : "Test failed");
        System.out.println();

        System.out.println("Test Case 3:");
        System.out.println("Input string: " + s3);
        System.out.println("Expected Output: " + expectedOutput3);
        int solutionThreeResult3 = LongestSubstringWithoutRepeatingCharacters.solutionThree(s3);
        System.out.println("Actual Output: " + solutionThreeResult3);
        System.out.println(expectedOutput3 == solutionThreeResult3 ? "Test passed" : "Test failed");
        System.out.println();
    }
}
