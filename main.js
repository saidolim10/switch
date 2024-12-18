let body = document.querySelector('body')

function box() {
    let savol = prompt('Nechta qiyqiriq set zakaz qilmoqchisiz?')
    let narx

switch (savol) {
            case '1': narx = 45000 * 1;
            
            break;
            case '2': narx = 45000 * 2;
            
            break;
            case '3': narx = 45000 * 3;
            
            break;
            case '4': narx = 45000 * 4;
            
            break;
            case '5': narx = 45000 * 5;
            
            break;
            case '6': narx = 45000 * 6;
            
            break;
            case '7': narx = 45000 * 7;
            
            break;
            case '8': narx = 45000 * 8;
            
            break;
            case '9': narx = 45000 * 9;
            
            break;
            case '10': narx = 45000 * 10;
            
            break;
    
        default:
            'qaytadan kriting'
            break;
    }
    confirm(`${savol}ta Qiyqiriq setni narxi ${narx}ming som \n Zakaz qilmoqchimisiz`)
    if (confirm === true ) {
        alert('Zakaz qabul qlindi')
    } else {
        alert('Zakaz rad etildi')
    }
}