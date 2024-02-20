const specialNumber = (numberS) => {
    if (numberS <= 0) {
        return 'Not a perfect number (positive integers only)';
    }
return calculateSpecialNum(numberS)
}

function calculateSpecialNum(numberS){
    let number = numberS
    let sum = 0
    let calculation = number / 2;
    while(number > 1){
        sum += calculation
        calculation = Math.ceil(calculation / 2);
        number =  Math.ceil(number / 2);
;    }
        if(sum === numberS){
    return 'We have a perfect number!'
        }else{
            return 'nope'
        }
}
console.log(specialNumber(6));