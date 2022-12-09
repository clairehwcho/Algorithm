function socialDistancingEnforcer (queue) {

    var temp = 0
    var start = false
    for (i = 0; i < queue.length; i++) {
        // console.log(queue[i])
        if (queue[i] == 1 || start == true) {

            if (queue[i] == 0) {
                temp += 1
            }
            else if (queue[i] == 1 && start == true) {

                if (temp < 6) {
                    return false
                }

                else if (temp >= 6) {
                    temp = 0
                }
            }
            start = true
        }
    }
    return true
}

console.log(socialDistancingEnforcer(queue4))

function socialDistancingEnforcer (queue = []) {
    let distance = 0;
    let firstPersonSeen = false;

    // Use the existing i value
    for (let i = 0; i < queue.length; i++) {
        if (queue[i] === 0) {
            distance += 1;
        } else {
            if (firstPersonSeen && distance < 6) {
                return false;
            }

            firstPersonSeen = true;
            distance = 0;
        }
    }
    return true;
}

function socialDistanceing (arr, spaceCounter = 0) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 1) {
            while (arr[i + 1] === 0) spaceCounter++, i++
            if (spaceCounter < 6) return false
        }
    }
    return true
}

console.log(socialDistancingEnforcer(queue2))
function socialDistancingEnforcer (queue) {
    let counter = 0;
    for (let i = 0; i < queue.length; i++) {
        if (queue[i] == 1) {
            for (let j = i + 1; j <= i + 7; j++) {
                if (queue[j] == 0) {
                    counter++;
                    console.log(counter);
                } else {
                    if (counter >= 6) {
                        counter = 0;
                        console.log("just resetted the counter");
                        break;
                    } else {
                        return false;
                    }
                }

            }
        }
    }
    return true;
}