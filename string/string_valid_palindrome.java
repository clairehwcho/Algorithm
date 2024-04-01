/**
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

@param s The input string to check for palindrome
@return True if the input string is a palindrome, false otherwise.
 */

/**
 * Approach 1: Brute Force (Reverse and Compare)
 * Time Complexity: O(n), where n is the length of the string s.
 * - Converting the string to lowercase and iterating through it to filter out non-alphanumeric characters takes O(n).
 * - Reversing the StringBuilder using reverse() takes O(n/2), where n is the length of the filtered string.
 * - Comparing the two strings using equals() also takes O(n), where n is the length of the filtered string.
 * - Therefore, the overall time complexity of the solution is O(n).
 * Space Complexity: O(n)
 * - We need O(3n) additional space to store the StringBuilder, filtered string and the reversed string, each with a maximum length of n.
 */
class Solution1 {
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

        // Convert the StringBuilder to string.
        String filteredStr = sb.toString();
        // Get a reversed string.
        String reversedStr = sb.reverse().toString();

        // Compare the two strings and return boolean.
        return filteredStr.equals(reversedStr);
    }
}

/**
 * Approach 2:  Convert and Compare with Two Pointers
 * Time Complexity: O(n), where n is the length of the string s.
 * - Converting the string to lowercase and iterating through it to filter out non-alphanumeric characters takes O(n).
 * - The two-pointer approach inside the while loop takes O(n/2), which simplifies to O(n).
 * - Therefore, the overall time complexity of the solution is O(n).
 * Space Complexity: O(n)
 * - We need O(n) additional space to store the StringBuilder and two pointers.
 */

class Solution2 {
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

        // Set two pointers.
        int startIdx = 0;
        int endIdx = sb.length() - 1;

        // Loop through the StringBuilder while the start pointer is smaller than the end pointer.
        while (startIdx < endIdx) {
            // If the two characters at each pointer are not equal, return false.
            if (sb.charAt(startIdx) != sb.charAt(endIdx)) {
                return false;
            }

            // Increment the start pointer and decrement the end pointer by 1.
            startIdx++;
            endIdx--;
        }
        // Otherwise, return true.
        return true;
    }
}

/**
 * Approach 3:  One-Pass Two Pointers
 * Time Complexity: O(n), where n is the length of the string s.
 * - We traverse the string only once with two pointers.
 * Space Complexity: O(1)
 * - We only need a constant amount of extra space for the two integer variables (pointers), regardless of the size of the input.
 */

class Solution3 {
    public boolean isPalindrome(String s) {
        // Set two pointers.
        int startIdx = 0;
        int endIdx = s.length() - 1;

        // Loop through the string while the start pointer is smaller than the end pointer.
        while (startIdx < endIdx) {
            // If the character at the start pointer is not alphanumeric, increment the pointer by 1.
            if (!Character.isLetterOrDigit(s.charAt(startIdx))){
                startIdx++;
            }
            // Else if the character at the end pointer is not alphanumeric, decrement the pointer by 1.
            else if (!Character.isLetterOrDigit(s.charAt(endIdx))){
                endIdx--;
            }
            // Else if the two lowercased, alphanumeric characters at the two pointers are not equal, return false.
            else if (Character.toLowerCase(s.charAt(startIdx)) != Character.toLowerCase(s.charAt(endIdx))){
                return false;
            }
            // Else, increment the start pointer and decrement the end pointer by 1.
            else {
                startIdx++;
                endIdx--;
            }
        }
        // Otherwise, return true.
        return true;
    }
}