/*
Binary search (half-interval search) is a search algorithm to find a specific element located in a sorted array.
It searches faster and more efficiently than a standard linear search due to dividing and conquering.
It divides our search in half each time we look for a target value.
We difine a middleIndex or midpoint from the element in the middle of the array (divide) to see if our target value is greater than or less than the middleIndex or midpoint.
Depending on if the target value is greater than or less than the middleIndex, we can remove the left or right of our array from our search (conquer).
*/

const numsArr = [1, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59];

const searchNum1 = 19;
const expected1 = true;

const searchNum2 = 30;
const expected2 = false;

const searchNum3 = 59;
const expected3 = true;

const searchNum4 = 6;
const expected = false;

function binarySearch (sortedNums, searchNum) {
    let startIdx = 0;
    let endIdx = sortedNums.length - 1;

    while (startIdx <= endIdx) {
        let midIdx = Math.floor((startIdx + endIdx) / 2);

        if (searchNum === sortedNums[midIdx]) {
            return true;
        }
        else if (searchNum > sortedNums[midIdx]) {
            startIdx = midIdx + 1;
        }
        else {
            endIdx = midIdx - 1;
        }
    }
    return false;
}

console.log(binarySearch(numsArr, searchNum1));
console.log(binarySearch(numsArr, searchNum2));
console.log(binarySearch(numsArr, searchNum3));
console.log(binarySearch(numsArr, searchNum4));