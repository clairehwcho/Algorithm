// Predict the output
var a = 25;
a = a - 13;
console.log("----------")
console.log(a / 2);
// OUTPUT: 6


// Predict the output
a = "hello";
console.log("----------")
console.log(a + " hello");
// OUTPUT: hello hello


// Predict the output
for (var i = 0; i < 10; i++) {
  console.log(i);
  i = i + 3;
}

console.log("----------")
console.log("outside of the loop " + i);
// OUTPUT: 0, 4, 8, outisde of the loop 12


// Find the sum of all the elements of an array
function getTotal (arrayOfNumbers) {
  let sum = 0;
  for (let i = 0; i < arrayOfNumbers.length; i++) {
    sum += arrayOfNumbers[i];
  }
  return sum;
}

console.log("----- getTotal-----")
console.log(getTotal([1, 3, 5]));
// OUTPUT: 9
