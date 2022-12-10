// 7-19
// * pseudocode:
// * - sort input array
//     * - initialize two variables, start and end
//         * - start would be the first index
//             * - end would be last index in array
//                 * - put everything in a while loop with condition start <= end
//                     * - initialize mid value to be math.floor(avg of start and end)
//                         * - check if mid is expected value( return true if true)
// * - if not check if value at mid is less or greater than expected value
//     * - if greater start = mid + 1
//         * - if less end = mid - 1
//             * - return false at end of method
//                 * /
function binarySearch (sortedNums, searchNum) {
    sortedNums = sortedNums.sort();
    let start = 0;
    let end = sortedNums.length - 1;
    while (start <= end) {
        if (sortedNums[end] == searchNum || sortedNums[start] == searchNum) {
            countNums(sortedNums, searchNum);
            return true;
        }
        let mid = Math.floor((start + end) / 2);
        if (sortedNums[mid] == searchNum) {
            countNums(sortedNums, searchNum);
            return true;
        } else if (searchNum > sortedNums[mid]) {
            start = mid + 1;
        } else if (searchNum < sortedNums[mid]) {
            end = mid - 1;
        }
        // console.log(start);
        // console.log(end);
    }
    return false;
}

function countNums (sortedNums, searchNum) {
    let count = 0
    for (var i = 0; i < sortedNums.length; i++) {
        if (sortedNums[i] == searchNum) {
            count++;
        }
    }
    console.log(count);
    return count;
}
function binarySearchWithCounting (sortedNums, searchNum) {
    sortedNums = sortedNums.sort();
    let start = 0;
    let end = sortedNums.length - 1;
    let count = 0;
    while (start <= end) {
        if (sortedNums[end] == searchNum) {
            while (sortedNums[end] == searchNum) {
                end -= 1
                count++
            }
            start = end + 1;
        } else if (sortedNums[start] == searchNum) {
            while (sortedNums[start] == searchNum) {
                start += 1
                count++
            }
            start = end + 1;
        }
        let mid = Math.floor((start + end) / 2);
        if (sortedNums[mid] == searchNum) {
            while (sortedNums[mid] == searchNum) {
                mid += 1
                count++
            }
            start = end;
        } else if (searchNum > sortedNums[mid]) {
            start = mid + 1;
        } else if (searchNum < sortedNums[mid]) {
            end = mid - 1;
        }
    }
    if (count != 0) {
        return count;
    }
    return false;
}

// console.log(binarySearch(nums1, searchNum1)); // false
// console.log(binarySearch(nums2, searchNum2)); // true (1 for bonus)
// console.log(binarySearch(nums3, searchNum3)); // true (1 for bonus)
// console.log(binarySearch(nums4, searchNum4));
console.log(binarySearchWithCounting(nums1, searchNum1)); // false
console.log(binarySearchWithCounting(nums2, searchNum2)); // true (1 for bonus)
console.log(binarySearchWithCounting(nums3, searchNum3)); // true (1 for bonus)
console.log(binarySearchWithCounting(nums4, searchNum4));

// 7-20
function dedupeSorted (num) {
    let arr = [num[0]]
    // console.log(arr)
    for (i = 1; i < num.length; i++) {
        if (num[i] != num[i - 1]) {
            arr.push(num[i])
            // console.log(arr)
        }
        // else return arr
    }
    return arr
}

console.log(dedupeSorted(nums1)); // [1]
console.log(dedupeSorted(nums2)); // [1, 2, 3]
console.log(dedupeSorted(nums3)); // [1, 2, 3, 4]
console.log(dedupeSorted(nums4)); // [1]

function dedupeSorted (arr) {
    let dict = {}
    let output = []
    for (let i = 0; i < arr.length; i++) {
        if (!dict[arr[i]]) dict[arr[i]] = 1
        else dict[arr[i]]++
    }
    console.log(dict)
    for (let key in dict) output.push(parseInt(key))
    return output
}


function firstNonRepeated (arr) {
    let obj = {}
    for (let i = 0; i < arr.length; i++) {
        if (!obj[arr[i]]) obj[arr[i]] = 1
        else obj[arr[i]]++
    }
    for (let i = 0; i < arr.length; i++) {
        if (obj[arr[i]] === 1) return arr[i]
    }
    return null
}

function firstNonRepeated (nums) {
    for (let i = 0; i < nums.length; i++) {
        let val = nums[i] //current value to consider
        for (let j = 0; j < nums.length; j++) {
            let match = false //keep track of if we find a match
            if (j == i) { //skip over the same element we are considering
                continue
            }
            if (nums[j] == val) { //if we hit a match
                match = true //set match to true
                break //break loop
            }
        }
        if (!match) return val //if we didn't find a match, return the value
    }
    return null //if we never found a single item, return null
}

// 7-21
function fewestCoinChange (cents) {
    let outcome = {}
    let temp
    if (Math.floor(cents / 25) != 0) {
        temp = Math.floor(cents / 25)
        outcome['quarter'] = temp
        cents = cents - (25 * temp)
    }
    if (Math.floor(cents / 10) != 0) {
        temp = Math.floor(cents / 10)
        outcome['dime'] = temp
        cents = cents - (10 * temp)
    }
    if (Math.floor(cents / 5) != 0) {
        temp = Math.floor(cents / 5)
        outcome['nickel'] = temp
        cents = cents - (5 * temp)
        // console.log(cents)
    }
    if (Math.floor(cents / 1) != 0) {
        temp = Math.floor(cents / 1)
        outcome['penny'] = temp
        // cents = cents - temp
    }
    // outcome['penny'] = 4
    return outcome
}


console.log(fewestCoinChange(cents1)) // { quarter: 1 }
console.log(fewestCoinChange(cents2)) // { quarter: 2 }
console.log(fewestCoinChange(cents3)) // { nickel: 1, penny: 4 }
console.log(fewestCoinChange(cents4)) // { quarter: 3, dime: 2, penny: 4 }

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