function solve(input) {
    const flowers = input.shift().toLowerCase();
    const flowersCount = Number(input.shift());
    const budget = Number(input.shift());
    let price = 0;
    switch (flowers) {
        case 'roses':
            if (flowersCount > 80) {
                price = (flowersCount * 5) * 0.9;
            } else {
                price = (flowersCount * 5);
            }
            break;
        case "dahlias":
            if (flowersCount > 90) {
                price = (flowersCount * 3.80) * 0.85;
            } else {
                price = (flowersCount * 3.80);
            }
            break;
        case 'tulips':
            if (flowersCount > 80) {
                price = (flowersCount * 2.80) * 0.85;
            } else {
                price = (flowersCount * 2.80);
            }
            break;
        case 'narcissu':
            if (flowersCount < 120) {
                price = (flowersCount * 3) * 1.15;
            } else {
                price = (flowersCount * 3);
            }
            break;
        case 'gladiolu':
            if (flowersCount < 80) {
                price = (flowersCount * 2.50) * 1.2;
            } else {
                price = (flowersCount * 2.50);
            }
            break;
        default: console.log('We don\'t have this flower at the moment. We do apologize!');
        break;
    }
    if(budget >= price && flowers){
        let remainingBalance = budget - price;
        console.log(`"Hey, you have a great garden with ${flowersCount} ${flowers} and ${remainingBalance.toFixed(2)} leva left."`);
    }else{
        let needSum = price - budget
        console.log(`"Not enough money, you need ${Math.abs(needSum).toFixed(2)} leva more."`);
    }
}
solve(['Tulips', '88', '260'])