// in selection sort we can put condition before swapping element, so that we can avoid unnecessary swapping
function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let temp = arr[i]
        let index = i;

        for (let j = i; j < arr.length - 1; j++) {
            if (arr[j + 1] < arr[index]) {
                index = j + 1;
            }
        }
        if (temp !== arr[index]) { // here we can avoid if there are same value of temp and arr[index]
            arr[i] = arr[index];
            arr[index] = temp;
        }
    }
    return arr;
}

console.log(selectionSort([12, 0, -7, 5, 4, 3, 1, 2 ]));