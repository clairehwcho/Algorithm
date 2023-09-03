/*
Encode and Decode Strings (Difficulty: Medium)

Design an algorithm to encode a list of strings to a string. The encoded string is then sent over the network and is decoded back to the original list of strings.

Machine 1 (sender) has the function:

string encode(vector<string> strs) {
  // ... your code
  return encoded_string;
}
Machine 2 (receiver) has the function:
vector<string> decode(string s) {
  //... your code
  return strs;
}
So Machine 1 does:

string encoded_string = encode(strs);
and Machine 2 does:

vector<string> strs2 = decode(encoded_string);
strs2 in Machine 2 should be the same as strs in Machine 1.

Implement the encode and decode methods.

You are not allowed to solve the problem using any serialize methods (such as eval).

Constraints:

1 <= strs.length <= 200
0 <= strs[i].length <= 200
strs[i] contains any possible characters out of 256 valid ASCII characters.
*/

const input1 = ["Hello", "World"];
const output1 = ["Hello", "World"];

const input2 = [""];
const output2 = [""];

/**
 * Encodes a list of strings to a single string.
 *
 * @param {string[]} strs
 * @return {string}
 */
var encode = function (strs) {
    let encodedStr = "";

    for (const s of strs) {
        encodedStr += s.replace("/", "//") + "/:";
    };
    return encodedStr;
};

/**
 * Decodes a single string to a list of strings.
 *
 * @param {string} s
 * @return {string[]}
 */
var decode = function (s) {
    let decodedArr = [];
    let currStr = "";

    let i = 0;
    while (i < s.length) {
        const currChar = s[i];
        const nextChar = s[i + 1];

        if (i + 1 < s.length && currChar === "/" && nextChar === ":") {
            decodedArr.push(currStr);
            currStr = "";
            i += 2;
        }
        else if (i + 1 < s.length && currChar === "/" && nextChar === "/") {
            currStr += "/";
            i += 2;
        }
        else {
            currStr += currChar;
            i++;
        }
    }
    return decodedArr;
};

/**
 * Your functions will be called as such:
 * decode(encode(strs));
 */

console.log(decode(encode(input1)));
console.log(decode(encode(input2)));