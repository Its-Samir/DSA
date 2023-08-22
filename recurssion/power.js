function power(base, exponent) {
    if (exponent === 0) {
        return 1;
    }
    return base * power(base, exponent - 1);
}

// power(2, 4); 16
//     returns 2 * power(2, 3); 2 * 8
//         returns 2 * power(2, 2); 2 * 4
//             returns 2 * power(2, 1); 2 * 2
//                 returns 2 * power(2, 0); 2* 1
//                     return 1;
console.log(power(2, 4));