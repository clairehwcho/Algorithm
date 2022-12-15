// Given an unordered array of numbers, find the missing number from the array.

const arr1 = [3, 1, 5, 6, 2];
const expected1 = 4

const arr2 = [7, 4, 2, 5, 3, 9, 8];
const expected2 = 6;

const arr3 = [3, 5, 1, 2, 4];
const expected3 = null;


function missingValue (unorderedNums) {
    let min = unorderedNums[0];
    let max = unorderedNums[0];
    let sum = 0;
    let sumExpected = 0;
    let resultNum = 0;

    for (let i = 0; i < unorderedNums.length; i++) {
        let currentNum = unorderedNums[i];

        if (currentNum < min) {
            min = currentNum;
        }

        if (currentNum > max) {
            max = currentNum;
        }

        sum += currentNum;
    }

    for (let j = min; j <= max; j++) {
        let currentNum = j;
        sumExpected += currentNum;
    }

    resultNum = sumExpected - sum;
    if (resultNum === 0) {
        return null;
    }
    return resultNum;
}

console.log(missingValue(arr1));
console.log(missingValue(arr2));
console.log(missingValue(arr3));