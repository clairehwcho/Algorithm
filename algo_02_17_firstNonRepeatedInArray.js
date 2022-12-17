// Find the first non-repeating number in a given array of integers.

const arr1 = [-1, 2, -1, 3, 0];
const expected1 = 2;

const arr2 = [9, 4, 9, 6, 7, 4];
const expected2 = 6

const arr3 = [9, 4, 9, 4];
const expected3 = null;

function firstNonRepeated (arr) {
    let resultNum = arr[0];
    let freqTable = {};

    for (let i = 0; i < arr.length; i++) {
        let key = arr[i];
        if (freqTable.hasOwnProperty(key)) {
            freqTable[key]++;
        }
        else {
            freqTable[key] = 1;
        }
    }

    for (let j = 0; j < arr.length; j++) {
        let key = arr[j];
        if (freqTable[key] === 1) {
            resultNum = parseInt(key);
            return resultNum;
        }
    }
    return null;

    // Alternative:
    // for (let i = 0; i < arr.length; i++) {
    //     let currentNum = arr[i];
    //     let isMatch = false;
    //     let j = 0;
    //     while (j < arr.length) {
    //         if (j === i) {
    //             j++;
    //             continue;
    //         }
    //         if (currentNum === arr[j]) {
    //             isMatch = true;
    //         }
    //         j++;
    //     }
    //     if (!isMatch) {
    //         return currentNum;
    //     }
    // }
    // return null;
}

console.log(firstNonRepeated(arr1));
console.log(firstNonRepeated(arr2));
console.log(firstNonRepeated(arr3));