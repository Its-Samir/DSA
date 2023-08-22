function capitalize(arr) {
    let newArr = [];
    if (arr.length <= 0) {
        return newArr;
    }
    return newArr = newArr.concat(arr[0].toUpperCase(), capitalize(arr.splice(1)));
}

console.log(capitalize(['hi', 'this', 'is', 'a', 'text']));