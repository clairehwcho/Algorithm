// Given an unordered array of numbers, find the missing number from the array.

const arr1 = [3,1,5,6,2];
const expected1 = 4

const arr2 = [7,4,2,5,1,4,9,8];
const expected2 = 6;


function missingValue (unorderedNums) {
    //Your code here
    let expected = 0;
    let sum = 0;
    let min = unorderedNums[0];
    let max = unorderedNums[0];

    for (let num of unorderedNums) {
        sum = sum + num
        //sum += num
        if (min > num) min = num
        if (max < num) max = num
    }
    for (let i = min; i <= max; i++) {
        expected += i;
    }
    if (expected == sum) {
        return null
    }
    let difference = expected - sum
    return difference
}