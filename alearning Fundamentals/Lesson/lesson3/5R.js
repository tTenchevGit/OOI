function solve(input) {
    const budget = Number(input.shift())
    const season = input.shift()
    const count = Number(input.shift())
    let price = 0
    switch (season) {
        case "Spring":
            if (count <= 6) {
                price = 3000 * 0.9;
            } else if (count >= 7 && count <= 11) {
                price = 3000 * 0.85;
            } else {
                price = 3000 * 0.75;
            }
            break;
        case "Summer":
            if (count <= 6) {
                price = 4200 * 0.9;
            } else if (count >= 7 && count <= 11) {
                price = 4200 * 0.85;
            } else {
                price = 4200 * 0.75;
            }
            break;
        case "Autumn":
            if (count <= 6) {
                price = 4200 * 0.9;
            } else if (count >= 7 && count <= 11) {
                price = 4200 * 0.85;
            } else {
                price = 4200 * 0.75;
            }
            break;
        case "Winter":
            if (count <= 6) {
                price = 2600 * 0.9;
            } else if (count >= 7 && count <= 11) {
                price = 2600 * 0.85;
            } else {
                price = 2600 * 0.75;
            }
            break;
        default: preice = 0;
    }
    if((season === "Spring" || season === "Summer" || season === "Winter") && count % 2 === 0){
        price = price * 0.95 
    }
    if(budget >= price){
        let diff = budget - price;
        console.log(`"Yes! You have ${diff.toFixed(2)} leva left."`);
    }else{
        let need = price - budget;
        console.log(`"Not enough money! You need ${Math.abs(need).toFixed(2)} leva."`);
    }
}
solve(['2000', 'Winter', '13'])