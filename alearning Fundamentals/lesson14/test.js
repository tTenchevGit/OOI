function sum(a, b) {
    return a + b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return b !== 0 ? a / b : 'Cannot divide by zero';
}

function subtract(a, b) {
    return a - b;
}

function reverseC(num) {
    let reverse = num.toString();
    let newNumber = '';
    for (let index = reverse.length - 1; index >= 0; index--) {
        newNumber += reverse[index];
    }
    return Number(newNumber);
}

function calculator(a, b, action) {
    let reversedA = reverseC(a);
    let reversedB = reverseC(b);
    switch (action) {
        case 'sum':
            return sum(reversedA, reversedB);
        case 'multiply':
            return multiply(reversedA, reversedB);
        case 'divide':
            return divide(reversedA, reversedB);
        case 'subtract':
            return subtract(reversedA, reversedB);
        default:
            return 'This action is not available. Simple calculator only';
    }
}

console.log(calculator(12, 12, 'multiply'));
