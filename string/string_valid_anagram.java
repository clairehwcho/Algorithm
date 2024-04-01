
/**
Valid Anagram (Difficulty: Easy)

Given two strings s and t, return true if t is an anagram of s, and false otherwise.
An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

Example 1:
Input: s = "anagram", t = "nagaram"
Output: true

Example 2:
Input: s = "rat", t = "car"
Output: false


Constraints:
1 <= s.length, t.length <= 5 * 104
s and t consist of lowercase English letters.

@param s The first input string to check for anagram.
@param t The second input string to check for anagram.
@return True if s and t are anagram of each other, false otherwise.
 */

/**
 * Approach 1: Brute Force (Sort and Compare)
 * Time Complexity: O(nlogn), where n is the length of the longer of the two input strings
 * - Converting the strings to arrays takes O(n) time.
 * - Sorting the arrays takes O(nlogn) time.
 * - Comparing the two sorted arrays takes O(n) time.
 * - Therefore, the overall time complexity is O(nlogn).
 * Space Complexity: O(n).
 * - We need additional space to store two arrays.
 */
import java.util.*;

class Solution1 {
    public boolean isAnagram(String s, String t) {
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
}

/**
 * Approach 2: Two-Pass HashMap
 * Time Complexity: O(n), where n is the length of the longer of the two input strings.
 * - We traverse the string of length n twice, taking O(2n) time.
 * Space Complexity: O(n)
 * - We need additional space to store HashMap, taking O(2n) at most.
 */

class Solution2 {
    public boolean isAnagram(String s, String t) {
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
}

/**
 * Approach 3: Frequency Counter Array
 * Time Complexity: O(n), where n is the length of the longer of the two input strings.
 * - We traverse the string of length n only once, which takes O(n).
 * - Creating and looping over the counter array takes constant time, O(1).
 * - Therefore, the overall time complexity is O(n).
 * Space Complexity: O(1)
 * - We need additional space to store the counter array, which has a fixed size of 26.
 * - It does not depend on the size of the input strings.
 */

class Solution3 {
    public boolean isAnagram(String s, String t) {
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
}