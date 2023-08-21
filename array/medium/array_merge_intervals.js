/*
Merge Intervals (Difficulty: Medium)
Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.

Constraints:
1 <= intervals.length <= 104
intervals[i].length == 2
0 <= starti <= endi <= 104
*/

const intervals1 = [[1, 3], [2, 6], [8, 10], [15, 18]];
const expected1 = [[1, 6], [8, 10], [15, 18]];

const intervals2 = [[1, 4], [4, 5]];
const expected2 = [[1, 5]];

/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
const merge = function (intervals) {
    let resultArray = [];
    intervals.sort((a, b) => a[0] - b[0]);

    if (intervals.length === 0) {
        return resultArray;
    }

    let temp = intervals[0];

    for (let i = 0; i < intervals.length; i++) {
        const currentInterval = intervals[i];
        if (currentInterval[0] <= temp[1]) {
            temp[1] = Math.max(temp[1], currentInterval[1]);
        }
        else {
            resultArray.push(temp);
            temp = intervals[i];
        };
    };
    resultArray.push(temp);

    return resultArray;
};

console.log(merge(intervals1));
console.log(merge(intervals2));