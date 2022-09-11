// Predict the output
let isSunny = true;
let temperature = 45;
let isRaining = false;
let whatToBring = "I should bring: ";

if (isSunny) {
    whatToBring += "sunglasses, "; // I should bring: sunglasses,
}
if (temperature < 50) {
    whatToBring += "a coat, "; // I should bring: sunglasses, a coat,
}
if (isRaining) {
    whatToBring += "an umbrella, ";
}
whatToBring += "and a smile!"; // I should bring: sunglasses, a coat, and a smile!

console.log("----------")
console.log(whatToBring);
// OUTPUT: I should bring sunglasses, a coat, and a smile


// Predict the output
console.log("----------")
for (let i = 10; i > 0; i--) {
    if (i != 2) {
        console.log(i);
    } else {
        console.log("ignition!");
    }
}
console.log("liftoff!");
// OUTPUT: 10, 9, 8, 7, 6, 5, 4, 3, ignition!, 1, liftoff!


// Count the number of positive numbers in an array
const arr1 = [3, 4, -2, 7, 16, -8, 0];

function countPositives(array){
    let count = 0;
    for (let i =0; i<array.length; i++){
        if (array[i] > 0 ){
            count++
        }
    }
    return count;
}

console.log("----- countPositives -----")
console.log(countPositives(arr1));
// OUTPUT: 4
