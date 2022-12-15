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

// 7-22
function mode (nums) {
    let obj = {}
    let max = 0
    let output = []
    for (var i = 0; i < nums.length; i++) {
        if (!obj[nums[i]]) obj[nums[i]] = 1
        else obj[nums[i]]++
    }
    for (let key in obj) if (obj[key] > max) max = obj[key]
    for (let key in obj) if (obj[key] == max) output.push(key)
    if (output.length == Object.keys(obj).length) return []
    return output
}

// 7-25
function recursiveSigma (num, i = 1) {
    num = Math.floor(num)
    if (num < 0) return 0
    // console.log(i)
    if (i == num) {
        return num
    }
    return i + recursiveSigma(num, i + 1)
}

function rSigma (n) {
    if (n <= 0) return 0
    n = Math.floor(n)
    if (n == 1) return 1;
    return n + rSigma(n - 1);
}

/**
 * Recursively sum the given int and every previous positive int.
 * - Time: O(?).
 * - Space: O(?).
 * @param {number} num
 * @returns {number}
 */
function recursiveSigma (num) {
    num = Math.floor(num)
    if (num < 1) return 0;
    return num + recursiveSigma(num - 1);
}

console.log(recursiveSigma(10))

// 7-26
function fibonacci(num) {
    if (num == 0) return 0;
    if (num == 1) return 1;
    // let array = [0, 1]
    // for (let i = 1; i < num; i++){
    //     let sum = array[i] + array[i-1]
    //     array.push(sum)
    // }
    return fibonacci(num-1) + fibonacci(num-2)

}

// 7-27
function binarySearch(
    sortedNums,
    searchNum,
    leftIdx = 0,
    rightIdx = sortedNums.length - 1
) {
    if (leftIdx > rightIdx) return -1;
    const midIdx = Math.floor((rightIdx + leftIdx) / 2);
    if (sortedNums[midIdx] === searchNum) return midIdx;
    if (searchNum < sortedNums[midIdx]) return binarySearch(sortedNums, searchNum, 0, midIdx - 1);
    return binarySearch(sortedNums, searchNum, midIdx + 1, rightIdx);
}

const str1 = "abc";
const expected1 = "cba";

const str2 = "";
const expected2 = "";

const str3 = "Hello World";
const expected3 = "dlroW olleH";

function reverseStr(str) {
    if (str == '') return str;
    else {
        return str[str.length - 1] + reverseStr(str.slice(0, str.length - 1));
    }
}

console.log(reverseStr(str1))
console.log(reverseStr(str2))
console.log(reverseStr(str3))

function binarySearch(sortedNums, searchNum) {
    var low = 0
    var mid = Math.floor(sortedNums.length / 2)
    var high = sortedNums.length

    if (searchNum == sortedNums[mid]) return true
    if (low == high && sortedNums[mid] != searchNum) return false

    if (searchNum < sortedNums[mid])return binarySearch(sortedNums.slice(0,mid), searchNum)
    else if (searchNum > sortedNums[mid]) return binarySearch(sortedNums.slice(mid+1,high), searchNum)
}

console.log(binarySearch(two_nums1, two_searchNum1))
console.log(binarySearch(two_nums2, two_searchNum2))
console.log(binarySearch(two_nums3, two_searchNum3))

// 7-28
function sumToOneDigit(num) {
    if(num < 10){
        return num
    }
    str = num.toString()
    sum = 0

    for(let i =0; i < str.length; i++){
        j = parseInt(str[i])
        sum += j
    }
    if(sum > 10){
        sumToOneDigit(sum)
    }
    return sum


}
console.log(sumToOneDigit(num1))
console.log(sumToOneDigit(num2))
console.log(sumToOneDigit(num3))
console.log(sumToOneDigit(num4))

function sumToOneDigit(n) {
    sum = n.toString().split('').map(Number)
        .reduce(function (a, b) {
            return a + b;
        }, 0);
    if(sum > 10){
        return sumToOneDigit(sum)
    }
    else return sum
}

function generateAnagrams(str, solutions = [], partial = "") {
    if (!str){
        solutions.push(partial)
    }

    for (let i=0; i<str.length; i++){
        let leftSlice = str.slice(0, i)
        let rightSlice = str.slice(i+1)
        generateAnagrams(leftSlice + rightSlice, solutions, partial + str[i])
    }
    return solutions
}

console.log(generateAnagrams(two_str1));