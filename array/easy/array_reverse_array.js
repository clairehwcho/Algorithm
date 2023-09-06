/*
Reverse Array (Difficulty: Easy)

Reverse an array.
*/

const arr1 = ["a", "b", "c", "d", "e"];
const expected1 = ["e", "d", "c", "b", "a"];

const arr2 = ["a", "b", "c", "d", "e", "f"];
const expected2 = ["f", "e", "d", "c", "b", "a"];

const reverseArr = (arr) => {
    let result = [];

    let i = arr.length - 1;
    while (i >= 0) {
        result.push(arr[i]);
        i--;
    };

    return result;
};

console.log(reverseArr(arr1));
console.log(reverseArr(arr2));