/*
Count Positives (Difficulty: Easy)

Count the number of positive numbers in an array
*/

const arr1 = [3, 4, -2, 7, 16, -8, 0];

const countPositives = (arr) => {
    let count = 0;
    let i = 0;

    while (i < arr.length) {
        if (arr[i] > 0) {
            count++;
        }
        i++;
    }
    return count;
};

console.log(countPositives(arr1));