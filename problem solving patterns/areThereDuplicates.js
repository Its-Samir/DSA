function areThereDuplicates(...arg) {
  // good luck. (supply any arguments you deem necessary.)

  //o(n)
  // let frequency = {};
  // for (let val of arg) {
  //     if (frequency[val] > 0) {
  //         return true;
  //     }
  //     frequency[val] = 1;
  // }
  // return false;
  //o(n log n)
  return new Set(arg).size !== arg.length;
}

console.log(areThereDuplicates(1, 2, 2, 8));