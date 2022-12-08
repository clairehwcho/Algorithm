// Flattening an array is a process of reducing the dimensionality of an array
var arr2d =
    [[2, 5, 8],
    [3, 6, 1],
    [5, 7, 7]];

function flatten (arr2d) {
    let result = [];

    for(let i = 0; i<arr2d.length; i++){
        for (let j = 0; j<arr2d[i].length; j++){
            result.push(arr2d[i][j])
        }
    }
    return result;

    // Alternative:
    // let result = [];
    // result = arr2d.flat();
    // return result;

}

console.log(flatten(arr2d));

/*
* Array.flat(depth(optional)):
* - returns a new array with all sub-array elements concatenated into it recursively up to the specified depth
* - the depth level specifying how deep a nested array structure should be flattened. Defaults to 1.
* - for example:
* - const arr2 = [0, 1, 2, [[[3, 4]]]];
* - console.log(arr2.flat(2));
* - expected output: [0, 1, 2, [3, 4]]
*/
