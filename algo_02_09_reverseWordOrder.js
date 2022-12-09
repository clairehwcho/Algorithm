const str1 = "Hello world";
const expected1 = "world hello"

const str2 = "I love coidng";
const expected2 = "coding love I"

const str3 = "This is a sample string"
const expected3 = "string sample a is This"

const str4 = "     ";
const expected4 = "     ";

function reverseWordOrder (wordsStr) {
    let resultStr = "";
    let strToArr = wordsStr.split(" ");

    if (wordsStr === null) {
        return wordsStr;
    }

    for (let i = strToArr.length - 1; i >= 0; i--) {
        let currentWord = strToArr[i];
        resultStr += currentWord + " ";
    }
    return resultStr.trim();
}

console.log(reverseWordOrder(str1));
console.log(reverseWordOrder(str2));
console.log(reverseWordOrder(str3));
console.log(reverseWordOrder(str4));