// 1
function isPalindrome(str) {
    let newStr = '';
    function innerFunction(input) {
        if (input.length < 1) {
            return ''
        }
        newStr = newStr.concat(input.slice(-1));
        innerFunction(input.slice(0, -1))
        return newStr === str;
    }
    return innerFunction(str);
}
console.log(isPalindrome('theonnoeht'));

// 2
function isPalindrome2(str) {
    return str.split('').reverse().join('') === str;
}

console.log(isPalindrome2('121'));