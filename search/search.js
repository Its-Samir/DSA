function search(arr, value) {
    let left = 0;
    let right = arr.length;
    let i = 1;
    while (left < right) {
        let middleValue = Math.floor((left + right) / 2);
        console.log(i++)
        if (arr[middleValue] < value && middleValue < right - 1) {
            left = middleValue;
        } else if (arr[middleValue] > value && middleValue > left) {
            right = middleValue;
        } else {
            return arr[middleValue] === value ? middleValue : -1;
        }
    }
}

console.log(search([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35], 32));