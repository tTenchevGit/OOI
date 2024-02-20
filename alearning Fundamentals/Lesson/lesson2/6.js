const budget = (input) => {
    let filmBudget = Number(input.shift());
    let numberOfStat = Number(input.shift());
    let priceFor1Dress = Number(input.shift());
    let decore = filmBudget * 0.1;
    const discount = numberOfStat > 150 ? (priceFor1Dress * 0.9) : priceFor1Dress;
    let fullPrice = numberOfStat * discount + decore;
    if(fullPrice > filmBudget){
        let short = fullPrice - filmBudget;
        console.log("Not enough money!");
        console.log(`"Wingard needs ${short.toFixed(2)} leva more."`);
    } else if(filmBudget >= fullPrice){
        let additional = filmBudget -fullPrice;
        console.log("Action!");
        console.log(`"Wingard starts filming with ${additional.toFixed(2)} leva left."`);
    }
}
budget(['9587.88', '222', '55.68'])