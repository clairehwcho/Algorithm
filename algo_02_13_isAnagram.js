const str1a = "Cinema";
const str1b = "Iceman";
const expected1 = true;

const str2a = "abcde";
const str2b = "abc";
const expected2 = false;

const str3a = "      cinema ";
const str3b = "iceman   ";
const expected3 = true;

function isAnagram (s1, s2) {
    let str1 = s1.trim().toLowerCase();
    let str2 = s2.trim().toLowerCase();

    if (str1.length !== str2.length) {
        return false;
    }

    str1 = str1.split("").sort().join("");
    str2 = str2.split("").sort().join("");

    if (str1 === str2) {
        return true;
    }
    return false;
}

console.log(isAnagram(str1a, str1b));
console.log(isAnagram(str2a, str2b));
console.log(isAnagram(str3a, str3b));