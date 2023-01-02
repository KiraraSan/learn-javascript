var loop = true;
while (loop) {
    // Player choice
    var p = prompt('Rock, Paper, Scissors');

    // Computer choice
    // Random number
    var comp = Math.random();

    if (comp < 0.34) {
        comp = 'Rock';
    } else if (comp >= 0.34 && comp < 0.67) {
        comp = 'Paper';
    } else {
        comp = 'Scissors'
    }

    console.log(comp);

    // Rules
    var result = '';

    if (p == comp) {
        result = 'Draw';
    } else if (p == 'Rock') {
        // if (comp == 'Paper') {
        //     result = 'Lose';
        // } else {
        //     result = 'Win';
        // }
        result = (comp == 'Paper') ? 'Lose' : 'Win';
    } else if (p == 'Paper') {
        result = (comp == 'Rock') ? 'Win' : 'Lose';
    } else if (p == 'Scissors') {
        result = (comp == 'Paper') ? 'Win' : 'Lose';
    } else {
        result = 'Invalid input [!]';
    }

    // Result
    alert('You : ' + p + '\nComp : ' + comp + '\n\nResult : ' + result);

    // Loop
    loop = confirm('Again?');
}

alert('Thank You!');