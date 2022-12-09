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
