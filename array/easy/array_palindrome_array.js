/*
Palindrome Array (Difficulty: Easy)

Check if an array is a palindrome.
*/

const arr1 = [1, 1, 2, 1, 1];
const expected1 = true;

const arr2 = [1, 1, 2, 2, 1];
const expected2 = false;

const arr3 = [3, 2, 1, 1, 2, 3];
const expected3 = true;

const arr4 = [3, 2, 1, 2, 2, 3];
const expected4 = false;

const isPalindrome = (arr) => {
    let left = 0;
    let right = arr.length - 1;

    while (left < right) {
        if (arr[left] !== arr[right]) {
            return false;
        }
        left++;
        right--;
    }
    return true;
};

console.log(isPalindrome(arr1));
console.log(isPalindrome(arr2));
console.log(isPalindrome(arr3));
console.log(isPalindrome(arr4));