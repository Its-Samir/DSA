//o(n)
function averagePair(arr, num) {
    if (arr.length === 0) {
        return false;
    }
    let start = 0;
    let lastIndex = arr.length - 1;
    while (start < lastIndex) {
        if ((arr[start] + arr[lastIndex]) / 2 > num) {
            lastIndex--;
        } else if ((arr[start] + arr[lastIndex]) / 2 < num) {
            start++;
        } else {
            return true;
        }
    }
    return false;
}

console.log(averagePair([1,3,3,5,6,7,10,12,19],6.5));