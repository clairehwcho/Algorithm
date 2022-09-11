// Predict the output
var x = 5;

function setX (newValue) {
    x = newValue;
}

console.log("----------")
console.log(x);
setX(15);
console.log(x);
// OUTPUT: 5, 15, 5


// Predict the output
console.log("----------")
var x = 5;

function addToX (amount) {
    return x + amount;
    console.log("hello there");
}

console.log(x);
var result = addToX(-10);
console.log(result);
console.log(x);
// OUTPUT: 5, -5, 5


// Check if an array is a palindrome
const arr1 = [1, 1, 2, 1, 1];
const arr2 = [1, 1, 2, 2, 1];
const arr3 = [3, 2, 1, 1, 2, 3];
const arr4 = [3, 2, 1, 2, 2, 3];

// Solution #1
function isPalindrome (arr) {
    for (let i = 0, j = arr.length - 1; i < arr.length / 2, j >= arr.length / 2; i++, j--) {
        if (arr[i] !== arr[j]) {
            return false;
        }
    }
    return true;
}

// Solution #2
function isPalindrome (arr) {
    for (let leftIdx = 0; leftIdx < arr.length / 2; leftIdx++) {
        let rightIdx = arr.length - 1 - leftIdx;
        if (arr[leftIdx] !== arr[rightIdx]) {
            return false;
        }
    }
    return true;
}

console.log("----- isPalindrome -----")
console.log(isPalindrome(arr1));
console.log(isPalindrome(arr2));
console.log(isPalindrome(arr3));
console.log(isPalindrome(arr4));

