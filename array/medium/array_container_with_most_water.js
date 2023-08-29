/*
Container With Most Water (Difficulty: Medium)

You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).

Find two lines that together with the x-axis form a container, such that the container contains the most water.

Return the maximum amount of water a container can store.

Notice that you may not slant the container.

Constraints:

n == height.length
2 <= n <= 105
0 <= height[i] <= 104
*/

const height1 = [1, 8, 6, 2, 5, 4, 8, 3, 7];
const expected1 = 49;

const height2 = [1, 1];
const expected2 = 1;

/**
 * @param {number[]} height
 * @return {number}
 */
const maxArea = function (height) {
    let maxArea = 0;
    let left = 0;
    let right = height.length - 1;

    while (left < right) {
        let containerWidth = right - left;
        let containerHeight = Math.min(height[left], height[right]);
        let currArea = containerWidth * containerHeight;
        maxArea = Math.max(maxArea, currArea);
        if (height[left] <= height[right]) {
            left++;
        } else {
            right--;
        }
    }
    return maxArea;
};

console.log(maxArea(height1));
console.log(maxArea(height2));
