const solve = (input) => {
    let n = Number(input.shift());
    for(i = 1; i <= n; i++){
        if(n % 2 === 0 &&  i % 2 === 0){
            console.log(`Current number ${i}. Cube ${Math.pow(i, 3)}`)
        } else{
            console.log(`Current number ${i}. Cube ${Math.pow(i, 3)}`)
        }
    }
} 

solve(['5']);