function solve(input) {
    let start = Number(input.shift());
    let end = Number(input.shift());
    let devider = Number(input.shift());
    let sum = 0
    for(i = start; i <= end; i++){
        if(i % devider === 0){
            sum += i
        } 
    }
    console.log(sum);
}
solve([61, 125, 25]);