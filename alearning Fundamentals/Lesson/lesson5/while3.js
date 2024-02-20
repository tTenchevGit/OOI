function solve(input) {
    let command = input.shift();
    sum = 0;
    while(command !== 'Stop'){
        let num = Number(command)
        sum += num;
        command = input.shift();
    }
    console.log(sum);
}
solve([5, 5, 4, 'Stop', " "])