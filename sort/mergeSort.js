// merge two sorted arrays by sorting them accordingly ([2,3,5], [0,1,4])
function mergeSort(...args) {
    let newArr = [];
    if (args.length <= 0) {
        return newArr;
    }
    let start1 = 0;
    let start2 = 0;
    
    // swap and push elements if condition is met and increase the counting/indexing variables (start1, start2) accordingly
    while (start1 < args[0].length || start2 < args[1].length) {
        if (args[0][start1] <= args[1][start2]) {
            newArr.push(args[0][start1])
            start1++;
        }
        if (args[1][start2] <= args[0][start1]) {
            newArr.push(args[1][start2])
            start2++;
        }
        if (start1 === args[0].length && args[1][start2] !== undefined) {
            newArr.push(args[1][start2])
            start2++;
        }
        if (start2 === args[1].length && args[0][start1] !== undefined) {
            newArr.push(args[0][start1])
            start1++;
        }
    }
    return newArr;
}

// merge function split an array into multiple arrays until arr.length <= 1
function merge(arr) {
    if (arr.length <= 1) {
        return arr;
    }
    // return mergeSort([arr[0]], merge(arr.slice(1))) till 8000 element it is running but after that the call stack getting exceeded

    // dividing the array
    let mid = Math.floor(arr.length / 2);

    // calling merge function for left side array
    let left = merge(arr.slice(0, mid))

    // calling merge function for right side array
    let right = merge(arr.slice(mid))

    // finally calling the above mergeSort function with the left and right argument
    return mergeSort(left, right);
}

console.log(merge([12, 5, 0, 2, -3, -10]));