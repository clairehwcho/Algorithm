function missingValue (unorderedNums) {
    //Your code here
    let expected = 0;
    let sum = 0;
    let min = unorderedNums[0];
    let max = unorderedNums[0];

    for (let num of unorderedNums) {
        sum = sum + num
        //sum += num
        if (min > num) min = num
        if (max < num) max = num
    }
    for (let i = min; i <= max; i++) {
        expected += i;
    }
    if (expected == sum) {
        return null
    }
    let difference = expected - sum
    return difference
}