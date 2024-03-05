/*
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
*/

/*
 * Approach 1: Brute Force (Sorting)
 * Time complexity: O(nlogn)
 * - Sorting costs O(nlogn).
 * Space complexity: O(n)
 * - toCharArray() makes a copy of the string. But this can vary because it is Java dependent detail.
 */

// import java.util.Arrays;

// class Solution {
//     public boolean isAnagram(String s, String t) {
//         // If the two strings have different lengths, return false.
//         if (s.length() != t.length()) {
//             return false;
//         }

//         // Convert strings into arrays using toCharArray() method.
//         char[] sArr = s.toCharArray();
//         char[] tArr = t.toCharArray();

//         // Sort the arrays.
//         Arrays.sort(sArr);
//         Arrays.sort(tArr);

//         // Return boolean by comparing the two sorted arrays using equals() method.
//         return Arrays.equals(sArr, tArr);
//     }
// }

/*
 * Approach 2: HashMap
 * Time complexity: O(n)
 * - It traverses the string of the length n twice, which costs O(2n) time.
 * Space complexity: O(n)
 * - The space used by the HashMap can vary from O(n) to O(2n).
 */
// import java.util.Map;
// import java.util.HashMap;

// class Solution {
//     public boolean isAnagram(String s, String t) {
//         // If the two strings have different lengths, return false.
//         if (s.length() != t.length()) {
//             return false;
//         }

//         // Create an empty HashMap that has character as key and frequency as value.
//         Map<Character, Integer> map = new HashMap<>();

//         // Loop through the first string.
//         for (int i = 0; i < s.length(); i++) {
//             // Increment the frequency of each character in the HashMap.
//             map.put(s.charAt(i), map.getOrDefault(s.charAt(i), 0) + 1);
//         }

//         // Loop through the second string.
//         for (int i = 0; i < t.length(); i++) {
//             // Decrement the frequency of each character in the HashMap.
//             map.put(t.charAt(i), map.getOrDefault(t.charAt(i), 0) - 1);

//             // If the frequency becomes below zero, return false.
//             if (map.get(t.charAt(i)) < 0) {
//                 return false;
//             }
//         }
//         // Else, return true.
//         return true;
//     }
// }

/*
 * Approach 3: Frequency Counter Array
 * Time complexity: O(n)
 * - It traverses the string of the length n once, and accessing the counter array is a constant time operation.
 * Space complexity: O(1)
 * - The space used by the counter stays constant no matter how large n is.
 */
class Solution {
    public boolean isAnagram(String s, String t) {
        // If the two strings have different lengths, return false.
        if (s.length() != t.length()) {
            return false;
        }

        // Create a frequency counter for characters `a` to `z`.
        int[] counter = new int[26];

        // Loop over the two strings to increment and decrement the frequency of characters at the same time.
        for (int i = 0; i < s.length(); i++) {
            // Increment the count of characters in the first string.
            // Subtract 'a', which is equal to 97, to find the index in the counter starting from the index 0.
            counter[s.charAt(i) - 'a']++;
            // Decrement the count of characters in the second string.
            counter[t.charAt(i) - 'a']--;
        }

        // Loop over the counter to check if there is any negative frequency.
        for (int val: counter) {
            // If any negative frequency is found, return false.
            if (val < 0) {
                return false;
            }
        }
        // Else, return true.
        return true;
    }
}