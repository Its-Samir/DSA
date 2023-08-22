function prodOfArr(arr) {
    if (arr.length === 0) {
        return 1;
    }
    return arr[0] * prodOfArr(arr.slice(1));
}

console.log(prodOfArr([1, 2, 3, 4]))