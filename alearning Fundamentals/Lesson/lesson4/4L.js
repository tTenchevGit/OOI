const solve = (input) => {
    const n = Number(input.shift());
    let sum = 0;
    for (let i = 0; i < n; i++){
        let num = Number(input.shift());
        sum +=num
    }
    console.log(sum);
}
solve([5, 10, 20, 5, 6, 5]);

