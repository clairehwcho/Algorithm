// Predict the output
var floor = Math.floor(1.8);
var ceiling = Math.ceil(Math.PI);
var random = Math.random();

console.log("--------------")
console.log(floor);
console.log(ceiling);
console.log(random);
/*
* OUTPUT: 1, 4, 2
* Math.floor(): always rounds down and returns the largest integer less than or equal to a given number
* Math.ceil(): always rounds up and returns the smallest integer greater than or equal to a given number
* Math.random(): returns a floating number between 0 (inclusive) and 1 (exclusive)
*/


// Complete the following function that should return a value between 1 through 6 at random.
function randomNumber () {
    let result = Math.ceil(Math.random() * 6);
    return result;
}

console.log(randomNumber());