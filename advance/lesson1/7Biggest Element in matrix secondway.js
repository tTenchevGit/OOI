function diagonalSums(input) {
    let result = []
    input.forEach(el => {
        el.forEach(x => {
        result.push(x)    
        });
    });
    console.log(Math.max(...result));
}
diagonalSums([[20, 50, 10],

[8, 33, 145]]);