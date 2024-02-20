const sum = (a, b) => a + b;
 const multiply = (a, b) => a * b;
 const devide = (a, b) => a / b;
 const subtract = (a, b) => a - b;

function calculate(firstNumber, secondNumber, thirdNumber){
    let resultSubtract = multiply(firstNumber, secondNumber) - thirdNumber;
    return resultSubtract;
}

console.log(calculate(23,

    6,
    
    10))