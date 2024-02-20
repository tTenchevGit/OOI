const evenOrOdd = (input) => {
    let num1 = Number(input.shift())
    if (Number.isInteger(num1) && num1 !== 0) {
        if (num1 % 2 === 0) {
            console.log('EVEN')
        } else {
            console.log('ODD')
        }
    } else {
        console.log('Not Integer, or it is equal to 0')
    }
}
evenOrOdd(['3.9'])