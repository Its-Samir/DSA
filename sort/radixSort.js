// get the digit of an index
function getDigit(num, index) {
    if (index >= num.toString().length) return 0;
    return +num.toString().split('').reverse()[index];
}

// get the count of maximum digit of a number
function digitCount(num) {
    return +num.toString().length;
}

// get the maximum digit of a number in an array of numbers
function mostDigit(arr) {
    let maxDigit = 0;
    for (let i = 0; i < arr.length; i++) {
        maxDigit = Math.max(maxDigit, digitCount(arr[i]));
    }
    return maxDigit;
}

// radix sort function along with the help of above functions
function radixSort(arr) {

    // this will return the max digit of number in an array
    let maxDigit = mostDigit(arr);
    for (let j = 0; j < maxDigit; j++) {

        // produces 10 empty arrays
        let newArr = Array.from({ length: 10 }, () => []);
        for (let i = 0; i < arr.length; i++) {

            // push the current element (arr[i]) into the place that getDigit() will return (0,1,2,3,4) of newArr
            newArr[getDigit(arr[i], j)].push(arr[i]);
        }

        // rebuilding the argument of arr by concating a blank array with all the values of newArr using spread operator, so that whenever the for loop of j will run, its inner loop will work with the rebuilded array
        arr = [].concat(...newArr)
    }
    return arr;
}

console.log(radixSort([12, 123, 31, 1234, 54321]));