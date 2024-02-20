const solve = (input) => {
    let fruit = input.shift().toUpperCase();
    let day = input.shift().toUpperCase();
    let qantity = Number(input.shift());
    let price = 0;
    if (day === 'M' || day === 'T' || day === 'W' || day === 'Tu' || day === 'F') {
        switch (fruit) {
            case 'B': price = qantity * 2.50;
                break;
            case 'A': price = qantity * 1.20;
                break;
            case 'O': price = qantity * 0.85;
                break;
            case 'G': qantity * 1.45;
                break;
            case 'K': qantity * 2.70;
                break;
            case 'P': qantity * 5.50;
                break;
            case 'GR': qantity * 3.85;
            default: console.log('error');
            break;
        }
    } else if (day === 'S' || day === 'SA') {
    if (fruit === 'B') {
        price = quantity * 2.70;
    } else if (fruit === 'A') {
        price = qantity * 1.25;
    } else if (fruit === 'O') {
        price = qantity * 0.90;
    } else if (fruit === 'G') {
        price = qantity * 1.60;
    } else if (fruit === 'K') {
        price = qantity * 3.00;
    } else if (fruit === 'P') {
        price = qantity * 5.60;
    } else if (fruit === 'Gr') {
        price = qantity * 4.20;
    } else {
        console.log('error')
    }
} else if(price !== 0){
    console.log(price.toFixed(2))
} else{
    console.log('error')
}
}
solve(['asfasf', 'T', '3'])