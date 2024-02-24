function diagonalSums(input) {
    let result = []
    input.forEach(el => {
        result = el.concat(el)
    });
    console.log(Math.max(...result));
}
diagonalSums([[20, 50, 10],

[8, 33, 145]]);