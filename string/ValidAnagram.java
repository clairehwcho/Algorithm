import java.util.*;

public class ValidAnagram {
    /**
     * Given two strings s and t, return true if t is an anagram of s, and false
     * otherwise.
     * An Anagram is a word or phrase formed by rearranging the letters of a
     * different word or phrase,
     * typically using all the original letters exactly once.
     */

    /**
     * Approach 1: Brute Force (Sort and Compare)
     * Time Complexity: O(nlogn), where n is the length of the longer of the two
     * input strings
     * - Converting the strings to arrays takes O(n) time.
     * - Sorting the arrays takes O(nlogn) time.
     * - Comparing the two sorted arrays takes O(n) time.
     * - Therefore, the overall time complexity is O(nlogn).
     * Space Complexity: O(n).
     * - We need additional space to store two arrays.
     *
     * @param s The first input string to check for anagram.
     * @param t The second input string to check for anagram.
     * @return True if s and t are anagram of each other, false otherwise.
     */

    public static boolean solutionOne(String s, String t) {
        // If the lengths of the two strings are different, return false.
        if (s.length() != t.length()) {
            return false;
        }

        // Convert the two strings to character arrays.
        char[] sArr = s.toCharArray();
        char[] tArr = t.toCharArray();

        // Sort the two arrays.
        Arrays.sort(sArr);
        Arrays.sort(tArr);

        // Return boolean by comparing the two sorted arrays.
        return Arrays.equals(sArr, tArr);
    }

    /**
     * Approach 2: Two-Pass HashMap
     * Time Complexity: O(n), where n is the length of the longer of the two input
     * strings.
     * - We traverse the string of length n twice, taking O(2n) time.
     * Space Complexity: O(n)
     * - We need additional space to store HashMap, taking O(2n) at most.
     *
     * @param s The first input string to check for anagram.
     * @param t The second input string to check for anagram.
     * @return True if s and t are anagram of each other, false otherwise.
     */

    public static boolean solutionTwo(String s, String t) {
        // If the lengths of the two strings are different, return false.
        if (s.length() != t.length()) {
            return false;
        }

        // Create an empty HashMap that has character as key and frequency as value.
        Map<Character, Integer> map = new HashMap<>();

        // Loop through the first string.
        for (int i = 0; i < s.length(); i++) {
            // Increment the frequency of each character in the HashMap.
            map.put(s.charAt(i), map.getOrDefault(s.charAt(i), 0) + 1);
        }

        // Loop through the second string.
        for (int i = 0; i < t.length(); i++) {
            // Decrement the frequency of each character in the HashMap.
            map.put(t.charAt(i), map.getOrDefault(t.charAt(i), 0) - 1);

            // If the frequency becomes below zero, return false.
            if (map.get(t.charAt(i)) < 0) {
                return false;
            }
        }

        // Otherwise, return true.
        return true;
    }

    /**
     * Approach 3: Frequency Counter Array
     * Time Complexity: O(n), where n is the length of the longer of the two input
     * strings.
     * - We traverse the string of length n only once, which takes O(n).
     * - Creating and looping over the counter array takes constant time, O(1).
     * - Therefore, the overall time complexity is O(n).
     * Space Complexity: O(1)
     * - We need additional space to store the counter array, which has a fixed size
     * of 26.
     * - It does not depend on the size of the input strings.
     *
     * @param s The first input string to check for anagram.
     * @param t The second input string to check for anagram.
     * @return True if s and t are anagram of each other, false otherwise.
     */

    public static boolean solutionThree(String s, String t) {
        // If the lengths of the two strings are different, return false.
        if (s.length() != t.length()) {
            return false;
        }

        // Create an array of integer (frequency counter) for characters `a` to `z`.
        int[] counter = new int[26];

        // Loop over the two strings to update the counter at once.
        for (int i = 0; i < s.length(); i++) {
            // In Java, characters are represented internally using Unicode encoding.
            // Subtract `a`, whose Unicode value is 97,
            // to find the index in the counter starting from the index 0.
            // Increment the count of characters in the first string.
            counter[s.charAt(i) - 'a']++;
            // decrement the count of characters in the second string.
            counter[t.charAt(i) - 'a']--;
        }

        // Loop over the counter to check if there is any negative frequency.
        for (int count : counter) {
            // If any negative frequency is found, return false.
            if (count < 0) {
                return false;
            }
        }
        // Otherwise, return true.
        return true;
    }

    public static void main(String[] args) {
        // Test case 1
        String input1A = "anagram", input1B = "nagaram";
        boolean expectedOutput1 = true;

        // Test case 2
        String input2A = "rat", input2B = "car";
        boolean expectedOutput2 = false;

        // Test solutionOne
        System.out.println("*****Testing solutionOne*****");
        System.out.println("Test Case 1:");
        boolean solutionOneOutput1 = solutionOne(input1A, input1B);
        if (solutionOneOutput1 == expectedOutput1) {
            System.out.println(
                    "Input: " + input1A + ", " + input1B + "\nOutput: " + solutionOneOutput1 + "\nExpected Output: "
                            + expectedOutput1
                            + "\nResult: Correct answer");
        } else {
            System.out.println("Wrong Answer");
        }
        System.out.println("\nTest Case 2:");
        boolean solutionOneOutput2 = solutionOne(input2A, input2B);
        if (solutionOneOutput2 == expectedOutput2) {
            System.out.println(
                    "Input: " + input2A + ", " + input2B + "\nOutput: " + solutionOneOutput2 + "\nExpected Output: "
                            + expectedOutput2
                            + "\nResult: Correct answer");
        } else {
            System.out.println("Wrong Answer");
        }

        // Test solutionTwo
        System.out.println("\n***** Testing solutionTwo *****");
        System.out.println("Test Case 1:");
        boolean solutionTwoOutput1 = solutionTwo(input1A, input1B);
        if (solutionTwoOutput1 == expectedOutput1) {
            System.out.println(
                    "Input: " + input1A + ", " + input1B + "\nOutput: " + solutionTwoOutput1 + "\nExpected Output: "
                            + expectedOutput1
                            + "\nResult: Correct answer");
        } else {
            System.out.println("Wrong Answer");
        }
        System.out.println("\nTest Case 2:");
        boolean solutionTwoOutput2 = solutionTwo(input2A, input2B);
        if (solutionTwoOutput2 == expectedOutput2) {
            System.out.println(
                    "Input: " + input2A + ", " + input2B + "\nOutput: " + solutionTwoOutput2 + "\nExpected Output: "
                            + expectedOutput2
                            + "\nResult: Correct answer");
        } else {
            System.out.println("Wrong Answer");
        }

        // Test solutionThree
        System.out.println("\n***** Testing solutionThree *****");
        System.out.println("Test Case 1:");
        boolean solutionThreeOutput1 = solutionThree(input1A, input1B);
        if (solutionThreeOutput1 == expectedOutput1) {
            System.out.println(
                    "Input: " + input1A + ", " + input1B + "\nOutput: " + solutionThreeOutput1 + "\nExpected Output: "
                            + expectedOutput1
                            + "\nResult: Correct answer");
        } else {
            System.out.println("Wrong Answer");
        }
        System.out.println("\nTest Case 2:");
        boolean solutionThreeOutput2 = solutionThree(input2A, input2B);
        if (solutionThreeOutput2 == expectedOutput2) {
            System.out.println(
                    "Input: " + input2A + ", " + input2B + "\nOutput: " + solutionThreeOutput2 + "\nExpected Output: "
                            + expectedOutput2
                            + "\nResult: Correct answer");
        } else {
            System.out.println("Wrong Answer");
        }
    }
}