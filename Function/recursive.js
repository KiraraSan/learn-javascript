function printNumber(n) {
    if (n === 0) return; // base case
    console.log(n);
    return printNumber(n - 1);
}

printNumber(10);

// non-recursive
// function factorial(n) {
//     var total = 1;
//     for (var i = 0; i > 0; i--) {
//         total *= i;
//     }
//     return total;
// }

// recursive
function factorial(n) {
    if (n === 0) return 1;
    return n * factorial(n - 1);
}

console.log(factorial(5));

