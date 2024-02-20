function solve(input) {
    let ammountAvailable = Number(input.shift());
    let gender = input.shift();
    let age = Number(input.shift());
    let sport = input.shift();
    let price = 0;
    if (gender === 'MAN') {
        switch (sport) {
            case 'Gym':
                price += 42;
                break;
            case 'Boxing':
                price += 41;
                break;
            case 'Yoga':
                price += 45;
                break;
            case 'Zumba':
                price += 34;
                break;
            case 'Dances':
                price += 51;
                break;
            case 'Pilate':
                price += 39;
                break;
        }
    } else {
        switch (sport) {
            case 'Gym':
                price += 35;
                break;
            case 'Boxing':
                price += 37;
                break;
            case 'Yoga':
                price += 42;
                break;
            case 'Zumba':
                price += 31;
                break;
            case 'Dances':
                price += 53;
                break;
            case 'Pilate':
                price += 37;
                break;
        }
    }
    if (age <= 19) {
        price *= 0.8;
    }
    if (price <= ammountAvailable) {
        console.log(`You purchased a 1 month pass for ${sport}`)
    } else {
        let diff = Math.abs(price - ammountAvailable)
        console.log(`"You don't have enough money! You need ${diff.toFixed(2)} more.`)
    }
}
solve(['20', "f", "15", "Yoga"])