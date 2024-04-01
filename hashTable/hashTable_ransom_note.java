/**
Ransome Note (Difficulty: Easy)

Given two strings ransomNote and magazine, return true if ransomNote can be constructed by using the letters from magazine and false otherwise.
Each letter in magazine can only be used once in ransomNote.

Example 1:
Input: ransomNote = "a", magazine = "b"
Output: false

Example 2:
Input: ransomNote = "aa", magazine = "ab"
Output: false

Example 3:
Input: ransomNote = "aa", magazine = "aab"
Output: true

Constraints:
1 <= ransomNote.length, magazine.length <= 105
ransomNote and magazine consist of lowercase English letters.

@param ransomNote The input string that can be constructed using characters from the magazine string.
@param magazine the input string that can be used to construct the ransomNote string.
@return True if ransomNote can be constructed by using the letters from magazine, false otherwise.
 */

/**
 * Approach 1: Brute Force (Nested Loop)
 * Time Complexity: O(m*n), where m is the length of the ransomNote, and n is the length of the magazine.
 * - It takes O(m) time to iterate through the outer loop, the ransomNote.
 * - It takes O(n) time at most for each character in the ransomNote to iterate through the inner loop, the magazine.
 * - Therefore, the overall time complexity is O(m*n).
 * Space Complexity: O(n)
 * - We need additional linear space for two arrays and a constant space for flag variable.
 */
import java.util.*;

class Solution1 {
    public boolean canConstruct(String ransomNote, String magazine) {
        // If ransomNote has a greater length than a magazine, return false.
        if (ransomNote.length() > magazine.length()) {
            return false;
        }

        // Convert the strings to character arrays.
        char[] ransomNoteArr = ransomNote.toCharArray();
        char[] magazineArr = magazine.toCharArray();

        // Loop through the ransomeNote array.
        for (char ch : ransomNoteArr) {
            // Set a flag variable to check whether a character from the ransomNote
            // has been found in the magazine array.
            boolean found = false;
            // Loop through the magazine array.
            for (int i = 0; i < magazineArr.length; i++) {
                // If the character is found in the magazine array
                if (magazineArr[i] == ch) {
                    // Remove the character from the magazine.
                    magazineArr[i] = ' ';
                    // Change the flag variable.
                    found = true;
                    // Break out of the inner loop.
                    break;
                }
            }
            // If the flag variable is still false after iterating over the ransomNote, return false.
            if (!found) {
                return false;
            }
        }
        // Otherwise, return true.
        return true;
    }
}

/**
 * Approach 2: Two-Pass HashMap
 * Time Complexity: O(m + n), where m is the length of the ransomNote, and n is the length of the magazine.
 * - It takes O(m) time to traverse the ransomNote string.
 * - It takes O(n) time to traverse the magazine string.
 * - Therefore, the overall time complexity is O(m+n).
 * Space Complexity: O(m + n)
 * - In the worst case, if all characters are unique, it takes O(m + n) extra space for HashMap.
 */

class Solution2 {
    public boolean canConstruct(String ransomNote, String magazine) {
        // If ransomNote has a greater length than a magazine, return false.
        if (ransomNote.length() > magazine.length()) {
            return false;
        }

        // Create an empty HashMap that has character as key and frequency as value.
        Map<Character,Integer> map = new HashMap<>();

        // Loop through the magazine string.
        for (int i = 0; i < magazine.length(); i++) {
            // Increment the frequency of each character in the HashMap.
            map.put(magazine.charAt(i), map.getOrDefault(magazine.charAt(i), 0) + 1);
        }

        // Loop through the ransomNote string.
        for (int i = 0; i < ransomNote.length(); i++) {
            // Decrement the frequency of each character in the HashMap.
            map.put(ransomNote.charAt(i), map.getOrDefault(ransomNote.charAt(i), 0) - 1);
            // If the frequency becomes below zero, return false.
            if (map.get(ransomNote.charAt(i)) < 0) {
                return false;
            }
        }
        // Otherwise, return true.
        return true;
    }
}

/**
 * Approach 3: Frequency Counter Array
 * Time Complexity: O(n), where n is the length of the magazine.
 * - It takes O(n) time to traverse the magazine string.
 * - It takes O(1) time to traverse the counter with a fixed size.
 * - Therefore, the overall time complexity is O(n).
 * Space Complexity: O(1)
 * - We need additional space to store the counter array, which has a fixed size of 26.
 * - It does not depend on the size of the input strings.
 */

class Solution3 {
    public boolean canConstruct(String ransomNote, String magazine) {
        // If ransomNote has a greater length than a magazine, return false.
        if (ransomNote.length() > magazine.length()) {
            return false;
        }

        // Create an array of integer (frequency counter) for characters `a` to `z`.
        int[] counter = new int[26];

        // Loop over the two strings to update the counter at once.
        for (int i = 0; i < magazine.length(); i++) {
            // Increment the frequency of each character in the magazine string.
            char magazineChar = magazine.charAt(i);
            counter[magazineChar - 'a']++;
            // Decrement the frequency of each character in the ransomNote string, while i is within bounds of the length of the string.
            if (i < ransomNote.length()) {
                char ransomChar = ransomNote.charAt(i);
                counter[ransomChar - 'a']--;
            }
        }
        // Loop over the counter to check if there is any negative frequency.
        for (int freq : counter) {
            // If any negative frequency is found, return false.
            if (freq < 0) {
                return false;
            }
        }
        // Otherwise, return true.
        return true;
    }
}