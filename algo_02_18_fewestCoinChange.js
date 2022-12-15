// Make change with the minimum number of coins (quarter = 25 cents, dime = 10 cents, nickel = 5 cents, penny = 1 cent).

const cents1 = 25;
const expected1 = { quarter: 1 };

const cents2 = 50;
const expected2 = { quarter: 2 };

const cents3 = 9;
const expected3 = { nickel: 1, penny: 4 };

const cents4 = 99;
const expected4 = { quarter: 3, dime: 2, penny: 4 }

function fewestCoinChange (cents) {
    let resultObj = {};
    let temp;

    if (Math.floor(cents / 25) > 0) {
        temp = Math.floor(cents / 25);
        resultObj["quarter"] = temp;
        cents = cents - temp * 25;
    }

    if (Math.floor(cents / 10) > 0) {
        temp = Math.floor(cents / 10);
        resultObj["dime"] = temp;
        cents = cents - temp * 10;
    }

    if (Math.floor(cents / 5) > 0) {
        temp = Math.floor(cents / 5);
        resultObj["nickel"] = temp;
        cents = cents - temp * 5;
    }

    if (Math.floor(cents / 1) > 0) {
        temp = Math.floor(cents / 1);
        resultObj["penny"] = temp;
        cents = cents - temp * 1;
    }

    return resultObj;
}

console.log(fewestCoinChange(cents1));
console.log(fewestCoinChange(cents2));
console.log(fewestCoinChange(cents3));
console.log(fewestCoinChange(cents4));