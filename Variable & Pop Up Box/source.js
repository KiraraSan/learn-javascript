// Data Types
// number, string, boolean, object, function, undefined


/* pop op box */
// alert('Hello, World!');
// prompt('Input name : ');
// confirm('Are you sure?');
/* pop up box */

// var x;
// x = 20 + 30;

// var name = prompt('Input name : ');
// (x % 2 == 0) ? 'true' | 'false';

// var name = 'Alex',
//     age = 19,
//     graduate = false;

// console.log('Hello, World!');
// console.log(name);

// var test = confirm('Are you sure?');
// if (test === true)
//     alert('OK...');
// else
//     alert('Cancel [!]');

alert('Welcome');
var loop = true;

while (loop) {
    var nama = prompt('Input name : ');
    alert('Hello' + " " + nama);

    loop = confirm('Again?');
}

alert('Thanks');