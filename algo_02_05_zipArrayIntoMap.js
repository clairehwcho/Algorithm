/*
    Zip Arrays into Map
    Given two arrays, create an associative array (aka hash map, an obj / dictionary) containing keys from the first array, and values from the second.
    Associative arrays are sometimes called maps because a key (string) maps to a value
 */

const keys1 = ["abc", 3, "yo"];
const vals1 = [42, "wassup", true];
const expected1 = {
    yo: true,
    abc: 42,
    3: "wassup",
};

const keys2 = [];
const vals2 = [];
const expected2 = {};

const keys3 = ["abc", 3, "yo"];
const vals3 = [42, "wassup", true, "something"];
const expected3 = false;

const keys4 = ["abc", 3, "yo", "something"];
const vals4 = [42, "wassup", true];
const expected4 = {
    yo: true,
    abc: 42,
    3: "wassup",
    something: ""
};

function zipArraysIntoMap (keys, values) {
    let resultObj = {};
    while (keys.length >= values.length) {
        for (let i = 0; i < keys.length; i++) {
            if (values[i] === undefined) {
                resultObj[keys[i]] = "";
            }
            else {
                resultObj[keys[i]] = values[i];
            }
        }
        return resultObj;
    }
    return false;
}

console.log(zipArraysIntoMap(keys1, vals1));
console.log(zipArraysIntoMap(keys2, vals2));
console.log(zipArraysIntoMap(keys3, vals3));
console.log(zipArraysIntoMap(keys4, vals4));