const str1 = " hello world ";
const expected1 = "hello world";

const str2 = "                     hello           world   ";
const expected2 = "hello           world";

function trim (str) {
    let resultStr = "";
    let startIdx = 0;
    let endIdx = 0;
    let currentChar = "";

    for (let i = 0; i < str.length; i++) {
        currentChar = str[i];

        if (currentChar !== " ") {
            startIdx = str.indexOf(currentChar);
            console.log(startIdx);
            break;
        }
    }

    for (let j = str.length - 1; j >= 0; j--) {
        currentChar = str[j];

        if (currentChar !== " ") {
            endIdx = str.indexOf(currentChar);
            console.log(endIdx);
            break;
        }
    }

    resultStr = str.slice(startIdx, endIdx + 1);
    return resultStr;
}

console.log(trim(str1));
console.log(trim(str2));