/**
 * Add params if needed for recursion
 * Recursively sums the given array.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} nums
 * @returns {number} The sum of the given nums.
*/

const nums1 = [1, 2, 3];
const expected1 = 6;

const nums2 = [1];
const expected2 = 1;

const nums3 = [];
const expected3 = 0;

function recursiveSumArr (nums, idx = 0) {
    if (nums.length === 0) {
        return 0;
    };

    if (idx === nums.length - 1) {
        return nums[idx];

    }
    return nums[idx] + recursiveSumArr(nums, idx += 1);
}

console.log(recursiveSumArr(nums1));
console.log(recursiveSumArr(nums2));
console.log(recursiveSumArr(nums3));

/*****************************************************************************/

/**
 * Recursively sum the given int and every previous positive int.
 * - Time: O(?).
 * - Space: O(?).
 * @param {number} num
 * @returns {number}
 */

const two_num1 = 5;
const two_expected1 = 15;
// Explanation: (1+2+3+4+5)

const two_num2 = 2.9;
const two_expected2 = 3;
// Explanation: (1+2)

const two_num3 = -1;
const two_expected3 = 0;

function recursiveSigma (num) {
    num = Math.floor(num);

    if (num < 1) {
        return 0;
    }

    return num + recursiveSigma(num - 1);
}

console.log(recursiveSigma(two_num1))
console.log(recursiveSigma(two_num2))
console.log(recursiveSigma(two_num3))