const MatrixNxN = (num) => {
    let number = num;
    let result = [];
    let finalResult = [];
    for (let i = 0; i < number; i++) {
        result.push(number);
    }
    for (let j = 0; j < number; j++) {
        finalResult.push(result.join(' '));
    }
    return finalResult.join('\n')
}

console.log(MatrixNxN(7)); 
