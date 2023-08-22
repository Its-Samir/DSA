//countUniqueValue
// time complexity o(n) (array should be sorted)
function countUniqueValue(arr) {
    if (arr.length === 0) {
        return 0;
    }
    // pointer pattern approach
    let i = 0;
    for (let index = 1; index < arr.length; index++) {
         if (arr[i] !== arr[index] && arr[i] < arr[index]) {
             i++;
             arr[i] = arr[index]
         }
    }
    return i + 1;
}

console.log(countUniqueValue([-2, -2, 1, 2, 4, 4, 5, 8]));