function convertUsdToBgn(input){ //create a function 
    const usd =  1.79549 //set variable USD to be = 1.79549 
    let bgn = input.shift() // set variable for BGN that could be changed depending requared amount
    let calculate = usd * bgn // set variable that, multiply usd * bgn 
    let preResult = calculate.toFixed(2) 
    let result = Number(preResult)  //  revert to number and print result  2 nubmer after 0 (0.00)
    console.log(result)
}
convertUsdToBgn(['20'])