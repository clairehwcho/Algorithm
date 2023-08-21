/*
Product of Array Except Self (Difficulty: Medium)

Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].
The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.
You must write an algorithm that runs in O(n) time and without using the division operation.

Constraints:
2 <= nums.length <= 105
-30 <= nums[i] <= 30
The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.
*/

const nums1 = [1, 2, 3, 4];
const expected1 = [24, 12, 8, 6];

const nums2 = [-1, 1, 0, -3, 3];
const expected2 = [0, 0, 9, 0, 0];

/**
 * @param {number[]} nums
 * @return {number[]}
 */
const productExceptSelf = function (nums) {
    let answer = [];

    for (let i = 0; i < nums.length; i++) {
        let product = 1;
        for (let j = 0; j < nums.length; j++) {
            if (j !== i) {
                product *= nums[j];
            };
        }
        answer.push(product);
    };
    return answer;
};

console.log(productExceptSelf(nums1));
console.log(productExceptSelf(nums2));