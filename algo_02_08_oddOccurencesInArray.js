/*
Given a non-empty array of odd length containing ints where every int but one
has a matching pair (another int that is the same)
return the only int that has no matching pair.
*/

const two_nums1 = [1];
const two_expected1 = 1;

const two_nums2 = [5, 4, 5];
const two_expected2 = 4;

const two_nums3 = [5, 4, 3, 4, 3, 4, 5];
const two_expected3 = 4; // there is a pair of 4s but one 4 has no pair.

const two_nums4 = [5, 2, 6, 2, 3, 1, 6, 3, 2, 5, 2];
const two_expected4 = 1;

function oddOccurrencesInArray (nums) {
    let freqTable = {};

    for (let key of nums) {
        if (freqTable.hasOwnProperty(key)) {
            freqTable[key]++;
        }
        else {
            freqTable[key] = 1;
        }
    };

    for (let key in freqTable) {
        if (freqTable[key] % 2 !== 0) {
            return parseInt(key);
        }
    }
};

console.log(oddOccurrencesInArray(two_nums1));
console.log(oddOccurrencesInArray(two_nums2));
console.log(oddOccurrencesInArray(two_nums3));
console.log(oddOccurrencesInArray(two_nums4));