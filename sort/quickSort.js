function pivot(arr, start = 0, end = arr.length - 1) {
    // swap function
    const swap = (arr, idx1, idx2) => {
        [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
    }

    // We are assuming the pivot is always the first element
    let pivot = arr[start];
    let swapIdx = start;

    // swap elements and increase swapIdx if condition is met
    for (let i = start + 1; i <= end; i++) {
        if (pivot > arr[i]) {
            swapIdx++;
            swap(arr, swapIdx, i);
        }
    }

    // Swap the pivot from the start to the swapIdx
    swap(arr, start, swapIdx);
    return swapIdx;
}

// quick sort function
function quickSort(arr, left = 0, right = arr.length - 1) {
    if (left < right) {

        // this will return the swap index
        let pivotIndex = pivot(arr, left, right) //3

        // for left side
        quickSort(arr, left, pivotIndex - 1);

        // for right side
        quickSort(arr, pivotIndex + 1, right);
    }
    return arr;
}


console.log(quickSort([9, 1, 2, 5, 3, 23]));