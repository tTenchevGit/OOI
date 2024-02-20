function solve(input) {
    let n = Number(input.shift());
    let sum = 0;
    for(i = 1; i <= n; i++){
        sum += (i * i)
        console.log(sum)
    }
}
solve([7]);