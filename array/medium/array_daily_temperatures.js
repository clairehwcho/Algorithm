/*
Daily Temperatures (Difficulty: Medium)

Given an array of integers temperatures represents the daily temperatures, return an array answer such that answer[i] is the number of days you have to wait after the ith day to get a warmer temperature. If there is no future day for which this is possible, keep answer[i] == 0 instead.

Constraints:
1 <= temperatures.length <= 105
30 <= temperatures[i] <= 100
*/

const temperatures1 = [73, 74, 75, 71, 69, 72, 76, 73];
const expected1 = [1, 1, 4, 2, 1, 1, 0, 0];

const temperatures2 = [30, 40, 50, 60];
const expected2 = [1, 1, 1, 0];

const temperatures3 = [30, 60, 90];
const expected3 = [1, 1, 0];

/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
const dailyTemperatures = function (temperatures) {
    let len = temperatures.length;
    let answer = new Array(len).fill(0);

    for (let i = 0; i < len; i++) {
        let currentTemp = temperatures[i];

        for (let j = i + 1; j < len; j++) {
            let futureTemp = temperatures[j];

            if (currentTemp < futureTemp) {
                answer[i] = j - i;
                break;
            };
        };
    };
    return answer;
};

console.log(dailyTemperatures(temperatures1));
console.log(dailyTemperatures(temperatures2));
console.log(dailyTemperatures(temperatures3));