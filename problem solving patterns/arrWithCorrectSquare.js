// time complexity o(n^2) (Quadratic)

function arrWithCorrectSquare(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false;
    }
    for (let i = 0; i < arr1.length; i++) {
        let correctIndex = arr2.indexOf(arr1[i] ** 2);
        if (correctIndex === -1) {
            return false;
        }
        console.log(arr2)
        arr2.splice(correctIndex, 1);
    }
    return true;
}

console.log(arrWithCorrectSquare([1, 2, 3], [1, 9, 4]))