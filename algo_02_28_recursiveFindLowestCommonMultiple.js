/*
Recursively find the lowest common multiple between two numbers
"A common multiple is a number that is a multiple of two or more integers.
The common multiples of 3 and 4 are 0, 12, 24, ....
The least common multiple (LCM) of two numbers is the smallest
number (not zero) that is a multiple of both."

Try writing two columns of multiples as a starting point:
starting with 15 and 25 and keep writing their multiples until you find the
lowest common one then turn this in to a step by step instruction
15 25
30 50
45 75
60
75
75 is the first common
*/

const numA1 = 1;
const numB1 = 1;
const expected1 = 1;

const numA2 = 5;
const numB2 = 10;
const expected2 = 10;

const numA3 = 10;
const numB3 = 5;
const expected3 = 10;

const numA4 = 6;
const numB4 = 8;
const expected4 = 24;

const numA5 = 15;
const numB5 = 25;
const expected5 = 75;

/**
 * Add params if needed for recursion
 * Finds the lowest common multiple of the two given ints.
 * @param {number} a
 * @param {number} b
 * @returns {number} The lowest common multiple of the given ints.
 */
function recursiveLowestCommonMultiple (a, b, a2 = a) {
    if (a % b === 0) {
        return a;
    }
    else {
        return recursiveLowestCommonMultiple(a + a2, b, a2);
    }
};

console.log(recursiveLowestCommonMultiple(numA1, numB1));
console.log(recursiveLowestCommonMultiple(numA2, numB2));
console.log(recursiveLowestCommonMultiple(numA3, numB3));
console.log(recursiveLowestCommonMultiple(numA4, numB4));
console.log(recursiveLowestCommonMultiple(numA5, numB5));