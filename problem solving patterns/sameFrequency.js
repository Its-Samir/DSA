function sameFrequency(num1, num2) {
    // good luck. Add any arguments you deem necessary.
    //o(n)
    let frequency1 = {};
    let frequency2 = {};
    for (let val of num1.toString()) {
        frequency1[val] = frequency1[val] + 1 || 1;
    }

    for (let val of num2.toString()) {
        frequency2[val] = frequency2[val] + 1 || 1;
    }
    for (let val of num1.toString()) {
        if (frequency2[val] !== frequency1[val]) {
            return false;
        }
    }
    return true;
}

console.log(sameFrequency(154, 514));