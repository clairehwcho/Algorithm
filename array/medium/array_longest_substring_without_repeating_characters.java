/*
Longest Substring Without Repeating Characters (Difficulty: Medium)
Given a string s, find the length of the longest substring without repeating characters.

Example 1:
Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.

Example 2:
Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.

Example 3:
Input: s = "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.

Constraints:
0 <= s.length <= 5 * 104
s consists of English letters, digits, symbols and spaces.
*/

/*
 * Approach 1: Brute Force using HashSet
 * Time complexity: O(n^3)
 * Space complexity: O(min(n,m))
 * - The size of the Set is upper bounded by the size of the string n and the size of the charset/alphabet m.
 */

// class Solution {
//     public int lengthOfLongestSubstring(String s){
//         int n = s.length();
//         int maxLen = 0;

//         for (int i = 0; i < n; i++){
//             for (int j = i; j < n; j++) {
//                 if (!containsDuplicate(s, i, j)) {
//                     maxLen = Math.max(maxLen, j - i + 1);
//                 }
//             }
//         }
//         return maxLen;
//     }

//     private boolean containsDuplicate(String s, int start, int end) {
//         Set<Character> chars = new HashSet<>();

//         for (int i = start; i <= end; i++) {
//             char c = s.charAt(i);
//             if (chars.contains(c)){
//                 return true;
//             }
//             chars.add(c);
//         }
//         return false;
//     }
// }

/*
 * Approach 2: Sliding Window using HashSet
 * Time complexity: O(n)
 * Space complexity: O(min(n,m))
 */

//  class Solution {
//     public int lengthOfLongestSubstring(String s){
//         Set<Character> set = new HashSet<>();
//         int start = 0;
//         int end = 0;
//         int maxLen = 0;

//         while (start <= end && end < s.length()) {
//             if (!set.contains(s.charAt(end))){
//                 set.add(s.charAt(end));
//                 maxLen = Math.max(maxLen, set.size());
//                 end++;
//             }
//             else {
//                 set.remove(s.charAt(start));
//                 start++;
//             }
//         }
//         return maxLen;
//     }
// }

/*
 * Approach 3: Sliding Window using HashMap
 * Time complexity: O(n)
 * Space complexity: O(min(n,m))
 */
import java.util.HashMap;
import java.util.Map;

class Solution {
    public int lengthOfLongestSubstring(String s) {
        Map<Character, Integer> map = new HashMap<>();
        int start = 0;
        int end = 0;
        int maxLen = 0;

        while (start <= end && end < s.length()) {
            if (map.containsKey(s.charAt(end))) {
                start = Math.max(start, map.get(s.charAt(end)) + 1);
            }
            map.put(s.charAt(end), end);
            maxLen = Math.max(maxLen, end - start + 1);
            end++;
        }
        return maxLen;
    }
}

