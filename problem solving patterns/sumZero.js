// time complexity o(n^2)
// space complexity o(1)
function sumZero(arr) {
    for (let i = 0; i < arr.length - i; i++) {
        for (let j = i + 1; j < arr.length - i; j++) {
            if (arr[i] + arr[j] === 0) {
                return [arr[i], arr[j]]
            }
        }
    }
    return false;
}

console.log(sumZero([-1, -2, 3, 0, -3, -1, 5]))

// for this array should be sorted
// time complexity o(n)
// space complexity o(1)
function sumZero2(arr) {
   // pointer pattern approach
    let leftIndex = 0;
    let rightIndex = arr.length - 1;
    while (leftIndex < rightIndex) {
        let sum = arr[leftIndex] + arr[rightIndex];
        if (sum === 0 ) {
            return [arr[leftIndex], arr[rightIndex]];
        } else if (sum > 0 ) {
            rightIndex--;
        } else {
            leftIndex++;
        }
    }
}

console.log(sumZero2([-2, -1, 0, 2, 4, 5]));