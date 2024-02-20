const sumDigits = (number) => {
    let numberToString = number.toString();
    let stringToStrings = numberToString.split('');
    let resultOdd = 0;
    let resultEven = 0;

    for (let i = 0; i < stringToStrings.length; i++) {
        if(stringToStrings[i] % 2 === 0){
            resultEven += Number(stringToStrings[i]);
        } else {
            resultOdd += Number(stringToStrings[i]);
        }
    }
    return `odd sum = ${resultOdd}, Even sum = ${resultEven}`;
}
console.log(sumDigits(3495892137259234))