// Write a function called isPresent2d(arr2d, value) that returns true if the value is present and false otherwise
var arr2d =
    [[2, 5, 8],
    [3, 6, 1],
    [5, 7, 7]];

function isPresent2d (arr2d, value) {
    for (let i=0; i<arr2d.length; i++){
        for (let j = 0; j<arr2d[i].length; j++){
            if (arr2d[i][j] == value){
                return true;
            }
        }
    }
    return false;
}

console.log("---- isPresent2d ----")
console.log(isPresent2d(arr2d, 3));
console.log(isPresent2d(arr2d, 9));