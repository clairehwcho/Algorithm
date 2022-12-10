function firstNonRepeated (arr) {
    let obj = {}
    for (let i = 0; i < arr.length; i++) {
        if (!obj[arr[i]]) obj[arr[i]] = 1
        else obj[arr[i]]++
    }
    for (let i = 0; i < arr.length; i++) {
        if (obj[arr[i]] === 1) return arr[i]
    }
    return null
}

function firstNonRepeated (nums) {
    for (let i = 0; i < nums.length; i++) {
        let val = nums[i] //current value to consider
        for (let j = 0; j < nums.length; j++) {
            let match = false //keep track of if we find a match
            if (j == i) { //skip over the same element we are considering
                continue
            }
            if (nums[j] == val) { //if we hit a match
                match = true //set match to true
                break //break loop
            }
        }
        if (!match) return val //if we didn't find a match, return the value
    }
    return null //if we never found a single item, return null
}