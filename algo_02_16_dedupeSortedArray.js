// Remove duplicates from sorted array.

const arr1 = [1, 1, 1, 1];
const expected1 = [1];

const arr2 = [1, 1, 2, 3];
const expected2 = [1, 2, 3];

const arr3 = [1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4];
const expected3 = [1, 2, 3, 4];

const arr4 = [1];
const expected4 = [1];

function dedupeSorted (arr) {
    let resultArr = [];

    if (arr.length === 1) {
        return arr;
    }
    else {
        for (let i = 0; i < arr.length; i++) {
            let currentNum = arr[i];
            let nextNum = arr[i + 1];

            if (currentNum !== nextNum) {
                resultArr.push(currentNum);
            }
        }
    }
    return resultArr;
}

console.log(dedupeSorted(arr1));
console.log(dedupeSorted(arr2));
console.log(dedupeSorted(arr3));
console.log(dedupeSorted(arr4));