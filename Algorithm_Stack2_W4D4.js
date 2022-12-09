/*
  Sum To One Digit
  Implement a function sumToOne(num)​ that,
  given a number, sums that number’s digits
  repeatedly until the sum is only one digit. Return
  that final one digit result.
  Tips:
    to access digits from a number, need to convert it .toString() to access each digit via index
    parseInt(arg) returns arg parsed as an integer, or NaN if it couldn't be converted to an int
    isNaN(arg) used to check if something is NaN
*/

const num1 = 5;
const expected1 = 5;

const num2 = 10;
const expected2 = 1;

const num3 = 25;
const expected3 = 7;

const num4 = 158324;
const expected4 = 5;

/**
 * Sums the given number's digits until the number becomes one digit.
 * @param {number} num The number to sum to one digit.
 * @returns {number} One digit.
 */
function sumToOneDigit (num) {
    var str = num.toString()
    var sum = 0
    if (num < 10) return num
    for (var i = 0; i < str.length; i++) {
        sum += parseInt(str[i])
    }
    if (sum >= 10) {
        sum = sumToOneDigit(sum)
    }
    return sum
}

console.log(sumToOneDigit(num1));
console.log(sumToOneDigit(num2));
console.log(sumToOneDigit(num3));
console.log(sumToOneDigit(num4));

// toString(): convert a string object into a string
// parseInt():parses a string argument and returns an integer of the specified radix (the base in mathematical numeral systems).
// isNan(arg): check if something is not a number

/*****************************************************************************/

/*
  String Anagrams
  Given a string,
  return array where each element is a string representing a different anagram (a different sequence of the letters in that string).
  Ok to use built in methods
*/

const two_str1 = "lim";
const two_expected1 = ["ilm", "iml", "lim", "lmi", "mil", "mli"];
// Order of the output array does not matter

/**
 * Add params if needed for recursion.
 * Generates all anagrams of the given str.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} str
 * @returns {Array<string>} All anagrams of the given str.
 */
function generateAnagrams (str) {
    str = str.split("").sort();
    newstr = ''
    result = []
    if (str.length < 2) return str
    for (var i = 0; i < str.length; i++) {
        newstr += generateAnagrams(str[i])
    }
    result.push(newstr)
    return result
}

console.log(generateAnagrams(two_str1));

// sort(): sorts the elements of an array, overwrites the original array, sorts the elements as strings in alphabetical and ascending order.