const checkPalindromes = (numbers) => {
    let results = [];

    for (let i = 0; i < numbers.length; i++) {
        let numberToStringi = numbers[i].toString();
        let reversedString = numberToStringi.split('').reverse().join('');
        if(numberToStringi === reversedString){
        results.push(true);
    } else{
        results.push(false);
    }
}

    return results.join(' ');
}

console.log(checkPalindromes([32, 2, 232, 1010]));
