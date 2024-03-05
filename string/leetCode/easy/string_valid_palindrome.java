/*
Valid Palindrome (Difficulty: Easy)

A phrase is a palindrome if, after converting all uppercase letters into lowercase letters
and removing all non-alphanumeric characters, it reads the same forward and backward.
Alphanumeric characters include letters and numbers.

Given a string s, return true if it is a palindrome, or false otherwise.

Example 1:
Input: s = "A man, a plan, a canal: Panama"
Output: true
Explanation: "amanaplanacanalpanama" is a palindrome.

Example 2:
Input: s = "race a car"
Output: false
Explanation: "raceacar" is not a palindrome.

Example 3:
Input: s = " "
Output: true
Explanation: s is an empty string "" after removing non-alphanumeric characters.
Since an empty string reads the same forward and backward, it is a palindrome.

Constraints:
1 <= s.length <= 2 * 105
s consists only of printable ASCII characters.
 */

/*
 * Approach 1: Reverse and Compare
 * Time complexity: O(n)
 * - We traverse the string thrice (converting, reversing, and comparing). Each iteration runs linear in time.
 * Space complexity: O(n)
 * - We need O(2n) additional space to store the filtered string and the reversed string.
 */

// class Solution {
//     public boolean isPalindrome(String s) {
//         // Create an empty StringBuilder object.
//         StringBuilder sb = new StringBuilder();

//         // Convert the string into an array of all lowercase characters
//         // and loop through the array.
//         for (char ch : s.toLowerCase().toCharArray()) {
//             // If each character is alphanumeric, append it to the StringBuilder object.
//             if (Character.isLetterOrDigit(ch)) {
//                 sb.append(ch);
//             }
//         }

//         // Convert the StringBuilder to string.
//         String filteredStr = sb.toString();
//         // Get a reversed string.
//         String reversedStr = sb.reverse().toString();

//         // Compare the two strings and return boolean.
//         return filteredStr.equals(reversedStr);
//     }
// }

/*
 * Approach 2: Two Pointers
 * Time complexity: O(n)
 * - We traverse the string thrice (converting, reversing, and comparing). Each iteration runs linear in time.
 * Space complexity: O(n)
 * - We need O(2n) additional space to store the filtered string and the reversed string.
 */

class Solution {
    public boolean isPalindrome(String s) {
        // Create an empty StringBuilder object.
        StringBuilder sb = new StringBuilder();

        // Convert the string into an array of all lowercase characters
        // and loop through the array.
        for (char ch : s.toLowerCase().toCharArray()) {
            // If each character is alphanumeric, append it to the StringBuilder object.
            if (Character.isLetterOrDigit(ch)) {
                sb.append(ch);
            }
        }

        // Set start and end pointers.
        int startIdx = 0;
        int endIdx = sb.length() - 1;

        // Loop through the StringBuilder while the start pointer is smaller than the end pointer
        while (startIdx < endIdx) {
            // If the character at the start pointe is not equal to the character at the end pointer, return false.
            if (sb.charAt(startIdx) != sb.charAt(endIdx)) {
                return false;
            }

            // Increment the start pointer and decrement the end pointer by 1.
            startIdx++;
            endIdx--;
        }
        // Else, return true.
        return true;
    }
}