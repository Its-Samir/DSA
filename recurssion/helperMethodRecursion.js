// // collect all odd values
// function collectOddValues(arr){

//     let result = []

//     function helper(helperInput){
//         if(helperInput.length === 0) {
//             return;
//         }

//         if(helperInput[0] % 2 !== 0){
//             result.push(helperInput[0])
//         }

//         helper(helperInput.slice(1))
//     }

//     helper(arr)

//     return result;

// }

// console.log(collectOddValues([1, 2, 3 ,4, 5, 6]))

//without helper function
function collectOddValues(arr) {
    let newArr = []; //  remember that this newArr will be reinitialized everytime this function call itself, that's why we have to use concat
    if (arr.length === 0) {
        return newArr;
    }
    if (arr[0] % 2 !== 0) {
        newArr.push(arr[0]); /* inserting values in newArr, and we can keep the values by using concat (concat help us to get previous values) */
    }
    newArr = newArr.concat(collectOddValues(arr.slice(1)));
    return newArr;
}

console.log(collectOddValues([1, 2, 3, 4, 5, 6]))

// collectOddValues([1, 2, 3, 4]);
//     returns [1].concat(collectOddValues([2, 3, 4]));
//         returns [].concat(collectOddValues([3, 4]));
//             returns [3].concat(collectOddValues([4]));
//                 returns [].concat(collectOddValues([]));
//                     returns [];

// collectOddValues([1, 2, 3, 4]); -> finally returns [1, 3] from bottom calculation
//     returns [1].concat(collectOddValues([2, 3, 4])); -> [1].concat([3]) which is [1, 3]
//         returns [].concat(collectOddValues([3, 4])); -> [].concat([3]) which is [3]
//             returns [3].concat(collectOddValues([4])); -> [3].concat([]) which is [3]
//                 returns [].concat(collectOddValues([])); -> [].concat([]) which is empty array
//                     returns [];