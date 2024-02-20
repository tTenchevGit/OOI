function solve(input) {
    let n = Number(input.shift());
    let sum = 0;
    let deposit = 1;
    while (deposit <= n) {
        let money = Number(input.shift());
        //deposit++
        // if (money >= 0) {
        //     sum += money
        //     console.log(`Incereas: ${money.toFixed(2)}`)
        // }
        if (money < 0) {
            console.log(`invalid operation`)
            break;
        }
        sum += money
        console.log(`Incereas: ${money.toFixed(2)}`)
        deposit++
    }
    console.log(`Total: ${sum.toFixed(2)}`)
}
solve([5, 120, 45.55, -100, 45])