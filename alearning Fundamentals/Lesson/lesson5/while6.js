function solve(input) {
    let n = Number(input.shift());
    let count = 0;
    let bigNum = Number.MIN_SAFE_INTEGER;
    while(n >= count){
        let num = Number(input.shift());
        count++;
        if(bigNum < num){
        bigNum = num;
    }
    }
    console.log(bigNum);
}
solve(['3', "140", "4", '85'])