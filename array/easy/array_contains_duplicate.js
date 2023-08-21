/*
Contains Duplicate (Difficulty: Easy)

Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

Constraints:
1 <= nums.length <= 105
-109 <= nums[i] <= 109
*/

const nums1 = [1, 2, 3, 1];
const expected1 = true;

const nums2 = [1, 2, 3, 4];
const expected2 = false;

const nums3 = [1, 1, 1, 3, 3, 4, 3, 2, 4, 2];
const expected3 = true;

/**
 * @param {number[]} nums
 * @return {boolean}
 */

// Solution #1: Naive Linear Search
// const containsDuplicate = function (nums) {
//     for (let i = 0; i < nums.length; i++) {
//         const currentNum = nums[i];
//         for (let j = i + 1; j < nums.length; j++) {
//             const nextNum = nums[j];
//             if (currentNum === nextNum){
//                 return true;
//             }
//         }
//     }
//     return false;
// };

// Solution #2: Using sorting
// const containsDuplicate = function (nums) {
//     nums.sort();

//     for (let i = 0; i < nums.length - 1; i++) {
//         const currentNum = nums[i];
//         const nextNum = nums[i + 1];

//         if (currentNum === nextNum) {
//             return true;
//         }
//     }
//     return false;
// };

// Solution #3: Using hashmap
const containsDuplicate = function (nums) {
    let hashmap = {};

    for (let i = 0; i < nums.length; i++) {
        const currentNum = nums[i];

        if (hashmap.hasOwnProperty(currentNum)) {
            return true;
        }
        else {
            hashmap[currentNum] = 1;
        }
    }
    return false;
};

console.log(containsDuplicate(nums1));
console.log(containsDuplicate(nums2));
console.log(containsDuplicate(nums3));