const solve = (input) => {
    const n = Number(input.shift());
    let maxNum =  Number.MIN_VALUE;
    let minNum = Number.MAX_SAFE_INTEGER;
    for(i = 0; i < n; i++){
        let num = Number(input.shift());
        if(num < minNum){
            minNum = num
        }
        if (num > maxNum){
            maxNum = num
        }
    }
    console.log(maxNum);
    console.log(minNum);
}
solve([5, 10, 20, 5, 6, 5]);

