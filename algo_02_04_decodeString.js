/**
 * Decodes the given string by duplicating each character by the following int
 * amount if there is an int after the character.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} str An encoded string with characters that may have an int
 *    after indicating how many times the character occurs.
 * @returns {string} The given str decoded / expanded.
 */

const two_str1 = "a3b2c1d3";
const two_expected1 = "aaabbcddd";

const two_str2 = "a3b2c12d10";
const two_expected2 = "aaabbccccccccccccdddddddddd";



function decodeStr (str) {
    let result = "";
    for (let i = 0; i < str.length; i++) {
        let count = "";
        let currentChar = str[i];
        while (!isNaN(str[i + 1]) && i < str.length) {
            count += str[i + 1];
            i++;
        }
        result += currentChar.repeat(parseInt(count));
        // Same as:
        // for (let j = 0; j < parseInt(count); j++) {
        //     result += currentLetter;
        // }
    }
    return result;
}

console.log(decodeStr(two_str1))
console.log(decodeStr(two_str2))