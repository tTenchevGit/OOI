const solve = (input) => {
    let n = Number(input.shift());
    let dev2 = 0;
    let dev3 = 0;
    let dev4 = 0;
    for (let i = 1; i <= 1000; i++) {
        let num = Number(input.shift());
        if (num % 2 === 0) {
            dev2 += 1
        } 
        if(num % 3 === 0) {
            dev3 += 1
        } 
        if(num % 4 === 0){ 
            dev4 += 1
        }
    }


    const devP2 = dev2 / n * 100;
    const devP3 = dev3 / n * 100;
    const devP4 = dev4 / n * 100;


    console.log(` 2 ${devP2.toFixed(2)} %`);
    console.log(` 3 ${devP3.toFixed(2)} %`);
    console.log(` 4 ${devP4.toFixed(2)}  %`);
    

}
solve(['3', '3', '6', '4'])