const solve = (input) => {
    let fruit = input.shift().toUpperCase();
    let day = input.shift().toUpperCase();
    let qantity = Number(input.shift());
    let price = 0;
    if (day === 'M' || day === 'T' || day === 'W' || day === 'Tu' || day === 'F') {
        if (fruit === 'B') {
            price = qantity * 2.50;
        } else if (fruit === 'A') {
            price = qantity * 1.20;
        } else if (fruit === 'O') {
            price = qantity * 0.85;
        } else if (fruit === 'G') {
            price = qantity * 1.45;
        } else if (fruit === 'K') {
            price = qantity * 2.70;
        } else if (fruit === 'P') {
            price = qantity * 5.50;
        } else if (fruit === 'Gr') {
            price = qantity * 3.85;
        } else {
            console.log('error')
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
solve(['sdfs', 'sa', '2'])