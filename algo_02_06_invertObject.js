/**
 * Converts the given arrays of keys and values into an object.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<string>} keys
 * @param {Array<any>} values
 * @returns {Object} The object with the given keys and values.
 */

/*
    Invert Hash
    A hash table / hash map is an obj / dictionary
    Given an object / dict,
    return a new object / dict that has the keys and the values swapped so that the keys become the values and the values become the keys
*/

const two_obj1 = { name: "Zaphod", charm: "high", morals: "dicey" };
const two_expected1 = { Zaphod: "name", high: "charm", dicey: "morals" };

const two_obj2 = { name: "Zaphod", charm: "high", morals: "dicey", something: 1 };
const two_expected2 = { Zaphod: "name", high: "charm", dicey: "morals", 1: "something" };

const two_obj3 = { name: "Zaphod", charm: "high", morals: "dicey", something: "dicey", else: "dicey" };
const two_expected3 = { Zaphod: "name", high: "charm", dicey: ["morals", "something", "else"] };

/**
 * Inverts the given object's key value pairs so that the original values
 * become the keys and the original keys become the values.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Object<string, any>} obj
 * @return The given object with key value pairs inverted.
 */

function invertObj (obj) {
    let newKeysArr = Object.values(obj);
    let newValsArr = Object.keys(obj);
    let resultObj = {}

    for (let i = 0; i < newKeysArr.length; i++) {
        let newKey = newKeysArr[i];
        let newVal = newValsArr[i];

        // If the object does not have new key
        if (!resultObj.hasOwnProperty(newKey)) {
            // Create key-value pair
            resultObj[newKey] = newVal;
        }
        // If new value already exists
        else {
            // If the value is an array
            if (Array.isArray(resultObj[newKey])) {
                // Push current new value to the array
                resultObj[newKey].push(newVal);
            }
            // If the value is not an array
            else {
                // Create an array and push the existing value and current new value to the array
                let varArr = [];
                varArr.push(resultObj[newKey]);
                varArr.push(newVal);
                resultObj[newKey] = varArr;
            }
        }
    }
    return resultObj;
}


console.log(invertObj(two_obj1));
console.log(invertObj(two_obj2));
console.log(invertObj(two_obj3));