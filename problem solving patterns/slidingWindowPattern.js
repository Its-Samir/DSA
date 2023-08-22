// time complexity o(n^2)
function maxSubarraySum(arr, num) {
    if (num > arr.length) return null;
    let max = 0;
    for (let i = 0; i < arr.length - num + 1; i++) {
        let tempSum = 0;
        for (let j = 0; j < num; j++) {
            tempSum += arr[i + j];
        }
        if (tempSum > max) {
            max = tempSum;
        }
    }
    return max;
}

console.log(maxSubarraySum([1, 2, 5, 3, 7, 9], 3));

// time complexity o(n)
function maxSubarraySum2(arr, num) {
    if (num > arr.length) return null;
    let maxSum = 0;
    for (let i = 0; i < num; i++) {
        maxSum += arr[i];
    }
    let tempSum = maxSum;
    for (let i = num; i < arr.length; i++) {
        tempSum = tempSum + arr[i] - arr[i - num]
    }
    return Math.max(maxSum, tempSum);
}

console.log(maxSubarraySum2([1, 2, 5, 3, 7, 9], 2));