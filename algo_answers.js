const two_nums1 = [1];
const two_expected1 = 1;

const two_nums2 = [5, 4, 5];
const two_expected2 = 4;

const two_nums3 = [5, 4, 3, 4, 3, 4, 5];
const two_expected3 = 4; // there is a pair of 4s but one 4 has no pair.

const two_nums4 = [5, 2, 6, 2, 3, 1, 6, 3, 2, 5, 2];
const two_expected4 = 1;

function oddOccurrencesInArray (nums) {
    for (var i = 0; i < nums.length; i++) {
        freq = 0
        for (var j = 0; j < nums.length; j++) {
            if (nums[i] == nums[j]) freq++
        }
        if (freq % 2 == 1) {
            return nums[i]
        }
    }
}
console.log(oddOccurrencesInArray(two_nums3))


function oddOccurrencesInArray (nums) {
    let obj = makeFrequencyTable(nums)
    for (var key in obj) {
        if (obj[key] % 2 != 0) return +key // good pro tip
    }
    return -1
}


function oddOccurrencesInArray (nums = []) {
    const freqTable = {};

    for (const n of nums) {
        if (freqTable.hasOwnProperty(n)) {
            freqTable[n]++;
        } else {
            freqTable[n] = 1;
        }
    }

    for (const key in freqTable) {
        if (freqTable[key] % 2 !== 0) {
            return +key; // + converts the string key back to int.
        }
    }


    // --------------------------------

    function oddOccurrencesInArray (nums) {
        var freqTable = {};
        for (var i = 0; i < arr.length; i++) {
            if (freqTable.hasOwnProperty(arr[i])) {
                freqTable[arr[i]] += 1;
            } else {
                freqTable[arr[i]] = 1;
            }
        }
        for (var j in freqTable) {
            if ((freqTable[j] % 2) != 0) {
                return j
            }
        }
    }
}

// 7-12
function reverseWordOrder (wordsStr) {
    // if all spaces
    if (wordsStr == false) {
        return wordsStr;
    }

    let currWord = "";
    let reversedWordOrder = "";

    for (let i = 0; i < wordsStr.length; i++) {
        const char = wordsStr[i];

        //   variable used to make choices
        const isSpace = char === " ";
        const isLastIteration = i === wordsStr.length - 1;
        const isFirstWord = reversedWordOrder.length === 0;

        if (isSpace === false) {
            currWord += char;
        }

        if (currWord.length > 0 && (isSpace || isLastIteration)) {
            if (isFirstWord === false) {
                // Add a space to separate words with no extra space at start / end.
                reversedWordOrder = " " + reversedWordOrder;
            }
            // Prepend the word so the order is reversed.
            reversedWordOrder = currWord + reversedWordOrder;
            currWord = "";
        }
    }
    return reversedWordOrder;
}

// def reverseWithOptions(string, input):
// tempWrd = ""
// tempSentence = ""
// for i, not_used in enumerate(string):
//     if input == 1:
//         j = len(string) - i - 1
// if input == 2:
//     j = i
// if string[j] != " ":
//     tempWrd += string[j]
// continue
// for k, not_used_either in enumerate(tempWrd):
//     l = len(tempWrd) - k - 1
// tempSentence += tempWrd[l]
// tempSentence += " "
// tempWrd = ""
// for m, also_not_used_either in enumerate(tempWrd):
//     n = len(tempWrd) - m - 1
// tempSentence += tempWrd[n]
// print(tempSentence)
// reverseWithOptions("Hello world", 2)
// reverseWithOptions("I can reverse sentences as well but probably still suck at weird edge cases", 1)

// 7-13
function rotateStr (str, amnt) {
    end = ""
    start = ""
    amnt = amnt % str.length
    for (let i = str.length - amnt; i < str.length; i++) {
        end += str[i]
        console.log(end)
    } for (let j = 0; j < str.length - amnt; j++) {
        start += str[j]
        console.log(start)
    }
    return str = end + start
}
console.log(rotateStr(str, rotateAmnt5))

function isRotation (s1, s2) {
    if (s1.length != s2.length) return false

    return (s2 + s2).includes(s1)
}

function isRotation (s1, s2) {
    if (s1.length != s2.length) return false

    for (let i = 0; i < s1.length; i++) {
        let output = rotateStr(s1, i + 1)
        if (output === s2) {
            return true
        }
    }
    return false
}

function rotateString (str, num) {
    let newStr = "";
    if (num < 0) num = num * -1
    let divide = str.length - num;
    if (divide < 0) divide *= -1
    for (let j = divide; j < str.length; j++) newStr += str[j];
    for (let i = 0; i < divide; i++) newStr += str[i];
    return newStr;
}


function isRotationRecursive (str1, str2, idx = 0, test = rotateString(str1, idx)) {
    if (str1.length != str2.length) return false;
    if (test == str2) return true;
    if (idx < str1.length) {
        idx += 1
        return isRotation(str1, str2, idx)
    }
    return false;
}

function isRotation (s1, s2) {
    if (s1.length != s2.length) return false

    return (s2 + s2).includes(s1)
}

function isRotation (s1, s2) {
    if (s1.length != s2.length) return false

    for (let i = 0; i < s1.length; i++) {
        let output = rotateStr(s1, i + 1)
        if (output === s2) {
            return true
        }
    }
    return false
}
function rotateStr (str = "", amnt = 0) {
    /*
    We need to use the modulo operator only when the amnt > str.length, to get
    the remainder, but when amnt < str.length, rotateAmnt will be the same as
    amnt so we don't have to worry about that.
    The reason we only care about the remainder when amnt > str.length is because
    if amnt === str.length, the string is rotated one full cycle back to it's
    original position. So we can ignore all full cycles and just focus on the
    remainder that needs to be rotated.
    */
    const rotateAmnt = amnt % str.length;

    if (!rotateAmnt || rotateAmnt <= 0) {
        return str;
    }

    let charsToRotate = "";
    let newStr = "";

    for (let i = str.length - rotateAmnt; i < str.length; i++) {
        charsToRotate += str[i];
    }

    for (let i = 0; i < str.length - rotateAmnt; i++) {
        newStr += str[i];
    }
    return charsToRotate + newStr;
}

// 7-14

function parensValid (str) {
    var par = 0
    for (i = 0; i < str.length; i++) {
        if (str[i] == "(") {
            par += 1
        }
        else if (str[i] == ")") {
            par -= 1
            if (par < 0) {
                return false
            }
        }
    }
    if (par != 0) {
        return false
    }
    else {
        return true
    }
}
console.log(parensValid(str3))

function parensValid (str) {
    var par = 0
    for (i = 0; i < str.length; i++) {
        if (str[i] == "(") {
            par += 1
        }
        else if (str[i] == ")") {
            par -= 1
            if (par < 0) {
                return false
            }
        }
    }
    if (par != 0) {
        return false
    }
    else {
        return true
    }
}
console.log(parensValid(str3))

function bracesValid (str) {
    var tracker = []
    const open = ['{', '(', '[']
    const close = ['}', ')', ']']
    for (var i = 0; i < str.length; i++) {
        if (tracker.length == 0 && close.includes(str[i])) {
            return false
        }

        if (open.includes(str[i])) {
            tracker.push(str[i])
        }
        else if (close.includes(str[i])) {
            var curr = close.indexOf(str[i])
            if (tracker[tracker.length - 1] == open[curr]) {
                tracker.pop()
            }
            else {
                return false
            }
        }
        else {
            continue
        }
    }

    if (tracker.length == 0) {
        return true
    }
    else {
        return false
    }
}

function parensValid (str) {
    counterO = 0
    counterC = 0
    for (let i = 0; i < str.length; i++) {
        if (str[i] == '(') counterO++
        if (str[i] == ")" && counterO > counterC) counterC++
        else if (str[i] == ")" && counterO <= counterC) return false
    }
    if (counterO == counterC) return true
    else return false
}

function validBraces (braces) {
    var braceDict = {
        "(": ")",
        "[": "]",
        "{": "}"
    }
    var output;
    for (var i = 0; i < braces.length; i++) {
        if (braceDict[braces[i]]) {
            if (braces[i + 1] == braceDict[braces[i]]) {
                output = true;
                i++;
            } else {
                let inner = 0
                for (var j = i + 1; j < braces.length; j++) {
                    if (braces[j] == braceDict[braces[i]] && inner == 0) {
                        output = true;
                        break;
                    }
                    if (braces[j] == braceDict[braces[i]] && inner != 0) {
                        output = false;
                        break;
                    }
                    if (braceDict[braces[j]]) inner++
                    if (Object.values(braceDict).indexOf(braces[j]) > -1) inner--
                }
            }
        }
        if (output == false) return false
    }
    return output;
}

// 7-15
function trim (str) {
    var start = -1
    var finish = -1
    var newStr = ""
    for (var i = 0; i < str.length; i++) {
        if (str[i] != " " && start == -1) {
            start = i
        }
        if (str[i] != " " && start != -1) {
            finish = i
        }
    }
    console.log(start, finish)
    for (var j = start; j <= finish; j++) {
        newStr += str[j]
    }
    return newStr
}

console.log(trim(str2))

function isAnagram (s1, s2) {
    if (s1.length !== s2.length) {
        return false
    }

    let freqObj1 = {}
    let freqObj2 = {}

    s1 = s1.toLowerCase()
    s2 = s2.toLowerCase()

    for (let i = 0; i < s1.length; i++) {
        if (freqObj1.hasOwnProperty(s1[i])) {
            freqObj1[s1[i]]++
        } else {
            freqObj1[s1[i]] = 1
        }

        if (freqObj2.hasOwnProperty(s2[i])) {
            freqObj2[s2[i]]++
        } else {
            freqObj2[s2[i]] = 1
        }
    }

    for (const char in freqObj1) {
        // compare to see if the character is in the obj
        if (!freqObj2.hasOwnProperty(char)) {
            return false
        }

        // compare the number of times they shown up
        if (freqObj1[char] !== freqObj2[char]) {
            return false
        }
    }
    return true
}

function trim (str, start = str[0], end = str[0]) {
    for (var i = 0; str[i] == " "; i++) start = i + 1
    for (var i = str.length - 1; i > str[i] != " "; i--) end = i
    return str.slice(start, end)
}

// * pseudocode:
//  * - make list of string input
//     * - find out where first letter is(for loop to check if space or not)
//  * - save position of first letter
//     * - find and save position of last letter
//         * - remove all spaces not in range of two indexes
//             * /
function trim (str) {

    //const list = str.split("");
    const list = str;
    console.log(str[5]);
    for (var i = 0; i < list.length; i++) {
        if (list[i] != " ") {
            var first = i;
            break;
        }
    }
    for (var j = list.length - 1; j > -1; j--) {
        if (list[j] != " ") {
            var last = j;
            break;
        }
    }

    const newString = str.slice(first, last + 1);

    console.log(first)
    console.log(last)

    return newString;

}
//  * pseudocode:
//  * - trim to make sure all spaces are gone, if input has any spaces
//  * - check if same length, if not return false
//  * - make everything lowercase
//  * - split string into array
//  * - sort array
//  * - join array back to string
//  * - check if strings are equal
//  * - return boolean
//  */
function isAnagram (s1, s2) {

    let string1 = s1.trim();
    let string2 = s2.trim();
    if (string1.length != string2.length) {
        return false;
    }
    string1 = string1.toLowerCase();
    string2 = string2.toLowerCase();

    let list1 = string1.split("");
    let list2 = string2.split("");

    list1 = list1.sort();
    list2 = list2.sort();

    string1 = list1.join("");
    string2 = list2.join("");

    if (string1 == string2) {
        return true;
    } else {
        return false;
    }

}

// 7-18
function socialDistancingEnforcer (queue) {

    var temp = 0
    var start = false
    for (i = 0; i < queue.length; i++) {
        // console.log(queue[i])
        if (queue[i] == 1 || start == true) {

            if (queue[i] == 0) {
                temp += 1
            }
            else if (queue[i] == 1 && start == true) {

                if (temp < 6) {
                    return false
                }

                else if (temp >= 6) {
                    temp = 0
                }
            }
            start = true
        }
    }
    return true
}

console.log(socialDistancingEnforcer(queue4))

function socialDistancingEnforcer (queue = []) {
    let distance = 0;
    let firstPersonSeen = false;

    // Use the existing i value
    for (let i = 0; i < queue.length; i++) {
        if (queue[i] === 0) {
            distance += 1;
        } else {
            if (firstPersonSeen && distance < 6) {
                return false;
            }

            firstPersonSeen = true;
            distance = 0;
        }
    }
    return true;
}

function socialDistanceing (arr, spaceCounter = 0) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 1) {
            while (arr[i + 1] === 0) spaceCounter++, i++
            if (spaceCounter < 6) return false
        }
    }
    return true
}

console.log(socialDistancingEnforcer(queue2))
function socialDistancingEnforcer (queue) {
    let counter = 0;
    for (let i = 0; i < queue.length; i++) {
        if (queue[i] == 1) {
            for (let j = i + 1; j <= i + 7; j++) {
                if (queue[j] == 0) {
                    counter++;
                    console.log(counter);
                } else {
                    if (counter >= 6) {
                        counter = 0;
                        console.log("just resetted the counter");
                        break;
                    } else {
                        return false;
                    }
                }

            }
        }
    }
    return true;
}

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