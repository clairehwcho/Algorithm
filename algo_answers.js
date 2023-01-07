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