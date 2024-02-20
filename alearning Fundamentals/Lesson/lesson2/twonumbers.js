const twoNumbers = (input) => {
    let firstNum = Number(input.shift());
    let secondNum = Number(input.shift());

    if (Number.isInteger(firstNum) && Number.isInteger(secondNum)) {
        if (firstNum > secondNum) {
            console.log(firstNum);
        } else {
            console.log(secondNum);
        }
    } else {
        console.log("One or both inputs are not integers.");
    }
}

twoNumbers(['-4', '-64']);