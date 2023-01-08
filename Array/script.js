// var animal = [];
// animal = ['Cat', 'Dog', 'Panda', 'Fox', 'Cow'];

// console.log(animal[4]);
// console.log(animal.length);

// var arr = ['String', 1, true];

// var func = function() {
//     alert('Hello, World!');
// }

// var arr2 = ['String', 1, true, func];

// // Multidimention array
// var arr3 = ['String', 1, true, func, [2, 4, 6]];
// console.log(arr3[4][1]);

// =================================================
// // Input array
// var array = [];
// array[0] = 'Alex';
// array[1] = 19;
// array[2] = true;

// console.log(array);

// // Delete array
// var array = ['Nama'];
// array[0] = undefined;
// console.log(array);

// // Print array
// var array = ['String', 'AnotherString', 'StringString'];
// for (var i = 0; i < array.length; i++) {
//     console.log('Name in index ' + i + ' : ' + array[i]);
// }

// =============================================================
// Method
// lenght, join, push, pop, shitf, unshift, slice, splice, forEach, map, sort, filter, find

// 1. Join
// var array = ['Name1', 'Name2', 'Name3', 'Name4', 'Name5'];
// console.log(array.join(' - '));n

// 2. Push & Pop // Input and delete from tail
// array.push('Name4', 'Name 5');
// array.pop();
// console.log(array.join(' - '));

// 3. Unshift & Shift // Input and delete from head
// array.unshift('Name6');
// array.shift();
// console.log(array.join(' - '));

// 4. Splice
// spile(indexHead, howManyDeleted, newElement1, newElement2, ....);
// array.splice(2, 0, 'Name4');
// array.splice(1, 2, 'Name4', 'Name5');
// console.log(array.join(' - '));

// 5. Slice
// slice(indexHead, IndexTail);
// var array2 = array.slice(1, 3);
// console.log(array.join(' - '));
// console.log(array2.join(' - '));

// 6. foreach
// var num = [1, 2, 3, 4, 5];
// var nama = ['Name1', 'Name2', 'Name3'];

// num.forEach(function(n) {
//     console.log(n)
// })

// alternative (function expression)
// var print = function(n) {
//     console.log(n);
// }

// num.forEach(print);

// nama.forEach(function(i, j) {
//     console.log('No ' + j + '. Name : ' + i);
// })

// 7. Map // return value
// var num = [1, 2, 3, 4, 5];
// var num2 = num.map(function(e) {
//     return e * 2;
// })

// console.log(num2.join(' - '));

// 8. Sort
// var num = [4, 3, 20, 5, 7, 2, 9, 10, 1, 8, 6];
// console.log(num.join(' - ')); 
// // num.sort();
// num.sort(function(a, b) {
//     return a - b;
// })
// console.log(num.join(' - ')); 

// 9. Filter & Find
var num = [4, 3, 20, 5, 7, 2, 9, 10, 1, 8, 6];
// var num2 = num.filter(function(e) {
//     // return e == 5;
//     return e > 5;
// })

var num2 = num.find(function(e) {
    // return e == 5;
    return e > 5;
})
console.log(num2);