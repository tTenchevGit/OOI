function solve(input) {
    let n = Number(input.shift());
    let printN = 1;
    while (n >= printN) {
        console.log(printN)
        printN = printN * 2 + 1;
    }

}
solve([10])