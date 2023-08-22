//o(n)
function maxSubarraySum(arr, num) {
    if (arr.length < num) {
        return null;
    }
    let maxSum = 0;
    for (let i = 0; i < num; i++) {
        maxSum += arr[i];
    }
    
    let highSum = maxSum;
    
    for (let i = num; i < arr.length; i++) {
        maxSum = (maxSum + arr[i]) - arr[i - num];
        if (maxSum > highSum) {
            highSum = maxSum;
        }
    }
    return highSum;
    
}

console.log(maxSubarraySum([15, 25, 8, 19, 28], 2));