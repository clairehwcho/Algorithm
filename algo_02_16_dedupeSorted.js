// 7-20
function dedupeSorted (num) {
    let arr = [num[0]]
    // console.log(arr)
    for (i = 1; i < num.length; i++) {
        if (num[i] != num[i - 1]) {
            arr.push(num[i])
            // console.log(arr)
        }
        // else return arr
    }
    return arr
}

console.log(dedupeSorted(nums1)); // [1]
console.log(dedupeSorted(nums2)); // [1, 2, 3]
console.log(dedupeSorted(nums3)); // [1, 2, 3, 4]
console.log(dedupeSorted(nums4)); // [1]

function dedupeSorted (arr) {
    let dict = {}
    let output = []
    for (let i = 0; i < arr.length; i++) {
        if (!dict[arr[i]]) dict[arr[i]] = 1
        else dict[arr[i]]++
    }
    console.log(dict)
    for (let key in dict) output.push(parseInt(key))
    return output
}
