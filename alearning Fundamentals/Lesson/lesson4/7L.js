const solve = (input) => {
    let n = Number(input.shift());
    let rightSide = 0;
    let leftSide = 0;
    for(let i = 1; i <= n * 2; i++){
        let num = Number(input.shift());
        if(i <= n){
            leftSide += num
        } else{
            rightSide += num
        }
    }
    if(leftSide === rightSide){
        let result = leftSide + rightSide;
        console.log(`'YES, SUN = ${result}'`);
    } else {
        let result = leftSide - rightSide;
        console.log(`'No, Diff = ${Math.abs(result)}'`);
    }
} 
solve([2, 10, 90, -50, 50]);