/*
 * Is Unique:
 * Implement an algorithm to determine if all characters in a string are unique.
 * What if you cannot use additional data structures?
 *
 * Before writing your codes, first ask your interviewer if the string is an ASCII string or a Unicode string.
 * ASCII (American Standard Code for Information Interchange) which supports 128 characters is a subset of Unicode which supports a wider range of characters.
 * We'll assume for simplicity the character set is ASCII. If this assumption is not valid, we would need to increase the storage size.
 */

class Solution {
    /*
     * Approach 1: Using an array of booleans
     * Time complexity: O(n)
     * - You could also argue that the time complexity is O(1)
     *   because the for loop will never iterate through more than 128 characters.
     * Space complexity: O(1)
     * If you didn't want to assume the character set is fixed,
     * you could express the complexity as O(min(c, n)) time or O(c) time and O(c) space,
     * where c is the size of the character set.
     */
    public boolean isUniqueChars(String str) {
        // Return false if the string length exceeds the number of unique characters in
        // the alphabet.
        if (str.length() > 128)
            return false;

        // Initialize a boolean array.
        boolean[] char_set = new boolean[128];
        // Loop through the string to check each char.
        for (int i = 0; i < str.length(); i++) {
            int val = str.charAt(i);
            // Return false if the val is already found in the string.
            if (char_set[val])
                return false;
            char_set[val] = true;
        }
        return true;
    }

    /*
     * Approach 2: Using a bit masking (space optimization)
     * Time complexity:
     * Space complexity:
     * - We can reduce the space usage by a factor of eight by using a bit vector.
     * - We will assume that the string only uses the lowercase letters a through z to allow us to use just a single int.
     *   because integer gets 32 bits of space for Java and the number of lower case alphabets is 26.
     */
    public boolean isUniqueCharsWithBitMasking(String str){
        // checker is the bit array.
        // 0 if the character is not found or 1 if the character if found.
        int checker = 0;
        // Loop through the string to check each char.
        for (int i = 0; i<str.length(); i++){
            // Subtract the ASCII value of the character 'a' from the the value of the character at index i.
            int val = str.charAt(i) - 'a';
            if ((checker & (1 << val)) > 0){
                return false;
            }
            checker |= (1 << val);
        }
        return true;
    }
}
