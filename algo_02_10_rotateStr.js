const str1 = "abcde";
const amnt1 = 1;
const expected1 = "bcdea";

const str2 = "abcdef";
const amnt2 = 3;
const expected3 = "defabc";

function rotateStr (str, amnt) {

    let resultStr = "";

    for (let i = amnt; i < str.length; i++) {
        resultStr += str[i]
    }

    for (let i = 0; i < amnt; i++) {
        resultStr += str[i]
    }

    return resultStr;
}

console.log(rotateStr(str1, amnt1));
console.log(rotateStr(str2, amnt2));

const str1a = "abcde";
const str1b = "bcdea";
const expected1ab = true;

const str2a = "abcde";
const str2b = "bcde";
const expected2ab = false;

const str3a = "abcde";
const str3b = "bcdef";
const expected3ab = false;

function isRotation (string1, string2) {
    if (string1.length !== string2.length) {
        return false;
    }

    for (let i = 0; i < string1.length; i++) {
        let currentChar = string1[i];
        let startIdx = string2.indexOf(currentChar);
        let newString2 = string2[startIdx] + string2.slice(0, startIdx);

        if (string1 === newString2) {
            return true;
        }
    }
    return false;
}

console.log(isRotation(str1a, str1b));
console.log(isRotation(str2a, str2b));
console.log(isRotation(str3a, str3b));
