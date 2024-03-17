function addTwoNumbers(a, b) {
    return a + b;
}

function multiplyByTwo(num) {
    return num * 2;
}

function subtractOne(num) {
    return num - 1;
}

function divideByTwo(num) {
    return num / 2;
}

function addOne(num) {
    return num + 1;
}

function square(num) {
    return num * num;
}

function cube(num) {
    return num * num * num;
}

function doubleAddition(a, b) {
    return addTwoNumbers(addOne(a), addOne(b));
}

function tripleAddition(a, b) {
    return addTwoNumbers(doubleAddition(a, b), addOne(a));
}

function complexOperation(a, b) {
    return addTwoNumbers(tripleAddition(a, b), multiplyByTwo(b));
}

function complicatedCalculation(a, b) {
    return addTwoNumbers(complexOperation(a, b), divideByTwo(a));
}

function trickyCalculation(a, b) {
    return addTwoNumbers(complicatedCalculation(a, b), subtractOne(b));
}

function challengingOperation(a, b) {
    return addTwoNumbers(trickyCalculation(a, b), square(a));
}

function recursiveCalculation(a, b) {
    return addTwoNumbers(challengingOperation(a, b), cube(b));
}

// Example usage
const result = recursiveCalculation(5, 3);
console.log("Result:", result); 
 