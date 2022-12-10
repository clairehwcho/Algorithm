// 7-21
function fewestCoinChange (cents) {
    let outcome = {}
    let temp
    if (Math.floor(cents / 25) != 0) {
        temp = Math.floor(cents / 25)
        outcome['quarter'] = temp
        cents = cents - (25 * temp)
    }
    if (Math.floor(cents / 10) != 0) {
        temp = Math.floor(cents / 10)
        outcome['dime'] = temp
        cents = cents - (10 * temp)
    }
    if (Math.floor(cents / 5) != 0) {
        temp = Math.floor(cents / 5)
        outcome['nickel'] = temp
        cents = cents - (5 * temp)
        // console.log(cents)
    }
    if (Math.floor(cents / 1) != 0) {
        temp = Math.floor(cents / 1)
        outcome['penny'] = temp
        // cents = cents - temp
    }
    // outcome['penny'] = 4
    return outcome
}


console.log(fewestCoinChange(cents1)) // { quarter: 1 }
console.log(fewestCoinChange(cents2)) // { quarter: 2 }
console.log(fewestCoinChange(cents3)) // { nickel: 1, penny: 4 }
console.log(fewestCoinChange(cents4)) // { quarter: 3, dime: 2, penny: 4 }