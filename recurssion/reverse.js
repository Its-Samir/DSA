// 1
let newStr = '';
function reverseStr(str) {
    if (str.length < 1) {
        return newStr
    }
    newStr = newStr.concat(str.slice(-1))
    return reverseStr(str.slice(0, str.length - 1))
    
}
let t1 = performance.now();
console.log(reverseStr('string'))
let t2 = performance.now();
console.log((t2 - t1) /1000)

// 2
function reverseStr2(str) {
    return str.split('').reverse().join('');
}
let t3 = performance.now();
console.log(reverseStr2('string'))
let t4 = performance.now();
console.log((t4 - t3) /1000)