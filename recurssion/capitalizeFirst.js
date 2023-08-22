// 1
function capitalizeFirst(arr) {
    let newArr = [];
    function innerFunction(input) {
        if (input.length <= 0) {
            return newArr;
        }
        newArr.push(input[0].slice(0, 1).toUpperCase() + input[0].slice(1))
        return innerFunction(input.splice(1))
    }
    return innerFunction(arr);
}

console.log(capitalizeFirst(['hi', 'hello']));

//2 
function capitalizeFirst2(arr) {
    let newArr = [];
     if (arr.length <= 0) {
         return newArr;
     }
    return newArr = newArr.concat(arr[0].slice(0, 1).toUpperCase() + arr[0].slice(1), capitalizeFirst2(arr.splice(1)))
}

console.log(capitalizeFirst2(['hi', 'hello']));