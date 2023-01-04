// Built-in Function in JS
// alert(), prompt(), confirm()

// Built-in Function in JS: String
// charAt(), slice(), split(), toString(), toLowerCase(), toUpperCase(), and many more...

// Built-in Function in JS: Math
// sin(), cos(), tan(), random(), round(), floor(), ceil(), log(), and many more...

// // Ex
// var nama = 'Alex';
// console.log(nama.charAt(2));

// var num = Math.random();
// console.log(num);

// function sum_two_number(a, b) {
//     var total;
//     total = a + b;

//     return total;
// }

// // Function Expression
// var sum_two_number = function(a, b) {
//     var total;
//     total = a + b;

//     return total;
// }

// sum_two_number(1, 2);
// alert(sum_two_number(10, 20));

// Find cube area
function findCubeArea(a, b) {
    var volumeA;
    var volumeB;
    var total;

    volumeA = a * a * a;
    volumeB = b * b * b;

    total = volumeA + volumeB;
    
    return total;
}

console.log(findCubeArea(10, 5));