const parensStr1 = "()";
const expectedParensStr1 = true;

const parensStr2 = "()()";
const expectedParensStr2 = true;

const ParensStr3 = "())";
const expectedParensStr3 = false;

function parensValid (str) {
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
}
console.log(parensValid(parensStr1));
console.log(parensValid(parensStr2));
console.log(parensValid(parensStr3));

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