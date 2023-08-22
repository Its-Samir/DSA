// function countDown(num) {
//     if (num <= 0) {
//         console.log('Done counting');
//         return;
//     }
//     console.log(num);
//     num--;
//     countDown(num);
// }
// countDown(4);
// -----------------------------------------------------------------------------
// function sumRange(num) {
//     if (num === 1) return 1;
//     return num + sumRange(num - 1)
// }

// sumRange(4)
// sumRange(3) is
//   returns 3 + sumRange(3 - 1 = 2) is
//     returns 2 + sumRange(2 - 1) is
//       returns 1 cause of if statement
// so the calculation is from bottom,
// sumRange(3) is
//    returns 3 + 3; = 6
//      returns 2 + 1; = 3
//        returns 1; cause of if statement
// -----------------------------------------------------------------------------

let total = 1;
function factorial(num) {
    if(num <= 1) {
        console.log(total)
        console.log('done');
        return;
    }
    total = total * num;
    num--;
    factorial(num)
}

console.log(factorial(5));