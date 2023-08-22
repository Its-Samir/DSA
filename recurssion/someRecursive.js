// 1
function someRecursive(arr, cb) {
    if (arr.length <= 0) {
        return false;
    }
    if (cb(arr[0])) {
        return true;
    }

    return someRecursive(arr.splice(1), cb)
}

console.log(someRecursive([4, 6, 8], val => val > 10));

// 2
function someRecursive2(arr, cb) {
    return arr.length > 0 ? cb(arr[0]) ? true : someRecursive2(arr.splice(1), cb) : false;
}

console.log(someRecursive2([4, 6, 8], val => val > 10));