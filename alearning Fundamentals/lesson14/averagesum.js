function checkConditions(number) {
    let result = modifyNumber(number);
    let numberString = number.toString();
    if (numberString.length <= 6 && numberString[0] > 0) {
        return result;
    }

}

function modifyNumber(array) {
    let resultNumber = array.toString();
    let averageSum = 0;
    while ((averageSum / resultNumber.length) <= 5) {
        averageSum = 0
        for (let i = 0; i < resultNumber.length; i++) {
            averageSum += Number(resultNumber[i]) ;
            if(averageSum / resultNumber.length > 5){
                return resultNumber;
            }
        }
        resultNumber += 9;
        
    }
    return resultNumber;

}

console.log(checkConditions(5835));
