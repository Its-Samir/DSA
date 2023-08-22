function anotherFunction(arr, index1, index2) {
    let temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;
}

// in bubbleSort we always have to swap element
function bubbleSort(arr) {
    let t1 = performance.now();

    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length - (i + 1); j++) {
            console.log(arr)
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                //  anotherFunction(arr, j, j+1)
            }
        }
        console.log('One done')
    }
    return { arr, time: (performance.now() - t1) / 1000 };
}

console.log(bubbleSort([18, 5, 0, 8, -4, -7, 10, 3]));
// j = 0;
// [5,18,0,8]
// i = 1;
// [5,0,18,8]
// i = 2;
// [5,0,8,18]
// j = 1;
// [0,5,8,18]
// i=1;
// [0,5,8,18]
// j=2;
// [0,5,8,18]
// i=1

// (was trying recursion but don't know what complexity it would give)
function bubbleSort2(arr) {
    let t1 = performance.now();
    let j = 0;
    function innerFunction(input) {
        let i = 0;
        while (i < input.length - (j + 1)) {
            console.log(input)

            if (input[i] > input[i + 1]) {
                let temp = input[i];
                input[i] = input[i + 1];
                input[i + 1] = temp;
            }
            i++;
        }
        console.log('done');
        if (j >= input.length - 2) {
            return input;
        }
        j++;
        return innerFunction(input)
    }
    return { method: innerFunction(arr), time: (performance.now() - t1) / 1000 };
}

console.log(bubbleSort2([18, 5, 0, 8, -4, -7, 10, 3]));