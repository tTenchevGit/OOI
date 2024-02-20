const solve = (input) => {
    let years = Number(input.shift());
    let priceW = Number(input.shift());
    let pricePerT  = Number(input.shift());
    let saveM = 0;
    let toys = 0;
    let additional = 10
    for(let i = 1; i <= years; i++){
        if(i % 2 === 0){
            saveM += additional - 1
            additional += 10
        } else{
            toys += 1
        }
    }
    let toysM = toys * pricePerT;
    let result = (toysM + saveM);
    if(result > priceW){
        let result1 = result - priceW;
        console.log(`'Yes!  ${result1.toFixed(2)}'`);
    } else {
        let result1 = result - priceW;
        console.log(`'NO!!  ${Math.abs(result1.toFixed(2))}'`);
    }
} 
solve([2, 0, 6]);