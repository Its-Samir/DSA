function insertionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (i + 1 < arr.length) {
            for (let j = i + 1; j > 0; j--) {
                console.log('here');
                let temp = arr[j];
                if (arr[j] < arr[j - 1]) {
                    arr[j] = arr[j - 1];
                    arr[j - 1] = temp;
                }
            }
        }
    }
    return arr;
}

console.log(insertionSort([ 5, 4, 3, 1, 2 ]));