for (var i = 1; i <= 10; i++) {
    if (i <= 6 && i !== 5) {
        console.log('Hello, World! ' + i + ' TRUE');
    } else if (i === 5 || i === 8 || i === 10) {
        console.log('Hello, World! ' + i + ' OUT');
    } else {
        console.log('Hello, World! ' + i + ' FALSE');
    }   
}
 
/* OOD NUMBER CHECKING */
// var num = prompt('Input number');

// if (num % 2 == 0) {
//     alert(num + ' NOT ODD');
// } else if (num % 2 == 1) {
//     alert(num + ' IS ODD');
// } else {
//     alert('Number invalid [!]');
// }
