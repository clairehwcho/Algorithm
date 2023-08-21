/*
Non-overlapping Intervals (Difficulty: Medium)

Given an array of intervals intervals where intervals[i] = [starti, endi], return the minimum number of intervals you need to remove to make the rest of the intervals non-overlapping.

Constraints:
1 <= intervals.length <= 105
intervals[i].length == 2
-5 * 104 <= starti < endi <= 5 * 104
*/

const intervals1 = [[1, 2], [2, 3], [3, 4], [1, 3]];
const expected1 = 1;

const intervals2 = [[1, 2], [1, 2], [1, 2]];
const expected2 = 2;

const intervals3 = [[1, 2], [2, 3]];
const expected3 = 0;

/**
 * @param {number[][]} intervals
 * @return {number}
 */
const eraseOverlapIntervals = function (intervals) {
    let minNum = 0;

    intervals.sort((a, b) => a[1] - b[1]);

    let prevEnd = intervals[0][1];

    for (let i = 1; i < intervals.length; i++) {
        const currentStart = intervals[i][0];
        const currentEnd = intervals[i][1];

        if (prevEnd > currentStart) {
            minNum++;
        }
        else {
            prevEnd = currentEnd;
        }
    }
    return minNum;
};

console.log(eraseOverlapIntervals(intervals1));
console.log(eraseOverlapIntervals(intervals2));
console.log(eraseOverlapIntervals(intervals3));