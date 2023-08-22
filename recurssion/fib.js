// fib
function fib(n){
    if (n <= 2) return 1;
    return fib(n-1) + fib(n-2);
}

console.log(fib(10))

// fib2
function fib2(num) {
    let a = 0, b = 1;
    let c = 0;
    function innerFunction(number) {
        if (number < 1) {
            return c;
        }
        c = a + b;
        b = a;
        a = c;
        return innerFunction(number - 1);
    }
    return innerFunction(num)
}

console.log(fib2(10));

// fib3
function fib3(num) {
    let a = 0, b = 1, c = 0;
    for(let i = 0; i < num; i++) {
        c = a + b;
        b = a;
        a = c;
    }
    return c;
}

console.log(fib3(10));