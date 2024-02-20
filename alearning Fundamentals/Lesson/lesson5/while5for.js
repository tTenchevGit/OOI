function solve(input) {
    let n = Number(input.shift());
    sum = 0;
    for(i = 1; i <= n; i++){
        let money = Number(input.shift());
        
        if(money >= 0){
            sum += money
            console.log(`Incereas: ${money.toFixed(2)}`)
        } 
        if(money < 0) {
            console.log(`invalid operation`)
            break;
        }
    }
    console.log(`Total: ${sum.toFixed(2)}`)


}
solve([5, 120,45.55, -100, 415])