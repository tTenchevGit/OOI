const solve = (input) => {
    let product = input.shift();
    let town = input.shift();
    let quantity = Number(input.shift());
    let price = Number(input.shift());
    let sum = 0
    if (product === 'coffee') {
        if (town === 'Sofia') {
            sum = quantity * price;
        } else if (town === 'Plovdiv') {
            sum = quantity * price;
        } else {
            sum = quantity * price;
        }
    } else if (product === 'water') {
        if (town === 'Sofia') {
            sum = quantity * price;
        } else if (town === 'Plovdiv') {
            sum = quantity * price;
        } else {
            sum = quantity * price;
        }

    } else if (product === 'beer') {
        if (town === 'Sofia') {
            sum = quantity * price;
        } else if (town === 'Plovdiv') {
            sum = quantity * price;
        } else {
            sum = quantity * price;
        }
    } else if (product === 'sweets') {
        if (town === 'Sofia'){
            sum = quantity * price;
        } else if (town === 'Plovdiv') {
        sum = quantity * price;
        } else {
        sum = quantity * price;
        }
    } else {
        if (town === 'Sofia'){
            sum = quantity * price;
        } else if (town === 'Plovdiv') {
        sum = quantity * price;
        } else {
        sum = quantity * price;
    }
}
console.log(sum);
}
solve(['coffee', 'Plovdiv', '8', '0.50'])