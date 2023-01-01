var item = prompt('Input item : (Softdrink, Juice, Tea, Coffe');

switch (item) {
    case 'Softdrink':
        alert('Rp 10.000');
        break;

    case 'Juice':
        alert('Rp 15.000');
        break;
    
    case 'Tea':
        alert('Rp 5.500');
        break;
    
    case 'Coffe':
        alert('Rp 7.500');
        break;

    default:
        alert('Item invalid [!]')
        break;
}