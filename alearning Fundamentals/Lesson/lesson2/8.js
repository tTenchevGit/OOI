const money = (input) => {
    const priceOfHollyday = Number(input.shift());
    const pNum = Number(input.shift());
    const dollNum = Number(input.shift());
    const tedyBearNum = Number(input.shift());
    const mNum = Number(input.shift());
    const truckNum = Number(input.shift());
    let pPrice = 2.60;
    let dollPrice = 3;
    let tedyBearPrice = 4.10;
    let mPrice = 8.20;
    let truckPrice = 2;
    let quantiti = pNum * pPrice + dollPrice * dollNum + tedyBearNum * tedyBearPrice+ mNum * mPrice + truckNum * truckPrice;
    let priceAll = quantiti * 0.9;
    let priceAfter = priceAll * 0.75;
    let priceAllH = Math.abs(priceAll - priceOfHollyday);
    let priceAfterH = Math.abs(priceAfter - priceOfHollyday);
    if (quantiti > 50 && priceAfter >= priceOfHollyday) {
        console.log(`"Yes! ${priceAfterH.toFixed(2)} lv left"`);
    } else if(quantiti > 50 && priceAfter <= priceOfHollyday) {
        console.log(`"Not enough money ${priceAfterH.toFixed(2)} lv NEED IT"`);
    } else if (quantiti < 50 && priceAll >= priceOfHollyday){
        console.log(`"Yes! ${priceAllH.toFixed(2)} lv left"`);
    } else {(quantiti < 50 && priceAll <= priceOfHollyday) 
        console.log(`"Not enough money ${priceAllH.toFixed(2)} lv NEED IT"`);
    }
}
money([1580, 20, 25, 30, 50, 10])