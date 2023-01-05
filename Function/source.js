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
// function findCubeArea(a, b) {
//     var volumeA;
//     var volumeB;
//     var total;

//     volumeA = a * a * a;
//     volumeB = b * b * b;

//     total = volumeA + volumeB;
    
//     return total;
// }

// console.log(findCubeArea(10, 5));

// function add(a, b) {
//      return a + b;
// }

// function multiplication(a, b) {
//     return a * b;
// }

// // var a = parseInt(prompt('Input number a : '));
// // var b = parseInt(prompt('Input number b : '));
// // var total = add(a * 2, b * 2);

// var total = multiplication(add(2, 4), add(5, 6));

// console.log(total);

// function retw(a, b, c, d, e);

// retw(5, 10, 15, 'Hello', false); 

// function add() {
//     var total = 0;
    
//     for (var i = 0; i < arguments.length; i++) {
//         total += arguments[i];
//     }
//     return total;
// }

// var plus = add(1, 2, 3, 4);
// console.log(plus);

/* Refactoring */
// Before
function findCubeArea(a, b) {
    var volumeA;
    var volumeB;
    var total;

    volumeA = a * a * a;
    volumeB = b * b * b;

    total = volumeA + volumeB;
    
    return total;
}

// After
function findCubeArea(a, b) {
    return a * a * a +  b * b * b;
}

alert(findCubeArea(5, 10));
/* ================================== */