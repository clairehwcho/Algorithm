/*
Maximum Product Subarray (Difficulty: Medium)

Given an integer array nums, find a
subarray that has the largest product, and return the product.
The test cases are generated so that the answer will fit in a 32-bit integer.

Constraints:
1 <= nums.length <= 2 * 104
-10 <= nums[i] <= 10
The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.
*/


const nums1 = [2, 3, -2, 4];
const expected1 = 6;

const nums2 = [-2, 0, -1];
const expected2 = 0;

/**
 * @param {number[]} nums
 * @return {number}
 */

const maxProduct = function (nums) {
    if (nums.length === 0) return 0;

    let prevMax = nums[0];
    let prevMin = nums[0];
    let maxProduct = prevMax;

    for (let i = 1; i < nums.length; i++) {
        let currNum = nums[i];
        let currMax = Math.max(currNum, prevMin * currNum, prevMax * currNum);
        prevMin = Math.min(currNum, prevMin * currNum, prevMax * currNum);
        prevMax = currMax;
        maxProduct = Math.max(maxProduct, prevMax)
    };
    return maxProduct;
};

console.log(maxProduct(nums1));
console.log(maxProduct(nums2));