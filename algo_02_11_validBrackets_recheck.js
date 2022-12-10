const str1 = "{[()]}";
const expected1 = true;

const str2 = "{[((]}";
const expected2 = false;

const str3 = "{[()]()[]]}";
const expected3 = true;

const str4 = "{[()]{";
const expected4 = false;

function validBrackets (str) {
    let brackets = {
        opener: ["(", "[", "{"],
        closer: [")", "]", "}"]
    }
    let count = 0;

    for (let i = 0; i < str.length; i++) {
        let currentChar = str[i];
        let firstChar = str[0];
        let lastChar = str[str.length - 1];

        // If the first letter is not opener or the last letter is not closer, return false.
        if (!brackets["opener"].includes(firstChar) || !brackets["closer"].includes(lastChar)) {
            return false;
        }

        // If the first letter is opener, find its corresponding closer.
        if (brackets["opener"].includes(currentChar)) {
            count++;
            for (let j = i + 1; j < str.length; j++) {
                if (str[j] === brackets["closer"].indexOf(currentChar)) {
                    count++;
                }
            }
        }

        if (count % 2 !== 0) {
            return false;
        }
    }

    return true;
}

console.log(validBrackets(str1));
console.log(validBrackets(str2));
console.log(validBrackets(str3));
console.log(validBrackets(str4));





    // var par = 0
    // for (i = 0; i < str.length; i++) {
    //     if (str[i] == "(") {
    //         par += 1
    //     }
    //     else if (str[i] == ")") {
    //         par -= 1
    //         if (par < 0) {
    //             return false
    //         }
    //     }
    // }
    // if (par != 0) {
    //     return false
    // }
    // else {
    //     return true
    // }


// function parensValid (str) {
//     var par = 0
//     for (i = 0; i < str.length; i++) {
//         if (str[i] == "(") {
//             par += 1
//         }
//         else if (str[i] == ")") {
//             par -= 1
//             if (par < 0) {
//                 return false
//             }
//         }
//     }
//     if (par != 0) {
//         return false
//     }
//     else {
//         return true
//     }
// }
// console.log(parensValid(str3))

// function bracesValid (str) {
//     var tracker = []
//     const open = ['{', '(', '[']
//     const close = ['}', ')', ']']
//     for (var i = 0; i < str.length; i++) {
//         if (tracker.length == 0 && close.includes(str[i])) {
//             return false
//         }

//         if (open.includes(str[i])) {
//             tracker.push(str[i])
//         }
//         else if (close.includes(str[i])) {
//             var curr = close.indexOf(str[i])
//             if (tracker[tracker.length - 1] == open[curr]) {
//                 tracker.pop()
//             }
//             else {
//                 return false
//             }
//         }
//         else {
//             continue
//         }
//     }

//     if (tracker.length == 0) {
//         return true
//     }
//     else {
//         return false
//     }
// }

// function parensValid (str) {
//     counterO = 0
//     counterC = 0
//     for (let i = 0; i < str.length; i++) {
//         if (str[i] == '(') counterO++
//         if (str[i] == ")" && counterO > counterC) counterC++
//         else if (str[i] == ")" && counterO <= counterC) return false
//     }
//     if (counterO == counterC) return true
//     else return false
// }

// function validBraces (braces) {
//     var braceDict = {
//         "(": ")",
//         "[": "]",
//         "{": "}"
//     }
//     var output;
//     for (var i = 0; i < braces.length; i++) {
//         if (braceDict[braces[i]]) {
//             if (braces[i + 1] == braceDict[braces[i]]) {
//                 output = true;
//                 i++;
//             } else {
//                 let inner = 0
//                 for (var j = i + 1; j < braces.length; j++) {
//                     if (braces[j] == braceDict[braces[i]] && inner == 0) {
//                         output = true;
//                         break;
//                     }
//                     if (braces[j] == braceDict[braces[i]] && inner != 0) {
//                         output = false;
//                         break;
//                     }
//                     if (braceDict[braces[j]]) inner++
//                     if (Object.values(braceDict).indexOf(braces[j]) > -1) inner--
//                 }
//             }
//         }
//         if (output == false) return false
//     }
//     return output;
// }