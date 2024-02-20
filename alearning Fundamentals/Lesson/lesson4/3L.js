const solve = (input) => {
    const name = input.shift();
    const control = Number(input.shift());
    const budget = Number(input.shift());
    let sum = 0;
    

    for (i = 0; i < name.length; i++) {
        let ch = name[i];
        if (ch === 'a' || ch === 'e' || ch === 'i' || ch === 'o' || ch === 'u' || ch === 'y') {
            sum += 3;
        } else {
            sum +=1;
        }
    }
    const result = sum * control;
    if(budget < result) {
        console.log(`"Cannot buy ${name}. Product value: ${result.toFixed(2)}"`); 
    }else {
        let short = result - budget
        console.log(`"${name} bought. Money left: ${Math.abs(short.toFixed(2))}"`); 
    }
}
solve(['milk', 1.4, 8])

